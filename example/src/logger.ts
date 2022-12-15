export const logger = {
    info: (args: any) => console.log(args),
    error: (args: any) => console.error(args),
} as const;
