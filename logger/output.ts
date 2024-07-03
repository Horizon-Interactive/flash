import colors from "./colors";

export default class {
    public static write(color: string, text: string) {
        console.log(`${color}${text}${colors.reset}`);
    }
}