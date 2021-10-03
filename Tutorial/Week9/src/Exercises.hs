{-# LANGUAGE NoImplicitPrelude #-}
module Exercises where

import           Traversable
import           Base hiding (maybe)
import           Applicative
import           Functor
import           ZipList
import           Parser
import           ExercisesW8
import           Folds

import           Data.Tuple                     ( snd )

-- | Write out all the steps to evaluate `transpose [[1,2], [3,4]]`
transpose :: [[a]] -> [[a]]
transpose = getZipList . traverse ZipList
--
--  | Evaluate the expression
--
--
--  | First evaluate the traverse using sequence, you should then expand the expression to a foldr...
--
--
--  | Evaluate first iteration of foldr (this should involve a liftA2):
--
--
--  | Evaluate second iteration of foldr:
--  (this should involve a liftA2 and use the result from before)
--
--
--  | Evaluate full expression
--
--

-- | Write a function that parses the given string (fails otherwise).
--
-- /Hint/: Use traverse...
--
-- >>> parse (string "hello") "hello bob"
-- Just (" bob","hello")
-- >>> parse (string "hey") "hello bob"
-- Nothing
string :: String -> Parser String
string = undefined

-- | Return a parser that tries the first parser for a successful value, then:
--
--   * if the first parser succeeds then use this parser; or
--
--   * if the first parser fails, try the second parser.
--
-- >>> parse (is 'a' ||| is 'c') "abc"
-- Just ("bc",'a')
--
-- >>> parse (is 'a' ||| is 'c') "cba"
-- Just ("ba",'c')
-- 
-- >>> parse (is 'a' ||| is 'c') "123"
-- Nothing
-- 
(|||) :: Parser a -> Parser a -> Parser a
p1 ||| p2 = undefined


-- | Ignores the first value, and puts the second value in a context
--
-- >>> Just 5 $> 1
-- Just 1
-- >>> [1,2,3,4] $> 3
-- [3,3,3,3]
($>) :: Functor f => f b -> a -> f a
($>) = undefined

infix 4 $>

-- | Parse the string "Nothing", if succeeds return Nothing
--
-- /Hint/: Use string and $>
-- >>> parse nothing "something"
-- Nothing
-- >>> parse nothing "Nothing"
-- Just ("",Nothing)
nothing :: Parser (Maybe a)
nothing = undefined

-- | Parse the string "Just ", followed by the given parser
--
-- >>> parse (just int) "Just 1"
-- Just ("",Just 1)
-- >>> parse (just int) "Nothing"
-- Nothing
just :: Parser a -> Parser (Maybe a)
just = undefined

-- | Parse a 'Maybe' which is either Just a | Nothing
-- /Hint/: Use ||| and functions you wrote previously!
-- >>> parse (maybe int) "Just 1"
-- Just ("",Just 1)
-- >>> parse (maybe int) "Nothing"
-- Just ("",Nothing)
-- >>> parse (maybe int) "Something Else"
-- Nothing
maybe :: Parser a -> Parser (Maybe a)
maybe = undefined


-- | Parse an array of length less then or equal to n
-- /Hint/: Use foldr, parseArray and |||
-- >>> parse (innerArray 3) "[1,2,3,4,5]"
-- Nothing
-- >>> parse (innerArray 10) "[1,2,3,4,5]"
-- Just ("",[1,2,3,4,5])
innerArray :: Int -> Parser [Int]
innerArray = undefined

-- | Parse a sequence of arrays of length less then or equal to 3
-- /Hint/: Use traverse, parse and innerArray
--
-- >>> parseValidArrays ["[1,2]", "[1,2,3]", "[1]", "[]"]
-- Just [("",[1,2]),("",[1,2,3]),("",[1]),("",[])]
-- >>> parseValidArrays ["[1,2]", "[1,2,3]", "[1]", "[]", "[1,2,3,4]"]
-- Nothing
parseValidArrays :: [String] -> Maybe [(String, [Int])]
parseValidArrays = undefined

-- | Sum the values of a sequence of arrays of length less then or equal to 3
-- /Hint/: Use nestedMap and parseValidArrays
--
-- >>> parseAndSum ["[1,2]", "[1,2,3]", "[1]", "[]"]
-- Just [3,6,1,0]
-- >>> parseAndSum ["[1,2]", "[1,2,3]", "[1]", "[]", "[1,2,3,4]"]
-- Nothing
parseAndSum :: [String] -> Maybe [Int]
parseAndSum = undefined
