/**
 * @fileoverview 请修改组件描述
 * @author 乔福<qiaofu@taobao.com>
 * @module image-tagging
 **/
KISSY.add(function (S, Node,Base) {
    var EMPTY = '';
    var $ = Node.all;
    /**
     * 请修改组件描述
     * @class Image-tagging
     * @constructor
     * @extends Base
     */
    function Image-tagging(comConfig) {
        var self = this;
        //调用父类构造函数
        Image-tagging.superclass.constructor.call(self, comConfig);
    }
    S.extend(Image-tagging, Base, /** @lends Image-tagging.prototype*/{

    }, {ATTRS : /** @lends Image-tagging*/{

    }});
    return Image-tagging;
}, {requires:['node', 'base']});



