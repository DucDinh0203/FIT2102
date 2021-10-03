{-# LANGUAGE CPP #-}
{-# LANGUAGE NoRebindableSyntax #-}
{-# OPTIONS_GHC -fno-warn-missing-import-lists #-}
module Paths_workshop9 (
    version,
    getBinDir, getLibDir, getDynLibDir, getDataDir, getLibexecDir,
    getDataFileName, getSysconfDir
  ) where

import qualified Control.Exception as Exception
import Data.Version (Version(..))
import System.Environment (getEnv)
import Prelude

#if defined(VERSION_base)

#if MIN_VERSION_base(4,0,0)
catchIO :: IO a -> (Exception.IOException -> IO a) -> IO a
#else
catchIO :: IO a -> (Exception.Exception -> IO a) -> IO a
#endif

#else
catchIO :: IO a -> (Exception.IOException -> IO a) -> IO a
#endif
catchIO = Exception.catch

version :: Version
version = Version [0,1,0,0] []
bindir, libdir, dynlibdir, datadir, libexecdir, sysconfdir :: FilePath

bindir     = "D:\\DINH TRI DUC\\Monash University\\Computer science\\Semester 2 - 2021\\FIT2102\\Tutorial\\Week9\\.stack-work\\install\\f10f918c\\bin"
libdir     = "D:\\DINH TRI DUC\\Monash University\\Computer science\\Semester 2 - 2021\\FIT2102\\Tutorial\\Week9\\.stack-work\\install\\f10f918c\\lib\\x86_64-windows-ghc-8.10.3\\workshop9-0.1.0.0-AnUzHM0RyiM6SbuC2i3Ylk"
dynlibdir  = "D:\\DINH TRI DUC\\Monash University\\Computer science\\Semester 2 - 2021\\FIT2102\\Tutorial\\Week9\\.stack-work\\install\\f10f918c\\lib\\x86_64-windows-ghc-8.10.3"
datadir    = "D:\\DINH TRI DUC\\Monash University\\Computer science\\Semester 2 - 2021\\FIT2102\\Tutorial\\Week9\\.stack-work\\install\\f10f918c\\share\\x86_64-windows-ghc-8.10.3\\workshop9-0.1.0.0"
libexecdir = "D:\\DINH TRI DUC\\Monash University\\Computer science\\Semester 2 - 2021\\FIT2102\\Tutorial\\Week9\\.stack-work\\install\\f10f918c\\libexec\\x86_64-windows-ghc-8.10.3\\workshop9-0.1.0.0"
sysconfdir = "D:\\DINH TRI DUC\\Monash University\\Computer science\\Semester 2 - 2021\\FIT2102\\Tutorial\\Week9\\.stack-work\\install\\f10f918c\\etc"

getBinDir, getLibDir, getDynLibDir, getDataDir, getLibexecDir, getSysconfDir :: IO FilePath
getBinDir = catchIO (getEnv "workshop9_bindir") (\_ -> return bindir)
getLibDir = catchIO (getEnv "workshop9_libdir") (\_ -> return libdir)
getDynLibDir = catchIO (getEnv "workshop9_dynlibdir") (\_ -> return dynlibdir)
getDataDir = catchIO (getEnv "workshop9_datadir") (\_ -> return datadir)
getLibexecDir = catchIO (getEnv "workshop9_libexecdir") (\_ -> return libexecdir)
getSysconfDir = catchIO (getEnv "workshop9_sysconfdir") (\_ -> return sysconfdir)

getDataFileName :: FilePath -> IO FilePath
getDataFileName name = do
  dir <- getDataDir
  return (dir ++ "\\" ++ name)
