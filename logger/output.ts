import colors from "./colors";

export default class {
    public static write(color: string, text: string | string[]) {
        console.log(
            `${color}${Array.isArray(text) ? text.join(" ") : text}${colors.reset}`
        );
    }

    public static signal(text: string | string[]) {
        return this.write(colors.fg.green, text);
    }

    public static alert(text: string | string[]) {
        return this.write(colors.fg.red, text);
    }

    public static record(text: string | string[]) {
        return this.write(colors.fg.cyan, text);
    }

    public static json(obj: object) {
        console.info(obj);
    }
}