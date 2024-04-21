import{_ as t,X as c,Y as l,a0 as n,a1 as e,Z as a,a2 as i,F as o}from"./framework-4849facd.js";const p={},d=i('<h1 id="快速上手" tabindex="-1"><a class="header-anchor" href="#快速上手" aria-hidden="true">#</a> 快速上手</h1><h2 id="安装python" tabindex="-1"><a class="header-anchor" href="#安装python" aria-hidden="true">#</a> 安装Python</h2><h3 id="环境" tabindex="-1"><a class="header-anchor" href="#环境" aria-hidden="true">#</a> 环境</h3>',3),r={href:"https://www.python.org",target:"_blank",rel:"noopener noreferrer"},u=n("strong",null,"Python 3.7",-1),m={href:"https://cdn.npmmirror.com/binaries/python/3.7.0/python-3.7.0-amd64.exe",target:"_blank",rel:"noopener noreferrer"},h=i(`<p>请在安装Python时勾选左下角的“Add Python 3.7 to PATH”或安装后手动操作以添加环境变量。在PowerShell或命令提示符中输入以下指令以检查Python 3.7是否安装成功：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>python <span class="token parameter variable">--version</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>若显示“Python 3.7.X”（具体版本号由下载的Python版本决定），则环境已成功搭建。</p><h3 id="安装pypi" tabindex="-1"><a class="header-anchor" href="#安装pypi" aria-hidden="true">#</a> 安装PyPi</h3><p>我们通过PyPi管理OpenXMW使用到的依赖包/库，因此，在安装OpenXMW前，你需要安装PyPi（即pip），相关教程可在百度上被轻易找到。安装Python时，PyPi通常会被自动附带安装，所以你大可不必考虑这个。</p><h3 id="下载openxmw" tabindex="-1"><a class="header-anchor" href="#下载openxmw" aria-hidden="true">#</a> 下载OpenXMW</h3>`,6),v={class:"hint-container tip"},b=n("p",{class:"hint-container-title"},"第三方OpenXMW启动器",-1),k=n("p",null,"Hecode 为我们编写了使用方便、快捷的OpenXMW核心启动器，只要完成了上述步骤，你就可以直接运行核心启动器来运行OpenXMW。",-1),y={href:"https://forum.openxmw.tech/d/83-openxmw-he-xin-qi-dong-qi",target:"_blank",rel:"noopener noreferrer"},_=n("p",null,[e("此OpenXMW启动器会自动下载最新的OpenXMW核心、安装依赖库、自动运行，自动登录，你可以直接跳到“"),n("a",{href:"#%E8%BF%90%E8%A1%8C"},"运行"),e("”章节。")],-1),f=i(`<p>我们建立了一个公共的下载站点供下载OpenXMW。</p><p>官方下载站：<a href="/download">点击跳转</a></p><p>镜像下载站：<a href="">敬请期待</a></p><p>下载<code>openxmw-pyc.zip</code>，并解压，打开目录。</p><p>目录结构应该是这样的：</p><div class="language-tree line-numbers-mode" data-ext="tree"><pre class="language-tree"><code>.
├── config.yml
├── core.pyc
├── plugins
│   ├── files
│   └── __init__.py
└── tree

2 directories, 4 files

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>其中，最顶层的目录是OpenXMW的项目根目录</p><h3 id="安装依赖库" tabindex="-1"><a class="header-anchor" href="#安装依赖库" aria-hidden="true">#</a> 安装依赖库</h3><p>回到OpenXMW的项目根目录，使用PowerShell或命令提示符运行以下指令以下载并安装依赖库：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>pip3 <span class="token function">install</span> pyyaml
pip3 <span class="token function">install</span> websockets
pip3 <span class="token function">install</span> Beautifulsoup4
pip3 <span class="token function">install</span> requests
pip3 <span class="token function">install</span> json_tools
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>你可以选择在下载命令后加上<code>-i https://pypi.tuna.tsinghua.edu.cn/simple</code>使用镜像站以提高下载速度。</p><p>至此，准备工作大功告成。</p><h2 id="运行" tabindex="-1"><a class="header-anchor" href="#运行" aria-hidden="true">#</a> 运行</h2><div class="hint-container tip"><p class="hint-container-title">提示</p><p>自1.1.0后，你需要在<code>config.yml</code>配置文件中设置<code>eula: true</code>才可启动。</p></div><p>回到项目根目录，新建<code>start.bat</code>，并点击右键编辑，写入：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>python3 core.pyc
pause
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>双击运行<code>start.bat</code>，不出意外的话，可以看到，程序开始运行了。</p><p>只需要根据程序提示分别输入信息并按下回车，就可以正常运行OpenXMW了！OpenXMW需要小码王社区账号的Access-Token验证你的身份并获取WsToken以实现云数据查看、修改，请点击浏览器网址前的“锁”标志，选择<code>Cookie</code>，复制<code>xiaomawang.com</code>中<code>Cookie</code>文件夹中的<code>user_token</code>的内容，并将其粘贴至程序控制台中输入。我们保证不会记录Access-Token或使用它做任何其它事情。</p><div class="hint-container tip"><p class="hint-container-title">提示</p><p>在1.1.0前，你可以输入任意账号的 Access-Token。但自1.1.0后，你需要输入使用 OpenXMW 的作品作者账号以自动验证身份。</p></div><p>大功告成！</p><p>如果你需要中止程序，请按下 ctrl+c 以中断程序运行。</p><h2 id="配置" tabindex="-1"><a class="header-anchor" href="#配置" aria-hidden="true">#</a> 配置</h2><p>OpenXMW自1.1.0版本后更新了配置文件。配置文件在<code>./config.yml</code>，它是这样的：</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token comment"># OpenXMW 配置文件</span>
<span class="token comment"># 2023/02/26 00:00</span>

<span class="token comment"># 将 eula 的值修改为 true 即表明您同意 OpenXMW EULA (https://forum.openxmw.tech/p/2-eula)</span>
<span class="token key atrule">eula</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
<span class="token comment"># 最大连接尝试次数</span>
<span class="token key atrule">maxConnectTry</span><span class="token punctuation">:</span> <span class="token number">3</span>
<span class="token comment"># 云数据获取间隔</span>
<span class="token comment"># 设置过低易导致超时</span>
<span class="token key atrule">checkInterval</span><span class="token punctuation">:</span> <span class="token number">1</span>
<span class="token comment"># 尝试从 .accesskey 文件读取 Access-Token</span>
<span class="token comment"># 读取失败则根据 communityData 中的配置从本文件或终端获取</span>
<span class="token comment"># 若启用了 communityData 则优先使用 communityData 中的 Access-Token</span>
<span class="token key atrule">readAccessTokenFromFile</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
<span class="token key atrule">communityData</span><span class="token punctuation">:</span>
  <span class="token comment"># 启用则使用配置文件中的社区数据, 否则需要在终端输入社区数据</span>
  <span class="token key atrule">enable</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>
  <span class="token comment"># 使用 OpenXMW 的作品 ID</span>
  <span class="token key atrule">projectId</span><span class="token punctuation">:</span> Default
  <span class="token comment"># 作品作者 ID</span>
  <span class="token key atrule">userId</span><span class="token punctuation">:</span> Default
  <span class="token comment"># 任意账号的 Access-Token</span>
  <span class="token key atrule">accessToken</span><span class="token punctuation">:</span> Default
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>你需要将<code>eula</code>设置为<code>true</code> 才能启动OpenXMW。</p>`,25);function g(x,X){const s=o("ExternalLinkIcon");return c(),l("div",null,[d,n("p",null,[e("OpenXMW是由Python 3.7编写的，所以请前往"),n("a",r,[e("Python官网"),a(s)]),e("下载"),u,e("，或"),n("a",m,[e("点此"),a(s)]),e("以从镜像站下载，并使用Python 3.7运行OpenXMW，否则可能带来一些未知的兼容性问题。")]),h,n("div",v,[b,k,n("p",null,[e("详见："),n("a",y,[e("https://forum.openxmw.tech/d/83-openxmw-he-xin-qi-dong-qi"),a(s)])]),_]),f])}const W=t(p,[["render",g],["__file","quick-start.html.vue"]]);export{W as default};
