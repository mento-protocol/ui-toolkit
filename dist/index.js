import { c as cn } from './CodeBlock-client-DS64sisF.js';
export { B as Button, C as CodeBlock, b as buttonVariants } from './CodeBlock-client-DS64sisF.js';
import * as React$1 from 'react';
import { forwardRef } from 'react';
import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import { Check, Circle, ChevronDown } from 'lucide-react';
import * as RadioGroupPrimitive from '@radix-ui/react-radio-group';
import * as SwitchPrimitives from '@radix-ui/react-switch';
import * as SliderPrimitive from '@radix-ui/react-slider';
import * as LabelPrimitive from '@radix-ui/react-label';
import { cva } from 'class-variance-authority';
import { Slot } from '@radix-ui/react-slot';
import * as SelectPrimitive from '@radix-ui/react-select';
import * as AccordionPrimitive from '@radix-ui/react-accordion';
export { T as ThemeProvider } from './ThemeProvider-client-BQIIiyoq.js';

function _extends$c() {
    _extends$c = Object.assign || function(target) {
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
    return _extends$c.apply(this, arguments);
}
function _object_without_properties_loose$c(source, excluded) {
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
const Input = /*#__PURE__*/ React$1.forwardRef((_param, ref)=>{
    var { className, type } = _param, props = _object_without_properties_loose$c(_param, [
        "className",
        "type"
    ]);
    return /*#__PURE__*/ React$1.createElement("input", _extends$c({
        type: type,
        className: cn("flex h-9 w-full rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50", className),
        ref: ref
    }, props));
});
Input.displayName = "Input";

function _extends$b() {
    _extends$b = Object.assign || function(target) {
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
    return _extends$b.apply(this, arguments);
}
function _object_without_properties_loose$b(source, excluded) {
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
const Textarea = /*#__PURE__*/ React$1.forwardRef((_param, ref)=>{
    var { className } = _param, props = _object_without_properties_loose$b(_param, [
        "className"
    ]);
    return /*#__PURE__*/ React$1.createElement("textarea", _extends$b({
        className: cn("flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50", className),
        ref: ref
    }, props));
});
Textarea.displayName = "Textarea";

function _extends$a() {
    _extends$a = Object.assign || function(target) {
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
    return _extends$a.apply(this, arguments);
}
function _object_without_properties_loose$a(source, excluded) {
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
const Checkbox = /*#__PURE__*/ React$1.forwardRef((_param, ref)=>{
    var { className } = _param, props = _object_without_properties_loose$a(_param, [
        "className"
    ]);
    return /*#__PURE__*/ React$1.createElement(CheckboxPrimitive.Root, _extends$a({
        ref: ref,
        className: cn("peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground", className)
    }, props), /*#__PURE__*/ React$1.createElement(CheckboxPrimitive.Indicator, {
        className: cn("flex items-center justify-center text-current")
    }, /*#__PURE__*/ React$1.createElement(Check, {
        className: "h-4 w-4"
    })));
});
Checkbox.displayName = CheckboxPrimitive.Root.displayName;

function _extends$9() {
    _extends$9 = Object.assign || function(target) {
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
    return _extends$9.apply(this, arguments);
}
function _object_without_properties_loose$9(source, excluded) {
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
const RadioGroup = /*#__PURE__*/ React$1.forwardRef((_param, ref)=>{
    var { className } = _param, props = _object_without_properties_loose$9(_param, [
        "className"
    ]);
    return /*#__PURE__*/ React$1.createElement(RadioGroupPrimitive.Root, _extends$9({
        className: cn("grid gap-2", className)
    }, props, {
        ref: ref
    }));
});
RadioGroup.displayName = RadioGroupPrimitive.Root.displayName;
const RadioGroupItem = /*#__PURE__*/ React$1.forwardRef((_param, ref)=>{
    var { className } = _param, props = _object_without_properties_loose$9(_param, [
        "className"
    ]);
    return /*#__PURE__*/ React$1.createElement(RadioGroupPrimitive.Item, _extends$9({
        ref: ref,
        className: cn("aspect-square h-4 w-4 rounded-full border border-primary text-primary ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50", className)
    }, props), /*#__PURE__*/ React$1.createElement(RadioGroupPrimitive.Indicator, {
        className: "flex items-center justify-center"
    }, /*#__PURE__*/ React$1.createElement(Circle, {
        className: "h-2.5 w-2.5 fill-current text-current"
    })));
});
RadioGroupItem.displayName = RadioGroupPrimitive.Item.displayName;

function _extends$8() {
    _extends$8 = Object.assign || function(target) {
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
    return _extends$8.apply(this, arguments);
}
function _object_without_properties_loose$8(source, excluded) {
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
const Switch = /*#__PURE__*/ React$1.forwardRef((_param, ref)=>{
    var { className } = _param, props = _object_without_properties_loose$8(_param, [
        "className"
    ]);
    return /*#__PURE__*/ React$1.createElement(SwitchPrimitives.Root, _extends$8({
        className: cn("peer inline-flex h-[24px] w-[44px] shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input", className)
    }, props, {
        ref: ref
    }), /*#__PURE__*/ React$1.createElement(SwitchPrimitives.Thumb, {
        className: cn("pointer-events-none block h-5 w-5 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0")
    }));
});
Switch.displayName = SwitchPrimitives.Root.displayName;

function _extends$7() {
    _extends$7 = Object.assign || function(target) {
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
    return _extends$7.apply(this, arguments);
}
function _object_without_properties_loose$7(source, excluded) {
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
const Slider = /*#__PURE__*/ React$1.forwardRef((_param, ref)=>{
    var { className } = _param, props = _object_without_properties_loose$7(_param, [
        "className"
    ]);
    return /*#__PURE__*/ React$1.createElement(SliderPrimitive.Root, _extends$7({
        ref: ref,
        className: cn("relative flex w-full touch-none select-none items-center", className)
    }, props), /*#__PURE__*/ React$1.createElement(SliderPrimitive.Track, {
        className: "relative h-2 w-full grow overflow-hidden rounded-full bg-secondary"
    }, /*#__PURE__*/ React$1.createElement(SliderPrimitive.Range, {
        className: "absolute h-full bg-primary"
    })), /*#__PURE__*/ React$1.createElement(SliderPrimitive.Thumb, {
        className: "block h-5 w-5 rounded-full border-2 border-primary bg-background ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
    }));
});
Slider.displayName = SliderPrimitive.Root.displayName;

function _extends$6() {
    _extends$6 = Object.assign || function(target) {
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
    return _extends$6.apply(this, arguments);
}
function _object_without_properties_loose$6(source, excluded) {
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
const labelVariants = cva("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70");
const Label = /*#__PURE__*/ React$1.forwardRef((_param, ref)=>{
    var { className } = _param, props = _object_without_properties_loose$6(_param, [
        "className"
    ]);
    return /*#__PURE__*/ React$1.createElement(LabelPrimitive.Root, _extends$6({
        ref: ref,
        className: cn(labelVariants(), className)
    }, props));
});
Label.displayName = LabelPrimitive.Root.displayName;

function _extends$5() {
    _extends$5 = Object.assign || function(target) {
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
    return _extends$5.apply(this, arguments);
}
function _object_destructuring_empty(o) {
    if (o === null || o === void 0) throw new TypeError("Cannot destructure " + o);
    return o;
}
function _object_without_properties_loose$5(source, excluded) {
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
const Form = /*#__PURE__*/ React$1.forwardRef((_param, ref)=>{
    var { className } = _param, props = _object_without_properties_loose$5(_param, [
        "className"
    ]);
    return /*#__PURE__*/ React$1.createElement("form", _extends$5({
        ref: ref,
        className: cn("space-y-6", className)
    }, props));
});
Form.displayName = "Form";
const FormItem = /*#__PURE__*/ React$1.forwardRef((_param, ref)=>{
    var { className } = _param, props = _object_without_properties_loose$5(_param, [
        "className"
    ]);
    return /*#__PURE__*/ React$1.createElement("div", _extends$5({
        ref: ref,
        className: cn("space-y-2", className)
    }, props));
});
FormItem.displayName = "FormItem";
const FormLabel = /*#__PURE__*/ React$1.forwardRef((_param, ref)=>{
    var { className } = _param, props = _object_without_properties_loose$5(_param, [
        "className"
    ]);
    return /*#__PURE__*/ React$1.createElement(Label, _extends$5({
        ref: ref,
        className: cn("", className)
    }, props));
});
FormLabel.displayName = "FormLabel";
const FormControl = /*#__PURE__*/ React$1.forwardRef((_param, ref)=>{
    var props = _extends$5({}, _object_destructuring_empty(_param));
    return /*#__PURE__*/ React$1.createElement(Slot, _extends$5({
        ref: ref
    }, props));
});
FormControl.displayName = "FormControl";
const FormDescription = /*#__PURE__*/ React$1.forwardRef((_param, ref)=>{
    var { className } = _param, props = _object_without_properties_loose$5(_param, [
        "className"
    ]);
    return /*#__PURE__*/ React$1.createElement("p", _extends$5({
        ref: ref,
        className: cn("text-sm text-muted-foreground", className)
    }, props));
});
FormDescription.displayName = "FormDescription";
const FormMessage = /*#__PURE__*/ React$1.forwardRef((_param, ref)=>{
    var { className } = _param, props = _object_without_properties_loose$5(_param, [
        "className"
    ]);
    return /*#__PURE__*/ React$1.createElement("p", _extends$5({
        ref: ref,
        className: cn("text-sm font-medium text-destructive", className)
    }, props));
});
FormMessage.displayName = "FormMessage";

function _extends$4() {
    _extends$4 = Object.assign || function(target) {
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
    return _extends$4.apply(this, arguments);
}
function _object_without_properties_loose$4(source, excluded) {
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
const Card = /*#__PURE__*/ forwardRef((_param, ref)=>{
    var { className } = _param, props = _object_without_properties_loose$4(_param, [
        "className"
    ]);
    return /*#__PURE__*/ React.createElement("div", _extends$4({
        ref: ref,
        className: cn("rounded-lg border bg-card text-card-foreground shadow-sm", className)
    }, props));
});
Card.displayName = "Card";
const CardHeader = /*#__PURE__*/ forwardRef((_param, ref)=>{
    var { className } = _param, props = _object_without_properties_loose$4(_param, [
        "className"
    ]);
    return /*#__PURE__*/ React.createElement("div", _extends$4({
        ref: ref,
        className: cn("flex flex-col space-y-1.5 p-6", className)
    }, props));
});
CardHeader.displayName = "CardHeader";
const CardTitle = /*#__PURE__*/ forwardRef((_param, ref)=>{
    var { className } = _param, props = _object_without_properties_loose$4(_param, [
        "className"
    ]);
    return /*#__PURE__*/ React.createElement("h3", _extends$4({
        ref: ref,
        className: cn("text-2xl font-semibold leading-none tracking-tight", className)
    }, props));
});
CardTitle.displayName = "CardTitle";
const CardDescription = /*#__PURE__*/ forwardRef((_param, ref)=>{
    var { className } = _param, props = _object_without_properties_loose$4(_param, [
        "className"
    ]);
    return /*#__PURE__*/ React.createElement("p", _extends$4({
        ref: ref,
        className: cn("text-sm text-muted-foreground", className)
    }, props));
});
CardDescription.displayName = "CardDescription";
const CardContent = /*#__PURE__*/ forwardRef((_param, ref)=>{
    var { className } = _param, props = _object_without_properties_loose$4(_param, [
        "className"
    ]);
    return /*#__PURE__*/ React.createElement("div", _extends$4({
        ref: ref,
        className: cn("p-6 pt-0", className)
    }, props));
});
CardContent.displayName = "CardContent";
const CardFooter = /*#__PURE__*/ forwardRef((_param, ref)=>{
    var { className } = _param, props = _object_without_properties_loose$4(_param, [
        "className"
    ]);
    return /*#__PURE__*/ React.createElement("div", _extends$4({
        ref: ref,
        className: cn("flex items-center p-6 pt-0", className)
    }, props));
});
CardFooter.displayName = "CardFooter";

function _extends$3() {
    _extends$3 = Object.assign || function(target) {
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
    return _extends$3.apply(this, arguments);
}
function _object_without_properties_loose$3(source, excluded) {
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
const Select = SelectPrimitive.Root;
const SelectGroup = SelectPrimitive.Group;
const SelectValue = SelectPrimitive.Value;
const SelectTrigger = /*#__PURE__*/ React$1.forwardRef((_param, ref)=>{
    var { className, children } = _param, props = _object_without_properties_loose$3(_param, [
        "className",
        "children"
    ]);
    return /*#__PURE__*/ React$1.createElement(SelectPrimitive.Trigger, _extends$3({
        ref: ref,
        className: cn("flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50", className)
    }, props), children, /*#__PURE__*/ React$1.createElement(ChevronDown, {
        className: "h-4 w-4 opacity-50"
    }));
});
SelectTrigger.displayName = SelectPrimitive.Trigger.displayName;
const SelectContent = /*#__PURE__*/ React$1.forwardRef((_param, ref)=>{
    var { className, children, position = "popper" } = _param, props = _object_without_properties_loose$3(_param, [
        "className",
        "children",
        "position"
    ]);
    return /*#__PURE__*/ React$1.createElement(SelectPrimitive.Portal, null, /*#__PURE__*/ React$1.createElement(SelectPrimitive.Content, _extends$3({
        ref: ref,
        className: cn("relative z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", position === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1", className),
        position: position
    }, props), /*#__PURE__*/ React$1.createElement(SelectPrimitive.Viewport, {
        className: cn("p-1", position === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]")
    }, children)));
});
SelectContent.displayName = SelectPrimitive.Content.displayName;
const SelectItem = /*#__PURE__*/ React$1.forwardRef((_param, ref)=>{
    var { className, children } = _param, props = _object_without_properties_loose$3(_param, [
        "className",
        "children"
    ]);
    return /*#__PURE__*/ React$1.createElement(SelectPrimitive.Item, _extends$3({
        ref: ref,
        className: cn("relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", className)
    }, props), /*#__PURE__*/ React$1.createElement("span", {
        className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center"
    }, /*#__PURE__*/ React$1.createElement(SelectPrimitive.ItemIndicator, null, /*#__PURE__*/ React$1.createElement(ChevronDown, {
        className: "h-4 w-4"
    }))), /*#__PURE__*/ React$1.createElement(SelectPrimitive.ItemText, null, children));
});
SelectItem.displayName = SelectPrimitive.Item.displayName;

function _extends$2() {
    _extends$2 = Object.assign || function(target) {
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
    return _extends$2.apply(this, arguments);
}
function _object_without_properties_loose$2(source, excluded) {
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
const Accordion = AccordionPrimitive.Root;
const AccordionItem = /*#__PURE__*/ React$1.forwardRef((_param, ref)=>{
    var { className } = _param, props = _object_without_properties_loose$2(_param, [
        "className"
    ]);
    return /*#__PURE__*/ React$1.createElement(AccordionPrimitive.Item, _extends$2({
        ref: ref,
        className: cn("border-b", className)
    }, props));
});
AccordionItem.displayName = "AccordionItem";
const AccordionTrigger = /*#__PURE__*/ React$1.forwardRef((_param, ref)=>{
    var { className, children } = _param, props = _object_without_properties_loose$2(_param, [
        "className",
        "children"
    ]);
    return /*#__PURE__*/ React$1.createElement(AccordionPrimitive.Header, {
        className: "flex"
    }, /*#__PURE__*/ React$1.createElement(AccordionPrimitive.Trigger, _extends$2({
        ref: ref,
        className: cn("flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180", className)
    }, props), children, /*#__PURE__*/ React$1.createElement(ChevronDown, {
        className: "h-4 w-4 shrink-0 transition-transform duration-200"
    })));
});
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;
const AccordionContent = /*#__PURE__*/ React$1.forwardRef((_param, ref)=>{
    var { className, children } = _param, props = _object_without_properties_loose$2(_param, [
        "className",
        "children"
    ]);
    return /*#__PURE__*/ React$1.createElement(AccordionPrimitive.Content, _extends$2({
        ref: ref,
        className: "overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
    }, props), /*#__PURE__*/ React$1.createElement("div", {
        className: cn("pb-4 pt-0", className)
    }, children));
});
AccordionContent.displayName = AccordionPrimitive.Content.displayName;

function _extends$1() {
    _extends$1 = Object.assign || function(target) {
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
    return _extends$1.apply(this, arguments);
}
function _object_without_properties_loose$1(source, excluded) {
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
const Container = /*#__PURE__*/ forwardRef((_param, ref)=>{
    var { className, size = "default" } = _param, props = _object_without_properties_loose$1(_param, [
        "className",
        "size"
    ]);
    return /*#__PURE__*/ React.createElement("div", _extends$1({
        ref: ref,
        className: cn("mx-auto w-full px-4", {
            "max-w-7xl": size === "default",
            "max-w-5xl": size === "sm",
            "max-w-screen-2xl": size === "lg",
            "max-w-none": size === "full"
        }, className)
    }, props));
});
Container.displayName = "Container";

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
const Grid = /*#__PURE__*/ forwardRef((_param, ref)=>{
    var { className, cols = 3, gap = 4 } = _param, props = _object_without_properties_loose(_param, [
        "className",
        "cols",
        "gap"
    ]);
    return /*#__PURE__*/ React.createElement("div", _extends({
        ref: ref,
        className: cn("grid", {
            "grid-cols-1": cols === 1,
            "grid-cols-2": cols === 2,
            "grid-cols-3": cols === 3,
            "grid-cols-4": cols === 4,
            "grid-cols-5": cols === 5,
            "grid-cols-6": cols === 6,
            "grid-cols-7": cols === 7,
            "grid-cols-8": cols === 8,
            "grid-cols-9": cols === 9,
            "grid-cols-10": cols === 10,
            "grid-cols-11": cols === 11,
            "grid-cols-12": cols === 12,
            "gap-1": gap === 1,
            "gap-2": gap === 2,
            "gap-3": gap === 3,
            "gap-4": gap === 4,
            "gap-5": gap === 5,
            "gap-6": gap === 6,
            "gap-7": gap === 7,
            "gap-8": gap === 8,
            "gap-9": gap === 9,
            "gap-10": gap === 10,
            "gap-11": gap === 11,
            "gap-12": gap === 12
        }, className)
    }, props));
});
Grid.displayName = "Grid";

const themeConfig = {
    darkMode: [
        "class"
    ],
    content: [
        "./src/components/**/*.{ts,tsx}",
        "./src/app/**/*.{ts,tsx}"
    ],
    theme: {
        extend: {
            colors: {
                border: "hsl(var(--border))",
                input: "hsl(var(--input))",
                background: "hsl(var(--background))",
                foreground: "hsl(var(--foreground))",
                primary: {
                    DEFAULT: "hsl(var(--primary))",
                    foreground: "hsl(var(--primary-foreground))"
                },
                secondary: {
                    DEFAULT: "hsl(var(--secondary))",
                    foreground: "hsl(var(--secondary-foreground))"
                },
                success: {
                    DEFAULT: "hsl(var(--success))",
                    foreground: "hsl(var(--success-foreground))"
                },
                error: {
                    DEFAULT: "hsl(var(--error))",
                    foreground: "hsl(var(--error-foreground))"
                },
                warning: {
                    DEFAULT: "hsl(var(--warning))",
                    foreground: "hsl(var(--warning-foreground))"
                },
                info: {
                    DEFAULT: "hsl(var(--info))",
                    foreground: "hsl(var(--info-foreground))"
                }
            },
            fontFamily: {
                fg: [
                    "var(--font-fg)"
                ],
                inter: [
                    "var(--font-inter)"
                ]
            }
        }
    }
};

export { Accordion, AccordionContent, AccordionItem, AccordionTrigger, Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle, Checkbox, Container, Form, FormControl, FormDescription, FormItem, FormLabel, FormMessage, Grid, Input, Label, RadioGroup, RadioGroupItem, Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue, Slider, Switch, Textarea, cn, themeConfig };
