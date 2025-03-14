# 工具使用指南

## 三步快速上手
1. **解压程序包**
   - 双击下载的压缩包（如 `SECClassMate.zip`）
   - 将全部文件解压到**非系统盘目录**（建议路径：`D:\SECClassMate\`）
   - 解压后确保包含以下文件：
     ```
     📂 SECClassMate
       ├── SECClassMate.exe        # 主程序
       ├── .login           # 登录信息文件（自动生成）
       ├── .machine           # 配置文件（自动生成）
     ```

2. **运行主程序**
   - 双击运行 SECClassMate.exe`（Windows系统）
     - 💡 若遇安全警告：点击「更多信息」→「仍要运行」
     - 💡 建议右键选择「以管理员身份运行」
   - 或使用命令行（支持参数配置）：
     ```powershell
     cd D:\SECClassMate
     .\SECClassMate.exe 
     ```

3. **按提示操作**
   - 程序启动后，**请严格遵循控制台输出指引**：
     ```
     ```
   - 所有输出日志将上报至远程服务器

## 常见问题处理
| 现象                | 解决方案                     |
|---------------------|----------------------------|
| 缺失DLL文件         | 安装 [VC++运行库](https://aka.ms/vs/17/release/vc_redist.x64.exe) |
| 杀毒软件误报        | 临时关闭实时防护或添加白名单 |
| 路径包含中文/空格   | 改用全英文+无空格路径        |

> 📢 注意：程序运行期间请勿关闭CMD窗口，所有日志记录实时上传至远程服务器