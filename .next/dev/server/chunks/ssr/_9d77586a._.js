module.exports = [
"[project]/src/components/page/Table/TablePage.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>TablePageComponent
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emotion$2f$react$2f$jsx$2d$dev$2d$runtime$2f$dist$2f$emotion$2d$react$2d$jsx$2d$dev$2d$runtime$2e$development$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@emotion/react/jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.development.esm.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Container$2f$Container$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Container$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Container/Container.js [app-ssr] (ecmascript) <export default as Container>");
"use client";
;
;
function TablePageComponent() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emotion$2f$react$2f$jsx$2d$dev$2d$runtime$2f$dist$2f$emotion$2d$react$2d$jsx$2d$dev$2d$runtime$2e$development$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emotion$2f$react$2f$jsx$2d$dev$2d$runtime$2f$dist$2f$emotion$2d$react$2d$jsx$2d$dev$2d$runtime$2e$development$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emotion$2f$react$2f$jsx$2d$dev$2d$runtime$2f$dist$2f$emotion$2d$react$2d$jsx$2d$dev$2d$runtime$2e$development$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Container$2f$Container$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Container$3e$__["Container"], {
            maxWidth: false,
            sx: {
                mt: 2,
                mb: 2,
                width: '100%',
                overflow: 'hidden' // Extra safety
            }
        }, void 0, false, {
            fileName: "[project]/src/components/page/Table/TablePage.tsx",
            lineNumber: 11,
            columnNumber: 13
        }, this)
    }, void 0, false);
}
}),
"[project]/node_modules/@mui/utils/esm/composeClasses/composeClasses.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* eslint no-restricted-syntax: 0, prefer-template: 0, guard-for-in: 0
   ---
   These rules are preventing the performance optimizations below.
 */ /**
 * Compose classes from multiple sources.
 *
 * @example
 * ```tsx
 * const slots = {
 *  root: ['root', 'primary'],
 *  label: ['label'],
 * };
 *
 * const getUtilityClass = (slot) => `MuiButton-${slot}`;
 *
 * const classes = {
 *   root: 'my-root-class',
 * };
 *
 * const output = composeClasses(slots, getUtilityClass, classes);
 * // {
 * //   root: 'MuiButton-root MuiButton-primary my-root-class',
 * //   label: 'MuiButton-label',
 * // }
 * ```
 *
 * @param slots a list of classes for each possible slot
 * @param getUtilityClass a function to resolve the class based on the slot name
 * @param classes the input classes from props
 * @returns the resolved classes for all slots
 */ __turbopack_context__.s([
    "default",
    ()=>composeClasses
]);
function composeClasses(slots, getUtilityClass, classes = undefined) {
    const output = {};
    for(const slotName in slots){
        const slot = slots[slotName];
        let buffer = '';
        let start = true;
        for(let i = 0; i < slot.length; i += 1){
            const value = slot[i];
            if (value) {
                buffer += (start === true ? '' : ' ') + getUtilityClass(value);
                start = false;
                if (classes && classes[value]) {
                    buffer += ' ' + classes[value];
                }
            }
        }
        output[slotName] = buffer;
    }
    return output;
}
}),
"[project]/node_modules/@mui/utils/esm/resolveProps/resolveProps.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>resolveProps
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
;
function resolveProps(defaultProps, props, mergeClassNameAndStyle = false) {
    const output = {
        ...props
    };
    for(const key in defaultProps){
        if (Object.prototype.hasOwnProperty.call(defaultProps, key)) {
            const propName = key;
            if (propName === 'components' || propName === 'slots') {
                output[propName] = {
                    ...defaultProps[propName],
                    ...output[propName]
                };
            } else if (propName === 'componentsProps' || propName === 'slotProps') {
                const defaultSlotProps = defaultProps[propName];
                const slotProps = props[propName];
                if (!slotProps) {
                    output[propName] = defaultSlotProps || {};
                } else if (!defaultSlotProps) {
                    output[propName] = slotProps;
                } else {
                    output[propName] = {
                        ...slotProps
                    };
                    for(const slotKey in defaultSlotProps){
                        if (Object.prototype.hasOwnProperty.call(defaultSlotProps, slotKey)) {
                            const slotPropName = slotKey;
                            output[propName][slotPropName] = resolveProps(defaultSlotProps[slotPropName], slotProps[slotPropName], mergeClassNameAndStyle);
                        }
                    }
                }
            } else if (propName === 'className' && mergeClassNameAndStyle && props.className) {
                output.className = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(defaultProps?.className, props?.className);
            } else if (propName === 'style' && mergeClassNameAndStyle && props.style) {
                output.style = {
                    ...defaultProps?.style,
                    ...props?.style
                };
            } else if (output[propName] === undefined) {
                output[propName] = defaultProps[propName];
            }
        }
    }
    return output;
}
}),
"[project]/node_modules/@mui/system/esm/useThemeProps/getThemeProps.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>getThemeProps
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$resolveProps$2f$resolveProps$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/utils/esm/resolveProps/resolveProps.js [app-ssr] (ecmascript)");
;
function getThemeProps(params) {
    const { theme, name, props } = params;
    if (!theme || !theme.components || !theme.components[name] || !theme.components[name].defaultProps) {
        return props;
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$resolveProps$2f$resolveProps$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(theme.components[name].defaultProps, props);
}
}),
"[project]/node_modules/@mui/system/esm/useThemeProps/useThemeProps.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>useThemeProps
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$system$2f$esm$2f$useThemeProps$2f$getThemeProps$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/system/esm/useThemeProps/getThemeProps.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$system$2f$esm$2f$useTheme$2f$useTheme$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/system/esm/useTheme/useTheme.js [app-ssr] (ecmascript)");
'use client';
;
;
function useThemeProps({ props, name, defaultTheme, themeId }) {
    let theme = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$system$2f$esm$2f$useTheme$2f$useTheme$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(defaultTheme);
    if (themeId) {
        theme = theme[themeId] || theme;
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$system$2f$esm$2f$useThemeProps$2f$getThemeProps$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])({
        theme,
        name,
        props
    });
}
}),
"[project]/node_modules/@mui/utils/esm/getDisplayName/getDisplayName.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>getDisplayName
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$utils$2f$node_modules$2f$react$2d$is$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/utils/node_modules/react-is/index.js [app-ssr] (ecmascript)");
;
function getFunctionComponentName(Component, fallback = '') {
    return Component.displayName || Component.name || fallback;
}
function getWrappedName(outerType, innerType, wrapperName) {
    const functionName = getFunctionComponentName(innerType);
    return outerType.displayName || (functionName !== '' ? `${wrapperName}(${functionName})` : wrapperName);
}
function getDisplayName(Component) {
    if (Component == null) {
        return undefined;
    }
    if (typeof Component === 'string') {
        return Component;
    }
    if (typeof Component === 'function') {
        return getFunctionComponentName(Component, 'Component');
    }
    // TypeScript can't have components as objects but they exist in the form of `memo` or `Suspense`
    if (typeof Component === 'object') {
        switch(Component.$$typeof){
            case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$utils$2f$node_modules$2f$react$2d$is$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ForwardRef"]:
                return getWrappedName(Component, Component.render, 'ForwardRef');
            case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$utils$2f$node_modules$2f$react$2d$is$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Memo"]:
                return getWrappedName(Component, Component.type, 'memo');
            default:
                return undefined;
        }
    }
    return undefined;
}
}),
"[project]/node_modules/@mui/system/esm/preprocessStyles.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>preprocessStyles
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$styled$2d$engine$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/styled-engine/esm/index.js [app-ssr] (ecmascript) <locals>");
;
function preprocessStyles(input) {
    const { variants, ...style } = input;
    const result = {
        variants,
        style: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$styled$2d$engine$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["internal_serializeStyles"])(style),
        isProcessed: true
    };
    // Not supported on styled-components
    if (result.style === style) {
        return result;
    }
    if (variants) {
        variants.forEach((variant)=>{
            if (typeof variant.style !== 'function') {
                variant.style = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$styled$2d$engine$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["internal_serializeStyles"])(variant.style);
            }
        });
    }
    return result;
}
}),
"[project]/node_modules/@mui/system/esm/createStyled/createStyled.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>createStyled,
    "shouldForwardProp",
    ()=>shouldForwardProp,
    "systemDefaultTheme",
    ()=>systemDefaultTheme
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$styled$2d$engine$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/styled-engine/esm/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$deepmerge$2f$deepmerge$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/utils/esm/deepmerge/deepmerge.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$capitalize$2f$capitalize$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/utils/esm/capitalize/capitalize.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$getDisplayName$2f$getDisplayName$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/utils/esm/getDisplayName/getDisplayName.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$system$2f$esm$2f$createTheme$2f$createTheme$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/system/esm/createTheme/createTheme.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$system$2f$esm$2f$styleFunctionSx$2f$styleFunctionSx$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/system/esm/styleFunctionSx/styleFunctionSx.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$system$2f$esm$2f$preprocessStyles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/system/esm/preprocessStyles.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
const systemDefaultTheme = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$system$2f$esm$2f$createTheme$2f$createTheme$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])();
function shouldForwardProp(prop) {
    return prop !== 'ownerState' && prop !== 'theme' && prop !== 'sx' && prop !== 'as';
}
function shallowLayer(serialized, layerName) {
    if (layerName && serialized && typeof serialized === 'object' && serialized.styles && !serialized.styles.startsWith('@layer') // only add the layer if it is not already there.
    ) {
        serialized.styles = `@layer ${layerName}{${String(serialized.styles)}}`;
    }
    return serialized;
}
function defaultOverridesResolver(slot) {
    if (!slot) {
        return null;
    }
    return (_props, styles)=>styles[slot];
}
function attachTheme(props, themeId, defaultTheme) {
    props.theme = isObjectEmpty(props.theme) ? defaultTheme : props.theme[themeId] || props.theme;
}
function processStyle(props, style, layerName) {
    /*
   * Style types:
   *  - null/undefined
   *  - string
   *  - CSS style object: { [cssKey]: [cssValue], variants }
   *  - Processed style object: { style, variants, isProcessed: true }
   *  - Array of any of the above
   */ const resolvedStyle = typeof style === 'function' ? style(props) : style;
    if (Array.isArray(resolvedStyle)) {
        return resolvedStyle.flatMap((subStyle)=>processStyle(props, subStyle, layerName));
    }
    if (Array.isArray(resolvedStyle?.variants)) {
        let rootStyle;
        if (resolvedStyle.isProcessed) {
            rootStyle = layerName ? shallowLayer(resolvedStyle.style, layerName) : resolvedStyle.style;
        } else {
            const { variants, ...otherStyles } = resolvedStyle;
            rootStyle = layerName ? shallowLayer((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$styled$2d$engine$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["internal_serializeStyles"])(otherStyles), layerName) : otherStyles;
        }
        return processStyleVariants(props, resolvedStyle.variants, [
            rootStyle
        ], layerName);
    }
    if (resolvedStyle?.isProcessed) {
        return layerName ? shallowLayer((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$styled$2d$engine$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["internal_serializeStyles"])(resolvedStyle.style), layerName) : resolvedStyle.style;
    }
    return layerName ? shallowLayer((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$styled$2d$engine$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["internal_serializeStyles"])(resolvedStyle), layerName) : resolvedStyle;
}
function processStyleVariants(props, variants, results = [], layerName = undefined) {
    let mergedState; // We might not need it, initialized lazily
    variantLoop: for(let i = 0; i < variants.length; i += 1){
        const variant = variants[i];
        if (typeof variant.props === 'function') {
            mergedState ??= {
                ...props,
                ...props.ownerState,
                ownerState: props.ownerState
            };
            if (!variant.props(mergedState)) {
                continue;
            }
        } else {
            for(const key in variant.props){
                if (props[key] !== variant.props[key] && props.ownerState?.[key] !== variant.props[key]) {
                    continue variantLoop;
                }
            }
        }
        if (typeof variant.style === 'function') {
            mergedState ??= {
                ...props,
                ...props.ownerState,
                ownerState: props.ownerState
            };
            results.push(layerName ? shallowLayer((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$styled$2d$engine$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["internal_serializeStyles"])(variant.style(mergedState)), layerName) : variant.style(mergedState));
        } else {
            results.push(layerName ? shallowLayer((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$styled$2d$engine$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["internal_serializeStyles"])(variant.style), layerName) : variant.style);
        }
    }
    return results;
}
function createStyled(input = {}) {
    const { themeId, defaultTheme = systemDefaultTheme, rootShouldForwardProp = shouldForwardProp, slotShouldForwardProp = shouldForwardProp } = input;
    function styleAttachTheme(props) {
        attachTheme(props, themeId, defaultTheme);
    }
    const styled = (tag, inputOptions = {})=>{
        // If `tag` is already a styled component, filter out the `sx` style function
        // to prevent unnecessary styles generated by the composite components.
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$styled$2d$engine$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["internal_mutateStyles"])(tag, (styles)=>styles.filter((style)=>style !== __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$system$2f$esm$2f$styleFunctionSx$2f$styleFunctionSx$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]));
        const { name: componentName, slot: componentSlot, skipVariantsResolver: inputSkipVariantsResolver, skipSx: inputSkipSx, // TODO v6: remove `lowercaseFirstLetter()` in the next major release
        // For more details: https://github.com/mui/material-ui/pull/37908
        overridesResolver = defaultOverridesResolver(lowercaseFirstLetter(componentSlot)), ...options } = inputOptions;
        const layerName = componentName && componentName.startsWith('Mui') || !!componentSlot ? 'components' : 'custom';
        // if skipVariantsResolver option is defined, take the value, otherwise, true for root and false for other slots.
        const skipVariantsResolver = inputSkipVariantsResolver !== undefined ? inputSkipVariantsResolver : // TODO v6: remove `Root` in the next major release
        // For more details: https://github.com/mui/material-ui/pull/37908
        componentSlot && componentSlot !== 'Root' && componentSlot !== 'root' || false;
        const skipSx = inputSkipSx || false;
        let shouldForwardPropOption = shouldForwardProp;
        // TODO v6: remove `Root` in the next major release
        // For more details: https://github.com/mui/material-ui/pull/37908
        if (componentSlot === 'Root' || componentSlot === 'root') {
            shouldForwardPropOption = rootShouldForwardProp;
        } else if (componentSlot) {
            // any other slot specified
            shouldForwardPropOption = slotShouldForwardProp;
        } else if (isStringTag(tag)) {
            // for string (html) tag, preserve the behavior in emotion & styled-components.
            shouldForwardPropOption = undefined;
        }
        const defaultStyledResolver = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$styled$2d$engine$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"])(tag, {
            shouldForwardProp: shouldForwardPropOption,
            label: generateStyledLabel(componentName, componentSlot),
            ...options
        });
        const transformStyle = (style)=>{
            // - On the server Emotion doesn't use React.forwardRef for creating components, so the created
            //   component stays as a function. This condition makes sure that we do not interpolate functions
            //   which are basically components used as a selectors.
            // - `style` could be a styled component from a babel plugin for component selectors, This condition
            //   makes sure that we do not interpolate them.
            if (style.__emotion_real === style) {
                return style;
            }
            if (typeof style === 'function') {
                return function styleFunctionProcessor(props) {
                    return processStyle(props, style, props.theme.modularCssLayers ? layerName : undefined);
                };
            }
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$deepmerge$2f$deepmerge$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isPlainObject"])(style)) {
                const serialized = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$system$2f$esm$2f$preprocessStyles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(style);
                return function styleObjectProcessor(props) {
                    if (!serialized.variants) {
                        return props.theme.modularCssLayers ? shallowLayer(serialized.style, layerName) : serialized.style;
                    }
                    return processStyle(props, serialized, props.theme.modularCssLayers ? layerName : undefined);
                };
            }
            return style;
        };
        const muiStyledResolver = (...expressionsInput)=>{
            const expressionsHead = [];
            const expressionsBody = expressionsInput.map(transformStyle);
            const expressionsTail = [];
            // Preprocess `props` to set the scoped theme value.
            // This must run before any other expression.
            expressionsHead.push(styleAttachTheme);
            if (componentName && overridesResolver) {
                expressionsTail.push(function styleThemeOverrides(props) {
                    const theme = props.theme;
                    const styleOverrides = theme.components?.[componentName]?.styleOverrides;
                    if (!styleOverrides) {
                        return null;
                    }
                    const resolvedStyleOverrides = {};
                    // TODO: v7 remove iteration and use `resolveStyleArg(styleOverrides[slot])` directly
                    // eslint-disable-next-line guard-for-in
                    for(const slotKey in styleOverrides){
                        resolvedStyleOverrides[slotKey] = processStyle(props, styleOverrides[slotKey], props.theme.modularCssLayers ? 'theme' : undefined);
                    }
                    return overridesResolver(props, resolvedStyleOverrides);
                });
            }
            if (componentName && !skipVariantsResolver) {
                expressionsTail.push(function styleThemeVariants(props) {
                    const theme = props.theme;
                    const themeVariants = theme?.components?.[componentName]?.variants;
                    if (!themeVariants) {
                        return null;
                    }
                    return processStyleVariants(props, themeVariants, [], props.theme.modularCssLayers ? 'theme' : undefined);
                });
            }
            if (!skipSx) {
                expressionsTail.push(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$system$2f$esm$2f$styleFunctionSx$2f$styleFunctionSx$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]);
            }
            // This function can be called as a tagged template, so the first argument would contain
            // CSS `string[]` values.
            if (Array.isArray(expressionsBody[0])) {
                const inputStrings = expressionsBody.shift();
                // We need to add placeholders in the tagged template for the custom functions we have
                // possibly added (attachTheme, overrides, variants, and sx).
                const placeholdersHead = new Array(expressionsHead.length).fill('');
                const placeholdersTail = new Array(expressionsTail.length).fill('');
                let outputStrings;
                // prettier-ignore
                {
                    outputStrings = [
                        ...placeholdersHead,
                        ...inputStrings,
                        ...placeholdersTail
                    ];
                    outputStrings.raw = [
                        ...placeholdersHead,
                        ...inputStrings.raw,
                        ...placeholdersTail
                    ];
                }
                // The only case where we put something before `attachTheme`
                expressionsHead.unshift(outputStrings);
            }
            const expressions = [
                ...expressionsHead,
                ...expressionsBody,
                ...expressionsTail
            ];
            const Component = defaultStyledResolver(...expressions);
            if (tag.muiName) {
                Component.muiName = tag.muiName;
            }
            if ("TURBOPACK compile-time truthy", 1) {
                Component.displayName = generateDisplayName(componentName, componentSlot, tag);
            }
            return Component;
        };
        if (defaultStyledResolver.withConfig) {
            muiStyledResolver.withConfig = defaultStyledResolver.withConfig;
        }
        return muiStyledResolver;
    };
    return styled;
}
function generateDisplayName(componentName, componentSlot, tag) {
    if (componentName) {
        return `${componentName}${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$capitalize$2f$capitalize$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(componentSlot || '')}`;
    }
    return `Styled(${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$getDisplayName$2f$getDisplayName$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(tag)})`;
}
function generateStyledLabel(componentName, componentSlot) {
    let label;
    if ("TURBOPACK compile-time truthy", 1) {
        if (componentName) {
            // TODO v6: remove `lowercaseFirstLetter()` in the next major release
            // For more details: https://github.com/mui/material-ui/pull/37908
            label = `${componentName}-${lowercaseFirstLetter(componentSlot || 'Root')}`;
        }
    }
    return label;
}
function isObjectEmpty(object) {
    // eslint-disable-next-line
    for(const _ in object){
        return false;
    }
    return true;
}
// https://github.com/emotion-js/emotion/blob/26ded6109fcd8ca9875cc2ce4564fee678a3f3c5/packages/styled/src/utils.js#L40
function isStringTag(tag) {
    return typeof tag === 'string' && // 96 is one less than the char code
    // for "a" so this is checking that
    // it's a lowercase character
    tag.charCodeAt(0) > 96;
}
function lowercaseFirstLetter(string) {
    if (!string) {
        return string;
    }
    return string.charAt(0).toLowerCase() + string.slice(1);
}
}),
"[project]/node_modules/@mui/system/esm/styled/styled.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$system$2f$esm$2f$createStyled$2f$createStyled$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/system/esm/createStyled/createStyled.js [app-ssr] (ecmascript)");
;
const styled = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$system$2f$esm$2f$createStyled$2f$createStyled$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])();
const __TURBOPACK__default__export__ = styled;
}),
"[project]/node_modules/@mui/system/esm/Container/createContainer.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>createContainer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/prop-types/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$generateUtilityClass$2f$generateUtilityClass$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$composeClasses$2f$composeClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/utils/esm/composeClasses/composeClasses.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$capitalize$2f$capitalize$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/utils/esm/capitalize/capitalize.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$system$2f$esm$2f$useThemeProps$2f$useThemeProps$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/system/esm/useThemeProps/useThemeProps.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$system$2f$esm$2f$styled$2f$styled$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/system/esm/styled/styled.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$system$2f$esm$2f$createTheme$2f$createTheme$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/system/esm/createTheme/createTheme.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
;
;
const defaultTheme = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$system$2f$esm$2f$createTheme$2f$createTheme$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])();
const defaultCreateStyledComponent = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$system$2f$esm$2f$styled$2f$styled$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])('div', {
    name: 'MuiContainer',
    slot: 'Root',
    overridesResolver: (props, styles)=>{
        const { ownerState } = props;
        return [
            styles.root,
            styles[`maxWidth${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$capitalize$2f$capitalize$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(String(ownerState.maxWidth))}`],
            ownerState.fixed && styles.fixed,
            ownerState.disableGutters && styles.disableGutters
        ];
    }
});
const useThemePropsDefault = (inProps)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$system$2f$esm$2f$useThemeProps$2f$useThemeProps$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])({
        props: inProps,
        name: 'MuiContainer',
        defaultTheme
    });
