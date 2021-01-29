(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{474:function(t,s,e){t.exports=e.p+"assets/img/2.94a2d474.png"},475:function(t,s,e){t.exports=e.p+"assets/img/1.a9e07f7d.png"},533:function(t,s,e){"use strict";e.r(s);var a=e(24),i=Object(a.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("摘要")]),t._v(" "),a("p",[t._v("为Git配置SSH，使用SSH连接远程仓库")])]),t._v(" "),a("h2",{attrs:{id:"_1-生成多个ssh-key"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-生成多个ssh-key"}},[t._v("#")]),t._v(" 1. 生成多个SSH Key")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("说明")]),t._v(" "),a("p",[t._v("有多个git账号的时候，需要不同的SSH Key连接不同的git账户")])]),t._v(" "),a("p",[a("strong",[t._v("生成第一个key")]),a("br"),t._v("\n打开git bash 使用命令 "),a("code",[t._v('ssh-keygen -t rsa -C "GitHub"')]),a("br")]),a("div",{staticClass:"pageimg",staticStyle:{"text-align":"center"}},[a("img",{attrs:{src:e(474),alt:"图片"}})]),t._v("\n然后两下回车，同样的操作"),a("strong",[t._v("生成第二个key")]),t._v(" "),a("code",[t._v('ssh-keygen -t rsa -C "Gitee"')]),a("br"),a("p"),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("参数含义")]),t._v(" "),a("p",[a("code",[t._v("-t")]),t._v(" 指定要创建的密钥类型。可以使用：”rsa1”(SSH-1) “rsa”(SSH-2) “dsa”(SSH-2)"),a("br"),t._v(" "),a("code",[t._v("-C")]),t._v(" 提供一个新注释")])]),t._v(" "),a("p",[t._v("此时在C:\\Users\\用户名.ssh目录下就会生成如下文件\n")]),a("div",{staticClass:"pageimg",staticStyle:{"text-align":"center"}},[a("img",{attrs:{src:e(475),alt:"图片"}})]),a("p"),t._v(" "),a("h2",{attrs:{id:"_2-创建config文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-创建config文件"}},[t._v("#")]),t._v(" 2. 创建config文件")]),t._v(" "),a("p",[t._v("创建config文件，将文件创建在.ssh目录下"),a("br"),t._v(" "),a("strong",[t._v("编辑文件内容")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("Host github.com\n    HostName github.com\n    IdentityFile C:\\\\Users\\\\用户名\\\\.ssh\\\\GitHub\n    ProxyCommand connect -S 127.0.0.1:7890 %h %p\n\nHost gitee.com\n    HostName gitee.com\n    IdentityFile C:\\\\Users\\\\用户名\\\\.ssh\\\\Gitee\n")])])]),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("参数含义")]),t._v(" "),a("p",[a("code",[t._v("Host")]),t._v("：每个Host要取一个别名，每个Host主要配置HostName和IdentityFile两个属性"),a("br")]),t._v(" "),a("ul",[a("li",[t._v("Host的名字可以取为自己喜欢的名字，不过这个会影响git相关命令"),a("br")]),t._v(" "),a("li",[t._v("例如：Host mygithub 这样定义的话，命令如下："),a("br"),t._v("\n即git@后面紧跟的名字改为mygithub"),a("code",[t._v("git clone git@mygithub:xxx/xxx.git")]),t._v("就相当于你配置的HostName真正的域名，映射成了Host后面的配置的名字")])]),t._v(" "),a("p",[a("code",[t._v("HostName")]),t._v("：远程仓库的主机名"),a("br"),t._v(" "),a("code",[t._v("IdentityFile")]),t._v("：密钥路径"),a("br"),t._v(" "),a("code",[t._v("ProxyCommand connect -S 127.0.0.1:7890 %h %p")]),t._v("：配置代理（可选）")])]),t._v(" "),a("h2",{attrs:{id:"_3-生成单个ssh-key"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-生成单个ssh-key"}},[t._v("#")]),t._v(" 3. 生成单个SSH Key")]),t._v(" "),a("p",[t._v("使用命令 "),a("code",[t._v('ssh-keygen -t rsa -C "GitHub"')]),t._v("，直接三下回车即可")]),t._v(" "),a("h2",{attrs:{id:"_4-添加公钥到github或gitee"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-添加公钥到github或gitee"}},[t._v("#")]),t._v(" 4. 添加公钥到GitHub或Gitee")]),t._v(" "),a("p",[t._v("公钥就是目录中生成的"),a("code",[t._v("xx.pub")]),t._v("文件，用记事本打开，复制里面的内容，添加到账号中即可")]),t._v(" "),a("h2",{attrs:{id:"_5-测试"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-测试"}},[t._v("#")]),t._v(" 5. 测试")]),t._v(" "),a("p",[t._v("git bash输入命令："),a("code",[t._v("ssh -T git@github.com")]),t._v("\n提示")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("Hi xxxxx! You've successfully authenticated, but GitHub does not provide shell access.\n")])])]),a("p",[t._v("表示配置成功")])])}),[],!1,null,null,null);s.default=i.exports}}]);