{-# LANGUAGE NoImplicitPrelude, InstanceSigs #-}
-- | This module implements the 'Foldable' and 'Traversable' instances for some
-- recursive types.
--
--  * A 'Foldable' is a structure that can be reduced to a single element by a
--    function.
--
--  * A 'Traversable' is a structure that can be traversed using a function
--    which produces an effect.
module Traversable where

import           Base
import           Functor
import           Applicative
import           Folds
import           ExercisesW8

-- $setup
-- >>> import Data.Semigroup
-- >>> sieve = (\x -> if even x then Just x else Nothing)
--
-- List monoid under concatenation.
-- >>> :{
-- newtype MList a = MList { elems :: [a] }
-- instance Semigroup (MList a) where
--    (<>) (MList l) (MList m) = MList (l ++ m) -- Concatenation (mappend)
-- instance Monoid (MList a) where
--    mempty = MList []            -- Identity
-- :}

-- | A 'Foldable' is a structure which can be reduced to a single value given a
-- function.
--
-- /Hint/: Use the following /folding/ function.
--
-- > mconcat :: (Monoid m) => [m] -> m
--
-- /Hint/: Use the following "Nil."
--
-- > mempty :: Monoid a => a
class Foldable f where
  foldMap :: (Monoid m) => (a -> m) -> f a -> m

-- | A 'Traversable' is a structure which can be /traversed/ while applying an
-- effect. Basically, it is a 'Foldable' with a 'Functor' instance.
--
-- /Hint/: You have to traverse __and__ apply an effect.
class (Functor t, Foldable t) => Traversable t where
  traverse :: (Applicative f) => (a -> f b) -> t a -> f (t b)

-- | Given a list with non-monoidal elements, and a function to put them into
-- a monoid, fold the list into the monoid.
--
-- We have to use a "monoid under addition."
--
-- >>> getSum $ foldMap Sum [1..10]
-- 55
--
-- >>> getProduct $ foldMap Product [1..10]
-- 3628800
--
-- MList is also a monoid under concatenation (append).
--
-- >>> elems $ foldMap MList [[1..10], [11..20]]
-- [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
instance Foldable [] where
    foldMap :: (Monoid m) => (a -> m) -> [a] -> m
    foldMap = undefined


-- | Traverse a list while producing an effect.
--
-- /Hint/: use the 'sequence' function you implemented in week 8 (see
-- ExercisesW8.hs).
--
-- >>> traverse sieve [2, 4, 6]
-- Just [2,4,6]
--
-- >>> traverse sieve [2, 4, 7]
-- Nothing
instance Traversable [] where
    traverse :: Applicative f => (a -> f b) -> [a] -> f [b]
    traverse = undefined

-- | Write instance for Maybe as a foldable. You can think of it as folding over a list of 0 or 1 elements
--
-- >>> getSum $ foldMap Sum Nothing
-- 0
--
-- >>> getProduct $ foldMap Product (Just 5)
-- 5
--
instance Foldable Maybe where
    foldMap :: (Monoid m) => (a -> m) -> Maybe a -> m
    foldMap f Nothing = mempty 
    foldMap f (Just a) = f a

-- | Traverse a Maybe
--
-- >>> traverse (\x -> [x, x+1]) (Just 5)
-- [Just 5,Just 6]
--
-- >>> traverse (\x -> [x, x+1]) Nothing
-- [Nothing]
--
instance Traversable Maybe where
    traverse :: Applicative f => (a -> f b) -> Maybe a -> f (Maybe b)
    traverse _ Nothing = pure Nothing
    traverse f (Just a) = undefined 

{-
    ******************** OPTIONAL **************************8
-}
-- Now unto rose trees.

-- | Fold a RoseTree into a value.
--
-- >>> getSum $ foldMap Sum (Node 7 [Node 1 [], Node 2 [], Node 3 [Node 4 []]])
-- 17
--
-- >>> getProduct $ foldMap Product (Node 7 [Node 1 [], Node 2 [], Node 3 [Node 4 []]])
-- 168
--
-- /Hint/: use the Monoid's 'mempty', 'mappend' and 'mconcat'.
instance Foldable RoseTree where
    foldMap :: (Monoid m) => (a -> m) -> RoseTree a -> m
    foldMap = undefined


-- | Traverse a 'RoseTree' while producing an effect.
--
-- >>> traverse sieve (Node 4 [Node 6 []])
-- Just (Node 4 [Node 6 []])
--
-- >>> traverse sieve (Node 4 [Node 6 [], Node 7 []])
-- Nothing
--
-- /Hint/: follow the types, use type holes to try to figure out what goes where.
--
-- /Hint (spoiler!)/: pattern match on Node to pull out the value and the list
-- of child rosetrees then, you need to lift (as discussed in week 8) the
-- 'Node' constructor over (the traversing function applied to the value) and
-- (the result of traversing a function over the list of child rosetrees).
--
-- /Hint (more spoiler!)/: the function you traverse over the child rosetrees,
-- will itself be traversing a function over a rosetree.
--
-- Note: if even after reading all the hints and spoilers you are still
-- completely mystified then write down questions for your tutor and your best
-- approximation in English of what you think needs to happen in English.
instance Traversable RoseTree where
    traverse :: Applicative f => (a -> f b) -> RoseTree a -> f (RoseTree b)
    traverse = undefined
