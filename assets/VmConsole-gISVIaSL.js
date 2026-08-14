import{C as e,G as t,I as n,K as r,M as i,_ as a,b as o,h as s,ot as c,tt as l,v as u,x as d,z as f}from"./network-graph-60mnEywm.js";import{u as p}from"./use-id-Bla8RLuk.js";import{Ht as m}from"./index-YlWEOkPu.js";import{t as h}from"./QTooltip-BW2DjmOZ.js";import{t as g}from"./QBtnGroup-DEUsLOd_.js";import{n as _,r as v,t as y}from"./xterm-2akwZq3h.js";import{t as b}from"./_plugin-vue_export-helper-BDNMzG2s.js";var x={class:`vm-console-wrapper`},S={key:0,class:`console-toolbar row items-center q-pa-xs q-gutter-xs`},C=b(e({__name:`VmConsole`,props:{vmName:{},active:{type:Boolean}},setup(e){let b=e,C=p.is.mobile??!1,w=l(null),T=null,E=null,D=null,O=null,k=``,A=!1,j=[`[    0.000000] Linux version 6.6.30-microvm (gcc 13.2.0) #1 SMP PREEMPT_DYNAMIC`,`[    0.000000] Command line: console=ttyS0 root=/dev/vda1 rw`,`[    0.001234] x86/fpu: Supporting XSAVE feature 0x001: 'x87 floating point registers'`,`[    0.003456] BIOS-provided physical RAM map:`,`[    0.003789]  BIOS-e820: [mem 0x0000000000000000-0x000000000009fbff] usable`,`[    0.012000] Booting paravirtualized kernel on KVM`,`[    0.018000] clocksource: kvm-clock: mask: 0xffffffffffffffff`,`[    0.045000] smpboot: CPU0: AMD EPYC Processor (family: 0x17, model: 0x31)`,`[    0.089000] Memory: 494720K/524288K available (16384K kernel code)`,`[    0.102000] NET: Registered PF_INET protocol family`,`[    0.145000] virtio_blk virtio0: [vda] 20971520 512-byte logical blocks (10.7 GB)`,`[    0.178000] virtio_net virtio1: MAC address randomized`,`[    0.210000] EXT4-fs (vda1): mounted filesystem with ordered data mode`,`[    0.245000] systemd[1]: Detected virtualization kvm.`,`[    0.289000] systemd[1]: Set hostname to <HOST>.`,`[    0.450000] systemd[1]: Reached target Network.`,`[    0.512000] systemd[1]: Started OpenSSH Daemon.`,`[    0.567000] systemd[1]: Reached target Multi-User System.`,``,`<HOST> login: root (automatic login)`,``,`\x1B[33m━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\x1B[0m`,`\x1B[33m  Simulated Console\x1B[0m`,`\x1B[2m  Upgrade to Weaver Solo for live serial access to your VMs.\x1B[0m`,`\x1B[2m  https://weaver-dev.github.io/pricing\x1B[0m`,`\x1B[33m━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\x1B[0m`,``];function M(e,t){let n=t,r=e.trim();if(r===``||r===`\r`)return null;let i={ls:`bin  boot  dev  etc  home  lib  lib64  mnt  opt  proc  root  run  sbin  srv  sys  tmp  usr  var`,"ls -la":`total 68
drwxr-xr-x  18 root root 4096 Jan 15 00:00 .
drwxr-xr-x  18 root root 4096 Jan 15 00:00 ..
drwxr-xr-x   2 root root 4096 Jan 15 00:00 bin
drwxr-xr-x   3 root root 4096 Jan 15 00:00 boot
drwxr-xr-x   5 root root  380 Jan 15 00:00 dev
drwxr-xr-x  42 root root 4096 Jan 15 00:00 etc
drwxr-xr-x   2 root root 4096 Jan 15 00:00 home
drwxr-xr-x   7 root root 4096 Jan 15 00:00 lib
drwxr-xr-x   2 root root 4096 Jan 15 00:00 lib64
drwxr-xr-x   2 root root 4096 Jan 15 00:00 mnt
drwxr-xr-x   2 root root 4096 Jan 15 00:00 opt
dr-xr-xr-x 128 root root    0 Jan 15 00:00 proc
drwx------   3 root root 4096 Jan 15 00:00 root
drwxr-xr-x  11 root root  340 Jan 15 00:00 run
drwxr-xr-x   2 root root 4096 Jan 15 00:00 sbin
drwxr-xr-x   2 root root 4096 Jan 15 00:00 srv
dr-xr-xr-x  13 root root    0 Jan 15 00:00 sys
drwxrwxrwt   2 root root 4096 Jan 15 00:00 tmp
drwxr-xr-x  10 root root 4096 Jan 15 00:00 usr
drwxr-xr-x  12 root root 4096 Jan 15 00:00 var`,pwd:`/root`,whoami:`root`,id:`uid=0(root) gid=0(root) groups=0(root)`,hostname:n,uname:`Linux`,"uname -a":`Linux ${n} 6.6.30-microvm #1 SMP PREEMPT_DYNAMIC x86_64 GNU/Linux`,"uname -r":`6.6.30-microvm`,"cat /etc/os-release":`NAME="NixOS"
VERSION="24.05 (Uakari)"
ID=nixos
VERSION_ID="24.05"
PRETTY_NAME="NixOS 24.05 (Uakari)"
HOME_URL="https://nixos.org/"`,uptime:` 00:05:23 up 0 min,  1 user,  load average: 0.08, 0.03, 0.01`,"free -m":`              total        used        free      shared  buff/cache   available
Mem:            512          87         312           2         112         401
Swap:             0           0           0`,free:`              total        used        free      shared  buff/cache   available
Mem:         524288       89088      319488        2048      115712      410624
Swap:             0           0           0`,"df -h":`Filesystem      Size  Used Avail Use% Mounted on
/dev/vda1       9.8G  1.2G  8.1G  13% /
devtmpfs        247M     0  247M   0% /dev
tmpfs           256M     0  256M   0% /dev/shm
tmpfs           103M  480K  102M   1% /run`,"ip addr":`1: lo: <LOOPBACK,UP,LOWER_UP> mtu 65536 qdisc noqueue state UNKNOWN group default
    link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00
    inet 127.0.0.1/8 scope host lo
       valid_lft forever preferred_lft forever
2: eth0: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc fq_codel state UP group default
    link/ether 02:00:00:00:00:01 brd ff:ff:ff:ff:ff:ff
    inet 10.10.0.10/24 brd 10.10.0.255 scope global eth0
       valid_lft forever preferred_lft forever`,"ip a":`1: lo: <LOOPBACK,UP,LOWER_UP> mtu 65536
    inet 127.0.0.1/8 scope host lo
2: eth0: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500
    inet 10.10.0.10/24 scope global eth0`,"ps aux":`USER       PID %CPU %MEM    VSZ   RSS TTY      STAT START   TIME COMMAND
root         1  0.1  1.2  16960  6144 ?        Ss   00:00   0:01 /sbin/init
root        42  0.0  0.4   8384  2048 ?        Ss   00:00   0:00 /usr/sbin/sshd
root        58  0.0  0.3   5760  1536 ttyS0    Ss   00:00   0:00 -bash
root        71  0.0  0.2   7168  1024 ttyS0    R+   00:05   0:00 ps aux`,date:new Date().toUTCString(),"echo hello":`hello`,"cat /proc/cpuinfo":`processor	: 0
vendor_id	: AuthenticAMD
model name	: AMD EPYC Processor
cpu MHz		: 2495.000
cache size	: 512 KB
flags		: fpu vme de pse tsc msr pae mce cx8 apic sep mtrr pge mca cmov`,"cat /proc/meminfo":`MemTotal:         524288 kB
MemFree:          319488 kB
MemAvailable:     410624 kB
Buffers:           16384 kB
Cached:            99328 kB`,"systemctl status":`● ${n}
    State: running
     Jobs: 0 queued
   Failed: 0 units
    Since: Mon 2026-01-15 00:00:00 UTC; 5min ago`,"dmesg | tail":`[    0.450000] systemd[1]: Reached target Network.
[    0.512000] systemd[1]: Started OpenSSH Daemon.
[    0.567000] systemd[1]: Reached target Multi-User System.`,clear:`\x1B[2J\x1B[H`,exit:`logout`,help:`GNU bash, version 5.2.26
Type 'help' for this help, 'man <command>' for command manuals.
Common commands: ls, cd, cat, echo, ps, free, df, uname, ip, systemctl`};if(r in i)return i[r];if(r.startsWith(`echo `))return r.slice(5);if(r===`cd`||r.startsWith(`cd `))return``;if(r.startsWith(`cat `)){let e=r.slice(4).trim();return e in i?i[`cat ${e}`]??null:`cat: ${e}: No such file or directory`}for(let e of[`ssh `,`scp `,`systemctl restart`,`systemctl start`,`systemctl stop`,`reboot`,`shutdown`,`poweroff`,`nixos-rebuild`])if(r===e||r.startsWith(e+` `)||r.startsWith(e))return`\x1B[33mThis command requires live serial access (Weaver Solo).\x1B[0m
\x1B[2mUpgrade at: https://weaver-dev.github.io/pricing\x1B[0m`;return`-bash: ${r.split(` `)[0]}: command not found`}function N(){T&&T.write(`\x1b[2m[sim]\x1b[0m \x1b[32mroot@${b.vmName}\x1b[0m:\x1b[34m~\x1b[0m# `)}function P(){if(!T)return;let e=0;A=!1;function t(){if(!T||e>=j.length){A=!0,N();return}let n=j[e].replace(/<HOST>/g,b.vmName);T.writeln(n),e++;let r=n===``?50:40+Math.random()*60;O=setTimeout(t,r)}t()}function F(e){if(!(!T||!A))for(let t of e)if(t===`\r`||t===`
`){T.writeln(``);let e=M(k,b.vmName);if(e!==null&&e!==``)if(k.trim()===`clear`)T.write(e);else if(k.trim()===`exit`){T.writeln(e),T.writeln(``),T.writeln(`\x1B[33mSession closed.\x1B[0m`),A=!1;return}else T.writeln(e);k=``,N()}else t===``||t===`\b`?k.length>0&&(k=k.slice(0,-1),T.write(`\b \b`)):t===``?(T.writeln(`^C`),k=``,N()):t===``?k===``&&(T.writeln(`logout`),T.writeln(``),T.writeln(`\x1B[33mSession closed.\x1B[0m`),A=!1):t===`	`||t>=` `&&(k+=t,T.write(t))}function I(){F(``)}function L(){F(``)}function R(){F(`	`)}function z(){!w.value||T||(T=new v({cursorBlink:!0,fontSize:C?16:14,fontFamily:`'Roboto Mono', 'Courier New', monospace`,theme:{background:`#1e1e1e`,foreground:`#d4d4d4`,cursor:`#d4d4d4`}}),E=new _,T.loadAddon(E),T.loadAddon(new y),T.open(w.value),E.fit(),T.onData(e=>{F(e)}),D=new ResizeObserver(()=>{E?.fit()}),D.observe(w.value),P())}function B(){O&&=(clearTimeout(O),null),D?.disconnect(),T?.dispose(),T=null,E=null,k=``,A=!1}return t(()=>b.active,e=>{e&&(T?E?.fit():setTimeout(()=>{z()},50))}),n(()=>{b.active&&z()}),i(()=>{B()}),(e,t)=>(f(),u(`div`,x,[c(C)?(f(),u(`div`,S,[d(g,{flat:``},{default:r(()=>[d(m,{dense:``,flat:``,size:`sm`,label:`Ctrl+C`,onClick:I},{default:r(()=>[d(h,null,{default:r(()=>[...t[0]||=[o(`Send interrupt signal`,-1)]]),_:1})]),_:1}),d(m,{dense:``,flat:``,size:`sm`,label:`Ctrl+D`,onClick:L},{default:r(()=>[d(h,null,{default:r(()=>[...t[1]||=[o(`Send EOF`,-1)]]),_:1})]),_:1}),d(m,{dense:``,flat:``,size:`sm`,icon:`mdi-keyboard-tab`,label:`Tab`,onClick:R},{default:r(()=>[d(h,null,{default:r(()=>[...t[2]||=[o(`Send Tab key`,-1)]]),_:1})]),_:1})]),_:1})])):a(``,!0),s(`div`,{ref_key:`terminalRef`,ref:w,class:`vm-console`},null,512)]))}}),[[`__scopeId`,`data-v-769e5299`]]);export{C as default};