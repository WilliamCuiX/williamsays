---
title: 'F5-TTS The Voice Clone Project'
date: '2024-02-20'
description: 'Exploring the potential impact of artificial intelligence on society and technology'
coverImage: '/post-cover-02.png'
tags: ['AI', 'Technology', 'Future']
---

F5-TTS的声音克隆项目，它是上海交通大学推出的一款高性能文本到语音系统，克隆的声音效果确实很炸裂。
支持两个TTS模型的。一个是F5-TTS, 另一个是E2-TTS，他们主要区别是F5生成音频的时间更快，但是声音还原度没那么高，而E2-TTS生成的声音更逼真，那么必然导致生成速度就更慢一点了。我测试下来是有细微的差别，但是差别不是太大。
支持英文和中文两种语言合成，并且支持中英两种语言之间无缝切换。
参考声音需要控制在15秒内，效果会更好。
它这里主要有四个功能，一个是批量合成语音，第二个是多语音类型的合成，第三个是语音对话。第四个是Podcast博客功能。
 
一、在线体验地址
huggingface:【🔗huggingface.co】
Modelscope:【🔗modelscope.cn】
演示参考语音：【🔗夸克网盘分享】
 
二、本地部署
 
准备工作：
安装git工具:【🔗Git-安装Git】，根据自己电脑的系统使用命令或者下载安装包安装
安装Miniconda工具:【🔗Miniconda-Anaconda-documentation】，根据自己电脑的系统使用命令或者下载安装包安装
安装Pytorch框架：【🔗PyTorch】，根据自己的系统和CUDA版本选择相应的选项，复制下面给出命令，到终端窗口运行，就可以安装Pythorch了。
 
开始安装：
1. 创建Python环境
用Conda来创建一个名为f5-tts的Python独立的虚拟依赖环境。
conda create -n f5-tts python=3.10
Bash
激活f5-tts环境
conda activate f5-tts
Bash
2. 安装项目
到F5-TTS的GitHub仓库【🔗F5-TTS】复制项目地址
电脑合适的位置打开终端运行以下命令：
git clone https://github.com/SWivid/F5-TTS.git 
cd F5-TTS
pip install -e .
Bash
 
3. 安装Gradio应用，也就是WebUI,图形界面。
f5-tts_infer-gradio
Bash
点击终端输出的网址就可以使用F5-TTS来克隆声音了。
 
三、常见问题及解决方法
如果没有找到 conda 命令的解决方法
系统中缺少 ffmpeg 工具的解决方法
四、注意事项
确保你的系统满足所有必要的依赖和要求，特别是Python和CUDA版本。
在使用F5-TTS进行声音克隆时，请遵守相关法律和道德规范，不要用于非法或不当目的。
首次运行可能需要下载模型，这可能需要一些时间，请保持耐心。
如果遇到任何问题，可以查阅GitHub仓库的Issues部分或寻求社区帮助。
定期更新F5-TTS以获得最新的功能和bug修复。可以通过在F5-TTS目录下运行 git pull 来更新。
使用F5-TTS时，请记住尊重他人的隐私权和知识产权。
 
 
更多详情请参考 github地址：【🔗F5-TTS】