# wish-system
一个许愿系统，可以在页面中随机显示最近十条用户的许愿信息
# 系统介绍
本项目使用node.js+express框架+art-template渲染模板引擎+MYSQL数据库+jquery所开发的一个全栈式的许愿墙系统,引入sequelize模块实现对数据库的连接处理。Sequelize 是一个基于 promise 的 Node.js ORM, 目前支持 Postgres, MySQL, MariaDB, SQLite 以及 Microsoft SQL Server. 它具有强大的事务支持, 关联关系, 预读和延迟加载,读取复制等功能。
# 项目地址
* <a href = "https://github.com/Alice2021/wish-system">https://github.com/Alice2021/wish-system</a>
# 效果展示
![](https://github.com/Alice2021/wish-system/blob/master/%E8%AE%B8%E6%84%BF%E7%B3%BB%E7%BB%9F%E7%95%8C%E9%9D%A2.png?raw=true)
# 项目实现功能
 - 添加愿望
- 用户填入姓名和愿望，点击提交，愿望将会被记录到许愿墙中，同时页面刷新许愿墙的愿望显示
 - 移动标签
- 鼠标左键点击着标签，即可一定范围内移动标签的位置
# 技术栈
node.js + express + art-template渲染引擎 + MYSQL + jquery
# 项目部署
#### 安装MYSQL数据库
**创建数据库表，添加模拟数据**

**导入数据库**
> 本项目导出的是sql脚本，需要用使用mysql的图像界面工具或者是命令方式 进行导入

#### 运行项目 --wish
**注入依赖**
> npm install

**在项目文件夹下启动项目**
> npm start

# 联系

**对项目有任何意见或建议可以发送到我的邮箱**
> 1573811314@qq.com
