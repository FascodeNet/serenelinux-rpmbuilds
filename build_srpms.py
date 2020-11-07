#!/usr/bin/env python
import subprocess
import pathlib
import os
import shutil
import sys
import glob
#def gen_srpm(specfile):
#    subprocess.call(["spectool", "-g",specfile])
def gen_srpm():
    spec_files =  glob.glob("./**/*.spec")
    for spec_f in spec_files:
        subprocess.call(["spectool", "-g",",-f","-C","SOURCES/",spec_f])
        subprocess.call(["rpmbuild","--define","_topdir .","-bs",spec_f])
def main():
    gen_srpm()
    
if __name__ == '__main__':
    main()