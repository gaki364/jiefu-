#/bin/sh

oldPath=./unpackage/resources/*
dstPath=./buildIOS/HBuilder/HBuilder-Hello/Pandora/apps

echo $oldPath
echo $dstPath
rm -rf $dstPath
mkdir -p $dstPath

cp -rf $oldPath $dstPath