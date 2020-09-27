%define name numix-blue-gtk-theme-bin
%define version 1.0
%define unmangled_version 1.0
%define release 1
%define _binaries_in_noarch_packages_terminate_build 0

Summary: numix-blue-gtk-theme-bin
Name: %{name}
Version: %{version}
Release: %{release}
License: MIT
Source0: %{name}-%{unmangled_version}.tar.gz
Group: Applications/File
BuildRoot: %{_tmppath}/%{name}-%{version}-%{release}-buildroot
Prefix: %{_prefix}
BuildArch: noarch

%define INSTALLDIR %{buildroot}/usr/local/bin

%description
This is a sample program to learn how to make a rpm package.

%prep
rm -rf ${RPM_BUILD_ROOT}

%build

%install
rm -rf %{INSTALLDIR}
mkdir -p %{INSTALLDIR}
tar -C %{INSTALLDIR} -xzf  /root/rpmbuild/SOURCES/%{name}-%{unmangled_version}.tar.gz

%clean
rm -rf %{buildroot}

%files
/usr/local/bin
%defattr(-,root,root)
 
