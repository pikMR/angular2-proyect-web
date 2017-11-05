import { Observable } from "rxjs/Observable";
export class PoolData {
    poolObservables: Array<Observable<Response>> = [];

    private addObservable(obs: Observable<Response>) {
            this.poolObservables.push(obs);
    }

    public AgregarObservable(obs: Observable<Response>) : boolean {
        if (!this.isEmpty()) {
            if (!this.poolObservables.includes(obs)) {
                this.addObservable(obs);
                return true;
            } else {
                return false;
            }
        }
    }

    private isEmpty() {
        if (this.poolObservables.length > 0)
            return false;

        return true;
    }

}
