import colors from "flash/logger/colors";
import output from "flash/logger/output";

export default class {
    private args: any[];

    constructor(...args: any[]) {
        this.args = args;
    }

    public process(...fns: ((...args: any[]) => any)[]) {
        for (const fn of fns) {
            try {
                fn(this.args);
            } catch (e) {
                output.write(colors.fg.yellow, e as string);
            }
        }
    }
}