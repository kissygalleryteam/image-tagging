KISSY.add(function (S, Node,Demo) {
    var $ = Node.all;
    describe('image-tagging', function () {
        it('Instantiation of components',function(){
            var demo = new Demo();
            expect(S.isObject(demo)).toBe(true);
        })
    });

},{requires:['node','kg/image-tagging/2.0.0/']});