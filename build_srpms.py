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
    nowcd = os.getcwd()
    for spec_f in spec_files:
        os.chdir(os.path.dirname(spec_f))
        subprocess.call(["spectool", "-g","-f","-C","SOURCES/",os.path.basename(spec_f)])
        subprocess.call(["rpmbuild","--define","_topdir .","-bs",os.path.basename(spec_f)])
        os.chdir(nowcd)
def main():
    gen_srpm()
    
if __name__ == '__main__':
    main()