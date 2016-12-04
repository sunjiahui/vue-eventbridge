Vue.directive('eventbridge', {
    bind: function (el, binding, vnode, oldnode) {
        var vueEvent = binding.value.vue || 'change';
        var jqEvent = binding.value.jq || 'change';
        $(el).on(jqEvent, function (e) {
            vnode.data.on[vueEvent].fn(e)
        });
    },
    update: function (el, binding, vnode, oldnode) {
        var event = binding.value.jq;
        Vue.nextTick(function () {
            $(el).trigger(event);
        });
    },
    unbind: function (el, binding) {
        var jqEvent = binding.value.jq || 'change';
        $(el).off(jqEvent);
    }
});
