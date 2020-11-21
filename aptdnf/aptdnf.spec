%define dist .el64

Summary: aptdnf
Name: aptdnf
Version: 1.0.1
Release: 1
Group: System Environment/Shells
License: NONE
Packager: kokkiemouse
Vendor: INDETAIL

Source0: https://github.com/FascodeNet/aptdnf/archive/main.tar.gz
BuildRequires: cmake,ninja-build,clang
%global debug_package %{nil}
%description
ottosei
%prep
rm -rf %{buildroot}

%setup -n aptdnf-main

%build
mkdir -p build
cd build
cmake -G Ninja -DCMAKE_C_COMPILER=clang -DCMAKE_CXX_COMPILER=clang++ -DCMAKE_INSTALL_PREFIX=%{buildroot} ..
ninja 
%install
cd build
ninja install
ln -s /usr/local/bin/aptdnf %{buildroot}/usr/local/bin/apt
%clean
rm -rf %{buildroot}
%files
/usr/local/bin/aptdnf
/usr/local/bin/apt
%changelog
* Sat Nov 21 2020 kokkiemouse <kokkiemouse@fascode.net> 1.0.1-1 
- 1st commit
