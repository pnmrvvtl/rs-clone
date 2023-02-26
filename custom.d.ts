declare module '*.png'
declare module '*.svg'
declare module '*.jpg'
declare module '*.gif'
declare module '*.jpeg' {
    const content: string
    export default content
}
declare module '*.scss' {
    const content: Record<string, string>;
    export default content;
}