## 综述

ImageTag组件可以在你页面的图片上进行打标记，你只需要获取到你的图片，并设定标记(Tag)在图片上面的坐标，组件就会为你创建对应的图片标记，[luminate.com](http://www.luminate.com/)就是利用这一原理对其服务站点的图片进行图片标记广告的服务。

## 快速使用

### 初始化组件

    S.use('kg/image-tagging/2.0.0/index', function (S, IT) {
        var imageTag = new IT(imgEl_or_imgId,TagsConfigsArray,moreConfigs);
        
        imageTag.showAll();
    })

## API说明

ImageTag是一个构造器，需要用new的方式进行初始化。

    new ImageTag(imgEl_or_imgId,TagsConfigsArray[,moreConfigs])

####配置参数(Configs)

**imgEl_or_imgId(Type:domElement|String)**: 此参数为必须，图片的dom实例，或者是图片的id

**TagsConfigsArray(Type:Array)**: 此参数为必须，传入的为图片标记的位置。
配置例子：

    [
        {top:50,left:300},
        {top:200,left:2.0.0}
    ]

**moreConfigs(Type:Object)**:此参数为可选，用于扩展各种自定义的需求，支持的配置项如下：

- tagContent(Type:String|Function): tag中包含的内容，可以是字符串，或者是一个函数，函数的返回值作为tag包含的内容。
- tagClass(Type:String|Function): tag的class，可以是字符串，或者是一个函数，函数的返回值作为tag的Class。

####实例方法(Instance Methods)

**getTagNodes**:获取图片对应的Tag节点，__注意__:每一个Tag是一个[Overlay](http://docs.kissyui.com/docs/html/api/component/overlay/overlay.html)的实例，因此可以用[Overlay](http://docs.kissyui.com/docs/html/api/component/overlay/overlay.html)的方法进行操作。

**showAll**:显示Imagetag实例控制的所有Tag

**hideAll**:隐藏Imagetag实例控制的所有Tag

所有的使用方法都在demo中有演示。
