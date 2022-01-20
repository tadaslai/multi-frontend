import {NgModule} from '@angular/core';
import {Apollo} from 'apollo-angular';
import { InMemoryCache} from '@apollo/client/core';
import {HttpLink} from 'apollo-angular/http';
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  exports: [
    HttpClientModule
  ]
})
export class GraphQLModule {

  constructor(apollo: Apollo, httpLink: HttpLink) {
    const uri = 'http://localhost:8000/graphql';
    const http = httpLink.create({ uri });
    apollo.create({
      link: http,
      cache: new InMemoryCache()
    });
  }
}
