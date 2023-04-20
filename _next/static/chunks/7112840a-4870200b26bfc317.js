"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[16],{19:function(e,t,n){n.d(t,{$q:function(){return uI},AK:function(){return uG},Ab:function(){return uz},B$:function(){return aH},Bt:function(){return u$},Cf:function(){return aP},EK:function(){return O},ET:function(){return uV},Eo:function(){return aX},F8:function(){return o_},Fc:function(){return op},GL:function(){return uL},IO:function(){return o3},IX:function(){return ol},Ix:function(){return ow},JU:function(){return aY},Jj:function(){return oE},K9:function(){return T},Ky:function(){return G},L$:function(){return ob},Lx:function(){return uu},Lz:function(){return oS},Me:function(){return eE},Mx:function(){return oy},PL:function(){return uD},PU:function(){return uP},Pb:function(){return oI},QT:function(){return uE},ST:function(){return of},TF:function(){return ov},TQ:function(){return ua},UQ:function(){return uN},Ub:function(){return p},W:function(){return ub},WA:function(){return S},Wi:function(){return aF},Wu:function(){return ul},Xb:function(){return K},Xk:function(){return u_},Xo:function(){return ue},ar:function(){return o9},at:function(){return a$},b9:function(){return un},cf:function(){return uM},e0:function(){return us},fH:function(){return om},hJ:function(){return aW},i3:function(){return uK},iE:function(){return aZ},kl:function(){return ux},l7:function(){return ep},my:function(){return aQ},nP:function(){return uj},oe:function(){return uR},pl:function(){return uC},qK:function(){return uT},qY:function(){return oh},r7:function(){return uA},sc:function(){return uF},u7:function(){return ug},vh:function(){return ur},vr:function(){return uQ},xU:function(){return uv},yq:function(){return v},zN:function(){return uk}});var r,i,s=n(5816),a=n(8463),o=n(3333),u=n(4444),l=n(3510),c=n(3454);let h="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d{constructor(e){this.uid=e}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}d.UNAUTHENTICATED=new d(null),d.GOOGLE_CREDENTIALS=new d("google-credentials-uid"),d.FIRST_PARTY=new d("first-party-uid"),d.MOCK_USER=new d("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let f="9.17.1",m=new o.Yd("@firebase/firestore");function g(){return m.logLevel}function p(e){m.setLogLevel(e)}function y(e,...t){if(m.logLevel<=o.in.DEBUG){let n=t.map(I);m.debug(`Firestore (${f}): ${e}`,...n)}}function w(e,...t){if(m.logLevel<=o.in.ERROR){let n=t.map(I);m.error(`Firestore (${f}): ${e}`,...n)}}function v(e,...t){if(m.logLevel<=o.in.WARN){let n=t.map(I);m.warn(`Firestore (${f}): ${e}`,...n)}}function I(e){if("string"==typeof e)return e;try{return JSON.stringify(e)}catch(t){return e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function b(e="Unexpected state"){let t=`FIRESTORE (${f}) INTERNAL ASSERTION FAILED: `+e;throw w(t),Error(t)}function T(e,t){e||b()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let E={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class S extends u.ZR{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class D{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(d.UNAUTHENTICATED))}shutdown(){}}class N{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class k{constructor(e){this.t=e,this.currentUser=d.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){let n=this.i,r=e=>this.i!==n?(n=this.i,t(e)):Promise.resolve(),i=new x;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new x,e.enqueueRetryable(()=>r(this.currentUser))};let s=()=>{let t=i;e.enqueueRetryable(async()=>{await t.promise,await r(this.currentUser)})},a=e=>{y("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=e,this.auth.addAuthTokenListener(this.o),s()};this.t.onInit(e=>a(e)),setTimeout(()=>{if(!this.auth){let e=this.t.getImmediate({optional:!0});e?a(e):(y("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new x)}},0),s()}getToken(){let e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(t=>this.i!==e?(y("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):t?("string"==typeof t.accessToken||b(),new _(t.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){let e=this.auth&&this.auth.getUid();return null===e||"string"==typeof e||b(),new d(e)}}class C{constructor(e,t,n,r){this.h=e,this.l=t,this.m=n,this.g=r,this.type="FirstParty",this.user=d.FIRST_PARTY,this.p=new Map}I(){return this.g?this.g():("object"==typeof this.h&&null!==this.h&&this.h.auth&&this.h.auth.getAuthHeaderValueForFirstParty||b(),this.h.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.p.set("X-Goog-AuthUser",this.l);let e=this.I();return e&&this.p.set("Authorization",e),this.m&&this.p.set("X-Goog-Iam-Authorization-Token",this.m),this.p}}class A{constructor(e,t,n,r){this.h=e,this.l=t,this.m=n,this.g=r}getToken(){return Promise.resolve(new C(this.h,this.l,this.m,this.g))}start(e,t){e.enqueueRetryable(()=>t(d.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class R{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class V{constructor(e){this.T=e,this.forceRefresh=!1,this.appCheck=null,this.A=null}start(e,t){let n=e=>{null!=e.error&&y("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${e.error.message}`);let n=e.token!==this.A;return this.A=e.token,y("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?t(e.token):Promise.resolve()};this.o=t=>{e.enqueueRetryable(()=>n(t))};let r=e=>{y("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=e,this.appCheck.addTokenListener(this.o)};this.T.onInit(e=>r(e)),setTimeout(()=>{if(!this.appCheck){let e=this.T.getImmediate({optional:!0});e?r(e):y("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){let e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(e=>e?("string"==typeof e.token||b(),this.A=e.token,new R(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M{static R(){let e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length,n="";for(;n.length<20;){let r=/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function(e){let t="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&"function"==typeof t.getRandomValues)t.getRandomValues(n);else for(let t=0;t<e;t++)n[t]=Math.floor(256*Math.random());return n}(40);for(let i=0;i<r.length;++i)n.length<20&&r[i]<t&&(n+=e.charAt(r[i]%e.length))}return n}}function F(e,t){return e<t?-1:e>t?1:0}function L(e,t,n){return e.length===t.length&&e.every((e,r)=>n(e,t[r]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0||t>=1e9)throw new S(E.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800||e>=253402300800)throw new S(E.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return O.fromMillis(Date.now())}static fromDate(e){return O.fromMillis(e.getTime())}static fromMillis(e){let t=Math.floor(e/1e3);return new O(t,Math.floor(1e6*(e-1e3*t)))}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?F(this.nanoseconds,e.nanoseconds):F(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){let e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q{constructor(e){this.timestamp=e}static fromTimestamp(e){return new q(e)}static min(){return new q(new O(0,0))}static max(){return new q(new O(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P{constructor(e,t,n){void 0===t?t=0:t>e.length&&b(),void 0===n?n=e.length-t:n>e.length-t&&b(),this.segments=e,this.offset=t,this.len=n}get length(){return this.len}isEqual(e){return 0===P.comparator(this,e)}child(e){let t=this.segments.slice(this.offset,this.limit());return e instanceof P?e.forEach(e=>{t.push(e)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=void 0===e?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return 0===this.length}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,n=this.limit();t<n;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){let n=Math.min(e.length,t.length);for(let r=0;r<n;r++){let n=e.get(r),i=t.get(r);if(n<i)return -1;if(n>i)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class U extends P{construct(e,t,n){return new U(e,t,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){let t=[];for(let n of e){if(n.indexOf("//")>=0)throw new S(E.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);t.push(...n.split("/").filter(e=>e.length>0))}return new U(t)}static emptyPath(){return new U([])}}let B=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class K extends P{construct(e,t,n){return new K(e,t,n)}static isValidIdentifier(e){return B.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),K.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new K(["__name__"])}static fromServerFormat(e){let t=[],n="",r=0,i=()=>{if(0===n.length)throw new S(E.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(n),n=""},s=!1;for(;r<e.length;){let t=e[r];if("\\"===t){if(r+1===e.length)throw new S(E.INVALID_ARGUMENT,"Path has trailing escape character: "+e);let t=e[r+1];if("\\"!==t&&"."!==t&&"`"!==t)throw new S(E.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);n+=t,r+=2}else"`"===t?(s=!s,r++):"."!==t||s?(n+=t,r++):(i(),r++)}if(i(),s)throw new S(E.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new K(t)}static emptyPath(){return new K([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G{constructor(e){this.path=e}static fromPath(e){return new G(U.fromString(e))}static fromName(e){return new G(U.fromString(e).popFirst(5))}static empty(){return new G(U.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return null!==e&&0===U.comparator(this.path,e.path)}toString(){return this.path.toString()}static comparator(e,t){return U.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new G(new U(e.slice()))}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ${constructor(e,t,n,r){this.indexId=e,this.collectionGroup=t,this.fields=n,this.indexState=r}}function Q(e){return e.fields.find(e=>2===e.kind)}function z(e){return e.fields.filter(e=>2!==e.kind)}$.UNKNOWN_ID=-1;class j{constructor(e,t){this.fieldPath=e,this.kind=t}}class W{constructor(e,t){this.sequenceNumber=e,this.offset=t}static empty(){return new W(0,X.min())}}function H(e,t){let n=e.toTimestamp().seconds,r=e.toTimestamp().nanoseconds+1,i=q.fromTimestamp(1e9===r?new O(n+1,0):new O(n,r));return new X(i,G.empty(),t)}function Y(e){return new X(e.readTime,e.key,-1)}class X{constructor(e,t,n){this.readTime=e,this.documentKey=t,this.largestBatchId=n}static min(){return new X(q.min(),G.empty(),-1)}static max(){return new X(q.max(),G.empty(),-1)}}function Z(e,t){let n=e.readTime.compareTo(t.readTime);return 0!==n?n:0!==(n=G.comparator(e.documentKey,t.documentKey))?n:F(e.largestBatchId,t.largestBatchId)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let J="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class ee{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function et(e){if(e.code!==E.FAILED_PRECONDITION||e.message!==J)throw e;y("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class en{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&b(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new en((n,r)=>{this.nextCallback=t=>{this.wrapSuccess(e,t).next(n,r)},this.catchCallback=e=>{this.wrapFailure(t,e).next(n,r)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{let t=e();return t instanceof en?t:en.resolve(t)}catch(e){return en.reject(e)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):en.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):en.reject(t)}static resolve(e){return new en((t,n)=>{t(e)})}static reject(e){return new en((t,n)=>{n(e)})}static waitFor(e){return new en((t,n)=>{let r=0,i=0,s=!1;e.forEach(e=>{++r,e.next(()=>{++i,s&&i===r&&t()},e=>n(e))}),s=!0,i===r&&t()})}static or(e){let t=en.resolve(!1);for(let n of e)t=t.next(e=>e?en.resolve(e):n());return t}static forEach(e,t){let n=[];return e.forEach((e,r)=>{n.push(t.call(this,e,r))}),this.waitFor(n)}static mapArray(e,t){return new en((n,r)=>{let i=e.length,s=Array(i),a=0;for(let o=0;o<i;o++){let u=o;t(e[u]).next(e=>{s[u]=e,++a===i&&n(s)},e=>r(e))}})}static doWhile(e,t){return new en((n,r)=>{let i=()=>{!0===e()?t().next(()=>{i()},r):n()};i()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class er{constructor(e,t){this.action=e,this.transaction=t,this.aborted=!1,this.P=new x,this.transaction.oncomplete=()=>{this.P.resolve()},this.transaction.onabort=()=>{t.error?this.P.reject(new ea(e,t.error)):this.P.resolve()},this.transaction.onerror=t=>{let n=eh(t.target.error);this.P.reject(new ea(e,n))}}static open(e,t,n,r){try{return new er(t,e.transaction(r,n))}catch(e){throw new ea(t,e)}}get v(){return this.P.promise}abort(e){e&&this.P.reject(e),this.aborted||(y("SimpleDb","Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}V(){let e=this.transaction;this.aborted||"function"!=typeof e.commit||e.commit()}store(e){let t=this.transaction.objectStore(e);return new eu(t)}}class ei{constructor(e,t,n){this.name=e,this.version=t,this.S=n,12.2===ei.D((0,u.z$)())&&w("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(e){return y("SimpleDb","Removing database:",e),el(window.indexedDB.deleteDatabase(e)).toPromise()}static C(){if(!(0,u.hl)())return!1;if(ei.N())return!0;let e=(0,u.z$)(),t=ei.D(e),n=ei.k(e);return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||0<t&&t<10||0<n&&n<4.5)}static N(){var e;return void 0!==c&&"YES"===(null===(e=c.env)||void 0===e?void 0:e.O)}static M(e,t){return e.store(t)}static D(e){let t=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),n=t?t[1].split("_").slice(0,2).join("."):"-1";return Number(n)}static k(e){let t=e.match(/Android ([\d.]+)/i),n=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(n)}async F(e){return this.db||(y("SimpleDb","Opening database:",this.name),this.db=await new Promise((t,n)=>{let r=indexedDB.open(this.name,this.version);r.onsuccess=e=>{let n=e.target.result;t(n)},r.onblocked=()=>{n(new ea(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},r.onerror=t=>{let r=t.target.error;"VersionError"===r.name?n(new S(E.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):"InvalidStateError"===r.name?n(new S(E.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+r)):n(new ea(e,r))},r.onupgradeneeded=e=>{y("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',e.oldVersion);let t=e.target.result;this.S.$(t,r.transaction,e.oldVersion,this.version).next(()=>{y("SimpleDb","Database upgrade to version "+this.version+" complete")})}})),this.B&&(this.db.onversionchange=e=>this.B(e)),this.db}L(e){this.B=e,this.db&&(this.db.onversionchange=t=>e(t))}async runTransaction(e,t,n,r){let i="readonly"===t,s=0;for(;;){++s;try{this.db=await this.F(e);let t=er.open(this.db,e,i?"readonly":"readwrite",n),s=r(t).next(e=>(t.V(),e)).catch(e=>(t.abort(e),en.reject(e))).toPromise();return s.catch(()=>{}),await t.v,s}catch(t){let e="FirebaseError"!==t.name&&s<3;if(y("SimpleDb","Transaction failed with error:",t.message,"Retrying:",e),this.close(),!e)return Promise.reject(t)}}}close(){this.db&&this.db.close(),this.db=void 0}}class es{constructor(e){this.q=e,this.U=!1,this.K=null}get isDone(){return this.U}get G(){return this.K}set cursor(e){this.q=e}done(){this.U=!0}j(e){this.K=e}delete(){return el(this.q.delete())}}class ea extends S{constructor(e,t){super(E.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${t}`),this.name="IndexedDbTransactionError"}}function eo(e){return"IndexedDbTransactionError"===e.name}class eu{constructor(e){this.store=e}put(e,t){let n;return void 0!==t?(y("SimpleDb","PUT",this.store.name,e,t),n=this.store.put(t,e)):(y("SimpleDb","PUT",this.store.name,"<auto-key>",e),n=this.store.put(e)),el(n)}add(e){return y("SimpleDb","ADD",this.store.name,e,e),el(this.store.add(e))}get(e){return el(this.store.get(e)).next(t=>(void 0===t&&(t=null),y("SimpleDb","GET",this.store.name,e,t),t))}delete(e){return y("SimpleDb","DELETE",this.store.name,e),el(this.store.delete(e))}count(){return y("SimpleDb","COUNT",this.store.name),el(this.store.count())}W(e,t){let n=this.options(e,t);if(n.index||"function"!=typeof this.store.getAll){let e=this.cursor(n),t=[];return this.H(e,(e,n)=>{t.push(n)}).next(()=>t)}{let e=this.store.getAll(n.range);return new en((t,n)=>{e.onerror=e=>{n(e.target.error)},e.onsuccess=e=>{t(e.target.result)}})}}J(e,t){let n=this.store.getAll(e,null===t?void 0:t);return new en((e,t)=>{n.onerror=e=>{t(e.target.error)},n.onsuccess=t=>{e(t.target.result)}})}Y(e,t){y("SimpleDb","DELETE ALL",this.store.name);let n=this.options(e,t);n.X=!1;let r=this.cursor(n);return this.H(r,(e,t,n)=>n.delete())}Z(e,t){let n;t?n=e:(n={},t=e);let r=this.cursor(n);return this.H(r,t)}tt(e){let t=this.cursor({});return new en((n,r)=>{t.onerror=e=>{let t=eh(e.target.error);r(t)},t.onsuccess=t=>{let r=t.target.result;r?e(r.primaryKey,r.value).next(e=>{e?r.continue():n()}):n()}})}H(e,t){let n=[];return new en((r,i)=>{e.onerror=e=>{i(e.target.error)},e.onsuccess=e=>{let i=e.target.result;if(!i)return void r();let s=new es(i),a=t(i.primaryKey,i.value,s);if(a instanceof en){let e=a.catch(e=>(s.done(),en.reject(e)));n.push(e)}s.isDone?r():null===s.G?i.continue():i.continue(s.G)}}).next(()=>en.waitFor(n))}options(e,t){let n;return void 0!==e&&("string"==typeof e?n=e:t=e),{index:n,range:t}}cursor(e){let t="next";if(e.reverse&&(t="prev"),e.index){let n=this.store.index(e.index);return e.X?n.openKeyCursor(e.range,t):n.openCursor(e.range,t)}return this.store.openCursor(e.range,t)}}function el(e){return new en((t,n)=>{e.onsuccess=e=>{let n=e.target.result;t(n)},e.onerror=e=>{let t=eh(e.target.error);n(t)}})}let ec=!1;function eh(e){let t=ei.D((0,u.z$)());if(t>=12.2&&t<13){let t="An internal error was encountered in the Indexed Database server";if(e.message.indexOf(t)>=0){let e=new S("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${t}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return ec||(ec=!0,setTimeout(()=>{throw e},0)),e}}return e}class ed{constructor(e,t){this.asyncQueue=e,this.et=t,this.task=null}start(){this.nt(15e3)}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return null!==this.task}nt(e){y("IndexBackiller",`Scheduled in ${e}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",e,async()=>{this.task=null;try{y("IndexBackiller",`Documents written: ${await this.et.st()}`)}catch(e){eo(e)?y("IndexBackiller","Ignoring IndexedDB error during index backfill: ",e):await et(e)}await this.nt(6e4)})}}class ef{constructor(e,t){this.localStore=e,this.persistence=t}async st(e=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",t=>this.it(t,e))}it(e,t){let n=new Set,r=t,i=!0;return en.doWhile(()=>!0===i&&r>0,()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(e).next(t=>{if(null!==t&&!n.has(t))return y("IndexBackiller",`Processing collection: ${t}`),this.rt(e,t,r).next(e=>{r-=e,n.add(t)});i=!1})).next(()=>t-r)}rt(e,t,n){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(e,t).next(r=>this.localStore.localDocuments.getNextDocuments(e,t,r,n).next(n=>{let i=n.changes;return this.localStore.indexManager.updateIndexEntries(e,i).next(()=>this.ot(r,n)).next(n=>(y("IndexBackiller",`Updating offset: ${n}`),this.localStore.indexManager.updateCollectionGroup(e,t,n))).next(()=>i.size)}))}ot(e,t){let n=e;return t.changes.forEach((e,t)=>{let r=Y(t);Z(r,n)>0&&(n=r)}),new X(n.readTime,n.documentKey,Math.max(t.batchId,e.largestBatchId))}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class em{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=e=>this.ut(e),this.ct=e=>t.writeSequenceNumber(e))}ut(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){let e=++this.previousValue;return this.ct&&this.ct(e),e}}em.at=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eg{constructor(e,t,n,r,i,s,a,o){this.databaseId=e,this.appId=t,this.persistenceKey=n,this.host=r,this.ssl=i,this.forceLongPolling=s,this.autoDetectLongPolling=a,this.useFetchStreams=o}}class ep{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new ep("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(e){return e instanceof ep&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ey(e){let t=0;for(let n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function ew(e,t){for(let n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function ev(e){for(let t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eI(e){return null==e}function eb(e){return 0===e&&1/e==-1/0}function eT(e){return"number"==typeof e&&Number.isInteger(e)&&!eb(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eE(){return"undefined"!=typeof atob}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eS{constructor(e){this.binaryString=e}static fromBase64String(e){let t=atob(e);return new eS(t)}static fromUint8Array(e){let t=function(e){let t="";for(let n=0;n<e.length;++n)t+=String.fromCharCode(e[n]);return t}(e);return new eS(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return btoa(this.binaryString)}toUint8Array(){return function(e){let t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return t}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return F(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}eS.EMPTY_BYTE_STRING=new eS("");let ex=RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function e_(e){if(e||b(),"string"==typeof e){let t=0,n=ex.exec(e);if(n||b(),n[1]){let e=n[1];t=Number(e=(e+"000000000").substr(0,9))}let r=new Date(e);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:eD(e.seconds),nanos:eD(e.nanos)}}function eD(e){return"number"==typeof e?e:"string"==typeof e?Number(e):0}function eN(e){return"string"==typeof e?eS.fromBase64String(e):eS.fromUint8Array(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ek(e){var t,n;return"server_timestamp"===(null===(n=((null===(t=null==e?void 0:e.mapValue)||void 0===t?void 0:t.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function eC(e){let t=e_(e.mapValue.fields.__local_write_time__.timestampValue);return new O(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let eA={mapValue:{fields:{__type__:{stringValue:"__max__"}}}},eR={nullValue:"NULL_VALUE"};function eV(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?ek(e)?4:ez(e)?9007199254740991:10:b()}function eM(e,t){if(e===t)return!0;let n=eV(e);if(n!==eV(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return eC(e).isEqual(eC(t));case 3:return function(e,t){if("string"==typeof e.timestampValue&&"string"==typeof t.timestampValue&&e.timestampValue.length===t.timestampValue.length)return e.timestampValue===t.timestampValue;let n=e_(e.timestampValue),r=e_(t.timestampValue);return n.seconds===r.seconds&&n.nanos===r.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return eN(e.bytesValue).isEqual(eN(t.bytesValue));case 7:return e.referenceValue===t.referenceValue;case 8:return eD(e.geoPointValue.latitude)===eD(t.geoPointValue.latitude)&&eD(e.geoPointValue.longitude)===eD(t.geoPointValue.longitude);case 2:return function(e,t){if("integerValue"in e&&"integerValue"in t)return eD(e.integerValue)===eD(t.integerValue);if("doubleValue"in e&&"doubleValue"in t){let n=eD(e.doubleValue),r=eD(t.doubleValue);return n===r?eb(n)===eb(r):isNaN(n)&&isNaN(r)}return!1}(e,t);case 9:return L(e.arrayValue.values||[],t.arrayValue.values||[],eM);case 10:return function(e,t){let n=e.mapValue.fields||{},r=t.mapValue.fields||{};if(ey(n)!==ey(r))return!1;for(let e in n)if(n.hasOwnProperty(e)&&(void 0===r[e]||!eM(n[e],r[e])))return!1;return!0}(e,t);default:return b()}}function eF(e,t){return void 0!==(e.values||[]).find(e=>eM(e,t))}function eL(e,t){if(e===t)return 0;let n=eV(e),r=eV(t);if(n!==r)return F(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return F(e.booleanValue,t.booleanValue);case 2:return function(e,t){let n=eD(e.integerValue||e.doubleValue),r=eD(t.integerValue||t.doubleValue);return n<r?-1:n>r?1:n===r?0:isNaN(n)?isNaN(r)?0:-1:1}(e,t);case 3:return eO(e.timestampValue,t.timestampValue);case 4:return eO(eC(e),eC(t));case 5:return F(e.stringValue,t.stringValue);case 6:return function(e,t){let n=eN(e),r=eN(t);return n.compareTo(r)}(e.bytesValue,t.bytesValue);case 7:return function(e,t){let n=e.split("/"),r=t.split("/");for(let e=0;e<n.length&&e<r.length;e++){let t=F(n[e],r[e]);if(0!==t)return t}return F(n.length,r.length)}(e.referenceValue,t.referenceValue);case 8:return function(e,t){let n=F(eD(e.latitude),eD(t.latitude));return 0!==n?n:F(eD(e.longitude),eD(t.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(e,t){let n=e.values||[],r=t.values||[];for(let e=0;e<n.length&&e<r.length;++e){let t=eL(n[e],r[e]);if(t)return t}return F(n.length,r.length)}(e.arrayValue,t.arrayValue);case 10:return function(e,t){if(e===eA.mapValue&&t===eA.mapValue)return 0;if(e===eA.mapValue)return 1;if(t===eA.mapValue)return -1;let n=e.fields||{},r=Object.keys(n),i=t.fields||{},s=Object.keys(i);r.sort(),s.sort();for(let e=0;e<r.length&&e<s.length;++e){let t=F(r[e],s[e]);if(0!==t)return t;let a=eL(n[r[e]],i[s[e]]);if(0!==a)return a}return F(r.length,s.length)}(e.mapValue,t.mapValue);default:throw b()}}function eO(e,t){if("string"==typeof e&&"string"==typeof t&&e.length===t.length)return F(e,t);let n=e_(e),r=e_(t),i=F(n.seconds,r.seconds);return 0!==i?i:F(n.nanos,r.nanos)}function eq(e){var t,n;return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(e){let t=e_(e);return`time(${t.seconds},${t.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?eN(e.bytesValue).toBase64():"referenceValue"in e?(n=e.referenceValue,G.fromName(n).toString()):"geoPointValue"in e?`geo(${(t=e.geoPointValue).latitude},${t.longitude})`:"arrayValue"in e?function(e){let t="[",n=!0;for(let r of e.values||[])n?n=!1:t+=",",t+=eq(r);return t+"]"}(e.arrayValue):"mapValue"in e?function(e){let t=Object.keys(e.fields||{}).sort(),n="{",r=!0;for(let i of t)r?r=!1:n+=",",n+=`${i}:${eq(e.fields[i])}`;return n+"}"}(e.mapValue):b()}function eP(e,t){return{referenceValue:`projects/${e.projectId}/databases/${e.database}/documents/${t.path.canonicalString()}`}}function eU(e){return!!e&&"integerValue"in e}function eB(e){return!!e&&"arrayValue"in e}function eK(e){return!!e&&"nullValue"in e}function eG(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function e$(e){return!!e&&"mapValue"in e}function eQ(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&"object"==typeof e.timestampValue)return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){let t={mapValue:{fields:{}}};return ew(e.mapValue.fields,(e,n)=>t.mapValue.fields[e]=eQ(n)),t}if(e.arrayValue){let t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=eQ(e.arrayValue.values[n]);return t}return Object.assign({},e)}function ez(e){return"__max__"===(((e.mapValue||{}).fields||{}).__type__||{}).stringValue}function ej(e,t){let n=eL(e.value,t.value);return 0!==n?n:e.inclusive&&!t.inclusive?-1:!e.inclusive&&t.inclusive?1:0}function eW(e,t){let n=eL(e.value,t.value);return 0!==n?n:e.inclusive&&!t.inclusive?1:!e.inclusive&&t.inclusive?-1:0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eH{constructor(e,t){this.position=e,this.inclusive=t}}function eY(e,t,n){let r=0;for(let i=0;i<e.position.length;i++){let s=t[i],a=e.position[i];if(r=s.field.isKeyField()?G.comparator(G.fromName(a.referenceValue),n.key):eL(a,n.data.field(s.field)),"desc"===s.dir&&(r*=-1),0!==r)break}return r}function eX(e,t){if(null===e)return null===t;if(null===t||e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!eM(e.position[n],t.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eZ{}class eJ extends eZ{constructor(e,t,n){super(),this.field=e,this.op=t,this.value=n}static create(e,t,n){return e.isKeyField()?"in"===t||"not-in"===t?this.createKeyFieldInFilter(e,t,n):new e8(e,t,n):"array-contains"===t?new te(e,n):"in"===t?new tt(e,n):"not-in"===t?new tn(e,n):"array-contains-any"===t?new tr(e,n):new eJ(e,t,n)}static createKeyFieldInFilter(e,t,n){return"in"===t?new e9(e,n):new e6(e,n)}matches(e){let t=e.data.field(this.field);return"!="===this.op?null!==t&&this.matchesComparison(eL(t,this.value)):null!==t&&eV(this.value)===eV(t)&&this.matchesComparison(eL(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return 0===e;case"!=":return 0!==e;case">":return e>0;case">=":return e>=0;default:return b()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class e0 extends eZ{constructor(e,t){super(),this.filters=e,this.op=t,this.ht=null}static create(e,t){return new e0(e,t)}matches(e){return e1(this)?void 0===this.filters.find(t=>!t.matches(e)):void 0!==this.filters.find(t=>t.matches(e))}getFlattenedFilters(){return null!==this.ht||(this.ht=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ht}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){let e=this.lt(e=>e.isInequality());return null!==e?e.field:null}lt(e){for(let t of this.getFlattenedFilters())if(e(t))return t;return null}}function e1(e){return"and"===e.op}function e2(e){return"or"===e.op}function e5(e){return e4(e)&&e1(e)}function e4(e){for(let t of e.filters)if(t instanceof e0)return!1;return!0}function e3(e,t){let n=e.filters.concat(t);return e0.create(n,e.op)}class e8 extends eJ{constructor(e,t,n){super(e,t,n),this.key=G.fromName(n.referenceValue)}matches(e){let t=G.comparator(e.key,this.key);return this.matchesComparison(t)}}class e9 extends eJ{constructor(e,t){super(e,"in",t),this.keys=e7("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class e6 extends eJ{constructor(e,t){super(e,"not-in",t),this.keys=e7("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function e7(e,t){var n;return((null===(n=t.arrayValue)||void 0===n?void 0:n.values)||[]).map(e=>G.fromName(e.referenceValue))}class te extends eJ{constructor(e,t){super(e,"array-contains",t)}matches(e){let t=e.data.field(this.field);return eB(t)&&eF(t.arrayValue,this.value)}}class tt extends eJ{constructor(e,t){super(e,"in",t)}matches(e){let t=e.data.field(this.field);return null!==t&&eF(this.value.arrayValue,t)}}class tn extends eJ{constructor(e,t){super(e,"not-in",t)}matches(e){if(eF(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;let t=e.data.field(this.field);return null!==t&&!eF(this.value.arrayValue,t)}}class tr extends eJ{constructor(e,t){super(e,"array-contains-any",t)}matches(e){let t=e.data.field(this.field);return!(!eB(t)||!t.arrayValue.values)&&t.arrayValue.values.some(e=>eF(this.value.arrayValue,e))}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ti{constructor(e,t="asc"){this.field=e,this.dir=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ts{constructor(e,t){this.comparator=e,this.root=t||to.EMPTY}insert(e,t){return new ts(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,to.BLACK,null,null))}remove(e){return new ts(this.comparator,this.root.remove(e,this.comparator).copy(null,null,to.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){let n=this.comparator(e,t.key);if(0===n)return t.value;n<0?t=t.left:n>0&&(t=t.right)}return null}indexOf(e){let t=0,n=this.root;for(;!n.isEmpty();){let r=this.comparator(e,n.key);if(0===r)return t+n.left.size;r<0?n=n.left:(t+=n.left.size+1,n=n.right)}return -1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,n)=>(e(t,n),!1))}toString(){let e=[];return this.inorderTraversal((t,n)=>(e.push(`${t}:${n}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new ta(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new ta(this.root,e,this.comparator,!1)}getReverseIterator(){return new ta(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new ta(this.root,e,this.comparator,!0)}}class ta{constructor(e,t,n,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?n(e.key,t):1,t&&r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(0===i){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop(),t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;let e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class to{constructor(e,t,n,r,i){this.key=e,this.value=t,this.color=null!=n?n:to.RED,this.left=null!=r?r:to.EMPTY,this.right=null!=i?i:to.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,n,r,i){return new to(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=i?i:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let r=this,i=n(e,r.key);return(r=i<0?r.copy(null,null,null,r.left.insert(e,t,n),null):0===i?r.copy(null,t,null,null,null):r.copy(null,null,null,null,r.right.insert(e,t,n))).fixUp()}removeMin(){if(this.left.isEmpty())return to.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),(e=e.copy(null,null,null,e.left.removeMin(),null)).fixUp()}remove(e,t){let n,r=this;if(0>t(e,r.key))r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,t),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),0===t(e,r.key)){if(r.right.isEmpty())return to.EMPTY;n=r.right.min(),r=r.copy(n.key,n.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,t))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=(e=(e=e.copy(null,null,null,null,e.right.rotateRight())).rotateLeft()).colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=(e=e.rotateRight()).colorFlip()),e}rotateLeft(){let e=this.copy(null,null,to.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){let e=this.copy(null,null,to.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){let e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){let e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw b();let e=this.left.check();if(e!==this.right.check())throw b();return e+(this.isRed()?0:1)}}to.EMPTY=null,to.RED=!0,to.BLACK=!1,to.EMPTY=new class{constructor(){this.size=0}get key(){throw b()}get value(){throw b()}get color(){throw b()}get left(){throw b()}get right(){throw b()}copy(e,t,n,r,i){return this}insert(e,t,n){return new to(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tu{constructor(e){this.comparator=e,this.data=new ts(this.comparator)}has(e){return null!==this.data.get(e)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,n)=>(e(t),!1))}forEachInRange(e,t){let n=this.data.getIteratorFrom(e[0]);for(;n.hasNext();){let r=n.getNext();if(this.comparator(r.key,e[1])>=0)return;t(r.key)}}forEachWhile(e,t){let n;for(n=void 0!==t?this.data.getIteratorFrom(t):this.data.getIterator();n.hasNext();)if(!e(n.getNext().key))return}firstAfterOrEqual(e){let t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new tl(this.data.getIterator())}getIteratorFrom(e){return new tl(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(e=>{t=t.add(e)}),t}isEqual(e){if(!(e instanceof tu)||this.size!==e.size)return!1;let t=this.data.getIterator(),n=e.data.getIterator();for(;t.hasNext();){let e=t.getNext().key,r=n.getNext().key;if(0!==this.comparator(e,r))return!1}return!0}toArray(){let e=[];return this.forEach(t=>{e.push(t)}),e}toString(){let e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){let t=new tu(this.comparator);return t.data=e,t}}class tl{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function tc(e){return e.hasNext()?e.getNext():void 0}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class th{constructor(e){this.fields=e,e.sort(K.comparator)}static empty(){return new th([])}unionWith(e){let t=new tu(K.comparator);for(let e of this.fields)t=t.add(e);for(let n of e)t=t.add(n);return new th(t.toArray())}covers(e){for(let t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return L(this.fields,e.fields,(e,t)=>e.isEqual(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class td{constructor(e){this.value=e}static empty(){return new td({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let n=0;n<e.length-1;++n)if(!e$(t=(t.mapValue.fields||{})[e.get(n)]))return null;return(t=(t.mapValue.fields||{})[e.lastSegment()])||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=eQ(t)}setAll(e){let t=K.emptyPath(),n={},r=[];e.forEach((e,i)=>{if(!t.isImmediateParentOf(i)){let e=this.getFieldsMap(t);this.applyChanges(e,n,r),n={},r=[],t=i.popLast()}e?n[i.lastSegment()]=eQ(e):r.push(i.lastSegment())});let i=this.getFieldsMap(t);this.applyChanges(i,n,r)}delete(e){let t=this.field(e.popLast());e$(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return eM(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let n=0;n<e.length;++n){let r=t.mapValue.fields[e.get(n)];e$(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},t.mapValue.fields[e.get(n)]=r),t=r}return t.mapValue.fields}applyChanges(e,t,n){for(let r of(ew(t,(t,n)=>e[t]=n),n))delete e[r]}clone(){return new td(eQ(this.value))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tf{constructor(e,t,n,r,i,s,a){this.key=e,this.documentType=t,this.version=n,this.readTime=r,this.createTime=i,this.data=s,this.documentState=a}static newInvalidDocument(e){return new tf(e,0,q.min(),q.min(),q.min(),td.empty(),0)}static newFoundDocument(e,t,n,r){return new tf(e,1,t,q.min(),n,r,0)}static newNoDocument(e,t){return new tf(e,2,t,q.min(),q.min(),td.empty(),0)}static newUnknownDocument(e,t){return new tf(e,3,t,q.min(),q.min(),td.empty(),2)}convertToFoundDocument(e,t){return this.createTime.isEqual(q.min())&&(2===this.documentType||0===this.documentType)&&(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=td.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=td.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=q.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(e){return e instanceof tf&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new tf(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tm{constructor(e,t=null,n=[],r=[],i=null,s=null,a=null){this.path=e,this.collectionGroup=t,this.orderBy=n,this.filters=r,this.limit=i,this.startAt=s,this.endAt=a,this.ft=null}}function tg(e,t=null,n=[],r=[],i=null,s=null,a=null){return new tm(e,t,n,r,i,s,a)}function tp(e){let t=e;if(null===t.ft){let e=t.path.canonicalString();null!==t.collectionGroup&&(e+="|cg:"+t.collectionGroup),e+="|f:"+t.filters.map(e=>(function e(t){if(t instanceof eJ)return t.field.canonicalString()+t.op.toString()+eq(t.value);if(e5(t))return t.filters.map(t=>e(t)).join(",");{let n=t.filters.map(t=>e(t)).join(",");return`${t.op}(${n})`}})(e)).join(",")+"|ob:"+t.orderBy.map(e=>e.field.canonicalString()+e.dir).join(","),eI(t.limit)||(e+="|l:"+t.limit),t.startAt&&(e+="|lb:"+(t.startAt.inclusive?"b:":"a:")+t.startAt.position.map(e=>eq(e)).join(",")),t.endAt&&(e+="|ub:"+(t.endAt.inclusive?"a:":"b:")+t.endAt.position.map(e=>eq(e)).join(",")),t.ft=e}return t.ft}function ty(e,t){if(e.limit!==t.limit||e.orderBy.length!==t.orderBy.length)return!1;for(let i=0;i<e.orderBy.length;i++){var n,r;if(n=e.orderBy[i],r=t.orderBy[i],!(n.dir===r.dir&&n.field.isEqual(r.field)))return!1}if(e.filters.length!==t.filters.length)return!1;for(let n=0;n<e.filters.length;n++)if(!function e(t,n){return t instanceof eJ?n instanceof eJ&&t.op===n.op&&t.field.isEqual(n.field)&&eM(t.value,n.value):t instanceof e0?n instanceof e0&&t.op===n.op&&t.filters.length===n.filters.length&&t.filters.reduce((t,r,i)=>t&&e(r,n.filters[i]),!0):void b()}(e.filters[n],t.filters[n]))return!1;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!eX(e.startAt,t.startAt)&&eX(e.endAt,t.endAt)}function tw(e){return G.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}function tv(e,t){return e.filters.filter(e=>e instanceof eJ&&e.field.isEqual(t))}function tI(e,t,n){let r=eR,i=!0;for(let n of tv(e,t)){let e=eR,t=!0;switch(n.op){case"<":case"<=":var s;e="nullValue"in(s=n.value)?eR:"booleanValue"in s?{booleanValue:!1}:"integerValue"in s||"doubleValue"in s?{doubleValue:NaN}:"timestampValue"in s?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in s?{stringValue:""}:"bytesValue"in s?{bytesValue:""}:"referenceValue"in s?eP(ep.empty(),G.empty()):"geoPointValue"in s?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in s?{arrayValue:{}}:"mapValue"in s?{mapValue:{}}:b();break;case"==":case"in":case">=":e=n.value;break;case">":e=n.value,t=!1;break;case"!=":case"not-in":e=eR}0>ej({value:r,inclusive:i},{value:e,inclusive:t})&&(r=e,i=t)}if(null!==n){for(let s=0;s<e.orderBy.length;++s)if(e.orderBy[s].field.isEqual(t)){let e=n.position[s];0>ej({value:r,inclusive:i},{value:e,inclusive:n.inclusive})&&(r=e,i=n.inclusive);break}}return{value:r,inclusive:i}}function tb(e,t,n){let r=eA,i=!0;for(let n of tv(e,t)){let e=eA,t=!0;switch(n.op){case">=":case">":var s;e="nullValue"in(s=n.value)?{booleanValue:!1}:"booleanValue"in s?{doubleValue:NaN}:"integerValue"in s||"doubleValue"in s?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in s?{stringValue:""}:"stringValue"in s?{bytesValue:""}:"bytesValue"in s?eP(ep.empty(),G.empty()):"referenceValue"in s?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in s?{arrayValue:{}}:"arrayValue"in s?{mapValue:{}}:"mapValue"in s?eA:b(),t=!1;break;case"==":case"in":case"<=":e=n.value;break;case"<":e=n.value,t=!1;break;case"!=":case"not-in":e=eA}eW({value:r,inclusive:i},{value:e,inclusive:t})>0&&(r=e,i=t)}if(null!==n){for(let s=0;s<e.orderBy.length;++s)if(e.orderBy[s].field.isEqual(t)){let e=n.position[s];eW({value:r,inclusive:i},{value:e,inclusive:n.inclusive})>0&&(r=e,i=n.inclusive);break}}return{value:r,inclusive:i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tT{constructor(e,t=null,n=[],r=[],i=null,s="F",a=null,o=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=n,this.filters=r,this.limit=i,this.limitType=s,this.startAt=a,this.endAt=o,this.dt=null,this._t=null,this.startAt,this.endAt}}function tE(e){return new tT(e)}function tS(e){return 0===e.filters.length&&null===e.limit&&null==e.startAt&&null==e.endAt&&(0===e.explicitOrderBy.length||1===e.explicitOrderBy.length&&e.explicitOrderBy[0].field.isKeyField())}function tx(e){return e.explicitOrderBy.length>0?e.explicitOrderBy[0].field:null}function t_(e){for(let t of e.filters){let e=t.getFirstInequalityField();if(null!==e)return e}return null}function tD(e){return null!==e.collectionGroup}function tN(e){let t=e;if(null===t.dt){t.dt=[];let e=t_(t),n=tx(t);if(null!==e&&null===n)e.isKeyField()||t.dt.push(new ti(e)),t.dt.push(new ti(K.keyField(),"asc"));else{let e=!1;for(let n of t.explicitOrderBy)t.dt.push(n),n.field.isKeyField()&&(e=!0);if(!e){let e=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";t.dt.push(new ti(K.keyField(),e))}}}return t.dt}function tk(e){let t=e;if(!t._t){if("F"===t.limitType)t._t=tg(t.path,t.collectionGroup,tN(t),t.filters,t.limit,t.startAt,t.endAt);else{let e=[];for(let n of tN(t)){let t="desc"===n.dir?"asc":"desc";e.push(new ti(n.field,t))}let n=t.endAt?new eH(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new eH(t.startAt.position,t.startAt.inclusive):null;t._t=tg(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}return t._t}function tC(e,t){t.getFirstInequalityField(),t_(e);let n=e.filters.concat([t]);return new tT(e.path,e.collectionGroup,e.explicitOrderBy.slice(),n,e.limit,e.limitType,e.startAt,e.endAt)}function tA(e,t,n){return new tT(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function tR(e,t){return ty(tk(e),tk(t))&&e.limitType===t.limitType}function tV(e){return`${tp(tk(e))}|lt:${e.limitType}`}function tM(e){var t;let n;return`Query(target=${n=(t=tk(e)).path.canonicalString(),null!==t.collectionGroup&&(n+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(n+=`, filters: [${t.filters.map(e=>(function e(t){return t instanceof eJ?`${t.field.canonicalString()} ${t.op} ${eq(t.value)}`:t instanceof e0?t.op.toString()+" {"+t.getFilters().map(e).join(" ,")+"}":"Filter"})(e)).join(", ")}]`),eI(t.limit)||(n+=", limit: "+t.limit),t.orderBy.length>0&&(n+=`, orderBy: [${t.orderBy.map(e=>`${e.field.canonicalString()} (${e.dir})`).join(", ")}]`),t.startAt&&(n+=", startAt: "+(t.startAt.inclusive?"b:":"a:")+t.startAt.position.map(e=>eq(e)).join(",")),t.endAt&&(n+=", endAt: "+(t.endAt.inclusive?"a:":"b:")+t.endAt.position.map(e=>eq(e)).join(",")),`Target(${n})`}; limitType=${e.limitType})`}function tF(e,t){return t.isFoundDocument()&&function(e,t){let n=t.key.path;return null!==e.collectionGroup?t.key.hasCollectionId(e.collectionGroup)&&e.path.isPrefixOf(n):G.isDocumentKey(e.path)?e.path.isEqual(n):e.path.isImmediateParentOf(n)}(e,t)&&function(e,t){for(let n of tN(e))if(!n.field.isKeyField()&&null===t.data.field(n.field))return!1;return!0}(e,t)&&function(e,t){for(let n of e.filters)if(!n.matches(t))return!1;return!0}(e,t)&&(!e.startAt||!!function(e,t,n){let r=eY(e,t,n);return e.inclusive?r<=0:r<0}(e.startAt,tN(e),t))&&(!e.endAt||!!function(e,t,n){let r=eY(e,t,n);return e.inclusive?r>=0:r>0}(e.endAt,tN(e),t))}function tL(e){return e.collectionGroup||(e.path.length%2==1?e.path.lastSegment():e.path.get(e.path.length-2))}function tO(e){return(t,n)=>{let r=!1;for(let i of tN(e)){let e=function(e,t,n){let r=e.field.isKeyField()?G.comparator(t.key,n.key):function(e,t,n){let r=t.data.field(e),i=n.data.field(e);return null!==r&&null!==i?eL(r,i):b()}(e.field,t,n);switch(e.dir){case"asc":return r;case"desc":return -1*r;default:return b()}}(i,t,n);if(0!==e)return e;r=r||i.field.isKeyField()}return 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tq(e,t){if(e.wt){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:eb(t)?"-0":t}}function tP(e){return{integerValue:""+e}}function tU(e,t){return eT(t)?tP(t):tq(e,t)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tB{constructor(){this._=void 0}}function tK(e,t){return e instanceof tW?eU(t)||t&&"doubleValue"in t?t:{integerValue:0}:null}class tG extends tB{}class t$ extends tB{constructor(e){super(),this.elements=e}}function tQ(e,t){let n=tY(t);for(let t of e.elements)n.some(e=>eM(e,t))||n.push(t);return{arrayValue:{values:n}}}class tz extends tB{constructor(e){super(),this.elements=e}}function tj(e,t){let n=tY(t);for(let t of e.elements)n=n.filter(e=>!eM(e,t));return{arrayValue:{values:n}}}class tW extends tB{constructor(e,t){super(),this.yt=e,this.gt=t}}function tH(e){return eD(e.integerValue||e.doubleValue)}function tY(e){return eB(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tX{constructor(e,t){this.field=e,this.transform=t}}class tZ{constructor(e,t){this.version=e,this.transformResults=t}}class tJ{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new tJ}static exists(e){return new tJ(void 0,e)}static updateTime(e){return new tJ(e)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function t0(e,t){return void 0!==e.updateTime?t.isFoundDocument()&&t.version.isEqual(e.updateTime):void 0===e.exists||e.exists===t.isFoundDocument()}class t1{}function t2(e,t){if(!e.hasLocalMutations||t&&0===t.fields.length)return null;if(null===t)return e.isNoDocument()?new ne(e.key,tJ.none()):new t3(e.key,e.data,tJ.none());{let n=e.data,r=td.empty(),i=new tu(K.comparator);for(let e of t.fields)if(!i.has(e)){let t=n.field(e);null===t&&e.length>1&&(e=e.popLast(),t=n.field(e)),null===t?r.delete(e):r.set(e,t),i=i.add(e)}return new t8(e.key,r,new th(i.toArray()),tJ.none())}}function t5(e,t,n,r){return e instanceof t3?function(e,t,n,r){if(!t0(e.precondition,t))return n;let i=e.value.clone(),s=t7(e.fieldTransforms,r,t);return i.setAll(s),t.convertToFoundDocument(t.version,i).setHasLocalMutations(),null}(e,t,n,r):e instanceof t8?function(e,t,n,r){if(!t0(e.precondition,t))return n;let i=t7(e.fieldTransforms,r,t),s=t.data;return(s.setAll(t9(e)),s.setAll(i),t.convertToFoundDocument(t.version,s).setHasLocalMutations(),null===n)?null:n.unionWith(e.fieldMask.fields).unionWith(e.fieldTransforms.map(e=>e.field))}(e,t,n,r):t0(e.precondition,t)?(t.convertToNoDocument(t.version).setHasLocalMutations(),null):n}function t4(e,t){var n,r;return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&(n=e.fieldTransforms,r=t.fieldTransforms,!!(void 0===n&&void 0===r||!(!n||!r)&&L(n,r,(e,t)=>{var n,r;return e.field.isEqual(t.field)&&(n=e.transform,r=t.transform,n instanceof t$&&r instanceof t$||n instanceof tz&&r instanceof tz?L(n.elements,r.elements,eM):n instanceof tW&&r instanceof tW?eM(n.gt,r.gt):n instanceof tG&&r instanceof tG)})))&&(0===e.type?e.value.isEqual(t.value):1!==e.type||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}class t3 extends t1{constructor(e,t,n,r=[]){super(),this.key=e,this.value=t,this.precondition=n,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class t8 extends t1{constructor(e,t,n,r,i=[]){super(),this.key=e,this.data=t,this.fieldMask=n,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function t9(e){let t=new Map;return e.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){let r=e.data.field(n);t.set(n,r)}}),t}function t6(e,t,n){var r;let i=new Map;e.length===n.length||b();for(let s=0;s<n.length;s++){let a=e[s],o=a.transform,u=t.data.field(a.field);i.set(a.field,(r=n[s],o instanceof t$?tQ(o,u):o instanceof tz?tj(o,u):r))}return i}function t7(e,t,n){let r=new Map;for(let i of e){let e=i.transform,s=n.data.field(i.field);r.set(i.field,e instanceof tG?function(e,t){let n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:e.seconds,nanos:e.nanoseconds}}}};return t&&(n.fields.__previous_value__=t),{mapValue:n}}(t,s):e instanceof t$?tQ(e,s):e instanceof tz?tj(e,s):function(e,t){let n=tK(e,t),r=tH(n)+tH(e.gt);return eU(n)&&eU(e.gt)?tP(r):tq(e.yt,r)}(e,s))}return r}class ne extends t1{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class nt extends t1{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nn{constructor(e){this.count=e}}function nr(e){switch(e){default:return b();case E.CANCELLED:case E.UNKNOWN:case E.DEADLINE_EXCEEDED:case E.RESOURCE_EXHAUSTED:case E.INTERNAL:case E.UNAVAILABLE:case E.UNAUTHENTICATED:return!1;case E.INVALID_ARGUMENT:case E.NOT_FOUND:case E.ALREADY_EXISTS:case E.PERMISSION_DENIED:case E.FAILED_PRECONDITION:case E.ABORTED:case E.OUT_OF_RANGE:case E.UNIMPLEMENTED:case E.DATA_LOSS:return!0}}function ni(e){if(void 0===e)return w("GRPC error has no .code"),E.UNKNOWN;switch(e){case r.OK:return E.OK;case r.CANCELLED:return E.CANCELLED;case r.UNKNOWN:return E.UNKNOWN;case r.DEADLINE_EXCEEDED:return E.DEADLINE_EXCEEDED;case r.RESOURCE_EXHAUSTED:return E.RESOURCE_EXHAUSTED;case r.INTERNAL:return E.INTERNAL;case r.UNAVAILABLE:return E.UNAVAILABLE;case r.UNAUTHENTICATED:return E.UNAUTHENTICATED;case r.INVALID_ARGUMENT:return E.INVALID_ARGUMENT;case r.NOT_FOUND:return E.NOT_FOUND;case r.ALREADY_EXISTS:return E.ALREADY_EXISTS;case r.PERMISSION_DENIED:return E.PERMISSION_DENIED;case r.FAILED_PRECONDITION:return E.FAILED_PRECONDITION;case r.ABORTED:return E.ABORTED;case r.OUT_OF_RANGE:return E.OUT_OF_RANGE;case r.UNIMPLEMENTED:return E.UNIMPLEMENTED;case r.DATA_LOSS:return E.DATA_LOSS;default:return b()}}(i=r||(r={}))[i.OK=0]="OK",i[i.CANCELLED=1]="CANCELLED",i[i.UNKNOWN=2]="UNKNOWN",i[i.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",i[i.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",i[i.NOT_FOUND=5]="NOT_FOUND",i[i.ALREADY_EXISTS=6]="ALREADY_EXISTS",i[i.PERMISSION_DENIED=7]="PERMISSION_DENIED",i[i.UNAUTHENTICATED=16]="UNAUTHENTICATED",i[i.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",i[i.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",i[i.ABORTED=10]="ABORTED",i[i.OUT_OF_RANGE=11]="OUT_OF_RANGE",i[i.UNIMPLEMENTED=12]="UNIMPLEMENTED",i[i.INTERNAL=13]="INTERNAL",i[i.UNAVAILABLE=14]="UNAVAILABLE",i[i.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ns{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){let t=this.mapKeyFn(e),n=this.inner[t];if(void 0!==n){for(let[t,r]of n)if(this.equalsFn(t,e))return r}}has(e){return void 0!==this.get(e)}set(e,t){let n=this.mapKeyFn(e),r=this.inner[n];if(void 0===r)return this.inner[n]=[[e,t]],void this.innerSize++;for(let n=0;n<r.length;n++)if(this.equalsFn(r[n][0],e))return void(r[n]=[e,t]);r.push([e,t]),this.innerSize++}delete(e){let t=this.mapKeyFn(e),n=this.inner[t];if(void 0===n)return!1;for(let r=0;r<n.length;r++)if(this.equalsFn(n[r][0],e))return 1===n.length?delete this.inner[t]:n.splice(r,1),this.innerSize--,!0;return!1}forEach(e){ew(this.inner,(t,n)=>{for(let[t,r]of n)e(t,r)})}isEmpty(){return ev(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let na=new ts(G.comparator),no=new ts(G.comparator);function nu(...e){let t=no;for(let n of e)t=t.insert(n.key,n);return t}function nl(e){let t=no;return e.forEach((e,n)=>t=t.insert(e,n.overlayedDocument)),t}function nc(){return new ns(e=>e.toString(),(e,t)=>e.isEqual(t))}let nh=new ts(G.comparator),nd=new tu(G.comparator);function nf(...e){let t=nd;for(let n of e)t=t.add(n);return t}let nm=new tu(F);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ng{constructor(e,t,n,r,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=n,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t,n){let r=new Map;return r.set(e,np.createSynthesizedTargetChangeForCurrentChange(e,t,n)),new ng(q.min(),r,nm,na,nf())}}class np{constructor(e,t,n,r,i){this.resumeToken=e,this.current=t,this.addedDocuments=n,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,n){return new np(n,t,nf(),nf(),nf())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ny{constructor(e,t,n,r){this.It=e,this.removedTargetIds=t,this.key=n,this.Tt=r}}class nw{constructor(e,t){this.targetId=e,this.Et=t}}class nv{constructor(e,t,n=eS.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=t,this.resumeToken=n,this.cause=r}}class nI{constructor(){this.At=0,this.Rt=nE(),this.bt=eS.EMPTY_BYTE_STRING,this.Pt=!1,this.vt=!0}get current(){return this.Pt}get resumeToken(){return this.bt}get Vt(){return 0!==this.At}get St(){return this.vt}Dt(e){e.approximateByteSize()>0&&(this.vt=!0,this.bt=e)}Ct(){let e=nf(),t=nf(),n=nf();return this.Rt.forEach((r,i)=>{switch(i){case 0:e=e.add(r);break;case 2:t=t.add(r);break;case 1:n=n.add(r);break;default:b()}}),new np(this.bt,this.Pt,e,t,n)}xt(){this.vt=!1,this.Rt=nE()}Nt(e,t){this.vt=!0,this.Rt=this.Rt.insert(e,t)}kt(e){this.vt=!0,this.Rt=this.Rt.remove(e)}Ot(){this.At+=1}Mt(){this.At-=1}Ft(){this.vt=!0,this.Pt=!0}}class nb{constructor(e){this.$t=e,this.Bt=new Map,this.Lt=na,this.qt=nT(),this.Ut=new tu(F)}Kt(e){for(let t of e.It)e.Tt&&e.Tt.isFoundDocument()?this.Gt(t,e.Tt):this.Qt(t,e.key,e.Tt);for(let t of e.removedTargetIds)this.Qt(t,e.key,e.Tt)}jt(e){this.forEachTarget(e,t=>{let n=this.Wt(t);switch(e.state){case 0:this.zt(t)&&n.Dt(e.resumeToken);break;case 1:n.Mt(),n.Vt||n.xt(),n.Dt(e.resumeToken);break;case 2:n.Mt(),n.Vt||this.removeTarget(t);break;case 3:this.zt(t)&&(n.Ft(),n.Dt(e.resumeToken));break;case 4:this.zt(t)&&(this.Ht(t),n.Dt(e.resumeToken));break;default:b()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Bt.forEach((e,n)=>{this.zt(n)&&t(n)})}Jt(e){let t=e.targetId,n=e.Et.count,r=this.Yt(t);if(r){let e=r.target;if(tw(e)){if(0===n){let n=new G(e.path);this.Qt(t,n,tf.newNoDocument(n,q.min()))}else 1===n||b()}else this.Xt(t)!==n&&(this.Ht(t),this.Ut=this.Ut.add(t))}}Zt(e){let t=new Map;this.Bt.forEach((n,r)=>{let i=this.Yt(r);if(i){if(n.current&&tw(i.target)){let t=new G(i.target.path);null!==this.Lt.get(t)||this.te(r,t)||this.Qt(r,t,tf.newNoDocument(t,e))}n.St&&(t.set(r,n.Ct()),n.xt())}});let n=nf();this.qt.forEach((e,t)=>{let r=!0;t.forEachWhile(e=>{let t=this.Yt(e);return!t||2===t.purpose||(r=!1,!1)}),r&&(n=n.add(e))}),this.Lt.forEach((t,n)=>n.setReadTime(e));let r=new ng(e,t,this.Ut,this.Lt,n);return this.Lt=na,this.qt=nT(),this.Ut=new tu(F),r}Gt(e,t){if(!this.zt(e))return;let n=this.te(e,t.key)?2:0;this.Wt(e).Nt(t.key,n),this.Lt=this.Lt.insert(t.key,t),this.qt=this.qt.insert(t.key,this.ee(t.key).add(e))}Qt(e,t,n){if(!this.zt(e))return;let r=this.Wt(e);this.te(e,t)?r.Nt(t,1):r.kt(t),this.qt=this.qt.insert(t,this.ee(t).delete(e)),n&&(this.Lt=this.Lt.insert(t,n))}removeTarget(e){this.Bt.delete(e)}Xt(e){let t=this.Wt(e).Ct();return this.$t.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Ot(e){this.Wt(e).Ot()}Wt(e){let t=this.Bt.get(e);return t||(t=new nI,this.Bt.set(e,t)),t}ee(e){let t=this.qt.get(e);return t||(t=new tu(F),this.qt=this.qt.insert(e,t)),t}zt(e){let t=null!==this.Yt(e);return t||y("WatchChangeAggregator","Detected inactive target",e),t}Yt(e){let t=this.Bt.get(e);return t&&t.Vt?null:this.$t.ne(e)}Ht(e){this.Bt.set(e,new nI),this.$t.getRemoteKeysForTarget(e).forEach(t=>{this.Qt(e,t,null)})}te(e,t){return this.$t.getRemoteKeysForTarget(e).has(t)}}function nT(){return new ts(G.comparator)}function nE(){return new ts(G.comparator)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let nS={asc:"ASCENDING",desc:"DESCENDING"},nx={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},n_={and:"AND",or:"OR"};class nD{constructor(e,t){this.databaseId=e,this.wt=t}}function nN(e,t){return e.wt?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function nk(e,t){return e.wt?t.toBase64():t.toUint8Array()}function nC(e){return e||b(),q.fromTimestamp(function(e){let t=e_(e);return new O(t.seconds,t.nanos)}(e))}function nA(e,t){return new U(["projects",e.projectId,"databases",e.database]).child("documents").child(t).canonicalString()}function nR(e){let t=U.fromString(e);return nW(t)||b(),t}function nV(e,t){return nA(e.databaseId,t.path)}function nM(e,t){let n=nR(t);if(n.get(1)!==e.databaseId.projectId)throw new S(E.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new S(E.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new G(nq(n))}function nF(e,t){return nA(e.databaseId,t)}function nL(e){let t=nR(e);return 4===t.length?U.emptyPath():nq(t)}function nO(e){return new U(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function nq(e){return e.length>4&&"documents"===e.get(4)||b(),e.popFirst(5)}function nP(e,t,n){return{name:nV(e,t),fields:n.value.mapValue.fields}}function nU(e,t,n){let r=nM(e,t.name),i=nC(t.updateTime),s=t.createTime?nC(t.createTime):q.min(),a=new td({mapValue:{fields:t.fields}}),o=tf.newFoundDocument(r,i,s,a);return n&&o.setHasCommittedMutations(),n?o.setHasCommittedMutations():o}function nB(e,t){var n;let r;if(t instanceof t3)r={update:nP(e,t.key,t.value)};else if(t instanceof ne)r={delete:nV(e,t.key)};else if(t instanceof t8)r={update:nP(e,t.key,t.data),updateMask:function(e){let t=[];return e.fields.forEach(e=>t.push(e.canonicalString())),{fieldPaths:t}}(t.fieldMask)};else{if(!(t instanceof nt))return b();r={verify:nV(e,t.key)}}return t.fieldTransforms.length>0&&(r.updateTransforms=t.fieldTransforms.map(e=>(function(e,t){let n=t.transform;if(n instanceof tG)return{fieldPath:t.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof t$)return{fieldPath:t.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof tz)return{fieldPath:t.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof tW)return{fieldPath:t.field.canonicalString(),increment:n.gt};throw b()})(0,e))),t.precondition.isNone||(r.currentDocument=void 0!==(n=t.precondition).updateTime?{updateTime:nN(e,n.updateTime.toTimestamp())}:void 0!==n.exists?{exists:n.exists}:b()),r}function nK(e,t){var n;let r=t.currentDocument?void 0!==(n=t.currentDocument).updateTime?tJ.updateTime(nC(n.updateTime)):void 0!==n.exists?tJ.exists(n.exists):tJ.none():tJ.none(),i=t.updateTransforms?t.updateTransforms.map(t=>(function(e,t){let n=null;if("setToServerValue"in t)"REQUEST_TIME"===t.setToServerValue||b(),n=new tG;else if("appendMissingElements"in t){let e=t.appendMissingElements.values||[];n=new t$(e)}else if("removeAllFromArray"in t){let e=t.removeAllFromArray.values||[];n=new tz(e)}else"increment"in t?n=new tW(e,t.increment):b();let r=K.fromServerFormat(t.fieldPath);return new tX(r,n)})(e,t)):[];if(t.update){t.update.name;let n=nM(e,t.update.name),s=new td({mapValue:{fields:t.update.fields}});if(t.updateMask){let e=function(e){let t=e.fieldPaths||[];return new th(t.map(e=>K.fromServerFormat(e)))}(t.updateMask);return new t8(n,s,e,r,i)}return new t3(n,s,r,i)}if(t.delete){let n=nM(e,t.delete);return new ne(n,r)}if(t.verify){let n=nM(e,t.verify);return new nt(n,r)}return b()}function nG(e,t){return{documents:[nF(e,t.path)]}}function n$(e,t){var n,r,i;let s={structuredQuery:{}},a=t.path;null!==t.collectionGroup?(s.parent=nF(e,a),s.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(s.parent=nF(e,a.popLast()),s.structuredQuery.from=[{collectionId:a.lastSegment()}]);let o=function(e){if(0!==e.length)return function e(t){return t instanceof eJ?function(e){if("=="===e.op){if(eG(e.value))return{unaryFilter:{field:nz(e.field),op:"IS_NAN"}};if(eK(e.value))return{unaryFilter:{field:nz(e.field),op:"IS_NULL"}}}else if("!="===e.op){if(eG(e.value))return{unaryFilter:{field:nz(e.field),op:"IS_NOT_NAN"}};if(eK(e.value))return{unaryFilter:{field:nz(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:nz(e.field),op:nx[e.op],value:e.value}}}(t):t instanceof e0?function(t){let n=t.getFilters().map(t=>e(t));return 1===n.length?n[0]:{compositeFilter:{op:n_[t.op],filters:n}}}(t):b()}(e0.create(e,"and"))}(t.filters);o&&(s.structuredQuery.where=o);let u=function(e){if(0!==e.length)return e.map(e=>({field:nz(e.field),direction:nS[e.dir]}))}(t.orderBy);u&&(s.structuredQuery.orderBy=u);let l=(r=t.limit,e.wt||eI(r)?r:{value:r});return null!==l&&(s.structuredQuery.limit=l),t.startAt&&(s.structuredQuery.startAt={before:(n=t.startAt).inclusive,values:n.position}),t.endAt&&(s.structuredQuery.endAt={before:!(i=t.endAt).inclusive,values:i.position}),s}function nQ(e){var t,n,r,i,s,a,o,u;let l,c=nL(e.parent),h=e.structuredQuery,d=h.from?h.from.length:0,f=null;if(d>0){1===d||b();let e=h.from[0];e.allDescendants?f=e.collectionId:c=c.child(e.collectionId)}let m=[];h.where&&(m=function(e){let t=function e(t){return void 0!==t.unaryFilter?function(e){switch(e.unaryFilter.op){case"IS_NAN":let t=nj(e.unaryFilter.field);return eJ.create(t,"==",{doubleValue:NaN});case"IS_NULL":let n=nj(e.unaryFilter.field);return eJ.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":let r=nj(e.unaryFilter.field);return eJ.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":let i=nj(e.unaryFilter.field);return eJ.create(i,"!=",{nullValue:"NULL_VALUE"});default:return b()}}(t):void 0!==t.fieldFilter?eJ.create(nj(t.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return b()}}(t.fieldFilter.op),t.fieldFilter.value):void 0!==t.compositeFilter?e0.create(t.compositeFilter.filters.map(t=>e(t)),function(e){switch(e){case"AND":return"and";case"OR":return"or";default:return b()}}(t.compositeFilter.op)):b()}(e);return t instanceof e0&&e5(t)?t.getFilters():[t]}(h.where));let g=[];h.orderBy&&(g=h.orderBy.map(e=>new ti(nj(e.field),function(e){switch(e){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(e.direction))));let p=null;h.limit&&(p=eI(l="object"==typeof(t=h.limit)?t.value:t)?null:l);let y=null;h.startAt&&(y=function(e){let t=!!e.before,n=e.values||[];return new eH(n,t)}(h.startAt));let w=null;return h.endAt&&(w=function(e){let t=!e.before,n=e.values||[];return new eH(n,t)}(h.endAt)),n=c,r=f,i=g,s=m,a=p,o=y,u=w,new tT(n,r,i,s,a,"F",o,u)}function nz(e){return{fieldPath:e.canonicalString()}}function nj(e){return K.fromServerFormat(e.fieldPath)}function nW(e){return e.length>=4&&"projects"===e.get(0)&&"databases"===e.get(2)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nH(e){var t,n;let r="";for(let t=0;t<e.length;t++)r.length>0&&(r+="\x01\x01"),r=function(e,t){let n=t,r=e.length;for(let t=0;t<r;t++){let r=e.charAt(t);switch(r){case"\x00":n+="\x01\x10";break;case"\x01":n+="\x01\x11";break;default:n+=r}}return n}(e.get(t),r);return r+"\x01\x01"}function nY(e){let t=e.length;if(t>=2||b(),2===t)return"\x01"===e.charAt(0)&&"\x01"===e.charAt(1)||b(),U.emptyPath();let n=t-2,r=[],i="";for(let s=0;s<t;){let t=e.indexOf("\x01",s);switch((t<0||t>n)&&b(),e.charAt(t+1)){case"\x01":let a;let o=e.substring(s,t);0===i.length?a=o:(i+=o,a=i,i=""),r.push(a);break;case"\x10":i+=e.substring(s,t)+"\x00";break;case"\x11":i+=e.substring(s,t+1);break;default:b()}s=t+2}return new U(r)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let nX=["userId","batchId"],nZ={},nJ=["prefixPath","collectionGroup","readTime","documentId"],n0=["prefixPath","collectionGroup","documentId"],n1=["collectionGroup","readTime","prefixPath","documentId"],n2=["canonicalId","targetId"],n5=["targetId","path"],n4=["path","targetId"],n3=["collectionId","parent"],n8=["indexId","uid"],n9=["uid","sequenceNumber"],n6=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],n7=["indexId","uid","orderedDocumentKey"],re=["userId","collectionPath","documentId"],rt=["userId","collectionPath","largestBatchId"],rn=["userId","collectionGroup","largestBatchId"],rr=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],ri=[...rr,"documentOverlays"],rs=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],ra=[...rs,"indexConfiguration","indexState","indexEntries"];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ro extends ee{constructor(e,t){super(),this.se=e,this.currentSequenceNumber=t}}function ru(e,t){return ei.M(e.se,t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rl{constructor(e,t,n,r){this.batchId=e,this.localWriteTime=t,this.baseMutations=n,this.mutations=r}applyToRemoteDocument(e,t){let n=t.mutationResults;for(let t=0;t<this.mutations.length;t++){let i=this.mutations[t];if(i.key.isEqual(e.key)){var r;r=n[t],i instanceof t3?function(e,t,n){let r=e.value.clone(),i=t6(e.fieldTransforms,t,n.transformResults);r.setAll(i),t.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(i,e,r):i instanceof t8?function(e,t,n){if(!t0(e.precondition,t))return void t.convertToUnknownDocument(n.version);let r=t6(e.fieldTransforms,t,n.transformResults),i=t.data;i.setAll(t9(e)),i.setAll(r),t.convertToFoundDocument(n.version,i).setHasCommittedMutations()}(i,e,r):function(e,t,n){t.convertToNoDocument(n.version).setHasCommittedMutations()}(0,e,r)}}}applyToLocalView(e,t){for(let n of this.baseMutations)n.key.isEqual(e.key)&&(t=t5(n,e,t,this.localWriteTime));for(let n of this.mutations)n.key.isEqual(e.key)&&(t=t5(n,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){let n=nc();return this.mutations.forEach(r=>{let i=e.get(r.key),s=i.overlayedDocument,a=this.applyToLocalView(s,i.mutatedFields);a=t.has(r.key)?null:a;let o=t2(s,a);null!==o&&n.set(r.key,o),s.isValidDocument()||s.convertToNoDocument(q.min())}),n}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),nf())}isEqual(e){return this.batchId===e.batchId&&L(this.mutations,e.mutations,(e,t)=>t4(e,t))&&L(this.baseMutations,e.baseMutations,(e,t)=>t4(e,t))}}class rc{constructor(e,t,n,r){this.batch=e,this.commitVersion=t,this.mutationResults=n,this.docVersions=r}static from(e,t,n){e.mutations.length===n.length||b();let r=nh,i=e.mutations;for(let e=0;e<i.length;e++)r=r.insert(i[e].key,n[e].version);return new rc(e,t,n,r)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rh{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return null!==e&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rd{constructor(e,t,n,r,i=q.min(),s=q.min(),a=eS.EMPTY_BYTE_STRING){this.target=e,this.targetId=t,this.purpose=n,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=s,this.resumeToken=a}withSequenceNumber(e){return new rd(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,t){return new rd(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new rd(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rf{constructor(e){this.ie=e}}function rm(e,t){let n=t.key,r={prefixPath:n.getCollectionPath().popLast().toArray(),collectionGroup:n.collectionGroup,documentId:n.path.lastSegment(),readTime:rg(t.readTime),hasCommittedMutations:t.hasCommittedMutations};if(t.isFoundDocument()){var i;r.document={name:nV(i=e.ie,t.key),fields:t.data.value.mapValue.fields,updateTime:nN(i,t.version.toTimestamp()),createTime:nN(i,t.createTime.toTimestamp())}}else if(t.isNoDocument())r.noDocument={path:n.path.toArray(),readTime:rp(t.version)};else{if(!t.isUnknownDocument())return b();r.unknownDocument={path:n.path.toArray(),version:rp(t.version)}}return r}function rg(e){let t=e.toTimestamp();return[t.seconds,t.nanoseconds]}function rp(e){let t=e.toTimestamp();return{seconds:t.seconds,nanoseconds:t.nanoseconds}}function ry(e){let t=new O(e.seconds,e.nanoseconds);return q.fromTimestamp(t)}function rw(e,t){let n=(t.baseMutations||[]).map(t=>nK(e.ie,t));for(let e=0;e<t.mutations.length-1;++e){let n=t.mutations[e];if(e+1<t.mutations.length&&void 0!==t.mutations[e+1].transform){let r=t.mutations[e+1];n.updateTransforms=r.transform.fieldTransforms,t.mutations.splice(e+1,1),++e}}let r=t.mutations.map(t=>nK(e.ie,t)),i=O.fromMillis(t.localWriteTimeMs);return new rl(t.batchId,i,n,r)}function rv(e){var t;let n;let r=ry(e.readTime),i=void 0!==e.lastLimboFreeSnapshotVersion?ry(e.lastLimboFreeSnapshotVersion):q.min();return void 0!==e.query.documents?(1===(t=e.query).documents.length||b(),n=tk(tE(nL(t.documents[0])))):n=tk(nQ(e.query)),new rd(n,e.targetId,0,e.lastListenSequenceNumber,r,i,eS.fromBase64String(e.resumeToken))}function rI(e,t){let n;let r=rp(t.snapshotVersion),i=rp(t.lastLimboFreeSnapshotVersion);n=tw(t.target)?nG(e.ie,t.target):n$(e.ie,t.target);let s=t.resumeToken.toBase64();return{targetId:t.targetId,canonicalId:tp(t.target),readTime:r,resumeToken:s,lastListenSequenceNumber:t.sequenceNumber,lastLimboFreeSnapshotVersion:i,query:n}}function rb(e){let t=nQ({parent:e.parent,structuredQuery:e.structuredQuery});return"LAST"===e.limitType?tA(t,t.limit,"L"):t}function rT(e,t){return new rh(t.largestBatchId,nK(e.ie,t.overlayMutation))}function rE(e,t){let n=t.path.lastSegment();return[e,nH(t.path.popLast()),n]}function rS(e,t,n,r){return{indexId:e,uid:t.uid||"",sequenceNumber:n,readTime:rp(r.readTime),documentKey:nH(r.documentKey.path),largestBatchId:r.largestBatchId}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rx{getBundleMetadata(e,t){return r_(e).get(t).next(e=>{if(e)return{id:e.bundleId,createTime:ry(e.createTime),version:e.version}})}saveBundleMetadata(e,t){return r_(e).put({bundleId:t.id,createTime:rp(nC(t.createTime)),version:t.version})}getNamedQuery(e,t){return rD(e).get(t).next(e=>{if(e)return{name:e.name,query:rb(e.bundledQuery),readTime:ry(e.readTime)}})}saveNamedQuery(e,t){return rD(e).put({name:t.name,readTime:rp(nC(t.readTime)),bundledQuery:t.bundledQuery})}}function r_(e){return ru(e,"bundles")}function rD(e){return ru(e,"namedQueries")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rN{constructor(e,t){this.yt=e,this.userId=t}static re(e,t){let n=t.uid||"";return new rN(e,n)}getOverlay(e,t){return rk(e).get(rE(this.userId,t)).next(e=>e?rT(this.yt,e):null)}getOverlays(e,t){let n=nc();return en.forEach(t,t=>this.getOverlay(e,t).next(e=>{null!==e&&n.set(t,e)})).next(()=>n)}saveOverlays(e,t,n){let r=[];return n.forEach((n,i)=>{let s=new rh(t,i);r.push(this.oe(e,s))}),en.waitFor(r)}removeOverlaysForBatchId(e,t,n){let r=new Set;t.forEach(e=>r.add(nH(e.getCollectionPath())));let i=[];return r.forEach(t=>{let r=IDBKeyRange.bound([this.userId,t,n],[this.userId,t,n+1],!1,!0);i.push(rk(e).Y("collectionPathOverlayIndex",r))}),en.waitFor(i)}getOverlaysForCollection(e,t,n){let r=nc(),i=nH(t),s=IDBKeyRange.bound([this.userId,i,n],[this.userId,i,Number.POSITIVE_INFINITY],!0);return rk(e).W("collectionPathOverlayIndex",s).next(e=>{for(let t of e){let e=rT(this.yt,t);r.set(e.getKey(),e)}return r})}getOverlaysForCollectionGroup(e,t,n,r){let i;let s=nc(),a=IDBKeyRange.bound([this.userId,t,n],[this.userId,t,Number.POSITIVE_INFINITY],!0);return rk(e).Z({index:"collectionGroupOverlayIndex",range:a},(e,t,n)=>{let a=rT(this.yt,t);s.size()<r||a.largestBatchId===i?(s.set(a.getKey(),a),i=a.largestBatchId):n.done()}).next(()=>s)}oe(e,t){return rk(e).put(function(e,t,n){let[r,i,s]=rE(t,n.mutation.key);return{userId:t,collectionPath:i,documentId:s,collectionGroup:n.mutation.key.getCollectionGroup(),largestBatchId:n.largestBatchId,overlayMutation:nB(e.ie,n.mutation)}}(this.yt,this.userId,t))}}function rk(e){return ru(e,"documentOverlays")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rC{constructor(){}ue(e,t){this.ce(e,t),t.ae()}ce(e,t){if("nullValue"in e)this.he(t,5);else if("booleanValue"in e)this.he(t,10),t.le(e.booleanValue?1:0);else if("integerValue"in e)this.he(t,15),t.le(eD(e.integerValue));else if("doubleValue"in e){let n=eD(e.doubleValue);isNaN(n)?this.he(t,13):(this.he(t,15),eb(n)?t.le(0):t.le(n))}else if("timestampValue"in e){let n=e.timestampValue;this.he(t,20),"string"==typeof n?t.fe(n):(t.fe(`${n.seconds||""}`),t.le(n.nanos||0))}else if("stringValue"in e)this.de(e.stringValue,t),this._e(t);else if("bytesValue"in e)this.he(t,30),t.we(eN(e.bytesValue)),this._e(t);else if("referenceValue"in e)this.me(e.referenceValue,t);else if("geoPointValue"in e){let n=e.geoPointValue;this.he(t,45),t.le(n.latitude||0),t.le(n.longitude||0)}else"mapValue"in e?ez(e)?this.he(t,Number.MAX_SAFE_INTEGER):(this.ge(e.mapValue,t),this._e(t)):"arrayValue"in e?(this.ye(e.arrayValue,t),this._e(t)):b()}de(e,t){this.he(t,25),this.pe(e,t)}pe(e,t){t.fe(e)}ge(e,t){let n=e.fields||{};for(let e of(this.he(t,55),Object.keys(n)))this.de(e,t),this.ce(n[e],t)}ye(e,t){let n=e.values||[];for(let e of(this.he(t,50),n))this.ce(e,t)}me(e,t){this.he(t,37),G.fromName(e).path.forEach(e=>{this.he(t,60),this.pe(e,t)})}he(e,t){e.le(t)}_e(e){e.le(2)}}function rA(e){let t=64-function(e){let t=0;for(let n=0;n<8;++n){let r=function(e){if(0===e)return 8;let t=0;return e>>4==0&&(t+=4,e<<=4),e>>6==0&&(t+=2,e<<=2),e>>7==0&&(t+=1),t}(255&e[n]);if(t+=r,8!==r)break}return t}(e);return Math.ceil(t/8)}rC.Ie=new rC;class rR{constructor(){this.buffer=new Uint8Array(1024),this.position=0}Te(e){let t=e[Symbol.iterator](),n=t.next();for(;!n.done;)this.Ee(n.value),n=t.next();this.Ae()}Re(e){let t=e[Symbol.iterator](),n=t.next();for(;!n.done;)this.be(n.value),n=t.next();this.Pe()}ve(e){for(let t of e){let e=t.charCodeAt(0);if(e<128)this.Ee(e);else if(e<2048)this.Ee(960|e>>>6),this.Ee(128|63&e);else if(t<"\ud800"||"\udbff"<t)this.Ee(480|e>>>12),this.Ee(128|63&e>>>6),this.Ee(128|63&e);else{let e=t.codePointAt(0);this.Ee(240|e>>>18),this.Ee(128|63&e>>>12),this.Ee(128|63&e>>>6),this.Ee(128|63&e)}}this.Ae()}Ve(e){for(let t of e){let e=t.charCodeAt(0);if(e<128)this.be(e);else if(e<2048)this.be(960|e>>>6),this.be(128|63&e);else if(t<"\ud800"||"\udbff"<t)this.be(480|e>>>12),this.be(128|63&e>>>6),this.be(128|63&e);else{let e=t.codePointAt(0);this.be(240|e>>>18),this.be(128|63&e>>>12),this.be(128|63&e>>>6),this.be(128|63&e)}}this.Pe()}Se(e){let t=this.De(e),n=rA(t);this.Ce(1+n),this.buffer[this.position++]=255&n;for(let e=t.length-n;e<t.length;++e)this.buffer[this.position++]=255&t[e]}xe(e){let t=this.De(e),n=rA(t);this.Ce(1+n),this.buffer[this.position++]=~(255&n);for(let e=t.length-n;e<t.length;++e)this.buffer[this.position++]=~(255&t[e])}Ne(){this.ke(255),this.ke(255)}Oe(){this.Me(255),this.Me(255)}reset(){this.position=0}seed(e){this.Ce(e.length),this.buffer.set(e,this.position),this.position+=e.length}Fe(){return this.buffer.slice(0,this.position)}De(e){let t=function(e){let t=new DataView(new ArrayBuffer(8));return t.setFloat64(0,e,!1),new Uint8Array(t.buffer)}(e),n=0!=(128&t[0]);t[0]^=n?255:128;for(let e=1;e<t.length;++e)t[e]^=n?255:0;return t}Ee(e){let t=255&e;0===t?(this.ke(0),this.ke(255)):255===t?(this.ke(255),this.ke(0)):this.ke(t)}be(e){let t=255&e;0===t?(this.Me(0),this.Me(255)):255===t?(this.Me(255),this.Me(0)):this.Me(e)}Ae(){this.ke(0),this.ke(1)}Pe(){this.Me(0),this.Me(1)}ke(e){this.Ce(1),this.buffer[this.position++]=e}Me(e){this.Ce(1),this.buffer[this.position++]=~e}Ce(e){let t=e+this.position;if(t<=this.buffer.length)return;let n=2*this.buffer.length;n<t&&(n=t);let r=new Uint8Array(n);r.set(this.buffer),this.buffer=r}}class rV{constructor(e){this.$e=e}we(e){this.$e.Te(e)}fe(e){this.$e.ve(e)}le(e){this.$e.Se(e)}ae(){this.$e.Ne()}}class rM{constructor(e){this.$e=e}we(e){this.$e.Re(e)}fe(e){this.$e.Ve(e)}le(e){this.$e.xe(e)}ae(){this.$e.Oe()}}class rF{constructor(){this.$e=new rR,this.Be=new rV(this.$e),this.Le=new rM(this.$e)}seed(e){this.$e.seed(e)}qe(e){return 0===e?this.Be:this.Le}Fe(){return this.$e.Fe()}reset(){this.$e.reset()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rL{constructor(e,t,n,r){this.indexId=e,this.documentKey=t,this.arrayValue=n,this.directionalValue=r}Ue(){let e=this.directionalValue.length,t=0===e||255===this.directionalValue[e-1]?e+1:e,n=new Uint8Array(t);return n.set(this.directionalValue,0),t!==e?n.set([0],this.directionalValue.length):++n[n.length-1],new rL(this.indexId,this.documentKey,this.arrayValue,n)}}function rO(e,t){let n=e.indexId-t.indexId;return 0!==n?n:0!==(n=rq(e.arrayValue,t.arrayValue))?n:0!==(n=rq(e.directionalValue,t.directionalValue))?n:G.comparator(e.documentKey,t.documentKey)}function rq(e,t){for(let n=0;n<e.length&&n<t.length;++n){let r=e[n]-t[n];if(0!==r)return r}return e.length-t.length}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rP{constructor(e){for(let t of(this.collectionId=null!=e.collectionGroup?e.collectionGroup:e.path.lastSegment(),this.Ke=e.orderBy,this.Ge=[],e.filters)){let e=t;e.isInequality()?this.Qe=e:this.Ge.push(e)}}je(e){e.collectionGroup===this.collectionId||b();let t=Q(e);if(void 0!==t&&!this.We(t))return!1;let n=z(e),r=0,i=0;for(;r<n.length&&this.We(n[r]);++r);if(r===n.length)return!0;if(void 0!==this.Qe){let e=n[r];if(!this.ze(this.Qe,e)||!this.He(this.Ke[i++],e))return!1;++r}for(;r<n.length;++r){let e=n[r];if(i>=this.Ke.length||!this.He(this.Ke[i++],e))return!1}return!0}We(e){for(let t of this.Ge)if(this.ze(t,e))return!0;return!1}ze(e,t){if(void 0===e||!e.field.isEqual(t.fieldPath))return!1;let n="array-contains"===e.op||"array-contains-any"===e.op;return 2===t.kind===n}He(e,t){return!!e.field.isEqual(t.fieldPath)&&(0===t.kind&&"asc"===e.dir||1===t.kind&&"desc"===e.dir)}}function rU(e){return e instanceof eJ}function rB(e){return e instanceof e0&&e5(e)}function rK(e){return rU(e)||rB(e)||function(e){if(e instanceof e0&&e2(e)){for(let t of e.getFilters())if(!rU(t)&&!rB(t))return!1;return!0}return!1}(e)}function rG(e,t){return e instanceof eJ||e instanceof e0||b(),t instanceof eJ||t instanceof e0||b(),rQ(e instanceof eJ?t instanceof eJ?e0.create([e,t],"and"):r$(e,t):t instanceof eJ?r$(t,e):function(e,t){if(e.filters.length>0&&t.filters.length>0||b(),e1(e)&&e1(t))return e3(e,t.getFilters());let n=e2(e)?e:t,r=e2(e)?t:e,i=n.filters.map(e=>rG(e,r));return e0.create(i,"or")}(e,t))}function r$(e,t){if(e1(t))return e3(t,e.getFilters());{let n=t.filters.map(t=>rG(e,t));return e0.create(n,"or")}}function rQ(e){if(e instanceof eJ||e instanceof e0||b(),e instanceof eJ)return e;let t=e.getFilters();if(1===t.length)return rQ(t[0]);if(e4(e))return e;let n=t.map(e=>rQ(e)),r=[];return n.forEach(t=>{t instanceof eJ?r.push(t):t instanceof e0&&(t.op===e.op?r.push(...t.filters):r.push(t))}),1===r.length?r[0]:e0.create(r,e.op)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rz{constructor(){this.Je=new rj}addToCollectionParentIndex(e,t){return this.Je.add(t),en.resolve()}getCollectionParents(e,t){return en.resolve(this.Je.getEntries(t))}addFieldIndex(e,t){return en.resolve()}deleteFieldIndex(e,t){return en.resolve()}getDocumentsMatchingTarget(e,t){return en.resolve(null)}getIndexType(e,t){return en.resolve(0)}getFieldIndexes(e,t){return en.resolve([])}getNextCollectionGroupToUpdate(e){return en.resolve(null)}getMinOffset(e,t){return en.resolve(X.min())}getMinOffsetFromCollectionGroup(e,t){return en.resolve(X.min())}updateCollectionGroup(e,t,n){return en.resolve()}updateIndexEntries(e,t){return en.resolve()}}class rj{constructor(){this.index={}}add(e){let t=e.lastSegment(),n=e.popLast(),r=this.index[t]||new tu(U.comparator),i=!r.has(n);return this.index[t]=r.add(n),i}has(e){let t=e.lastSegment(),n=e.popLast(),r=this.index[t];return r&&r.has(n)}getEntries(e){return(this.index[e]||new tu(U.comparator)).toArray()}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let rW=new Uint8Array(0);class rH{constructor(e,t){this.user=e,this.databaseId=t,this.Ye=new rj,this.Xe=new ns(e=>tp(e),(e,t)=>ty(e,t)),this.uid=e.uid||""}addToCollectionParentIndex(e,t){if(!this.Ye.has(t)){let n=t.lastSegment(),r=t.popLast();e.addOnCommittedListener(()=>{this.Ye.add(t)});let i={collectionId:n,parent:nH(r)};return rY(e).put(i)}return en.resolve()}getCollectionParents(e,t){let n=[],r=IDBKeyRange.bound([t,""],[t+"\x00",""],!1,!0);return rY(e).W(r).next(e=>{for(let r of e){if(r.collectionId!==t)break;n.push(nY(r.parent))}return n})}addFieldIndex(e,t){let n=rZ(e),r={indexId:t.indexId,collectionGroup:t.collectionGroup,fields:t.fields.map(e=>[e.fieldPath.canonicalString(),e.kind])};delete r.indexId;let i=n.add(r);if(t.indexState){let n=rJ(e);return i.next(e=>{n.put(rS(e,this.user,t.indexState.sequenceNumber,t.indexState.offset))})}return i.next()}deleteFieldIndex(e,t){let n=rZ(e),r=rJ(e),i=rX(e);return n.delete(t.indexId).next(()=>r.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0))).next(()=>i.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0)))}getDocumentsMatchingTarget(e,t){let n=rX(e),r=!0,i=new Map;return en.forEach(this.Ze(t),t=>this.tn(e,t).next(e=>{r&&(r=!!e),i.set(t,e)})).next(()=>{if(r){let e=nf(),r=[];return en.forEach(i,(i,s)=>{y("IndexedDbIndexManager",`Using index id=${i.indexId}|cg=${i.collectionGroup}|f=${i.fields.map(e=>`${e.fieldPath}:${e.kind}`).join(",")} to execute ${tp(t)}`);let a=function(e,t){let n=Q(t);if(void 0===n)return null;for(let t of tv(e,n.fieldPath))switch(t.op){case"array-contains-any":return t.value.arrayValue.values||[];case"array-contains":return[t.value]}return null}(s,i),o=function(e,t){let n=new Map;for(let r of z(t))for(let t of tv(e,r.fieldPath))switch(t.op){case"==":case"in":n.set(r.fieldPath.canonicalString(),t.value);break;case"not-in":case"!=":return n.set(r.fieldPath.canonicalString(),t.value),Array.from(n.values())}return null}(s,i),u=function(e,t){let n=[],r=!0;for(let i of z(t)){let t=0===i.kind?tI(e,i.fieldPath,e.startAt):tb(e,i.fieldPath,e.startAt);n.push(t.value),r&&(r=t.inclusive)}return new eH(n,r)}(s,i),l=function(e,t){let n=[],r=!0;for(let i of z(t)){let t=0===i.kind?tb(e,i.fieldPath,e.endAt):tI(e,i.fieldPath,e.endAt);n.push(t.value),r&&(r=t.inclusive)}return new eH(n,r)}(s,i),c=this.en(i,s,u),h=this.en(i,s,l),d=this.nn(i,s,o),f=this.sn(i.indexId,a,c,u.inclusive,h,l.inclusive,d);return en.forEach(f,i=>n.J(i,t.limit).next(t=>{t.forEach(t=>{let n=G.fromSegments(t.documentKey);e.has(n)||(e=e.add(n),r.push(n))})}))}).next(()=>r)}return en.resolve(null)})}Ze(e){let t=this.Xe.get(e);return t||(t=0===e.filters.length?[e]:(function(e){if(0===e.getFilters().length)return[];let t=function e(t){if(t instanceof eJ||t instanceof e0||b(),t instanceof eJ)return t;if(1===t.filters.length)return e(t.filters[0]);let n=t.filters.map(t=>e(t)),r=e0.create(n,t.op);return rK(r=rQ(r))?r:(r instanceof e0||b(),e1(r)||b(),r.filters.length>1||b(),r.filters.reduce((e,t)=>rG(e,t)))}(/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function e(t){var n,r;if(t instanceof eJ||t instanceof e0||b(),t instanceof eJ){if(t instanceof tt){let e=(null===(r=null===(n=t.value.arrayValue)||void 0===n?void 0:n.values)||void 0===r?void 0:r.map(e=>eJ.create(t.field,"==",e)))||[];return e0.create(e,"or")}return t}let i=t.filters.map(t=>e(t));return e0.create(i,t.op)}(e));return rK(t)||b(),rU(t)||rB(t)?[t]:t.getFilters()})(e0.create(e.filters,"and")).map(t=>tg(e.path,e.collectionGroup,e.orderBy,t.getFilters(),e.limit,e.startAt,e.endAt)),this.Xe.set(e,t)),t}sn(e,t,n,r,i,s,a){let o=(null!=t?t.length:1)*Math.max(n.length,i.length),u=o/(null!=t?t.length:1),l=[];for(let c=0;c<o;++c){let o=t?this.rn(t[c/u]):rW,h=this.on(e,o,n[c%u],r),d=this.un(e,o,i[c%u],s),f=a.map(t=>this.on(e,o,t,!0));l.push(...this.createRange(h,d,f))}return l}on(e,t,n,r){let i=new rL(e,G.empty(),t,n);return r?i:i.Ue()}un(e,t,n,r){let i=new rL(e,G.empty(),t,n);return r?i.Ue():i}tn(e,t){let n=new rP(t),r=null!=t.collectionGroup?t.collectionGroup:t.path.lastSegment();return this.getFieldIndexes(e,r).next(e=>{let t=null;for(let r of e)n.je(r)&&(!t||r.fields.length>t.fields.length)&&(t=r);return t})}getIndexType(e,t){let n=2,r=this.Ze(t);return en.forEach(r,t=>this.tn(e,t).next(e=>{e?0!==n&&e.fields.length<function(e){let t=new tu(K.comparator),n=!1;for(let r of e.filters)for(let e of r.getFlattenedFilters())e.field.isKeyField()||("array-contains"===e.op||"array-contains-any"===e.op?n=!0:t=t.add(e.field));for(let n of e.orderBy)n.field.isKeyField()||(t=t.add(n.field));return t.size+(n?1:0)}(t)&&(n=1):n=0})).next(()=>null!==t.limit&&r.length>1&&2===n?1:n)}cn(e,t){let n=new rF;for(let r of z(e)){let e=t.data.field(r.fieldPath);if(null==e)return null;let i=n.qe(r.kind);rC.Ie.ue(e,i)}return n.Fe()}rn(e){let t=new rF;return rC.Ie.ue(e,t.qe(0)),t.Fe()}an(e,t){let n=new rF;return rC.Ie.ue(eP(this.databaseId,t),n.qe(function(e){let t=z(e);return 0===t.length?0:t[t.length-1].kind}(e))),n.Fe()}nn(e,t,n){if(null===n)return[];let r=[];r.push(new rF);let i=0;for(let s of z(e)){let e=n[i++];for(let n of r)if(this.hn(t,s.fieldPath)&&eB(e))r=this.ln(r,s,e);else{let t=n.qe(s.kind);rC.Ie.ue(e,t)}}return this.fn(r)}en(e,t,n){return this.nn(e,t,n.position)}fn(e){let t=[];for(let n=0;n<e.length;++n)t[n]=e[n].Fe();return t}ln(e,t,n){let r=[...e],i=[];for(let e of n.arrayValue.values||[])for(let n of r){let r=new rF;r.seed(n.Fe()),rC.Ie.ue(e,r.qe(t.kind)),i.push(r)}return i}hn(e,t){return!!e.filters.find(e=>e instanceof eJ&&e.field.isEqual(t)&&("in"===e.op||"not-in"===e.op))}getFieldIndexes(e,t){let n=rZ(e),r=rJ(e);return(t?n.W("collectionGroupIndex",IDBKeyRange.bound(t,t)):n.W()).next(e=>{let t=[];return en.forEach(e,e=>r.get([e.indexId,this.uid]).next(n=>{t.push(function(e,t){let n=t?new W(t.sequenceNumber,new X(ry(t.readTime),new G(nY(t.documentKey)),t.largestBatchId)):W.empty(),r=e.fields.map(([e,t])=>new j(K.fromServerFormat(e),t));return new $(e.indexId,e.collectionGroup,r,n)}(e,n))})).next(()=>t)})}getNextCollectionGroupToUpdate(e){return this.getFieldIndexes(e).next(e=>0===e.length?null:(e.sort((e,t)=>{let n=e.indexState.sequenceNumber-t.indexState.sequenceNumber;return 0!==n?n:F(e.collectionGroup,t.collectionGroup)}),e[0].collectionGroup))}updateCollectionGroup(e,t,n){let r=rZ(e),i=rJ(e);return this.dn(e).next(e=>r.W("collectionGroupIndex",IDBKeyRange.bound(t,t)).next(t=>en.forEach(t,t=>i.put(rS(t.indexId,this.user,e,n)))))}updateIndexEntries(e,t){let n=new Map;return en.forEach(t,(t,r)=>{let i=n.get(t.collectionGroup);return(i?en.resolve(i):this.getFieldIndexes(e,t.collectionGroup)).next(i=>(n.set(t.collectionGroup,i),en.forEach(i,n=>this._n(e,t,n).next(t=>{let i=this.wn(r,n);return t.isEqual(i)?en.resolve():this.mn(e,r,n,t,i)}))))})}gn(e,t,n,r){return rX(e).put({indexId:r.indexId,uid:this.uid,arrayValue:r.arrayValue,directionalValue:r.directionalValue,orderedDocumentKey:this.an(n,t.key),documentKey:t.key.path.toArray()})}yn(e,t,n,r){return rX(e).delete([r.indexId,this.uid,r.arrayValue,r.directionalValue,this.an(n,t.key),t.key.path.toArray()])}_n(e,t,n){let r=rX(e),i=new tu(rO);return r.Z({index:"documentKeyIndex",range:IDBKeyRange.only([n.indexId,this.uid,this.an(n,t)])},(e,r)=>{i=i.add(new rL(n.indexId,t,r.arrayValue,r.directionalValue))}).next(()=>i)}wn(e,t){let n=new tu(rO),r=this.cn(t,e);if(null==r)return n;let i=Q(t);if(null!=i){let s=e.data.field(i.fieldPath);if(eB(s))for(let i of s.arrayValue.values||[])n=n.add(new rL(t.indexId,e.key,this.rn(i),r))}else n=n.add(new rL(t.indexId,e.key,rW,r));return n}mn(e,t,n,r,i){y("IndexedDbIndexManager","Updating index entries for document '%s'",t.key);let s=[];return function(e,t,n,r,i){let s=e.getIterator(),a=t.getIterator(),o=tc(s),u=tc(a);for(;o||u;){let e=!1,t=!1;if(o&&u){let r=n(o,u);r<0?t=!0:r>0&&(e=!0)}else null!=o?t=!0:e=!0;e?(r(u),u=tc(a)):t?(i(o),o=tc(s)):(o=tc(s),u=tc(a))}}(r,i,rO,r=>{s.push(this.gn(e,t,n,r))},r=>{s.push(this.yn(e,t,n,r))}),en.waitFor(s)}dn(e){let t=1;return rJ(e).Z({index:"sequenceNumberIndex",reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},(e,n,r)=>{r.done(),t=n.sequenceNumber+1}).next(()=>t)}createRange(e,t,n){n=n.sort((e,t)=>rO(e,t)).filter((e,t,n)=>!t||0!==rO(e,n[t-1]));let r=[];for(let i of(r.push(e),n)){let n=rO(i,e),s=rO(i,t);if(0===n)r[0]=e.Ue();else if(n>0&&s<0)r.push(i),r.push(i.Ue());else if(s>0)break}r.push(t);let i=[];for(let e=0;e<r.length;e+=2){if(this.pn(r[e],r[e+1]))return[];let t=[r[e].indexId,this.uid,r[e].arrayValue,r[e].directionalValue,rW,[]],n=[r[e+1].indexId,this.uid,r[e+1].arrayValue,r[e+1].directionalValue,rW,[]];i.push(IDBKeyRange.bound(t,n))}return i}pn(e,t){return rO(e,t)>0}getMinOffsetFromCollectionGroup(e,t){return this.getFieldIndexes(e,t).next(r0)}getMinOffset(e,t){return en.mapArray(this.Ze(t),t=>this.tn(e,t).next(e=>e||b())).next(r0)}}function rY(e){return ru(e,"collectionParents")}function rX(e){return ru(e,"indexEntries")}function rZ(e){return ru(e,"indexConfiguration")}function rJ(e){return ru(e,"indexState")}function r0(e){0!==e.length||b();let t=e[0].indexState.offset,n=t.largestBatchId;for(let r=1;r<e.length;r++){let i=e[r].indexState.offset;0>Z(i,t)&&(t=i),n<i.largestBatchId&&(n=i.largestBatchId)}return new X(t.readTime,t.documentKey,n)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let r1={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class r2{constructor(e,t,n){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=n}static withCacheSize(e){return new r2(e,r2.DEFAULT_COLLECTION_PERCENTILE,r2.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function r5(e,t,n){let r=e.store("mutations"),i=e.store("documentMutations"),s=[],a=IDBKeyRange.only(n.batchId),o=0,u=r.Z({range:a},(e,t,n)=>(o++,n.delete()));s.push(u.next(()=>{1===o||b()}));let l=[];for(let e of n.mutations){var c,h;let r=(c=e.key.path,h=n.batchId,[t,nH(c),h]);s.push(i.delete(r)),l.push(e.key)}return en.waitFor(s).next(()=>l)}function r4(e){let t;if(!e)return 0;if(e.document)t=e.document;else if(e.unknownDocument)t=e.unknownDocument;else{if(!e.noDocument)throw b();t=e.noDocument}return JSON.stringify(t).length}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */r2.DEFAULT_COLLECTION_PERCENTILE=10,r2.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,r2.DEFAULT=new r2(41943040,r2.DEFAULT_COLLECTION_PERCENTILE,r2.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),r2.DISABLED=new r2(-1,0,0);class r3{constructor(e,t,n,r){this.userId=e,this.yt=t,this.indexManager=n,this.referenceDelegate=r,this.In={}}static re(e,t,n,r){""!==e.uid||b();let i=e.isAuthenticated()?e.uid:"";return new r3(i,t,n,r)}checkEmpty(e){let t=!0,n=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return r9(e).Z({index:"userMutationsIndex",range:n},(e,n,r)=>{t=!1,r.done()}).next(()=>t)}addMutationBatch(e,t,n,r){let i=r6(e),s=r9(e);return s.add({}).next(a=>{"number"==typeof a||b();let o=new rl(a,t,n,r),u=function(e,t,n){let r=n.baseMutations.map(t=>nB(e.ie,t)),i=n.mutations.map(t=>nB(e.ie,t));return{userId:t,batchId:n.batchId,localWriteTimeMs:n.localWriteTime.toMillis(),baseMutations:r,mutations:i}}(this.yt,this.userId,o),l=[],c=new tu((e,t)=>F(e.canonicalString(),t.canonicalString()));for(let e of r){let t=[this.userId,nH(e.key.path),a];c=c.add(e.key.path.popLast()),l.push(s.put(u)),l.push(i.put(t,nZ))}return c.forEach(t=>{l.push(this.indexManager.addToCollectionParentIndex(e,t))}),e.addOnCommittedListener(()=>{this.In[a]=o.keys()}),en.waitFor(l).next(()=>o)})}lookupMutationBatch(e,t){return r9(e).get(t).next(e=>e?(e.userId===this.userId||b(),rw(this.yt,e)):null)}Tn(e,t){return this.In[t]?en.resolve(this.In[t]):this.lookupMutationBatch(e,t).next(e=>{if(e){let n=e.keys();return this.In[t]=n,n}return null})}getNextMutationBatchAfterBatchId(e,t){let n=t+1,r=IDBKeyRange.lowerBound([this.userId,n]),i=null;return r9(e).Z({index:"userMutationsIndex",range:r},(e,t,r)=>{t.userId===this.userId&&(t.batchId>=n||b(),i=rw(this.yt,t)),r.done()}).next(()=>i)}getHighestUnacknowledgedBatchId(e){let t=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]),n=-1;return r9(e).Z({index:"userMutationsIndex",range:t,reverse:!0},(e,t,r)=>{n=t.batchId,r.done()}).next(()=>n)}getAllMutationBatches(e){let t=IDBKeyRange.bound([this.userId,-1],[this.userId,Number.POSITIVE_INFINITY]);return r9(e).W("userMutationsIndex",t).next(e=>e.map(e=>rw(this.yt,e)))}getAllMutationBatchesAffectingDocumentKey(e,t){let n=[this.userId,nH(t.path)],r=IDBKeyRange.lowerBound(n),i=[];return r6(e).Z({range:r},(n,r,s)=>{let[a,o,u]=n,l=nY(o);if(a===this.userId&&t.path.isEqual(l))return r9(e).get(u).next(e=>{if(!e)throw b();e.userId===this.userId||b(),i.push(rw(this.yt,e))});s.done()}).next(()=>i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new tu(F),r=[];return t.forEach(t=>{let i=[this.userId,nH(t.path)],s=IDBKeyRange.lowerBound(i),a=r6(e).Z({range:s},(e,r,i)=>{let[s,a,o]=e,u=nY(a);s===this.userId&&t.path.isEqual(u)?n=n.add(o):i.done()});r.push(a)}),en.waitFor(r).next(()=>this.En(e,n))}getAllMutationBatchesAffectingQuery(e,t){let n=t.path,r=n.length+1,i=[this.userId,nH(n)],s=IDBKeyRange.lowerBound(i),a=new tu(F);return r6(e).Z({range:s},(e,t,i)=>{let[s,o,u]=e,l=nY(o);s===this.userId&&n.isPrefixOf(l)?l.length===r&&(a=a.add(u)):i.done()}).next(()=>this.En(e,a))}En(e,t){let n=[],r=[];return t.forEach(t=>{r.push(r9(e).get(t).next(e=>{if(null===e)throw b();e.userId===this.userId||b(),n.push(rw(this.yt,e))}))}),en.waitFor(r).next(()=>n)}removeMutationBatch(e,t){return r5(e.se,this.userId,t).next(n=>(e.addOnCommittedListener(()=>{this.An(t.batchId)}),en.forEach(n,t=>this.referenceDelegate.markPotentiallyOrphaned(e,t))))}An(e){delete this.In[e]}performConsistencyCheck(e){return this.checkEmpty(e).next(t=>{if(!t)return en.resolve();let n=IDBKeyRange.lowerBound([this.userId]),r=[];return r6(e).Z({range:n},(e,t,n)=>{if(e[0]===this.userId){let t=nY(e[1]);r.push(t)}else n.done()}).next(()=>{0===r.length||b()})})}containsKey(e,t){return r8(e,this.userId,t)}Rn(e){return r7(e).get(this.userId).next(e=>e||{userId:this.userId,lastAcknowledgedBatchId:-1,lastStreamToken:""})}}function r8(e,t,n){let r=[t,nH(n.path)],i=r[1],s=IDBKeyRange.lowerBound(r),a=!1;return r6(e).Z({range:s,X:!0},(e,n,r)=>{let[s,o,u]=e;s===t&&o===i&&(a=!0),r.done()}).next(()=>a)}function r9(e){return ru(e,"mutations")}function r6(e){return ru(e,"documentMutations")}function r7(e){return ru(e,"mutationQueues")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ie{constructor(e){this.bn=e}next(){return this.bn+=2,this.bn}static Pn(){return new ie(0)}static vn(){return new ie(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class it{constructor(e,t){this.referenceDelegate=e,this.yt=t}allocateTargetId(e){return this.Vn(e).next(t=>{let n=new ie(t.highestTargetId);return t.highestTargetId=n.next(),this.Sn(e,t).next(()=>t.highestTargetId)})}getLastRemoteSnapshotVersion(e){return this.Vn(e).next(e=>q.fromTimestamp(new O(e.lastRemoteSnapshotVersion.seconds,e.lastRemoteSnapshotVersion.nanoseconds)))}getHighestSequenceNumber(e){return this.Vn(e).next(e=>e.highestListenSequenceNumber)}setTargetsMetadata(e,t,n){return this.Vn(e).next(r=>(r.highestListenSequenceNumber=t,n&&(r.lastRemoteSnapshotVersion=n.toTimestamp()),t>r.highestListenSequenceNumber&&(r.highestListenSequenceNumber=t),this.Sn(e,r)))}addTargetData(e,t){return this.Dn(e,t).next(()=>this.Vn(e).next(n=>(n.targetCount+=1,this.Cn(t,n),this.Sn(e,n))))}updateTargetData(e,t){return this.Dn(e,t)}removeTargetData(e,t){return this.removeMatchingKeysForTargetId(e,t.targetId).next(()=>ir(e).delete(t.targetId)).next(()=>this.Vn(e)).next(t=>(t.targetCount>0||b(),t.targetCount-=1,this.Sn(e,t)))}removeTargets(e,t,n){let r=0,i=[];return ir(e).Z((s,a)=>{let o=rv(a);o.sequenceNumber<=t&&null===n.get(o.targetId)&&(r++,i.push(this.removeTargetData(e,o)))}).next(()=>en.waitFor(i)).next(()=>r)}forEachTarget(e,t){return ir(e).Z((e,n)=>{let r=rv(n);t(r)})}Vn(e){return ii(e).get("targetGlobalKey").next(e=>(null!==e||b(),e))}Sn(e,t){return ii(e).put("targetGlobalKey",t)}Dn(e,t){return ir(e).put(rI(this.yt,t))}Cn(e,t){let n=!1;return e.targetId>t.highestTargetId&&(t.highestTargetId=e.targetId,n=!0),e.sequenceNumber>t.highestListenSequenceNumber&&(t.highestListenSequenceNumber=e.sequenceNumber,n=!0),n}getTargetCount(e){return this.Vn(e).next(e=>e.targetCount)}getTargetData(e,t){let n=tp(t),r=IDBKeyRange.bound([n,Number.NEGATIVE_INFINITY],[n,Number.POSITIVE_INFINITY]),i=null;return ir(e).Z({range:r,index:"queryTargetsIndex"},(e,n,r)=>{let s=rv(n);ty(t,s.target)&&(i=s,r.done())}).next(()=>i)}addMatchingKeys(e,t,n){let r=[],i=is(e);return t.forEach(t=>{let s=nH(t.path);r.push(i.put({targetId:n,path:s})),r.push(this.referenceDelegate.addReference(e,n,t))}),en.waitFor(r)}removeMatchingKeys(e,t,n){let r=is(e);return en.forEach(t,t=>{let i=nH(t.path);return en.waitFor([r.delete([n,i]),this.referenceDelegate.removeReference(e,n,t)])})}removeMatchingKeysForTargetId(e,t){let n=is(e),r=IDBKeyRange.bound([t],[t+1],!1,!0);return n.delete(r)}getMatchingKeysForTargetId(e,t){let n=IDBKeyRange.bound([t],[t+1],!1,!0),r=is(e),i=nf();return r.Z({range:n,X:!0},(e,t,n)=>{let r=nY(e[1]),s=new G(r);i=i.add(s)}).next(()=>i)}containsKey(e,t){let n=nH(t.path),r=IDBKeyRange.bound([n],[n+"\x00"],!1,!0),i=0;return is(e).Z({index:"documentTargetsIndex",X:!0,range:r},([e,t],n,r)=>{0!==e&&(i++,r.done())}).next(()=>i>0)}ne(e,t){return ir(e).get(t).next(e=>e?rv(e):null)}}function ir(e){return ru(e,"targets")}function ii(e){return ru(e,"targetGlobal")}function is(e){return ru(e,"targetDocuments")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ia([e,t],[n,r]){let i=F(e,n);return 0===i?F(t,r):i}class io{constructor(e){this.xn=e,this.buffer=new tu(ia),this.Nn=0}kn(){return++this.Nn}On(e){let t=[e,this.kn()];if(this.buffer.size<this.xn)this.buffer=this.buffer.add(t);else{let e=this.buffer.last();0>ia(t,e)&&(this.buffer=this.buffer.delete(e).add(t))}}get maxValue(){return this.buffer.last()[0]}}class iu{constructor(e,t,n){this.garbageCollector=e,this.asyncQueue=t,this.localStore=n,this.Mn=null}start(){-1!==this.garbageCollector.params.cacheSizeCollectionThreshold&&this.Fn(6e4)}stop(){this.Mn&&(this.Mn.cancel(),this.Mn=null)}get started(){return null!==this.Mn}Fn(e){y("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.Mn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Mn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(e){eo(e)?y("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",e):await et(e)}await this.Fn(3e5)})}}class il{constructor(e,t){this.$n=e,this.params=t}calculateTargetCount(e,t){return this.$n.Bn(e).next(e=>Math.floor(t/100*e))}nthSequenceNumber(e,t){if(0===t)return en.resolve(em.at);let n=new io(t);return this.$n.forEachTarget(e,e=>n.On(e.sequenceNumber)).next(()=>this.$n.Ln(e,e=>n.On(e))).next(()=>n.maxValue)}removeTargets(e,t,n){return this.$n.removeTargets(e,t,n)}removeOrphanedDocuments(e,t){return this.$n.removeOrphanedDocuments(e,t)}collect(e,t){return -1===this.params.cacheSizeCollectionThreshold?(y("LruGarbageCollector","Garbage collection skipped; disabled"),en.resolve(r1)):this.getCacheSize(e).next(n=>n<this.params.cacheSizeCollectionThreshold?(y("LruGarbageCollector",`Garbage collection skipped; Cache size ${n} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),r1):this.qn(e,t))}getCacheSize(e){return this.$n.getCacheSize(e)}qn(e,t){let n,r,i,s,a,u,l;let c=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(t=>(t>this.params.maximumSequenceNumbersToCollect?(y("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${t}`),r=this.params.maximumSequenceNumbersToCollect):r=t,s=Date.now(),this.nthSequenceNumber(e,r))).next(r=>(n=r,a=Date.now(),this.removeTargets(e,n,t))).next(t=>(i=t,u=Date.now(),this.removeOrphanedDocuments(e,n))).next(e=>(l=Date.now(),g()<=o.in.DEBUG&&y("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${s-c}ms
	Determined least recently used ${r} in `+(a-s)+"ms\n"+`	Removed ${i} targets in `+(u-a)+"ms\n"+`	Removed ${e} documents in `+(l-u)+"ms\n"+`Total Duration: ${l-c}ms`),en.resolve({didRun:!0,sequenceNumbersCollected:r,targetsRemoved:i,documentsRemoved:e})))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ic{constructor(e,t){this.db=e,this.garbageCollector=new il(this,t)}Bn(e){let t=this.Un(e);return this.db.getTargetCache().getTargetCount(e).next(e=>t.next(t=>e+t))}Un(e){let t=0;return this.Ln(e,e=>{t++}).next(()=>t)}forEachTarget(e,t){return this.db.getTargetCache().forEachTarget(e,t)}Ln(e,t){return this.Kn(e,(e,n)=>t(n))}addReference(e,t,n){return ih(e,n)}removeReference(e,t,n){return ih(e,n)}removeTargets(e,t,n){return this.db.getTargetCache().removeTargets(e,t,n)}markPotentiallyOrphaned(e,t){return ih(e,t)}Gn(e,t){let n;return n=!1,r7(e).tt(r=>r8(e,r,t).next(e=>(e&&(n=!0),en.resolve(!e)))).next(()=>n)}removeOrphanedDocuments(e,t){let n=this.db.getRemoteDocumentCache().newChangeBuffer(),r=[],i=0;return this.Kn(e,(s,a)=>{if(a<=t){let t=this.Gn(e,s).next(t=>{if(!t)return i++,n.getEntry(e,s).next(()=>(n.removeEntry(s,q.min()),is(e).delete([0,nH(s.path)])))});r.push(t)}}).next(()=>en.waitFor(r)).next(()=>n.apply(e)).next(()=>i)}removeTarget(e,t){let n=t.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,n)}updateLimboDocument(e,t){return ih(e,t)}Kn(e,t){let n=is(e),r,i=em.at;return n.Z({index:"documentTargetsIndex"},([e,n],{path:s,sequenceNumber:a})=>{0===e?(i!==em.at&&t(new G(nY(r)),i),i=a,r=s):i=em.at}).next(()=>{i!==em.at&&t(new G(nY(r)),i)})}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}}function ih(e,t){var n;return is(e).put((n=e.currentSequenceNumber,{targetId:0,path:nH(t.path),sequenceNumber:n}))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class id{constructor(){this.changes=new ns(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,tf.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();let n=this.changes.get(t);return void 0!==n?en.resolve(n):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class im{constructor(e){this.yt=e}setIndexManager(e){this.indexManager=e}addEntry(e,t,n){return iy(e).put(n)}removeEntry(e,t,n){return iy(e).delete(function(e,t){let n=e.path.toArray();return[n.slice(0,n.length-2),n[n.length-2],rg(t),n[n.length-1]]}(t,n))}updateMetadata(e,t){return this.getMetadata(e).next(n=>(n.byteSize+=t,this.Qn(e,n)))}getEntry(e,t){let n=tf.newInvalidDocument(t);return iy(e).Z({index:"documentKeyIndex",range:IDBKeyRange.only(iw(t))},(e,r)=>{n=this.jn(t,r)}).next(()=>n)}Wn(e,t){let n={size:0,document:tf.newInvalidDocument(t)};return iy(e).Z({index:"documentKeyIndex",range:IDBKeyRange.only(iw(t))},(e,r)=>{n={document:this.jn(t,r),size:r4(r)}}).next(()=>n)}getEntries(e,t){let n=na;return this.zn(e,t,(e,t)=>{let r=this.jn(e,t);n=n.insert(e,r)}).next(()=>n)}Hn(e,t){let n=na,r=new ts(G.comparator);return this.zn(e,t,(e,t)=>{let i=this.jn(e,t);n=n.insert(e,i),r=r.insert(e,r4(t))}).next(()=>({documents:n,Jn:r}))}zn(e,t,n){if(t.isEmpty())return en.resolve();let r=new tu(iI);t.forEach(e=>r=r.add(e));let i=IDBKeyRange.bound(iw(r.first()),iw(r.last())),s=r.getIterator(),a=s.getNext();return iy(e).Z({index:"documentKeyIndex",range:i},(e,t,r)=>{let i=G.fromSegments([...t.prefixPath,t.collectionGroup,t.documentId]);for(;a&&0>iI(a,i);)n(a,null),a=s.getNext();a&&a.isEqual(i)&&(n(a,t),a=s.hasNext()?s.getNext():null),a?r.j(iw(a)):r.done()}).next(()=>{for(;a;)n(a,null),a=s.hasNext()?s.getNext():null})}getDocumentsMatchingQuery(e,t,n,r){let i=t.path,s=[i.popLast().toArray(),i.lastSegment(),rg(n.readTime),n.documentKey.path.isEmpty()?"":n.documentKey.path.lastSegment()],a=[i.popLast().toArray(),i.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return iy(e).W(IDBKeyRange.bound(s,a,!0)).next(e=>{let n=na;for(let i of e){let e=this.jn(G.fromSegments(i.prefixPath.concat(i.collectionGroup,i.documentId)),i);e.isFoundDocument()&&(tF(t,e)||r.has(e.key))&&(n=n.insert(e.key,e))}return n})}getAllFromCollectionGroup(e,t,n,r){let i=na,s=iv(t,n),a=iv(t,X.max());return iy(e).Z({index:"collectionGroupIndex",range:IDBKeyRange.bound(s,a,!0)},(e,t,n)=>{let s=this.jn(G.fromSegments(t.prefixPath.concat(t.collectionGroup,t.documentId)),t);(i=i.insert(s.key,s)).size===r&&n.done()}).next(()=>i)}newChangeBuffer(e){return new ig(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next(e=>e.byteSize)}getMetadata(e){return ip(e).get("remoteDocumentGlobalKey").next(e=>(e||b(),e))}Qn(e,t){return ip(e).put("remoteDocumentGlobalKey",t)}jn(e,t){if(t){let e=function(e,t){let n;if(t.document)n=nU(e.ie,t.document,!!t.hasCommittedMutations);else if(t.noDocument){let e=G.fromSegments(t.noDocument.path),r=ry(t.noDocument.readTime);n=tf.newNoDocument(e,r),t.hasCommittedMutations&&n.setHasCommittedMutations()}else{if(!t.unknownDocument)return b();{let e=G.fromSegments(t.unknownDocument.path),r=ry(t.unknownDocument.version);n=tf.newUnknownDocument(e,r)}}return t.readTime&&n.setReadTime(function(e){let t=new O(e[0],e[1]);return q.fromTimestamp(t)}(t.readTime)),n}(this.yt,t);if(!(e.isNoDocument()&&e.version.isEqual(q.min())))return e}return tf.newInvalidDocument(e)}}class ig extends id{constructor(e,t){super(),this.Yn=e,this.trackRemovals=t,this.Xn=new ns(e=>e.toString(),(e,t)=>e.isEqual(t))}applyChanges(e){let t=[],n=0,r=new tu((e,t)=>F(e.canonicalString(),t.canonicalString()));return this.changes.forEach((i,s)=>{let a=this.Xn.get(i);if(t.push(this.Yn.removeEntry(e,i,a.readTime)),s.isValidDocument()){let o=rm(this.Yn.yt,s);r=r.add(i.path.popLast());let u=r4(o);n+=u-a.size,t.push(this.Yn.addEntry(e,i,o))}else if(n-=a.size,this.trackRemovals){let n=rm(this.Yn.yt,s.convertToNoDocument(q.min()));t.push(this.Yn.addEntry(e,i,n))}}),r.forEach(n=>{t.push(this.Yn.indexManager.addToCollectionParentIndex(e,n))}),t.push(this.Yn.updateMetadata(e,n)),en.waitFor(t)}getFromCache(e,t){return this.Yn.Wn(e,t).next(e=>(this.Xn.set(t,{size:e.size,readTime:e.document.readTime}),e.document))}getAllFromCache(e,t){return this.Yn.Hn(e,t).next(({documents:e,Jn:t})=>(t.forEach((t,n)=>{this.Xn.set(t,{size:n,readTime:e.get(t).readTime})}),e))}}function ip(e){return ru(e,"remoteDocumentGlobal")}function iy(e){return ru(e,"remoteDocumentsV14")}function iw(e){let t=e.path.toArray();return[t.slice(0,t.length-2),t[t.length-2],t[t.length-1]]}function iv(e,t){let n=t.documentKey.path.toArray();return[e,rg(t.readTime),n.slice(0,n.length-2),n.length>0?n[n.length-1]:""]}function iI(e,t){let n=e.path.toArray(),r=t.path.toArray(),i=0;for(let e=0;e<n.length-2&&e<r.length-2;++e)if(i=F(n[e],r[e]))return i;return(i=F(n.length,r.length))||(i=F(n[n.length-2],r[r.length-2]))||F(n[n.length-1],r[r.length-1])}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ib{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iT{constructor(e,t,n,r){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=n,this.indexManager=r}getDocument(e,t){let n=null;return this.documentOverlayCache.getOverlay(e,t).next(r=>(n=r,this.remoteDocumentCache.getEntry(e,t))).next(e=>(null!==n&&t5(n.mutation,e,th.empty(),O.now()),e))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(t=>this.getLocalViewOfDocuments(e,t,nf()).next(()=>t))}getLocalViewOfDocuments(e,t,n=nf()){let r=nc();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,n).next(e=>{let t=nu();return e.forEach((e,n)=>{t=t.insert(e,n.overlayedDocument)}),t}))}getOverlayedDocuments(e,t){let n=nc();return this.populateOverlays(e,n,t).next(()=>this.computeViews(e,t,n,nf()))}populateOverlays(e,t,n){let r=[];return n.forEach(e=>{t.has(e)||r.push(e)}),this.documentOverlayCache.getOverlays(e,r).next(e=>{e.forEach((e,n)=>{t.set(e,n)})})}computeViews(e,t,n,r){let i=na,s=nc(),a=nc();return t.forEach((e,t)=>{let a=n.get(t.key);r.has(t.key)&&(void 0===a||a.mutation instanceof t8)?i=i.insert(t.key,t):void 0!==a?(s.set(t.key,a.mutation.getFieldMask()),t5(a.mutation,t,a.mutation.getFieldMask(),O.now())):s.set(t.key,th.empty())}),this.recalculateAndSaveOverlays(e,i).next(e=>(e.forEach((e,t)=>s.set(e,t)),t.forEach((e,t)=>{var n;return a.set(e,new ib(t,null!==(n=s.get(e))&&void 0!==n?n:null))}),a))}recalculateAndSaveOverlays(e,t){let n=nc(),r=new ts((e,t)=>e-t),i=nf();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(e=>{for(let i of e)i.keys().forEach(e=>{let s=t.get(e);if(null===s)return;let a=n.get(e)||th.empty();a=i.applyToLocalView(s,a),n.set(e,a);let o=(r.get(i.batchId)||nf()).add(e);r=r.insert(i.batchId,o)})}).next(()=>{let s=[],a=r.getReverseIterator();for(;a.hasNext();){let r=a.getNext(),o=r.key,u=r.value,l=nc();u.forEach(e=>{if(!i.has(e)){let r=t2(t.get(e),n.get(e));null!==r&&l.set(e,r),i=i.add(e)}}),s.push(this.documentOverlayCache.saveOverlays(e,o,l))}return en.waitFor(s)}).next(()=>n)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(t=>this.recalculateAndSaveOverlays(e,t))}getDocumentsMatchingQuery(e,t,n){return G.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length?this.getDocumentsMatchingDocumentQuery(e,t.path):tD(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,n):this.getDocumentsMatchingCollectionQuery(e,t,n)}getNextDocuments(e,t,n,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,n,r).next(i=>{let s=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,n.largestBatchId,r-i.size):en.resolve(nc()),a=-1,o=i;return s.next(t=>en.forEach(t,(t,n)=>(a<n.largestBatchId&&(a=n.largestBatchId),i.get(t)?en.resolve():this.remoteDocumentCache.getEntry(e,t).next(e=>{o=o.insert(t,e)}))).next(()=>this.populateOverlays(e,t,i)).next(()=>this.computeViews(e,o,t,nf())).next(e=>({batchId:a,changes:nl(e)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new G(t)).next(e=>{let t=nu();return e.isFoundDocument()&&(t=t.insert(e.key,e)),t})}getDocumentsMatchingCollectionGroupQuery(e,t,n){let r=t.collectionGroup,i=nu();return this.indexManager.getCollectionParents(e,r).next(s=>en.forEach(s,s=>{var a;let o=(a=s.child(r),new tT(a,null,t.explicitOrderBy.slice(),t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt));return this.getDocumentsMatchingCollectionQuery(e,o,n).next(e=>{e.forEach((e,t)=>{i=i.insert(e,t)})})}).next(()=>i))}getDocumentsMatchingCollectionQuery(e,t,n){let r;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,n.largestBatchId).next(i=>(r=i,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,n,r))).next(e=>{r.forEach((t,n)=>{let r=n.getKey();null===e.get(r)&&(e=e.insert(r,tf.newInvalidDocument(r)))});let n=nu();return e.forEach((e,i)=>{let s=r.get(e);void 0!==s&&t5(s.mutation,i,th.empty(),O.now()),tF(t,i)&&(n=n.insert(e,i))}),n})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iE{constructor(e){this.yt=e,this.Zn=new Map,this.ts=new Map}getBundleMetadata(e,t){return en.resolve(this.Zn.get(t))}saveBundleMetadata(e,t){return this.Zn.set(t.id,{id:t.id,version:t.version,createTime:nC(t.createTime)}),en.resolve()}getNamedQuery(e,t){return en.resolve(this.ts.get(t))}saveNamedQuery(e,t){return this.ts.set(t.name,{name:t.name,query:rb(t.bundledQuery),readTime:nC(t.readTime)}),en.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iS{constructor(){this.overlays=new ts(G.comparator),this.es=new Map}getOverlay(e,t){return en.resolve(this.overlays.get(t))}getOverlays(e,t){let n=nc();return en.forEach(t,t=>this.getOverlay(e,t).next(e=>{null!==e&&n.set(t,e)})).next(()=>n)}saveOverlays(e,t,n){return n.forEach((n,r)=>{this.oe(e,t,r)}),en.resolve()}removeOverlaysForBatchId(e,t,n){let r=this.es.get(n);return void 0!==r&&(r.forEach(e=>this.overlays=this.overlays.remove(e)),this.es.delete(n)),en.resolve()}getOverlaysForCollection(e,t,n){let r=nc(),i=t.length+1,s=new G(t.child("")),a=this.overlays.getIteratorFrom(s);for(;a.hasNext();){let e=a.getNext().value,s=e.getKey();if(!t.isPrefixOf(s.path))break;s.path.length===i&&e.largestBatchId>n&&r.set(e.getKey(),e)}return en.resolve(r)}getOverlaysForCollectionGroup(e,t,n,r){let i=new ts((e,t)=>e-t),s=this.overlays.getIterator();for(;s.hasNext();){let e=s.getNext().value;if(e.getKey().getCollectionGroup()===t&&e.largestBatchId>n){let t=i.get(e.largestBatchId);null===t&&(t=nc(),i=i.insert(e.largestBatchId,t)),t.set(e.getKey(),e)}}let a=nc(),o=i.getIterator();for(;o.hasNext()&&(o.getNext().value.forEach((e,t)=>a.set(e,t)),!(a.size()>=r)););return en.resolve(a)}oe(e,t,n){let r=this.overlays.get(n.key);if(null!==r){let e=this.es.get(r.largestBatchId).delete(n.key);this.es.set(r.largestBatchId,e)}this.overlays=this.overlays.insert(n.key,new rh(t,n));let i=this.es.get(t);void 0===i&&(i=nf(),this.es.set(t,i)),this.es.set(t,i.add(n.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ix{constructor(){this.ns=new tu(i_.ss),this.rs=new tu(i_.os)}isEmpty(){return this.ns.isEmpty()}addReference(e,t){let n=new i_(e,t);this.ns=this.ns.add(n),this.rs=this.rs.add(n)}us(e,t){e.forEach(e=>this.addReference(e,t))}removeReference(e,t){this.cs(new i_(e,t))}hs(e,t){e.forEach(e=>this.removeReference(e,t))}ls(e){let t=new G(new U([])),n=new i_(t,e),r=new i_(t,e+1),i=[];return this.rs.forEachInRange([n,r],e=>{this.cs(e),i.push(e.key)}),i}fs(){this.ns.forEach(e=>this.cs(e))}cs(e){this.ns=this.ns.delete(e),this.rs=this.rs.delete(e)}ds(e){let t=new G(new U([])),n=new i_(t,e),r=new i_(t,e+1),i=nf();return this.rs.forEachInRange([n,r],e=>{i=i.add(e.key)}),i}containsKey(e){let t=new i_(e,0),n=this.ns.firstAfterOrEqual(t);return null!==n&&e.isEqual(n.key)}}class i_{constructor(e,t){this.key=e,this._s=t}static ss(e,t){return G.comparator(e.key,t.key)||F(e._s,t._s)}static os(e,t){return F(e._s,t._s)||G.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iD{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.ws=1,this.gs=new tu(i_.ss)}checkEmpty(e){return en.resolve(0===this.mutationQueue.length)}addMutationBatch(e,t,n,r){let i=this.ws;this.ws++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];let s=new rl(i,t,n,r);for(let t of(this.mutationQueue.push(s),r))this.gs=this.gs.add(new i_(t.key,i)),this.indexManager.addToCollectionParentIndex(e,t.key.path.popLast());return en.resolve(s)}lookupMutationBatch(e,t){return en.resolve(this.ys(t))}getNextMutationBatchAfterBatchId(e,t){let n=this.ps(t+1),r=n<0?0:n;return en.resolve(this.mutationQueue.length>r?this.mutationQueue[r]:null)}getHighestUnacknowledgedBatchId(){return en.resolve(0===this.mutationQueue.length?-1:this.ws-1)}getAllMutationBatches(e){return en.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){let n=new i_(t,0),r=new i_(t,Number.POSITIVE_INFINITY),i=[];return this.gs.forEachInRange([n,r],e=>{let t=this.ys(e._s);i.push(t)}),en.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new tu(F);return t.forEach(e=>{let t=new i_(e,0),r=new i_(e,Number.POSITIVE_INFINITY);this.gs.forEachInRange([t,r],e=>{n=n.add(e._s)})}),en.resolve(this.Is(n))}getAllMutationBatchesAffectingQuery(e,t){let n=t.path,r=n.length+1,i=n;G.isDocumentKey(i)||(i=i.child(""));let s=new i_(new G(i),0),a=new tu(F);return this.gs.forEachWhile(e=>{let t=e.key.path;return!!n.isPrefixOf(t)&&(t.length===r&&(a=a.add(e._s)),!0)},s),en.resolve(this.Is(a))}Is(e){let t=[];return e.forEach(e=>{let n=this.ys(e);null!==n&&t.push(n)}),t}removeMutationBatch(e,t){0===this.Ts(t.batchId,"removed")||b(),this.mutationQueue.shift();let n=this.gs;return en.forEach(t.mutations,r=>{let i=new i_(r.key,t.batchId);return n=n.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)}).next(()=>{this.gs=n})}An(e){}containsKey(e,t){let n=new i_(t,0),r=this.gs.firstAfterOrEqual(n);return en.resolve(t.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,en.resolve()}Ts(e,t){return this.ps(e)}ps(e){return 0===this.mutationQueue.length?0:e-this.mutationQueue[0].batchId}ys(e){let t=this.ps(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iN{constructor(e){this.Es=e,this.docs=new ts(G.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){let n=t.key,r=this.docs.get(n),i=r?r.size:0,s=this.Es(t);return this.docs=this.docs.insert(n,{document:t.mutableCopy(),size:s}),this.size+=s-i,this.indexManager.addToCollectionParentIndex(e,n.path.popLast())}removeEntry(e){let t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){let n=this.docs.get(t);return en.resolve(n?n.document.mutableCopy():tf.newInvalidDocument(t))}getEntries(e,t){let n=na;return t.forEach(e=>{let t=this.docs.get(e);n=n.insert(e,t?t.document.mutableCopy():tf.newInvalidDocument(e))}),en.resolve(n)}getDocumentsMatchingQuery(e,t,n,r){let i=na,s=t.path,a=new G(s.child("")),o=this.docs.getIteratorFrom(a);for(;o.hasNext();){let{key:e,value:{document:a}}=o.getNext();if(!s.isPrefixOf(e.path))break;e.path.length>s.length+1||0>=Z(Y(a),n)||(r.has(a.key)||tF(t,a))&&(i=i.insert(a.key,a.mutableCopy()))}return en.resolve(i)}getAllFromCollectionGroup(e,t,n,r){b()}As(e,t){return en.forEach(this.docs,e=>t(e))}newChangeBuffer(e){return new ik(this)}getSize(e){return en.resolve(this.size)}}class ik extends id{constructor(e){super(),this.Yn=e}applyChanges(e){let t=[];return this.changes.forEach((n,r)=>{r.isValidDocument()?t.push(this.Yn.addEntry(e,r)):this.Yn.removeEntry(n)}),en.waitFor(t)}getFromCache(e,t){return this.Yn.getEntry(e,t)}getAllFromCache(e,t){return this.Yn.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iC{constructor(e){this.persistence=e,this.Rs=new ns(e=>tp(e),ty),this.lastRemoteSnapshotVersion=q.min(),this.highestTargetId=0,this.bs=0,this.Ps=new ix,this.targetCount=0,this.vs=ie.Pn()}forEachTarget(e,t){return this.Rs.forEach((e,n)=>t(n)),en.resolve()}getLastRemoteSnapshotVersion(e){return en.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return en.resolve(this.bs)}allocateTargetId(e){return this.highestTargetId=this.vs.next(),en.resolve(this.highestTargetId)}setTargetsMetadata(e,t,n){return n&&(this.lastRemoteSnapshotVersion=n),t>this.bs&&(this.bs=t),en.resolve()}Dn(e){this.Rs.set(e.target,e);let t=e.targetId;t>this.highestTargetId&&(this.vs=new ie(t),this.highestTargetId=t),e.sequenceNumber>this.bs&&(this.bs=e.sequenceNumber)}addTargetData(e,t){return this.Dn(t),this.targetCount+=1,en.resolve()}updateTargetData(e,t){return this.Dn(t),en.resolve()}removeTargetData(e,t){return this.Rs.delete(t.target),this.Ps.ls(t.targetId),this.targetCount-=1,en.resolve()}removeTargets(e,t,n){let r=0,i=[];return this.Rs.forEach((s,a)=>{a.sequenceNumber<=t&&null===n.get(a.targetId)&&(this.Rs.delete(s),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),r++)}),en.waitFor(i).next(()=>r)}getTargetCount(e){return en.resolve(this.targetCount)}getTargetData(e,t){let n=this.Rs.get(t)||null;return en.resolve(n)}addMatchingKeys(e,t,n){return this.Ps.us(t,n),en.resolve()}removeMatchingKeys(e,t,n){this.Ps.hs(t,n);let r=this.persistence.referenceDelegate,i=[];return r&&t.forEach(t=>{i.push(r.markPotentiallyOrphaned(e,t))}),en.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.Ps.ls(t),en.resolve()}getMatchingKeysForTargetId(e,t){let n=this.Ps.ds(t);return en.resolve(n)}containsKey(e,t){return en.resolve(this.Ps.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iA{constructor(e,t){var n;this.Vs={},this.overlays={},this.Ss=new em(0),this.Ds=!1,this.Ds=!0,this.referenceDelegate=e(this),this.Cs=new iC(this),this.indexManager=new rz,this.remoteDocumentCache=(n=e=>this.referenceDelegate.xs(e),new iN(n)),this.yt=new rf(t),this.Ns=new iE(this.yt)}start(){return Promise.resolve()}shutdown(){return this.Ds=!1,Promise.resolve()}get started(){return this.Ds}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new iS,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let n=this.Vs[e.toKey()];return n||(n=new iD(t,this.referenceDelegate),this.Vs[e.toKey()]=n),n}getTargetCache(){return this.Cs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ns}runTransaction(e,t,n){y("MemoryPersistence","Starting transaction:",e);let r=new iR(this.Ss.next());return this.referenceDelegate.ks(),n(r).next(e=>this.referenceDelegate.Os(r).next(()=>e)).toPromise().then(e=>(r.raiseOnCommittedEvent(),e))}Ms(e,t){return en.or(Object.values(this.Vs).map(n=>()=>n.containsKey(e,t)))}}class iR extends ee{constructor(e){super(),this.currentSequenceNumber=e}}class iV{constructor(e){this.persistence=e,this.Fs=new ix,this.$s=null}static Bs(e){return new iV(e)}get Ls(){if(this.$s)return this.$s;throw b()}addReference(e,t,n){return this.Fs.addReference(n,t),this.Ls.delete(n.toString()),en.resolve()}removeReference(e,t,n){return this.Fs.removeReference(n,t),this.Ls.add(n.toString()),en.resolve()}markPotentiallyOrphaned(e,t){return this.Ls.add(t.toString()),en.resolve()}removeTarget(e,t){this.Fs.ls(t.targetId).forEach(e=>this.Ls.add(e.toString()));let n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(e,t.targetId).next(e=>{e.forEach(e=>this.Ls.add(e.toString()))}).next(()=>n.removeTargetData(e,t))}ks(){this.$s=new Set}Os(e){let t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return en.forEach(this.Ls,n=>{let r=G.fromPath(n);return this.qs(e,r).next(e=>{e||t.removeEntry(r,q.min())})}).next(()=>(this.$s=null,t.apply(e)))}updateLimboDocument(e,t){return this.qs(e,t).next(e=>{e?this.Ls.delete(t.toString()):this.Ls.add(t.toString())})}xs(e){return 0}qs(e,t){return en.or([()=>en.resolve(this.Fs.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ms(e,t)])}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iM{constructor(e){this.yt=e}$(e,t,n,r){let i=new er("createOrUpgrade",t);n<1&&r>=1&&(function(e){e.createObjectStore("owner")}(e),e.createObjectStore("mutationQueues",{keyPath:"userId"}),e.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",nX,{unique:!0}),e.createObjectStore("documentMutations"),iF(e),function(e){e.createObjectStore("remoteDocuments")}(e));let s=en.resolve();return n<3&&r>=3&&(0!==n&&(e.deleteObjectStore("targetDocuments"),e.deleteObjectStore("targets"),e.deleteObjectStore("targetGlobal"),iF(e)),s=s.next(()=>(function(e){let t=e.store("targetGlobal"),n={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:q.min().toTimestamp(),targetCount:0};return t.put("targetGlobalKey",n)})(i))),n<4&&r>=4&&(0!==n&&(s=s.next(()=>i.store("mutations").W().next(t=>{e.deleteObjectStore("mutations"),e.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",nX,{unique:!0});let n=i.store("mutations"),r=t.map(e=>n.put(e));return en.waitFor(r)}))),s=s.next(()=>{!function(e){e.createObjectStore("clientMetadata",{keyPath:"clientId"})}(e)})),n<5&&r>=5&&(s=s.next(()=>this.Us(i))),n<6&&r>=6&&(s=s.next(()=>((function(e){e.createObjectStore("remoteDocumentGlobal")})(e),this.Ks(i)))),n<7&&r>=7&&(s=s.next(()=>this.Gs(i))),n<8&&r>=8&&(s=s.next(()=>this.Qs(e,i))),n<9&&r>=9&&(s=s.next(()=>{e.objectStoreNames.contains("remoteDocumentChanges")&&e.deleteObjectStore("remoteDocumentChanges")})),n<10&&r>=10&&(s=s.next(()=>this.js(i))),n<11&&r>=11&&(s=s.next(()=>{(function(e){e.createObjectStore("bundles",{keyPath:"bundleId"})})(e),function(e){e.createObjectStore("namedQueries",{keyPath:"name"})}(e)})),n<12&&r>=12&&(s=s.next(()=>{!function(e){let t=e.createObjectStore("documentOverlays",{keyPath:re});t.createIndex("collectionPathOverlayIndex",rt,{unique:!1}),t.createIndex("collectionGroupOverlayIndex",rn,{unique:!1})}(e)})),n<13&&r>=13&&(s=s.next(()=>(function(e){let t=e.createObjectStore("remoteDocumentsV14",{keyPath:nJ});t.createIndex("documentKeyIndex",n0),t.createIndex("collectionGroupIndex",n1)})(e)).next(()=>this.Ws(e,i)).next(()=>e.deleteObjectStore("remoteDocuments"))),n<14&&r>=14&&(s=s.next(()=>this.zs(e,i))),n<15&&r>=15&&(s=s.next(()=>{e.createObjectStore("indexConfiguration",{keyPath:"indexId",autoIncrement:!0}).createIndex("collectionGroupIndex","collectionGroup",{unique:!1}),e.createObjectStore("indexState",{keyPath:n8}).createIndex("sequenceNumberIndex",n9,{unique:!1}),e.createObjectStore("indexEntries",{keyPath:n6}).createIndex("documentKeyIndex",n7,{unique:!1})})),s}Ks(e){let t=0;return e.store("remoteDocuments").Z((e,n)=>{t+=r4(n)}).next(()=>{let n={byteSize:t};return e.store("remoteDocumentGlobal").put("remoteDocumentGlobalKey",n)})}Us(e){let t=e.store("mutationQueues"),n=e.store("mutations");return t.W().next(t=>en.forEach(t,t=>{let r=IDBKeyRange.bound([t.userId,-1],[t.userId,t.lastAcknowledgedBatchId]);return n.W("userMutationsIndex",r).next(n=>en.forEach(n,n=>{n.userId===t.userId||b();let r=rw(this.yt,n);return r5(e,t.userId,r).next(()=>{})}))}))}Gs(e){let t=e.store("targetDocuments"),n=e.store("remoteDocuments");return e.store("targetGlobal").get("targetGlobalKey").next(e=>{let r=[];return n.Z((n,i)=>{let s=new U(n),a=[0,nH(s)];r.push(t.get(a).next(n=>n?en.resolve():t.put({targetId:0,path:nH(s),sequenceNumber:e.highestListenSequenceNumber})))}).next(()=>en.waitFor(r))})}Qs(e,t){e.createObjectStore("collectionParents",{keyPath:n3});let n=t.store("collectionParents"),r=new rj,i=e=>{if(r.add(e)){let t=e.lastSegment(),r=e.popLast();return n.put({collectionId:t,parent:nH(r)})}};return t.store("remoteDocuments").Z({X:!0},(e,t)=>{let n=new U(e);return i(n.popLast())}).next(()=>t.store("documentMutations").Z({X:!0},([e,t,n],r)=>{let s=nY(t);return i(s.popLast())}))}js(e){let t=e.store("targets");return t.Z((e,n)=>{let r=rv(n),i=rI(this.yt,r);return t.put(i)})}Ws(e,t){let n=t.store("remoteDocuments"),r=[];return n.Z((e,n)=>{let i=t.store("remoteDocumentsV14"),s=(n.document?new G(U.fromString(n.document.name).popFirst(5)):n.noDocument?G.fromSegments(n.noDocument.path):n.unknownDocument?G.fromSegments(n.unknownDocument.path):b()).path.toArray(),a={prefixPath:s.slice(0,s.length-2),collectionGroup:s[s.length-2],documentId:s[s.length-1],readTime:n.readTime||[0,0],unknownDocument:n.unknownDocument,noDocument:n.noDocument,document:n.document,hasCommittedMutations:!!n.hasCommittedMutations};r.push(i.put(a))}).next(()=>en.waitFor(r))}zs(e,t){var n;let r=t.store("mutations"),i=(n=this.yt,new im(n)),s=new iA(iV.Bs,this.yt.ie);return r.W().next(e=>{let n=new Map;return e.forEach(e=>{var t;let r=null!==(t=n.get(e.userId))&&void 0!==t?t:nf();rw(this.yt,e).keys().forEach(e=>r=r.add(e)),n.set(e.userId,r)}),en.forEach(n,(e,n)=>{let r=new d(n),a=rN.re(this.yt,r),o=s.getIndexManager(r),u=r3.re(r,this.yt,o,s.referenceDelegate);return new iT(i,u,a,o).recalculateAndSaveOverlaysForDocumentKeys(new ro(t,em.at),e).next()})})}}function iF(e){e.createObjectStore("targetDocuments",{keyPath:n5}).createIndex("documentTargetsIndex",n4,{unique:!0}),e.createObjectStore("targets",{keyPath:"targetId"}).createIndex("queryTargetsIndex",n2,{unique:!0}),e.createObjectStore("targetGlobal")}let iL="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.";class iO{constructor(e,t,n,r,i,s,a,o,u,l,c=15){var h;if(this.allowTabSynchronization=e,this.persistenceKey=t,this.clientId=n,this.Hs=i,this.window=s,this.document=a,this.Js=u,this.Ys=l,this.Xs=c,this.Ss=null,this.Ds=!1,this.isPrimary=!1,this.networkEnabled=!0,this.Zs=null,this.inForeground=!1,this.ti=null,this.ei=null,this.ni=Number.NEGATIVE_INFINITY,this.si=e=>Promise.resolve(),!iO.C())throw new S(E.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new ic(this,r),this.ii=t+"main",this.yt=new rf(o),this.ri=new ei(this.ii,this.Xs,new iM(this.yt)),this.Cs=new it(this.referenceDelegate,this.yt),this.remoteDocumentCache=(h=this.yt,new im(h)),this.Ns=new rx,this.window&&this.window.localStorage?this.oi=this.window.localStorage:(this.oi=null,!1===l&&w("IndexedDbPersistence","LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.ui().then(()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new S(E.FAILED_PRECONDITION,iL);return this.ci(),this.ai(),this.hi(),this.runTransaction("getHighestListenSequenceNumber","readonly",e=>this.Cs.getHighestSequenceNumber(e))}).then(e=>{this.Ss=new em(e,this.Js)}).then(()=>{this.Ds=!0}).catch(e=>(this.ri&&this.ri.close(),Promise.reject(e)))}li(e){return this.si=async t=>{if(this.started)return e(t)},e(this.isPrimary)}setDatabaseDeletedListener(e){this.ri.L(async t=>{null===t.newVersion&&await e()})}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this.Hs.enqueueAndForget(async()=>{this.started&&await this.ui()}))}ui(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",e=>iP(e).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next(()=>{if(this.isPrimary)return this.fi(e).next(e=>{e||(this.isPrimary=!1,this.Hs.enqueueRetryable(()=>this.si(!1)))})}).next(()=>this.di(e)).next(t=>this.isPrimary&&!t?this._i(e).next(()=>!1):!!t&&this.wi(e).next(()=>!0))).catch(e=>{if(eo(e))return y("IndexedDbPersistence","Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return y("IndexedDbPersistence","Releasing owner lease after error during lease refresh",e),!1}).then(e=>{this.isPrimary!==e&&this.Hs.enqueueRetryable(()=>this.si(e)),this.isPrimary=e})}fi(e){return iq(e).get("owner").next(e=>en.resolve(this.mi(e)))}gi(e){return iP(e).delete(this.clientId)}async yi(){if(this.isPrimary&&!this.pi(this.ni,18e5)){this.ni=Date.now();let e=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",e=>{let t=ru(e,"clientMetadata");return t.W().next(e=>{let n=this.Ii(e,18e5),r=e.filter(e=>-1===n.indexOf(e));return en.forEach(r,e=>t.delete(e.clientId)).next(()=>r)})}).catch(()=>[]);if(this.oi)for(let t of e)this.oi.removeItem(this.Ti(t.clientId))}}hi(){this.ei=this.Hs.enqueueAfterDelay("client_metadata_refresh",4e3,()=>this.ui().then(()=>this.yi()).then(()=>this.hi()))}mi(e){return!!e&&e.ownerId===this.clientId}di(e){return this.Ys?en.resolve(!0):iq(e).get("owner").next(t=>{if(null!==t&&this.pi(t.leaseTimestampMs,5e3)&&!this.Ei(t.ownerId)){if(this.mi(t)&&this.networkEnabled)return!0;if(!this.mi(t)){if(!t.allowTabSynchronization)throw new S(E.FAILED_PRECONDITION,iL);return!1}}return!(!this.networkEnabled||!this.inForeground)||iP(e).W().next(e=>void 0===this.Ii(e,5e3).find(e=>{if(this.clientId!==e.clientId){let t=!this.networkEnabled&&e.networkEnabled,n=!this.inForeground&&e.inForeground,r=this.networkEnabled===e.networkEnabled;if(t||n&&r)return!0}return!1}))}).next(e=>(this.isPrimary!==e&&y("IndexedDbPersistence",`Client ${e?"is":"is not"} eligible for a primary lease.`),e))}async shutdown(){this.Ds=!1,this.Ai(),this.ei&&(this.ei.cancel(),this.ei=null),this.Ri(),this.bi(),await this.ri.runTransaction("shutdown","readwrite",["owner","clientMetadata"],e=>{let t=new ro(e,em.at);return this._i(t).next(()=>this.gi(t))}),this.ri.close(),this.Pi()}Ii(e,t){return e.filter(e=>this.pi(e.updateTimeMs,t)&&!this.Ei(e.clientId))}vi(){return this.runTransaction("getActiveClients","readonly",e=>iP(e).W().next(e=>this.Ii(e,18e5).map(e=>e.clientId)))}get started(){return this.Ds}getMutationQueue(e,t){return r3.re(e,this.yt,t,this.referenceDelegate)}getTargetCache(){return this.Cs}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(e){return new rH(e,this.yt.ie.databaseId)}getDocumentOverlayCache(e){return rN.re(this.yt,e)}getBundleCache(){return this.Ns}runTransaction(e,t,n){var r;let i;y("IndexedDbPersistence","Starting transaction:",e);let s=15===(r=this.Xs)?ra:14===r?rs:13===r?rs:12===r?ri:11===r?rr:void b();return this.ri.runTransaction(e,"readonly"===t?"readonly":"readwrite",s,r=>(i=new ro(r,this.Ss?this.Ss.next():em.at),"readwrite-primary"===t?this.fi(i).next(e=>!!e||this.di(i)).next(t=>{if(!t)throw w(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this.Hs.enqueueRetryable(()=>this.si(!1)),new S(E.FAILED_PRECONDITION,J);return n(i)}).next(e=>this.wi(i).next(()=>e)):this.Vi(i).next(()=>n(i)))).then(e=>(i.raiseOnCommittedEvent(),e))}Vi(e){return iq(e).get("owner").next(e=>{if(null!==e&&this.pi(e.leaseTimestampMs,5e3)&&!this.Ei(e.ownerId)&&!this.mi(e)&&!(this.Ys||this.allowTabSynchronization&&e.allowTabSynchronization))throw new S(E.FAILED_PRECONDITION,iL)})}wi(e){let t={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return iq(e).put("owner",t)}static C(){return ei.C()}_i(e){let t=iq(e);return t.get("owner").next(e=>this.mi(e)?(y("IndexedDbPersistence","Releasing primary lease."),t.delete("owner")):en.resolve())}pi(e,t){let n=Date.now();return!(e<n-t)&&(!(e>n)||(w(`Detected an update time that is in the future: ${e} > ${n}`),!1))}ci(){null!==this.document&&"function"==typeof this.document.addEventListener&&(this.ti=()=>{this.Hs.enqueueAndForget(()=>(this.inForeground="visible"===this.document.visibilityState,this.ui()))},this.document.addEventListener("visibilitychange",this.ti),this.inForeground="visible"===this.document.visibilityState)}Ri(){this.ti&&(this.document.removeEventListener("visibilitychange",this.ti),this.ti=null)}ai(){var e;"function"==typeof(null===(e=this.window)||void 0===e?void 0:e.addEventListener)&&(this.Zs=()=>{this.Ai(),(0,u.G6)()&&navigator.appVersion.match(/Version\/1[45]/)&&this.Hs.enterRestrictedMode(!0),this.Hs.enqueueAndForget(()=>this.shutdown())},this.window.addEventListener("pagehide",this.Zs))}bi(){this.Zs&&(this.window.removeEventListener("pagehide",this.Zs),this.Zs=null)}Ei(e){var t;try{let n=null!==(null===(t=this.oi)||void 0===t?void 0:t.getItem(this.Ti(e)));return y("IndexedDbPersistence",`Client '${e}' ${n?"is":"is not"} zombied in LocalStorage`),n}catch(e){return w("IndexedDbPersistence","Failed to get zombied client id.",e),!1}}Ai(){if(this.oi)try{this.oi.setItem(this.Ti(this.clientId),String(Date.now()))}catch(e){w("Failed to set zombie client id.",e)}}Pi(){if(this.oi)try{this.oi.removeItem(this.Ti(this.clientId))}catch(e){}}Ti(e){return`firestore_zombie_${this.persistenceKey}_${e}`}}function iq(e){return ru(e,"owner")}function iP(e){return ru(e,"clientMetadata")}function iU(e,t){let n=e.projectId;return e.isDefaultDatabase||(n+="."+e.database),"firestore/"+t+"/"+n+"/"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iB{constructor(e,t,n,r){this.targetId=e,this.fromCache=t,this.Si=n,this.Di=r}static Ci(e,t){let n=nf(),r=nf();for(let e of t.docChanges)switch(e.type){case 0:n=n.add(e.doc.key);break;case 1:r=r.add(e.doc.key)}return new iB(e,t.fromCache,n,r)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iK{constructor(){this.xi=!1}initialize(e,t){this.Ni=e,this.indexManager=t,this.xi=!0}getDocumentsMatchingQuery(e,t,n,r){return this.ki(e,t).next(i=>i||this.Oi(e,t,r,n)).next(n=>n||this.Mi(e,t))}ki(e,t){if(tS(t))return en.resolve(null);let n=tk(t);return this.indexManager.getIndexType(e,n).next(r=>0===r?null:(null!==t.limit&&1===r&&(n=tk(t=tA(t,null,"F"))),this.indexManager.getDocumentsMatchingTarget(e,n).next(r=>{let i=nf(...r);return this.Ni.getDocuments(e,i).next(r=>this.indexManager.getMinOffset(e,n).next(n=>{let s=this.Fi(t,r);return this.$i(t,s,i,n.readTime)?this.ki(e,tA(t,null,"F")):this.Bi(e,s,t,n)}))})))}Oi(e,t,n,r){return tS(t)||r.isEqual(q.min())?this.Mi(e,t):this.Ni.getDocuments(e,n).next(i=>{let s=this.Fi(t,i);return this.$i(t,s,n,r)?this.Mi(e,t):(g()<=o.in.DEBUG&&y("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),tM(t)),this.Bi(e,s,t,H(r,-1)))})}Fi(e,t){let n=new tu(tO(e));return t.forEach((t,r)=>{tF(e,r)&&(n=n.add(r))}),n}$i(e,t,n,r){if(null===e.limit)return!1;if(n.size!==t.size)return!0;let i="F"===e.limitType?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Mi(e,t){return g()<=o.in.DEBUG&&y("QueryEngine","Using full collection scan to execute query:",tM(t)),this.Ni.getDocumentsMatchingQuery(e,t,X.min())}Bi(e,t,n,r){return this.Ni.getDocumentsMatchingQuery(e,n,r).next(e=>(t.forEach(t=>{e=e.insert(t.key,t)}),e))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iG{constructor(e,t,n,r){this.persistence=e,this.Li=t,this.yt=r,this.qi=new ts(F),this.Ui=new ns(e=>tp(e),ty),this.Ki=new Map,this.Gi=e.getRemoteDocumentCache(),this.Cs=e.getTargetCache(),this.Ns=e.getBundleCache(),this.Qi(n)}Qi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new iT(this.Gi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Gi.setIndexManager(this.indexManager),this.Li.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.qi))}}async function i$(e,t){return await e.persistence.runTransaction("Handle user change","readonly",n=>{let r;return e.mutationQueue.getAllMutationBatches(n).next(i=>(r=i,e.Qi(t),e.mutationQueue.getAllMutationBatches(n))).next(t=>{let i=[],s=[],a=nf();for(let e of r)for(let t of(i.push(e.batchId),e.mutations))a=a.add(t.key);for(let e of t)for(let t of(s.push(e.batchId),e.mutations))a=a.add(t.key);return e.localDocuments.getDocuments(n,a).next(e=>({ji:e,removedBatchIds:i,addedBatchIds:s}))})})}function iQ(e){return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Cs.getLastRemoteSnapshotVersion(t))}function iz(e,t,n){let r=nf(),i=nf();return n.forEach(e=>r=r.add(e)),t.getEntries(e,r).next(e=>{let r=na;return n.forEach((n,s)=>{let a=e.get(n);s.isFoundDocument()!==a.isFoundDocument()&&(i=i.add(n)),s.isNoDocument()&&s.version.isEqual(q.min())?(t.removeEntry(n,s.readTime),r=r.insert(n,s)):!a.isValidDocument()||s.version.compareTo(a.version)>0||0===s.version.compareTo(a.version)&&a.hasPendingWrites?(t.addEntry(s),r=r.insert(n,s)):y("LocalStore","Ignoring outdated watch update for ",n,". Current version:",a.version," Watch version:",s.version)}),{Wi:r,zi:i}})}function ij(e,t){let n=e;return n.persistence.runTransaction("Allocate target","readwrite",e=>{let r;return n.Cs.getTargetData(e,t).next(i=>i?(r=i,en.resolve(r)):n.Cs.allocateTargetId(e).next(i=>(r=new rd(t,i,0,e.currentSequenceNumber),n.Cs.addTargetData(e,r).next(()=>r))))}).then(e=>{let r=n.qi.get(e.targetId);return(null===r||e.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.qi=n.qi.insert(e.targetId,e),n.Ui.set(t,e.targetId)),e})}async function iW(e,t,n){let r=e,i=r.qi.get(t);try{n||await r.persistence.runTransaction("Release target",n?"readwrite":"readwrite-primary",e=>r.persistence.referenceDelegate.removeTarget(e,i))}catch(e){if(!eo(e))throw e;y("LocalStore",`Failed to update sequence numbers for target ${t}: ${e}`)}r.qi=r.qi.remove(t),r.Ui.delete(i.target)}function iH(e,t,n){let r=q.min(),i=nf();return e.persistence.runTransaction("Execute query","readonly",s=>(function(e,t,n){let r=e.Ui.get(n);return void 0!==r?en.resolve(e.qi.get(r)):e.Cs.getTargetData(t,n)})(e,s,tk(t)).next(t=>{if(t)return r=t.lastLimboFreeSnapshotVersion,e.Cs.getMatchingKeysForTargetId(s,t.targetId).next(e=>{i=e})}).next(()=>e.Li.getDocumentsMatchingQuery(s,t,n?r:q.min(),n?i:nf())).next(n=>(iZ(e,tL(t),n),{documents:n,Hi:i})))}function iY(e,t){let n=e.Cs,r=e.qi.get(t);return r?Promise.resolve(r.target):e.persistence.runTransaction("Get target data","readonly",e=>n.ne(e,t).next(e=>e?e.target:null))}function iX(e,t){let n=e.Ki.get(t)||q.min();return e.persistence.runTransaction("Get new document changes","readonly",r=>e.Gi.getAllFromCollectionGroup(r,t,H(n,-1),Number.MAX_SAFE_INTEGER)).then(n=>(iZ(e,t,n),n))}function iZ(e,t,n){let r=e.Ki.get(t)||q.min();n.forEach((e,t)=>{t.readTime.compareTo(r)>0&&(r=t.readTime)}),e.Ki.set(t,r)}async function iJ(e,t,n,r){let i=nf(),s=na;for(let e of n){let n=t.Ji(e.metadata.name);e.document&&(i=i.add(n));let r=t.Yi(e);r.setReadTime(t.Xi(e.metadata.readTime)),s=s.insert(n,r)}let a=e.Gi.newChangeBuffer({trackRemovals:!0}),o=await ij(e,tk(tE(U.fromString(`__bundle__/docs/${r}`))));return e.persistence.runTransaction("Apply bundle documents","readwrite",t=>iz(t,a,s).next(e=>(a.apply(t),e)).next(n=>e.Cs.removeMatchingKeysForTargetId(t,o.targetId).next(()=>e.Cs.addMatchingKeys(t,i,o.targetId)).next(()=>e.localDocuments.getLocalViewOfDocuments(t,n.Wi,n.zi)).next(()=>n.Wi)))}async function i0(e,t,n=nf()){let r=await ij(e,tk(rb(t.bundledQuery))),i=e;return i.persistence.runTransaction("Save named query","readwrite",e=>{let s=nC(t.readTime);if(r.snapshotVersion.compareTo(s)>=0)return i.Ns.saveNamedQuery(e,t);let a=r.withResumeToken(eS.EMPTY_BYTE_STRING,s);return i.qi=i.qi.insert(a.targetId,a),i.Cs.updateTargetData(e,a).next(()=>i.Cs.removeMatchingKeysForTargetId(e,r.targetId)).next(()=>i.Cs.addMatchingKeys(e,n,r.targetId)).next(()=>i.Ns.saveNamedQuery(e,t))})}function i1(e,t){return`firestore_clients_${e}_${t}`}function i2(e,t,n){let r=`firestore_mutations_${e}_${n}`;return t.isAuthenticated()&&(r+=`_${t.uid}`),r}function i5(e,t){return`firestore_targets_${e}_${t}`}class i4{constructor(e,t,n,r){this.user=e,this.batchId=t,this.state=n,this.error=r}static Zi(e,t,n){let r=JSON.parse(n),i,s="object"==typeof r&&-1!==["pending","acknowledged","rejected"].indexOf(r.state)&&(void 0===r.error||"object"==typeof r.error);return s&&r.error&&(s="string"==typeof r.error.message&&"string"==typeof r.error.code)&&(i=new S(r.error.code,r.error.message)),s?new i4(e,t,r.state,i):(w("SharedClientState",`Failed to parse mutation state for ID '${t}': ${n}`),null)}tr(){let e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class i3{constructor(e,t,n){this.targetId=e,this.state=t,this.error=n}static Zi(e,t){let n=JSON.parse(t),r,i="object"==typeof n&&-1!==["not-current","current","rejected"].indexOf(n.state)&&(void 0===n.error||"object"==typeof n.error);return i&&n.error&&(i="string"==typeof n.error.message&&"string"==typeof n.error.code)&&(r=new S(n.error.code,n.error.message)),i?new i3(e,n.state,r):(w("SharedClientState",`Failed to parse target state for ID '${e}': ${t}`),null)}tr(){let e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class i8{constructor(e,t){this.clientId=e,this.activeTargetIds=t}static Zi(e,t){let n=JSON.parse(t),r="object"==typeof n&&n.activeTargetIds instanceof Array,i=nm;for(let e=0;r&&e<n.activeTargetIds.length;++e)r=eT(n.activeTargetIds[e]),i=i.add(n.activeTargetIds[e]);return r?new i8(e,i):(w("SharedClientState",`Failed to parse client data for instance '${e}': ${t}`),null)}}class i9{constructor(e,t){this.clientId=e,this.onlineState=t}static Zi(e){let t=JSON.parse(e);return"object"==typeof t&&-1!==["Unknown","Online","Offline"].indexOf(t.onlineState)&&"string"==typeof t.clientId?new i9(t.clientId,t.onlineState):(w("SharedClientState",`Failed to parse online state: ${e}`),null)}}class i6{constructor(){this.activeTargetIds=nm}er(e){this.activeTargetIds=this.activeTargetIds.add(e)}nr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}tr(){let e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class i7{constructor(e,t,n,r,i){this.window=e,this.Hs=t,this.persistenceKey=n,this.sr=r,this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null,this.ir=this.rr.bind(this),this.ur=new ts(F),this.started=!1,this.cr=[];let s=n.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");this.storage=this.window.localStorage,this.currentUser=i,this.ar=i1(this.persistenceKey,this.sr),this.hr=`firestore_sequence_number_${this.persistenceKey}`,this.ur=this.ur.insert(this.sr,new i6),this.lr=RegExp(`^firestore_clients_${s}_([^_]*)$`),this.dr=RegExp(`^firestore_mutations_${s}_(\\d+)(?:_(.*))?$`),this._r=RegExp(`^firestore_targets_${s}_(\\d+)$`),this.wr=`firestore_online_state_${this.persistenceKey}`,this.mr=`firestore_bundle_loaded_v2_${this.persistenceKey}`,this.window.addEventListener("storage",this.ir)}static C(e){return!(!e||!e.localStorage)}async start(){let e=await this.syncEngine.vi();for(let t of e){if(t===this.sr)continue;let e=this.getItem(i1(this.persistenceKey,t));if(e){let n=i8.Zi(t,e);n&&(this.ur=this.ur.insert(n.clientId,n))}}this.gr();let t=this.storage.getItem(this.wr);if(t){let e=this.yr(t);e&&this.pr(e)}for(let e of this.cr)this.rr(e);this.cr=[],this.window.addEventListener("pagehide",()=>this.shutdown()),this.started=!0}writeSequenceNumber(e){this.setItem(this.hr,JSON.stringify(e))}getAllActiveQueryTargets(){return this.Ir(this.ur)}isActiveQueryTarget(e){let t=!1;return this.ur.forEach((n,r)=>{r.activeTargetIds.has(e)&&(t=!0)}),t}addPendingMutation(e){this.Tr(e,"pending")}updateMutationState(e,t,n){this.Tr(e,t,n),this.Er(e)}addLocalQueryTarget(e){let t="not-current";if(this.isActiveQueryTarget(e)){let n=this.storage.getItem(i5(this.persistenceKey,e));if(n){let r=i3.Zi(e,n);r&&(t=r.state)}}return this.Ar.er(e),this.gr(),t}removeLocalQueryTarget(e){this.Ar.nr(e),this.gr()}isLocalQueryTarget(e){return this.Ar.activeTargetIds.has(e)}clearQueryState(e){this.removeItem(i5(this.persistenceKey,e))}updateQueryState(e,t,n){this.Rr(e,t,n)}handleUserChange(e,t,n){t.forEach(e=>{this.Er(e)}),this.currentUser=e,n.forEach(e=>{this.addPendingMutation(e)})}setOnlineState(e){this.br(e)}notifyBundleLoaded(e){this.Pr(e)}shutdown(){this.started&&(this.window.removeEventListener("storage",this.ir),this.removeItem(this.ar),this.started=!1)}getItem(e){let t=this.storage.getItem(e);return y("SharedClientState","READ",e,t),t}setItem(e,t){y("SharedClientState","SET",e,t),this.storage.setItem(e,t)}removeItem(e){y("SharedClientState","REMOVE",e),this.storage.removeItem(e)}rr(e){if(e.storageArea===this.storage){if(y("SharedClientState","EVENT",e.key,e.newValue),e.key===this.ar)return void w("Received WebStorage notification for local change. Another client might have garbage-collected our state");this.Hs.enqueueRetryable(async()=>{if(this.started){if(null!==e.key){if(this.lr.test(e.key)){if(null==e.newValue){let t=this.vr(e.key);return this.Vr(t,null)}{let t=this.Sr(e.key,e.newValue);if(t)return this.Vr(t.clientId,t)}}else if(this.dr.test(e.key)){if(null!==e.newValue){let t=this.Dr(e.key,e.newValue);if(t)return this.Cr(t)}}else if(this._r.test(e.key)){if(null!==e.newValue){let t=this.Nr(e.key,e.newValue);if(t)return this.kr(t)}}else if(e.key===this.wr){if(null!==e.newValue){let t=this.yr(e.newValue);if(t)return this.pr(t)}}else if(e.key===this.hr){let t=function(e){let t=em.at;if(null!=e)try{let n=JSON.parse(e);"number"==typeof n||b(),t=n}catch(e){w("SharedClientState","Failed to read sequence number from WebStorage",e)}return t}(e.newValue);t!==em.at&&this.sequenceNumberHandler(t)}else if(e.key===this.mr){let t=this.Or(e.newValue);await Promise.all(t.map(e=>this.syncEngine.Mr(e)))}}}else this.cr.push(e)})}}get Ar(){return this.ur.get(this.sr)}gr(){this.setItem(this.ar,this.Ar.tr())}Tr(e,t,n){let r=new i4(this.currentUser,e,t,n),i=i2(this.persistenceKey,this.currentUser,e);this.setItem(i,r.tr())}Er(e){let t=i2(this.persistenceKey,this.currentUser,e);this.removeItem(t)}br(e){let t={clientId:this.sr,onlineState:e};this.storage.setItem(this.wr,JSON.stringify(t))}Rr(e,t,n){let r=i5(this.persistenceKey,e),i=new i3(e,t,n);this.setItem(r,i.tr())}Pr(e){let t=JSON.stringify(Array.from(e));this.setItem(this.mr,t)}vr(e){let t=this.lr.exec(e);return t?t[1]:null}Sr(e,t){let n=this.vr(e);return i8.Zi(n,t)}Dr(e,t){let n=this.dr.exec(e),r=Number(n[1]),i=void 0!==n[2]?n[2]:null;return i4.Zi(new d(i),r,t)}Nr(e,t){let n=this._r.exec(e),r=Number(n[1]);return i3.Zi(r,t)}yr(e){return i9.Zi(e)}Or(e){return JSON.parse(e)}async Cr(e){if(e.user.uid===this.currentUser.uid)return this.syncEngine.Fr(e.batchId,e.state,e.error);y("SharedClientState",`Ignoring mutation for non-active user ${e.user.uid}`)}kr(e){return this.syncEngine.$r(e.targetId,e.state,e.error)}Vr(e,t){let n=t?this.ur.insert(e,t):this.ur.remove(e),r=this.Ir(this.ur),i=this.Ir(n),s=[],a=[];return i.forEach(e=>{r.has(e)||s.push(e)}),r.forEach(e=>{i.has(e)||a.push(e)}),this.syncEngine.Br(s,a).then(()=>{this.ur=n})}pr(e){this.ur.get(e.clientId)&&this.onlineStateHandler(e.onlineState)}Ir(e){let t=nm;return e.forEach((e,n)=>{t=t.unionWith(n.activeTargetIds)}),t}}class se{constructor(){this.Lr=new i6,this.qr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,n){}addLocalQueryTarget(e){return this.Lr.er(e),this.qr[e]||"not-current"}updateQueryState(e,t,n){this.qr[e]=t}removeLocalQueryTarget(e){this.Lr.nr(e)}isLocalQueryTarget(e){return this.Lr.activeTargetIds.has(e)}clearQueryState(e){delete this.qr[e]}getAllActiveQueryTargets(){return this.Lr.activeTargetIds}isActiveQueryTarget(e){return this.Lr.activeTargetIds.has(e)}start(){return this.Lr=new i6,Promise.resolve()}handleUserChange(e,t,n){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class st{Ur(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sn{constructor(){this.Kr=()=>this.Gr(),this.Qr=()=>this.jr(),this.Wr=[],this.zr()}Ur(e){this.Wr.push(e)}shutdown(){window.removeEventListener("online",this.Kr),window.removeEventListener("offline",this.Qr)}zr(){window.addEventListener("online",this.Kr),window.addEventListener("offline",this.Qr)}Gr(){for(let e of(y("ConnectivityMonitor","Network connectivity changed: AVAILABLE"),this.Wr))e(0)}jr(){for(let e of(y("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE"),this.Wr))e(1)}static C(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let sr={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class si{constructor(e){this.Hr=e.Hr,this.Jr=e.Jr}Yr(e){this.Xr=e}Zr(e){this.eo=e}onMessage(e){this.no=e}close(){this.Jr()}send(e){this.Hr(e)}so(){this.Xr()}io(e){this.eo(e)}ro(e){this.no(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ss extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;let t=e.ssl?"https":"http";this.oo=t+"://"+e.host,this.uo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get co(){return!1}ao(e,t,n,r,i){let s=this.ho(e,t);y("RestConnection","Sending: ",s,n);let a={};return this.lo(a,r,i),this.fo(e,s,a,n).then(e=>(y("RestConnection","Received: ",e),e),t=>{throw v("RestConnection",`${e} failed with error: `,t,"url: ",s,"request:",n),t})}_o(e,t,n,r,i,s){return this.ao(e,t,n,r,i)}lo(e,t,n){e["X-Goog-Api-Client"]="gl-js/ fire/"+f,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((t,n)=>e[n]=t),n&&n.headers.forEach((t,n)=>e[n]=t)}ho(e,t){let n=sr[e];return`${this.oo}/v1/${t}:${n}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}fo(e,t,n,r){return new Promise((i,s)=>{let a=new l.JJ;a.setWithCredentials(!0),a.listenOnce(l.tw.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case l.jK.NO_ERROR:let t=a.getResponseJson();y("Connection","XHR received:",JSON.stringify(t)),i(t);break;case l.jK.TIMEOUT:y("Connection",'RPC "'+e+'" timed out'),s(new S(E.DEADLINE_EXCEEDED,"Request time out"));break;case l.jK.HTTP_ERROR:let n=a.getStatus();if(y("Connection",'RPC "'+e+'" failed with status:',n,"response text:",a.getResponseText()),n>0){let e=a.getResponseJson();Array.isArray(e)&&(e=e[0]);let t=null==e?void 0:e.error;if(t&&t.status&&t.message){let e=function(e){let t=e.toLowerCase().replace(/_/g,"-");return Object.values(E).indexOf(t)>=0?t:E.UNKNOWN}(t.status);s(new S(e,t.message))}else s(new S(E.UNKNOWN,"Server responded with status "+a.getStatus()))}else s(new S(E.UNAVAILABLE,"Connection failed."));break;default:b()}}finally{y("Connection",'RPC "'+e+'" completed.')}});let o=JSON.stringify(r);a.send(t,"POST",o,n,15)})}wo(e,t,n){let i=[this.oo,"/","google.firestore.v1.Firestore","/",e,"/channel"],s=(0,l.UE)(),a=(0,l.FJ)(),o={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(o.xmlHttpFactory=new l.zI({})),this.lo(o.initMessageHeaders,t,n),o.encodeInitMessageHeaders=!0;let u=i.join("");y("Connection","Creating WebChannel: "+u,o);let c=s.createWebChannel(u,o),h=!1,d=!1,f=new si({Hr:e=>{d?y("Connection","Not sending because WebChannel is closed:",e):(h||(y("Connection","Opening WebChannel transport."),c.open(),h=!0),y("Connection","WebChannel sending:",e),c.send(e))},Jr:()=>c.close()}),m=(e,t,n)=>{e.listen(t,e=>{try{n(e)}catch(e){setTimeout(()=>{throw e},0)}})};return m(c,l.ii.EventType.OPEN,()=>{d||y("Connection","WebChannel transport opened.")}),m(c,l.ii.EventType.CLOSE,()=>{d||(d=!0,y("Connection","WebChannel transport closed"),f.io())}),m(c,l.ii.EventType.ERROR,e=>{d||(d=!0,v("Connection","WebChannel transport errored:",e),f.io(new S(E.UNAVAILABLE,"The operation could not be completed")))}),m(c,l.ii.EventType.MESSAGE,e=>{var t;if(!d){let n=e.data[0];n||b();let i=n.error||(null===(t=n[0])||void 0===t?void 0:t.error);if(i){y("Connection","WebChannel received error:",i);let e=i.status,t=function(e){let t=r[e];if(void 0!==t)return ni(t)}(e),n=i.message;void 0===t&&(t=E.INTERNAL,n="Unknown error status: "+e+" with message "+i.message),d=!0,f.io(new S(t,n)),c.close()}else y("Connection","WebChannel received:",n),f.ro(n)}}),m(a,l.ju.STAT_EVENT,e=>{e.stat===l.kN.PROXY?y("Connection","Detected buffering proxy"):e.stat===l.kN.NOPROXY&&y("Connection","Detected no buffering proxy")}),setTimeout(()=>{f.so()},0),f}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sa(){return"undefined"!=typeof window?window:null}function so(){return"undefined"!=typeof document?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function su(e){return new nD(e,!0)}class sl{constructor(e,t,n=1e3,r=1.5,i=6e4){this.Hs=e,this.timerId=t,this.mo=n,this.yo=r,this.po=i,this.Io=0,this.To=null,this.Eo=Date.now(),this.reset()}reset(){this.Io=0}Ao(){this.Io=this.po}Ro(e){this.cancel();let t=Math.floor(this.Io+this.bo()),n=Math.max(0,Date.now()-this.Eo),r=Math.max(0,t-n);r>0&&y("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.Io} ms, delay with jitter: ${t} ms, last attempt: ${n} ms ago)`),this.To=this.Hs.enqueueAfterDelay(this.timerId,r,()=>(this.Eo=Date.now(),e())),this.Io*=this.yo,this.Io<this.mo&&(this.Io=this.mo),this.Io>this.po&&(this.Io=this.po)}Po(){null!==this.To&&(this.To.skipDelay(),this.To=null)}cancel(){null!==this.To&&(this.To.cancel(),this.To=null)}bo(){return(Math.random()-.5)*this.Io}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sc{constructor(e,t,n,r,i,s,a,o){this.Hs=e,this.vo=n,this.Vo=r,this.connection=i,this.authCredentialsProvider=s,this.appCheckCredentialsProvider=a,this.listener=o,this.state=0,this.So=0,this.Do=null,this.Co=null,this.stream=null,this.xo=new sl(e,t)}No(){return 1===this.state||5===this.state||this.ko()}ko(){return 2===this.state||3===this.state}start(){4!==this.state?this.auth():this.Oo()}async stop(){this.No()&&await this.close(0)}Mo(){this.state=0,this.xo.reset()}Fo(){this.ko()&&null===this.Do&&(this.Do=this.Hs.enqueueAfterDelay(this.vo,6e4,()=>this.$o()))}Bo(e){this.Lo(),this.stream.send(e)}async $o(){if(this.ko())return this.close(0)}Lo(){this.Do&&(this.Do.cancel(),this.Do=null)}qo(){this.Co&&(this.Co.cancel(),this.Co=null)}async close(e,t){this.Lo(),this.qo(),this.xo.cancel(),this.So++,4!==e?this.xo.reset():t&&t.code===E.RESOURCE_EXHAUSTED?(w(t.toString()),w("Using maximum backoff delay to prevent overloading the backend."),this.xo.Ao()):t&&t.code===E.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.Uo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Zr(t)}Uo(){}auth(){this.state=1;let e=this.Ko(this.So),t=this.So;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([e,n])=>{this.So===t&&this.Go(e,n)},t=>{e(()=>{let e=new S(E.UNKNOWN,"Fetching auth token failed: "+t.message);return this.Qo(e)})})}Go(e,t){let n=this.Ko(this.So);this.stream=this.jo(e,t),this.stream.Yr(()=>{n(()=>(this.state=2,this.Co=this.Hs.enqueueAfterDelay(this.Vo,1e4,()=>(this.ko()&&(this.state=3),Promise.resolve())),this.listener.Yr()))}),this.stream.Zr(e=>{n(()=>this.Qo(e))}),this.stream.onMessage(e=>{n(()=>this.onMessage(e))})}Oo(){this.state=5,this.xo.Ro(async()=>{this.state=0,this.start()})}Qo(e){return y("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Ko(e){return t=>{this.Hs.enqueueAndForget(()=>this.So===e?t():(y("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class sh extends sc{constructor(e,t,n,r,i,s){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,n,r,s),this.yt=i}jo(e,t){return this.connection.wo("Listen",e,t)}onMessage(e){this.xo.reset();let t=function(e,t){let n;if("targetChange"in t){var r,i;t.targetChange;let s="NO_CHANGE"===(r=t.targetChange.targetChangeType||"NO_CHANGE")?0:"ADD"===r?1:"REMOVE"===r?2:"CURRENT"===r?3:"RESET"===r?4:b(),a=t.targetChange.targetIds||[],o=(i=t.targetChange.resumeToken,e.wt?(void 0===i||"string"==typeof i||b(),eS.fromBase64String(i||"")):(void 0===i||i instanceof Uint8Array||b(),eS.fromUint8Array(i||new Uint8Array))),u=t.targetChange.cause,l=u&&function(e){let t=void 0===e.code?E.UNKNOWN:ni(e.code);return new S(t,e.message||"")}(u);n=new nv(s,a,o,l||null)}else if("documentChange"in t){t.documentChange;let r=t.documentChange;r.document,r.document.name,r.document.updateTime;let i=nM(e,r.document.name),s=nC(r.document.updateTime),a=r.document.createTime?nC(r.document.createTime):q.min(),o=new td({mapValue:{fields:r.document.fields}}),u=tf.newFoundDocument(i,s,a,o),l=r.targetIds||[],c=r.removedTargetIds||[];n=new ny(l,c,u.key,u)}else if("documentDelete"in t){t.documentDelete;let r=t.documentDelete;r.document;let i=nM(e,r.document),s=r.readTime?nC(r.readTime):q.min(),a=tf.newNoDocument(i,s),o=r.removedTargetIds||[];n=new ny([],o,a.key,a)}else if("documentRemove"in t){t.documentRemove;let r=t.documentRemove;r.document;let i=nM(e,r.document),s=r.removedTargetIds||[];n=new ny([],s,i,null)}else{if(!("filter"in t))return b();{t.filter;let e=t.filter;e.targetId;let r=e.count||0,i=new nn(r),s=e.targetId;n=new nw(s,i)}}return n}(this.yt,e),n=function(e){if(!("targetChange"in e))return q.min();let t=e.targetChange;return t.targetIds&&t.targetIds.length?q.min():t.readTime?nC(t.readTime):q.min()}(e);return this.listener.Wo(t,n)}zo(e){let t={};t.database=nO(this.yt),t.addTarget=function(e,t){let n;let r=t.target;return(n=tw(r)?{documents:nG(e,r)}:{query:n$(e,r)}).targetId=t.targetId,t.resumeToken.approximateByteSize()>0?n.resumeToken=nk(e,t.resumeToken):t.snapshotVersion.compareTo(q.min())>0&&(n.readTime=nN(e,t.snapshotVersion.toTimestamp())),n}(this.yt,e);let n=function(e,t){let n=function(e,t){switch(t){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return b()}}(0,t.purpose);return null==n?null:{"goog-listen-tags":n}}(this.yt,e);n&&(t.labels=n),this.Bo(t)}Ho(e){let t={};t.database=nO(this.yt),t.removeTarget=e,this.Bo(t)}}class sd extends sc{constructor(e,t,n,r,i,s){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,n,r,s),this.yt=i,this.Jo=!1}get Yo(){return this.Jo}start(){this.Jo=!1,this.lastStreamToken=void 0,super.start()}Uo(){this.Jo&&this.Xo([])}jo(e,t){return this.connection.wo("Write",e,t)}onMessage(e){var t,n;if(e.streamToken||b(),this.lastStreamToken=e.streamToken,this.Jo){this.xo.reset();let r=(t=e.writeResults,n=e.commitTime,t&&t.length>0?(void 0!==n||b(),t.map(e=>{let t;return(t=e.updateTime?nC(e.updateTime):nC(n)).isEqual(q.min())&&(t=nC(n)),new tZ(t,e.transformResults||[])})):[]),i=nC(e.commitTime);return this.listener.Zo(i,r)}return e.writeResults&&0!==e.writeResults.length&&b(),this.Jo=!0,this.listener.tu()}eu(){let e={};e.database=nO(this.yt),this.Bo(e)}Xo(e){let t={streamToken:this.lastStreamToken,writes:e.map(e=>nB(this.yt,e))};this.Bo(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sf extends class{}{constructor(e,t,n,r){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=n,this.yt=r,this.nu=!1}su(){if(this.nu)throw new S(E.FAILED_PRECONDITION,"The client has already been terminated.")}ao(e,t,n){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,i])=>this.connection.ao(e,t,n,r,i)).catch(e=>{throw"FirebaseError"===e.name?(e.code===E.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new S(E.UNKNOWN,e.toString())})}_o(e,t,n,r){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.connection._o(e,t,n,i,s,r)).catch(e=>{throw"FirebaseError"===e.name?(e.code===E.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new S(E.UNKNOWN,e.toString())})}terminate(){this.nu=!0}}class sm{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.iu=0,this.ru=null,this.ou=!0}uu(){0===this.iu&&(this.cu("Unknown"),this.ru=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.ru=null,this.au("Backend didn't respond within 10 seconds."),this.cu("Offline"),Promise.resolve())))}hu(e){"Online"===this.state?this.cu("Unknown"):(this.iu++,this.iu>=1&&(this.lu(),this.au(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.cu("Offline")))}set(e){this.lu(),this.iu=0,"Online"===e&&(this.ou=!1),this.cu(e)}cu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}au(e){let t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ou?(w(t),this.ou=!1):y("OnlineStateTracker",t)}lu(){null!==this.ru&&(this.ru.cancel(),this.ru=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sg{constructor(e,t,n,r,i){this.localStore=e,this.datastore=t,this.asyncQueue=n,this.remoteSyncer={},this.fu=[],this.du=new Map,this._u=new Set,this.wu=[],this.mu=i,this.mu.Ur(e=>{n.enqueueAndForget(async()=>{sS(this)&&(y("RemoteStore","Restarting streams for network reachability change."),await async function(e){e._u.add(4),await sy(e),e.gu.set("Unknown"),e._u.delete(4),await sp(e)}(this))})}),this.gu=new sm(n,r)}}async function sp(e){if(sS(e))for(let t of e.wu)await t(!0)}async function sy(e){for(let t of e.wu)await t(!1)}function sw(e,t){e.du.has(t.targetId)||(e.du.set(t.targetId,t),sE(e)?sT(e):sP(e).ko()&&sI(e,t))}function sv(e,t){let n=sP(e);e.du.delete(t),n.ko()&&sb(e,t),0===e.du.size&&(n.ko()?n.Fo():sS(e)&&e.gu.set("Unknown"))}function sI(e,t){e.yu.Ot(t.targetId),sP(e).zo(t)}function sb(e,t){e.yu.Ot(t),sP(e).Ho(t)}function sT(e){e.yu=new nb({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),ne:t=>e.du.get(t)||null}),sP(e).start(),e.gu.uu()}function sE(e){return sS(e)&&!sP(e).No()&&e.du.size>0}function sS(e){return 0===e._u.size}async function sx(e){e.du.forEach((t,n)=>{sI(e,t)})}async function s_(e,t){e.yu=void 0,sE(e)?(e.gu.hu(t),sT(e)):e.gu.set("Unknown")}async function sD(e,t,n){if(e.gu.set("Online"),t instanceof nv&&2===t.state&&t.cause)try{await async function(e,t){let n=t.cause;for(let r of t.targetIds)e.du.has(r)&&(await e.remoteSyncer.rejectListen(r,n),e.du.delete(r),e.yu.removeTarget(r))}(e,t)}catch(n){y("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),n),await sN(e,n)}else if(t instanceof ny?e.yu.Kt(t):t instanceof nw?e.yu.Jt(t):e.yu.jt(t),!n.isEqual(q.min()))try{let t=await iQ(e.localStore);n.compareTo(t)>=0&&await function(e,t){let n=e.yu.Zt(t);return n.targetChanges.forEach((n,r)=>{if(n.resumeToken.approximateByteSize()>0){let i=e.du.get(r);i&&e.du.set(r,i.withResumeToken(n.resumeToken,t))}}),n.targetMismatches.forEach(t=>{let n=e.du.get(t);if(!n)return;e.du.set(t,n.withResumeToken(eS.EMPTY_BYTE_STRING,n.snapshotVersion)),sb(e,t);let r=new rd(n.target,t,1,n.sequenceNumber);sI(e,r)}),e.remoteSyncer.applyRemoteEvent(n)}(e,n)}catch(t){y("RemoteStore","Failed to raise snapshot:",t),await sN(e,t)}}async function sN(e,t,n){if(!eo(t))throw t;e._u.add(1),await sy(e),e.gu.set("Offline"),n||(n=()=>iQ(e.localStore)),e.asyncQueue.enqueueRetryable(async()=>{y("RemoteStore","Retrying IndexedDB access"),await n(),e._u.delete(1),await sp(e)})}function sk(e,t){return t().catch(n=>sN(e,n,t))}async function sC(e){let t=sU(e),n=e.fu.length>0?e.fu[e.fu.length-1].batchId:-1;for(;sS(e)&&e.fu.length<10;)try{let r=await function(e,t){return e.persistence.runTransaction("Get next mutation batch","readonly",n=>(void 0===t&&(t=-1),e.mutationQueue.getNextMutationBatchAfterBatchId(n,t)))}(e.localStore,n);if(null===r){0===e.fu.length&&t.Fo();break}n=r.batchId,function(e,t){e.fu.push(t);let n=sU(e);n.ko()&&n.Yo&&n.Xo(t.mutations)}(e,r)}catch(t){await sN(e,t)}sA(e)&&sR(e)}function sA(e){return sS(e)&&!sU(e).No()&&e.fu.length>0}function sR(e){sU(e).start()}async function sV(e){sU(e).eu()}async function sM(e){let t=sU(e);for(let n of e.fu)t.Xo(n.mutations)}async function sF(e,t,n){let r=e.fu.shift(),i=rc.from(r,t,n);await sk(e,()=>e.remoteSyncer.applySuccessfulWrite(i)),await sC(e)}async function sL(e,t){t&&sU(e).Yo&&await async function(e,t){var n;if(nr(n=t.code)&&n!==E.ABORTED){let n=e.fu.shift();sU(e).Mo(),await sk(e,()=>e.remoteSyncer.rejectFailedWrite(n.batchId,t)),await sC(e)}}(e,t),sA(e)&&sR(e)}async function sO(e,t){e.asyncQueue.verifyOperationInProgress(),y("RemoteStore","RemoteStore received new credentials");let n=sS(e);e._u.add(3),await sy(e),n&&e.gu.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e._u.delete(3),await sp(e)}async function sq(e,t){t?(e._u.delete(2),await sp(e)):t||(e._u.add(2),await sy(e),e.gu.set("Unknown"))}function sP(e){var t,n,r;return e.pu||(e.pu=(t=e.datastore,n=e.asyncQueue,r={Yr:sx.bind(null,e),Zr:s_.bind(null,e),Wo:sD.bind(null,e)},t.su(),new sh(n,t.connection,t.authCredentials,t.appCheckCredentials,t.yt,r)),e.wu.push(async t=>{t?(e.pu.Mo(),sE(e)?sT(e):e.gu.set("Unknown")):(await e.pu.stop(),e.yu=void 0)})),e.pu}function sU(e){var t,n,r;return e.Iu||(e.Iu=(t=e.datastore,n=e.asyncQueue,r={Yr:sV.bind(null,e),Zr:sL.bind(null,e),tu:sM.bind(null,e),Zo:sF.bind(null,e)},t.su(),new sd(n,t.connection,t.authCredentials,t.appCheckCredentials,t.yt,r)),e.wu.push(async t=>{t?(e.Iu.Mo(),await sC(e)):(await e.Iu.stop(),e.fu.length>0&&(y("RemoteStore",`Stopping write stream with ${e.fu.length} pending writes`),e.fu=[]))})),e.Iu}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sB{constructor(e,t,n,r,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=n,this.op=r,this.removalCallback=i,this.deferred=new x,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(e=>{})}static createAndSchedule(e,t,n,r,i){let s=Date.now()+n,a=new sB(e,t,s,r,i);return a.start(n),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new S(E.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function sK(e,t){if(w("AsyncQueue",`${t}: ${e}`),eo(e))return new S(E.UNAVAILABLE,`${t}: ${e}`);throw e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sG{constructor(e){this.comparator=e?(t,n)=>e(t,n)||G.comparator(t.key,n.key):(e,t)=>G.comparator(e.key,t.key),this.keyedMap=nu(),this.sortedSet=new ts(this.comparator)}static emptySet(e){return new sG(e.comparator)}has(e){return null!=this.keyedMap.get(e)}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){let t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,n)=>(e(t),!1))}add(e){let t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){let t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof sG)||this.size!==e.size)return!1;let t=this.sortedSet.getIterator(),n=e.sortedSet.getIterator();for(;t.hasNext();){let e=t.getNext().key,r=n.getNext().key;if(!e.isEqual(r))return!1}return!0}toString(){let e=[];return this.forEach(t=>{e.push(t.toString())}),0===e.length?"DocumentSet ()":"DocumentSet (\n  "+e.join("  \n")+"\n)"}copy(e,t){let n=new sG;return n.comparator=this.comparator,n.keyedMap=e,n.sortedSet=t,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s${constructor(){this.Tu=new ts(G.comparator)}track(e){let t=e.doc.key,n=this.Tu.get(t);n?0!==e.type&&3===n.type?this.Tu=this.Tu.insert(t,e):3===e.type&&1!==n.type?this.Tu=this.Tu.insert(t,{type:n.type,doc:e.doc}):2===e.type&&2===n.type?this.Tu=this.Tu.insert(t,{type:2,doc:e.doc}):2===e.type&&0===n.type?this.Tu=this.Tu.insert(t,{type:0,doc:e.doc}):1===e.type&&0===n.type?this.Tu=this.Tu.remove(t):1===e.type&&2===n.type?this.Tu=this.Tu.insert(t,{type:1,doc:n.doc}):0===e.type&&1===n.type?this.Tu=this.Tu.insert(t,{type:2,doc:e.doc}):b():this.Tu=this.Tu.insert(t,e)}Eu(){let e=[];return this.Tu.inorderTraversal((t,n)=>{e.push(n)}),e}}class sQ{constructor(e,t,n,r,i,s,a,o,u){this.query=e,this.docs=t,this.oldDocs=n,this.docChanges=r,this.mutatedKeys=i,this.fromCache=s,this.syncStateChanged=a,this.excludesMetadataChanges=o,this.hasCachedResults=u}static fromInitialDocuments(e,t,n,r,i){let s=[];return t.forEach(e=>{s.push({type:0,doc:e})}),new sQ(e,t,sG.emptySet(t),s,n,r,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&tR(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;let t=this.docChanges,n=e.docChanges;if(t.length!==n.length)return!1;for(let e=0;e<t.length;e++)if(t[e].type!==n[e].type||!t[e].doc.isEqual(n[e].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sz{constructor(){this.Au=void 0,this.listeners=[]}}class sj{constructor(){this.queries=new ns(e=>tV(e),tR),this.onlineState="Unknown",this.Ru=new Set}}async function sW(e,t){let n=t.query,r=!1,i=e.queries.get(n);if(i||(r=!0,i=new sz),r)try{i.Au=await e.onListen(n)}catch(n){let e=sK(n,`Initialization of query '${tM(t.query)}' failed`);return void t.onError(e)}e.queries.set(n,i),i.listeners.push(t),t.bu(e.onlineState),i.Au&&t.Pu(i.Au)&&sZ(e)}async function sH(e,t){let n=t.query,r=!1,i=e.queries.get(n);if(i){let e=i.listeners.indexOf(t);e>=0&&(i.listeners.splice(e,1),r=0===i.listeners.length)}if(r)return e.queries.delete(n),e.onUnlisten(n)}function sY(e,t){let n=!1;for(let r of t){let t=r.query,i=e.queries.get(t);if(i){for(let e of i.listeners)e.Pu(r)&&(n=!0);i.Au=r}}n&&sZ(e)}function sX(e,t,n){let r=e.queries.get(t);if(r)for(let e of r.listeners)e.onError(n);e.queries.delete(t)}function sZ(e){e.Ru.forEach(e=>{e.next()})}class sJ{constructor(e,t,n){this.query=e,this.vu=t,this.Vu=!1,this.Su=null,this.onlineState="Unknown",this.options=n||{}}Pu(e){if(!this.options.includeMetadataChanges){let t=[];for(let n of e.docChanges)3!==n.type&&t.push(n);e=new sQ(e.query,e.docs,e.oldDocs,t,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Vu?this.Du(e)&&(this.vu.next(e),t=!0):this.Cu(e,this.onlineState)&&(this.xu(e),t=!0),this.Su=e,t}onError(e){this.vu.error(e)}bu(e){this.onlineState=e;let t=!1;return this.Su&&!this.Vu&&this.Cu(this.Su,e)&&(this.xu(this.Su),t=!0),t}Cu(e,t){return!e.fromCache||(!this.options.Nu||!("Offline"!==t))&&(!e.docs.isEmpty()||e.hasCachedResults||"Offline"===t)}Du(e){if(e.docChanges.length>0)return!0;let t=this.Su&&this.Su.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&!0===this.options.includeMetadataChanges}xu(e){e=sQ.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Vu=!0,this.vu.next(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s0{constructor(e,t){this.ku=e,this.byteLength=t}Ou(){return"metadata"in this.ku}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s1{constructor(e){this.yt=e}Ji(e){return nM(this.yt,e)}Yi(e){return e.metadata.exists?nU(this.yt,e.document,!1):tf.newNoDocument(this.Ji(e.metadata.name),this.Xi(e.metadata.readTime))}Xi(e){return nC(e)}}class s2{constructor(e,t,n){this.Mu=e,this.localStore=t,this.yt=n,this.queries=[],this.documents=[],this.collectionGroups=new Set,this.progress=s5(e)}Fu(e){this.progress.bytesLoaded+=e.byteLength;let t=this.progress.documentsLoaded;if(e.ku.namedQuery)this.queries.push(e.ku.namedQuery);else if(e.ku.documentMetadata){this.documents.push({metadata:e.ku.documentMetadata}),e.ku.documentMetadata.exists||++t;let n=U.fromString(e.ku.documentMetadata.name);this.collectionGroups.add(n.get(n.length-2))}else e.ku.document&&(this.documents[this.documents.length-1].document=e.ku.document,++t);return t!==this.progress.documentsLoaded?(this.progress.documentsLoaded=t,Object.assign({},this.progress)):null}$u(e){let t=new Map,n=new s1(this.yt);for(let r of e)if(r.metadata.queries){let e=n.Ji(r.metadata.name);for(let n of r.metadata.queries){let r=(t.get(n)||nf()).add(e);t.set(n,r)}}return t}async complete(){let e=await iJ(this.localStore,new s1(this.yt),this.documents,this.Mu.id),t=this.$u(this.documents);for(let e of this.queries)await i0(this.localStore,e,t.get(e.name));return this.progress.taskState="Success",{progress:this.progress,Bu:this.collectionGroups,Lu:e}}}function s5(e){return{taskState:"Running",documentsLoaded:0,bytesLoaded:0,totalDocuments:e.totalDocuments,totalBytes:e.totalBytes}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s4{constructor(e){this.key=e}}class s3{constructor(e){this.key=e}}class s8{constructor(e,t){this.query=e,this.qu=t,this.Uu=null,this.hasCachedResults=!1,this.current=!1,this.Ku=nf(),this.mutatedKeys=nf(),this.Gu=tO(e),this.Qu=new sG(this.Gu)}get ju(){return this.qu}Wu(e,t){let n=t?t.zu:new s$,r=t?t.Qu:this.Qu,i=t?t.mutatedKeys:this.mutatedKeys,s=r,a=!1,o="F"===this.query.limitType&&r.size===this.query.limit?r.last():null,u="L"===this.query.limitType&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal((e,t)=>{let l=r.get(e),c=tF(this.query,t)?t:null,h=!!l&&this.mutatedKeys.has(l.key),d=!!c&&(c.hasLocalMutations||this.mutatedKeys.has(c.key)&&c.hasCommittedMutations),f=!1;l&&c?l.data.isEqual(c.data)?h!==d&&(n.track({type:3,doc:c}),f=!0):this.Hu(l,c)||(n.track({type:2,doc:c}),f=!0,(o&&this.Gu(c,o)>0||u&&0>this.Gu(c,u))&&(a=!0)):!l&&c?(n.track({type:0,doc:c}),f=!0):l&&!c&&(n.track({type:1,doc:l}),f=!0,(o||u)&&(a=!0)),f&&(c?(s=s.add(c),i=d?i.add(e):i.delete(e)):(s=s.delete(e),i=i.delete(e)))}),null!==this.query.limit)for(;s.size>this.query.limit;){let e="F"===this.query.limitType?s.last():s.first();s=s.delete(e.key),i=i.delete(e.key),n.track({type:1,doc:e})}return{Qu:s,zu:n,$i:a,mutatedKeys:i}}Hu(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,n){let r=this.Qu;this.Qu=e.Qu,this.mutatedKeys=e.mutatedKeys;let i=e.zu.Eu();i.sort((e,t)=>(function(e,t){let n=e=>{switch(e){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return b()}};return n(e)-n(t)})(e.type,t.type)||this.Gu(e.doc,t.doc)),this.Ju(n);let s=t?this.Yu():[],a=0===this.Ku.size&&this.current?1:0,o=a!==this.Uu;return(this.Uu=a,0!==i.length||o)?{snapshot:new sQ(this.query,e.Qu,r,i,e.mutatedKeys,0===a,o,!1,!!n&&n.resumeToken.approximateByteSize()>0),Xu:s}:{Xu:s}}bu(e){return this.current&&"Offline"===e?(this.current=!1,this.applyChanges({Qu:this.Qu,zu:new s$,mutatedKeys:this.mutatedKeys,$i:!1},!1)):{Xu:[]}}Zu(e){return!this.qu.has(e)&&!!this.Qu.has(e)&&!this.Qu.get(e).hasLocalMutations}Ju(e){e&&(e.addedDocuments.forEach(e=>this.qu=this.qu.add(e)),e.modifiedDocuments.forEach(e=>{}),e.removedDocuments.forEach(e=>this.qu=this.qu.delete(e)),this.current=e.current)}Yu(){if(!this.current)return[];let e=this.Ku;this.Ku=nf(),this.Qu.forEach(e=>{this.Zu(e.key)&&(this.Ku=this.Ku.add(e.key))});let t=[];return e.forEach(e=>{this.Ku.has(e)||t.push(new s3(e))}),this.Ku.forEach(n=>{e.has(n)||t.push(new s4(n))}),t}tc(e){this.qu=e.Hi,this.Ku=nf();let t=this.Wu(e.documents);return this.applyChanges(t,!0)}ec(){return sQ.fromInitialDocuments(this.query,this.Qu,this.mutatedKeys,0===this.Uu,this.hasCachedResults)}}class s9{constructor(e,t,n){this.query=e,this.targetId=t,this.view=n}}class s6{constructor(e){this.key=e,this.nc=!1}}class s7{constructor(e,t,n,r,i,s){this.localStore=e,this.remoteStore=t,this.eventManager=n,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=s,this.sc={},this.ic=new ns(e=>tV(e),tR),this.rc=new Map,this.oc=new Set,this.uc=new ts(G.comparator),this.cc=new Map,this.ac=new ix,this.hc={},this.lc=new Map,this.fc=ie.vn(),this.onlineState="Unknown",this.dc=void 0}get isPrimaryClient(){return!0===this.dc}}async function ae(e,t){let n,r;let i=aN(e),s=i.ic.get(t);if(s)n=s.targetId,i.sharedClientState.addLocalQueryTarget(n),r=s.view.ec();else{let e=await ij(i.localStore,tk(t));i.isPrimaryClient&&sw(i.remoteStore,e);let s=i.sharedClientState.addLocalQueryTarget(e.targetId);n=e.targetId,r=await at(i,t,n,"current"===s,e.resumeToken)}return r}async function at(e,t,n,r,i){e._c=(t,n,r)=>(async function(e,t,n,r){let i=t.view.Wu(n);i.$i&&(i=await iH(e.localStore,t.query,!1).then(({documents:e})=>t.view.Wu(e,i)));let s=r&&r.targetChanges.get(t.targetId),a=t.view.applyChanges(i,e.isPrimaryClient,s);return am(e,t.targetId,a.Xu),a.snapshot})(e,t,n,r);let s=await iH(e.localStore,t,!0),a=new s8(t,s.Hi),o=a.Wu(s.documents),u=np.createSynthesizedTargetChangeForCurrentChange(n,r&&"Offline"!==e.onlineState,i),l=a.applyChanges(o,e.isPrimaryClient,u);am(e,n,l.Xu);let c=new s9(t,n,a);return e.ic.set(t,c),e.rc.has(n)?e.rc.get(n).push(t):e.rc.set(n,[t]),l.snapshot}async function an(e,t){let n=e.ic.get(t),r=e.rc.get(n.targetId);if(r.length>1)return e.rc.set(n.targetId,r.filter(e=>!tR(e,t))),void e.ic.delete(t);e.isPrimaryClient?(e.sharedClientState.removeLocalQueryTarget(n.targetId),e.sharedClientState.isActiveQueryTarget(n.targetId)||await iW(e.localStore,n.targetId,!1).then(()=>{e.sharedClientState.clearQueryState(n.targetId),sv(e.remoteStore,n.targetId),ad(e,n.targetId)}).catch(et)):(ad(e,n.targetId),await iW(e.localStore,n.targetId,!0))}async function ar(e,t,n){let r=ak(e);try{var i,s;let e;let a=await function(e,t){let n,r;let i=O.now(),s=t.reduce((e,t)=>e.add(t.key),nf());return e.persistence.runTransaction("Locally write mutations","readwrite",a=>{let o=na,u=nf();return e.Gi.getEntries(a,s).next(e=>{(o=e).forEach((e,t)=>{t.isValidDocument()||(u=u.add(e))})}).next(()=>e.localDocuments.getOverlayedDocuments(a,o)).next(r=>{n=r;let s=[];for(let e of t){let t=function(e,t){let n=null;for(let r of e.fieldTransforms){let e=t.data.field(r.field),i=tK(r.transform,e||null);null!=i&&(null===n&&(n=td.empty()),n.set(r.field,i))}return n||null}(e,n.get(e.key).overlayedDocument);null!=t&&s.push(new t8(e.key,t,function e(t){let n=[];return ew(t.fields,(t,r)=>{let i=new K([t]);if(e$(r)){let t=e(r.mapValue).fields;if(0===t.length)n.push(i);else for(let e of t)n.push(i.child(e))}else n.push(i)}),new th(n)}(t.value.mapValue),tJ.exists(!0)))}return e.mutationQueue.addMutationBatch(a,i,s,t)}).next(t=>{r=t;let i=t.applyToLocalDocumentSet(n,u);return e.documentOverlayCache.saveOverlays(a,t.batchId,i)})}).then(()=>({batchId:r.batchId,changes:nl(n)}))}(r.localStore,t);r.sharedClientState.addPendingMutation(a.batchId),i=r,s=a.batchId,(e=i.hc[i.currentUser.toKey()])||(e=new ts(F)),e=e.insert(s,n),i.hc[i.currentUser.toKey()]=e,await ap(r,a.changes),await sC(r.remoteStore)}catch(t){let e=sK(t,"Failed to persist write");n.reject(e)}}async function ai(e,t){try{let n=await function(e,t){let n=e,r=t.snapshotVersion,i=n.qi;return n.persistence.runTransaction("Apply remote event","readwrite-primary",e=>{let s=n.Gi.newChangeBuffer({trackRemovals:!0});i=n.qi;let a=[];t.targetChanges.forEach((s,o)=>{var u;let l=i.get(o);if(!l)return;a.push(n.Cs.removeMatchingKeys(e,s.removedDocuments,o).next(()=>n.Cs.addMatchingKeys(e,s.addedDocuments,o)));let c=l.withSequenceNumber(e.currentSequenceNumber);t.targetMismatches.has(o)?c=c.withResumeToken(eS.EMPTY_BYTE_STRING,q.min()).withLastLimboFreeSnapshotVersion(q.min()):s.resumeToken.approximateByteSize()>0&&(c=c.withResumeToken(s.resumeToken,r)),i=i.insert(o,c),u=c,(0===l.resumeToken.approximateByteSize()||u.snapshotVersion.toMicroseconds()-l.snapshotVersion.toMicroseconds()>=3e8||s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size>0)&&a.push(n.Cs.updateTargetData(e,c))});let o=na,u=nf();if(t.documentUpdates.forEach(r=>{t.resolvedLimboDocuments.has(r)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(e,r))}),a.push(iz(e,s,t.documentUpdates).next(e=>{o=e.Wi,u=e.zi})),!r.isEqual(q.min())){let t=n.Cs.getLastRemoteSnapshotVersion(e).next(t=>n.Cs.setTargetsMetadata(e,e.currentSequenceNumber,r));a.push(t)}return en.waitFor(a).next(()=>s.apply(e)).next(()=>n.localDocuments.getLocalViewOfDocuments(e,o,u)).next(()=>o)}).then(e=>(n.qi=i,e))}(e.localStore,t);t.targetChanges.forEach((t,n)=>{let r=e.cc.get(n);r&&(t.addedDocuments.size+t.modifiedDocuments.size+t.removedDocuments.size<=1||b(),t.addedDocuments.size>0?r.nc=!0:t.modifiedDocuments.size>0?r.nc||b():t.removedDocuments.size>0&&(r.nc||b(),r.nc=!1))}),await ap(e,n,t)}catch(e){await et(e)}}function as(e,t,n){let r=e;if(r.isPrimaryClient&&0===n||!r.isPrimaryClient&&1===n){let e=[];r.ic.forEach((n,r)=>{let i=r.view.bu(t);i.snapshot&&e.push(i.snapshot)}),function(e,t){let n=e;n.onlineState=t;let r=!1;n.queries.forEach((e,n)=>{for(let e of n.listeners)e.bu(t)&&(r=!0)}),r&&sZ(n)}(r.eventManager,t),e.length&&r.sc.Wo(e),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function aa(e,t,n){let r=e;r.sharedClientState.updateQueryState(t,"rejected",n);let i=r.cc.get(t),s=i&&i.key;if(s){let e=new ts(G.comparator);e=e.insert(s,tf.newNoDocument(s,q.min()));let n=nf().add(s),i=new ng(q.min(),new Map,new tu(F),e,n);await ai(r,i),r.uc=r.uc.remove(s),r.cc.delete(t),ag(r)}else await iW(r.localStore,t,!1).then(()=>ad(r,t,n)).catch(et)}async function ao(e,t){var n;let r=t.batch.batchId;try{let i=await (n=e.localStore).persistence.runTransaction("Acknowledge batch","readwrite-primary",e=>{let r=t.batch.keys(),i=n.Gi.newChangeBuffer({trackRemovals:!0});return(function(e,t,n,r){let i=n.batch,s=i.keys(),a=en.resolve();return s.forEach(e=>{a=a.next(()=>r.getEntry(t,e)).next(t=>{let s=n.docVersions.get(e);null!==s||b(),0>t.version.compareTo(s)&&(i.applyToRemoteDocument(t,n),t.isValidDocument()&&(t.setReadTime(n.commitVersion),r.addEntry(t)))})}),a.next(()=>e.mutationQueue.removeMutationBatch(t,i))})(n,e,t,i).next(()=>i.apply(e)).next(()=>n.mutationQueue.performConsistencyCheck(e)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(e,r,t.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,function(e){let t=nf();for(let n=0;n<e.mutationResults.length;++n)e.mutationResults[n].transformResults.length>0&&(t=t.add(e.batch.mutations[n].key));return t}(t))).next(()=>n.localDocuments.getDocuments(e,r))});ah(e,r,null),ac(e,r),e.sharedClientState.updateMutationState(r,"acknowledged"),await ap(e,i)}catch(e){await et(e)}}async function au(e,t,n){var r;try{let i=await (r=e.localStore).persistence.runTransaction("Reject batch","readwrite-primary",e=>{let n;return r.mutationQueue.lookupMutationBatch(e,t).next(t=>(null!==t||b(),n=t.keys(),r.mutationQueue.removeMutationBatch(e,t))).next(()=>r.mutationQueue.performConsistencyCheck(e)).next(()=>r.documentOverlayCache.removeOverlaysForBatchId(e,n,t)).next(()=>r.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,n)).next(()=>r.localDocuments.getDocuments(e,n))});ah(e,t,n),ac(e,t),e.sharedClientState.updateMutationState(t,"rejected",n),await ap(e,i)}catch(e){await et(e)}}async function al(e,t){var n;sS(e.remoteStore)||y("SyncEngine","The network is disabled. The task returned by 'awaitPendingWrites()' will not complete until the network is enabled.");try{let r=await (n=e.localStore).persistence.runTransaction("Get highest unacknowledged batch id","readonly",e=>n.mutationQueue.getHighestUnacknowledgedBatchId(e));if(-1===r)return void t.resolve();let i=e.lc.get(r)||[];i.push(t),e.lc.set(r,i)}catch(n){let e=sK(n,"Initialization of waitForPendingWrites() operation failed");t.reject(e)}}function ac(e,t){(e.lc.get(t)||[]).forEach(e=>{e.resolve()}),e.lc.delete(t)}function ah(e,t,n){let r=e,i=r.hc[r.currentUser.toKey()];if(i){let e=i.get(t);e&&(n?e.reject(n):e.resolve(),i=i.remove(t)),r.hc[r.currentUser.toKey()]=i}}function ad(e,t,n=null){for(let r of(e.sharedClientState.removeLocalQueryTarget(t),e.rc.get(t)))e.ic.delete(r),n&&e.sc.wc(r,n);e.rc.delete(t),e.isPrimaryClient&&e.ac.ls(t).forEach(t=>{e.ac.containsKey(t)||af(e,t)})}function af(e,t){e.oc.delete(t.path.canonicalString());let n=e.uc.get(t);null!==n&&(sv(e.remoteStore,n),e.uc=e.uc.remove(t),e.cc.delete(n),ag(e))}function am(e,t,n){for(let r of n)r instanceof s4?(e.ac.addReference(r.key,t),function(e,t){let n=t.key,r=n.path.canonicalString();e.uc.get(n)||e.oc.has(r)||(y("SyncEngine","New document in limbo: "+n),e.oc.add(r),ag(e))}(e,r)):r instanceof s3?(y("SyncEngine","Document no longer in limbo: "+r.key),e.ac.removeReference(r.key,t),e.ac.containsKey(r.key)||af(e,r.key)):b()}function ag(e){for(;e.oc.size>0&&e.uc.size<e.maxConcurrentLimboResolutions;){let t=e.oc.values().next().value;e.oc.delete(t);let n=new G(U.fromString(t)),r=e.fc.next();e.cc.set(r,new s6(n)),e.uc=e.uc.insert(n,r),sw(e.remoteStore,new rd(tk(tE(n.path)),r,2,em.at))}}async function ap(e,t,n){let r=[],i=[],s=[];e.ic.isEmpty()||(e.ic.forEach((a,o)=>{s.push(e._c(o,t,n).then(t=>{if((t||n)&&e.isPrimaryClient&&e.sharedClientState.updateQueryState(o.targetId,(null==t?void 0:t.fromCache)?"not-current":"current"),t){r.push(t);let e=iB.Ci(o.targetId,t);i.push(e)}}))}),await Promise.all(s),e.sc.Wo(r),await async function(e,t){let n=e;try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",e=>en.forEach(t,t=>en.forEach(t.Si,r=>n.persistence.referenceDelegate.addReference(e,t.targetId,r)).next(()=>en.forEach(t.Di,r=>n.persistence.referenceDelegate.removeReference(e,t.targetId,r)))))}catch(e){if(!eo(e))throw e;y("LocalStore","Failed to update sequence numbers: "+e)}for(let e of t){let t=e.targetId;if(!e.fromCache){let e=n.qi.get(t),r=e.snapshotVersion,i=e.withLastLimboFreeSnapshotVersion(r);n.qi=n.qi.insert(t,i)}}}(e.localStore,i))}async function ay(e,t){let n=e;if(!n.currentUser.isEqual(t)){y("SyncEngine","User change. New user:",t.toKey());let e=await i$(n.localStore,t);n.currentUser=t,n.lc.forEach(e=>{e.forEach(e=>{e.reject(new S(E.CANCELLED,"'waitForPendingWrites' promise is rejected due to a user change."))})}),n.lc.clear(),n.sharedClientState.handleUserChange(t,e.removedBatchIds,e.addedBatchIds),await ap(n,e.ji)}}function aw(e,t){let n=e.cc.get(t);if(n&&n.nc)return nf().add(n.key);{let n=nf(),r=e.rc.get(t);if(!r)return n;for(let t of r){let r=e.ic.get(t);n=n.unionWith(r.view.ju)}return n}}async function av(e,t){let n=await iH(e.localStore,t.query,!0),r=t.view.tc(n);return e.isPrimaryClient&&am(e,t.targetId,r.Xu),r}async function aI(e,t){return iX(e.localStore,t).then(t=>ap(e,t))}async function ab(e,t,n,r){let i=await function(e,t){let n=e.mutationQueue;return e.persistence.runTransaction("Lookup mutation documents","readonly",r=>n.Tn(r,t).next(t=>t?e.localDocuments.getDocuments(r,t):en.resolve(null)))}(e.localStore,t);null!==i?("pending"===n?await sC(e.remoteStore):"acknowledged"===n||"rejected"===n?(ah(e,t,r||null),ac(e,t),function(e,t){e.mutationQueue.An(t)}(e.localStore,t)):b(),await ap(e,i)):y("SyncEngine","Cannot apply mutation batch with id: "+t)}async function aT(e,t){let n=e;if(aN(n),ak(n),!0===t&&!0!==n.dc){let e=n.sharedClientState.getAllActiveQueryTargets(),t=await aE(n,e.toArray());for(let e of(n.dc=!0,await sq(n.remoteStore,!0),t))sw(n.remoteStore,e)}else if(!1===t&&!1!==n.dc){let e=[],t=Promise.resolve();n.rc.forEach((r,i)=>{n.sharedClientState.isLocalQueryTarget(i)?e.push(i):t=t.then(()=>(ad(n,i),iW(n.localStore,i,!0))),sv(n.remoteStore,i)}),await t,await aE(n,e),function(e){let t=e;t.cc.forEach((e,n)=>{sv(t.remoteStore,n)}),t.ac.fs(),t.cc=new Map,t.uc=new ts(G.comparator)}(n),n.dc=!1,await sq(n.remoteStore,!1)}}async function aE(e,t,n){let r=[],i=[];for(let n of t){let t;let s=e.rc.get(n);if(s&&0!==s.length)for(let n of(t=await ij(e.localStore,tk(s[0])),s)){let t=e.ic.get(n),r=await av(e,t);r.snapshot&&i.push(r.snapshot)}else{let r=await iY(e.localStore,n);t=await ij(e.localStore,r),await at(e,aS(r),n,!1,t.resumeToken)}r.push(t)}return e.sc.Wo(i),r}function aS(e){var t,n,r,i,s,a,o;return t=e.path,n=e.collectionGroup,r=e.orderBy,i=e.filters,s=e.limit,a=e.startAt,o=e.endAt,new tT(t,n,r,i,s,"F",a,o)}function ax(e){return e.localStore.persistence.vi()}async function a_(e,t,n,r){if(e.dc)return void y("SyncEngine","Ignoring unexpected query state notification.");let i=e.rc.get(t);if(i&&i.length>0)switch(n){case"current":case"not-current":{let r=await iX(e.localStore,tL(i[0])),s=ng.createSynthesizedRemoteEventForCurrentChange(t,"current"===n,eS.EMPTY_BYTE_STRING);await ap(e,r,s);break}case"rejected":await iW(e.localStore,t,!0),ad(e,t,r);break;default:b()}}async function aD(e,t,n){let r=aN(e);if(r.dc){for(let e of t){if(r.rc.has(e)){y("SyncEngine","Adding an already active target "+e);continue}let t=await iY(r.localStore,e),n=await ij(r.localStore,t);await at(r,aS(t),n.targetId,!1,n.resumeToken),sw(r.remoteStore,n)}for(let e of n)r.rc.has(e)&&await iW(r.localStore,e,!1).then(()=>{sv(r.remoteStore,e),ad(r,e)}).catch(et)}}function aN(e){let t=e;return t.remoteStore.remoteSyncer.applyRemoteEvent=ai.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=aw.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=aa.bind(null,t),t.sc.Wo=sY.bind(null,t.eventManager),t.sc.wc=sX.bind(null,t.eventManager),t}function ak(e){let t=e;return t.remoteStore.remoteSyncer.applySuccessfulWrite=ao.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=au.bind(null,t),t}class aC{constructor(){this.synchronizeTabs=!1}async initialize(e){this.yt=su(e.databaseInfo.databaseId),this.sharedClientState=this.gc(e),this.persistence=this.yc(e),await this.persistence.start(),this.localStore=this.Ic(e),this.gcScheduler=this.Tc(e,this.localStore),this.indexBackfillerScheduler=this.Ec(e,this.localStore)}Tc(e,t){return null}Ec(e,t){return null}Ic(e){var t,n,r,i;return t=this.persistence,n=new iK,r=e.initialUser,i=this.yt,new iG(t,n,r,i)}yc(e){return new iA(iV.Bs,this.yt)}gc(e){return new se}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class aA extends aC{constructor(e,t,n){super(),this.Ac=e,this.cacheSizeBytes=t,this.forceOwnership=n,this.synchronizeTabs=!1}async initialize(e){await super.initialize(e),await this.Ac.initialize(this,e),await ak(this.Ac.syncEngine),await sC(this.Ac.remoteStore),await this.persistence.li(()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve()))}Ic(e){var t,n,r,i;return t=this.persistence,n=new iK,r=e.initialUser,i=this.yt,new iG(t,n,r,i)}Tc(e,t){let n=this.persistence.referenceDelegate.garbageCollector;return new iu(n,e.asyncQueue,t)}Ec(e,t){let n=new ef(t,this.persistence);return new ed(e.asyncQueue,n)}yc(e){let t=iU(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),n=void 0!==this.cacheSizeBytes?r2.withCacheSize(this.cacheSizeBytes):r2.DEFAULT;return new iO(this.synchronizeTabs,t,e.clientId,n,e.asyncQueue,sa(),so(),this.yt,this.sharedClientState,!!this.forceOwnership)}gc(e){return new se}}class aR extends aA{constructor(e,t){super(e,t,!1),this.Ac=e,this.cacheSizeBytes=t,this.synchronizeTabs=!0}async initialize(e){await super.initialize(e);let t=this.Ac.syncEngine;this.sharedClientState instanceof i7&&(this.sharedClientState.syncEngine={Fr:ab.bind(null,t),$r:a_.bind(null,t),Br:aD.bind(null,t),vi:ax.bind(null,t),Mr:aI.bind(null,t)},await this.sharedClientState.start()),await this.persistence.li(async e=>{await aT(this.Ac.syncEngine,e),this.gcScheduler&&(e&&!this.gcScheduler.started?this.gcScheduler.start():e||this.gcScheduler.stop()),this.indexBackfillerScheduler&&(e&&!this.indexBackfillerScheduler.started?this.indexBackfillerScheduler.start():e||this.indexBackfillerScheduler.stop())})}gc(e){let t=sa();if(!i7.C(t))throw new S(E.UNIMPLEMENTED,"IndexedDB persistence is only available on platforms that support LocalStorage.");let n=iU(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey);return new i7(t,e.asyncQueue,n,e.clientId,e.initialUser)}}class aV{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=e=>as(this.syncEngine,e,1),this.remoteStore.remoteSyncer.handleCredentialChange=ay.bind(null,this.syncEngine),await sq(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new sj}createDatastore(e){var t,n,r;let i=su(e.databaseInfo.databaseId),s=(t=e.databaseInfo,new ss(t));return n=e.authCredentials,r=e.appCheckCredentials,new sf(n,r,s,i)}createRemoteStore(e){var t,n,r,i,s;return t=this.localStore,n=this.datastore,r=e.asyncQueue,i=e=>as(this.syncEngine,e,0),s=sn.C()?new sn:new st,new sg(t,n,r,i,s)}createSyncEngine(e,t){return function(e,t,n,r,i,s,a){let o=new s7(e,t,n,r,i,s);return a&&(o.dc=!0),o}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}terminate(){return async function(e){y("RemoteStore","RemoteStore shutting down."),e._u.add(5),await sy(e),e.mu.shutdown(),e.gu.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aM(e,t,n){if(!n)throw new S(E.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function aF(e,t,n,r){if(!0===t&&!0===r)throw new S(E.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}function aL(e){if(!G.isDocumentKey(e))throw new S(E.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function aO(e){if(G.isDocumentKey(e))throw new S(E.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function aq(e){if(void 0===e)return"undefined";if(null===e)return"null";if("string"==typeof e)return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if("number"==typeof e||"boolean"==typeof e)return""+e;if("object"==typeof e){if(e instanceof Array)return"an array";{var t;let n=(t=e).constructor?t.constructor.name:null;return n?`a custom ${n} object`:"an object"}}return"function"==typeof e?"a function":b()}function aP(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new S(E.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{let n=aq(e);throw new S(E.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}function aU(e,t){if(t<=0)throw new S(E.INVALID_ARGUMENT,`Function ${e}() requires a positive number, but it was: ${t}.`)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let aB=new Map;class aK{constructor(e){var t;if(void 0===e.host){if(void 0!==e.ssl)throw new S(E.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=null===(t=e.ssl)||void 0===t||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,void 0===e.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==e.cacheSizeBytes&&e.cacheSizeBytes<1048576)throw new S(E.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,aF("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aG{constructor(e,t,n,r){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=n,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new aK({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new S(E.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(e){if(this._settingsFrozen)throw new S(E.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new aK(e),void 0!==e.credentials&&(this._authCredentials=function(e){if(!e)return new D;switch(e.type){case"gapi":let t=e.client;return new A(t,e.sessionIndex||"0",e.iamToken||null,e.authTokenFactory||null);case"provider":return e.client;default:throw new S(E.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){let t=aB.get(e);t&&(y("ComponentProvider","Removing Datastore"),aB.delete(e),t.terminate())}(this),Promise.resolve()}}function a$(e,t,n,r={}){var i;let s=(e=aP(e,aG))._getSettings();if("firestore.googleapis.com"!==s.host&&s.host!==t&&v("Host has been set in both settings() and useEmulator(), emulator host will be used"),e._setSettings(Object.assign(Object.assign({},s),{host:`${t}:${n}`,ssl:!1})),r.mockUserToken){let t,n;if("string"==typeof r.mockUserToken)t=r.mockUserToken,n=d.MOCK_USER;else{t=(0,u.Sg)(r.mockUserToken,null===(i=e._app)||void 0===i?void 0:i.options.projectId);let s=r.mockUserToken.sub||r.mockUserToken.user_id;if(!s)throw new S(E.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");n=new d(s)}e._authCredentials=new N(new _(t,n))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aQ{constructor(e,t,n){this.converter=t,this._key=n,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new aj(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new aQ(this.firestore,e,this._key)}}class az{constructor(e,t,n){this.converter=t,this._query=n,this.type="query",this.firestore=e}withConverter(e){return new az(this.firestore,e,this._query)}}class aj extends az{constructor(e,t,n){super(e,t,tE(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){let e=this._path.popLast();return e.isEmpty()?null:new aQ(this.firestore,null,new G(e))}withConverter(e){return new aj(this.firestore,e,this._path)}}function aW(e,t,...n){if(e=(0,u.m9)(e),aM("collection","path",t),e instanceof aG){let r=U.fromString(t,...n);return aO(r),new aj(e,null,r)}{if(!(e instanceof aQ||e instanceof aj))throw new S(E.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");let r=e._path.child(U.fromString(t,...n));return aO(r),new aj(e.firestore,null,r)}}function aH(e,t){if(e=aP(e,aG),aM("collectionGroup","collection id",t),t.indexOf("/")>=0)throw new S(E.INVALID_ARGUMENT,`Invalid collection ID '${t}' passed to function collectionGroup(). Collection IDs must not contain '/'.`);return new az(e,null,new tT(U.emptyPath(),t))}function aY(e,t,...n){if(e=(0,u.m9)(e),1==arguments.length&&(t=M.R()),aM("doc","path",t),e instanceof aG){let r=U.fromString(t,...n);return aL(r),new aQ(e,null,new G(r))}{if(!(e instanceof aQ||e instanceof aj))throw new S(E.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");let r=e._path.child(U.fromString(t,...n));return aL(r),new aQ(e.firestore,e instanceof aj?e.converter:null,new G(r))}}function aX(e,t){return e=(0,u.m9)(e),t=(0,u.m9)(t),(e instanceof aQ||e instanceof aj)&&(t instanceof aQ||t instanceof aj)&&e.firestore===t.firestore&&e.path===t.path&&e.converter===t.converter}function aZ(e,t){return e=(0,u.m9)(e),t=(0,u.m9)(t),e instanceof az&&t instanceof az&&e.firestore===t.firestore&&tR(e._query,t._query)&&e.converter===t.converter}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aJ(e,t=10240){let n=0;return{async read(){if(n<e.byteLength){let r={value:e.slice(n,n+t),done:!1};return n+=t,r}return{done:!0}},async cancel(){},releaseLock(){},closed:Promise.reject("unimplemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a0{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Rc(this.observer.next,e)}error(e){this.observer.error?this.Rc(this.observer.error,e):w("Uncaught Error in snapshot listener:",e.toString())}bc(){this.muted=!0}Rc(e,t){this.muted||setTimeout(()=>{this.muted||e(t)},0)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a1{constructor(e,t){this.Pc=e,this.yt=t,this.metadata=new x,this.buffer=new Uint8Array,this.vc=new TextDecoder("utf-8"),this.Vc().then(e=>{e&&e.Ou()?this.metadata.resolve(e.ku.metadata):this.metadata.reject(Error(`The first element of the bundle is not a metadata, it is
             ${JSON.stringify(null==e?void 0:e.ku)}`))},e=>this.metadata.reject(e))}close(){return this.Pc.cancel()}async getMetadata(){return this.metadata.promise}async mc(){return await this.getMetadata(),this.Vc()}async Vc(){let e=await this.Sc();if(null===e)return null;let t=this.vc.decode(e),n=Number(t);isNaN(n)&&this.Dc(`length string (${t}) is not valid number`);let r=await this.Cc(n);return new s0(JSON.parse(r),e.length+n)}xc(){return this.buffer.findIndex(e=>123===e)}async Sc(){for(;0>this.xc()&&!await this.Nc(););if(0===this.buffer.length)return null;let e=this.xc();e<0&&this.Dc("Reached the end of bundle when a length string is expected.");let t=this.buffer.slice(0,e);return this.buffer=this.buffer.slice(e),t}async Cc(e){for(;this.buffer.length<e;)await this.Nc()&&this.Dc("Reached the end of bundle when more is expected.");let t=this.vc.decode(this.buffer.slice(0,e));return this.buffer=this.buffer.slice(e),t}Dc(e){throw this.Pc.cancel(),Error(`Invalid bundle format: ${e}`)}async Nc(){let e=await this.Pc.read();if(!e.done){let t=new Uint8Array(this.buffer.length+e.value.length);t.set(this.buffer),t.set(e.value,this.buffer.length),this.buffer=t}return e.done}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a2{constructor(e){this.datastore=e,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastWriteError=null,this.writtenDocs=new Set}async lookup(e){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw new S(E.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes.");let t=await async function(e,t){let n=nO(e.yt)+"/documents",r={documents:t.map(t=>nV(e.yt,t))},i=await e._o("BatchGetDocuments",n,r,t.length),s=new Map;i.forEach(t=>{var n;let r=(n=e.yt,"found"in t?function(e,t){t.found||b(),t.found.name,t.found.updateTime;let n=nM(e,t.found.name),r=nC(t.found.updateTime),i=t.found.createTime?nC(t.found.createTime):q.min(),s=new td({mapValue:{fields:t.found.fields}});return tf.newFoundDocument(n,r,i,s)}(n,t):"missing"in t?function(e,t){t.missing||b(),t.readTime||b();let n=nM(e,t.missing),r=nC(t.readTime);return tf.newNoDocument(n,r)}(n,t):b());s.set(r.key.toString(),r)});let a=[];return t.forEach(e=>{let t=s.get(e.toString());t||b(),a.push(t)}),a}(this.datastore,e);return t.forEach(e=>this.recordVersion(e)),t}set(e,t){this.write(t.toMutation(e,this.precondition(e))),this.writtenDocs.add(e.toString())}update(e,t){try{this.write(t.toMutation(e,this.preconditionForUpdate(e)))}catch(e){this.lastWriteError=e}this.writtenDocs.add(e.toString())}delete(e){this.write(new ne(e,this.precondition(e))),this.writtenDocs.add(e.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastWriteError)throw this.lastWriteError;let e=this.readVersions;this.mutations.forEach(t=>{e.delete(t.key.toString())}),e.forEach((e,t)=>{let n=G.fromPath(t);this.mutations.push(new nt(n,this.precondition(n)))}),await async function(e,t){let n=nO(e.yt)+"/documents",r={writes:t.map(t=>nB(e.yt,t))};await e.ao("Commit",n,r)}(this.datastore,this.mutations),this.committed=!0}recordVersion(e){let t;if(e.isFoundDocument())t=e.version;else{if(!e.isNoDocument())throw b();t=q.min()}let n=this.readVersions.get(e.key.toString());if(n){if(!t.isEqual(n))throw new S(E.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(e.key.toString(),t)}precondition(e){let t=this.readVersions.get(e.toString());return!this.writtenDocs.has(e.toString())&&t?t.isEqual(q.min())?tJ.exists(!1):tJ.updateTime(t):tJ.none()}preconditionForUpdate(e){let t=this.readVersions.get(e.toString());if(!this.writtenDocs.has(e.toString())&&t){if(t.isEqual(q.min()))throw new S(E.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return tJ.updateTime(t)}return tJ.exists(!0)}write(e){this.ensureCommitNotCalled(),this.mutations.push(e)}ensureCommitNotCalled(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a5{constructor(e,t,n,r,i){this.asyncQueue=e,this.datastore=t,this.options=n,this.updateFunction=r,this.deferred=i,this.kc=n.maxAttempts,this.xo=new sl(this.asyncQueue,"transaction_retry")}run(){this.kc-=1,this.Oc()}Oc(){this.xo.Ro(async()=>{let e=new a2(this.datastore),t=this.Mc(e);t&&t.then(t=>{this.asyncQueue.enqueueAndForget(()=>e.commit().then(()=>{this.deferred.resolve(t)}).catch(e=>{this.Fc(e)}))}).catch(e=>{this.Fc(e)})})}Mc(e){try{let t=this.updateFunction(e);return!eI(t)&&t.catch&&t.then?t:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(e){return this.deferred.reject(e),null}}Fc(e){this.kc>0&&this.$c(e)?(this.kc-=1,this.asyncQueue.enqueueAndForget(()=>(this.Oc(),Promise.resolve()))):this.deferred.reject(e)}$c(e){if("FirebaseError"===e.name){let t=e.code;return"aborted"===t||"failed-precondition"===t||"already-exists"===t||!nr(t)}return!1}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a4{constructor(e,t,n,r){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=n,this.databaseInfo=r,this.user=d.UNAUTHENTICATED,this.clientId=M.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(n,async e=>{y("FirestoreClient","Received user=",e.uid),await this.authCredentialListener(e),this.user=e}),this.appCheckCredentials.start(n,e=>(y("FirestoreClient","Received new app check token=",e),this.appCheckCredentialListener(e,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new S(E.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();let e=new x;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){let t=sK(n,"Failed to shutdown persistence");e.reject(t)}}),e.promise}}async function a3(e,t){e.asyncQueue.verifyOperationInProgress(),y("FirestoreClient","Initializing OfflineComponentProvider");let n=await e.getConfiguration();await t.initialize(n);let r=n.initialUser;e.setCredentialChangeListener(async e=>{r.isEqual(e)||(await i$(t.localStore,e),r=e)}),t.persistence.setDatabaseDeletedListener(()=>e.terminate()),e.offlineComponents=t}async function a8(e,t){e.asyncQueue.verifyOperationInProgress();let n=await a9(e);y("FirestoreClient","Initializing OnlineComponentProvider");let r=await e.getConfiguration();await t.initialize(n,r),e.setCredentialChangeListener(e=>sO(t.remoteStore,e)),e.setAppCheckTokenChangeListener((e,n)=>sO(t.remoteStore,n)),e.onlineComponents=t}async function a9(e){return e.offlineComponents||(y("FirestoreClient","Using default OfflineComponentProvider"),await a3(e,new aC)),e.offlineComponents}async function a6(e){return e.onlineComponents||(y("FirestoreClient","Using default OnlineComponentProvider"),await a8(e,new aV)),e.onlineComponents}function a7(e){return a9(e).then(e=>e.persistence)}function oe(e){return a9(e).then(e=>e.localStore)}function ot(e){return a6(e).then(e=>e.remoteStore)}function on(e){return a6(e).then(e=>e.syncEngine)}async function or(e){let t=await a6(e),n=t.eventManager;return n.onListen=ae.bind(null,t.syncEngine),n.onUnlisten=an.bind(null,t.syncEngine),n}function oi(e,t,n={}){let r=new x;return e.asyncQueue.enqueueAndForget(async()=>(function(e,t,n,r,i){let s=new a0({next:s=>{t.enqueueAndForget(()=>sH(e,a));let o=s.docs.has(n);!o&&s.fromCache?i.reject(new S(E.UNAVAILABLE,"Failed to get document because the client is offline.")):o&&s.fromCache&&r&&"server"===r.source?i.reject(new S(E.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):i.resolve(s)},error:e=>i.reject(e)}),a=new sJ(tE(n.path),s,{includeMetadataChanges:!0,Nu:!0});return sW(e,a)})(await or(e),e.asyncQueue,t,n,r)),r.promise}function os(e,t,n={}){let r=new x;return e.asyncQueue.enqueueAndForget(async()=>(function(e,t,n,r,i){let s=new a0({next:n=>{t.enqueueAndForget(()=>sH(e,a)),n.fromCache&&"server"===r.source?i.reject(new S(E.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):i.resolve(n)},error:e=>i.reject(e)}),a=new sJ(n,s,{includeMetadataChanges:!0,Nu:!0});return sW(e,a)})(await or(e),e.asyncQueue,t,n,r)),r.promise}class oa{constructor(){this.Bc=Promise.resolve(),this.Lc=[],this.qc=!1,this.Uc=[],this.Kc=null,this.Gc=!1,this.Qc=!1,this.jc=[],this.xo=new sl(this,"async_queue_retry"),this.Wc=()=>{let e=so();e&&y("AsyncQueue","Visibility state changed to "+e.visibilityState),this.xo.Po()};let e=so();e&&"function"==typeof e.addEventListener&&e.addEventListener("visibilitychange",this.Wc)}get isShuttingDown(){return this.qc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.zc(),this.Hc(e)}enterRestrictedMode(e){if(!this.qc){this.qc=!0,this.Qc=e||!1;let t=so();t&&"function"==typeof t.removeEventListener&&t.removeEventListener("visibilitychange",this.Wc)}}enqueue(e){if(this.zc(),this.qc)return new Promise(()=>{});let t=new x;return this.Hc(()=>this.qc&&this.Qc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Lc.push(e),this.Jc()))}async Jc(){if(0!==this.Lc.length){try{await this.Lc[0](),this.Lc.shift(),this.xo.reset()}catch(e){if(!eo(e))throw e;y("AsyncQueue","Operation failed with retryable error: "+e)}this.Lc.length>0&&this.xo.Ro(()=>this.Jc())}}Hc(e){let t=this.Bc.then(()=>(this.Gc=!0,e().catch(e=>{let t;this.Kc=e,this.Gc=!1;let n=(t=e.message||"",e.stack&&(t=e.stack.includes(e.message)?e.stack:e.message+"\n"+e.stack),t);throw w("INTERNAL UNHANDLED ERROR: ",n),e}).then(e=>(this.Gc=!1,e))));return this.Bc=t,t}enqueueAfterDelay(e,t,n){this.zc(),this.jc.indexOf(e)>-1&&(t=0);let r=sB.createAndSchedule(this,e,t,n,e=>this.Yc(e));return this.Uc.push(r),r}zc(){this.Kc&&b()}verifyOperationInProgress(){}async Xc(){let e;do e=this.Bc,await e;while(e!==this.Bc)}Zc(e){for(let t of this.Uc)if(t.timerId===e)return!0;return!1}ta(e){return this.Xc().then(()=>{for(let t of(this.Uc.sort((e,t)=>e.targetTimeMs-t.targetTimeMs),this.Uc))if(t.skipDelay(),"all"!==e&&t.timerId===e)break;return this.Xc()})}ea(e){this.jc.push(e)}Yc(e){let t=this.Uc.indexOf(e);this.Uc.splice(t,1)}}function oo(e){return function(e,t){if("object"!=typeof e||null===e)return!1;for(let n of t)if(n in e&&"function"==typeof e[n])return!0;return!1}(e,["next","error","complete"])}class ou{constructor(){this._progressObserver={},this._taskCompletionResolver=new x,this._lastProgress={taskState:"Running",totalBytes:0,totalDocuments:0,bytesLoaded:0,documentsLoaded:0}}onProgress(e,t,n){this._progressObserver={next:e,error:t,complete:n}}catch(e){return this._taskCompletionResolver.promise.catch(e)}then(e,t){return this._taskCompletionResolver.promise.then(e,t)}_completeWith(e){this._updateProgress(e),this._progressObserver.complete&&this._progressObserver.complete(),this._taskCompletionResolver.resolve(e)}_failWith(e){this._lastProgress.taskState="Error",this._progressObserver.next&&this._progressObserver.next(this._lastProgress),this._progressObserver.error&&this._progressObserver.error(e),this._taskCompletionResolver.reject(e)}_updateProgress(e){this._lastProgress=e,this._progressObserver.next&&this._progressObserver.next(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ol=-1;class oc extends aG{constructor(e,t,n,r){super(e,t,n,r),this.type="firestore",this._queue=new oa,this._persistenceKey=(null==r?void 0:r.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||od(this),this._firestoreClient.terminate()}}function oh(e){return e._firestoreClient||od(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function od(e){var t,n,r,i;let s=e._freezeSettings(),a=(n=e._databaseId,r=(null===(t=e._app)||void 0===t?void 0:t.options.appId)||"",i=e._persistenceKey,new eg(n,r,i,s.host,s.ssl,s.experimentalForceLongPolling,s.experimentalAutoDetectLongPolling,s.useFetchStreams));e._firestoreClient=new a4(e._authCredentials,e._appCheckCredentials,e._queue,a)}function of(e,t){oT(e=aP(e,oc));let n=oh(e),r=e._freezeSettings(),i=new aV;return og(n,i,new aA(i,r.cacheSizeBytes,null==t?void 0:t.forceOwnership))}function om(e){oT(e=aP(e,oc));let t=oh(e),n=e._freezeSettings(),r=new aV;return og(t,r,new aR(r,n.cacheSizeBytes))}function og(e,t,n){let r=new x;return e.asyncQueue.enqueue(async()=>{try{await a3(e,n),await a8(e,t),r.resolve()}catch(e){if(!("FirebaseError"===e.name?e.code===E.FAILED_PRECONDITION||e.code===E.UNIMPLEMENTED:!("undefined"!=typeof DOMException&&e instanceof DOMException)||22===e.code||20===e.code||11===e.code))throw e;v("Error enabling offline persistence. Falling back to persistence disabled: "+e),r.reject(e)}}).then(()=>r.promise)}function op(e){if(e._initialized&&!e._terminated)throw new S(E.FAILED_PRECONDITION,"Persistence can only be cleared before a Firestore instance is initialized or after it is terminated.");let t=new x;return e._queue.enqueueAndForgetEvenWhileRestricted(async()=>{try{await async function(e){if(!ei.C())return Promise.resolve();await ei.delete(e+"main")}(iU(e._databaseId,e._persistenceKey)),t.resolve()}catch(e){t.reject(e)}}),t.promise}function oy(e){return function(e){let t=new x;return e.asyncQueue.enqueueAndForget(async()=>al(await on(e),t)),t.promise}(oh(e=aP(e,oc)))}function ow(e){var t;return(t=oh(e=aP(e,oc))).asyncQueue.enqueue(async()=>{let e=await a7(t),n=await ot(t);return e.setNetworkEnabled(!0),n._u.delete(0),sp(n)})}function ov(e){var t;return(t=oh(e=aP(e,oc))).asyncQueue.enqueue(async()=>{let e=await a7(t),n=await ot(t);return e.setNetworkEnabled(!1),async function(e){e._u.add(0),await sy(e),e.gu.set("Offline")}(n)})}function oI(e,t){let n=oh(e=aP(e,oc)),r=new ou;return function(e,t,n,r){var i,s;let a=(i=su(t),s=function(e,t){if(e instanceof Uint8Array)return aJ(e,t);if(e instanceof ArrayBuffer)return aJ(new Uint8Array(e),t);if(e instanceof ReadableStream)return e.getReader();throw Error("Source of `toByteStreamReader` has to be a ArrayBuffer or ReadableStream")}("string"==typeof n?(new TextEncoder).encode(n):n),new a1(s,i));e.asyncQueue.enqueueAndForget(async()=>{!function(e,t,n){(async function(e,t,n){try{var r;let i=await t.getMetadata();if(await function(e,t){let n=nC(t.createTime);return e.persistence.runTransaction("hasNewerBundle","readonly",n=>e.Ns.getBundleMetadata(n,t.id)).then(e=>!!e&&e.createTime.compareTo(n)>=0)}(e.localStore,i))return await t.close(),n._completeWith({taskState:"Success",documentsLoaded:i.totalDocuments,bytesLoaded:i.totalBytes,totalDocuments:i.totalDocuments,totalBytes:i.totalBytes}),Promise.resolve(new Set);n._updateProgress(s5(i));let s=new s2(i,e.localStore,t.yt),a=await t.mc();for(;a;){let e=await s.Fu(a);e&&n._updateProgress(e),a=await t.mc()}let o=await s.complete();return await ap(e,o.Lu,void 0),await (r=e.localStore).persistence.runTransaction("Save bundle","readwrite",e=>r.Ns.saveBundleMetadata(e,i)),n._completeWith(o.progress),Promise.resolve(o.Bu)}catch(e){return v("SyncEngine",`Loading bundle failed with ${e}`),n._failWith(e),Promise.resolve(new Set)}})(e,t,n).then(t=>{e.sharedClientState.notifyBundleLoaded(t)})}(await on(e),a,r)})}(n,e._databaseId,t,r),r}function ob(e,t){var n;return(n=oh(e=aP(e,oc))).asyncQueue.enqueue(async()=>{var e;return(e=await oe(n)).persistence.runTransaction("Get named query","readonly",n=>e.Ns.getNamedQuery(n,t))}).then(t=>t?new az(e,null,t.query):null)}function oT(e){if(e._initialized||e._terminated)throw new S(E.FAILED_PRECONDITION,"Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oE{constructor(e){this._byteString=e}static fromBase64String(e){try{return new oE(eS.fromBase64String(e))}catch(e){throw new S(E.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(e){return new oE(eS.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oS{constructor(...e){for(let t=0;t<e.length;++t)if(0===e[t].length)throw new S(E.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new K(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ox{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o_{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new S(E.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new S(E.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return F(this._lat,e._lat)||F(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let oD=/^__.*__$/;class oN{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return null!==this.fieldMask?new t8(e,this.data,this.fieldMask,t,this.fieldTransforms):new t3(e,this.data,t,this.fieldTransforms)}}class ok{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return new t8(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function oC(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw b()}}class oA{constructor(e,t,n,r,i,s){this.settings=e,this.databaseId=t,this.yt=n,this.ignoreUndefinedProperties=r,void 0===i&&this.na(),this.fieldTransforms=i||[],this.fieldMask=s||[]}get path(){return this.settings.path}get sa(){return this.settings.sa}ia(e){return new oA(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.yt,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ra(e){var t;let n=null===(t=this.path)||void 0===t?void 0:t.child(e),r=this.ia({path:n,oa:!1});return r.ua(e),r}ca(e){var t;let n=null===(t=this.path)||void 0===t?void 0:t.child(e),r=this.ia({path:n,oa:!1});return r.na(),r}aa(e){return this.ia({path:void 0,oa:!0})}ha(e){return oX(e,this.settings.methodName,this.settings.la||!1,this.path,this.settings.fa)}contains(e){return void 0!==this.fieldMask.find(t=>e.isPrefixOf(t))||void 0!==this.fieldTransforms.find(t=>e.isPrefixOf(t.field))}na(){if(this.path)for(let e=0;e<this.path.length;e++)this.ua(this.path.get(e))}ua(e){if(0===e.length)throw this.ha("Document fields must not be empty");if(oC(this.sa)&&oD.test(e))throw this.ha('Document fields cannot begin and end with "__"')}}class oR{constructor(e,t,n){this.databaseId=e,this.ignoreUndefinedProperties=t,this.yt=n||su(e)}da(e,t,n,r=!1){return new oA({sa:e,methodName:t,fa:n,path:K.emptyPath(),oa:!1,la:r},this.databaseId,this.yt,this.ignoreUndefinedProperties)}}function oV(e){let t=e._freezeSettings(),n=su(e._databaseId);return new oR(e._databaseId,!!t.ignoreUndefinedProperties,n)}function oM(e,t,n,r,i,s={}){let a,o;let u=e.da(s.merge||s.mergeFields?2:0,t,n,i);oj("Data must be an object, but it was:",u,r);let l=oQ(r,u);if(s.merge)a=new th(u.fieldMask),o=u.fieldTransforms;else if(s.mergeFields){let e=[];for(let r of s.mergeFields){let i=oW(t,r,n);if(!u.contains(i))throw new S(E.INVALID_ARGUMENT,`Field '${i}' is specified in your field mask but missing from your input data.`);oZ(e,i)||e.push(i)}a=new th(e),o=u.fieldTransforms.filter(e=>a.covers(e.field))}else a=null,o=u.fieldTransforms;return new oN(new td(l),a,o)}class oF extends ox{_toFieldTransform(e){if(2!==e.sa)throw 1===e.sa?e.ha(`${this._methodName}() can only appear at the top level of your update data`):e.ha(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof oF}}function oL(e,t,n){return new oA({sa:3,fa:t.settings.fa,methodName:e._methodName,oa:n},t.databaseId,t.yt,t.ignoreUndefinedProperties)}class oO extends ox{_toFieldTransform(e){return new tX(e.path,new tG)}isEqual(e){return e instanceof oO}}class oq extends ox{constructor(e,t){super(e),this._a=t}_toFieldTransform(e){let t=oL(this,e,!0),n=this._a.map(e=>o$(e,t)),r=new t$(n);return new tX(e.path,r)}isEqual(e){return this===e}}class oP extends ox{constructor(e,t){super(e),this._a=t}_toFieldTransform(e){let t=oL(this,e,!0),n=this._a.map(e=>o$(e,t)),r=new tz(n);return new tX(e.path,r)}isEqual(e){return this===e}}class oU extends ox{constructor(e,t){super(e),this.wa=t}_toFieldTransform(e){let t=new tW(e.yt,tU(e.yt,this.wa));return new tX(e.path,t)}isEqual(e){return this===e}}function oB(e,t,n,r){let i=e.da(1,t,n);oj("Data must be an object, but it was:",i,r);let s=[],a=td.empty();ew(r,(e,r)=>{let o=oY(t,e,n);r=(0,u.m9)(r);let l=i.ca(o);if(r instanceof oF)s.push(o);else{let e=o$(r,l);null!=e&&(s.push(o),a.set(o,e))}});let o=new th(s);return new ok(a,o,i.fieldTransforms)}function oK(e,t,n,r,i,s){let a=e.da(1,t,n),o=[oW(t,r,n)],l=[i];if(s.length%2!=0)throw new S(E.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let e=0;e<s.length;e+=2)o.push(oW(t,s[e])),l.push(s[e+1]);let c=[],h=td.empty();for(let e=o.length-1;e>=0;--e)if(!oZ(c,o[e])){let t=o[e],n=l[e];n=(0,u.m9)(n);let r=a.ca(t);if(n instanceof oF)c.push(t);else{let e=o$(n,r);null!=e&&(c.push(t),h.set(t,e))}}let d=new th(c);return new ok(h,d,a.fieldTransforms)}function oG(e,t,n,r=!1){return o$(n,e.da(r?4:3,t))}function o$(e,t){if(oz(e=(0,u.m9)(e)))return oj("Unsupported field value:",t,e),oQ(e,t);if(e instanceof ox)return function(e,t){if(!oC(t.sa))throw t.ha(`${e._methodName}() can only be used with update() and set()`);if(!t.path)throw t.ha(`${e._methodName}() is not currently supported inside arrays`);let n=e._toFieldTransform(t);n&&t.fieldTransforms.push(n)}(e,t),null;if(void 0===e&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.oa&&4!==t.sa)throw t.ha("Nested arrays are not supported");return function(e,t){let n=[],r=0;for(let i of e){let e=o$(i,t.aa(r));null==e&&(e={nullValue:"NULL_VALUE"}),n.push(e),r++}return{arrayValue:{values:n}}}(e,t)}return function(e,t){if(null===(e=(0,u.m9)(e)))return{nullValue:"NULL_VALUE"};if("number"==typeof e)return tU(t.yt,e);if("boolean"==typeof e)return{booleanValue:e};if("string"==typeof e)return{stringValue:e};if(e instanceof Date){let n=O.fromDate(e);return{timestampValue:nN(t.yt,n)}}if(e instanceof O){let n=new O(e.seconds,1e3*Math.floor(e.nanoseconds/1e3));return{timestampValue:nN(t.yt,n)}}if(e instanceof o_)return{geoPointValue:{latitude:e.latitude,longitude:e.longitude}};if(e instanceof oE)return{bytesValue:nk(t.yt,e._byteString)};if(e instanceof aQ){let n=t.databaseId,r=e.firestore._databaseId;if(!r.isEqual(n))throw t.ha(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:nA(e.firestore._databaseId||t.databaseId,e._key.path)}}throw t.ha(`Unsupported field value: ${aq(e)}`)}(e,t)}function oQ(e,t){let n={};return ev(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):ew(e,(e,r)=>{let i=o$(r,t.ra(e));null!=i&&(n[e]=i)}),{mapValue:{fields:n}}}function oz(e){return!("object"!=typeof e||null===e||e instanceof Array||e instanceof Date||e instanceof O||e instanceof o_||e instanceof oE||e instanceof aQ||e instanceof ox)}function oj(e,t,n){if(!oz(n)||!("object"==typeof n&&null!==n&&(Object.getPrototypeOf(n)===Object.prototype||null===Object.getPrototypeOf(n)))){let r=aq(n);throw"an object"===r?t.ha(e+" a custom object"):t.ha(e+" "+r)}}function oW(e,t,n){if((t=(0,u.m9)(t))instanceof oS)return t._internalPath;if("string"==typeof t)return oY(e,t);throw oX("Field path arguments must be of type string or ",e,!1,void 0,n)}let oH=RegExp("[~\\*/\\[\\]]");function oY(e,t,n){if(t.search(oH)>=0)throw oX(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new oS(...t.split("."))._internalPath}catch(r){throw oX(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function oX(e,t,n,r,i){let s=r&&!r.isEmpty(),a=void 0!==i,o=`Function ${t}() called with invalid data`;n&&(o+=" (via `toFirestore()`)"),o+=". ";let u="";return(s||a)&&(u+=" (found",s&&(u+=` in field ${r}`),a&&(u+=` in document ${i}`),u+=")"),new S(E.INVALID_ARGUMENT,o+e+u)}function oZ(e,t){return e.some(e=>e.isEqual(t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oJ{constructor(e,t,n,r,i){this._firestore=e,this._userDataWriter=t,this._key=n,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new aQ(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){let e=new o0(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){let t=this._document.data.field(o1("DocumentSnapshot.get",e));if(null!==t)return this._userDataWriter.convertValue(t)}}}class o0 extends oJ{data(){return super.data()}}function o1(e,t){return"string"==typeof t?oY(e,t):t instanceof oS?t._internalPath:t._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function o2(e){if("L"===e.limitType&&0===e.explicitOrderBy.length)throw new S(E.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class o5{}class o4 extends o5{}function o3(e,t,...n){let r=[];for(let i of(t instanceof o5&&r.push(t),function(e){let t=e.filter(e=>e instanceof o6).length,n=e.filter(e=>e instanceof o8).length;if(t>1||t>0&&n>0)throw new S(E.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r=r.concat(n)),r))e=i._apply(e);return e}class o8 extends o4{constructor(e,t,n){super(),this._field=e,this._op=t,this._value=n,this.type="where"}static _create(e,t,n){return new o8(e,t,n)}_apply(e){let t=this._parse(e);return uf(e._query,t),new az(e.firestore,e.converter,tC(e._query,t))}_parse(e){let t=oV(e.firestore),n=function(e,t,n,r,i,s,a){let o;if(i.isKeyField()){if("array-contains"===s||"array-contains-any"===s)throw new S(E.INVALID_ARGUMENT,`Invalid Query. You can't perform '${s}' queries on documentId().`);if("in"===s||"not-in"===s){ud(a,s);let t=[];for(let n of a)t.push(uh(r,e,n));o={arrayValue:{values:t}}}else o=uh(r,e,a)}else"in"!==s&&"not-in"!==s&&"array-contains-any"!==s||ud(a,s),o=oG(n,t,a,"in"===s||"not-in"===s);return eJ.create(i,s,o)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value);return n}}function o9(e,t,n){let r=o1("where",e);return o8._create(r,t,n)}class o6 extends o5{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new o6(e,t)}_parse(e){let t=this._queryConstraints.map(t=>t._parse(e)).filter(e=>e.getFilters().length>0);return 1===t.length?t[0]:e0.create(t,this._getOperator())}_apply(e){let t=this._parse(e);return 0===t.getFilters().length?e:(function(e,t){let n=e,r=t.getFlattenedFilters();for(let e of r)uf(n,e),n=tC(n,e)}(e._query,t),new az(e.firestore,e.converter,tC(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return"and"===this.type?"and":"or"}}class o7 extends o4{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new o7(e,t)}_apply(e){let t=function(e,t,n){if(null!==e.startAt)throw new S(E.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(null!==e.endAt)throw new S(E.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");let r=new ti(t,n);return function(e,t){if(null===tx(e)){let n=t_(e);null!==n&&um(e,n,t.field)}}(e,r),r}(e._query,this._field,this._direction);return new az(e.firestore,e.converter,function(e,t){let n=e.explicitOrderBy.concat([t]);return new tT(e.path,e.collectionGroup,n,e.filters.slice(),e.limit,e.limitType,e.startAt,e.endAt)}(e._query,t))}}function ue(e,t="asc"){let n=o1("orderBy",e);return o7._create(n,t)}class ut extends o4{constructor(e,t,n){super(),this.type=e,this._limit=t,this._limitType=n}static _create(e,t,n){return new ut(e,t,n)}_apply(e){return new az(e.firestore,e.converter,tA(e._query,this._limit,this._limitType))}}function un(e){return aU("limit",e),ut._create("limit",e,"F")}function ur(e){return aU("limitToLast",e),ut._create("limitToLast",e,"L")}class ui extends o4{constructor(e,t,n){super(),this.type=e,this._docOrFields=t,this._inclusive=n}static _create(e,t,n){return new ui(e,t,n)}_apply(e){var t;let n=uc(e,this.type,this._docOrFields,this._inclusive);return new az(e.firestore,e.converter,(t=e._query,new tT(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),t.limit,t.limitType,n,t.endAt)))}}function us(...e){return ui._create("startAt",e,!0)}function ua(...e){return ui._create("startAfter",e,!1)}class uo extends o4{constructor(e,t,n){super(),this.type=e,this._docOrFields=t,this._inclusive=n}static _create(e,t,n){return new uo(e,t,n)}_apply(e){var t;let n=uc(e,this.type,this._docOrFields,this._inclusive);return new az(e.firestore,e.converter,(t=e._query,new tT(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),t.limit,t.limitType,t.startAt,n)))}}function uu(...e){return uo._create("endBefore",e,!1)}function ul(...e){return uo._create("endAt",e,!0)}function uc(e,t,n,r){if(n[0]=(0,u.m9)(n[0]),n[0]instanceof oJ)return function(e,t,n,r,i){if(!r)throw new S(E.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${n}().`);let s=[];for(let n of tN(e))if(n.field.isKeyField())s.push(eP(t,r.key));else{let e=r.data.field(n.field);if(ek(e))throw new S(E.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+n.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(null===e){let e=n.field.canonicalString();throw new S(E.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${e}' (used as the orderBy) does not exist.`)}s.push(e)}return new eH(s,i)}(e._query,e.firestore._databaseId,t,n[0]._document,r);{let i=oV(e.firestore);return function(e,t,n,r,i,s){let a=e.explicitOrderBy;if(i.length>a.length)throw new S(E.INVALID_ARGUMENT,`Too many arguments provided to ${r}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);let o=[];for(let s=0;s<i.length;s++){let u=i[s];if(a[s].field.isKeyField()){if("string"!=typeof u)throw new S(E.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${r}(), but got a ${typeof u}`);if(!tD(e)&&-1!==u.indexOf("/"))throw new S(E.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${r}() must be a plain document ID, but '${u}' contains a slash.`);let n=e.path.child(U.fromString(u));if(!G.isDocumentKey(n))throw new S(E.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${r}() must result in a valid document path, but '${n}' is not because it contains an odd number of segments.`);let i=new G(n);o.push(eP(t,i))}else{let e=oG(n,r,u);o.push(e)}}return new eH(o,s)}(e._query,e.firestore._databaseId,i,t,n,r)}}function uh(e,t,n){if("string"==typeof(n=(0,u.m9)(n))){if(""===n)throw new S(E.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!tD(t)&&-1!==n.indexOf("/"))throw new S(E.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);let r=t.path.child(U.fromString(n));if(!G.isDocumentKey(r))throw new S(E.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return eP(e,new G(r))}if(n instanceof aQ)return eP(e,n._key);throw new S(E.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${aq(n)}.`)}function ud(e,t){if(!Array.isArray(e)||0===e.length)throw new S(E.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`);if(e.length>10)throw new S(E.INVALID_ARGUMENT,`Invalid Query. '${t.toString()}' filters support a maximum of 10 elements in the value array.`)}function uf(e,t){if(t.isInequality()){let n=t_(e),r=t.field;if(null!==n&&!n.isEqual(r))throw new S(E.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${n.toString()}' and '${r.toString()}'`);let i=tx(e);null!==i&&um(e,r,i)}let n=function(e,t){for(let n of e)for(let e of n.getFlattenedFilters())if(t.indexOf(e.op)>=0)return e.op;return null}(e.filters,function(e){switch(e){case"!=":return["!=","not-in"];case"array-contains":return["array-contains","array-contains-any","not-in"];case"in":return["array-contains-any","in","not-in"];case"array-contains-any":return["array-contains","array-contains-any","in","not-in"];case"not-in":return["array-contains","array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(null!==n)throw n===t.op?new S(E.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new S(E.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${n.toString()}' filters.`)}function um(e,t,n){if(!n.isEqual(t))throw new S(E.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${t.toString()}' and so you must also use '${t.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}class ug{convertValue(e,t="none"){switch(eV(e)){case 0:return null;case 1:return e.booleanValue;case 2:return eD(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(eN(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 10:return this.convertObject(e.mapValue,t);default:throw b()}}convertObject(e,t){let n={};return ew(e.fields,(e,r)=>{n[e]=this.convertValue(r,t)}),n}convertGeoPoint(e){return new o_(eD(e.latitude),eD(e.longitude))}convertArray(e,t){return(e.values||[]).map(e=>this.convertValue(e,t))}convertServerTimestamp(e,t){switch(t){case"previous":let n=function e(t){let n=t.mapValue.fields.__previous_value__;return ek(n)?e(n):n}(e);return null==n?null:this.convertValue(n,t);case"estimate":return this.convertTimestamp(eC(e));default:return null}}convertTimestamp(e){let t=e_(e);return new O(t.seconds,t.nanos)}convertDocumentKey(e,t){let n=U.fromString(e);nW(n)||b();let r=new ep(n.get(1),n.get(3)),i=new G(n.popFirst(5));return r.isEqual(t)||w(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function up(e,t,n){return e?n&&(n.merge||n.mergeFields)?e.toFirestore(t,n):e.toFirestore(t):t}class uy extends ug{constructor(e){super(),this.firestore=e}convertBytes(e){return new oE(e)}convertReference(e){let t=this.convertDocumentKey(e,this.firestore._databaseId);return new aQ(this.firestore,null,t)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uw{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class uv extends oJ{constructor(e,t,n,r,i,s){super(e,t,n,r,s),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){let t=new uI(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){let n=this._document.data.field(o1("DocumentSnapshot.get",e));if(null!==n)return this._userDataWriter.convertValue(n,t.serverTimestamps)}}}class uI extends uv{data(e={}){return super.data(e)}}class ub{constructor(e,t,n,r){this._firestore=e,this._userDataWriter=t,this._snapshot=r,this.metadata=new uw(r.hasPendingWrites,r.fromCache),this.query=n}get docs(){let e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(e,t){this._snapshot.docs.forEach(n=>{e.call(t,new uI(this._firestore,this._userDataWriter,n.key,n,new uw(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){let t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new S(E.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(e,t){if(e._snapshot.oldDocs.isEmpty()){let t=0;return e._snapshot.docChanges.map(n=>{let r=new uI(e._firestore,e._userDataWriter,n.doc.key,n.doc,new uw(e._snapshot.mutatedKeys.has(n.doc.key),e._snapshot.fromCache),e.query.converter);return n.doc,{type:"added",doc:r,oldIndex:-1,newIndex:t++}})}{let n=e._snapshot.oldDocs;return e._snapshot.docChanges.filter(e=>t||3!==e.type).map(t=>{let r=new uI(e._firestore,e._userDataWriter,t.doc.key,t.doc,new uw(e._snapshot.mutatedKeys.has(t.doc.key),e._snapshot.fromCache),e.query.converter),i=-1,s=-1;return 0!==t.type&&(i=n.indexOf(t.doc.key),n=n.delete(t.doc.key)),1!==t.type&&(s=(n=n.add(t.doc)).indexOf(t.doc.key)),{type:function(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return b()}}(t.type),doc:r,oldIndex:i,newIndex:s}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function uT(e,t){return e instanceof uv&&t instanceof uv?e._firestore===t._firestore&&e._key.isEqual(t._key)&&(null===e._document?null===t._document:e._document.isEqual(t._document))&&e._converter===t._converter:e instanceof ub&&t instanceof ub&&e._firestore===t._firestore&&aZ(e.query,t.query)&&e.metadata.isEqual(t.metadata)&&e._snapshot.isEqual(t._snapshot)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uE(e){e=aP(e,aQ);let t=aP(e.firestore,oc);return oi(oh(t),e._key).then(n=>uO(t,e,n))}class uS extends ug{constructor(e){super(),this.firestore=e}convertBytes(e){return new oE(e)}convertReference(e){let t=this.convertDocumentKey(e,this.firestore._databaseId);return new aQ(this.firestore,null,t)}}function ux(e){e=aP(e,aQ);let t=aP(e.firestore,oc),n=oh(t),r=new uS(t);return(function(e,t){let n=new x;return e.asyncQueue.enqueueAndForget(async()=>(async function(e,t,n){try{let r=await e.persistence.runTransaction("read document","readonly",n=>e.localDocuments.getDocument(n,t));r.isFoundDocument()?n.resolve(r):r.isNoDocument()?n.resolve(null):n.reject(new S(E.UNAVAILABLE,"Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)"))}catch(r){let e=sK(r,`Failed to get document '${t} from cache`);n.reject(e)}})(await oe(e),t,n)),n.promise})(n,e._key).then(n=>new uv(t,r,e._key,n,new uw(null!==n&&n.hasLocalMutations,!0),e.converter))}function u_(e){e=aP(e,aQ);let t=aP(e.firestore,oc);return oi(oh(t),e._key,{source:"server"}).then(n=>uO(t,e,n))}function uD(e){e=aP(e,az);let t=aP(e.firestore,oc),n=oh(t),r=new uS(t);return o2(e._query),os(n,e._query).then(n=>new ub(t,r,e,n))}function uN(e){e=aP(e,az);let t=aP(e.firestore,oc),n=oh(t),r=new uS(t);return(function(e,t){let n=new x;return e.asyncQueue.enqueueAndForget(async()=>(async function(e,t,n){try{let r=await iH(e,t,!0),i=new s8(t,r.Hi),s=i.Wu(r.documents),a=i.applyChanges(s,!1);n.resolve(a.snapshot)}catch(r){let e=sK(r,`Failed to execute query '${t} against cache`);n.reject(e)}})(await oe(e),t,n)),n.promise})(n,e._query).then(n=>new ub(t,r,e,n))}function uk(e){e=aP(e,az);let t=aP(e.firestore,oc),n=oh(t),r=new uS(t);return os(n,e._query,{source:"server"}).then(n=>new ub(t,r,e,n))}function uC(e,t,n){e=aP(e,aQ);let r=aP(e.firestore,oc),i=up(e.converter,t,n);return uL(r,[oM(oV(r),"setDoc",e._key,i,null!==e.converter,n).toMutation(e._key,tJ.none())])}function uA(e,t,n,...r){let i;e=aP(e,aQ);let s=aP(e.firestore,oc),a=oV(s);return i="string"==typeof(t=(0,u.m9)(t))||t instanceof oS?oK(a,"updateDoc",e._key,t,n,r):oB(a,"updateDoc",e._key,t),uL(s,[i.toMutation(e._key,tJ.exists(!0))])}function uR(e){return uL(aP(e.firestore,oc),[new ne(e._key,tJ.none())])}function uV(e,t){let n=aP(e.firestore,oc),r=aY(e),i=up(e.converter,t);return uL(n,[oM(oV(e.firestore),"addDoc",r._key,i,null!==e.converter,{}).toMutation(r._key,tJ.exists(!1))]).then(()=>r)}function uM(e,...t){var n,r,i;let s,a,o;e=(0,u.m9)(e);let l={includeMetadataChanges:!1},c=0;"object"!=typeof t[0]||oo(t[c])||(l=t[c],c++);let h={includeMetadataChanges:l.includeMetadataChanges};if(oo(t[c])){let e=t[c];t[c]=null===(n=e.next)||void 0===n?void 0:n.bind(e),t[c+1]=null===(r=e.error)||void 0===r?void 0:r.bind(e),t[c+2]=null===(i=e.complete)||void 0===i?void 0:i.bind(e)}if(e instanceof aQ)a=aP(e.firestore,oc),o=tE(e._key.path),s={next:n=>{t[c]&&t[c](uO(a,e,n))},error:t[c+1],complete:t[c+2]};else{let n=aP(e,az);a=aP(n.firestore,oc),o=n._query;let r=new uS(a);s={next:e=>{t[c]&&t[c](new ub(a,r,n,e))},error:t[c+1],complete:t[c+2]},o2(e._query)}return function(e,t,n,r){let i=new a0(r),s=new sJ(t,i,n);return e.asyncQueue.enqueueAndForget(async()=>sW(await or(e),s)),()=>{i.bc(),e.asyncQueue.enqueueAndForget(async()=>sH(await or(e),s))}}(oh(a),o,h,s)}function uF(e,t){return function(e,t){let n=new a0(t);return e.asyncQueue.enqueueAndForget(async()=>{(await or(e)).Ru.add(n),n.next()}),()=>{n.bc(),e.asyncQueue.enqueueAndForget(async()=>(function(e,t){e.Ru.delete(t)})(await or(e),n))}}(oh(e=aP(e,oc)),oo(t)?t:{next:t})}function uL(e,t){return function(e,t){let n=new x;return e.asyncQueue.enqueueAndForget(async()=>ar(await on(e),t,n)),n.promise}(oh(e),t)}function uO(e,t,n){let r=n.docs.get(t._key),i=new uS(e);return new uv(e,i,t._key,r,new uw(n.hasPendingWrites,n.fromCache),t.converter)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let uq={maxAttempts:5};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uP{constructor(e,t){this._firestore=e,this._commitHandler=t,this._mutations=[],this._committed=!1,this._dataReader=oV(e)}set(e,t,n){this._verifyNotCommitted();let r=uU(e,this._firestore),i=up(r.converter,t,n),s=oM(this._dataReader,"WriteBatch.set",r._key,i,null!==r.converter,n);return this._mutations.push(s.toMutation(r._key,tJ.none())),this}update(e,t,n,...r){let i;this._verifyNotCommitted();let s=uU(e,this._firestore);return i="string"==typeof(t=(0,u.m9)(t))||t instanceof oS?oK(this._dataReader,"WriteBatch.update",s._key,t,n,r):oB(this._dataReader,"WriteBatch.update",s._key,t),this._mutations.push(i.toMutation(s._key,tJ.exists(!0))),this}delete(e){this._verifyNotCommitted();let t=uU(e,this._firestore);return this._mutations=this._mutations.concat(new ne(t._key,tJ.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new S(E.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function uU(e,t){if((e=(0,u.m9)(e)).firestore!==t)throw new S(E.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uB extends class{constructor(e,t){this._firestore=e,this._transaction=t,this._dataReader=oV(e)}get(e){let t=uU(e,this._firestore),n=new uy(this._firestore);return this._transaction.lookup([t._key]).then(e=>{if(!e||1!==e.length)return b();let r=e[0];if(r.isFoundDocument())return new oJ(this._firestore,n,r.key,r,t.converter);if(r.isNoDocument())return new oJ(this._firestore,n,t._key,null,t.converter);throw b()})}set(e,t,n){let r=uU(e,this._firestore),i=up(r.converter,t,n),s=oM(this._dataReader,"Transaction.set",r._key,i,null!==r.converter,n);return this._transaction.set(r._key,s),this}update(e,t,n,...r){let i;let s=uU(e,this._firestore);return i="string"==typeof(t=(0,u.m9)(t))||t instanceof oS?oK(this._dataReader,"Transaction.update",s._key,t,n,r):oB(this._dataReader,"Transaction.update",s._key,t),this._transaction.update(s._key,i),this}delete(e){let t=uU(e,this._firestore);return this._transaction.delete(t._key),this}}{constructor(e,t){super(e,t),this._firestore=e}get(e){let t=uU(e,this._firestore),n=new uS(this._firestore);return super.get(e).then(e=>new uv(this._firestore,n,t._key,e._document,new uw(!1,!1),t.converter))}}function uK(e,t,n){e=aP(e,oc);let r=Object.assign(Object.assign({},uq),n);return!function(e){if(e.maxAttempts<1)throw new S(E.INVALID_ARGUMENT,"Max attempts must be at least 1")}(r),function(e,t,n){let r=new x;return e.asyncQueue.enqueueAndForget(async()=>{let i=await a6(e).then(e=>e.datastore);new a5(e.asyncQueue,i,n,t,r).run()}),r.promise}(oh(e),n=>t(new uB(e,n)),r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uG(){return new oF("deleteField")}function u$(){return new oO("serverTimestamp")}function uQ(...e){return new oq("arrayUnion",e)}function uz(...e){return new oP("arrayRemove",e)}function uj(e){return new oU("increment",e)}!function(e,t=!0){f=s.SDK_VERSION,(0,s._registerComponent)(new a.wA("firestore",(e,{instanceIdentifier:n,options:r})=>{let i=e.getProvider("app").getImmediate(),s=new oc(new k(e.getProvider("auth-internal")),new V(e.getProvider("app-check-internal")),function(e,t){if(!Object.prototype.hasOwnProperty.apply(e.options,["projectId"]))throw new S(E.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ep(e.options.projectId,t)}(i,n),i);return r=Object.assign({useFetchStreams:t},r),s._setSettings(r),s},"PUBLIC").setMultipleInstances(!0)),(0,s.registerVersion)(h,"3.8.3",void 0),(0,s.registerVersion)(h,"3.8.3","esm2017")}()}}]);