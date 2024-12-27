'use client';
import { ThemeProvider as ThemeProvider$1 } from 'next-themes';

function _extends() {
    _extends = Object.assign || function(target) {
        for(var i = 1; i < arguments.length; i++){
            var source = arguments[i];
            for(var key in source){
                if (Object.prototype.hasOwnProperty.call(source, key)) {
                    target[key] = source[key];
                }
            }
        }
        return target;
    };
    return _extends.apply(this, arguments);
}
function _object_without_properties_loose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;
    for(i = 0; i < sourceKeys.length; i++){
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        target[key] = source[key];
    }
    return target;
}
function ThemeProvider(_param) {
    var { children } = _param, props = _object_without_properties_loose(_param, [
        "children"
    ]);
    return /*#__PURE__*/ React.createElement(ThemeProvider$1, _extends({
        attribute: "class",
        defaultTheme: "system",
        enableSystem: true
    }, props), children);
}

export { ThemeProvider as T };
