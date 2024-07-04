import streamChild from "./stream.child";

export default class Stream {
    public static apply(...args: any[]) {
        return new streamChild(...args);
    }
}