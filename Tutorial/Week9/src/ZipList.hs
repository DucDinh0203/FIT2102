{-# LANGUAGE NoImplicitPrelude, InstanceSigs #-}

module ZipList where

import           Base
import           Functor
import           Applicative
import           Traversable
import           Prelude                        ( repeat )

newtype ZipList a = ZipList {getZipList :: [a]}
    deriving (Show)

-- | Map a function over the ZipList
-- EXERCISE 5: Implement fmap for ZipList
--
-- >>> (+1) <$> ZipList [1,2,3,4]
-- ZipList {getZipList = [2,3,4,5]}
instance Functor ZipList where
    (<$>) :: (a -> b) -> ZipList a -> ZipList b
    (<$>) = undefined


-- | (<*>) applies each function in the first ZipList to each value in the second ZipList
--
-- >>> pure (+5) <*> ZipList [1,2,3]
-- ZipList {getZipList = [6,7,8]}
--
-- >>> ZipList [(+1), (+2), (+3)] <*> ZipList [1,2,3]
-- ZipList {getZipList = [2,4,6]}
instance Applicative ZipList where
    pure :: a -> ZipList a
    pure = ZipList . repeat
    -- pure x = ZipList (repeat x)

    (<*>) :: ZipList (a -> b) -> ZipList a -> ZipList b
    (<*>) = undefined

-- | Write instance for ZipList as a foldable.
--
-- >>> getSum $ foldMap Sum (ZipList [1..10])
-- 55
instance Foldable ZipList where
    foldMap :: (Monoid m) => (a -> m) -> ZipList a -> m
    foldMap = undefined


-- $setup
-- >>> import Prelude (mod)
-- >>>  :{
--    safeMod _ 0 = Nothing
--    safeMod numerator divisor = Just $ mod numerator divisor
-- :}
--
-- | Write instance for ZipList as a traversable/
-- /Hint/: It should be similar to traverse for a list!
-- >>> traverse (safeMod 5) (ZipList [5,10,15])
-- Just (ZipList {getZipList = [0,5,5]})
-- >>> traverse (safeMod 5) (ZipList [0,1,2])
-- Nothing
instance Traversable ZipList where
    traverse :: (Applicative f) => (a -> f b) -> ZipList a -> f (ZipList b)
    traverse = undefined
