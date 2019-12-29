interface SvgInlineReactProps {
    src: string;
    raw?: boolean;
    element?: string;
}
  
declare module 'svg-inline-react' {
    export default class InlineSVG extends React.Component<SvgInlineReactProps, any> {
    }
}