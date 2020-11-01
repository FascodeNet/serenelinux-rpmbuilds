Summary: os-release repkun
Name: universal-hooks-os-release
Version: 1.0.0.0
Release: 1
Group: System Environment/Shells
License: NONE
Packager: kokkiemouse
Vendor: INDETAIL
Requires: yum-plugin-universal-hooks
%global debug_package %{nil}
%description
os release replacer
%prep

%build

%install
rm -rf %{buildroot}
mkdir -p %{buildroot}/etc/dnf/universal-hooks/pkgs/system-release/transaction
cat <<'EOF' > %{buildroot}/etc/dnf/universal-hooks/pkgs/system-release/transaction/os-release-hook.sh
#!/usr/bin/env bash
sed -i -e "s/NAME=Fedora/NAME=SereneLinux/g" /etc/os-release
sed -i -e "s/PRETTY_NAME=Fedora/PRETTY_NAME=SereneLinux/g" /etc/os-release
sed -i -e "s/LOGO=Fedora/ /g" /etc/os-release
echo "LOGO=SereneLinux"  >> /etc/os-release
EOF
chmod 755  %{buildroot}/etc/dnf/universal-hooks/pkgs/system-release/transaction/os-release-hook.sh
%clean
rm -rf %{buildroot}

%post

%postun

%files
/etc/dnf/universal-hooks/pkgs/system-release/transaction/os-release-hook.sh
%changelog
