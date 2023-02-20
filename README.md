# react的初次学习

注：06文件夹以及06之前安装的react-router-dom v6版本，但是观看的视频讲解是react-router-dom v5版本的所以有一些语法上的不一样，像<route>组件在v5版本里可以直接使用或者套在<switch>组件里，但在v6版本里必须用在<routes>组件里；还有像路由传参v6里使用Hook函数的方式，如果要在class组件内进行路由传参需要自己封装Hook函数，故在06之后的文件夹安装v5版本。

## 需注意的点

> 1. 刷新后对路由state参数的影响
> 	1. BrowserRouter没有任何影响，因为state保存在history对象中
> 	2. HashRouter刷新后会导致路由state参数的丢失