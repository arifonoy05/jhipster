import { Injectable } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Resolve, ActivatedRouteSnapshot, Router } from '@angular/router';
import { Observable, of, EMPTY } from 'rxjs';
import { mergeMap } from 'rxjs/operators';

import { IProduct } from '../product.model';
import { ProductService } from '../service/product.service';

@Injectable({ providedIn: 'root' })
export class ProductRoutingResolveService implements Resolve<IProduct | null> {
    constructor(protected service: ProductService, protected router: Router) {}

    resolve(route: ActivatedRouteSnapshot): Observable<IProduct | null | never> {
        const id = route.params['id'];
        if (id) {
            return this.service.find(id).pipe(
                mergeMap((product: HttpResponse<IProduct>) => {
                    if (product.body) {
                        return of(product.body);
                    } else {
                        this.router.navigate(['404']);
                        return EMPTY;
                    }
                })
            );
        }
        return of(null);
    }
}
