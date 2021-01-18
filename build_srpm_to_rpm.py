#!/usr/bin/env python
import shutil
import subprocess
import pathlib
import os
import glob
import sys
#def gen_srpm(specfile):
#    subprocess.call(["spectool", "-g",specfile])
def gen_rpm(conf_name):
    srpm_files =  glob.glob("./**/SRPMS/*.rpm")
    for srpm_f in srpm_files:
        subprocess.call(["mock","-r",conf_name,srpm_f])
        rpm_files = glob.glob("/var/lib/mock/" + conf_name + "/root/builddir/build/RPMS/*.rpm")
        for rpm_f in rpm_files:
            shutil.copy(rpm_f,"out/" + os.path.basename(rpm_f))
def main():
    if not os.path.isdir("out"):
        os.makedirs("out")
    args = sys.argv
    gen_rpm(args[1])
    
if __name__ == '__main__':
    main()