const useUtilityClasses = (ownerState, componentName)=>{
    const getContainerUtilityClass = (slot)=>{
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$generateUtilityClass$2f$generateUtilityClass$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(componentName, slot);
    };
    const { classes, fixed, disableGutters, maxWidth } = ownerState;
    const slots = {
        root: [
            'root',
            maxWidth && `maxWidth${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$capitalize$2f$capitalize$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(String(maxWidth))}`,
            fixed && 'fixed',
            disableGutters && 'disableGutters'
        ]
    };
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$composeClasses$2f$composeClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(slots, getContainerUtilityClass, classes);
};
function createContainer(options = {}) {
    const { // This will allow adding custom styled fn (for example for custom sx style function)
    createStyledComponent = defaultCreateStyledComponent, useThemeProps = useThemePropsDefault, componentName = 'MuiContainer' } = options;
    const ContainerRoot = createStyledComponent(({ theme, ownerState })=>({
            width: '100%',
            marginLeft: 'auto',
            boxSizing: 'border-box',
            marginRight: 'auto',
            ...!ownerState.disableGutters && {
                paddingLeft: theme.spacing(2),
                paddingRight: theme.spacing(2),
                // @ts-ignore module augmentation fails if custom breakpoints are used
                [theme.breakpoints.up('sm')]: {
                    paddingLeft: theme.spacing(3),
                    paddingRight: theme.spacing(3)
                }
            }
        }), ({ theme, ownerState })=>ownerState.fixed && Object.keys(theme.breakpoints.values).reduce((acc, breakpointValueKey)=>{
            const breakpoint = breakpointValueKey;
            const value = theme.breakpoints.values[breakpoint];
            if (value !== 0) {
                // @ts-ignore
                acc[theme.breakpoints.up(breakpoint)] = {
                    maxWidth: `${value}${theme.breakpoints.unit}`
                };
            }
            return acc;
        }, {}), ({ theme, ownerState })=>({
            // @ts-ignore module augmentation fails if custom breakpoints are used
            ...ownerState.maxWidth === 'xs' && {
                // @ts-ignore module augmentation fails if custom breakpoints are used
                [theme.breakpoints.up('xs')]: {
                    // @ts-ignore module augmentation fails if custom breakpoints are used
                    maxWidth: Math.max(theme.breakpoints.values.xs, 444)
                }
            },
            ...ownerState.maxWidth && // @ts-ignore module augmentation fails if custom breakpoints are used
            ownerState.maxWidth !== 'xs' && {
                // @ts-ignore module augmentation fails if custom breakpoints are used
                [theme.breakpoints.up(ownerState.maxWidth)]: {
                    // @ts-ignore module augmentation fails if custom breakpoints are used
                    maxWidth: `${theme.breakpoints.values[ownerState.maxWidth]}${theme.breakpoints.unit}`
                }
            }
        }));
    const Container = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](function Container(inProps, ref) {
        const props = useThemeProps(inProps);
        const { className, component = 'div', disableGutters = false, fixed = false, maxWidth = 'lg', classes: classesProp, ...other } = props;
        const ownerState = {
            ...props,
            component,
            disableGutters,
            fixed,
            maxWidth
        };
        // @ts-ignore module augmentation fails if custom breakpoints are used
        const classes = useUtilityClasses(ownerState, componentName);
        return(/*#__PURE__*/ // @ts-ignore theme is injected by the styled util
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(ContainerRoot, {
            as: component,
            ownerState: ownerState,
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(classes.root, className),
            ref: ref,
            ...other
        }));
    });
    ("TURBOPACK compile-time truthy", 1) ? Container.propTypes = {
        children: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].node,
        classes: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].object,
        className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].string,
        component: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].elementType,
        disableGutters: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].bool,
        fixed: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].bool,
        maxWidth: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"] /* @typescript-to-proptypes-ignore */ .oneOfType([
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].oneOf([
                'xs',
                'sm',
                'md',
                'lg',
                'xl',
                false
            ]),
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].string
        ]),
        sx: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].oneOfType([
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].arrayOf(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].oneOfType([
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].func,
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].object,
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].bool
            ])),
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].func,
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].object
        ])
    } : "TURBOPACK unreachable";
    return Container;
}
}),
"[project]/node_modules/@mui/system/esm/Container/createContainer.js [app-ssr] (ecmascript) <export default as createContainer>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createContainer",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$system$2f$esm$2f$Container$2f$createContainer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$system$2f$esm$2f$Container$2f$createContainer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/system/esm/Container/createContainer.js [app-ssr] (ecmascript)");
}),
"[project]/node_modules/@mui/material/esm/utils/capitalize.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$capitalize$2f$capitalize$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/utils/esm/capitalize/capitalize.js [app-ssr] (ecmascript)");
;
const __TURBOPACK__default__export__ = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$capitalize$2f$capitalize$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"];
}),
"[project]/node_modules/@mui/material/esm/styles/defaultTheme.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$createTheme$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/styles/createTheme.js [app-ssr] (ecmascript)");
'use client';
;
const defaultTheme = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$createTheme$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])();
const __TURBOPACK__default__export__ = defaultTheme;
}),
"[project]/node_modules/@mui/material/esm/styles/slotShouldForwardProp.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
// copied from @mui/system/createStyled
function slotShouldForwardProp(prop) {
    return prop !== 'ownerState' && prop !== 'theme' && prop !== 'sx' && prop !== 'as';
}
const __TURBOPACK__default__export__ = slotShouldForwardProp;
}),
"[project]/node_modules/@mui/material/esm/styles/rootShouldForwardProp.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$slotShouldForwardProp$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/styles/slotShouldForwardProp.js [app-ssr] (ecmascript)");
;
const rootShouldForwardProp = (prop)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$slotShouldForwardProp$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(prop) && prop !== 'classes';
const __TURBOPACK__default__export__ = rootShouldForwardProp;
}),
"[project]/node_modules/@mui/material/esm/styles/styled.js [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$system$2f$esm$2f$createStyled$2f$createStyled$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/system/esm/createStyled/createStyled.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$defaultTheme$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/styles/defaultTheme.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$identifier$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/styles/identifier.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$rootShouldForwardProp$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/styles/rootShouldForwardProp.js [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
const styled = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$system$2f$esm$2f$createStyled$2f$createStyled$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])({
    themeId: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$identifier$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
    defaultTheme: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$defaultTheme$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
    rootShouldForwardProp: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$rootShouldForwardProp$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
});
const __TURBOPACK__default__export__ = styled;
}),
"[project]/node_modules/@mui/system/esm/DefaultPropsProvider/DefaultPropsProvider.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "useDefaultProps",
    ()=>useDefaultProps
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/prop-types/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$resolveProps$2f$resolveProps$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/utils/esm/resolveProps/resolveProps.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
'use client';
;
;
;
;
const PropsContext = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"](undefined);
function DefaultPropsProvider({ value, children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(PropsContext.Provider, {
        value: value,
        children: children
    });
}
("TURBOPACK compile-time truthy", 1) ? DefaultPropsProvider.propTypes = {
    // ┌────────────────────────────── Warning ──────────────────────────────┐
    // │ These PropTypes are generated from the TypeScript type definitions. │
    // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
    // └─────────────────────────────────────────────────────────────────────┘
    /**
   * @ignore
   */ children: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].node,
    /**
   * @ignore
   */ value: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].object
} : "TURBOPACK unreachable";
function getThemeProps(params) {
    const { theme, name, props } = params;
    if (!theme || !theme.components || !theme.components[name]) {
        return props;
    }
    const config = theme.components[name];
    if (config.defaultProps) {
        // compatible with v5 signature
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$resolveProps$2f$resolveProps$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(config.defaultProps, props, theme.components.mergeClassNameAndStyle);
    }
    if (!config.styleOverrides && !config.variants) {
        // v6 signature, no property 'defaultProps'
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$resolveProps$2f$resolveProps$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(config, props, theme.components.mergeClassNameAndStyle);
    }
    return props;
}
function useDefaultProps({ props, name }) {
    const ctx = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"](PropsContext);
    return getThemeProps({
        props,
        name,
        theme: {
            components: ctx
        }
    });
}
const __TURBOPACK__default__export__ = DefaultPropsProvider;
}),
"[project]/node_modules/@mui/material/esm/DefaultPropsProvider/DefaultPropsProvider.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "useDefaultProps",
    ()=>useDefaultProps
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/prop-types/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$system$2f$esm$2f$DefaultPropsProvider$2f$DefaultPropsProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/system/esm/DefaultPropsProvider/DefaultPropsProvider.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
'use client';
;
;
;
;
function DefaultPropsProvider(props) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$system$2f$esm$2f$DefaultPropsProvider$2f$DefaultPropsProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        ...props
    });
}
("TURBOPACK compile-time truthy", 1) ? DefaultPropsProvider.propTypes = {
    // ┌────────────────────────────── Warning ──────────────────────────────┐
    // │ These PropTypes are generated from the TypeScript type definitions. │
    // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
    // └─────────────────────────────────────────────────────────────────────┘
    /**
   * @ignore
   */ children: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].node,
    /**
   * @ignore
   */ value: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].object.isRequired
} : "TURBOPACK unreachable";
const __TURBOPACK__default__export__ = DefaultPropsProvider;
function useDefaultProps(params) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$system$2f$esm$2f$DefaultPropsProvider$2f$DefaultPropsProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useDefaultProps"])(params);
}
}),
"[project]/node_modules/@mui/material/esm/Container/Container.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/prop-types/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$system$2f$esm$2f$Container$2f$createContainer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__createContainer$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/system/esm/Container/createContainer.js [app-ssr] (ecmascript) <export default as createContainer>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$utils$2f$capitalize$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/utils/capitalize.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$styled$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/styles/styled.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$DefaultPropsProvider$2f$DefaultPropsProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/DefaultPropsProvider/DefaultPropsProvider.js [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
const Container = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$system$2f$esm$2f$Container$2f$createContainer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__createContainer$3e$__["createContainer"])({
    createStyledComponent: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$styled$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"])('div', {
        name: 'MuiContainer',
        slot: 'Root',
        overridesResolver: (props, styles)=>{
            const { ownerState } = props;
            return [
                styles.root,
                styles[`maxWidth${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$utils$2f$capitalize$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(String(ownerState.maxWidth))}`],
                ownerState.fixed && styles.fixed,
                ownerState.disableGutters && styles.disableGutters
            ];
        }
    }),
    useThemeProps: (inProps)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$DefaultPropsProvider$2f$DefaultPropsProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useDefaultProps"])({
            props: inProps,
            name: 'MuiContainer'
        })
});
("TURBOPACK compile-time truthy", 1) ? Container.propTypes = {
    // ┌────────────────────────────── Warning ──────────────────────────────┐
    // │ These PropTypes are generated from the TypeScript type definitions. │
    // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
    // └─────────────────────────────────────────────────────────────────────┘
    /**
   * @ignore
   */ children: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].node,
    /**
   * Override or extend the styles applied to the component.
   */ classes: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].object,
    /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */ component: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].elementType,
    /**
   * If `true`, the left and right padding is removed.
   * @default false
   */ disableGutters: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].bool,
    /**
   * Set the max-width to match the min-width of the current breakpoint.
   * This is useful if you'd prefer to design for a fixed set of sizes
   * instead of trying to accommodate a fully fluid viewport.
   * It's fluid by default.
   * @default false
   */ fixed: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].bool,
    /**
   * Determine the max-width of the container.
   * The container width grows with the size of the screen.
   * Set to `false` to disable `maxWidth`.
   * @default 'lg'
   */ maxWidth: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"] /* @typescript-to-proptypes-ignore */ .oneOfType([
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].oneOf([
            'xs',
            'sm',
            'md',
            'lg',
            'xl',
            false
        ]),
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].string
    ]),
    /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */ sx: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].oneOfType([
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].arrayOf(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].oneOfType([
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].func,
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].object,
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].bool
        ])),
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].func,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].object
    ])
} : "TURBOPACK unreachable";
const __TURBOPACK__default__export__ = Container;
}),
"[project]/node_modules/@mui/material/esm/Container/Container.js [app-ssr] (ecmascript) <export default as Container>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Container",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Container$2f$Container$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Container$2f$Container$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Container/Container.js [app-ssr] (ecmascript)");
}),
];

//# sourceMappingURL=_9d77586a._.js.map