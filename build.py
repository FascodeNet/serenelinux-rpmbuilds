#!/usr/bin/env python
import subprocess
import pathlib
import os
import shutil
import sys
#def gen_srpm(specfile):
#    subprocess.call(["spectool", "-g",specfile])
def gen_rpm(conf_name):
    srpm_files = os.listdir("/home/mockbuild/rpmbuild/SRPMS/")
    for srpm_f in srpm_files:
        subprocess.call(["mock","--rebuild","-r",conf_name,srpm_f])
def main():
    args = sys.argv
    gen_rpm(args[1])
    
if __name__ == '__main__':
    main()