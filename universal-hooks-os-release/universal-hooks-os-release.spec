Summary: os-release repkun
Name: universal-hooks-os-release
Version: 1.0.0.0
Release: 4
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
mkdir -p %{buildroot}/etc/dnf/universal-hooks/pkgs/fedora-release/transaction
cat <<'EOF' > %{buildroot}/etc/dnf/universal-hooks/pkgs/fedora-release/transaction/os-release-hook.sh
#!/usr/bin/env bash
sed -i -e "s/NAME=Fedora/NAME=SereneLinux/g" /usr/lib/os-release
sed -i -e "s/PRETTY_NAME=\"Fedora/PRETTY_NAME=\"SereneLinux/g" /usr/lib/os-release
sed -i -e "s/LOGO=fedora-logo-icon/LOGO=SereneLinux/g" /usr/lib/os-release
EOF
chmod 755  %{buildroot}/etc/dnf/universal-hooks/pkgs/fedora-release/transaction/os-release-hook.sh
%clean
rm -rf %{buildroot}

%post

%postun

%files
/etc/dnf/universal-hooks/pkgs/fedora-release/transaction/os-release-hook.sh
%changelog
