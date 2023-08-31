"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4358],{99978:function(e,t,n){n.d(t,{$q:function(){return lM},AK:function(){return l5},Ab:function(){return l3},B$:function(){return op},Bt:function(){return l4},Cf:function(){return oo},EK:function(){return O},ET:function(){return lQ},Eo:function(){return ow},F8:function(){return oU},Fc:function(){return oN},GL:function(){return lH},IO:function(){return lu},IX:function(){return oE},Ix:function(){return oR},JU:function(){return oy},Jj:function(){return oO},K9:function(){return b},Ky:function(){return G},L$:function(){return oV},Lx:function(){return lb},Lz:function(){return oP},Me:function(){return eX},Mx:function(){return ok},PL:function(){return lB},PU:function(){return lX},Pb:function(){return oM},QT:function(){return lO},ST:function(){return oD},TF:function(){return oF},TQ:function(){return lI},UQ:function(){return lz},Ub:function(){return p},W:function(){return lV},WA:function(){return T},Wi:function(){return or},Wu:function(){return lE},Xb:function(){return z},Xk:function(){return lU},Xo:function(){return lm},ar:function(){return lh},at:function(){return oh},b9:function(){return lp},cf:function(){return lW},e0:function(){return lv},fH:function(){return oA},hJ:function(){return og},i3:function(){return l2},iE:function(){return ov},kl:function(){return lq},l7:function(){return e7},my:function(){return of},nP:function(){return l9},oe:function(){return lj},pl:function(){return lK},qK:function(){return lL},qY:function(){return oS},r7:function(){return l$},sc:function(){return lY},u7:function(){return lC},vh:function(){return ly},vr:function(){return l8},xU:function(){return lF},yq:function(){return v},zN:function(){return lG}});var r,i,s=n(63991),a=n(45538),o=n(56914),l=n(8745),u=n(30613),c=n(62601);let h="@firebase/firestore";/**
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
 */let f="10.3.0",m=new o.Yd("@firebase/firestore");function g(){return m.logLevel}function p(e){m.setLogLevel(e)}function y(e,...t){if(m.logLevel<=o.in.DEBUG){let n=t.map(I);m.debug(`Firestore (${f}): ${e}`,...n)}}function w(e,...t){if(m.logLevel<=o.in.ERROR){let n=t.map(I);m.error(`Firestore (${f}): ${e}`,...n)}}function v(e,...t){if(m.logLevel<=o.in.WARN){let n=t.map(I);m.warn(`Firestore (${f}): ${e}`,...n)}}function I(e){if("string"==typeof e)return e;try{/**
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
 */return JSON.stringify(e)}catch(t){return e}}/**
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
 */function _(e="Unexpected state"){let t=`FIRESTORE (${f}) INTERNAL ASSERTION FAILED: `+e;throw w(t),Error(t)}function b(e,t){e||_()}/**
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
 */let E={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class T extends l.ZR{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class S{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
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
 */class x{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class D{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(d.UNAUTHENTICATED))}shutdown(){}}class A{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class C{constructor(e){this.t=e,this.currentUser=d.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){let n=this.i,r=e=>this.i!==n?(n=this.i,t(e)):Promise.resolve(),i=new S;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new S,e.enqueueRetryable(()=>r(this.currentUser))};let s=()=>{let t=i;e.enqueueRetryable(async()=>{await t.promise,await r(this.currentUser)})},a=e=>{y("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=e,this.auth.addAuthTokenListener(this.o),s()};this.t.onInit(e=>a(e)),setTimeout(()=>{if(!this.auth){let e=this.t.getImmediate({optional:!0});e?a(e):(y("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new S)}},0),s()}getToken(){let e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(t=>this.i!==e?(y("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):t?("string"==typeof t.accessToken||_(),new x(t.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){let e=this.auth&&this.auth.getUid();return null===e||"string"==typeof e||_(),new d(e)}}class N{constructor(e,t,n){this.l=e,this.h=t,this.P=n,this.type="FirstParty",this.user=d.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);let e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class k{constructor(e,t,n){this.l=e,this.h=t,this.P=n}getToken(){return Promise.resolve(new N(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(d.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class R{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class F{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,t){let n=e=>{null!=e.error&&y("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${e.error.message}`);let n=e.token!==this.R;return this.R=e.token,y("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?t(e.token):Promise.resolve()};this.o=t=>{e.enqueueRetryable(()=>n(t))};let r=e=>{y("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=e,this.appCheck.addTokenListener(this.o)};this.A.onInit(e=>r(e)),setTimeout(()=>{if(!this.appCheck){let e=this.A.getImmediate({optional:!0});e?r(e):y("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){let e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(e=>e?("string"==typeof e.token||_(),this.R=e.token,new R(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */class M{static V(){let e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length,n="";for(;n.length<20;){let r=/**
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
 */function(e){let t="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&"function"==typeof t.getRandomValues)t.getRandomValues(n);else for(let t=0;t<e;t++)n[t]=Math.floor(256*Math.random());return n}(40);for(let i=0;i<r.length;++i)n.length<20&&r[i]<t&&(n+=e.charAt(r[i]%e.length))}return n}}function V(e,t){return e<t?-1:e>t?1:0}function L(e,t,n){return e.length===t.length&&e.every((e,r)=>n(e,t[r]))}/**
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
 */class O{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0||t>=1e9)throw new T(E.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800||e>=253402300800)throw new T(E.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return O.fromMillis(Date.now())}static fromDate(e){return O.fromMillis(e.getTime())}static fromMillis(e){let t=Math.floor(e/1e3),n=Math.floor(1e6*(e-1e3*t));return new O(t,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?V(this.nanoseconds,e.nanoseconds):V(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){let e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class P{constructor(e){this.timestamp=e}static fromTimestamp(e){return new P(e)}static min(){return new P(new O(0,0))}static max(){return new P(new O(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class q{constructor(e,t,n){void 0===t?t=0:t>e.length&&_(),void 0===n?n=e.length-t:n>e.length-t&&_(),this.segments=e,this.offset=t,this.len=n}get length(){return this.len}isEqual(e){return 0===q.comparator(this,e)}child(e){let t=this.segments.slice(this.offset,this.limit());return e instanceof q?e.forEach(e=>{t.push(e)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=void 0===e?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return 0===this.length}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,n=this.limit();t<n;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){let n=Math.min(e.length,t.length);for(let r=0;r<n;r++){let n=e.get(r),i=t.get(r);if(n<i)return -1;if(n>i)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class U extends q{construct(e,t,n){return new U(e,t,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){let t=[];for(let n of e){if(n.indexOf("//")>=0)throw new T(E.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);t.push(...n.split("/").filter(e=>e.length>0))}return new U(t)}static emptyPath(){return new U([])}}let B=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class z extends q{construct(e,t,n){return new z(e,t,n)}static isValidIdentifier(e){return B.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),z.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new z(["__name__"])}static fromServerFormat(e){let t=[],n="",r=0,i=()=>{if(0===n.length)throw new T(E.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(n),n=""},s=!1;for(;r<e.length;){let t=e[r];if("\\"===t){if(r+1===e.length)throw new T(E.INVALID_ARGUMENT,"Path has trailing escape character: "+e);let t=e[r+1];if("\\"!==t&&"."!==t&&"`"!==t)throw new T(E.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);n+=t,r+=2}else"`"===t?s=!s:"."!==t||s?n+=t:i(),r++}if(i(),s)throw new T(E.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new z(t)}static emptyPath(){return new z([])}}/**
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
 */class K{constructor(e,t,n,r){this.indexId=e,this.collectionGroup=t,this.fields=n,this.indexState=r}}function $(e){return e.fields.find(e=>2===e.kind)}function j(e){return e.fields.filter(e=>2!==e.kind)}K.UNKNOWN_ID=-1;class Q{constructor(e,t){this.fieldPath=e,this.kind=t}}class W{constructor(e,t){this.sequenceNumber=e,this.offset=t}static empty(){return new W(0,J.min())}}function Y(e,t){let n=e.toTimestamp().seconds,r=e.toTimestamp().nanoseconds+1,i=P.fromTimestamp(1e9===r?new O(n+1,0):new O(n,r));return new J(i,G.empty(),t)}function H(e){return new J(e.readTime,e.key,-1)}class J{constructor(e,t,n){this.readTime=e,this.documentKey=t,this.largestBatchId=n}static min(){return new J(P.min(),G.empty(),-1)}static max(){return new J(P.max(),G.empty(),-1)}}function Z(e,t){let n=e.readTime.compareTo(t.readTime);return 0!==n?n:0!==(n=G.comparator(e.documentKey,t.documentKey))?n:V(e.largestBatchId,t.largestBatchId)}/**
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
 */let X="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class ee{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function et(e){if(e.code!==E.FAILED_PRECONDITION||e.message!==X)throw e;y("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class en{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&_(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new en((n,r)=>{this.nextCallback=t=>{this.wrapSuccess(e,t).next(n,r)},this.catchCallback=e=>{this.wrapFailure(t,e).next(n,r)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{let t=e();return t instanceof en?t:en.resolve(t)}catch(e){return en.reject(e)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):en.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):en.reject(t)}static resolve(e){return new en((t,n)=>{t(e)})}static reject(e){return new en((t,n)=>{n(e)})}static waitFor(e){return new en((t,n)=>{let r=0,i=0,s=!1;e.forEach(e=>{++r,e.next(()=>{++i,s&&i===r&&t()},e=>n(e))}),s=!0,i===r&&t()})}static or(e){let t=en.resolve(!1);for(let n of e)t=t.next(e=>e?en.resolve(e):n());return t}static forEach(e,t){let n=[];return e.forEach((e,r)=>{n.push(t.call(this,e,r))}),this.waitFor(n)}static mapArray(e,t){return new en((n,r)=>{let i=e.length,s=Array(i),a=0;for(let o=0;o<i;o++){let l=o;t(e[l]).next(e=>{s[l]=e,++a===i&&n(s)},e=>r(e))}})}static doWhile(e,t){return new en((n,r)=>{let i=()=>{!0===e()?t().next(()=>{i()},r):n()};i()})}}/**
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
 */class er{constructor(e,t){this.action=e,this.transaction=t,this.aborted=!1,this.m=new S,this.transaction.oncomplete=()=>{this.m.resolve()},this.transaction.onabort=()=>{t.error?this.m.reject(new ea(e,t.error)):this.m.resolve()},this.transaction.onerror=t=>{let n=eh(t.target.error);this.m.reject(new ea(e,n))}}static open(e,t,n,r){try{return new er(t,e.transaction(r,n))}catch(e){throw new ea(t,e)}}get g(){return this.m.promise}abort(e){e&&this.m.reject(e),this.aborted||(y("SimpleDb","Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}p(){let e=this.transaction;this.aborted||"function"!=typeof e.commit||e.commit()}store(e){let t=this.transaction.objectStore(e);return new el(t)}}class ei{constructor(e,t,n){this.name=e,this.version=t,this.S=n,12.2===ei.D((0,l.z$)())&&w("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(e){return y("SimpleDb","Removing database:",e),eu(window.indexedDB.deleteDatabase(e)).toPromise()}static v(){if(!(0,l.hl)())return!1;if(ei.C())return!0;let e=(0,l.z$)(),t=ei.D(e),n=ei.F(e);return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||0<t&&t<10||0<n&&n<4.5)}static C(){var e;return void 0!==c&&"YES"===(null===(e=c.env)||void 0===e?void 0:e.M)}static O(e,t){return e.store(t)}static D(e){let t=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),n=t?t[1].split("_").slice(0,2).join("."):"-1";return Number(n)}static F(e){let t=e.match(/Android ([\d.]+)/i),n=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(n)}async N(e){return this.db||(y("SimpleDb","Opening database:",this.name),this.db=await new Promise((t,n)=>{let r=indexedDB.open(this.name,this.version);r.onsuccess=e=>{let n=e.target.result;t(n)},r.onblocked=()=>{n(new ea(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},r.onerror=t=>{let r=t.target.error;"VersionError"===r.name?n(new T(E.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):"InvalidStateError"===r.name?n(new T(E.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+r)):n(new ea(e,r))},r.onupgradeneeded=e=>{y("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',e.oldVersion);let t=e.target.result;this.S.B(t,r.transaction,e.oldVersion,this.version).next(()=>{y("SimpleDb","Database upgrade to version "+this.version+" complete")})}})),this.L&&(this.db.onversionchange=e=>this.L(e)),this.db}k(e){this.L=e,this.db&&(this.db.onversionchange=t=>e(t))}async runTransaction(e,t,n,r){let i="readonly"===t,s=0;for(;;){++s;try{this.db=await this.N(e);let t=er.open(this.db,e,i?"readonly":"readwrite",n),s=r(t).next(e=>(t.p(),e)).catch(e=>(t.abort(e),en.reject(e))).toPromise();return s.catch(()=>{}),await t.g,s}catch(t){let e="FirebaseError"!==t.name&&s<3;if(y("SimpleDb","Transaction failed with error:",t.message,"Retrying:",e),this.close(),!e)return Promise.reject(t)}}}close(){this.db&&this.db.close(),this.db=void 0}}class es{constructor(e){this.q=e,this.K=!1,this.$=null}get isDone(){return this.K}get U(){return this.$}set cursor(e){this.q=e}done(){this.K=!0}W(e){this.$=e}delete(){return eu(this.q.delete())}}class ea extends T{constructor(e,t){super(E.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${t}`),this.name="IndexedDbTransactionError"}}function eo(e){return"IndexedDbTransactionError"===e.name}class el{constructor(e){this.store=e}put(e,t){let n;return void 0!==t?(y("SimpleDb","PUT",this.store.name,e,t),n=this.store.put(t,e)):(y("SimpleDb","PUT",this.store.name,"<auto-key>",e),n=this.store.put(e)),eu(n)}add(e){return y("SimpleDb","ADD",this.store.name,e,e),eu(this.store.add(e))}get(e){return eu(this.store.get(e)).next(t=>(void 0===t&&(t=null),y("SimpleDb","GET",this.store.name,e,t),t))}delete(e){return y("SimpleDb","DELETE",this.store.name,e),eu(this.store.delete(e))}count(){return y("SimpleDb","COUNT",this.store.name),eu(this.store.count())}G(e,t){let n=this.options(e,t);if(n.index||"function"!=typeof this.store.getAll){let e=this.cursor(n),t=[];return this.j(e,(e,n)=>{t.push(n)}).next(()=>t)}{let e=this.store.getAll(n.range);return new en((t,n)=>{e.onerror=e=>{n(e.target.error)},e.onsuccess=e=>{t(e.target.result)}})}}H(e,t){let n=this.store.getAll(e,null===t?void 0:t);return new en((e,t)=>{n.onerror=e=>{t(e.target.error)},n.onsuccess=t=>{e(t.target.result)}})}J(e,t){y("SimpleDb","DELETE ALL",this.store.name);let n=this.options(e,t);n.Y=!1;let r=this.cursor(n);return this.j(r,(e,t,n)=>n.delete())}Z(e,t){let n;t?n=e:(n={},t=e);let r=this.cursor(n);return this.j(r,t)}X(e){let t=this.cursor({});return new en((n,r)=>{t.onerror=e=>{let t=eh(e.target.error);r(t)},t.onsuccess=t=>{let r=t.target.result;r?e(r.primaryKey,r.value).next(e=>{e?r.continue():n()}):n()}})}j(e,t){let n=[];return new en((r,i)=>{e.onerror=e=>{i(e.target.error)},e.onsuccess=e=>{let i=e.target.result;if(!i)return void r();let s=new es(i),a=t(i.primaryKey,i.value,s);if(a instanceof en){let e=a.catch(e=>(s.done(),en.reject(e)));n.push(e)}s.isDone?r():null===s.U?i.continue():i.continue(s.U)}}).next(()=>en.waitFor(n))}options(e,t){let n;return void 0!==e&&("string"==typeof e?n=e:t=e),{index:n,range:t}}cursor(e){let t="next";if(e.reverse&&(t="prev"),e.index){let n=this.store.index(e.index);return e.Y?n.openKeyCursor(e.range,t):n.openCursor(e.range,t)}return this.store.openCursor(e.range,t)}}function eu(e){return new en((t,n)=>{e.onsuccess=e=>{let n=e.target.result;t(n)},e.onerror=e=>{let t=eh(e.target.error);n(t)}})}let ec=!1;function eh(e){let t=ei.D((0,l.z$)());if(t>=12.2&&t<13){let t="An internal error was encountered in the Indexed Database server";if(e.message.indexOf(t)>=0){let e=new T("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${t}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return ec||(ec=!0,setTimeout(()=>{throw e},0)),e}}return e}class ed{constructor(e,t){this.asyncQueue=e,this.ee=t,this.task=null}start(){this.te(15e3)}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return null!==this.task}te(e){y("IndexBackiller",`Scheduled in ${e}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",e,async()=>{this.task=null;try{y("IndexBackiller",`Documents written: ${await this.ee.ne()}`)}catch(e){eo(e)?y("IndexBackiller","Ignoring IndexedDB error during index backfill: ",e):await et(e)}await this.te(6e4)})}}class ef{constructor(e,t){this.localStore=e,this.persistence=t}async ne(e=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",t=>this.re(t,e))}re(e,t){let n=new Set,r=t,i=!0;return en.doWhile(()=>!0===i&&r>0,()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(e).next(t=>{if(null!==t&&!n.has(t))return y("IndexBackiller",`Processing collection: ${t}`),this.ie(e,t,r).next(e=>{r-=e,n.add(t)});i=!1})).next(()=>t-r)}ie(e,t,n){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(e,t).next(r=>this.localStore.localDocuments.getNextDocuments(e,t,r,n).next(n=>{let i=n.changes;return this.localStore.indexManager.updateIndexEntries(e,i).next(()=>this.se(r,n)).next(n=>(y("IndexBackiller",`Updating offset: ${n}`),this.localStore.indexManager.updateCollectionGroup(e,t,n))).next(()=>i.size)}))}se(e,t){let n=e;return t.changes.forEach((e,t)=>{let r=H(t);Z(r,n)>0&&(n=r)}),new J(n.readTime,n.documentKey,Math.max(t.batchId,e.largestBatchId))}}/**
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
 */class em{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=e=>this.oe(e),this._e=e=>t.writeSequenceNumber(e))}oe(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){let e=++this.previousValue;return this._e&&this._e(e),e}}function eg(e){return null==e}function ep(e){return 0===e&&1/e==-1/0}function ey(e){return"number"==typeof e&&Number.isInteger(e)&&!ep(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}/**
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
 */function ew(e){var t,n;let r="";for(let t=0;t<e.length;t++)r.length>0&&(r+="\x01\x01"),r=function(e,t){let n=t,r=e.length;for(let t=0;t<r;t++){let r=e.charAt(t);switch(r){case"\x00":n+="\x01\x10";break;case"\x01":n+="\x01\x11";break;default:n+=r}}return n}(e.get(t),r);return r+"\x01\x01"}function ev(e){let t=e.length;if(t>=2||_(),2===t)return"\x01"===e.charAt(0)&&"\x01"===e.charAt(1)||_(),U.emptyPath();let n=t-2,r=[],i="";for(let s=0;s<t;){let t=e.indexOf("\x01",s);switch((t<0||t>n)&&_(),e.charAt(t+1)){case"\x01":let a;let o=e.substring(s,t);0===i.length?a=o:(i+=o,a=i,i=""),r.push(a);break;case"\x10":i+=e.substring(s,t)+"\x00";break;case"\x11":i+=e.substring(s,t+1);break;default:_()}s=t+2}return new U(r)}em.ae=-1;/**
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
 */let eI=["userId","batchId"],e_={},eb=["prefixPath","collectionGroup","readTime","documentId"],eE=["prefixPath","collectionGroup","documentId"],eT=["collectionGroup","readTime","prefixPath","documentId"],eS=["canonicalId","targetId"],ex=["targetId","path"],eD=["path","targetId"],eA=["collectionId","parent"],eC=["indexId","uid"],eN=["uid","sequenceNumber"],ek=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],eR=["indexId","uid","orderedDocumentKey"],eF=["userId","collectionPath","documentId"],eM=["userId","collectionPath","largestBatchId"],eV=["userId","collectionGroup","largestBatchId"],eL=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],eO=[...eL,"documentOverlays"],eP=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],eq=[...eP,"indexConfiguration","indexState","indexEntries"];/**
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
 */class eU extends ee{constructor(e,t){super(),this.ue=e,this.currentSequenceNumber=t}}function eB(e,t){return ei.O(e.ue,t)}/**
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
 */function ez(e){let t=0;for(let n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function eG(e,t){for(let n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function eK(e){for(let t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}/**
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
 */class e${constructor(e,t){this.comparator=e,this.root=t||eQ.EMPTY}insert(e,t){return new e$(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,eQ.BLACK,null,null))}remove(e){return new e$(this.comparator,this.root.remove(e,this.comparator).copy(null,null,eQ.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){let n=this.comparator(e,t.key);if(0===n)return t.value;n<0?t=t.left:n>0&&(t=t.right)}return null}indexOf(e){let t=0,n=this.root;for(;!n.isEmpty();){let r=this.comparator(e,n.key);if(0===r)return t+n.left.size;r<0?n=n.left:(t+=n.left.size+1,n=n.right)}return -1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,n)=>(e(t,n),!1))}toString(){let e=[];return this.inorderTraversal((t,n)=>(e.push(`${t}:${n}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new ej(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new ej(this.root,e,this.comparator,!1)}getReverseIterator(){return new ej(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new ej(this.root,e,this.comparator,!0)}}class ej{constructor(e,t,n,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?n(e.key,t):1,t&&r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(0===i){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop(),t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;let e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class eQ{constructor(e,t,n,r,i){this.key=e,this.value=t,this.color=null!=n?n:eQ.RED,this.left=null!=r?r:eQ.EMPTY,this.right=null!=i?i:eQ.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,n,r,i){return new eQ(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=i?i:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let r=this,i=n(e,r.key);return(r=i<0?r.copy(null,null,null,r.left.insert(e,t,n),null):0===i?r.copy(null,t,null,null,null):r.copy(null,null,null,null,r.right.insert(e,t,n))).fixUp()}removeMin(){if(this.left.isEmpty())return eQ.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),(e=e.copy(null,null,null,e.left.removeMin(),null)).fixUp()}remove(e,t){let n,r=this;if(0>t(e,r.key))r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,t),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),0===t(e,r.key)){if(r.right.isEmpty())return eQ.EMPTY;n=r.right.min(),r=r.copy(n.key,n.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,t))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=(e=(e=e.copy(null,null,null,null,e.right.rotateRight())).rotateLeft()).colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=(e=e.rotateRight()).colorFlip()),e}rotateLeft(){let e=this.copy(null,null,eQ.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){let e=this.copy(null,null,eQ.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){let e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){let e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw _();let e=this.left.check();if(e!==this.right.check())throw _();return e+(this.isRed()?0:1)}}eQ.EMPTY=null,eQ.RED=!0,eQ.BLACK=!1,eQ.EMPTY=new class{constructor(){this.size=0}get key(){throw _()}get value(){throw _()}get color(){throw _()}get left(){throw _()}get right(){throw _()}copy(e,t,n,r,i){return this}insert(e,t,n){return new eQ(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class eW{constructor(e){this.comparator=e,this.data=new e$(this.comparator)}has(e){return null!==this.data.get(e)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,n)=>(e(t),!1))}forEachInRange(e,t){let n=this.data.getIteratorFrom(e[0]);for(;n.hasNext();){let r=n.getNext();if(this.comparator(r.key,e[1])>=0)return;t(r.key)}}forEachWhile(e,t){let n;for(n=void 0!==t?this.data.getIteratorFrom(t):this.data.getIterator();n.hasNext();)if(!e(n.getNext().key))return}firstAfterOrEqual(e){let t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new eY(this.data.getIterator())}getIteratorFrom(e){return new eY(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(e=>{t=t.add(e)}),t}isEqual(e){if(!(e instanceof eW)||this.size!==e.size)return!1;let t=this.data.getIterator(),n=e.data.getIterator();for(;t.hasNext();){let e=t.getNext().key,r=n.getNext().key;if(0!==this.comparator(e,r))return!1}return!0}toArray(){let e=[];return this.forEach(t=>{e.push(t)}),e}toString(){let e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){let t=new eW(this.comparator);return t.data=e,t}}class eY{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function eH(e){return e.hasNext()?e.getNext():void 0}/**
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
 */class eJ{constructor(e){this.fields=e,e.sort(z.comparator)}static empty(){return new eJ([])}unionWith(e){let t=new eW(z.comparator);for(let e of this.fields)t=t.add(e);for(let n of e)t=t.add(n);return new eJ(t.toArray())}covers(e){for(let t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return L(this.fields,e.fields,(e,t)=>e.isEqual(t))}}/**
 * @license
 * Copyright 2023 Google LLC
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
 */class eZ extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */function eX(){return"undefined"!=typeof atob}/**
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
 */class e0{constructor(e){this.binaryString=e}static fromBase64String(e){let t=function(e){try{return atob(e)}catch(e){throw"undefined"!=typeof DOMException&&e instanceof DOMException?new eZ("Invalid base64 string: "+e):e}}(e);return new e0(t)}static fromUint8Array(e){let t=function(e){let t="";for(let n=0;n<e.length;++n)t+=String.fromCharCode(e[n]);return t}(e);return new e0(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return btoa(this.binaryString)}toUint8Array(){return function(e){let t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return t}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return V(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}e0.EMPTY_BYTE_STRING=new e0("");let e1=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function e2(e){if(e||_(),"string"==typeof e){let t=0,n=e1.exec(e);if(n||_(),n[1]){let e=n[1];t=Number(e=(e+"000000000").substr(0,9))}let r=new Date(e);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:e5(e.seconds),nanos:e5(e.nanos)}}function e5(e){return"number"==typeof e?e:"string"==typeof e?Number(e):0}function e4(e){return"string"==typeof e?e0.fromBase64String(e):e0.fromUint8Array(e)}/**
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
 */function e8(e){var t,n;return"server_timestamp"===(null===(n=((null===(t=null==e?void 0:e.mapValue)||void 0===t?void 0:t.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function e3(e){let t=e.mapValue.fields.__previous_value__;return e8(t)?e3(t):t}function e9(e){let t=e2(e.mapValue.fields.__local_write_time__.timestampValue);return new O(t.seconds,t.nanos)}/**
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
 */class e6{constructor(e,t,n,r,i,s,a,o,l){this.databaseId=e,this.appId=t,this.persistenceKey=n,this.host=r,this.ssl=i,this.forceLongPolling=s,this.autoDetectLongPolling=a,this.longPollingOptions=o,this.useFetchStreams=l}}class e7{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new e7("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(e){return e instanceof e7&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */let te={mapValue:{fields:{__type__:{stringValue:"__max__"}}}},tt={nullValue:"NULL_VALUE"};function tn(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?e8(e)?4:tg(e)?9007199254740991:10:_()}function tr(e,t){if(e===t)return!0;let n=tn(e);if(n!==tn(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return e9(e).isEqual(e9(t));case 3:return function(e,t){if("string"==typeof e.timestampValue&&"string"==typeof t.timestampValue&&e.timestampValue.length===t.timestampValue.length)return e.timestampValue===t.timestampValue;let n=e2(e.timestampValue),r=e2(t.timestampValue);return n.seconds===r.seconds&&n.nanos===r.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return e4(e.bytesValue).isEqual(e4(t.bytesValue));case 7:return e.referenceValue===t.referenceValue;case 8:return e5(e.geoPointValue.latitude)===e5(t.geoPointValue.latitude)&&e5(e.geoPointValue.longitude)===e5(t.geoPointValue.longitude);case 2:return function(e,t){if("integerValue"in e&&"integerValue"in t)return e5(e.integerValue)===e5(t.integerValue);if("doubleValue"in e&&"doubleValue"in t){let n=e5(e.doubleValue),r=e5(t.doubleValue);return n===r?ep(n)===ep(r):isNaN(n)&&isNaN(r)}return!1}(e,t);case 9:return L(e.arrayValue.values||[],t.arrayValue.values||[],tr);case 10:return function(e,t){let n=e.mapValue.fields||{},r=t.mapValue.fields||{};if(ez(n)!==ez(r))return!1;for(let e in n)if(n.hasOwnProperty(e)&&(void 0===r[e]||!tr(n[e],r[e])))return!1;return!0}(e,t);default:return _()}}function ti(e,t){return void 0!==(e.values||[]).find(e=>tr(e,t))}function ts(e,t){if(e===t)return 0;let n=tn(e),r=tn(t);if(n!==r)return V(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return V(e.booleanValue,t.booleanValue);case 2:return function(e,t){let n=e5(e.integerValue||e.doubleValue),r=e5(t.integerValue||t.doubleValue);return n<r?-1:n>r?1:n===r?0:isNaN(n)?isNaN(r)?0:-1:1}(e,t);case 3:return ta(e.timestampValue,t.timestampValue);case 4:return ta(e9(e),e9(t));case 5:return V(e.stringValue,t.stringValue);case 6:return function(e,t){let n=e4(e),r=e4(t);return n.compareTo(r)}(e.bytesValue,t.bytesValue);case 7:return function(e,t){let n=e.split("/"),r=t.split("/");for(let e=0;e<n.length&&e<r.length;e++){let t=V(n[e],r[e]);if(0!==t)return t}return V(n.length,r.length)}(e.referenceValue,t.referenceValue);case 8:return function(e,t){let n=V(e5(e.latitude),e5(t.latitude));return 0!==n?n:V(e5(e.longitude),e5(t.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(e,t){let n=e.values||[],r=t.values||[];for(let e=0;e<n.length&&e<r.length;++e){let t=ts(n[e],r[e]);if(t)return t}return V(n.length,r.length)}(e.arrayValue,t.arrayValue);case 10:return function(e,t){if(e===te.mapValue&&t===te.mapValue)return 0;if(e===te.mapValue)return 1;if(t===te.mapValue)return -1;let n=e.fields||{},r=Object.keys(n),i=t.fields||{},s=Object.keys(i);r.sort(),s.sort();for(let e=0;e<r.length&&e<s.length;++e){let t=V(r[e],s[e]);if(0!==t)return t;let a=ts(n[r[e]],i[s[e]]);if(0!==a)return a}return V(r.length,s.length)}(e.mapValue,t.mapValue);default:throw _()}}function ta(e,t){if("string"==typeof e&&"string"==typeof t&&e.length===t.length)return V(e,t);let n=e2(e),r=e2(t),i=V(n.seconds,r.seconds);return 0!==i?i:V(n.nanos,r.nanos)}function to(e){var t,n;return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(e){let t=e2(e);return`time(${t.seconds},${t.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?e4(e.bytesValue).toBase64():"referenceValue"in e?(t=e.referenceValue,G.fromName(t).toString()):"geoPointValue"in e?(n=e.geoPointValue,`geo(${n.latitude},${n.longitude})`):"arrayValue"in e?function(e){let t="[",n=!0;for(let r of e.values||[])n?n=!1:t+=",",t+=to(r);return t+"]"}(e.arrayValue):"mapValue"in e?function(e){let t=Object.keys(e.fields||{}).sort(),n="{",r=!0;for(let i of t)r?r=!1:n+=",",n+=`${i}:${to(e.fields[i])}`;return n+"}"}(e.mapValue):_()}function tl(e,t){return{referenceValue:`projects/${e.projectId}/databases/${e.database}/documents/${t.path.canonicalString()}`}}function tu(e){return!!e&&"integerValue"in e}function tc(e){return!!e&&"arrayValue"in e}function th(e){return!!e&&"nullValue"in e}function td(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function tf(e){return!!e&&"mapValue"in e}function tm(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&"object"==typeof e.timestampValue)return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){let t={mapValue:{fields:{}}};return eG(e.mapValue.fields,(e,n)=>t.mapValue.fields[e]=tm(n)),t}if(e.arrayValue){let t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=tm(e.arrayValue.values[n]);return t}return Object.assign({},e)}function tg(e){return"__max__"===(((e.mapValue||{}).fields||{}).__type__||{}).stringValue}function tp(e,t){let n=ts(e.value,t.value);return 0!==n?n:e.inclusive&&!t.inclusive?-1:!e.inclusive&&t.inclusive?1:0}function ty(e,t){let n=ts(e.value,t.value);return 0!==n?n:e.inclusive&&!t.inclusive?1:!e.inclusive&&t.inclusive?-1:0}/**
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
 */class tw{constructor(e){this.value=e}static empty(){return new tw({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let n=0;n<e.length-1;++n)if(!tf(t=(t.mapValue.fields||{})[e.get(n)]))return null;return(t=(t.mapValue.fields||{})[e.lastSegment()])||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=tm(t)}setAll(e){let t=z.emptyPath(),n={},r=[];e.forEach((e,i)=>{if(!t.isImmediateParentOf(i)){let e=this.getFieldsMap(t);this.applyChanges(e,n,r),n={},r=[],t=i.popLast()}e?n[i.lastSegment()]=tm(e):r.push(i.lastSegment())});let i=this.getFieldsMap(t);this.applyChanges(i,n,r)}delete(e){let t=this.field(e.popLast());tf(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return tr(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let n=0;n<e.length;++n){let r=t.mapValue.fields[e.get(n)];tf(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},t.mapValue.fields[e.get(n)]=r),t=r}return t.mapValue.fields}applyChanges(e,t,n){for(let r of(eG(t,(t,n)=>e[t]=n),n))delete e[r]}clone(){return new tw(tm(this.value))}}/**
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
 */class tv{constructor(e,t,n,r,i,s,a){this.key=e,this.documentType=t,this.version=n,this.readTime=r,this.createTime=i,this.data=s,this.documentState=a}static newInvalidDocument(e){return new tv(e,0,P.min(),P.min(),P.min(),tw.empty(),0)}static newFoundDocument(e,t,n,r){return new tv(e,1,t,P.min(),n,r,0)}static newNoDocument(e,t){return new tv(e,2,t,P.min(),P.min(),tw.empty(),0)}static newUnknownDocument(e,t){return new tv(e,3,t,P.min(),P.min(),tw.empty(),2)}convertToFoundDocument(e,t){return this.createTime.isEqual(P.min())&&(2===this.documentType||0===this.documentType)&&(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=tw.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=tw.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=P.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(e){return e instanceof tv&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new tv(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class tI{constructor(e,t){this.position=e,this.inclusive=t}}function t_(e,t,n){let r=0;for(let i=0;i<e.position.length;i++){let s=t[i],a=e.position[i];if(r=s.field.isKeyField()?G.comparator(G.fromName(a.referenceValue),n.key):ts(a,n.data.field(s.field)),"desc"===s.dir&&(r*=-1),0!==r)break}return r}function tb(e,t){if(null===e)return null===t;if(null===t||e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!tr(e.position[n],t.position[n]))return!1;return!0}/**
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
 */class tE{constructor(e,t="asc"){this.field=e,this.dir=t}}/**
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
 */class tT{}class tS extends tT{constructor(e,t,n){super(),this.field=e,this.op=t,this.value=n}static create(e,t,n){return e.isKeyField()?"in"===t||"not-in"===t?this.createKeyFieldInFilter(e,t,n):new tR(e,t,n):"array-contains"===t?new tL(e,n):"in"===t?new tO(e,n):"not-in"===t?new tP(e,n):"array-contains-any"===t?new tq(e,n):new tS(e,t,n)}static createKeyFieldInFilter(e,t,n){return"in"===t?new tF(e,n):new tM(e,n)}matches(e){let t=e.data.field(this.field);return"!="===this.op?null!==t&&this.matchesComparison(ts(t,this.value)):null!==t&&tn(this.value)===tn(t)&&this.matchesComparison(ts(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return 0===e;case"!=":return 0!==e;case">":return e>0;case">=":return e>=0;default:return _()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class tx extends tT{constructor(e,t){super(),this.filters=e,this.op=t,this.ce=null}static create(e,t){return new tx(e,t)}matches(e){return tD(this)?void 0===this.filters.find(t=>!t.matches(e)):void 0!==this.filters.find(t=>t.matches(e))}getFlattenedFilters(){return null!==this.ce||(this.ce=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ce}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){let e=this.le(e=>e.isInequality());return null!==e?e.field:null}le(e){for(let t of this.getFlattenedFilters())if(e(t))return t;return null}}function tD(e){return"and"===e.op}function tA(e){return"or"===e.op}function tC(e){return tN(e)&&tD(e)}function tN(e){for(let t of e.filters)if(t instanceof tx)return!1;return!0}function tk(e,t){let n=e.filters.concat(t);return tx.create(n,e.op)}class tR extends tS{constructor(e,t,n){super(e,t,n),this.key=G.fromName(n.referenceValue)}matches(e){let t=G.comparator(e.key,this.key);return this.matchesComparison(t)}}class tF extends tS{constructor(e,t){super(e,"in",t),this.keys=tV("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class tM extends tS{constructor(e,t){super(e,"not-in",t),this.keys=tV("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function tV(e,t){var n;return((null===(n=t.arrayValue)||void 0===n?void 0:n.values)||[]).map(e=>G.fromName(e.referenceValue))}class tL extends tS{constructor(e,t){super(e,"array-contains",t)}matches(e){let t=e.data.field(this.field);return tc(t)&&ti(t.arrayValue,this.value)}}class tO extends tS{constructor(e,t){super(e,"in",t)}matches(e){let t=e.data.field(this.field);return null!==t&&ti(this.value.arrayValue,t)}}class tP extends tS{constructor(e,t){super(e,"not-in",t)}matches(e){if(ti(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;let t=e.data.field(this.field);return null!==t&&!ti(this.value.arrayValue,t)}}class tq extends tS{constructor(e,t){super(e,"array-contains-any",t)}matches(e){let t=e.data.field(this.field);return!(!tc(t)||!t.arrayValue.values)&&t.arrayValue.values.some(e=>ti(this.value.arrayValue,e))}}/**
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
 */class tU{constructor(e,t=null,n=[],r=[],i=null,s=null,a=null){this.path=e,this.collectionGroup=t,this.orderBy=n,this.filters=r,this.limit=i,this.startAt=s,this.endAt=a,this.he=null}}function tB(e,t=null,n=[],r=[],i=null,s=null,a=null){return new tU(e,t,n,r,i,s,a)}function tz(e){if(null===e.he){let t=e.path.canonicalString();null!==e.collectionGroup&&(t+="|cg:"+e.collectionGroup),t+="|f:"+e.filters.map(e=>(function e(t){if(t instanceof tS)return t.field.canonicalString()+t.op.toString()+to(t.value);if(tC(t))return t.filters.map(t=>e(t)).join(",");{let n=t.filters.map(t=>e(t)).join(",");return`${t.op}(${n})`}})(e)).join(",")+"|ob:"+e.orderBy.map(e=>e.field.canonicalString()+e.dir).join(","),eg(e.limit)||(t+="|l:"+e.limit),e.startAt&&(t+="|lb:"+(e.startAt.inclusive?"b:":"a:")+e.startAt.position.map(e=>to(e)).join(",")),e.endAt&&(t+="|ub:"+(e.endAt.inclusive?"a:":"b:")+e.endAt.position.map(e=>to(e)).join(",")),e.he=t}return e.he}function tG(e,t){if(e.limit!==t.limit||e.orderBy.length!==t.orderBy.length)return!1;for(let i=0;i<e.orderBy.length;i++){var n,r;if(n=e.orderBy[i],r=t.orderBy[i],!(n.dir===r.dir&&n.field.isEqual(r.field)))return!1}if(e.filters.length!==t.filters.length)return!1;for(let n=0;n<e.filters.length;n++)if(!function e(t,n){return t instanceof tS?n instanceof tS&&t.op===n.op&&t.field.isEqual(n.field)&&tr(t.value,n.value):t instanceof tx?n instanceof tx&&t.op===n.op&&t.filters.length===n.filters.length&&t.filters.reduce((t,r,i)=>t&&e(r,n.filters[i]),!0):void _()}(e.filters[n],t.filters[n]))return!1;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!tb(e.startAt,t.startAt)&&tb(e.endAt,t.endAt)}function tK(e){return G.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}function t$(e,t){return e.filters.filter(e=>e instanceof tS&&e.field.isEqual(t))}function tj(e,t,n){let r=tt,i=!0;for(let n of t$(e,t)){let e=tt,t=!0;switch(n.op){case"<":case"<=":var s;e="nullValue"in(s=n.value)?tt:"booleanValue"in s?{booleanValue:!1}:"integerValue"in s||"doubleValue"in s?{doubleValue:NaN}:"timestampValue"in s?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in s?{stringValue:""}:"bytesValue"in s?{bytesValue:""}:"referenceValue"in s?tl(e7.empty(),G.empty()):"geoPointValue"in s?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in s?{arrayValue:{}}:"mapValue"in s?{mapValue:{}}:_();break;case"==":case"in":case">=":e=n.value;break;case">":e=n.value,t=!1;break;case"!=":case"not-in":e=tt}0>tp({value:r,inclusive:i},{value:e,inclusive:t})&&(r=e,i=t)}if(null!==n){for(let s=0;s<e.orderBy.length;++s)if(e.orderBy[s].field.isEqual(t)){let e=n.position[s];0>tp({value:r,inclusive:i},{value:e,inclusive:n.inclusive})&&(r=e,i=n.inclusive);break}}return{value:r,inclusive:i}}function tQ(e,t,n){let r=te,i=!0;for(let n of t$(e,t)){let e=te,t=!0;switch(n.op){case">=":case">":var s;e="nullValue"in(s=n.value)?{booleanValue:!1}:"booleanValue"in s?{doubleValue:NaN}:"integerValue"in s||"doubleValue"in s?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in s?{stringValue:""}:"stringValue"in s?{bytesValue:""}:"bytesValue"in s?tl(e7.empty(),G.empty()):"referenceValue"in s?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in s?{arrayValue:{}}:"arrayValue"in s?{mapValue:{}}:"mapValue"in s?te:_(),t=!1;break;case"==":case"in":case"<=":e=n.value;break;case"<":e=n.value,t=!1;break;case"!=":case"not-in":e=te}ty({value:r,inclusive:i},{value:e,inclusive:t})>0&&(r=e,i=t)}if(null!==n){for(let s=0;s<e.orderBy.length;++s)if(e.orderBy[s].field.isEqual(t)){let e=n.position[s];ty({value:r,inclusive:i},{value:e,inclusive:n.inclusive})>0&&(r=e,i=n.inclusive);break}}return{value:r,inclusive:i}}/**
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
 */class tW{constructor(e,t=null,n=[],r=[],i=null,s="F",a=null,o=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=n,this.filters=r,this.limit=i,this.limitType=s,this.startAt=a,this.endAt=o,this.Pe=null,this.Ie=null,this.Te=null,this.startAt,this.endAt}}function tY(e){return new tW(e)}function tH(e){return 0===e.filters.length&&null===e.limit&&null==e.startAt&&null==e.endAt&&(0===e.explicitOrderBy.length||1===e.explicitOrderBy.length&&e.explicitOrderBy[0].field.isKeyField())}function tJ(e){return e.explicitOrderBy.length>0?e.explicitOrderBy[0].field:null}function tZ(e){for(let t of e.filters){let e=t.getFirstInequalityField();if(null!==e)return e}return null}function tX(e){return null!==e.collectionGroup}function t0(e){if(null===e.Pe){e.Pe=[];let t=tZ(e),n=tJ(e);if(null!==t&&null===n)t.isKeyField()||e.Pe.push(new tE(t)),e.Pe.push(new tE(z.keyField(),"asc"));else{let t=!1;for(let n of e.explicitOrderBy)e.Pe.push(n),n.field.isKeyField()&&(t=!0);if(!t){let t=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.Pe.push(new tE(z.keyField(),t))}}}return e.Pe}function t1(e){return e.Ie||(e.Ie=function(e,t){if("F"===e.limitType)return tB(e.path,e.collectionGroup,t,e.filters,e.limit,e.startAt,e.endAt);{t=t.map(e=>{let t="desc"===e.dir?"asc":"desc";return new tE(e.field,t)});let n=e.endAt?new tI(e.endAt.position,e.endAt.inclusive):null,r=e.startAt?new tI(e.startAt.position,e.startAt.inclusive):null;return tB(e.path,e.collectionGroup,t,e.filters,e.limit,n,r)}}(e,t0(e))),e.Ie}function t2(e,t){t.getFirstInequalityField(),tZ(e);let n=e.filters.concat([t]);return new tW(e.path,e.collectionGroup,e.explicitOrderBy.slice(),n,e.limit,e.limitType,e.startAt,e.endAt)}function t5(e,t,n){return new tW(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function t4(e,t){return tG(t1(e),t1(t))&&e.limitType===t.limitType}function t8(e){return`${tz(t1(e))}|lt:${e.limitType}`}function t3(e){var t;let n;return`Query(target=${n=(t=t1(e)).path.canonicalString(),null!==t.collectionGroup&&(n+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(n+=`, filters: [${t.filters.map(e=>(function e(t){return t instanceof tS?`${t.field.canonicalString()} ${t.op} ${to(t.value)}`:t instanceof tx?t.op.toString()+" {"+t.getFilters().map(e).join(" ,")+"}":"Filter"})(e)).join(", ")}]`),eg(t.limit)||(n+=", limit: "+t.limit),t.orderBy.length>0&&(n+=`, orderBy: [${t.orderBy.map(e=>`${e.field.canonicalString()} (${e.dir})`).join(", ")}]`),t.startAt&&(n+=", startAt: "+(t.startAt.inclusive?"b:":"a:")+t.startAt.position.map(e=>to(e)).join(",")),t.endAt&&(n+=", endAt: "+(t.endAt.inclusive?"a:":"b:")+t.endAt.position.map(e=>to(e)).join(",")),`Target(${n})`}; limitType=${e.limitType})`}function t9(e,t){return t.isFoundDocument()&&function(e,t){let n=t.key.path;return null!==e.collectionGroup?t.key.hasCollectionId(e.collectionGroup)&&e.path.isPrefixOf(n):G.isDocumentKey(e.path)?e.path.isEqual(n):e.path.isImmediateParentOf(n)}(e,t)&&function(e,t){for(let n of t0(e))if(!n.field.isKeyField()&&null===t.data.field(n.field))return!1;return!0}(e,t)&&function(e,t){for(let n of e.filters)if(!n.matches(t))return!1;return!0}(e,t)&&(!e.startAt||!!function(e,t,n){let r=t_(e,t,n);return e.inclusive?r<=0:r<0}(e.startAt,t0(e),t))&&(!e.endAt||!!function(e,t,n){let r=t_(e,t,n);return e.inclusive?r>=0:r>0}(e.endAt,t0(e),t))}function t6(e){return e.collectionGroup||(e.path.length%2==1?e.path.lastSegment():e.path.get(e.path.length-2))}function t7(e){return(t,n)=>{let r=!1;for(let i of t0(e)){let e=function(e,t,n){let r=e.field.isKeyField()?G.comparator(t.key,n.key):function(e,t,n){let r=t.data.field(e),i=n.data.field(e);return null!==r&&null!==i?ts(r,i):_()}(e.field,t,n);switch(e.dir){case"asc":return r;case"desc":return -1*r;default:return _()}}(i,t,n);if(0!==e)return e;r=r||i.field.isKeyField()}return 0}}/**
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
 */class ne{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){let t=this.mapKeyFn(e),n=this.inner[t];if(void 0!==n){for(let[t,r]of n)if(this.equalsFn(t,e))return r}}has(e){return void 0!==this.get(e)}set(e,t){let n=this.mapKeyFn(e),r=this.inner[n];if(void 0===r)return this.inner[n]=[[e,t]],void this.innerSize++;for(let n=0;n<r.length;n++)if(this.equalsFn(r[n][0],e))return void(r[n]=[e,t]);r.push([e,t]),this.innerSize++}delete(e){let t=this.mapKeyFn(e),n=this.inner[t];if(void 0===n)return!1;for(let r=0;r<n.length;r++)if(this.equalsFn(n[r][0],e))return 1===n.length?delete this.inner[t]:n.splice(r,1),this.innerSize--,!0;return!1}forEach(e){eG(this.inner,(t,n)=>{for(let[t,r]of n)e(t,r)})}isEmpty(){return eK(this.inner)}size(){return this.innerSize}}/**
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
 */let nt=new e$(G.comparator),nn=new e$(G.comparator);function nr(...e){let t=nn;for(let n of e)t=t.insert(n.key,n);return t}function ni(e){let t=nn;return e.forEach((e,n)=>t=t.insert(e,n.overlayedDocument)),t}function ns(){return new ne(e=>e.toString(),(e,t)=>e.isEqual(t))}let na=new e$(G.comparator),no=new eW(G.comparator);function nl(...e){let t=no;for(let n of e)t=t.add(n);return t}let nu=new eW(V);/**
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
 */function nc(e,t){if(e.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ep(t)?"-0":t}}function nh(e){return{integerValue:""+e}}function nd(e,t){return ey(t)?nh(t):nc(e,t)}/**
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
 */class nf{constructor(){this._=void 0}}function nm(e,t){return e instanceof nI?tu(t)||t&&"doubleValue"in t?t:{integerValue:0}:null}class ng extends nf{}class np extends nf{constructor(e){super(),this.elements=e}}function ny(e,t){let n=nb(t);for(let t of e.elements)n.some(e=>tr(e,t))||n.push(t);return{arrayValue:{values:n}}}class nw extends nf{constructor(e){super(),this.elements=e}}function nv(e,t){let n=nb(t);for(let t of e.elements)n=n.filter(e=>!tr(e,t));return{arrayValue:{values:n}}}class nI extends nf{constructor(e,t){super(),this.serializer=e,this.Ee=t}}function n_(e){return e5(e.integerValue||e.doubleValue)}function nb(e){return tc(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}/**
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
 */class nE{constructor(e,t){this.field=e,this.transform=t}}class nT{constructor(e,t){this.version=e,this.transformResults=t}}class nS{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new nS}static exists(e){return new nS(void 0,e)}static updateTime(e){return new nS(e)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function nx(e,t){return void 0!==e.updateTime?t.isFoundDocument()&&t.version.isEqual(e.updateTime):void 0===e.exists||e.exists===t.isFoundDocument()}class nD{}function nA(e,t){if(!e.hasLocalMutations||t&&0===t.fields.length)return null;if(null===t)return e.isNoDocument()?new nL(e.key,nS.none()):new nk(e.key,e.data,nS.none());{let n=e.data,r=tw.empty(),i=new eW(z.comparator);for(let e of t.fields)if(!i.has(e)){let t=n.field(e);null===t&&e.length>1&&(e=e.popLast(),t=n.field(e)),null===t?r.delete(e):r.set(e,t),i=i.add(e)}return new nR(e.key,r,new eJ(i.toArray()),nS.none())}}function nC(e,t,n,r){return e instanceof nk?function(e,t,n,r){if(!nx(e.precondition,t))return n;let i=e.value.clone(),s=nV(e.fieldTransforms,r,t);return i.setAll(s),t.convertToFoundDocument(t.version,i).setHasLocalMutations(),null}(e,t,n,r):e instanceof nR?function(e,t,n,r){if(!nx(e.precondition,t))return n;let i=nV(e.fieldTransforms,r,t),s=t.data;return(s.setAll(nF(e)),s.setAll(i),t.convertToFoundDocument(t.version,s).setHasLocalMutations(),null===n)?null:n.unionWith(e.fieldMask.fields).unionWith(e.fieldTransforms.map(e=>e.field))}(e,t,n,r):nx(e.precondition,t)?(t.convertToNoDocument(t.version).setHasLocalMutations(),null):n}function nN(e,t){var n,r;return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&(n=e.fieldTransforms,r=t.fieldTransforms,!!(void 0===n&&void 0===r||!(!n||!r)&&L(n,r,(e,t)=>{var n,r;return e.field.isEqual(t.field)&&(n=e.transform,r=t.transform,n instanceof np&&r instanceof np||n instanceof nw&&r instanceof nw?L(n.elements,r.elements,tr):n instanceof nI&&r instanceof nI?tr(n.Ee,r.Ee):n instanceof ng&&r instanceof ng)})))&&(0===e.type?e.value.isEqual(t.value):1!==e.type||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}class nk extends nD{constructor(e,t,n,r=[]){super(),this.key=e,this.value=t,this.precondition=n,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class nR extends nD{constructor(e,t,n,r,i=[]){super(),this.key=e,this.data=t,this.fieldMask=n,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function nF(e){let t=new Map;return e.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){let r=e.data.field(n);t.set(n,r)}}),t}function nM(e,t,n){var r;let i=new Map;e.length===n.length||_();for(let s=0;s<n.length;s++){let a=e[s],o=a.transform,l=t.data.field(a.field);i.set(a.field,(r=n[s],o instanceof np?ny(o,l):o instanceof nw?nv(o,l):r))}return i}function nV(e,t,n){let r=new Map;for(let i of e){let e=i.transform,s=n.data.field(i.field);r.set(i.field,e instanceof ng?function(e,t){let n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:e.seconds,nanos:e.nanoseconds}}}};return t&&e8(t)&&(t=e3(t)),t&&(n.fields.__previous_value__=t),{mapValue:n}}(t,s):e instanceof np?ny(e,s):e instanceof nw?nv(e,s):function(e,t){let n=nm(e,t),r=n_(n)+n_(e.Ee);return tu(n)&&tu(e.Ee)?nh(r):nc(e.serializer,r)}(e,s))}return r}class nL extends nD{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class nO extends nD{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class nP{constructor(e,t,n,r){this.batchId=e,this.localWriteTime=t,this.baseMutations=n,this.mutations=r}applyToRemoteDocument(e,t){let n=t.mutationResults;for(let t=0;t<this.mutations.length;t++){let i=this.mutations[t];if(i.key.isEqual(e.key)){var r;r=n[t],i instanceof nk?function(e,t,n){let r=e.value.clone(),i=nM(e.fieldTransforms,t,n.transformResults);r.setAll(i),t.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(i,e,r):i instanceof nR?function(e,t,n){if(!nx(e.precondition,t))return void t.convertToUnknownDocument(n.version);let r=nM(e.fieldTransforms,t,n.transformResults),i=t.data;i.setAll(nF(e)),i.setAll(r),t.convertToFoundDocument(n.version,i).setHasCommittedMutations()}(i,e,r):function(e,t,n){t.convertToNoDocument(n.version).setHasCommittedMutations()}(0,e,r)}}}applyToLocalView(e,t){for(let n of this.baseMutations)n.key.isEqual(e.key)&&(t=nC(n,e,t,this.localWriteTime));for(let n of this.mutations)n.key.isEqual(e.key)&&(t=nC(n,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){let n=ns();return this.mutations.forEach(r=>{let i=e.get(r.key),s=i.overlayedDocument,a=this.applyToLocalView(s,i.mutatedFields);a=t.has(r.key)?null:a;let o=nA(s,a);null!==o&&n.set(r.key,o),s.isValidDocument()||s.convertToNoDocument(P.min())}),n}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),nl())}isEqual(e){return this.batchId===e.batchId&&L(this.mutations,e.mutations,(e,t)=>nN(e,t))&&L(this.baseMutations,e.baseMutations,(e,t)=>nN(e,t))}}class nq{constructor(e,t,n,r){this.batch=e,this.commitVersion=t,this.mutationResults=n,this.docVersions=r}static from(e,t,n){e.mutations.length===n.length||_();let r=na,i=e.mutations;for(let e=0;e<i.length;e++)r=r.insert(i[e].key,n[e].version);return new nq(e,t,n,r)}}/**
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
 */class nU{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return null!==e&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class nB{constructor(e,t){this.count=e,this.unchangedNames=t}}function nz(e){switch(e){default:return _();case E.CANCELLED:case E.UNKNOWN:case E.DEADLINE_EXCEEDED:case E.RESOURCE_EXHAUSTED:case E.INTERNAL:case E.UNAVAILABLE:case E.UNAUTHENTICATED:return!1;case E.INVALID_ARGUMENT:case E.NOT_FOUND:case E.ALREADY_EXISTS:case E.PERMISSION_DENIED:case E.FAILED_PRECONDITION:case E.ABORTED:case E.OUT_OF_RANGE:case E.UNIMPLEMENTED:case E.DATA_LOSS:return!0}}function nG(e){if(void 0===e)return w("GRPC error has no .code"),E.UNKNOWN;switch(e){case r.OK:return E.OK;case r.CANCELLED:return E.CANCELLED;case r.UNKNOWN:return E.UNKNOWN;case r.DEADLINE_EXCEEDED:return E.DEADLINE_EXCEEDED;case r.RESOURCE_EXHAUSTED:return E.RESOURCE_EXHAUSTED;case r.INTERNAL:return E.INTERNAL;case r.UNAVAILABLE:return E.UNAVAILABLE;case r.UNAUTHENTICATED:return E.UNAUTHENTICATED;case r.INVALID_ARGUMENT:return E.INVALID_ARGUMENT;case r.NOT_FOUND:return E.NOT_FOUND;case r.ALREADY_EXISTS:return E.ALREADY_EXISTS;case r.PERMISSION_DENIED:return E.PERMISSION_DENIED;case r.FAILED_PRECONDITION:return E.FAILED_PRECONDITION;case r.ABORTED:return E.ABORTED;case r.OUT_OF_RANGE:return E.OUT_OF_RANGE;case r.UNIMPLEMENTED:return E.UNIMPLEMENTED;case r.DATA_LOSS:return E.DATA_LOSS;default:return _()}}/**
 * @license
 * Copyright 2023 Google LLC
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
 */function nK(){return new TextEncoder}(i=r||(r={}))[i.OK=0]="OK",i[i.CANCELLED=1]="CANCELLED",i[i.UNKNOWN=2]="UNKNOWN",i[i.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",i[i.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",i[i.NOT_FOUND=5]="NOT_FOUND",i[i.ALREADY_EXISTS=6]="ALREADY_EXISTS",i[i.PERMISSION_DENIED=7]="PERMISSION_DENIED",i[i.UNAUTHENTICATED=16]="UNAUTHENTICATED",i[i.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",i[i.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",i[i.ABORTED=10]="ABORTED",i[i.OUT_OF_RANGE=11]="OUT_OF_RANGE",i[i.UNIMPLEMENTED=12]="UNIMPLEMENTED",i[i.INTERNAL=13]="INTERNAL",i[i.UNAVAILABLE=14]="UNAVAILABLE",i[i.DATA_LOSS=15]="DATA_LOSS";/**
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
 */let n$=new u.z8([4294967295,4294967295],0);function nj(e){let t=nK().encode(e),n=new u.V8;return n.update(t),new Uint8Array(n.digest())}function nQ(e){let t=new DataView(e.buffer),n=t.getUint32(0,!0),r=t.getUint32(4,!0),i=t.getUint32(8,!0),s=t.getUint32(12,!0);return[new u.z8([n,r],0),new u.z8([i,s],0)]}class nW{constructor(e,t,n){if(this.bitmap=e,this.padding=t,this.hashCount=n,t<0||t>=8)throw new nY(`Invalid padding: ${t}`);if(n<0||e.length>0&&0===this.hashCount)throw new nY(`Invalid hash count: ${n}`);if(0===e.length&&0!==t)throw new nY(`Invalid padding when bitmap length is 0: ${t}`);this.Ae=8*e.length-t,this.Re=u.z8.fromNumber(this.Ae)}Ve(e,t,n){let r=e.add(t.multiply(u.z8.fromNumber(n)));return 1===r.compare(n$)&&(r=new u.z8([r.getBits(0),r.getBits(1)],0)),r.modulo(this.Re).toNumber()}me(e){return 0!=(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(0===this.Ae)return!1;let t=nj(e),[n,r]=nQ(t);for(let e=0;e<this.hashCount;e++){let t=this.Ve(n,r,e);if(!this.me(t))return!1}return!0}static create(e,t,n){let r=new Uint8Array(Math.ceil(e/8)),i=new nW(r,e%8==0?0:8-e%8,t);return n.forEach(e=>i.insert(e)),i}insert(e){if(0===this.Ae)return;let t=nj(e),[n,r]=nQ(t);for(let e=0;e<this.hashCount;e++){let t=this.Ve(n,r,e);this.fe(t)}}fe(e){this.bitmap[Math.floor(e/8)]|=1<<e%8}}class nY extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class nH{constructor(e,t,n,r,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=n,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t,n){let r=new Map;return r.set(e,nJ.createSynthesizedTargetChangeForCurrentChange(e,t,n)),new nH(P.min(),r,new e$(V),nt,nl())}}class nJ{constructor(e,t,n,r,i){this.resumeToken=e,this.current=t,this.addedDocuments=n,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,n){return new nJ(n,t,nl(),nl(),nl())}}/**
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
 */class nZ{constructor(e,t,n,r){this.ge=e,this.removedTargetIds=t,this.key=n,this.pe=r}}class nX{constructor(e,t){this.targetId=e,this.ye=t}}class n0{constructor(e,t,n=e0.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=t,this.resumeToken=n,this.cause=r}}class n1{constructor(){this.we=0,this.Se=n4(),this.be=e0.EMPTY_BYTE_STRING,this.De=!1,this.ve=!0}get current(){return this.De}get resumeToken(){return this.be}get Ce(){return 0!==this.we}get Fe(){return this.ve}Me(e){e.approximateByteSize()>0&&(this.ve=!0,this.be=e)}xe(){let e=nl(),t=nl(),n=nl();return this.Se.forEach((r,i)=>{switch(i){case 0:e=e.add(r);break;case 2:t=t.add(r);break;case 1:n=n.add(r);break;default:_()}}),new nJ(this.be,this.De,e,t,n)}Oe(){this.ve=!1,this.Se=n4()}Ne(e,t){this.ve=!0,this.Se=this.Se.insert(e,t)}Be(e){this.ve=!0,this.Se=this.Se.remove(e)}Le(){this.we+=1}ke(){this.we-=1}qe(){this.ve=!0,this.De=!0}}class n2{constructor(e){this.Qe=e,this.Ke=new Map,this.$e=nt,this.Ue=n5(),this.We=new e$(V)}Ge(e){for(let t of e.ge)e.pe&&e.pe.isFoundDocument()?this.ze(t,e.pe):this.je(t,e.key,e.pe);for(let t of e.removedTargetIds)this.je(t,e.key,e.pe)}He(e){this.forEachTarget(e,t=>{let n=this.Je(t);switch(e.state){case 0:this.Ye(t)&&n.Me(e.resumeToken);break;case 1:n.ke(),n.Ce||n.Oe(),n.Me(e.resumeToken);break;case 2:n.ke(),n.Ce||this.removeTarget(t);break;case 3:this.Ye(t)&&(n.qe(),n.Me(e.resumeToken));break;case 4:this.Ye(t)&&(this.Ze(t),n.Me(e.resumeToken));break;default:_()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Ke.forEach((e,n)=>{this.Ye(n)&&t(n)})}Xe(e){let t=e.targetId,n=e.ye.count,r=this.et(t);if(r){let i=r.target;if(tK(i)){if(0===n){let e=new G(i.path);this.je(t,e,tv.newNoDocument(e,P.min()))}else 1===n||_()}else{let r=this.tt(t);if(r!==n){let n=this.nt(e),i=n?this.rt(n,e,r):1;0!==i&&(this.Ze(t),this.We=this.We.insert(t,2===i?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch"))}}}}nt(e){let t,n;let r=e.ye.unchangedNames;if(!r||!r.bits)return null;let{bits:{bitmap:i="",padding:s=0},hashCount:a=0}=r;try{t=e4(i).toUint8Array()}catch(e){if(e instanceof eZ)return v("Decoding the base64 bloom filter in existence filter failed ("+e.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw e}try{n=new nW(t,s,a)}catch(e){return v(e instanceof nY?"BloomFilter error: ":"Applying bloom filter failed: ",e),null}return 0===n.Ae?null:n}rt(e,t,n){return t.ye.count===n-this.ot(e,t.targetId)?0:2}ot(e,t){let n=this.Qe.getRemoteKeysForTarget(t),r=0;return n.forEach(n=>{let i=this.Qe.st(),s=`projects/${i.projectId}/databases/${i.database}/documents/${n.path.canonicalString()}`;e.mightContain(s)||(this.je(t,n,null),r++)}),r}_t(e){let t=new Map;this.Ke.forEach((n,r)=>{let i=this.et(r);if(i){if(n.current&&tK(i.target)){let t=new G(i.target.path);null!==this.$e.get(t)||this.ut(r,t)||this.je(r,t,tv.newNoDocument(t,e))}n.Fe&&(t.set(r,n.xe()),n.Oe())}});let n=nl();this.Ue.forEach((e,t)=>{let r=!0;t.forEachWhile(e=>{let t=this.et(e);return!t||"TargetPurposeLimboResolution"===t.purpose||(r=!1,!1)}),r&&(n=n.add(e))}),this.$e.forEach((t,n)=>n.setReadTime(e));let r=new nH(e,t,this.We,this.$e,n);return this.$e=nt,this.Ue=n5(),this.We=new e$(V),r}ze(e,t){if(!this.Ye(e))return;let n=this.ut(e,t.key)?2:0;this.Je(e).Ne(t.key,n),this.$e=this.$e.insert(t.key,t),this.Ue=this.Ue.insert(t.key,this.ct(t.key).add(e))}je(e,t,n){if(!this.Ye(e))return;let r=this.Je(e);this.ut(e,t)?r.Ne(t,1):r.Be(t),this.Ue=this.Ue.insert(t,this.ct(t).delete(e)),n&&(this.$e=this.$e.insert(t,n))}removeTarget(e){this.Ke.delete(e)}tt(e){let t=this.Je(e).xe();return this.Qe.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Le(e){this.Je(e).Le()}Je(e){let t=this.Ke.get(e);return t||(t=new n1,this.Ke.set(e,t)),t}ct(e){let t=this.Ue.get(e);return t||(t=new eW(V),this.Ue=this.Ue.insert(e,t)),t}Ye(e){let t=null!==this.et(e);return t||y("WatchChangeAggregator","Detected inactive target",e),t}et(e){let t=this.Ke.get(e);return t&&t.Ce?null:this.Qe.lt(e)}Ze(e){this.Ke.set(e,new n1),this.Qe.getRemoteKeysForTarget(e).forEach(t=>{this.je(e,t,null)})}ut(e,t){return this.Qe.getRemoteKeysForTarget(e).has(t)}}function n5(){return new e$(G.comparator)}function n4(){return new e$(G.comparator)}let n8={asc:"ASCENDING",desc:"DESCENDING"},n3={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},n9={and:"AND",or:"OR"};class n6{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function n7(e,t){return e.useProto3Json||eg(t)?t:{value:t}}function re(e,t){return e.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function rt(e,t){return e.useProto3Json?t.toBase64():t.toUint8Array()}function rn(e){return e||_(),P.fromTimestamp(function(e){let t=e2(e);return new O(t.seconds,t.nanos)}(e))}function rr(e,t){return new U(["projects",e.projectId,"databases",e.database]).child("documents").child(t).canonicalString()}function ri(e){let t=U.fromString(e);return rI(t)||_(),t}function rs(e,t){return rr(e.databaseId,t.path)}function ra(e,t){let n=ri(t);if(n.get(1)!==e.databaseId.projectId)throw new T(E.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new T(E.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new G(rc(n))}function ro(e,t){return rr(e.databaseId,t)}function rl(e){let t=ri(e);return 4===t.length?U.emptyPath():rc(t)}function ru(e){return new U(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function rc(e){return e.length>4&&"documents"===e.get(4)||_(),e.popFirst(5)}function rh(e,t,n){return{name:rs(e,t),fields:n.value.mapValue.fields}}function rd(e,t,n){let r=ra(e,t.name),i=rn(t.updateTime),s=t.createTime?rn(t.createTime):P.min(),a=new tw({mapValue:{fields:t.fields}}),o=tv.newFoundDocument(r,i,s,a);return n&&o.setHasCommittedMutations(),n?o.setHasCommittedMutations():o}function rf(e,t){var n;let r;if(t instanceof nk)r={update:rh(e,t.key,t.value)};else if(t instanceof nL)r={delete:rs(e,t.key)};else if(t instanceof nR)r={update:rh(e,t.key,t.data),updateMask:function(e){let t=[];return e.fields.forEach(e=>t.push(e.canonicalString())),{fieldPaths:t}}(t.fieldMask)};else{if(!(t instanceof nO))return _();r={verify:rs(e,t.key)}}return t.fieldTransforms.length>0&&(r.updateTransforms=t.fieldTransforms.map(e=>(function(e,t){let n=t.transform;if(n instanceof ng)return{fieldPath:t.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof np)return{fieldPath:t.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof nw)return{fieldPath:t.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof nI)return{fieldPath:t.field.canonicalString(),increment:n.Ee};throw _()})(0,e))),t.precondition.isNone||(r.currentDocument=void 0!==(n=t.precondition).updateTime?{updateTime:re(e,n.updateTime.toTimestamp())}:void 0!==n.exists?{exists:n.exists}:_()),r}function rm(e,t){var n;let r=t.currentDocument?void 0!==(n=t.currentDocument).updateTime?nS.updateTime(rn(n.updateTime)):void 0!==n.exists?nS.exists(n.exists):nS.none():nS.none(),i=t.updateTransforms?t.updateTransforms.map(t=>(function(e,t){let n=null;if("setToServerValue"in t)"REQUEST_TIME"===t.setToServerValue||_(),n=new ng;else if("appendMissingElements"in t){let e=t.appendMissingElements.values||[];n=new np(e)}else if("removeAllFromArray"in t){let e=t.removeAllFromArray.values||[];n=new nw(e)}else"increment"in t?n=new nI(e,t.increment):_();let r=z.fromServerFormat(t.fieldPath);return new nE(r,n)})(e,t)):[];if(t.update){t.update.name;let n=ra(e,t.update.name),s=new tw({mapValue:{fields:t.update.fields}});if(t.updateMask){let e=function(e){let t=e.fieldPaths||[];return new eJ(t.map(e=>z.fromServerFormat(e)))}(t.updateMask);return new nR(n,s,e,r,i)}return new nk(n,s,r,i)}if(t.delete){let n=ra(e,t.delete);return new nL(n,r)}if(t.verify){let n=ra(e,t.verify);return new nO(n,r)}return _()}function rg(e,t){return{documents:[ro(e,t.path)]}}function rp(e,t){var n,r;let i={structuredQuery:{}},s=t.path;null!==t.collectionGroup?(i.parent=ro(e,s),i.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(i.parent=ro(e,s.popLast()),i.structuredQuery.from=[{collectionId:s.lastSegment()}]);let a=function(e){if(0!==e.length)return function e(t){return t instanceof tS?function(e){if("=="===e.op){if(td(e.value))return{unaryFilter:{field:rw(e.field),op:"IS_NAN"}};if(th(e.value))return{unaryFilter:{field:rw(e.field),op:"IS_NULL"}}}else if("!="===e.op){if(td(e.value))return{unaryFilter:{field:rw(e.field),op:"IS_NOT_NAN"}};if(th(e.value))return{unaryFilter:{field:rw(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:rw(e.field),op:n3[e.op],value:e.value}}}(t):t instanceof tx?function(t){let n=t.getFilters().map(t=>e(t));return 1===n.length?n[0]:{compositeFilter:{op:n9[t.op],filters:n}}}(t):_()}(tx.create(e,"and"))}(t.filters);a&&(i.structuredQuery.where=a);let o=function(e){if(0!==e.length)return e.map(e=>({field:rw(e.field),direction:n8[e.dir]}))}(t.orderBy);o&&(i.structuredQuery.orderBy=o);let l=n7(e,t.limit);return null!==l&&(i.structuredQuery.limit=l),t.startAt&&(i.structuredQuery.startAt={before:(n=t.startAt).inclusive,values:n.position}),t.endAt&&(i.structuredQuery.endAt={before:!(r=t.endAt).inclusive,values:r.position}),i}function ry(e){var t,n,r,i,s,a,o,l;let u,c=rl(e.parent),h=e.structuredQuery,d=h.from?h.from.length:0,f=null;if(d>0){1===d||_();let e=h.from[0];e.allDescendants?f=e.collectionId:c=c.child(e.collectionId)}let m=[];h.where&&(m=function(e){let t=function e(t){return void 0!==t.unaryFilter?function(e){switch(e.unaryFilter.op){case"IS_NAN":let t=rv(e.unaryFilter.field);return tS.create(t,"==",{doubleValue:NaN});case"IS_NULL":let n=rv(e.unaryFilter.field);return tS.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":let r=rv(e.unaryFilter.field);return tS.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":let i=rv(e.unaryFilter.field);return tS.create(i,"!=",{nullValue:"NULL_VALUE"});default:return _()}}(t):void 0!==t.fieldFilter?tS.create(rv(t.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return _()}}(t.fieldFilter.op),t.fieldFilter.value):void 0!==t.compositeFilter?tx.create(t.compositeFilter.filters.map(t=>e(t)),function(e){switch(e){case"AND":return"and";case"OR":return"or";default:return _()}}(t.compositeFilter.op)):_()}(e);return t instanceof tx&&tC(t)?t.getFilters():[t]}(h.where));let g=[];h.orderBy&&(g=h.orderBy.map(e=>new tE(rv(e.field),function(e){switch(e){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(e.direction))));let p=null;h.limit&&(p=eg(u="object"==typeof(t=h.limit)?t.value:t)?null:u);let y=null;h.startAt&&(y=function(e){let t=!!e.before,n=e.values||[];return new tI(n,t)}(h.startAt));let w=null;return h.endAt&&(w=function(e){let t=!e.before,n=e.values||[];return new tI(n,t)}(h.endAt)),n=c,r=f,i=g,s=m,a=p,o=y,l=w,new tW(n,r,i,s,a,"F",o,l)}function rw(e){return{fieldPath:e.canonicalString()}}function rv(e){return z.fromServerFormat(e.fieldPath)}function rI(e){return e.length>=4&&"projects"===e.get(0)&&"databases"===e.get(2)}/**
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
 */class r_{constructor(e,t,n,r,i=P.min(),s=P.min(),a=e0.EMPTY_BYTE_STRING,o=null){this.target=e,this.targetId=t,this.purpose=n,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=s,this.resumeToken=a,this.expectedCount=o}withSequenceNumber(e){return new r_(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new r_(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new r_(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new r_(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class rb{constructor(e){this.ht=e}}function rE(e,t){let n=t.key,r={prefixPath:n.getCollectionPath().popLast().toArray(),collectionGroup:n.collectionGroup,documentId:n.path.lastSegment(),readTime:rT(t.readTime),hasCommittedMutations:t.hasCommittedMutations};if(t.isFoundDocument()){var i;r.document={name:rs(i=e.ht,t.key),fields:t.data.value.mapValue.fields,updateTime:re(i,t.version.toTimestamp()),createTime:re(i,t.createTime.toTimestamp())}}else if(t.isNoDocument())r.noDocument={path:n.path.toArray(),readTime:rS(t.version)};else{if(!t.isUnknownDocument())return _();r.unknownDocument={path:n.path.toArray(),version:rS(t.version)}}return r}function rT(e){let t=e.toTimestamp();return[t.seconds,t.nanoseconds]}function rS(e){let t=e.toTimestamp();return{seconds:t.seconds,nanoseconds:t.nanoseconds}}function rx(e){let t=new O(e.seconds,e.nanoseconds);return P.fromTimestamp(t)}function rD(e,t){let n=(t.baseMutations||[]).map(t=>rm(e.ht,t));for(let e=0;e<t.mutations.length-1;++e){let n=t.mutations[e];if(e+1<t.mutations.length&&void 0!==t.mutations[e+1].transform){let r=t.mutations[e+1];n.updateTransforms=r.transform.fieldTransforms,t.mutations.splice(e+1,1),++e}}let r=t.mutations.map(t=>rm(e.ht,t)),i=O.fromMillis(t.localWriteTimeMs);return new nP(t.batchId,i,n,r)}function rA(e){var t;let n;let r=rx(e.readTime),i=void 0!==e.lastLimboFreeSnapshotVersion?rx(e.lastLimboFreeSnapshotVersion):P.min();return n=void 0!==e.query.documents?(1===(t=e.query).documents.length||_(),t1(tY(rl(t.documents[0])))):t1(ry(e.query)),new r_(n,e.targetId,"TargetPurposeListen",e.lastListenSequenceNumber,r,i,e0.fromBase64String(e.resumeToken))}function rC(e,t){let n;let r=rS(t.snapshotVersion),i=rS(t.lastLimboFreeSnapshotVersion);n=tK(t.target)?rg(e.ht,t.target):rp(e.ht,t.target);let s=t.resumeToken.toBase64();return{targetId:t.targetId,canonicalId:tz(t.target),readTime:r,resumeToken:s,lastListenSequenceNumber:t.sequenceNumber,lastLimboFreeSnapshotVersion:i,query:n}}function rN(e){let t=ry({parent:e.parent,structuredQuery:e.structuredQuery});return"LAST"===e.limitType?t5(t,t.limit,"L"):t}function rk(e,t){return new nU(t.largestBatchId,rm(e.ht,t.overlayMutation))}function rR(e,t){let n=t.path.lastSegment();return[e,ew(t.path.popLast()),n]}function rF(e,t,n,r){return{indexId:e,uid:t.uid||"",sequenceNumber:n,readTime:rS(r.readTime),documentKey:ew(r.documentKey.path),largestBatchId:r.largestBatchId}}/**
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
 */class rM{getBundleMetadata(e,t){return rV(e).get(t).next(e=>{if(e)return{id:e.bundleId,createTime:rx(e.createTime),version:e.version}})}saveBundleMetadata(e,t){return rV(e).put({bundleId:t.id,createTime:rS(rn(t.createTime)),version:t.version})}getNamedQuery(e,t){return rL(e).get(t).next(e=>{if(e)return{name:e.name,query:rN(e.bundledQuery),readTime:rx(e.readTime)}})}saveNamedQuery(e,t){return rL(e).put({name:t.name,readTime:rS(rn(t.readTime)),bundledQuery:t.bundledQuery})}}function rV(e){return eB(e,"bundles")}function rL(e){return eB(e,"namedQueries")}/**
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
 */class rO{constructor(e,t){this.serializer=e,this.userId=t}static Pt(e,t){let n=t.uid||"";return new rO(e,n)}getOverlay(e,t){return rP(e).get(rR(this.userId,t)).next(e=>e?rk(this.serializer,e):null)}getOverlays(e,t){let n=ns();return en.forEach(t,t=>this.getOverlay(e,t).next(e=>{null!==e&&n.set(t,e)})).next(()=>n)}saveOverlays(e,t,n){let r=[];return n.forEach((n,i)=>{let s=new nU(t,i);r.push(this.It(e,s))}),en.waitFor(r)}removeOverlaysForBatchId(e,t,n){let r=new Set;t.forEach(e=>r.add(ew(e.getCollectionPath())));let i=[];return r.forEach(t=>{let r=IDBKeyRange.bound([this.userId,t,n],[this.userId,t,n+1],!1,!0);i.push(rP(e).J("collectionPathOverlayIndex",r))}),en.waitFor(i)}getOverlaysForCollection(e,t,n){let r=ns(),i=ew(t),s=IDBKeyRange.bound([this.userId,i,n],[this.userId,i,Number.POSITIVE_INFINITY],!0);return rP(e).G("collectionPathOverlayIndex",s).next(e=>{for(let t of e){let e=rk(this.serializer,t);r.set(e.getKey(),e)}return r})}getOverlaysForCollectionGroup(e,t,n,r){let i;let s=ns(),a=IDBKeyRange.bound([this.userId,t,n],[this.userId,t,Number.POSITIVE_INFINITY],!0);return rP(e).Z({index:"collectionGroupOverlayIndex",range:a},(e,t,n)=>{let a=rk(this.serializer,t);s.size()<r||a.largestBatchId===i?(s.set(a.getKey(),a),i=a.largestBatchId):n.done()}).next(()=>s)}It(e,t){return rP(e).put(function(e,t,n){let[r,i,s]=rR(t,n.mutation.key);return{userId:t,collectionPath:i,documentId:s,collectionGroup:n.mutation.key.getCollectionGroup(),largestBatchId:n.largestBatchId,overlayMutation:rf(e.ht,n.mutation)}}(this.serializer,this.userId,t))}}function rP(e){return eB(e,"documentOverlays")}/**
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
 */class rq{constructor(){}Tt(e,t){this.Et(e,t),t.dt()}Et(e,t){if("nullValue"in e)this.At(t,5);else if("booleanValue"in e)this.At(t,10),t.Rt(e.booleanValue?1:0);else if("integerValue"in e)this.At(t,15),t.Rt(e5(e.integerValue));else if("doubleValue"in e){let n=e5(e.doubleValue);isNaN(n)?this.At(t,13):(this.At(t,15),ep(n)?t.Rt(0):t.Rt(n))}else if("timestampValue"in e){let n=e.timestampValue;this.At(t,20),"string"==typeof n?t.Vt(n):(t.Vt(`${n.seconds||""}`),t.Rt(n.nanos||0))}else if("stringValue"in e)this.ft(e.stringValue,t),this.gt(t);else if("bytesValue"in e)this.At(t,30),t.yt(e4(e.bytesValue)),this.gt(t);else if("referenceValue"in e)this.wt(e.referenceValue,t);else if("geoPointValue"in e){let n=e.geoPointValue;this.At(t,45),t.Rt(n.latitude||0),t.Rt(n.longitude||0)}else"mapValue"in e?tg(e)?this.At(t,Number.MAX_SAFE_INTEGER):(this.St(e.mapValue,t),this.gt(t)):"arrayValue"in e?(this.bt(e.arrayValue,t),this.gt(t)):_()}ft(e,t){this.At(t,25),this.Dt(e,t)}Dt(e,t){t.Vt(e)}St(e,t){let n=e.fields||{};for(let e of(this.At(t,55),Object.keys(n)))this.ft(e,t),this.Et(n[e],t)}bt(e,t){let n=e.values||[];for(let e of(this.At(t,50),n))this.Et(e,t)}wt(e,t){this.At(t,37),G.fromName(e).path.forEach(e=>{this.At(t,60),this.Dt(e,t)})}At(e,t){e.Rt(t)}gt(e){e.Rt(2)}}function rU(e){let t=64-function(e){let t=0;for(let n=0;n<8;++n){let r=function(e){if(0===e)return 8;let t=0;return e>>4==0&&(t+=4,e<<=4),e>>6==0&&(t+=2,e<<=2),e>>7==0&&(t+=1),t}(255&e[n]);if(t+=r,8!==r)break}return t}(e);return Math.ceil(t/8)}rq.vt=new rq;class rB{constructor(){this.buffer=new Uint8Array(1024),this.position=0}Ct(e){let t=e[Symbol.iterator](),n=t.next();for(;!n.done;)this.Ft(n.value),n=t.next();this.Mt()}xt(e){let t=e[Symbol.iterator](),n=t.next();for(;!n.done;)this.Ot(n.value),n=t.next();this.Nt()}Bt(e){for(let t of e){let e=t.charCodeAt(0);if(e<128)this.Ft(e);else if(e<2048)this.Ft(960|e>>>6),this.Ft(128|63&e);else if(t<"\ud800"||"\udbff"<t)this.Ft(480|e>>>12),this.Ft(128|63&e>>>6),this.Ft(128|63&e);else{let e=t.codePointAt(0);this.Ft(240|e>>>18),this.Ft(128|63&e>>>12),this.Ft(128|63&e>>>6),this.Ft(128|63&e)}}this.Mt()}Lt(e){for(let t of e){let e=t.charCodeAt(0);if(e<128)this.Ot(e);else if(e<2048)this.Ot(960|e>>>6),this.Ot(128|63&e);else if(t<"\ud800"||"\udbff"<t)this.Ot(480|e>>>12),this.Ot(128|63&e>>>6),this.Ot(128|63&e);else{let e=t.codePointAt(0);this.Ot(240|e>>>18),this.Ot(128|63&e>>>12),this.Ot(128|63&e>>>6),this.Ot(128|63&e)}}this.Nt()}kt(e){let t=this.qt(e),n=rU(t);this.Qt(1+n),this.buffer[this.position++]=255&n;for(let e=t.length-n;e<t.length;++e)this.buffer[this.position++]=255&t[e]}Kt(e){let t=this.qt(e),n=rU(t);this.Qt(1+n),this.buffer[this.position++]=~(255&n);for(let e=t.length-n;e<t.length;++e)this.buffer[this.position++]=~(255&t[e])}$t(){this.Ut(255),this.Ut(255)}Wt(){this.Gt(255),this.Gt(255)}reset(){this.position=0}seed(e){this.Qt(e.length),this.buffer.set(e,this.position),this.position+=e.length}zt(){return this.buffer.slice(0,this.position)}qt(e){let t=function(e){let t=new DataView(new ArrayBuffer(8));return t.setFloat64(0,e,!1),new Uint8Array(t.buffer)}(e),n=0!=(128&t[0]);t[0]^=n?255:128;for(let e=1;e<t.length;++e)t[e]^=n?255:0;return t}Ft(e){let t=255&e;0===t?(this.Ut(0),this.Ut(255)):255===t?(this.Ut(255),this.Ut(0)):this.Ut(t)}Ot(e){let t=255&e;0===t?(this.Gt(0),this.Gt(255)):255===t?(this.Gt(255),this.Gt(0)):this.Gt(e)}Mt(){this.Ut(0),this.Ut(1)}Nt(){this.Gt(0),this.Gt(1)}Ut(e){this.Qt(1),this.buffer[this.position++]=e}Gt(e){this.Qt(1),this.buffer[this.position++]=~e}Qt(e){let t=e+this.position;if(t<=this.buffer.length)return;let n=2*this.buffer.length;n<t&&(n=t);let r=new Uint8Array(n);r.set(this.buffer),this.buffer=r}}class rz{constructor(e){this.jt=e}yt(e){this.jt.Ct(e)}Vt(e){this.jt.Bt(e)}Rt(e){this.jt.kt(e)}dt(){this.jt.$t()}}class rG{constructor(e){this.jt=e}yt(e){this.jt.xt(e)}Vt(e){this.jt.Lt(e)}Rt(e){this.jt.Kt(e)}dt(){this.jt.Wt()}}class rK{constructor(){this.jt=new rB,this.Ht=new rz(this.jt),this.Jt=new rG(this.jt)}seed(e){this.jt.seed(e)}Yt(e){return 0===e?this.Ht:this.Jt}zt(){return this.jt.zt()}reset(){this.jt.reset()}}/**
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
 */class r${constructor(e,t,n,r){this.indexId=e,this.documentKey=t,this.arrayValue=n,this.directionalValue=r}Zt(){let e=this.directionalValue.length,t=0===e||255===this.directionalValue[e-1]?e+1:e,n=new Uint8Array(t);return n.set(this.directionalValue,0),t!==e?n.set([0],this.directionalValue.length):++n[n.length-1],new r$(this.indexId,this.documentKey,this.arrayValue,n)}}function rj(e,t){let n=e.indexId-t.indexId;return 0!==n?n:0!==(n=rQ(e.arrayValue,t.arrayValue))?n:0!==(n=rQ(e.directionalValue,t.directionalValue))?n:G.comparator(e.documentKey,t.documentKey)}function rQ(e,t){for(let n=0;n<e.length&&n<t.length;++n){let r=e[n]-t[n];if(0!==r)return r}return e.length-t.length}/**
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
 */class rW{constructor(e){for(let t of(this.collectionId=null!=e.collectionGroup?e.collectionGroup:e.path.lastSegment(),this.Xt=e.orderBy,this.en=[],e.filters))t.isInequality()?this.tn=t:this.en.push(t)}nn(e){e.collectionGroup===this.collectionId||_();let t=$(e);if(void 0!==t&&!this.rn(t))return!1;let n=j(e),r=new Set,i=0,s=0;for(;i<n.length&&this.rn(n[i]);++i)r=r.add(n[i].fieldPath.canonicalString());if(i===n.length)return!0;if(void 0!==this.tn){if(!r.has(this.tn.field.canonicalString())){let e=n[i];if(!this.sn(this.tn,e)||!this.on(this.Xt[s++],e))return!1}++i}for(;i<n.length;++i){let e=n[i];if(s>=this.Xt.length||!this.on(this.Xt[s++],e))return!1}return!0}rn(e){for(let t of this.en)if(this.sn(t,e))return!0;return!1}sn(e,t){if(void 0===e||!e.field.isEqual(t.fieldPath))return!1;let n="array-contains"===e.op||"array-contains-any"===e.op;return 2===t.kind===n}on(e,t){return!!e.field.isEqual(t.fieldPath)&&(0===t.kind&&"asc"===e.dir||1===t.kind&&"desc"===e.dir)}}function rY(e){return e instanceof tS}function rH(e){return e instanceof tx&&tC(e)}function rJ(e){return rY(e)||rH(e)||function(e){if(e instanceof tx&&tA(e)){for(let t of e.getFilters())if(!rY(t)&&!rH(t))return!1;return!0}return!1}(e)}function rZ(e,t){return e instanceof tS||e instanceof tx||_(),t instanceof tS||t instanceof tx||_(),r0(e instanceof tS?t instanceof tS?tx.create([e,t],"and"):rX(e,t):t instanceof tS?rX(t,e):function(e,t){if(e.filters.length>0&&t.filters.length>0||_(),tD(e)&&tD(t))return tk(e,t.getFilters());let n=tA(e)?e:t,r=tA(e)?t:e,i=n.filters.map(e=>rZ(e,r));return tx.create(i,"or")}(e,t))}function rX(e,t){if(tD(t))return tk(t,e.getFilters());{let n=t.filters.map(t=>rZ(e,t));return tx.create(n,"or")}}function r0(e){if(e instanceof tS||e instanceof tx||_(),e instanceof tS)return e;let t=e.getFilters();if(1===t.length)return r0(t[0]);if(tN(e))return e;let n=t.map(e=>r0(e)),r=[];return n.forEach(t=>{t instanceof tS?r.push(t):t instanceof tx&&(t.op===e.op?r.push(...t.filters):r.push(t))}),1===r.length?r[0]:tx.create(r,e.op)}/**
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
 */class r1{constructor(){this._n=new r2}addToCollectionParentIndex(e,t){return this._n.add(t),en.resolve()}getCollectionParents(e,t){return en.resolve(this._n.getEntries(t))}addFieldIndex(e,t){return en.resolve()}deleteFieldIndex(e,t){return en.resolve()}getDocumentsMatchingTarget(e,t){return en.resolve(null)}getIndexType(e,t){return en.resolve(0)}getFieldIndexes(e,t){return en.resolve([])}getNextCollectionGroupToUpdate(e){return en.resolve(null)}getMinOffset(e,t){return en.resolve(J.min())}getMinOffsetFromCollectionGroup(e,t){return en.resolve(J.min())}updateCollectionGroup(e,t,n){return en.resolve()}updateIndexEntries(e,t){return en.resolve()}}class r2{constructor(){this.index={}}add(e){let t=e.lastSegment(),n=e.popLast(),r=this.index[t]||new eW(U.comparator),i=!r.has(n);return this.index[t]=r.add(n),i}has(e){let t=e.lastSegment(),n=e.popLast(),r=this.index[t];return r&&r.has(n)}getEntries(e){return(this.index[e]||new eW(U.comparator)).toArray()}}/**
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
 */let r5=new Uint8Array(0);class r4{constructor(e,t){this.user=e,this.databaseId=t,this.an=new r2,this.un=new ne(e=>tz(e),(e,t)=>tG(e,t)),this.uid=e.uid||""}addToCollectionParentIndex(e,t){if(!this.an.has(t)){let n=t.lastSegment(),r=t.popLast();e.addOnCommittedListener(()=>{this.an.add(t)});let i={collectionId:n,parent:ew(r)};return r8(e).put(i)}return en.resolve()}getCollectionParents(e,t){let n=[],r=IDBKeyRange.bound([t,""],[t+"\x00",""],!1,!0);return r8(e).G(r).next(e=>{for(let r of e){if(r.collectionId!==t)break;n.push(ev(r.parent))}return n})}addFieldIndex(e,t){let n=r9(e),r={indexId:t.indexId,collectionGroup:t.collectionGroup,fields:t.fields.map(e=>[e.fieldPath.canonicalString(),e.kind])};delete r.indexId;let i=n.add(r);if(t.indexState){let n=r6(e);return i.next(e=>{n.put(rF(e,this.user,t.indexState.sequenceNumber,t.indexState.offset))})}return i.next()}deleteFieldIndex(e,t){let n=r9(e),r=r6(e),i=r3(e);return n.delete(t.indexId).next(()=>r.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0))).next(()=>i.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0)))}getDocumentsMatchingTarget(e,t){let n=r3(e),r=!0,i=new Map;return en.forEach(this.cn(t),t=>this.ln(e,t).next(e=>{r&&(r=!!e),i.set(t,e)})).next(()=>{if(r){let e=nl(),r=[];return en.forEach(i,(i,s)=>{y("IndexedDbIndexManager",`Using index id=${i.indexId}|cg=${i.collectionGroup}|f=${i.fields.map(e=>`${e.fieldPath}:${e.kind}`).join(",")} to execute ${tz(t)}`);let a=function(e,t){let n=$(t);if(void 0===n)return null;for(let t of t$(e,n.fieldPath))switch(t.op){case"array-contains-any":return t.value.arrayValue.values||[];case"array-contains":return[t.value]}return null}(s,i),o=function(e,t){let n=new Map;for(let r of j(t))for(let t of t$(e,r.fieldPath))switch(t.op){case"==":case"in":n.set(r.fieldPath.canonicalString(),t.value);break;case"not-in":case"!=":return n.set(r.fieldPath.canonicalString(),t.value),Array.from(n.values())}return null}(s,i),l=function(e,t){let n=[],r=!0;for(let i of j(t)){let t=0===i.kind?tj(e,i.fieldPath,e.startAt):tQ(e,i.fieldPath,e.startAt);n.push(t.value),r&&(r=t.inclusive)}return new tI(n,r)}(s,i),u=function(e,t){let n=[],r=!0;for(let i of j(t)){let t=0===i.kind?tQ(e,i.fieldPath,e.endAt):tj(e,i.fieldPath,e.endAt);n.push(t.value),r&&(r=t.inclusive)}return new tI(n,r)}(s,i),c=this.hn(i,s,l),h=this.hn(i,s,u),d=this.Pn(i,s,o),f=this.In(i.indexId,a,c,l.inclusive,h,u.inclusive,d);return en.forEach(f,i=>n.H(i,t.limit).next(t=>{t.forEach(t=>{let n=G.fromSegments(t.documentKey);e.has(n)||(e=e.add(n),r.push(n))})}))}).next(()=>r)}return en.resolve(null)})}cn(e){let t=this.un.get(e);return t||(t=0===e.filters.length?[e]:(function(e){if(0===e.getFilters().length)return[];let t=function e(t){if(t instanceof tS||t instanceof tx||_(),t instanceof tS)return t;if(1===t.filters.length)return e(t.filters[0]);let n=t.filters.map(t=>e(t)),r=tx.create(n,t.op);return rJ(r=r0(r))?r:(r instanceof tx||_(),tD(r)||_(),r.filters.length>1||_(),r.filters.reduce((e,t)=>rZ(e,t)))}(/**
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
 */function e(t){var n,r;if(t instanceof tS||t instanceof tx||_(),t instanceof tS){if(t instanceof tO){let e=(null===(r=null===(n=t.value.arrayValue)||void 0===n?void 0:n.values)||void 0===r?void 0:r.map(e=>tS.create(t.field,"==",e)))||[];return tx.create(e,"or")}return t}let i=t.filters.map(t=>e(t));return tx.create(i,t.op)}(e));return rJ(t)||_(),rY(t)||rH(t)?[t]:t.getFilters()})(tx.create(e.filters,"and")).map(t=>tB(e.path,e.collectionGroup,e.orderBy,t.getFilters(),e.limit,e.startAt,e.endAt)),this.un.set(e,t)),t}In(e,t,n,r,i,s,a){let o=(null!=t?t.length:1)*Math.max(n.length,i.length),l=o/(null!=t?t.length:1),u=[];for(let c=0;c<o;++c){let o=t?this.Tn(t[c/l]):r5,h=this.En(e,o,n[c%l],r),d=this.dn(e,o,i[c%l],s),f=a.map(t=>this.En(e,o,t,!0));u.push(...this.createRange(h,d,f))}return u}En(e,t,n,r){let i=new r$(e,G.empty(),t,n);return r?i:i.Zt()}dn(e,t,n,r){let i=new r$(e,G.empty(),t,n);return r?i.Zt():i}ln(e,t){let n=new rW(t),r=null!=t.collectionGroup?t.collectionGroup:t.path.lastSegment();return this.getFieldIndexes(e,r).next(e=>{let t=null;for(let r of e)n.nn(r)&&(!t||r.fields.length>t.fields.length)&&(t=r);return t})}getIndexType(e,t){let n=2,r=this.cn(t);return en.forEach(r,t=>this.ln(e,t).next(e=>{e?0!==n&&e.fields.length<function(e){let t=new eW(z.comparator),n=!1;for(let r of e.filters)for(let e of r.getFlattenedFilters())e.field.isKeyField()||("array-contains"===e.op||"array-contains-any"===e.op?n=!0:t=t.add(e.field));for(let n of e.orderBy)n.field.isKeyField()||(t=t.add(n.field));return t.size+(n?1:0)}(t)&&(n=1):n=0})).next(()=>null!==t.limit&&r.length>1&&2===n?1:n)}An(e,t){let n=new rK;for(let r of j(e)){let e=t.data.field(r.fieldPath);if(null==e)return null;let i=n.Yt(r.kind);rq.vt.Tt(e,i)}return n.zt()}Tn(e){let t=new rK;return rq.vt.Tt(e,t.Yt(0)),t.zt()}Rn(e,t){let n=new rK;return rq.vt.Tt(tl(this.databaseId,t),n.Yt(function(e){let t=j(e);return 0===t.length?0:t[t.length-1].kind}(e))),n.zt()}Pn(e,t,n){if(null===n)return[];let r=[];r.push(new rK);let i=0;for(let s of j(e)){let e=n[i++];for(let n of r)if(this.Vn(t,s.fieldPath)&&tc(e))r=this.mn(r,s,e);else{let t=n.Yt(s.kind);rq.vt.Tt(e,t)}}return this.fn(r)}hn(e,t,n){return this.Pn(e,t,n.position)}fn(e){let t=[];for(let n=0;n<e.length;++n)t[n]=e[n].zt();return t}mn(e,t,n){let r=[...e],i=[];for(let e of n.arrayValue.values||[])for(let n of r){let r=new rK;r.seed(n.zt()),rq.vt.Tt(e,r.Yt(t.kind)),i.push(r)}return i}Vn(e,t){return!!e.filters.find(e=>e instanceof tS&&e.field.isEqual(t)&&("in"===e.op||"not-in"===e.op))}getFieldIndexes(e,t){let n=r9(e),r=r6(e);return(t?n.G("collectionGroupIndex",IDBKeyRange.bound(t,t)):n.G()).next(e=>{let t=[];return en.forEach(e,e=>r.get([e.indexId,this.uid]).next(n=>{t.push(function(e,t){let n=t?new W(t.sequenceNumber,new J(rx(t.readTime),new G(ev(t.documentKey)),t.largestBatchId)):W.empty(),r=e.fields.map(([e,t])=>new Q(z.fromServerFormat(e),t));return new K(e.indexId,e.collectionGroup,r,n)}(e,n))})).next(()=>t)})}getNextCollectionGroupToUpdate(e){return this.getFieldIndexes(e).next(e=>0===e.length?null:(e.sort((e,t)=>{let n=e.indexState.sequenceNumber-t.indexState.sequenceNumber;return 0!==n?n:V(e.collectionGroup,t.collectionGroup)}),e[0].collectionGroup))}updateCollectionGroup(e,t,n){let r=r9(e),i=r6(e);return this.gn(e).next(e=>r.G("collectionGroupIndex",IDBKeyRange.bound(t,t)).next(t=>en.forEach(t,t=>i.put(rF(t.indexId,this.user,e,n)))))}updateIndexEntries(e,t){let n=new Map;return en.forEach(t,(t,r)=>{let i=n.get(t.collectionGroup);return(i?en.resolve(i):this.getFieldIndexes(e,t.collectionGroup)).next(i=>(n.set(t.collectionGroup,i),en.forEach(i,n=>this.pn(e,t,n).next(t=>{let i=this.yn(r,n);return t.isEqual(i)?en.resolve():this.wn(e,r,n,t,i)}))))})}Sn(e,t,n,r){return r3(e).put({indexId:r.indexId,uid:this.uid,arrayValue:r.arrayValue,directionalValue:r.directionalValue,orderedDocumentKey:this.Rn(n,t.key),documentKey:t.key.path.toArray()})}bn(e,t,n,r){return r3(e).delete([r.indexId,this.uid,r.arrayValue,r.directionalValue,this.Rn(n,t.key),t.key.path.toArray()])}pn(e,t,n){let r=r3(e),i=new eW(rj);return r.Z({index:"documentKeyIndex",range:IDBKeyRange.only([n.indexId,this.uid,this.Rn(n,t)])},(e,r)=>{i=i.add(new r$(n.indexId,t,r.arrayValue,r.directionalValue))}).next(()=>i)}yn(e,t){let n=new eW(rj),r=this.An(t,e);if(null==r)return n;let i=$(t);if(null!=i){let s=e.data.field(i.fieldPath);if(tc(s))for(let i of s.arrayValue.values||[])n=n.add(new r$(t.indexId,e.key,this.Tn(i),r))}else n=n.add(new r$(t.indexId,e.key,r5,r));return n}wn(e,t,n,r,i){y("IndexedDbIndexManager","Updating index entries for document '%s'",t.key);let s=[];return function(e,t,n,r,i){let s=e.getIterator(),a=t.getIterator(),o=eH(s),l=eH(a);for(;o||l;){let e=!1,t=!1;if(o&&l){let r=n(o,l);r<0?t=!0:r>0&&(e=!0)}else null!=o?t=!0:e=!0;e?(r(l),l=eH(a)):t?(i(o),o=eH(s)):(o=eH(s),l=eH(a))}}(r,i,rj,r=>{s.push(this.Sn(e,t,n,r))},r=>{s.push(this.bn(e,t,n,r))}),en.waitFor(s)}gn(e){let t=1;return r6(e).Z({index:"sequenceNumberIndex",reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},(e,n,r)=>{r.done(),t=n.sequenceNumber+1}).next(()=>t)}createRange(e,t,n){n=n.sort((e,t)=>rj(e,t)).filter((e,t,n)=>!t||0!==rj(e,n[t-1]));let r=[];for(let i of(r.push(e),n)){let n=rj(i,e),s=rj(i,t);if(0===n)r[0]=e.Zt();else if(n>0&&s<0)r.push(i),r.push(i.Zt());else if(s>0)break}r.push(t);let i=[];for(let e=0;e<r.length;e+=2){if(this.Dn(r[e],r[e+1]))return[];let t=[r[e].indexId,this.uid,r[e].arrayValue,r[e].directionalValue,r5,[]],n=[r[e+1].indexId,this.uid,r[e+1].arrayValue,r[e+1].directionalValue,r5,[]];i.push(IDBKeyRange.bound(t,n))}return i}Dn(e,t){return rj(e,t)>0}getMinOffsetFromCollectionGroup(e,t){return this.getFieldIndexes(e,t).next(r7)}getMinOffset(e,t){return en.mapArray(this.cn(t),t=>this.ln(e,t).next(e=>e||_())).next(r7)}}function r8(e){return eB(e,"collectionParents")}function r3(e){return eB(e,"indexEntries")}function r9(e){return eB(e,"indexConfiguration")}function r6(e){return eB(e,"indexState")}function r7(e){0!==e.length||_();let t=e[0].indexState.offset,n=t.largestBatchId;for(let r=1;r<e.length;r++){let i=e[r].indexState.offset;0>Z(i,t)&&(t=i),n<i.largestBatchId&&(n=i.largestBatchId)}return new J(t.readTime,t.documentKey,n)}/**
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
 */let ie={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class it{constructor(e,t,n){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=n}static withCacheSize(e){return new it(e,it.DEFAULT_COLLECTION_PERCENTILE,it.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}/**
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
 */function ir(e,t,n){let r=e.store("mutations"),i=e.store("documentMutations"),s=[],a=IDBKeyRange.only(n.batchId),o=0,l=r.Z({range:a},(e,t,n)=>(o++,n.delete()));s.push(l.next(()=>{1===o||_()}));let u=[];for(let e of n.mutations){var c,h;let r=(c=e.key.path,h=n.batchId,[t,ew(c),h]);s.push(i.delete(r)),u.push(e.key)}return en.waitFor(s).next(()=>u)}function ii(e){let t;if(!e)return 0;if(e.document)t=e.document;else if(e.unknownDocument)t=e.unknownDocument;else{if(!e.noDocument)throw _();t=e.noDocument}return JSON.stringify(t).length}/**
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
 */it.DEFAULT_COLLECTION_PERCENTILE=10,it.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,it.DEFAULT=new it(41943040,it.DEFAULT_COLLECTION_PERCENTILE,it.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),it.DISABLED=new it(-1,0,0);class is{constructor(e,t,n,r){this.userId=e,this.serializer=t,this.indexManager=n,this.referenceDelegate=r,this.vn={}}static Pt(e,t,n,r){""!==e.uid||_();let i=e.isAuthenticated()?e.uid:"";return new is(i,t,n,r)}checkEmpty(e){let t=!0,n=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return io(e).Z({index:"userMutationsIndex",range:n},(e,n,r)=>{t=!1,r.done()}).next(()=>t)}addMutationBatch(e,t,n,r){let i=il(e),s=io(e);return s.add({}).next(a=>{"number"==typeof a||_();let o=new nP(a,t,n,r),l=function(e,t,n){let r=n.baseMutations.map(t=>rf(e.ht,t)),i=n.mutations.map(t=>rf(e.ht,t));return{userId:t,batchId:n.batchId,localWriteTimeMs:n.localWriteTime.toMillis(),baseMutations:r,mutations:i}}(this.serializer,this.userId,o),u=[],c=new eW((e,t)=>V(e.canonicalString(),t.canonicalString()));for(let e of r){let t=[this.userId,ew(e.key.path),a];c=c.add(e.key.path.popLast()),u.push(s.put(l)),u.push(i.put(t,e_))}return c.forEach(t=>{u.push(this.indexManager.addToCollectionParentIndex(e,t))}),e.addOnCommittedListener(()=>{this.vn[a]=o.keys()}),en.waitFor(u).next(()=>o)})}lookupMutationBatch(e,t){return io(e).get(t).next(e=>e?(e.userId===this.userId||_(),rD(this.serializer,e)):null)}Cn(e,t){return this.vn[t]?en.resolve(this.vn[t]):this.lookupMutationBatch(e,t).next(e=>{if(e){let n=e.keys();return this.vn[t]=n,n}return null})}getNextMutationBatchAfterBatchId(e,t){let n=t+1,r=IDBKeyRange.lowerBound([this.userId,n]),i=null;return io(e).Z({index:"userMutationsIndex",range:r},(e,t,r)=>{t.userId===this.userId&&(t.batchId>=n||_(),i=rD(this.serializer,t)),r.done()}).next(()=>i)}getHighestUnacknowledgedBatchId(e){let t=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]),n=-1;return io(e).Z({index:"userMutationsIndex",range:t,reverse:!0},(e,t,r)=>{n=t.batchId,r.done()}).next(()=>n)}getAllMutationBatches(e){let t=IDBKeyRange.bound([this.userId,-1],[this.userId,Number.POSITIVE_INFINITY]);return io(e).G("userMutationsIndex",t).next(e=>e.map(e=>rD(this.serializer,e)))}getAllMutationBatchesAffectingDocumentKey(e,t){let n=[this.userId,ew(t.path)],r=IDBKeyRange.lowerBound(n),i=[];return il(e).Z({range:r},(n,r,s)=>{let[a,o,l]=n,u=ev(o);if(a===this.userId&&t.path.isEqual(u))return io(e).get(l).next(e=>{if(!e)throw _();e.userId===this.userId||_(),i.push(rD(this.serializer,e))});s.done()}).next(()=>i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new eW(V),r=[];return t.forEach(t=>{let i=[this.userId,ew(t.path)],s=IDBKeyRange.lowerBound(i),a=il(e).Z({range:s},(e,r,i)=>{let[s,a,o]=e,l=ev(a);s===this.userId&&t.path.isEqual(l)?n=n.add(o):i.done()});r.push(a)}),en.waitFor(r).next(()=>this.Fn(e,n))}getAllMutationBatchesAffectingQuery(e,t){let n=t.path,r=n.length+1,i=[this.userId,ew(n)],s=IDBKeyRange.lowerBound(i),a=new eW(V);return il(e).Z({range:s},(e,t,i)=>{let[s,o,l]=e,u=ev(o);s===this.userId&&n.isPrefixOf(u)?u.length===r&&(a=a.add(l)):i.done()}).next(()=>this.Fn(e,a))}Fn(e,t){let n=[],r=[];return t.forEach(t=>{r.push(io(e).get(t).next(e=>{if(null===e)throw _();e.userId===this.userId||_(),n.push(rD(this.serializer,e))}))}),en.waitFor(r).next(()=>n)}removeMutationBatch(e,t){return ir(e.ue,this.userId,t).next(n=>(e.addOnCommittedListener(()=>{this.Mn(t.batchId)}),en.forEach(n,t=>this.referenceDelegate.markPotentiallyOrphaned(e,t))))}Mn(e){delete this.vn[e]}performConsistencyCheck(e){return this.checkEmpty(e).next(t=>{if(!t)return en.resolve();let n=IDBKeyRange.lowerBound([this.userId]),r=[];return il(e).Z({range:n},(e,t,n)=>{if(e[0]===this.userId){let t=ev(e[1]);r.push(t)}else n.done()}).next(()=>{0===r.length||_()})})}containsKey(e,t){return ia(e,this.userId,t)}xn(e){return iu(e).get(this.userId).next(e=>e||{userId:this.userId,lastAcknowledgedBatchId:-1,lastStreamToken:""})}}function ia(e,t,n){let r=[t,ew(n.path)],i=r[1],s=IDBKeyRange.lowerBound(r),a=!1;return il(e).Z({range:s,Y:!0},(e,n,r)=>{let[s,o,l]=e;s===t&&o===i&&(a=!0),r.done()}).next(()=>a)}function io(e){return eB(e,"mutations")}function il(e){return eB(e,"documentMutations")}function iu(e){return eB(e,"mutationQueues")}/**
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
 */class ic{constructor(e){this.On=e}next(){return this.On+=2,this.On}static Nn(){return new ic(0)}static Bn(){return new ic(-1)}}/**
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
 */class ih{constructor(e,t){this.referenceDelegate=e,this.serializer=t}allocateTargetId(e){return this.Ln(e).next(t=>{let n=new ic(t.highestTargetId);return t.highestTargetId=n.next(),this.kn(e,t).next(()=>t.highestTargetId)})}getLastRemoteSnapshotVersion(e){return this.Ln(e).next(e=>P.fromTimestamp(new O(e.lastRemoteSnapshotVersion.seconds,e.lastRemoteSnapshotVersion.nanoseconds)))}getHighestSequenceNumber(e){return this.Ln(e).next(e=>e.highestListenSequenceNumber)}setTargetsMetadata(e,t,n){return this.Ln(e).next(r=>(r.highestListenSequenceNumber=t,n&&(r.lastRemoteSnapshotVersion=n.toTimestamp()),t>r.highestListenSequenceNumber&&(r.highestListenSequenceNumber=t),this.kn(e,r)))}addTargetData(e,t){return this.qn(e,t).next(()=>this.Ln(e).next(n=>(n.targetCount+=1,this.Qn(t,n),this.kn(e,n))))}updateTargetData(e,t){return this.qn(e,t)}removeTargetData(e,t){return this.removeMatchingKeysForTargetId(e,t.targetId).next(()=>id(e).delete(t.targetId)).next(()=>this.Ln(e)).next(t=>(t.targetCount>0||_(),t.targetCount-=1,this.kn(e,t)))}removeTargets(e,t,n){let r=0,i=[];return id(e).Z((s,a)=>{let o=rA(a);o.sequenceNumber<=t&&null===n.get(o.targetId)&&(r++,i.push(this.removeTargetData(e,o)))}).next(()=>en.waitFor(i)).next(()=>r)}forEachTarget(e,t){return id(e).Z((e,n)=>{let r=rA(n);t(r)})}Ln(e){return im(e).get("targetGlobalKey").next(e=>(null!==e||_(),e))}kn(e,t){return im(e).put("targetGlobalKey",t)}qn(e,t){return id(e).put(rC(this.serializer,t))}Qn(e,t){let n=!1;return e.targetId>t.highestTargetId&&(t.highestTargetId=e.targetId,n=!0),e.sequenceNumber>t.highestListenSequenceNumber&&(t.highestListenSequenceNumber=e.sequenceNumber,n=!0),n}getTargetCount(e){return this.Ln(e).next(e=>e.targetCount)}getTargetData(e,t){let n=tz(t),r=IDBKeyRange.bound([n,Number.NEGATIVE_INFINITY],[n,Number.POSITIVE_INFINITY]),i=null;return id(e).Z({range:r,index:"queryTargetsIndex"},(e,n,r)=>{let s=rA(n);tG(t,s.target)&&(i=s,r.done())}).next(()=>i)}addMatchingKeys(e,t,n){let r=[],i=ig(e);return t.forEach(t=>{let s=ew(t.path);r.push(i.put({targetId:n,path:s})),r.push(this.referenceDelegate.addReference(e,n,t))}),en.waitFor(r)}removeMatchingKeys(e,t,n){let r=ig(e);return en.forEach(t,t=>{let i=ew(t.path);return en.waitFor([r.delete([n,i]),this.referenceDelegate.removeReference(e,n,t)])})}removeMatchingKeysForTargetId(e,t){let n=ig(e),r=IDBKeyRange.bound([t],[t+1],!1,!0);return n.delete(r)}getMatchingKeysForTargetId(e,t){let n=IDBKeyRange.bound([t],[t+1],!1,!0),r=ig(e),i=nl();return r.Z({range:n,Y:!0},(e,t,n)=>{let r=ev(e[1]),s=new G(r);i=i.add(s)}).next(()=>i)}containsKey(e,t){let n=ew(t.path),r=IDBKeyRange.bound([n],[n+"\x00"],!1,!0),i=0;return ig(e).Z({index:"documentTargetsIndex",Y:!0,range:r},([e,t],n,r)=>{0!==e&&(i++,r.done())}).next(()=>i>0)}lt(e,t){return id(e).get(t).next(e=>e?rA(e):null)}}function id(e){return eB(e,"targets")}function im(e){return eB(e,"targetGlobal")}function ig(e){return eB(e,"targetDocuments")}/**
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
 */function ip([e,t],[n,r]){let i=V(e,n);return 0===i?V(t,r):i}class iy{constructor(e){this.Kn=e,this.buffer=new eW(ip),this.$n=0}Un(){return++this.$n}Wn(e){let t=[e,this.Un()];if(this.buffer.size<this.Kn)this.buffer=this.buffer.add(t);else{let e=this.buffer.last();0>ip(t,e)&&(this.buffer=this.buffer.delete(e).add(t))}}get maxValue(){return this.buffer.last()[0]}}class iw{constructor(e,t,n){this.garbageCollector=e,this.asyncQueue=t,this.localStore=n,this.Gn=null}start(){-1!==this.garbageCollector.params.cacheSizeCollectionThreshold&&this.zn(6e4)}stop(){this.Gn&&(this.Gn.cancel(),this.Gn=null)}get started(){return null!==this.Gn}zn(e){y("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.Gn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Gn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(e){eo(e)?y("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",e):await et(e)}await this.zn(3e5)})}}class iv{constructor(e,t){this.jn=e,this.params=t}calculateTargetCount(e,t){return this.jn.Hn(e).next(e=>Math.floor(t/100*e))}nthSequenceNumber(e,t){if(0===t)return en.resolve(em.ae);let n=new iy(t);return this.jn.forEachTarget(e,e=>n.Wn(e.sequenceNumber)).next(()=>this.jn.Jn(e,e=>n.Wn(e))).next(()=>n.maxValue)}removeTargets(e,t,n){return this.jn.removeTargets(e,t,n)}removeOrphanedDocuments(e,t){return this.jn.removeOrphanedDocuments(e,t)}collect(e,t){return -1===this.params.cacheSizeCollectionThreshold?(y("LruGarbageCollector","Garbage collection skipped; disabled"),en.resolve(ie)):this.getCacheSize(e).next(n=>n<this.params.cacheSizeCollectionThreshold?(y("LruGarbageCollector",`Garbage collection skipped; Cache size ${n} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),ie):this.Yn(e,t))}getCacheSize(e){return this.jn.getCacheSize(e)}Yn(e,t){let n,r,i,s,a,l,u;let c=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(t=>(t>this.params.maximumSequenceNumbersToCollect?(y("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${t}`),r=this.params.maximumSequenceNumbersToCollect):r=t,s=Date.now(),this.nthSequenceNumber(e,r))).next(r=>(n=r,a=Date.now(),this.removeTargets(e,n,t))).next(t=>(i=t,l=Date.now(),this.removeOrphanedDocuments(e,n))).next(e=>(u=Date.now(),g()<=o.in.DEBUG&&y("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${s-c}ms
	Determined least recently used ${r} in `+(a-s)+"ms\n"+`	Removed ${i} targets in `+(l-a)+"ms\n"+`	Removed ${e} documents in `+(u-l)+"ms\n"+`Total Duration: ${u-c}ms`),en.resolve({didRun:!0,sequenceNumbersCollected:r,targetsRemoved:i,documentsRemoved:e})))}}/**
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
 */class iI{constructor(e,t){this.db=e,this.garbageCollector=new iv(this,t)}Hn(e){let t=this.Zn(e);return this.db.getTargetCache().getTargetCount(e).next(e=>t.next(t=>e+t))}Zn(e){let t=0;return this.Jn(e,e=>{t++}).next(()=>t)}forEachTarget(e,t){return this.db.getTargetCache().forEachTarget(e,t)}Jn(e,t){return this.Xn(e,(e,n)=>t(n))}addReference(e,t,n){return i_(e,n)}removeReference(e,t,n){return i_(e,n)}removeTargets(e,t,n){return this.db.getTargetCache().removeTargets(e,t,n)}markPotentiallyOrphaned(e,t){return i_(e,t)}er(e,t){let n;return n=!1,iu(e).X(r=>ia(e,r,t).next(e=>(e&&(n=!0),en.resolve(!e)))).next(()=>n)}removeOrphanedDocuments(e,t){let n=this.db.getRemoteDocumentCache().newChangeBuffer(),r=[],i=0;return this.Xn(e,(s,a)=>{if(a<=t){let t=this.er(e,s).next(t=>{if(!t)return i++,n.getEntry(e,s).next(()=>(n.removeEntry(s,P.min()),ig(e).delete([0,ew(s.path)])))});r.push(t)}}).next(()=>en.waitFor(r)).next(()=>n.apply(e)).next(()=>i)}removeTarget(e,t){let n=t.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,n)}updateLimboDocument(e,t){return i_(e,t)}Xn(e,t){let n=ig(e),r,i=em.ae;return n.Z({index:"documentTargetsIndex"},([e,n],{path:s,sequenceNumber:a})=>{0===e?(i!==em.ae&&t(new G(ev(r)),i),i=a,r=s):i=em.ae}).next(()=>{i!==em.ae&&t(new G(ev(r)),i)})}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}}function i_(e,t){var n;return ig(e).put((n=e.currentSequenceNumber,{targetId:0,path:ew(t.path),sequenceNumber:n}))}/**
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
 */class ib{constructor(){this.changes=new ne(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,tv.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();let n=this.changes.get(t);return void 0!==n?en.resolve(n):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class iE{constructor(e){this.serializer=e}setIndexManager(e){this.indexManager=e}addEntry(e,t,n){return ix(e).put(n)}removeEntry(e,t,n){return ix(e).delete(function(e,t){let n=e.path.toArray();return[n.slice(0,n.length-2),n[n.length-2],rT(t),n[n.length-1]]}(t,n))}updateMetadata(e,t){return this.getMetadata(e).next(n=>(n.byteSize+=t,this.tr(e,n)))}getEntry(e,t){let n=tv.newInvalidDocument(t);return ix(e).Z({index:"documentKeyIndex",range:IDBKeyRange.only(iD(t))},(e,r)=>{n=this.nr(t,r)}).next(()=>n)}rr(e,t){let n={size:0,document:tv.newInvalidDocument(t)};return ix(e).Z({index:"documentKeyIndex",range:IDBKeyRange.only(iD(t))},(e,r)=>{n={document:this.nr(t,r),size:ii(r)}}).next(()=>n)}getEntries(e,t){let n=nt;return this.ir(e,t,(e,t)=>{let r=this.nr(e,t);n=n.insert(e,r)}).next(()=>n)}sr(e,t){let n=nt,r=new e$(G.comparator);return this.ir(e,t,(e,t)=>{let i=this.nr(e,t);n=n.insert(e,i),r=r.insert(e,ii(t))}).next(()=>({documents:n,_r:r}))}ir(e,t,n){if(t.isEmpty())return en.resolve();let r=new eW(iC);t.forEach(e=>r=r.add(e));let i=IDBKeyRange.bound(iD(r.first()),iD(r.last())),s=r.getIterator(),a=s.getNext();return ix(e).Z({index:"documentKeyIndex",range:i},(e,t,r)=>{let i=G.fromSegments([...t.prefixPath,t.collectionGroup,t.documentId]);for(;a&&0>iC(a,i);)n(a,null),a=s.getNext();a&&a.isEqual(i)&&(n(a,t),a=s.hasNext()?s.getNext():null),a?r.W(iD(a)):r.done()}).next(()=>{for(;a;)n(a,null),a=s.hasNext()?s.getNext():null})}getDocumentsMatchingQuery(e,t,n,r){let i=t.path,s=[i.popLast().toArray(),i.lastSegment(),rT(n.readTime),n.documentKey.path.isEmpty()?"":n.documentKey.path.lastSegment()],a=[i.popLast().toArray(),i.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return ix(e).G(IDBKeyRange.bound(s,a,!0)).next(e=>{let n=nt;for(let i of e){let e=this.nr(G.fromSegments(i.prefixPath.concat(i.collectionGroup,i.documentId)),i);e.isFoundDocument()&&(t9(t,e)||r.has(e.key))&&(n=n.insert(e.key,e))}return n})}getAllFromCollectionGroup(e,t,n,r){let i=nt,s=iA(t,n),a=iA(t,J.max());return ix(e).Z({index:"collectionGroupIndex",range:IDBKeyRange.bound(s,a,!0)},(e,t,n)=>{let s=this.nr(G.fromSegments(t.prefixPath.concat(t.collectionGroup,t.documentId)),t);(i=i.insert(s.key,s)).size===r&&n.done()}).next(()=>i)}newChangeBuffer(e){return new iT(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next(e=>e.byteSize)}getMetadata(e){return iS(e).get("remoteDocumentGlobalKey").next(e=>(e||_(),e))}tr(e,t){return iS(e).put("remoteDocumentGlobalKey",t)}nr(e,t){if(t){let e=function(e,t){let n;if(t.document)n=rd(e.ht,t.document,!!t.hasCommittedMutations);else if(t.noDocument){let e=G.fromSegments(t.noDocument.path),r=rx(t.noDocument.readTime);n=tv.newNoDocument(e,r),t.hasCommittedMutations&&n.setHasCommittedMutations()}else{if(!t.unknownDocument)return _();{let e=G.fromSegments(t.unknownDocument.path),r=rx(t.unknownDocument.version);n=tv.newUnknownDocument(e,r)}}return t.readTime&&n.setReadTime(function(e){let t=new O(e[0],e[1]);return P.fromTimestamp(t)}(t.readTime)),n}(this.serializer,t);if(!(e.isNoDocument()&&e.version.isEqual(P.min())))return e}return tv.newInvalidDocument(e)}}class iT extends ib{constructor(e,t){super(),this.ar=e,this.trackRemovals=t,this.ur=new ne(e=>e.toString(),(e,t)=>e.isEqual(t))}applyChanges(e){let t=[],n=0,r=new eW((e,t)=>V(e.canonicalString(),t.canonicalString()));return this.changes.forEach((i,s)=>{let a=this.ur.get(i);if(t.push(this.ar.removeEntry(e,i,a.readTime)),s.isValidDocument()){let o=rE(this.ar.serializer,s);r=r.add(i.path.popLast());let l=ii(o);n+=l-a.size,t.push(this.ar.addEntry(e,i,o))}else if(n-=a.size,this.trackRemovals){let n=rE(this.ar.serializer,s.convertToNoDocument(P.min()));t.push(this.ar.addEntry(e,i,n))}}),r.forEach(n=>{t.push(this.ar.indexManager.addToCollectionParentIndex(e,n))}),t.push(this.ar.updateMetadata(e,n)),en.waitFor(t)}getFromCache(e,t){return this.ar.rr(e,t).next(e=>(this.ur.set(t,{size:e.size,readTime:e.document.readTime}),e.document))}getAllFromCache(e,t){return this.ar.sr(e,t).next(({documents:e,_r:t})=>(t.forEach((t,n)=>{this.ur.set(t,{size:n,readTime:e.get(t).readTime})}),e))}}function iS(e){return eB(e,"remoteDocumentGlobal")}function ix(e){return eB(e,"remoteDocumentsV14")}function iD(e){let t=e.path.toArray();return[t.slice(0,t.length-2),t[t.length-2],t[t.length-1]]}function iA(e,t){let n=t.documentKey.path.toArray();return[e,rT(t.readTime),n.slice(0,n.length-2),n.length>0?n[n.length-1]:""]}function iC(e,t){let n=e.path.toArray(),r=t.path.toArray(),i=0;for(let e=0;e<n.length-2&&e<r.length-2;++e)if(i=V(n[e],r[e]))return i;return(i=V(n.length,r.length))||(i=V(n[n.length-2],r[r.length-2]))||V(n[n.length-1],r[r.length-1])}/**
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
 */class iN{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class ik{constructor(e,t,n,r){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=n,this.indexManager=r}getDocument(e,t){let n=null;return this.documentOverlayCache.getOverlay(e,t).next(r=>(n=r,this.remoteDocumentCache.getEntry(e,t))).next(e=>(null!==n&&nC(n.mutation,e,eJ.empty(),O.now()),e))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(t=>this.getLocalViewOfDocuments(e,t,nl()).next(()=>t))}getLocalViewOfDocuments(e,t,n=nl()){let r=ns();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,n).next(e=>{let t=nr();return e.forEach((e,n)=>{t=t.insert(e,n.overlayedDocument)}),t}))}getOverlayedDocuments(e,t){let n=ns();return this.populateOverlays(e,n,t).next(()=>this.computeViews(e,t,n,nl()))}populateOverlays(e,t,n){let r=[];return n.forEach(e=>{t.has(e)||r.push(e)}),this.documentOverlayCache.getOverlays(e,r).next(e=>{e.forEach((e,n)=>{t.set(e,n)})})}computeViews(e,t,n,r){let i=nt,s=ns(),a=ns();return t.forEach((e,t)=>{let a=n.get(t.key);r.has(t.key)&&(void 0===a||a.mutation instanceof nR)?i=i.insert(t.key,t):void 0!==a?(s.set(t.key,a.mutation.getFieldMask()),nC(a.mutation,t,a.mutation.getFieldMask(),O.now())):s.set(t.key,eJ.empty())}),this.recalculateAndSaveOverlays(e,i).next(e=>(e.forEach((e,t)=>s.set(e,t)),t.forEach((e,t)=>{var n;return a.set(e,new iN(t,null!==(n=s.get(e))&&void 0!==n?n:null))}),a))}recalculateAndSaveOverlays(e,t){let n=ns(),r=new e$((e,t)=>e-t),i=nl();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(e=>{for(let i of e)i.keys().forEach(e=>{let s=t.get(e);if(null===s)return;let a=n.get(e)||eJ.empty();a=i.applyToLocalView(s,a),n.set(e,a);let o=(r.get(i.batchId)||nl()).add(e);r=r.insert(i.batchId,o)})}).next(()=>{let s=[],a=r.getReverseIterator();for(;a.hasNext();){let r=a.getNext(),o=r.key,l=r.value,u=ns();l.forEach(e=>{if(!i.has(e)){let r=nA(t.get(e),n.get(e));null!==r&&u.set(e,r),i=i.add(e)}}),s.push(this.documentOverlayCache.saveOverlays(e,o,u))}return en.waitFor(s)}).next(()=>n)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(t=>this.recalculateAndSaveOverlays(e,t))}getDocumentsMatchingQuery(e,t,n){return G.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length?this.getDocumentsMatchingDocumentQuery(e,t.path):tX(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,n):this.getDocumentsMatchingCollectionQuery(e,t,n)}getNextDocuments(e,t,n,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,n,r).next(i=>{let s=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,n.largestBatchId,r-i.size):en.resolve(ns()),a=-1,o=i;return s.next(t=>en.forEach(t,(t,n)=>(a<n.largestBatchId&&(a=n.largestBatchId),i.get(t)?en.resolve():this.remoteDocumentCache.getEntry(e,t).next(e=>{o=o.insert(t,e)}))).next(()=>this.populateOverlays(e,t,i)).next(()=>this.computeViews(e,o,t,nl())).next(e=>({batchId:a,changes:ni(e)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new G(t)).next(e=>{let t=nr();return e.isFoundDocument()&&(t=t.insert(e.key,e)),t})}getDocumentsMatchingCollectionGroupQuery(e,t,n){let r=t.collectionGroup,i=nr();return this.indexManager.getCollectionParents(e,r).next(s=>en.forEach(s,s=>{var a;let o=(a=s.child(r),new tW(a,null,t.explicitOrderBy.slice(),t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt));return this.getDocumentsMatchingCollectionQuery(e,o,n).next(e=>{e.forEach((e,t)=>{i=i.insert(e,t)})})}).next(()=>i))}getDocumentsMatchingCollectionQuery(e,t,n){let r;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,n.largestBatchId).next(i=>(r=i,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,n,r))).next(e=>{r.forEach((t,n)=>{let r=n.getKey();null===e.get(r)&&(e=e.insert(r,tv.newInvalidDocument(r)))});let n=nr();return e.forEach((e,i)=>{let s=r.get(e);void 0!==s&&nC(s.mutation,i,eJ.empty(),O.now()),t9(t,i)&&(n=n.insert(e,i))}),n})}}/**
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
 */class iR{constructor(e){this.serializer=e,this.cr=new Map,this.lr=new Map}getBundleMetadata(e,t){return en.resolve(this.cr.get(t))}saveBundleMetadata(e,t){return this.cr.set(t.id,{id:t.id,version:t.version,createTime:rn(t.createTime)}),en.resolve()}getNamedQuery(e,t){return en.resolve(this.lr.get(t))}saveNamedQuery(e,t){return this.lr.set(t.name,{name:t.name,query:rN(t.bundledQuery),readTime:rn(t.readTime)}),en.resolve()}}/**
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
 */class iF{constructor(){this.overlays=new e$(G.comparator),this.hr=new Map}getOverlay(e,t){return en.resolve(this.overlays.get(t))}getOverlays(e,t){let n=ns();return en.forEach(t,t=>this.getOverlay(e,t).next(e=>{null!==e&&n.set(t,e)})).next(()=>n)}saveOverlays(e,t,n){return n.forEach((n,r)=>{this.It(e,t,r)}),en.resolve()}removeOverlaysForBatchId(e,t,n){let r=this.hr.get(n);return void 0!==r&&(r.forEach(e=>this.overlays=this.overlays.remove(e)),this.hr.delete(n)),en.resolve()}getOverlaysForCollection(e,t,n){let r=ns(),i=t.length+1,s=new G(t.child("")),a=this.overlays.getIteratorFrom(s);for(;a.hasNext();){let e=a.getNext().value,s=e.getKey();if(!t.isPrefixOf(s.path))break;s.path.length===i&&e.largestBatchId>n&&r.set(e.getKey(),e)}return en.resolve(r)}getOverlaysForCollectionGroup(e,t,n,r){let i=new e$((e,t)=>e-t),s=this.overlays.getIterator();for(;s.hasNext();){let e=s.getNext().value;if(e.getKey().getCollectionGroup()===t&&e.largestBatchId>n){let t=i.get(e.largestBatchId);null===t&&(t=ns(),i=i.insert(e.largestBatchId,t)),t.set(e.getKey(),e)}}let a=ns(),o=i.getIterator();for(;o.hasNext()&&(o.getNext().value.forEach((e,t)=>a.set(e,t)),!(a.size()>=r)););return en.resolve(a)}It(e,t,n){let r=this.overlays.get(n.key);if(null!==r){let e=this.hr.get(r.largestBatchId).delete(n.key);this.hr.set(r.largestBatchId,e)}this.overlays=this.overlays.insert(n.key,new nU(t,n));let i=this.hr.get(t);void 0===i&&(i=nl(),this.hr.set(t,i)),this.hr.set(t,i.add(n.key))}}/**
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
 */class iM{constructor(){this.Pr=new eW(iV.Ir),this.Tr=new eW(iV.Er)}isEmpty(){return this.Pr.isEmpty()}addReference(e,t){let n=new iV(e,t);this.Pr=this.Pr.add(n),this.Tr=this.Tr.add(n)}dr(e,t){e.forEach(e=>this.addReference(e,t))}removeReference(e,t){this.Ar(new iV(e,t))}Rr(e,t){e.forEach(e=>this.removeReference(e,t))}Vr(e){let t=new G(new U([])),n=new iV(t,e),r=new iV(t,e+1),i=[];return this.Tr.forEachInRange([n,r],e=>{this.Ar(e),i.push(e.key)}),i}mr(){this.Pr.forEach(e=>this.Ar(e))}Ar(e){this.Pr=this.Pr.delete(e),this.Tr=this.Tr.delete(e)}gr(e){let t=new G(new U([])),n=new iV(t,e),r=new iV(t,e+1),i=nl();return this.Tr.forEachInRange([n,r],e=>{i=i.add(e.key)}),i}containsKey(e){let t=new iV(e,0),n=this.Pr.firstAfterOrEqual(t);return null!==n&&e.isEqual(n.key)}}class iV{constructor(e,t){this.key=e,this.pr=t}static Ir(e,t){return G.comparator(e.key,t.key)||V(e.pr,t.pr)}static Er(e,t){return V(e.pr,t.pr)||G.comparator(e.key,t.key)}}/**
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
 */class iL{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.yr=1,this.wr=new eW(iV.Ir)}checkEmpty(e){return en.resolve(0===this.mutationQueue.length)}addMutationBatch(e,t,n,r){let i=this.yr;this.yr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];let s=new nP(i,t,n,r);for(let t of(this.mutationQueue.push(s),r))this.wr=this.wr.add(new iV(t.key,i)),this.indexManager.addToCollectionParentIndex(e,t.key.path.popLast());return en.resolve(s)}lookupMutationBatch(e,t){return en.resolve(this.Sr(t))}getNextMutationBatchAfterBatchId(e,t){let n=this.br(t+1),r=n<0?0:n;return en.resolve(this.mutationQueue.length>r?this.mutationQueue[r]:null)}getHighestUnacknowledgedBatchId(){return en.resolve(0===this.mutationQueue.length?-1:this.yr-1)}getAllMutationBatches(e){return en.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){let n=new iV(t,0),r=new iV(t,Number.POSITIVE_INFINITY),i=[];return this.wr.forEachInRange([n,r],e=>{let t=this.Sr(e.pr);i.push(t)}),en.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new eW(V);return t.forEach(e=>{let t=new iV(e,0),r=new iV(e,Number.POSITIVE_INFINITY);this.wr.forEachInRange([t,r],e=>{n=n.add(e.pr)})}),en.resolve(this.Dr(n))}getAllMutationBatchesAffectingQuery(e,t){let n=t.path,r=n.length+1,i=n;G.isDocumentKey(i)||(i=i.child(""));let s=new iV(new G(i),0),a=new eW(V);return this.wr.forEachWhile(e=>{let t=e.key.path;return!!n.isPrefixOf(t)&&(t.length===r&&(a=a.add(e.pr)),!0)},s),en.resolve(this.Dr(a))}Dr(e){let t=[];return e.forEach(e=>{let n=this.Sr(e);null!==n&&t.push(n)}),t}removeMutationBatch(e,t){0===this.vr(t.batchId,"removed")||_(),this.mutationQueue.shift();let n=this.wr;return en.forEach(t.mutations,r=>{let i=new iV(r.key,t.batchId);return n=n.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)}).next(()=>{this.wr=n})}Mn(e){}containsKey(e,t){let n=new iV(t,0),r=this.wr.firstAfterOrEqual(n);return en.resolve(t.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,en.resolve()}vr(e,t){return this.br(e)}br(e){return 0===this.mutationQueue.length?0:e-this.mutationQueue[0].batchId}Sr(e){let t=this.br(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class iO{constructor(e){this.Cr=e,this.docs=new e$(G.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){let n=t.key,r=this.docs.get(n),i=r?r.size:0,s=this.Cr(t);return this.docs=this.docs.insert(n,{document:t.mutableCopy(),size:s}),this.size+=s-i,this.indexManager.addToCollectionParentIndex(e,n.path.popLast())}removeEntry(e){let t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){let n=this.docs.get(t);return en.resolve(n?n.document.mutableCopy():tv.newInvalidDocument(t))}getEntries(e,t){let n=nt;return t.forEach(e=>{let t=this.docs.get(e);n=n.insert(e,t?t.document.mutableCopy():tv.newInvalidDocument(e))}),en.resolve(n)}getDocumentsMatchingQuery(e,t,n,r){let i=nt,s=t.path,a=new G(s.child("")),o=this.docs.getIteratorFrom(a);for(;o.hasNext();){let{key:e,value:{document:a}}=o.getNext();if(!s.isPrefixOf(e.path))break;e.path.length>s.length+1||0>=Z(H(a),n)||(r.has(a.key)||t9(t,a))&&(i=i.insert(a.key,a.mutableCopy()))}return en.resolve(i)}getAllFromCollectionGroup(e,t,n,r){_()}Fr(e,t){return en.forEach(this.docs,e=>t(e))}newChangeBuffer(e){return new iP(this)}getSize(e){return en.resolve(this.size)}}class iP extends ib{constructor(e){super(),this.ar=e}applyChanges(e){let t=[];return this.changes.forEach((n,r)=>{r.isValidDocument()?t.push(this.ar.addEntry(e,r)):this.ar.removeEntry(n)}),en.waitFor(t)}getFromCache(e,t){return this.ar.getEntry(e,t)}getAllFromCache(e,t){return this.ar.getEntries(e,t)}}/**
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
 */class iq{constructor(e){this.persistence=e,this.Mr=new ne(e=>tz(e),tG),this.lastRemoteSnapshotVersion=P.min(),this.highestTargetId=0,this.Or=0,this.Nr=new iM,this.targetCount=0,this.Br=ic.Nn()}forEachTarget(e,t){return this.Mr.forEach((e,n)=>t(n)),en.resolve()}getLastRemoteSnapshotVersion(e){return en.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return en.resolve(this.Or)}allocateTargetId(e){return this.highestTargetId=this.Br.next(),en.resolve(this.highestTargetId)}setTargetsMetadata(e,t,n){return n&&(this.lastRemoteSnapshotVersion=n),t>this.Or&&(this.Or=t),en.resolve()}qn(e){this.Mr.set(e.target,e);let t=e.targetId;t>this.highestTargetId&&(this.Br=new ic(t),this.highestTargetId=t),e.sequenceNumber>this.Or&&(this.Or=e.sequenceNumber)}addTargetData(e,t){return this.qn(t),this.targetCount+=1,en.resolve()}updateTargetData(e,t){return this.qn(t),en.resolve()}removeTargetData(e,t){return this.Mr.delete(t.target),this.Nr.Vr(t.targetId),this.targetCount-=1,en.resolve()}removeTargets(e,t,n){let r=0,i=[];return this.Mr.forEach((s,a)=>{a.sequenceNumber<=t&&null===n.get(a.targetId)&&(this.Mr.delete(s),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),r++)}),en.waitFor(i).next(()=>r)}getTargetCount(e){return en.resolve(this.targetCount)}getTargetData(e,t){let n=this.Mr.get(t)||null;return en.resolve(n)}addMatchingKeys(e,t,n){return this.Nr.dr(t,n),en.resolve()}removeMatchingKeys(e,t,n){this.Nr.Rr(t,n);let r=this.persistence.referenceDelegate,i=[];return r&&t.forEach(t=>{i.push(r.markPotentiallyOrphaned(e,t))}),en.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.Nr.Vr(t),en.resolve()}getMatchingKeysForTargetId(e,t){let n=this.Nr.gr(t);return en.resolve(n)}containsKey(e,t){return en.resolve(this.Nr.containsKey(t))}}/**
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
 */class iU{constructor(e,t){this.Lr={},this.overlays={},this.kr=new em(0),this.qr=!1,this.qr=!0,this.referenceDelegate=e(this),this.Qr=new iq(this),this.indexManager=new r1,this.remoteDocumentCache=new iO(e=>this.referenceDelegate.Kr(e)),this.serializer=new rb(t),this.$r=new iR(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.qr=!1,Promise.resolve()}get started(){return this.qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new iF,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let n=this.Lr[e.toKey()];return n||(n=new iL(t,this.referenceDelegate),this.Lr[e.toKey()]=n),n}getTargetCache(){return this.Qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.$r}runTransaction(e,t,n){y("MemoryPersistence","Starting transaction:",e);let r=new iB(this.kr.next());return this.referenceDelegate.Ur(),n(r).next(e=>this.referenceDelegate.Wr(r).next(()=>e)).toPromise().then(e=>(r.raiseOnCommittedEvent(),e))}Gr(e,t){return en.or(Object.values(this.Lr).map(n=>()=>n.containsKey(e,t)))}}class iB extends ee{constructor(e){super(),this.currentSequenceNumber=e}}class iz{constructor(e){this.persistence=e,this.zr=new iM,this.jr=null}static Hr(e){return new iz(e)}get Jr(){if(this.jr)return this.jr;throw _()}addReference(e,t,n){return this.zr.addReference(n,t),this.Jr.delete(n.toString()),en.resolve()}removeReference(e,t,n){return this.zr.removeReference(n,t),this.Jr.add(n.toString()),en.resolve()}markPotentiallyOrphaned(e,t){return this.Jr.add(t.toString()),en.resolve()}removeTarget(e,t){this.zr.Vr(t.targetId).forEach(e=>this.Jr.add(e.toString()));let n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(e,t.targetId).next(e=>{e.forEach(e=>this.Jr.add(e.toString()))}).next(()=>n.removeTargetData(e,t))}Ur(){this.jr=new Set}Wr(e){let t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return en.forEach(this.Jr,n=>{let r=G.fromPath(n);return this.Yr(e,r).next(e=>{e||t.removeEntry(r,P.min())})}).next(()=>(this.jr=null,t.apply(e)))}updateLimboDocument(e,t){return this.Yr(e,t).next(e=>{e?this.Jr.delete(t.toString()):this.Jr.add(t.toString())})}Kr(e){return 0}Yr(e,t){return en.or([()=>en.resolve(this.zr.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Gr(e,t)])}}/**
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
 */class iG{constructor(e){this.serializer=e}B(e,t,n,r){let i=new er("createOrUpgrade",t);n<1&&r>=1&&(!function(e){e.createObjectStore("owner")}(e),e.createObjectStore("mutationQueues",{keyPath:"userId"}),e.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",eI,{unique:!0}),e.createObjectStore("documentMutations"),iK(e),function(e){e.createObjectStore("remoteDocuments")}(e));let s=en.resolve();return n<3&&r>=3&&(0!==n&&(e.deleteObjectStore("targetDocuments"),e.deleteObjectStore("targets"),e.deleteObjectStore("targetGlobal"),iK(e)),s=s.next(()=>(function(e){let t=e.store("targetGlobal"),n={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:P.min().toTimestamp(),targetCount:0};return t.put("targetGlobalKey",n)})(i))),n<4&&r>=4&&(0!==n&&(s=s.next(()=>i.store("mutations").G().next(t=>{e.deleteObjectStore("mutations"),e.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",eI,{unique:!0});let n=i.store("mutations"),r=t.map(e=>n.put(e));return en.waitFor(r)}))),s=s.next(()=>{!function(e){e.createObjectStore("clientMetadata",{keyPath:"clientId"})}(e)})),n<5&&r>=5&&(s=s.next(()=>this.Xr(i))),n<6&&r>=6&&(s=s.next(()=>((function(e){e.createObjectStore("remoteDocumentGlobal")})(e),this.ei(i)))),n<7&&r>=7&&(s=s.next(()=>this.ti(i))),n<8&&r>=8&&(s=s.next(()=>this.ni(e,i))),n<9&&r>=9&&(s=s.next(()=>{e.objectStoreNames.contains("remoteDocumentChanges")&&e.deleteObjectStore("remoteDocumentChanges")})),n<10&&r>=10&&(s=s.next(()=>this.ri(i))),n<11&&r>=11&&(s=s.next(()=>{(function(e){e.createObjectStore("bundles",{keyPath:"bundleId"})})(e),function(e){e.createObjectStore("namedQueries",{keyPath:"name"})}(e)})),n<12&&r>=12&&(s=s.next(()=>{!function(e){let t=e.createObjectStore("documentOverlays",{keyPath:eF});t.createIndex("collectionPathOverlayIndex",eM,{unique:!1}),t.createIndex("collectionGroupOverlayIndex",eV,{unique:!1})}(e)})),n<13&&r>=13&&(s=s.next(()=>(function(e){let t=e.createObjectStore("remoteDocumentsV14",{keyPath:eb});t.createIndex("documentKeyIndex",eE),t.createIndex("collectionGroupIndex",eT)})(e)).next(()=>this.ii(e,i)).next(()=>e.deleteObjectStore("remoteDocuments"))),n<14&&r>=14&&(s=s.next(()=>this.si(e,i))),n<15&&r>=15&&(s=s.next(()=>{e.createObjectStore("indexConfiguration",{keyPath:"indexId",autoIncrement:!0}).createIndex("collectionGroupIndex","collectionGroup",{unique:!1}),e.createObjectStore("indexState",{keyPath:eC}).createIndex("sequenceNumberIndex",eN,{unique:!1}),e.createObjectStore("indexEntries",{keyPath:ek}).createIndex("documentKeyIndex",eR,{unique:!1})})),s}ei(e){let t=0;return e.store("remoteDocuments").Z((e,n)=>{t+=ii(n)}).next(()=>{let n={byteSize:t};return e.store("remoteDocumentGlobal").put("remoteDocumentGlobalKey",n)})}Xr(e){let t=e.store("mutationQueues"),n=e.store("mutations");return t.G().next(t=>en.forEach(t,t=>{let r=IDBKeyRange.bound([t.userId,-1],[t.userId,t.lastAcknowledgedBatchId]);return n.G("userMutationsIndex",r).next(n=>en.forEach(n,n=>{n.userId===t.userId||_();let r=rD(this.serializer,n);return ir(e,t.userId,r).next(()=>{})}))}))}ti(e){let t=e.store("targetDocuments"),n=e.store("remoteDocuments");return e.store("targetGlobal").get("targetGlobalKey").next(e=>{let r=[];return n.Z((n,i)=>{let s=new U(n),a=[0,ew(s)];r.push(t.get(a).next(n=>n?en.resolve():t.put({targetId:0,path:ew(s),sequenceNumber:e.highestListenSequenceNumber})))}).next(()=>en.waitFor(r))})}ni(e,t){e.createObjectStore("collectionParents",{keyPath:eA});let n=t.store("collectionParents"),r=new r2,i=e=>{if(r.add(e)){let t=e.lastSegment(),r=e.popLast();return n.put({collectionId:t,parent:ew(r)})}};return t.store("remoteDocuments").Z({Y:!0},(e,t)=>{let n=new U(e);return i(n.popLast())}).next(()=>t.store("documentMutations").Z({Y:!0},([e,t,n],r)=>{let s=ev(t);return i(s.popLast())}))}ri(e){let t=e.store("targets");return t.Z((e,n)=>{let r=rA(n),i=rC(this.serializer,r);return t.put(i)})}ii(e,t){let n=t.store("remoteDocuments"),r=[];return n.Z((e,n)=>{let i=t.store("remoteDocumentsV14"),s=(n.document?new G(U.fromString(n.document.name).popFirst(5)):n.noDocument?G.fromSegments(n.noDocument.path):n.unknownDocument?G.fromSegments(n.unknownDocument.path):_()).path.toArray(),a={prefixPath:s.slice(0,s.length-2),collectionGroup:s[s.length-2],documentId:s[s.length-1],readTime:n.readTime||[0,0],unknownDocument:n.unknownDocument,noDocument:n.noDocument,document:n.document,hasCommittedMutations:!!n.hasCommittedMutations};r.push(i.put(a))}).next(()=>en.waitFor(r))}si(e,t){var n;let r=t.store("mutations"),i=(n=this.serializer,new iE(n)),s=new iU(iz.Hr,this.serializer.ht);return r.G().next(e=>{let n=new Map;return e.forEach(e=>{var t;let r=null!==(t=n.get(e.userId))&&void 0!==t?t:nl();rD(this.serializer,e).keys().forEach(e=>r=r.add(e)),n.set(e.userId,r)}),en.forEach(n,(e,n)=>{let r=new d(n),a=rO.Pt(this.serializer,r),o=s.getIndexManager(r),l=is.Pt(r,this.serializer,o,s.referenceDelegate);return new ik(i,l,a,o).recalculateAndSaveOverlaysForDocumentKeys(new eU(t,em.ae),e).next()})})}}function iK(e){e.createObjectStore("targetDocuments",{keyPath:ex}).createIndex("documentTargetsIndex",eD,{unique:!0}),e.createObjectStore("targets",{keyPath:"targetId"}).createIndex("queryTargetsIndex",eS,{unique:!0}),e.createObjectStore("targetGlobal")}let i$="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.";class ij{constructor(e,t,n,r,i,s,a,o,l,u,c=15){var h;if(this.allowTabSynchronization=e,this.persistenceKey=t,this.clientId=n,this.oi=i,this.window=s,this.document=a,this._i=l,this.ai=u,this.ui=c,this.kr=null,this.qr=!1,this.isPrimary=!1,this.networkEnabled=!0,this.ci=null,this.inForeground=!1,this.li=null,this.hi=null,this.Pi=Number.NEGATIVE_INFINITY,this.Ii=e=>Promise.resolve(),!ij.v())throw new T(E.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new iI(this,r),this.Ti=t+"main",this.serializer=new rb(o),this.Ei=new ei(this.Ti,this.ui,new iG(this.serializer)),this.Qr=new ih(this.referenceDelegate,this.serializer),this.remoteDocumentCache=(h=this.serializer,new iE(h)),this.$r=new rM,this.window&&this.window.localStorage?this.di=this.window.localStorage:(this.di=null,!1===u&&w("IndexedDbPersistence","LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.Ai().then(()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new T(E.FAILED_PRECONDITION,i$);return this.Ri(),this.Vi(),this.mi(),this.runTransaction("getHighestListenSequenceNumber","readonly",e=>this.Qr.getHighestSequenceNumber(e))}).then(e=>{this.kr=new em(e,this._i)}).then(()=>{this.qr=!0}).catch(e=>(this.Ei&&this.Ei.close(),Promise.reject(e)))}fi(e){return this.Ii=async t=>{if(this.started)return e(t)},e(this.isPrimary)}setDatabaseDeletedListener(e){this.Ei.k(async t=>{null===t.newVersion&&await e()})}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this.oi.enqueueAndForget(async()=>{this.started&&await this.Ai()}))}Ai(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",e=>iW(e).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next(()=>{if(this.isPrimary)return this.gi(e).next(e=>{e||(this.isPrimary=!1,this.oi.enqueueRetryable(()=>this.Ii(!1)))})}).next(()=>this.pi(e)).next(t=>this.isPrimary&&!t?this.yi(e).next(()=>!1):!!t&&this.wi(e).next(()=>!0))).catch(e=>{if(eo(e))return y("IndexedDbPersistence","Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return y("IndexedDbPersistence","Releasing owner lease after error during lease refresh",e),!1}).then(e=>{this.isPrimary!==e&&this.oi.enqueueRetryable(()=>this.Ii(e)),this.isPrimary=e})}gi(e){return iQ(e).get("owner").next(e=>en.resolve(this.Si(e)))}bi(e){return iW(e).delete(this.clientId)}async Di(){if(this.isPrimary&&!this.vi(this.Pi,18e5)){this.Pi=Date.now();let e=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",e=>{let t=eB(e,"clientMetadata");return t.G().next(e=>{let n=this.Ci(e,18e5),r=e.filter(e=>-1===n.indexOf(e));return en.forEach(r,e=>t.delete(e.clientId)).next(()=>r)})}).catch(()=>[]);if(this.di)for(let t of e)this.di.removeItem(this.Fi(t.clientId))}}mi(){this.hi=this.oi.enqueueAfterDelay("client_metadata_refresh",4e3,()=>this.Ai().then(()=>this.Di()).then(()=>this.mi()))}Si(e){return!!e&&e.ownerId===this.clientId}pi(e){return this.ai?en.resolve(!0):iQ(e).get("owner").next(t=>{if(null!==t&&this.vi(t.leaseTimestampMs,5e3)&&!this.Mi(t.ownerId)){if(this.Si(t)&&this.networkEnabled)return!0;if(!this.Si(t)){if(!t.allowTabSynchronization)throw new T(E.FAILED_PRECONDITION,i$);return!1}}return!(!this.networkEnabled||!this.inForeground)||iW(e).G().next(e=>void 0===this.Ci(e,5e3).find(e=>{if(this.clientId!==e.clientId){let t=!this.networkEnabled&&e.networkEnabled,n=!this.inForeground&&e.inForeground,r=this.networkEnabled===e.networkEnabled;if(t||n&&r)return!0}return!1}))}).next(e=>(this.isPrimary!==e&&y("IndexedDbPersistence",`Client ${e?"is":"is not"} eligible for a primary lease.`),e))}async shutdown(){this.qr=!1,this.xi(),this.hi&&(this.hi.cancel(),this.hi=null),this.Oi(),this.Ni(),await this.Ei.runTransaction("shutdown","readwrite",["owner","clientMetadata"],e=>{let t=new eU(e,em.ae);return this.yi(t).next(()=>this.bi(t))}),this.Ei.close(),this.Bi()}Ci(e,t){return e.filter(e=>this.vi(e.updateTimeMs,t)&&!this.Mi(e.clientId))}Li(){return this.runTransaction("getActiveClients","readonly",e=>iW(e).G().next(e=>this.Ci(e,18e5).map(e=>e.clientId)))}get started(){return this.qr}getMutationQueue(e,t){return is.Pt(e,this.serializer,t,this.referenceDelegate)}getTargetCache(){return this.Qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(e){return new r4(e,this.serializer.ht.databaseId)}getDocumentOverlayCache(e){return rO.Pt(this.serializer,e)}getBundleCache(){return this.$r}runTransaction(e,t,n){var r;let i;y("IndexedDbPersistence","Starting transaction:",e);let s="readonly"===t?"readonly":"readwrite",a=15===(r=this.ui)?eq:14===r?eP:13===r?eP:12===r?eO:11===r?eL:void _();return this.Ei.runTransaction(e,s,a,r=>(i=new eU(r,this.kr?this.kr.next():em.ae),"readwrite-primary"===t?this.gi(i).next(e=>!!e||this.pi(i)).next(t=>{if(!t)throw w(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this.oi.enqueueRetryable(()=>this.Ii(!1)),new T(E.FAILED_PRECONDITION,X);return n(i)}).next(e=>this.wi(i).next(()=>e)):this.ki(i).next(()=>n(i)))).then(e=>(i.raiseOnCommittedEvent(),e))}ki(e){return iQ(e).get("owner").next(e=>{if(null!==e&&this.vi(e.leaseTimestampMs,5e3)&&!this.Mi(e.ownerId)&&!this.Si(e)&&!(this.ai||this.allowTabSynchronization&&e.allowTabSynchronization))throw new T(E.FAILED_PRECONDITION,i$)})}wi(e){let t={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return iQ(e).put("owner",t)}static v(){return ei.v()}yi(e){let t=iQ(e);return t.get("owner").next(e=>this.Si(e)?(y("IndexedDbPersistence","Releasing primary lease."),t.delete("owner")):en.resolve())}vi(e,t){let n=Date.now();return!(e<n-t)&&(!(e>n)||(w(`Detected an update time that is in the future: ${e} > ${n}`),!1))}Ri(){null!==this.document&&"function"==typeof this.document.addEventListener&&(this.li=()=>{this.oi.enqueueAndForget(()=>(this.inForeground="visible"===this.document.visibilityState,this.Ai()))},this.document.addEventListener("visibilitychange",this.li),this.inForeground="visible"===this.document.visibilityState)}Oi(){this.li&&(this.document.removeEventListener("visibilitychange",this.li),this.li=null)}Vi(){var e;"function"==typeof(null===(e=this.window)||void 0===e?void 0:e.addEventListener)&&(this.ci=()=>{this.xi();let e=/(?:Version|Mobile)\/1[456]/;(0,l.G6)()&&(navigator.appVersion.match(e)||navigator.userAgent.match(e))&&this.oi.enterRestrictedMode(!0),this.oi.enqueueAndForget(()=>this.shutdown())},this.window.addEventListener("pagehide",this.ci))}Ni(){this.ci&&(this.window.removeEventListener("pagehide",this.ci),this.ci=null)}Mi(e){var t;try{let n=null!==(null===(t=this.di)||void 0===t?void 0:t.getItem(this.Fi(e)));return y("IndexedDbPersistence",`Client '${e}' ${n?"is":"is not"} zombied in LocalStorage`),n}catch(e){return w("IndexedDbPersistence","Failed to get zombied client id.",e),!1}}xi(){if(this.di)try{this.di.setItem(this.Fi(this.clientId),String(Date.now()))}catch(e){w("Failed to set zombie client id.",e)}}Bi(){if(this.di)try{this.di.removeItem(this.Fi(this.clientId))}catch(e){}}Fi(e){return`firestore_zombie_${this.persistenceKey}_${e}`}}function iQ(e){return eB(e,"owner")}function iW(e){return eB(e,"clientMetadata")}function iY(e,t){let n=e.projectId;return e.isDefaultDatabase||(n+="."+e.database),"firestore/"+t+"/"+n+"/"}/**
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
 */class iH{constructor(e,t,n,r){this.targetId=e,this.fromCache=t,this.qi=n,this.Qi=r}static Ki(e,t){let n=nl(),r=nl();for(let e of t.docChanges)switch(e.type){case 0:n=n.add(e.doc.key);break;case 1:r=r.add(e.doc.key)}return new iH(e,t.fromCache,n,r)}}/**
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
 */class iJ{constructor(){this.$i=!1}initialize(e,t){this.Ui=e,this.indexManager=t,this.$i=!0}getDocumentsMatchingQuery(e,t,n,r){return this.Wi(e,t).next(i=>i||this.Gi(e,t,r,n)).next(n=>n||this.zi(e,t))}Wi(e,t){if(tH(t))return en.resolve(null);let n=t1(t);return this.indexManager.getIndexType(e,n).next(r=>0===r?null:(null!==t.limit&&1===r&&(n=t1(t=t5(t,null,"F"))),this.indexManager.getDocumentsMatchingTarget(e,n).next(r=>{let i=nl(...r);return this.Ui.getDocuments(e,i).next(r=>this.indexManager.getMinOffset(e,n).next(n=>{let s=this.ji(t,r);return this.Hi(t,s,i,n.readTime)?this.Wi(e,t5(t,null,"F")):this.Ji(e,s,t,n)}))})))}Gi(e,t,n,r){return tH(t)||r.isEqual(P.min())?this.zi(e,t):this.Ui.getDocuments(e,n).next(i=>{let s=this.ji(t,i);return this.Hi(t,s,n,r)?this.zi(e,t):(g()<=o.in.DEBUG&&y("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),t3(t)),this.Ji(e,s,t,Y(r,-1)))})}ji(e,t){let n=new eW(t7(e));return t.forEach((t,r)=>{t9(e,r)&&(n=n.add(r))}),n}Hi(e,t,n,r){if(null===e.limit)return!1;if(n.size!==t.size)return!0;let i="F"===e.limitType?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}zi(e,t){return g()<=o.in.DEBUG&&y("QueryEngine","Using full collection scan to execute query:",t3(t)),this.Ui.getDocumentsMatchingQuery(e,t,J.min())}Ji(e,t,n,r){return this.Ui.getDocumentsMatchingQuery(e,n,r).next(e=>(t.forEach(t=>{e=e.insert(t.key,t)}),e))}}/**
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
 */class iZ{constructor(e,t,n,r){this.persistence=e,this.Yi=t,this.serializer=r,this.Zi=new e$(V),this.Xi=new ne(e=>tz(e),tG),this.es=new Map,this.ts=e.getRemoteDocumentCache(),this.Qr=e.getTargetCache(),this.$r=e.getBundleCache(),this.ns(n)}ns(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new ik(this.ts,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ts.setIndexManager(this.indexManager),this.Yi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.Zi))}}async function iX(e,t){return await e.persistence.runTransaction("Handle user change","readonly",n=>{let r;return e.mutationQueue.getAllMutationBatches(n).next(i=>(r=i,e.ns(t),e.mutationQueue.getAllMutationBatches(n))).next(t=>{let i=[],s=[],a=nl();for(let e of r)for(let t of(i.push(e.batchId),e.mutations))a=a.add(t.key);for(let e of t)for(let t of(s.push(e.batchId),e.mutations))a=a.add(t.key);return e.localDocuments.getDocuments(n,a).next(e=>({rs:e,removedBatchIds:i,addedBatchIds:s}))})})}function i0(e){return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Qr.getLastRemoteSnapshotVersion(t))}function i1(e,t,n){let r=nl(),i=nl();return n.forEach(e=>r=r.add(e)),t.getEntries(e,r).next(e=>{let r=nt;return n.forEach((n,s)=>{let a=e.get(n);s.isFoundDocument()!==a.isFoundDocument()&&(i=i.add(n)),s.isNoDocument()&&s.version.isEqual(P.min())?(t.removeEntry(n,s.readTime),r=r.insert(n,s)):!a.isValidDocument()||s.version.compareTo(a.version)>0||0===s.version.compareTo(a.version)&&a.hasPendingWrites?(t.addEntry(s),r=r.insert(n,s)):y("LocalStore","Ignoring outdated watch update for ",n,". Current version:",a.version," Watch version:",s.version)}),{ss:r,os:i}})}function i2(e,t){return e.persistence.runTransaction("Allocate target","readwrite",n=>{let r;return e.Qr.getTargetData(n,t).next(i=>i?(r=i,en.resolve(r)):e.Qr.allocateTargetId(n).next(i=>(r=new r_(t,i,"TargetPurposeListen",n.currentSequenceNumber),e.Qr.addTargetData(n,r).next(()=>r))))}).then(n=>{let r=e.Zi.get(n.targetId);return(null===r||n.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(e.Zi=e.Zi.insert(n.targetId,n),e.Xi.set(t,n.targetId)),n})}async function i5(e,t,n){let r=e.Zi.get(t);try{n||await e.persistence.runTransaction("Release target",n?"readwrite":"readwrite-primary",t=>e.persistence.referenceDelegate.removeTarget(t,r))}catch(e){if(!eo(e))throw e;y("LocalStore",`Failed to update sequence numbers for target ${t}: ${e}`)}e.Zi=e.Zi.remove(t),e.Xi.delete(r.target)}function i4(e,t,n){let r=P.min(),i=nl();return e.persistence.runTransaction("Execute query","readonly",s=>(function(e,t,n){let r=e.Xi.get(n);return void 0!==r?en.resolve(e.Zi.get(r)):e.Qr.getTargetData(t,n)})(e,s,t1(t)).next(t=>{if(t)return r=t.lastLimboFreeSnapshotVersion,e.Qr.getMatchingKeysForTargetId(s,t.targetId).next(e=>{i=e})}).next(()=>e.Yi.getDocumentsMatchingQuery(s,t,n?r:P.min(),n?i:nl())).next(n=>(i9(e,t6(t),n),{documents:n,_s:i})))}function i8(e,t){let n=e.Qr,r=e.Zi.get(t);return r?Promise.resolve(r.target):e.persistence.runTransaction("Get target data","readonly",e=>n.lt(e,t).next(e=>e?e.target:null))}function i3(e,t){let n=e.es.get(t)||P.min();return e.persistence.runTransaction("Get new document changes","readonly",r=>e.ts.getAllFromCollectionGroup(r,t,Y(n,-1),Number.MAX_SAFE_INTEGER)).then(n=>(i9(e,t,n),n))}function i9(e,t,n){let r=e.es.get(t)||P.min();n.forEach((e,t)=>{t.readTime.compareTo(r)>0&&(r=t.readTime)}),e.es.set(t,r)}async function i6(e,t,n,r){let i=nl(),s=nt;for(let e of n){let n=t.us(e.metadata.name);e.document&&(i=i.add(n));let r=t.cs(e);r.setReadTime(t.ls(e.metadata.readTime)),s=s.insert(n,r)}let a=e.ts.newChangeBuffer({trackRemovals:!0}),o=await i2(e,t1(tY(U.fromString(`__bundle__/docs/${r}`))));return e.persistence.runTransaction("Apply bundle documents","readwrite",t=>i1(t,a,s).next(e=>(a.apply(t),e)).next(n=>e.Qr.removeMatchingKeysForTargetId(t,o.targetId).next(()=>e.Qr.addMatchingKeys(t,i,o.targetId)).next(()=>e.localDocuments.getLocalViewOfDocuments(t,n.ss,n.os)).next(()=>n.ss)))}async function i7(e,t,n=nl()){let r=await i2(e,t1(rN(t.bundledQuery)));return e.persistence.runTransaction("Save named query","readwrite",i=>{let s=rn(t.readTime);if(r.snapshotVersion.compareTo(s)>=0)return e.$r.saveNamedQuery(i,t);let a=r.withResumeToken(e0.EMPTY_BYTE_STRING,s);return e.Zi=e.Zi.insert(a.targetId,a),e.Qr.updateTargetData(i,a).next(()=>e.Qr.removeMatchingKeysForTargetId(i,r.targetId)).next(()=>e.Qr.addMatchingKeys(i,n,r.targetId)).next(()=>e.$r.saveNamedQuery(i,t))})}function se(e,t){return`firestore_clients_${e}_${t}`}function st(e,t,n){let r=`firestore_mutations_${e}_${n}`;return t.isAuthenticated()&&(r+=`_${t.uid}`),r}function sn(e,t){return`firestore_targets_${e}_${t}`}class sr{constructor(e,t,n,r){this.user=e,this.batchId=t,this.state=n,this.error=r}static hs(e,t,n){let r=JSON.parse(n),i,s="object"==typeof r&&-1!==["pending","acknowledged","rejected"].indexOf(r.state)&&(void 0===r.error||"object"==typeof r.error);return s&&r.error&&(s="string"==typeof r.error.message&&"string"==typeof r.error.code)&&(i=new T(r.error.code,r.error.message)),s?new sr(e,t,r.state,i):(w("SharedClientState",`Failed to parse mutation state for ID '${t}': ${n}`),null)}Ps(){let e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class si{constructor(e,t,n){this.targetId=e,this.state=t,this.error=n}static hs(e,t){let n=JSON.parse(t),r,i="object"==typeof n&&-1!==["not-current","current","rejected"].indexOf(n.state)&&(void 0===n.error||"object"==typeof n.error);return i&&n.error&&(i="string"==typeof n.error.message&&"string"==typeof n.error.code)&&(r=new T(n.error.code,n.error.message)),i?new si(e,n.state,r):(w("SharedClientState",`Failed to parse target state for ID '${e}': ${t}`),null)}Ps(){let e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class ss{constructor(e,t){this.clientId=e,this.activeTargetIds=t}static hs(e,t){let n=JSON.parse(t),r="object"==typeof n&&n.activeTargetIds instanceof Array,i=nu;for(let e=0;r&&e<n.activeTargetIds.length;++e)r=ey(n.activeTargetIds[e]),i=i.add(n.activeTargetIds[e]);return r?new ss(e,i):(w("SharedClientState",`Failed to parse client data for instance '${e}': ${t}`),null)}}class sa{constructor(e,t){this.clientId=e,this.onlineState=t}static hs(e){let t=JSON.parse(e);return"object"==typeof t&&-1!==["Unknown","Online","Offline"].indexOf(t.onlineState)&&"string"==typeof t.clientId?new sa(t.clientId,t.onlineState):(w("SharedClientState",`Failed to parse online state: ${e}`),null)}}class so{constructor(){this.activeTargetIds=nu}Is(e){this.activeTargetIds=this.activeTargetIds.add(e)}Ts(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ps(){let e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class sl{constructor(e,t,n,r,i){this.window=e,this.oi=t,this.persistenceKey=n,this.Es=r,this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null,this.ds=this.As.bind(this),this.Rs=new e$(V),this.started=!1,this.Vs=[];let s=n.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");this.storage=this.window.localStorage,this.currentUser=i,this.fs=se(this.persistenceKey,this.Es),this.gs=`firestore_sequence_number_${this.persistenceKey}`,this.Rs=this.Rs.insert(this.Es,new so),this.ps=RegExp(`^firestore_clients_${s}_([^_]*)$`),this.ys=RegExp(`^firestore_mutations_${s}_(\\d+)(?:_(.*))?$`),this.ws=RegExp(`^firestore_targets_${s}_(\\d+)$`),this.Ss=`firestore_online_state_${this.persistenceKey}`,this.bs=`firestore_bundle_loaded_v2_${this.persistenceKey}`,this.window.addEventListener("storage",this.ds)}static v(e){return!(!e||!e.localStorage)}async start(){let e=await this.syncEngine.Li();for(let t of e){if(t===this.Es)continue;let e=this.getItem(se(this.persistenceKey,t));if(e){let n=ss.hs(t,e);n&&(this.Rs=this.Rs.insert(n.clientId,n))}}this.Ds();let t=this.storage.getItem(this.Ss);if(t){let e=this.vs(t);e&&this.Cs(e)}for(let e of this.Vs)this.As(e);this.Vs=[],this.window.addEventListener("pagehide",()=>this.shutdown()),this.started=!0}writeSequenceNumber(e){this.setItem(this.gs,JSON.stringify(e))}getAllActiveQueryTargets(){return this.Fs(this.Rs)}isActiveQueryTarget(e){let t=!1;return this.Rs.forEach((n,r)=>{r.activeTargetIds.has(e)&&(t=!0)}),t}addPendingMutation(e){this.Ms(e,"pending")}updateMutationState(e,t,n){this.Ms(e,t,n),this.xs(e)}addLocalQueryTarget(e){let t="not-current";if(this.isActiveQueryTarget(e)){let n=this.storage.getItem(sn(this.persistenceKey,e));if(n){let r=si.hs(e,n);r&&(t=r.state)}}return this.Os.Is(e),this.Ds(),t}removeLocalQueryTarget(e){this.Os.Ts(e),this.Ds()}isLocalQueryTarget(e){return this.Os.activeTargetIds.has(e)}clearQueryState(e){this.removeItem(sn(this.persistenceKey,e))}updateQueryState(e,t,n){this.Ns(e,t,n)}handleUserChange(e,t,n){t.forEach(e=>{this.xs(e)}),this.currentUser=e,n.forEach(e=>{this.addPendingMutation(e)})}setOnlineState(e){this.Bs(e)}notifyBundleLoaded(e){this.Ls(e)}shutdown(){this.started&&(this.window.removeEventListener("storage",this.ds),this.removeItem(this.fs),this.started=!1)}getItem(e){let t=this.storage.getItem(e);return y("SharedClientState","READ",e,t),t}setItem(e,t){y("SharedClientState","SET",e,t),this.storage.setItem(e,t)}removeItem(e){y("SharedClientState","REMOVE",e),this.storage.removeItem(e)}As(e){if(e.storageArea===this.storage){if(y("SharedClientState","EVENT",e.key,e.newValue),e.key===this.fs)return void w("Received WebStorage notification for local change. Another client might have garbage-collected our state");this.oi.enqueueRetryable(async()=>{if(this.started){if(null!==e.key){if(this.ps.test(e.key)){if(null==e.newValue){let t=this.ks(e.key);return this.qs(t,null)}{let t=this.Qs(e.key,e.newValue);if(t)return this.qs(t.clientId,t)}}else if(this.ys.test(e.key)){if(null!==e.newValue){let t=this.Ks(e.key,e.newValue);if(t)return this.$s(t)}}else if(this.ws.test(e.key)){if(null!==e.newValue){let t=this.Us(e.key,e.newValue);if(t)return this.Ws(t)}}else if(e.key===this.Ss){if(null!==e.newValue){let t=this.vs(e.newValue);if(t)return this.Cs(t)}}else if(e.key===this.gs){let t=function(e){let t=em.ae;if(null!=e)try{let n=JSON.parse(e);"number"==typeof n||_(),t=n}catch(e){w("SharedClientState","Failed to read sequence number from WebStorage",e)}return t}(e.newValue);t!==em.ae&&this.sequenceNumberHandler(t)}else if(e.key===this.bs){let t=this.Gs(e.newValue);await Promise.all(t.map(e=>this.syncEngine.zs(e)))}}}else this.Vs.push(e)})}}get Os(){return this.Rs.get(this.Es)}Ds(){this.setItem(this.fs,this.Os.Ps())}Ms(e,t,n){let r=new sr(this.currentUser,e,t,n),i=st(this.persistenceKey,this.currentUser,e);this.setItem(i,r.Ps())}xs(e){let t=st(this.persistenceKey,this.currentUser,e);this.removeItem(t)}Bs(e){let t={clientId:this.Es,onlineState:e};this.storage.setItem(this.Ss,JSON.stringify(t))}Ns(e,t,n){let r=sn(this.persistenceKey,e),i=new si(e,t,n);this.setItem(r,i.Ps())}Ls(e){let t=JSON.stringify(Array.from(e));this.setItem(this.bs,t)}ks(e){let t=this.ps.exec(e);return t?t[1]:null}Qs(e,t){let n=this.ks(e);return ss.hs(n,t)}Ks(e,t){let n=this.ys.exec(e),r=Number(n[1]),i=void 0!==n[2]?n[2]:null;return sr.hs(new d(i),r,t)}Us(e,t){let n=this.ws.exec(e),r=Number(n[1]);return si.hs(r,t)}vs(e){return sa.hs(e)}Gs(e){return JSON.parse(e)}async $s(e){if(e.user.uid===this.currentUser.uid)return this.syncEngine.js(e.batchId,e.state,e.error);y("SharedClientState",`Ignoring mutation for non-active user ${e.user.uid}`)}Ws(e){return this.syncEngine.Hs(e.targetId,e.state,e.error)}qs(e,t){let n=t?this.Rs.insert(e,t):this.Rs.remove(e),r=this.Fs(this.Rs),i=this.Fs(n),s=[],a=[];return i.forEach(e=>{r.has(e)||s.push(e)}),r.forEach(e=>{i.has(e)||a.push(e)}),this.syncEngine.Js(s,a).then(()=>{this.Rs=n})}Cs(e){this.Rs.get(e.clientId)&&this.onlineStateHandler(e.onlineState)}Fs(e){let t=nu;return e.forEach((e,n)=>{t=t.unionWith(n.activeTargetIds)}),t}}class su{constructor(){this.Ys=new so,this.Zs={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,n){}addLocalQueryTarget(e){return this.Ys.Is(e),this.Zs[e]||"not-current"}updateQueryState(e,t,n){this.Zs[e]=t}removeLocalQueryTarget(e){this.Ys.Ts(e)}isLocalQueryTarget(e){return this.Ys.activeTargetIds.has(e)}clearQueryState(e){delete this.Zs[e]}getAllActiveQueryTargets(){return this.Ys.activeTargetIds}isActiveQueryTarget(e){return this.Ys.activeTargetIds.has(e)}start(){return this.Ys=new so,Promise.resolve()}handleUserChange(e,t,n){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class sc{Xs(e){}shutdown(){}}/**
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
 */class sh{constructor(){this.eo=()=>this.no(),this.ro=()=>this.io(),this.so=[],this.oo()}Xs(e){this.so.push(e)}shutdown(){window.removeEventListener("online",this.eo),window.removeEventListener("offline",this.ro)}oo(){window.addEventListener("online",this.eo),window.addEventListener("offline",this.ro)}no(){for(let e of(y("ConnectivityMonitor","Network connectivity changed: AVAILABLE"),this.so))e(0)}io(){for(let e of(y("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE"),this.so))e(1)}static v(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}/**
 * @license
 * Copyright 2023 Google LLC
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
 */let sd=null;function sf(){return null===sd?sd=268435456+Math.round(2147483648*Math.random()):sd++,"0x"+sd.toString(16)}/**
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
 */let sm={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class sg{constructor(e){this._o=e._o,this.ao=e.ao}uo(e){this.co=e}lo(e){this.ho=e}onMessage(e){this.Po=e}close(){this.ao()}send(e){this._o(e)}Io(){this.co()}To(e){this.ho(e)}Eo(e){this.Po(e)}}/**
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
 */let sp="WebChannelConnection";class sy extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;let t=e.ssl?"https":"http",n=encodeURIComponent(this.databaseId.projectId),r=encodeURIComponent(this.databaseId.database);this.Ao=t+"://"+e.host,this.Ro=`projects/${n}/databases/${r}`,this.Vo="(default)"===this.databaseId.database?`project_id=${n}`:`project_id=${n}&database_id=${r}`}get mo(){return!1}fo(e,t,n,r,i){let s=sf(),a=this.po(e,t);y("RestConnection",`Sending RPC '${e}' ${s}:`,a,n);let o={"google-cloud-resource-prefix":this.Ro,"x-goog-request-params":this.Vo};return this.yo(o,r,i),this.wo(e,a,o,n).then(t=>(y("RestConnection",`Received RPC '${e}' ${s}: `,t),t),t=>{throw v("RestConnection",`RPC '${e}' ${s} failed with error: `,t,"url: ",a,"request:",n),t})}So(e,t,n,r,i,s){return this.fo(e,t,n,r,i)}yo(e,t,n){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+f}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((t,n)=>e[n]=t),n&&n.headers.forEach((t,n)=>e[n]=t)}po(e,t){let n=sm[e];return`${this.Ao}/v1/${t}:${n}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}wo(e,t,n,r){let i=sf();return new Promise((s,a)=>{let o=new u.JJ;o.setWithCredentials(!0),o.listenOnce(u.tw.COMPLETE,()=>{try{switch(o.getLastErrorCode()){case u.jK.NO_ERROR:let t=o.getResponseJson();y(sp,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(t)),s(t);break;case u.jK.TIMEOUT:y(sp,`RPC '${e}' ${i} timed out`),a(new T(E.DEADLINE_EXCEEDED,"Request time out"));break;case u.jK.HTTP_ERROR:let n=o.getStatus();if(y(sp,`RPC '${e}' ${i} failed with status:`,n,"response text:",o.getResponseText()),n>0){let e=o.getResponseJson();Array.isArray(e)&&(e=e[0]);let t=null==e?void 0:e.error;if(t&&t.status&&t.message){let e=function(e){let t=e.toLowerCase().replace(/_/g,"-");return Object.values(E).indexOf(t)>=0?t:E.UNKNOWN}(t.status);a(new T(e,t.message))}else a(new T(E.UNKNOWN,"Server responded with status "+o.getStatus()))}else a(new T(E.UNAVAILABLE,"Connection failed."));break;default:_()}}finally{y(sp,`RPC '${e}' ${i} completed.`)}});let l=JSON.stringify(r);y(sp,`RPC '${e}' ${i} sending request:`,r),o.send(t,"POST",l,n,15)})}bo(e,t,n){let i=sf(),s=[this.Ao,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=(0,u.UE)(),o=(0,u.FJ)(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;void 0!==c&&(l.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(l.useFetchStreams=!0),this.yo(l.initMessageHeaders,t,n),l.encodeInitMessageHeaders=!0;let h=s.join("");y(sp,`Creating RPC '${e}' stream ${i}: ${h}`,l);let d=a.createWebChannel(h,l),f=!1,m=!1,g=new sg({_o:t=>{m?y(sp,`Not sending because RPC '${e}' stream ${i} is closed:`,t):(f||(y(sp,`Opening RPC '${e}' stream ${i} transport.`),d.open(),f=!0),y(sp,`RPC '${e}' stream ${i} sending:`,t),d.send(t))},ao:()=>d.close()}),p=(e,t,n)=>{e.listen(t,e=>{try{n(e)}catch(e){setTimeout(()=>{throw e},0)}})};return p(d,u.ii.EventType.OPEN,()=>{m||y(sp,`RPC '${e}' stream ${i} transport opened.`)}),p(d,u.ii.EventType.CLOSE,()=>{m||(m=!0,y(sp,`RPC '${e}' stream ${i} transport closed`),g.To())}),p(d,u.ii.EventType.ERROR,t=>{m||(m=!0,v(sp,`RPC '${e}' stream ${i} transport errored:`,t),g.To(new T(E.UNAVAILABLE,"The operation could not be completed")))}),p(d,u.ii.EventType.MESSAGE,t=>{var n;if(!m){let s=t.data[0];s||_();let a=s.error||(null===(n=s[0])||void 0===n?void 0:n.error);if(a){y(sp,`RPC '${e}' stream ${i} received error:`,a);let t=a.status,n=function(e){let t=r[e];if(void 0!==t)return nG(t)}(t),s=a.message;void 0===n&&(n=E.INTERNAL,s="Unknown error status: "+t+" with message "+a.message),m=!0,g.To(new T(n,s)),d.close()}else y(sp,`RPC '${e}' stream ${i} received:`,s),g.Eo(s)}}),p(o,u.ju.STAT_EVENT,t=>{t.stat===u.kN.PROXY?y(sp,`RPC '${e}' stream ${i} detected buffering proxy`):t.stat===u.kN.NOPROXY&&y(sp,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{g.Io()},0),g}}/**
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
 */function sw(){return"undefined"!=typeof window?window:null}function sv(){return"undefined"!=typeof document?document:null}/**
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
 */function sI(e){return new n6(e,!0)}/**
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
 */class s_{constructor(e,t,n=1e3,r=1.5,i=6e4){this.oi=e,this.timerId=t,this.Do=n,this.vo=r,this.Co=i,this.Fo=0,this.Mo=null,this.xo=Date.now(),this.reset()}reset(){this.Fo=0}Oo(){this.Fo=this.Co}No(e){this.cancel();let t=Math.floor(this.Fo+this.Bo()),n=Math.max(0,Date.now()-this.xo),r=Math.max(0,t-n);r>0&&y("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.Fo} ms, delay with jitter: ${t} ms, last attempt: ${n} ms ago)`),this.Mo=this.oi.enqueueAfterDelay(this.timerId,r,()=>(this.xo=Date.now(),e())),this.Fo*=this.vo,this.Fo<this.Do&&(this.Fo=this.Do),this.Fo>this.Co&&(this.Fo=this.Co)}Lo(){null!==this.Mo&&(this.Mo.skipDelay(),this.Mo=null)}cancel(){null!==this.Mo&&(this.Mo.cancel(),this.Mo=null)}Bo(){return(Math.random()-.5)*this.Fo}}/**
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
 */class sb{constructor(e,t,n,r,i,s,a,o){this.oi=e,this.ko=n,this.qo=r,this.connection=i,this.authCredentialsProvider=s,this.appCheckCredentialsProvider=a,this.listener=o,this.state=0,this.Qo=0,this.Ko=null,this.$o=null,this.stream=null,this.Uo=new s_(e,t)}Wo(){return 1===this.state||5===this.state||this.Go()}Go(){return 2===this.state||3===this.state}start(){4!==this.state?this.auth():this.zo()}async stop(){this.Wo()&&await this.close(0)}jo(){this.state=0,this.Uo.reset()}Ho(){this.Go()&&null===this.Ko&&(this.Ko=this.oi.enqueueAfterDelay(this.ko,6e4,()=>this.Jo()))}Yo(e){this.Zo(),this.stream.send(e)}async Jo(){if(this.Go())return this.close(0)}Zo(){this.Ko&&(this.Ko.cancel(),this.Ko=null)}Xo(){this.$o&&(this.$o.cancel(),this.$o=null)}async close(e,t){this.Zo(),this.Xo(),this.Uo.cancel(),this.Qo++,4!==e?this.Uo.reset():t&&t.code===E.RESOURCE_EXHAUSTED?(w(t.toString()),w("Using maximum backoff delay to prevent overloading the backend."),this.Uo.Oo()):t&&t.code===E.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.e_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.lo(t)}e_(){}auth(){this.state=1;let e=this.t_(this.Qo),t=this.Qo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([e,n])=>{this.Qo===t&&this.n_(e,n)},t=>{e(()=>{let e=new T(E.UNKNOWN,"Fetching auth token failed: "+t.message);return this.r_(e)})})}n_(e,t){let n=this.t_(this.Qo);this.stream=this.i_(e,t),this.stream.uo(()=>{n(()=>(this.state=2,this.$o=this.oi.enqueueAfterDelay(this.qo,1e4,()=>(this.Go()&&(this.state=3),Promise.resolve())),this.listener.uo()))}),this.stream.lo(e=>{n(()=>this.r_(e))}),this.stream.onMessage(e=>{n(()=>this.onMessage(e))})}zo(){this.state=5,this.Uo.No(async()=>{this.state=0,this.start()})}r_(e){return y("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}t_(e){return t=>{this.oi.enqueueAndForget(()=>this.Qo===e?t():(y("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class sE extends sb{constructor(e,t,n,r,i,s){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,n,r,s),this.serializer=i}i_(e,t){return this.connection.bo("Listen",e,t)}onMessage(e){this.Uo.reset();let t=function(e,t){let n;if("targetChange"in t){var r,i;t.targetChange;let s="NO_CHANGE"===(r=t.targetChange.targetChangeType||"NO_CHANGE")?0:"ADD"===r?1:"REMOVE"===r?2:"CURRENT"===r?3:"RESET"===r?4:_(),a=t.targetChange.targetIds||[],o=(i=t.targetChange.resumeToken,e.useProto3Json?(void 0===i||"string"==typeof i||_(),e0.fromBase64String(i||"")):(void 0===i||i instanceof Uint8Array||_(),e0.fromUint8Array(i||new Uint8Array))),l=t.targetChange.cause,u=l&&function(e){let t=void 0===e.code?E.UNKNOWN:nG(e.code);return new T(t,e.message||"")}(l);n=new n0(s,a,o,u||null)}else if("documentChange"in t){t.documentChange;let r=t.documentChange;r.document,r.document.name,r.document.updateTime;let i=ra(e,r.document.name),s=rn(r.document.updateTime),a=r.document.createTime?rn(r.document.createTime):P.min(),o=new tw({mapValue:{fields:r.document.fields}}),l=tv.newFoundDocument(i,s,a,o),u=r.targetIds||[],c=r.removedTargetIds||[];n=new nZ(u,c,l.key,l)}else if("documentDelete"in t){t.documentDelete;let r=t.documentDelete;r.document;let i=ra(e,r.document),s=r.readTime?rn(r.readTime):P.min(),a=tv.newNoDocument(i,s),o=r.removedTargetIds||[];n=new nZ([],o,a.key,a)}else if("documentRemove"in t){t.documentRemove;let r=t.documentRemove;r.document;let i=ra(e,r.document),s=r.removedTargetIds||[];n=new nZ([],s,i,null)}else{if(!("filter"in t))return _();{t.filter;let e=t.filter;e.targetId;let{count:r=0,unchangedNames:i}=e,s=new nB(r,i),a=e.targetId;n=new nX(a,s)}}return n}(this.serializer,e),n=function(e){if(!("targetChange"in e))return P.min();let t=e.targetChange;return t.targetIds&&t.targetIds.length?P.min():t.readTime?rn(t.readTime):P.min()}(e);return this.listener.s_(t,n)}o_(e){let t={};t.database=ru(this.serializer),t.addTarget=function(e,t){let n;let r=t.target;if((n=tK(r)?{documents:rg(e,r)}:{query:rp(e,r)}).targetId=t.targetId,t.resumeToken.approximateByteSize()>0){n.resumeToken=rt(e,t.resumeToken);let r=n7(e,t.expectedCount);null!==r&&(n.expectedCount=r)}else if(t.snapshotVersion.compareTo(P.min())>0){n.readTime=re(e,t.snapshotVersion.toTimestamp());let r=n7(e,t.expectedCount);null!==r&&(n.expectedCount=r)}return n}(this.serializer,e);let n=function(e,t){let n=function(e){switch(e){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return _()}}(t.purpose);return null==n?null:{"goog-listen-tags":n}}(this.serializer,e);n&&(t.labels=n),this.Yo(t)}__(e){let t={};t.database=ru(this.serializer),t.removeTarget=e,this.Yo(t)}}class sT extends sb{constructor(e,t,n,r,i,s){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,n,r,s),this.serializer=i,this.a_=!1}get u_(){return this.a_}start(){this.a_=!1,this.lastStreamToken=void 0,super.start()}e_(){this.a_&&this.c_([])}i_(e,t){return this.connection.bo("Write",e,t)}onMessage(e){var t,n;if(e.streamToken||_(),this.lastStreamToken=e.streamToken,this.a_){this.Uo.reset();let r=(t=e.writeResults,n=e.commitTime,t&&t.length>0?(void 0!==n||_(),t.map(e=>{let t;return(t=e.updateTime?rn(e.updateTime):rn(n)).isEqual(P.min())&&(t=rn(n)),new nT(t,e.transformResults||[])})):[]),i=rn(e.commitTime);return this.listener.l_(i,r)}return e.writeResults&&0!==e.writeResults.length&&_(),this.a_=!0,this.listener.h_()}P_(){let e={};e.database=ru(this.serializer),this.Yo(e)}c_(e){let t={streamToken:this.lastStreamToken,writes:e.map(e=>rf(this.serializer,e))};this.Yo(t)}}/**
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
 */class sS extends class{}{constructor(e,t,n,r){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=n,this.serializer=r,this.I_=!1}T_(){if(this.I_)throw new T(E.FAILED_PRECONDITION,"The client has already been terminated.")}fo(e,t,n){return this.T_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,i])=>this.connection.fo(e,t,n,r,i)).catch(e=>{throw"FirebaseError"===e.name?(e.code===E.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new T(E.UNKNOWN,e.toString())})}So(e,t,n,r){return this.T_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.connection.So(e,t,n,i,s,r)).catch(e=>{throw"FirebaseError"===e.name?(e.code===E.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new T(E.UNKNOWN,e.toString())})}terminate(){this.I_=!0}}class sx{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.d_=0,this.A_=null,this.R_=!0}V_(){0===this.d_&&(this.m_("Unknown"),this.A_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.A_=null,this.f_("Backend didn't respond within 10 seconds."),this.m_("Offline"),Promise.resolve())))}g_(e){"Online"===this.state?this.m_("Unknown"):(this.d_++,this.d_>=1&&(this.p_(),this.f_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.m_("Offline")))}set(e){this.p_(),this.d_=0,"Online"===e&&(this.R_=!1),this.m_(e)}m_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}f_(e){let t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.R_?(w(t),this.R_=!1):y("OnlineStateTracker",t)}p_(){null!==this.A_&&(this.A_.cancel(),this.A_=null)}}/**
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
 */class sD{constructor(e,t,n,r,i){this.localStore=e,this.datastore=t,this.asyncQueue=n,this.remoteSyncer={},this.y_=[],this.w_=new Map,this.S_=new Set,this.b_=[],this.D_=i,this.D_.Xs(e=>{n.enqueueAndForget(async()=>{sL(this)&&(y("RemoteStore","Restarting streams for network reachability change."),await async function(e){e.S_.add(4),await sC(e),e.v_.set("Unknown"),e.S_.delete(4),await sA(e)}(this))})}),this.v_=new sx(n,r)}}async function sA(e){if(sL(e))for(let t of e.b_)await t(!0)}async function sC(e){for(let t of e.b_)await t(!1)}function sN(e,t){e.w_.has(t.targetId)||(e.w_.set(t.targetId,t),sV(e)?sM(e):sJ(e).Go()&&sR(e,t))}function sk(e,t){let n=sJ(e);e.w_.delete(t),n.Go()&&sF(e,t),0===e.w_.size&&(n.Go()?n.Ho():sL(e)&&e.v_.set("Unknown"))}function sR(e,t){if(e.C_.Le(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(P.min())>0){let n=e.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(n)}sJ(e).o_(t)}function sF(e,t){e.C_.Le(t),sJ(e).__(t)}function sM(e){e.C_=new n2({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),lt:t=>e.w_.get(t)||null,st:()=>e.datastore.serializer.databaseId}),sJ(e).start(),e.v_.V_()}function sV(e){return sL(e)&&!sJ(e).Wo()&&e.w_.size>0}function sL(e){return 0===e.S_.size}async function sO(e){e.w_.forEach((t,n)=>{sR(e,t)})}async function sP(e,t){e.C_=void 0,sV(e)?(e.v_.g_(t),sM(e)):e.v_.set("Unknown")}async function sq(e,t,n){if(e.v_.set("Online"),t instanceof n0&&2===t.state&&t.cause)try{await async function(e,t){let n=t.cause;for(let r of t.targetIds)e.w_.has(r)&&(await e.remoteSyncer.rejectListen(r,n),e.w_.delete(r),e.C_.removeTarget(r))}(e,t)}catch(n){y("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),n),await sU(e,n)}else if(t instanceof nZ?e.C_.Ge(t):t instanceof nX?e.C_.Xe(t):e.C_.He(t),!n.isEqual(P.min()))try{let t=await i0(e.localStore);n.compareTo(t)>=0&&await function(e,t){let n=e.C_._t(t);return n.targetChanges.forEach((n,r)=>{if(n.resumeToken.approximateByteSize()>0){let i=e.w_.get(r);i&&e.w_.set(r,i.withResumeToken(n.resumeToken,t))}}),n.targetMismatches.forEach((t,n)=>{let r=e.w_.get(t);if(!r)return;e.w_.set(t,r.withResumeToken(e0.EMPTY_BYTE_STRING,r.snapshotVersion)),sF(e,t);let i=new r_(r.target,t,n,r.sequenceNumber);sR(e,i)}),e.remoteSyncer.applyRemoteEvent(n)}(e,n)}catch(t){y("RemoteStore","Failed to raise snapshot:",t),await sU(e,t)}}async function sU(e,t,n){if(!eo(t))throw t;e.S_.add(1),await sC(e),e.v_.set("Offline"),n||(n=()=>i0(e.localStore)),e.asyncQueue.enqueueRetryable(async()=>{y("RemoteStore","Retrying IndexedDB access"),await n(),e.S_.delete(1),await sA(e)})}function sB(e,t){return t().catch(n=>sU(e,n,t))}async function sz(e){let t=sZ(e),n=e.y_.length>0?e.y_[e.y_.length-1].batchId:-1;for(;sL(e)&&e.y_.length<10;)try{let r=await function(e,t){return e.persistence.runTransaction("Get next mutation batch","readonly",n=>(void 0===t&&(t=-1),e.mutationQueue.getNextMutationBatchAfterBatchId(n,t)))}(e.localStore,n);if(null===r){0===e.y_.length&&t.Ho();break}n=r.batchId,function(e,t){e.y_.push(t);let n=sZ(e);n.Go()&&n.u_&&n.c_(t.mutations)}(e,r)}catch(t){await sU(e,t)}sG(e)&&sK(e)}function sG(e){return sL(e)&&!sZ(e).Wo()&&e.y_.length>0}function sK(e){sZ(e).start()}async function s$(e){sZ(e).P_()}async function sj(e){let t=sZ(e);for(let n of e.y_)t.c_(n.mutations)}async function sQ(e,t,n){let r=e.y_.shift(),i=nq.from(r,t,n);await sB(e,()=>e.remoteSyncer.applySuccessfulWrite(i)),await sz(e)}async function sW(e,t){t&&sZ(e).u_&&await async function(e,t){var n;if(nz(n=t.code)&&n!==E.ABORTED){let n=e.y_.shift();sZ(e).jo(),await sB(e,()=>e.remoteSyncer.rejectFailedWrite(n.batchId,t)),await sz(e)}}(e,t),sG(e)&&sK(e)}async function sY(e,t){e.asyncQueue.verifyOperationInProgress(),y("RemoteStore","RemoteStore received new credentials");let n=sL(e);e.S_.add(3),await sC(e),n&&e.v_.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.S_.delete(3),await sA(e)}async function sH(e,t){t?(e.S_.delete(2),await sA(e)):t||(e.S_.add(2),await sC(e),e.v_.set("Unknown"))}function sJ(e){var t,n,r;return e.F_||(e.F_=(t=e.datastore,n=e.asyncQueue,r={uo:sO.bind(null,e),lo:sP.bind(null,e),s_:sq.bind(null,e)},t.T_(),new sE(n,t.connection,t.authCredentials,t.appCheckCredentials,t.serializer,r)),e.b_.push(async t=>{t?(e.F_.jo(),sV(e)?sM(e):e.v_.set("Unknown")):(await e.F_.stop(),e.C_=void 0)})),e.F_}function sZ(e){var t,n,r;return e.M_||(e.M_=(t=e.datastore,n=e.asyncQueue,r={uo:s$.bind(null,e),lo:sW.bind(null,e),h_:sj.bind(null,e),l_:sQ.bind(null,e)},t.T_(),new sT(n,t.connection,t.authCredentials,t.appCheckCredentials,t.serializer,r)),e.b_.push(async t=>{t?(e.M_.jo(),await sz(e)):(await e.M_.stop(),e.y_.length>0&&(y("RemoteStore",`Stopping write stream with ${e.y_.length} pending writes`),e.y_=[]))})),e.M_}/**
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
 */class sX{constructor(e,t,n,r,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=n,this.op=r,this.removalCallback=i,this.deferred=new S,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(e=>{})}static createAndSchedule(e,t,n,r,i){let s=Date.now()+n,a=new sX(e,t,s,r,i);return a.start(n),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new T(E.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function s0(e,t){if(w("AsyncQueue",`${t}: ${e}`),eo(e))return new T(E.UNAVAILABLE,`${t}: ${e}`);throw e}/**
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
 */class s1{constructor(e){this.comparator=e?(t,n)=>e(t,n)||G.comparator(t.key,n.key):(e,t)=>G.comparator(e.key,t.key),this.keyedMap=nr(),this.sortedSet=new e$(this.comparator)}static emptySet(e){return new s1(e.comparator)}has(e){return null!=this.keyedMap.get(e)}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){let t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,n)=>(e(t),!1))}add(e){let t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){let t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof s1)||this.size!==e.size)return!1;let t=this.sortedSet.getIterator(),n=e.sortedSet.getIterator();for(;t.hasNext();){let e=t.getNext().key,r=n.getNext().key;if(!e.isEqual(r))return!1}return!0}toString(){let e=[];return this.forEach(t=>{e.push(t.toString())}),0===e.length?"DocumentSet ()":"DocumentSet (\n  "+e.join("  \n")+"\n)"}copy(e,t){let n=new s1;return n.comparator=this.comparator,n.keyedMap=e,n.sortedSet=t,n}}/**
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
 */class s2{constructor(){this.x_=new e$(G.comparator)}track(e){let t=e.doc.key,n=this.x_.get(t);n?0!==e.type&&3===n.type?this.x_=this.x_.insert(t,e):3===e.type&&1!==n.type?this.x_=this.x_.insert(t,{type:n.type,doc:e.doc}):2===e.type&&2===n.type?this.x_=this.x_.insert(t,{type:2,doc:e.doc}):2===e.type&&0===n.type?this.x_=this.x_.insert(t,{type:0,doc:e.doc}):1===e.type&&0===n.type?this.x_=this.x_.remove(t):1===e.type&&2===n.type?this.x_=this.x_.insert(t,{type:1,doc:n.doc}):0===e.type&&1===n.type?this.x_=this.x_.insert(t,{type:2,doc:e.doc}):_():this.x_=this.x_.insert(t,e)}O_(){let e=[];return this.x_.inorderTraversal((t,n)=>{e.push(n)}),e}}class s5{constructor(e,t,n,r,i,s,a,o,l){this.query=e,this.docs=t,this.oldDocs=n,this.docChanges=r,this.mutatedKeys=i,this.fromCache=s,this.syncStateChanged=a,this.excludesMetadataChanges=o,this.hasCachedResults=l}static fromInitialDocuments(e,t,n,r,i){let s=[];return t.forEach(e=>{s.push({type:0,doc:e})}),new s5(e,t,s1.emptySet(t),s,n,r,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&t4(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;let t=this.docChanges,n=e.docChanges;if(t.length!==n.length)return!1;for(let e=0;e<t.length;e++)if(t[e].type!==n[e].type||!t[e].doc.isEqual(n[e].doc))return!1;return!0}}/**
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
 */class s4{constructor(){this.N_=void 0,this.listeners=[]}}class s8{constructor(){this.queries=new ne(e=>t8(e),t4),this.onlineState="Unknown",this.B_=new Set}}async function s3(e,t){let n=t.query,r=!1,i=e.queries.get(n);if(i||(r=!0,i=new s4),r)try{i.N_=await e.onListen(n)}catch(n){let e=s0(n,`Initialization of query '${t3(t.query)}' failed`);return void t.onError(e)}e.queries.set(n,i),i.listeners.push(t),t.L_(e.onlineState),i.N_&&t.k_(i.N_)&&ae(e)}async function s9(e,t){let n=t.query,r=!1,i=e.queries.get(n);if(i){let e=i.listeners.indexOf(t);e>=0&&(i.listeners.splice(e,1),r=0===i.listeners.length)}if(r)return e.queries.delete(n),e.onUnlisten(n)}function s6(e,t){let n=!1;for(let r of t){let t=r.query,i=e.queries.get(t);if(i){for(let e of i.listeners)e.k_(r)&&(n=!0);i.N_=r}}n&&ae(e)}function s7(e,t,n){let r=e.queries.get(t);if(r)for(let e of r.listeners)e.onError(n);e.queries.delete(t)}function ae(e){e.B_.forEach(e=>{e.next()})}class at{constructor(e,t,n){this.query=e,this.q_=t,this.Q_=!1,this.K_=null,this.onlineState="Unknown",this.options=n||{}}k_(e){if(!this.options.includeMetadataChanges){let t=[];for(let n of e.docChanges)3!==n.type&&t.push(n);e=new s5(e.query,e.docs,e.oldDocs,t,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Q_?this.U_(e)&&(this.q_.next(e),t=!0):this.W_(e,this.onlineState)&&(this.G_(e),t=!0),this.K_=e,t}onError(e){this.q_.error(e)}L_(e){this.onlineState=e;let t=!1;return this.K_&&!this.Q_&&this.W_(this.K_,e)&&(this.G_(this.K_),t=!0),t}W_(e,t){return!e.fromCache||(!this.options.z_||!("Offline"!==t))&&(!e.docs.isEmpty()||e.hasCachedResults||"Offline"===t)}U_(e){if(e.docChanges.length>0)return!0;let t=this.K_&&this.K_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&!0===this.options.includeMetadataChanges}G_(e){e=s5.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Q_=!0,this.q_.next(e)}}/**
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
 */class an{constructor(e,t){this.j_=e,this.byteLength=t}H_(){return"metadata"in this.j_}}/**
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
 */class ar{constructor(e){this.serializer=e}us(e){return ra(this.serializer,e)}cs(e){return e.metadata.exists?rd(this.serializer,e.document,!1):tv.newNoDocument(this.us(e.metadata.name),this.ls(e.metadata.readTime))}ls(e){return rn(e)}}class ai{constructor(e,t,n){this.J_=e,this.localStore=t,this.serializer=n,this.queries=[],this.documents=[],this.collectionGroups=new Set,this.progress=as(e)}Y_(e){this.progress.bytesLoaded+=e.byteLength;let t=this.progress.documentsLoaded;if(e.j_.namedQuery)this.queries.push(e.j_.namedQuery);else if(e.j_.documentMetadata){this.documents.push({metadata:e.j_.documentMetadata}),e.j_.documentMetadata.exists||++t;let n=U.fromString(e.j_.documentMetadata.name);this.collectionGroups.add(n.get(n.length-2))}else e.j_.document&&(this.documents[this.documents.length-1].document=e.j_.document,++t);return t!==this.progress.documentsLoaded?(this.progress.documentsLoaded=t,Object.assign({},this.progress)):null}Z_(e){let t=new Map,n=new ar(this.serializer);for(let r of e)if(r.metadata.queries){let e=n.us(r.metadata.name);for(let n of r.metadata.queries){let r=(t.get(n)||nl()).add(e);t.set(n,r)}}return t}async complete(){let e=await i6(this.localStore,new ar(this.serializer),this.documents,this.J_.id),t=this.Z_(this.documents);for(let e of this.queries)await i7(this.localStore,e,t.get(e.name));return this.progress.taskState="Success",{progress:this.progress,X_:this.collectionGroups,ea:e}}}function as(e){return{taskState:"Running",documentsLoaded:0,bytesLoaded:0,totalDocuments:e.totalDocuments,totalBytes:e.totalBytes}}/**
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
 */class aa{constructor(e){this.key=e}}class ao{constructor(e){this.key=e}}class al{constructor(e,t){this.query=e,this.ta=t,this.na=null,this.hasCachedResults=!1,this.current=!1,this.ra=nl(),this.mutatedKeys=nl(),this.ia=t7(e),this.sa=new s1(this.ia)}get oa(){return this.ta}_a(e,t){let n=t?t.aa:new s2,r=t?t.sa:this.sa,i=t?t.mutatedKeys:this.mutatedKeys,s=r,a=!1,o="F"===this.query.limitType&&r.size===this.query.limit?r.last():null,l="L"===this.query.limitType&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal((e,t)=>{let u=r.get(e),c=t9(this.query,t)?t:null,h=!!u&&this.mutatedKeys.has(u.key),d=!!c&&(c.hasLocalMutations||this.mutatedKeys.has(c.key)&&c.hasCommittedMutations),f=!1;u&&c?u.data.isEqual(c.data)?h!==d&&(n.track({type:3,doc:c}),f=!0):this.ua(u,c)||(n.track({type:2,doc:c}),f=!0,(o&&this.ia(c,o)>0||l&&0>this.ia(c,l))&&(a=!0)):!u&&c?(n.track({type:0,doc:c}),f=!0):u&&!c&&(n.track({type:1,doc:u}),f=!0,(o||l)&&(a=!0)),f&&(c?(s=s.add(c),i=d?i.add(e):i.delete(e)):(s=s.delete(e),i=i.delete(e)))}),null!==this.query.limit)for(;s.size>this.query.limit;){let e="F"===this.query.limitType?s.last():s.first();s=s.delete(e.key),i=i.delete(e.key),n.track({type:1,doc:e})}return{sa:s,aa:n,Hi:a,mutatedKeys:i}}ua(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,n){let r=this.sa;this.sa=e.sa,this.mutatedKeys=e.mutatedKeys;let i=e.aa.O_();i.sort((e,t)=>(function(e,t){let n=e=>{switch(e){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return _()}};return n(e)-n(t)})(e.type,t.type)||this.ia(e.doc,t.doc)),this.ca(n);let s=t?this.la():[],a=0===this.ra.size&&this.current?1:0,o=a!==this.na;return(this.na=a,0!==i.length||o)?{snapshot:new s5(this.query,e.sa,r,i,e.mutatedKeys,0===a,o,!1,!!n&&n.resumeToken.approximateByteSize()>0),ha:s}:{ha:s}}L_(e){return this.current&&"Offline"===e?(this.current=!1,this.applyChanges({sa:this.sa,aa:new s2,mutatedKeys:this.mutatedKeys,Hi:!1},!1)):{ha:[]}}Pa(e){return!this.ta.has(e)&&!!this.sa.has(e)&&!this.sa.get(e).hasLocalMutations}ca(e){e&&(e.addedDocuments.forEach(e=>this.ta=this.ta.add(e)),e.modifiedDocuments.forEach(e=>{}),e.removedDocuments.forEach(e=>this.ta=this.ta.delete(e)),this.current=e.current)}la(){if(!this.current)return[];let e=this.ra;this.ra=nl(),this.sa.forEach(e=>{this.Pa(e.key)&&(this.ra=this.ra.add(e.key))});let t=[];return e.forEach(e=>{this.ra.has(e)||t.push(new ao(e))}),this.ra.forEach(n=>{e.has(n)||t.push(new aa(n))}),t}Ia(e){this.ta=e._s,this.ra=nl();let t=this._a(e.documents);return this.applyChanges(t,!0)}Ta(){return s5.fromInitialDocuments(this.query,this.sa,this.mutatedKeys,0===this.na,this.hasCachedResults)}}class au{constructor(e,t,n){this.query=e,this.targetId=t,this.view=n}}class ac{constructor(e){this.key=e,this.Ea=!1}}class ah{constructor(e,t,n,r,i,s){this.localStore=e,this.remoteStore=t,this.eventManager=n,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=s,this.da={},this.Aa=new ne(e=>t8(e),t4),this.Ra=new Map,this.Va=new Set,this.ma=new e$(G.comparator),this.fa=new Map,this.ga=new iM,this.pa={},this.ya=new Map,this.wa=ic.Bn(),this.onlineState="Unknown",this.Sa=void 0}get isPrimaryClient(){return!0===this.Sa}}async function ad(e,t){let n,r;let i=aU(e),s=i.Aa.get(t);if(s)n=s.targetId,i.sharedClientState.addLocalQueryTarget(n),r=s.view.Ta();else{let e=await i2(i.localStore,t1(t)),s=i.sharedClientState.addLocalQueryTarget(e.targetId);n=e.targetId,r=await af(i,t,n,"current"===s,e.resumeToken),i.isPrimaryClient&&sN(i.remoteStore,e)}return r}async function af(e,t,n,r,i){e.ba=(t,n,r)=>(async function(e,t,n,r){let i=t.view._a(n);i.Hi&&(i=await i4(e.localStore,t.query,!1).then(({documents:e})=>t.view._a(e,i)));let s=r&&r.targetChanges.get(t.targetId),a=t.view.applyChanges(i,e.isPrimaryClient,s);return ax(e,t.targetId,a.ha),a.snapshot})(e,t,n,r);let s=await i4(e.localStore,t,!0),a=new al(t,s._s),o=a._a(s.documents),l=nJ.createSynthesizedTargetChangeForCurrentChange(n,r&&"Offline"!==e.onlineState,i),u=a.applyChanges(o,e.isPrimaryClient,l);ax(e,n,u.ha);let c=new au(t,n,a);return e.Aa.set(t,c),e.Ra.has(n)?e.Ra.get(n).push(t):e.Ra.set(n,[t]),u.snapshot}async function am(e,t){let n=e.Aa.get(t),r=e.Ra.get(n.targetId);if(r.length>1)return e.Ra.set(n.targetId,r.filter(e=>!t4(e,t))),void e.Aa.delete(t);e.isPrimaryClient?(e.sharedClientState.removeLocalQueryTarget(n.targetId),e.sharedClientState.isActiveQueryTarget(n.targetId)||await i5(e.localStore,n.targetId,!1).then(()=>{e.sharedClientState.clearQueryState(n.targetId),sk(e.remoteStore,n.targetId),aT(e,n.targetId)}).catch(et)):(aT(e,n.targetId),await i5(e.localStore,n.targetId,!0))}async function ag(e,t,n){let r=aB(e);try{var i;let e;let s=await function(e,t){let n,r;let i=O.now(),s=t.reduce((e,t)=>e.add(t.key),nl());return e.persistence.runTransaction("Locally write mutations","readwrite",a=>{let o=nt,l=nl();return e.ts.getEntries(a,s).next(e=>{(o=e).forEach((e,t)=>{t.isValidDocument()||(l=l.add(e))})}).next(()=>e.localDocuments.getOverlayedDocuments(a,o)).next(r=>{n=r;let s=[];for(let e of t){let t=function(e,t){let n=null;for(let r of e.fieldTransforms){let e=t.data.field(r.field),i=nm(r.transform,e||null);null!=i&&(null===n&&(n=tw.empty()),n.set(r.field,i))}return n||null}(e,n.get(e.key).overlayedDocument);null!=t&&s.push(new nR(e.key,t,function e(t){let n=[];return eG(t.fields,(t,r)=>{let i=new z([t]);if(tf(r)){let t=e(r.mapValue).fields;if(0===t.length)n.push(i);else for(let e of t)n.push(i.child(e))}else n.push(i)}),new eJ(n)}(t.value.mapValue),nS.exists(!0)))}return e.mutationQueue.addMutationBatch(a,i,s,t)}).next(t=>{r=t;let i=t.applyToLocalDocumentSet(n,l);return e.documentOverlayCache.saveOverlays(a,t.batchId,i)})}).then(()=>({batchId:r.batchId,changes:ni(n)}))}(r.localStore,t);r.sharedClientState.addPendingMutation(s.batchId),i=s.batchId,(e=r.pa[r.currentUser.toKey()])||(e=new e$(V)),e=e.insert(i,n),r.pa[r.currentUser.toKey()]=e,await aA(r,s.changes),await sz(r.remoteStore)}catch(t){let e=s0(t,"Failed to persist write");n.reject(e)}}async function ap(e,t){try{let n=await function(e,t){let n=t.snapshotVersion,r=e.Zi;return e.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{let s=e.ts.newChangeBuffer({trackRemovals:!0});r=e.Zi;let a=[];t.targetChanges.forEach((s,o)=>{var l;let u=r.get(o);if(!u)return;a.push(e.Qr.removeMatchingKeys(i,s.removedDocuments,o).next(()=>e.Qr.addMatchingKeys(i,s.addedDocuments,o)));let c=u.withSequenceNumber(i.currentSequenceNumber);null!==t.targetMismatches.get(o)?c=c.withResumeToken(e0.EMPTY_BYTE_STRING,P.min()).withLastLimboFreeSnapshotVersion(P.min()):s.resumeToken.approximateByteSize()>0&&(c=c.withResumeToken(s.resumeToken,n)),r=r.insert(o,c),l=c,(0===u.resumeToken.approximateByteSize()||l.snapshotVersion.toMicroseconds()-u.snapshotVersion.toMicroseconds()>=3e8||s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size>0)&&a.push(e.Qr.updateTargetData(i,c))});let o=nt,l=nl();if(t.documentUpdates.forEach(n=>{t.resolvedLimboDocuments.has(n)&&a.push(e.persistence.referenceDelegate.updateLimboDocument(i,n))}),a.push(i1(i,s,t.documentUpdates).next(e=>{o=e.ss,l=e.os})),!n.isEqual(P.min())){let t=e.Qr.getLastRemoteSnapshotVersion(i).next(t=>e.Qr.setTargetsMetadata(i,i.currentSequenceNumber,n));a.push(t)}return en.waitFor(a).next(()=>s.apply(i)).next(()=>e.localDocuments.getLocalViewOfDocuments(i,o,l)).next(()=>o)}).then(t=>(e.Zi=r,t))}(e.localStore,t);t.targetChanges.forEach((t,n)=>{let r=e.fa.get(n);r&&(t.addedDocuments.size+t.modifiedDocuments.size+t.removedDocuments.size<=1||_(),t.addedDocuments.size>0?r.Ea=!0:t.modifiedDocuments.size>0?r.Ea||_():t.removedDocuments.size>0&&(r.Ea||_(),r.Ea=!1))}),await aA(e,n,t)}catch(e){await et(e)}}function ay(e,t,n){var r;if(e.isPrimaryClient&&0===n||!e.isPrimaryClient&&1===n){let n;let i=[];e.Aa.forEach((e,n)=>{let r=n.view.L_(t);r.snapshot&&i.push(r.snapshot)}),(r=e.eventManager).onlineState=t,n=!1,r.queries.forEach((e,r)=>{for(let e of r.listeners)e.L_(t)&&(n=!0)}),n&&ae(r),i.length&&e.da.s_(i),e.onlineState=t,e.isPrimaryClient&&e.sharedClientState.setOnlineState(t)}}async function aw(e,t,n){e.sharedClientState.updateQueryState(t,"rejected",n);let r=e.fa.get(t),i=r&&r.key;if(i){let n=new e$(G.comparator);n=n.insert(i,tv.newNoDocument(i,P.min()));let r=nl().add(i),s=new nH(P.min(),new Map,new e$(V),n,r);await ap(e,s),e.ma=e.ma.remove(i),e.fa.delete(t),aD(e)}else await i5(e.localStore,t,!1).then(()=>aT(e,t,n)).catch(et)}async function av(e,t){var n;let r=t.batch.batchId;try{let i=await (n=e.localStore).persistence.runTransaction("Acknowledge batch","readwrite-primary",e=>{let r=t.batch.keys(),i=n.ts.newChangeBuffer({trackRemovals:!0});return(function(e,t,n,r){let i=n.batch,s=i.keys(),a=en.resolve();return s.forEach(e=>{a=a.next(()=>r.getEntry(t,e)).next(t=>{let s=n.docVersions.get(e);null!==s||_(),0>t.version.compareTo(s)&&(i.applyToRemoteDocument(t,n),t.isValidDocument()&&(t.setReadTime(n.commitVersion),r.addEntry(t)))})}),a.next(()=>e.mutationQueue.removeMutationBatch(t,i))})(n,e,t,i).next(()=>i.apply(e)).next(()=>n.mutationQueue.performConsistencyCheck(e)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(e,r,t.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,function(e){let t=nl();for(let n=0;n<e.mutationResults.length;++n)e.mutationResults[n].transformResults.length>0&&(t=t.add(e.batch.mutations[n].key));return t}(t))).next(()=>n.localDocuments.getDocuments(e,r))});aE(e,r,null),ab(e,r),e.sharedClientState.updateMutationState(r,"acknowledged"),await aA(e,i)}catch(e){await et(e)}}async function aI(e,t,n){var r;try{let i=await (r=e.localStore).persistence.runTransaction("Reject batch","readwrite-primary",e=>{let n;return r.mutationQueue.lookupMutationBatch(e,t).next(t=>(null!==t||_(),n=t.keys(),r.mutationQueue.removeMutationBatch(e,t))).next(()=>r.mutationQueue.performConsistencyCheck(e)).next(()=>r.documentOverlayCache.removeOverlaysForBatchId(e,n,t)).next(()=>r.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,n)).next(()=>r.localDocuments.getDocuments(e,n))});aE(e,t,n),ab(e,t),e.sharedClientState.updateMutationState(t,"rejected",n),await aA(e,i)}catch(e){await et(e)}}async function a_(e,t){var n;sL(e.remoteStore)||y("SyncEngine","The network is disabled. The task returned by 'awaitPendingWrites()' will not complete until the network is enabled.");try{let r=await (n=e.localStore).persistence.runTransaction("Get highest unacknowledged batch id","readonly",e=>n.mutationQueue.getHighestUnacknowledgedBatchId(e));if(-1===r)return void t.resolve();let i=e.ya.get(r)||[];i.push(t),e.ya.set(r,i)}catch(n){let e=s0(n,"Initialization of waitForPendingWrites() operation failed");t.reject(e)}}function ab(e,t){(e.ya.get(t)||[]).forEach(e=>{e.resolve()}),e.ya.delete(t)}function aE(e,t,n){let r=e.pa[e.currentUser.toKey()];if(r){let i=r.get(t);i&&(n?i.reject(n):i.resolve(),r=r.remove(t)),e.pa[e.currentUser.toKey()]=r}}function aT(e,t,n=null){for(let r of(e.sharedClientState.removeLocalQueryTarget(t),e.Ra.get(t)))e.Aa.delete(r),n&&e.da.Da(r,n);e.Ra.delete(t),e.isPrimaryClient&&e.ga.Vr(t).forEach(t=>{e.ga.containsKey(t)||aS(e,t)})}function aS(e,t){e.Va.delete(t.path.canonicalString());let n=e.ma.get(t);null!==n&&(sk(e.remoteStore,n),e.ma=e.ma.remove(t),e.fa.delete(n),aD(e))}function ax(e,t,n){for(let r of n)r instanceof aa?(e.ga.addReference(r.key,t),function(e,t){let n=t.key,r=n.path.canonicalString();e.ma.get(n)||e.Va.has(r)||(y("SyncEngine","New document in limbo: "+n),e.Va.add(r),aD(e))}(e,r)):r instanceof ao?(y("SyncEngine","Document no longer in limbo: "+r.key),e.ga.removeReference(r.key,t),e.ga.containsKey(r.key)||aS(e,r.key)):_()}function aD(e){for(;e.Va.size>0&&e.ma.size<e.maxConcurrentLimboResolutions;){let t=e.Va.values().next().value;e.Va.delete(t);let n=new G(U.fromString(t)),r=e.wa.next();e.fa.set(r,new ac(n)),e.ma=e.ma.insert(n,r),sN(e.remoteStore,new r_(t1(tY(n.path)),r,"TargetPurposeLimboResolution",em.ae))}}async function aA(e,t,n){let r=[],i=[],s=[];e.Aa.isEmpty()||(e.Aa.forEach((a,o)=>{s.push(e.ba(o,t,n).then(t=>{if((t||n)&&e.isPrimaryClient&&e.sharedClientState.updateQueryState(o.targetId,(null==t?void 0:t.fromCache)?"not-current":"current"),t){r.push(t);let e=iH.Ki(o.targetId,t);i.push(e)}}))}),await Promise.all(s),e.da.s_(r),await async function(e,t){try{await e.persistence.runTransaction("notifyLocalViewChanges","readwrite",n=>en.forEach(t,t=>en.forEach(t.qi,r=>e.persistence.referenceDelegate.addReference(n,t.targetId,r)).next(()=>en.forEach(t.Qi,r=>e.persistence.referenceDelegate.removeReference(n,t.targetId,r)))))}catch(e){if(!eo(e))throw e;y("LocalStore","Failed to update sequence numbers: "+e)}for(let n of t){let t=n.targetId;if(!n.fromCache){let n=e.Zi.get(t),r=n.snapshotVersion,i=n.withLastLimboFreeSnapshotVersion(r);e.Zi=e.Zi.insert(t,i)}}}(e.localStore,i))}async function aC(e,t){if(!e.currentUser.isEqual(t)){y("SyncEngine","User change. New user:",t.toKey());let n=await iX(e.localStore,t);e.currentUser=t,e.ya.forEach(e=>{e.forEach(e=>{e.reject(new T(E.CANCELLED,"'waitForPendingWrites' promise is rejected due to a user change."))})}),e.ya.clear(),e.sharedClientState.handleUserChange(t,n.removedBatchIds,n.addedBatchIds),await aA(e,n.rs)}}function aN(e,t){let n=e.fa.get(t);if(n&&n.Ea)return nl().add(n.key);{let n=nl(),r=e.Ra.get(t);if(!r)return n;for(let t of r){let r=e.Aa.get(t);n=n.unionWith(r.view.oa)}return n}}async function ak(e,t){let n=await i4(e.localStore,t.query,!0),r=t.view.Ia(n);return e.isPrimaryClient&&ax(e,t.targetId,r.ha),r}async function aR(e,t){return i3(e.localStore,t).then(t=>aA(e,t))}async function aF(e,t,n,r){let i=await function(e,t){let n=e.mutationQueue;return e.persistence.runTransaction("Lookup mutation documents","readonly",r=>n.Cn(r,t).next(t=>t?e.localDocuments.getDocuments(r,t):en.resolve(null)))}(e.localStore,t);null!==i?("pending"===n?await sz(e.remoteStore):"acknowledged"===n||"rejected"===n?(aE(e,t,r||null),ab(e,t),function(e,t){e.mutationQueue.Mn(t)}(e.localStore,t)):_(),await aA(e,i)):y("SyncEngine","Cannot apply mutation batch with id: "+t)}async function aM(e,t){if(aU(e),aB(e),!0===t&&!0!==e.Sa){let t=e.sharedClientState.getAllActiveQueryTargets(),n=await aV(e,t.toArray());for(let t of(e.Sa=!0,await sH(e.remoteStore,!0),n))sN(e.remoteStore,t)}else if(!1===t&&!1!==e.Sa){let t=[],n=Promise.resolve();e.Ra.forEach((r,i)=>{e.sharedClientState.isLocalQueryTarget(i)?t.push(i):n=n.then(()=>(aT(e,i),i5(e.localStore,i,!0))),sk(e.remoteStore,i)}),await n,await aV(e,t),e.fa.forEach((t,n)=>{sk(e.remoteStore,n)}),e.ga.mr(),e.fa=new Map,e.ma=new e$(G.comparator),e.Sa=!1,await sH(e.remoteStore,!1)}}async function aV(e,t,n){let r=[],i=[];for(let n of t){let t;let s=e.Ra.get(n);if(s&&0!==s.length)for(let n of(t=await i2(e.localStore,t1(s[0])),s)){let t=e.Aa.get(n),r=await ak(e,t);r.snapshot&&i.push(r.snapshot)}else{let r=await i8(e.localStore,n);t=await i2(e.localStore,r),await af(e,aL(r),n,!1,t.resumeToken)}r.push(t)}return e.da.s_(i),r}function aL(e){var t,n,r,i,s,a,o;return t=e.path,n=e.collectionGroup,r=e.orderBy,i=e.filters,s=e.limit,a=e.startAt,o=e.endAt,new tW(t,n,r,i,s,"F",a,o)}function aO(e){return e.localStore.persistence.Li()}async function aP(e,t,n,r){if(e.Sa)return void y("SyncEngine","Ignoring unexpected query state notification.");let i=e.Ra.get(t);if(i&&i.length>0)switch(n){case"current":case"not-current":{let r=await i3(e.localStore,t6(i[0])),s=nH.createSynthesizedRemoteEventForCurrentChange(t,"current"===n,e0.EMPTY_BYTE_STRING);await aA(e,r,s);break}case"rejected":await i5(e.localStore,t,!0),aT(e,t,r);break;default:_()}}async function aq(e,t,n){let r=aU(e);if(r.Sa){for(let e of t){if(r.Ra.has(e)){y("SyncEngine","Adding an already active target "+e);continue}let t=await i8(r.localStore,e),n=await i2(r.localStore,t);await af(r,aL(t),n.targetId,!1,n.resumeToken),sN(r.remoteStore,n)}for(let e of n)r.Ra.has(e)&&await i5(r.localStore,e,!1).then(()=>{sk(r.remoteStore,e),aT(r,e)}).catch(et)}}function aU(e){return e.remoteStore.remoteSyncer.applyRemoteEvent=ap.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=aN.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=aw.bind(null,e),e.da.s_=s6.bind(null,e.eventManager),e.da.Da=s7.bind(null,e.eventManager),e}function aB(e){return e.remoteStore.remoteSyncer.applySuccessfulWrite=av.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=aI.bind(null,e),e}class az{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=sI(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,t){return null}createIndexBackfillerScheduler(e,t){return null}createLocalStore(e){var t,n,r,i;return t=this.persistence,n=new iJ,r=e.initialUser,i=this.serializer,new iZ(t,n,r,i)}createPersistence(e){return new iU(iz.Hr,this.serializer)}createSharedClientState(e){return new su}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class aG extends az{constructor(e,t,n){super(),this.Ca=e,this.cacheSizeBytes=t,this.forceOwnership=n,this.synchronizeTabs=!1}async initialize(e){await super.initialize(e),await this.Ca.initialize(this,e),await aB(this.Ca.syncEngine),await sz(this.Ca.remoteStore),await this.persistence.fi(()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve()))}createLocalStore(e){var t,n,r,i;return t=this.persistence,n=new iJ,r=e.initialUser,i=this.serializer,new iZ(t,n,r,i)}createGarbageCollectionScheduler(e,t){let n=this.persistence.referenceDelegate.garbageCollector;return new iw(n,e.asyncQueue,t)}createIndexBackfillerScheduler(e,t){let n=new ef(t,this.persistence);return new ed(e.asyncQueue,n)}createPersistence(e){let t=iY(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),n=void 0!==this.cacheSizeBytes?it.withCacheSize(this.cacheSizeBytes):it.DEFAULT;return new ij(this.synchronizeTabs,t,e.clientId,n,e.asyncQueue,sw(),sv(),this.serializer,this.sharedClientState,!!this.forceOwnership)}createSharedClientState(e){return new su}}class aK extends aG{constructor(e,t){super(e,t,!1),this.Ca=e,this.cacheSizeBytes=t,this.synchronizeTabs=!0}async initialize(e){await super.initialize(e);let t=this.Ca.syncEngine;this.sharedClientState instanceof sl&&(this.sharedClientState.syncEngine={js:aF.bind(null,t),Hs:aP.bind(null,t),Js:aq.bind(null,t),Li:aO.bind(null,t),zs:aR.bind(null,t)},await this.sharedClientState.start()),await this.persistence.fi(async e=>{await aM(this.Ca.syncEngine,e),this.gcScheduler&&(e&&!this.gcScheduler.started?this.gcScheduler.start():e||this.gcScheduler.stop()),this.indexBackfillerScheduler&&(e&&!this.indexBackfillerScheduler.started?this.indexBackfillerScheduler.start():e||this.indexBackfillerScheduler.stop())})}createSharedClientState(e){let t=sw();if(!sl.v(t))throw new T(E.UNIMPLEMENTED,"IndexedDB persistence is only available on platforms that support LocalStorage.");let n=iY(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey);return new sl(t,e.asyncQueue,n,e.clientId,e.initialUser)}}class a${async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=e=>ay(this.syncEngine,e,1),this.remoteStore.remoteSyncer.handleCredentialChange=aC.bind(null,this.syncEngine),await sH(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new s8}createDatastore(e){var t,n,r;let i=sI(e.databaseInfo.databaseId),s=(t=e.databaseInfo,new sy(t));return n=e.authCredentials,r=e.appCheckCredentials,new sS(n,r,s,i)}createRemoteStore(e){var t,n,r,i;return t=this.localStore,n=this.datastore,r=e.asyncQueue,i=sh.v()?new sh:new sc,new sD(t,n,r,e=>ay(this.syncEngine,e,0),i)}createSyncEngine(e,t){return function(e,t,n,r,i,s,a){let o=new ah(e,t,n,r,i,s);return a&&(o.Sa=!0),o}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}terminate(){return async function(e){y("RemoteStore","RemoteStore shutting down."),e.S_.add(5),await sC(e),e.D_.shutdown(),e.v_.set("Unknown")}(this.remoteStore)}}/**
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
 */function aj(e,t=10240){let n=0;return{async read(){if(n<e.byteLength){let r={value:e.slice(n,n+t),done:!1};return n+=t,r}return{done:!0}},async cancel(){},releaseLock(){},closed:Promise.resolve()}}/**
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
 */class aQ{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Fa(this.observer.next,e)}error(e){this.observer.error?this.Fa(this.observer.error,e):w("Uncaught Error in snapshot listener:",e.toString())}Ma(){this.muted=!0}Fa(e,t){this.muted||setTimeout(()=>{this.muted||e(t)},0)}}/**
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
 */class aW{constructor(e,t){this.xa=e,this.serializer=t,this.metadata=new S,this.buffer=new Uint8Array,this.Oa=new TextDecoder("utf-8"),this.Na().then(e=>{e&&e.H_()?this.metadata.resolve(e.j_.metadata):this.metadata.reject(Error(`The first element of the bundle is not a metadata, it is
             ${JSON.stringify(null==e?void 0:e.j_)}`))},e=>this.metadata.reject(e))}close(){return this.xa.cancel()}async getMetadata(){return this.metadata.promise}async va(){return await this.getMetadata(),this.Na()}async Na(){let e=await this.Ba();if(null===e)return null;let t=this.Oa.decode(e),n=Number(t);isNaN(n)&&this.La(`length string (${t}) is not valid number`);let r=await this.ka(n);return new an(JSON.parse(r),e.length+n)}qa(){return this.buffer.findIndex(e=>123===e)}async Ba(){for(;0>this.qa()&&!await this.Qa(););if(0===this.buffer.length)return null;let e=this.qa();e<0&&this.La("Reached the end of bundle when a length string is expected.");let t=this.buffer.slice(0,e);return this.buffer=this.buffer.slice(e),t}async ka(e){for(;this.buffer.length<e;)await this.Qa()&&this.La("Reached the end of bundle when more is expected.");let t=this.Oa.decode(this.buffer.slice(0,e));return this.buffer=this.buffer.slice(e),t}La(e){throw this.xa.cancel(),Error(`Invalid bundle format: ${e}`)}async Qa(){let e=await this.xa.read();if(!e.done){let t=new Uint8Array(this.buffer.length+e.value.length);t.set(this.buffer),t.set(e.value,this.buffer.length),this.buffer=t}return e.done}}/**
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
 */class aY{constructor(e){this.datastore=e,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastWriteError=null,this.writtenDocs=new Set}async lookup(e){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw new T(E.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes.");let t=await async function(e,t){let n=ru(e.serializer)+"/documents",r={documents:t.map(t=>rs(e.serializer,t))},i=await e.So("BatchGetDocuments",n,r,t.length),s=new Map;i.forEach(t=>{var n;let r=(n=e.serializer,"found"in t?function(e,t){t.found||_(),t.found.name,t.found.updateTime;let n=ra(e,t.found.name),r=rn(t.found.updateTime),i=t.found.createTime?rn(t.found.createTime):P.min(),s=new tw({mapValue:{fields:t.found.fields}});return tv.newFoundDocument(n,r,i,s)}(n,t):"missing"in t?function(e,t){t.missing||_(),t.readTime||_();let n=ra(e,t.missing),r=rn(t.readTime);return tv.newNoDocument(n,r)}(n,t):_());s.set(r.key.toString(),r)});let a=[];return t.forEach(e=>{let t=s.get(e.toString());t||_(),a.push(t)}),a}(this.datastore,e);return t.forEach(e=>this.recordVersion(e)),t}set(e,t){this.write(t.toMutation(e,this.precondition(e))),this.writtenDocs.add(e.toString())}update(e,t){try{this.write(t.toMutation(e,this.preconditionForUpdate(e)))}catch(e){this.lastWriteError=e}this.writtenDocs.add(e.toString())}delete(e){this.write(new nL(e,this.precondition(e))),this.writtenDocs.add(e.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastWriteError)throw this.lastWriteError;let e=this.readVersions;this.mutations.forEach(t=>{e.delete(t.key.toString())}),e.forEach((e,t)=>{let n=G.fromPath(t);this.mutations.push(new nO(n,this.precondition(n)))}),await async function(e,t){let n=ru(e.serializer)+"/documents",r={writes:t.map(t=>rf(e.serializer,t))};await e.fo("Commit",n,r)}(this.datastore,this.mutations),this.committed=!0}recordVersion(e){let t;if(e.isFoundDocument())t=e.version;else{if(!e.isNoDocument())throw _();t=P.min()}let n=this.readVersions.get(e.key.toString());if(n){if(!t.isEqual(n))throw new T(E.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(e.key.toString(),t)}precondition(e){let t=this.readVersions.get(e.toString());return!this.writtenDocs.has(e.toString())&&t?t.isEqual(P.min())?nS.exists(!1):nS.updateTime(t):nS.none()}preconditionForUpdate(e){let t=this.readVersions.get(e.toString());if(!this.writtenDocs.has(e.toString())&&t){if(t.isEqual(P.min()))throw new T(E.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return nS.updateTime(t)}return nS.exists(!0)}write(e){this.ensureCommitNotCalled(),this.mutations.push(e)}ensureCommitNotCalled(){}}/**
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
 */class aH{constructor(e,t,n,r,i){this.asyncQueue=e,this.datastore=t,this.options=n,this.updateFunction=r,this.deferred=i,this.Ka=n.maxAttempts,this.Uo=new s_(this.asyncQueue,"transaction_retry")}run(){this.Ka-=1,this.$a()}$a(){this.Uo.No(async()=>{let e=new aY(this.datastore),t=this.Ua(e);t&&t.then(t=>{this.asyncQueue.enqueueAndForget(()=>e.commit().then(()=>{this.deferred.resolve(t)}).catch(e=>{this.Wa(e)}))}).catch(e=>{this.Wa(e)})})}Ua(e){try{let t=this.updateFunction(e);return!eg(t)&&t.catch&&t.then?t:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(e){return this.deferred.reject(e),null}}Wa(e){this.Ka>0&&this.Ga(e)?(this.Ka-=1,this.asyncQueue.enqueueAndForget(()=>(this.$a(),Promise.resolve()))):this.deferred.reject(e)}Ga(e){if("FirebaseError"===e.name){let t=e.code;return"aborted"===t||"failed-precondition"===t||"already-exists"===t||!nz(t)}return!1}}/**
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
 */class aJ{constructor(e,t,n,r){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=n,this.databaseInfo=r,this.user=d.UNAUTHENTICATED,this.clientId=M.V(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(n,async e=>{y("FirestoreClient","Received user=",e.uid),await this.authCredentialListener(e),this.user=e}),this.appCheckCredentials.start(n,e=>(y("FirestoreClient","Received new app check token=",e),this.appCheckCredentialListener(e,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new T(E.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();let e=new S;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){let t=s0(n,"Failed to shutdown persistence");e.reject(t)}}),e.promise}}async function aZ(e,t){e.asyncQueue.verifyOperationInProgress(),y("FirestoreClient","Initializing OfflineComponentProvider");let n=await e.getConfiguration();await t.initialize(n);let r=n.initialUser;e.setCredentialChangeListener(async e=>{r.isEqual(e)||(await iX(t.localStore,e),r=e)}),t.persistence.setDatabaseDeletedListener(()=>e.terminate()),e._offlineComponents=t}async function aX(e,t){e.asyncQueue.verifyOperationInProgress();let n=await a1(e);y("FirestoreClient","Initializing OnlineComponentProvider");let r=await e.getConfiguration();await t.initialize(n,r),e.setCredentialChangeListener(e=>sY(t.remoteStore,e)),e.setAppCheckTokenChangeListener((e,n)=>sY(t.remoteStore,n)),e._onlineComponents=t}function a0(e){return"FirebaseError"===e.name?e.code===E.FAILED_PRECONDITION||e.code===E.UNIMPLEMENTED:!("undefined"!=typeof DOMException&&e instanceof DOMException)||22===e.code||20===e.code||11===e.code}async function a1(e){if(!e._offlineComponents){if(e._uninitializedComponentsProvider){y("FirestoreClient","Using user provided OfflineComponentProvider");try{await aZ(e,e._uninitializedComponentsProvider._offline)}catch(t){if(!a0(t))throw t;v("Error using user provided cache. Falling back to memory cache: "+t),await aZ(e,new az)}}else y("FirestoreClient","Using default OfflineComponentProvider"),await aZ(e,new az)}return e._offlineComponents}async function a2(e){return e._onlineComponents||(e._uninitializedComponentsProvider?(y("FirestoreClient","Using user provided OnlineComponentProvider"),await aX(e,e._uninitializedComponentsProvider._online)):(y("FirestoreClient","Using default OnlineComponentProvider"),await aX(e,new a$))),e._onlineComponents}function a5(e){return a1(e).then(e=>e.persistence)}function a4(e){return a1(e).then(e=>e.localStore)}function a8(e){return a2(e).then(e=>e.remoteStore)}function a3(e){return a2(e).then(e=>e.syncEngine)}async function a9(e){let t=await a2(e),n=t.eventManager;return n.onListen=ad.bind(null,t.syncEngine),n.onUnlisten=am.bind(null,t.syncEngine),n}function a6(e,t,n={}){let r=new S;return e.asyncQueue.enqueueAndForget(async()=>(function(e,t,n,r,i){let s=new aQ({next:s=>{t.enqueueAndForget(()=>s9(e,a));let o=s.docs.has(n);!o&&s.fromCache?i.reject(new T(E.UNAVAILABLE,"Failed to get document because the client is offline.")):o&&s.fromCache&&r&&"server"===r.source?i.reject(new T(E.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):i.resolve(s)},error:e=>i.reject(e)}),a=new at(tY(n.path),s,{includeMetadataChanges:!0,z_:!0});return s3(e,a)})(await a9(e),e.asyncQueue,t,n,r)),r.promise}function a7(e,t,n={}){let r=new S;return e.asyncQueue.enqueueAndForget(async()=>(function(e,t,n,r,i){let s=new aQ({next:n=>{t.enqueueAndForget(()=>s9(e,a)),n.fromCache&&"server"===r.source?i.reject(new T(E.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):i.resolve(n)},error:e=>i.reject(e)}),a=new at(n,s,{includeMetadataChanges:!0,z_:!0});return s3(e,a)})(await a9(e),e.asyncQueue,t,n,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
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
 */function oe(e){let t={};return void 0!==e.timeoutSeconds&&(t.timeoutSeconds=e.timeoutSeconds),t}/**
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
 */let ot=new Map;/**
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
 */function on(e,t,n){if(!n)throw new T(E.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function or(e,t,n,r){if(!0===t&&!0===r)throw new T(E.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}function oi(e){if(!G.isDocumentKey(e))throw new T(E.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function os(e){if(G.isDocumentKey(e))throw new T(E.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function oa(e){if(void 0===e)return"undefined";if(null===e)return"null";if("string"==typeof e)return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if("number"==typeof e||"boolean"==typeof e)return""+e;if("object"==typeof e){if(e instanceof Array)return"an array";{var t;let n=(t=e).constructor?t.constructor.name:null;return n?`a custom ${n} object`:"an object"}}return"function"==typeof e?"a function":_()}function oo(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new T(E.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{let n=oa(e);throw new T(E.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}function ol(e,t){if(t<=0)throw new T(E.INVALID_ARGUMENT,`Function ${e}() requires a positive number, but it was: ${t}.`)}/**
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
 */class ou{constructor(e){var t,n;if(void 0===e.host){if(void 0!==e.ssl)throw new T(E.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=null===(t=e.ssl)||void 0===t||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,void 0===e.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==e.cacheSizeBytes&&e.cacheSizeBytes<1048576)throw new T(E.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}or("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:void 0===e.experimentalAutoDetectLongPolling?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=oe(null!==(n=e.experimentalLongPollingOptions)&&void 0!==n?n:{}),function(e){if(void 0!==e.timeoutSeconds){if(isNaN(e.timeoutSeconds))throw new T(E.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (must not be NaN)`);if(e.timeoutSeconds<5)throw new T(E.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (minimum allowed value is 5)`);if(e.timeoutSeconds>30)throw new T(E.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){var t,n;return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(t=this.experimentalLongPollingOptions,n=e.experimentalLongPollingOptions,t.timeoutSeconds===n.timeoutSeconds)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class oc{constructor(e,t,n,r){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=n,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new ou({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new T(E.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(e){if(this._settingsFrozen)throw new T(E.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new ou(e),void 0!==e.credentials&&(this._authCredentials=function(e){if(!e)return new D;switch(e.type){case"firstParty":return new k(e.sessionIndex||"0",e.iamToken||null,e.authTokenFactory||null);case"provider":return e.client;default:throw new T(E.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){let t=ot.get(e);t&&(y("ComponentProvider","Removing Datastore"),ot.delete(e),t.terminate())}(this),Promise.resolve()}}function oh(e,t,n,r={}){var i;let s=(e=oo(e,oc))._getSettings(),a=`${t}:${n}`;if("firestore.googleapis.com"!==s.host&&s.host!==a&&v("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),e._setSettings(Object.assign(Object.assign({},s),{host:a,ssl:!1})),r.mockUserToken){let t,n;if("string"==typeof r.mockUserToken)t=r.mockUserToken,n=d.MOCK_USER;else{t=(0,l.Sg)(r.mockUserToken,null===(i=e._app)||void 0===i?void 0:i.options.projectId);let s=r.mockUserToken.sub||r.mockUserToken.user_id;if(!s)throw new T(E.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");n=new d(s)}e._authCredentials=new A(new x(t,n))}}/**
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
 */class od{constructor(e,t,n){this.converter=t,this._query=n,this.type="query",this.firestore=e}withConverter(e){return new od(this.firestore,e,this._query)}}class of{constructor(e,t,n){this.converter=t,this._key=n,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new om(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new of(this.firestore,e,this._key)}}class om extends od{constructor(e,t,n){super(e,t,tY(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){let e=this._path.popLast();return e.isEmpty()?null:new of(this.firestore,null,new G(e))}withConverter(e){return new om(this.firestore,e,this._path)}}function og(e,t,...n){if(e=(0,l.m9)(e),on("collection","path",t),e instanceof oc){let r=U.fromString(t,...n);return os(r),new om(e,null,r)}{if(!(e instanceof of||e instanceof om))throw new T(E.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");let r=e._path.child(U.fromString(t,...n));return os(r),new om(e.firestore,null,r)}}function op(e,t){if(e=oo(e,oc),on("collectionGroup","collection id",t),t.indexOf("/")>=0)throw new T(E.INVALID_ARGUMENT,`Invalid collection ID '${t}' passed to function collectionGroup(). Collection IDs must not contain '/'.`);return new od(e,null,new tW(U.emptyPath(),t))}function oy(e,t,...n){if(e=(0,l.m9)(e),1==arguments.length&&(t=M.V()),on("doc","path",t),e instanceof oc){let r=U.fromString(t,...n);return oi(r),new of(e,null,new G(r))}{if(!(e instanceof of||e instanceof om))throw new T(E.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");let r=e._path.child(U.fromString(t,...n));return oi(r),new of(e.firestore,e instanceof om?e.converter:null,new G(r))}}function ow(e,t){return e=(0,l.m9)(e),t=(0,l.m9)(t),(e instanceof of||e instanceof om)&&(t instanceof of||t instanceof om)&&e.firestore===t.firestore&&e.path===t.path&&e.converter===t.converter}function ov(e,t){return e=(0,l.m9)(e),t=(0,l.m9)(t),e instanceof od&&t instanceof od&&e.firestore===t.firestore&&t4(e._query,t._query)&&e.converter===t.converter}/**
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
 */class oI{constructor(){this.za=Promise.resolve(),this.ja=[],this.Ha=!1,this.Ja=[],this.Ya=null,this.Za=!1,this.Xa=!1,this.eu=[],this.Uo=new s_(this,"async_queue_retry"),this.tu=()=>{let e=sv();e&&y("AsyncQueue","Visibility state changed to "+e.visibilityState),this.Uo.Lo()};let e=sv();e&&"function"==typeof e.addEventListener&&e.addEventListener("visibilitychange",this.tu)}get isShuttingDown(){return this.Ha}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.nu(),this.ru(e)}enterRestrictedMode(e){if(!this.Ha){this.Ha=!0,this.Xa=e||!1;let t=sv();t&&"function"==typeof t.removeEventListener&&t.removeEventListener("visibilitychange",this.tu)}}enqueue(e){if(this.nu(),this.Ha)return new Promise(()=>{});let t=new S;return this.ru(()=>this.Ha&&this.Xa?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.ja.push(e),this.iu()))}async iu(){if(0!==this.ja.length){try{await this.ja[0](),this.ja.shift(),this.Uo.reset()}catch(e){if(!eo(e))throw e;y("AsyncQueue","Operation failed with retryable error: "+e)}this.ja.length>0&&this.Uo.No(()=>this.iu())}}ru(e){let t=this.za.then(()=>(this.Za=!0,e().catch(e=>{let t;this.Ya=e,this.Za=!1;let n=(t=e.message||"",e.stack&&(t=e.stack.includes(e.message)?e.stack:e.message+"\n"+e.stack),t);throw w("INTERNAL UNHANDLED ERROR: ",n),e}).then(e=>(this.Za=!1,e))));return this.za=t,t}enqueueAfterDelay(e,t,n){this.nu(),this.eu.indexOf(e)>-1&&(t=0);let r=sX.createAndSchedule(this,e,t,n,e=>this.su(e));return this.Ja.push(r),r}nu(){this.Ya&&_()}verifyOperationInProgress(){}async ou(){let e;do e=this.za,await e;while(e!==this.za)}_u(e){for(let t of this.Ja)if(t.timerId===e)return!0;return!1}au(e){return this.ou().then(()=>{for(let t of(this.Ja.sort((e,t)=>e.targetTimeMs-t.targetTimeMs),this.Ja))if(t.skipDelay(),"all"!==e&&t.timerId===e)break;return this.ou()})}uu(e){this.eu.push(e)}su(e){let t=this.Ja.indexOf(e);this.Ja.splice(t,1)}}function o_(e){return function(e,t){if("object"!=typeof e||null===e)return!1;for(let n of t)if(n in e&&"function"==typeof e[n])return!0;return!1}(e,["next","error","complete"])}class ob{constructor(){this._progressObserver={},this._taskCompletionResolver=new S,this._lastProgress={taskState:"Running",totalBytes:0,totalDocuments:0,bytesLoaded:0,documentsLoaded:0}}onProgress(e,t,n){this._progressObserver={next:e,error:t,complete:n}}catch(e){return this._taskCompletionResolver.promise.catch(e)}then(e,t){return this._taskCompletionResolver.promise.then(e,t)}_completeWith(e){this._updateProgress(e),this._progressObserver.complete&&this._progressObserver.complete(),this._taskCompletionResolver.resolve(e)}_failWith(e){this._lastProgress.taskState="Error",this._progressObserver.next&&this._progressObserver.next(this._lastProgress),this._progressObserver.error&&this._progressObserver.error(e),this._taskCompletionResolver.reject(e)}_updateProgress(e){this._lastProgress=e,this._progressObserver.next&&this._progressObserver.next(e)}}/**
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
 */let oE=-1;class oT extends oc{constructor(e,t,n,r){super(e,t,n,r),this.type="firestore",this._queue=new oI,this._persistenceKey=(null==r?void 0:r.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||ox(this),this._firestoreClient.terminate()}}function oS(e){return e._firestoreClient||ox(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function ox(e){var t,n,r,i,s,a;let o=e._freezeSettings(),l=(i=e._databaseId,s=(null===(t=e._app)||void 0===t?void 0:t.options.appId)||"",a=e._persistenceKey,new e6(i,s,a,o.host,o.ssl,o.experimentalForceLongPolling,o.experimentalAutoDetectLongPolling,oe(o.experimentalLongPollingOptions),o.useFetchStreams));e._firestoreClient=new aJ(e._authCredentials,e._appCheckCredentials,e._queue,l),(null===(n=o.localCache)||void 0===n?void 0:n._offlineComponentProvider)&&(null===(r=o.localCache)||void 0===r?void 0:r._onlineComponentProvider)&&(e._firestoreClient._uninitializedComponentsProvider={_offlineKind:o.localCache.kind,_offline:o.localCache._offlineComponentProvider,_online:o.localCache._onlineComponentProvider})}function oD(e,t){oL(e=oo(e,oT));let n=oS(e);if(n._uninitializedComponentsProvider)throw new T(E.FAILED_PRECONDITION,"SDK cache is already specified.");v("enableIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");let r=e._freezeSettings(),i=new a$;return oC(n,i,new aG(i,r.cacheSizeBytes,null==t?void 0:t.forceOwnership))}function oA(e){oL(e=oo(e,oT));let t=oS(e);if(t._uninitializedComponentsProvider)throw new T(E.FAILED_PRECONDITION,"SDK cache is already specified.");v("enableMultiTabIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");let n=e._freezeSettings(),r=new a$;return oC(t,r,new aK(r,n.cacheSizeBytes))}function oC(e,t,n){let r=new S;return e.asyncQueue.enqueue(async()=>{try{await aZ(e,n),await aX(e,t),r.resolve()}catch(e){if(!a0(e))throw e;v("Error enabling indexeddb cache. Falling back to memory cache: "+e),r.reject(e)}}).then(()=>r.promise)}function oN(e){if(e._initialized&&!e._terminated)throw new T(E.FAILED_PRECONDITION,"Persistence can only be cleared before a Firestore instance is initialized or after it is terminated.");let t=new S;return e._queue.enqueueAndForgetEvenWhileRestricted(async()=>{try{await async function(e){if(!ei.v())return Promise.resolve();await ei.delete(e+"main")}(iY(e._databaseId,e._persistenceKey)),t.resolve()}catch(e){t.reject(e)}}),t.promise}function ok(e){return function(e){let t=new S;return e.asyncQueue.enqueueAndForget(async()=>a_(await a3(e),t)),t.promise}(oS(e=oo(e,oT)))}function oR(e){var t;return(t=oS(e=oo(e,oT))).asyncQueue.enqueue(async()=>{let e=await a5(t),n=await a8(t);return e.setNetworkEnabled(!0),n.S_.delete(0),sA(n)})}function oF(e){var t;return(t=oS(e=oo(e,oT))).asyncQueue.enqueue(async()=>{let e=await a5(t),n=await a8(t);return e.setNetworkEnabled(!1),async function(e){e.S_.add(0),await sC(e),e.v_.set("Offline")}(n)})}function oM(e,t){let n=oS(e=oo(e,oT)),r=new ob;return function(e,t,n,r){var i,s;let a=(i=sI(t),s=function(e,t){if(e instanceof Uint8Array)return aj(e,t);if(e instanceof ArrayBuffer)return aj(new Uint8Array(e),t);if(e instanceof ReadableStream)return e.getReader();throw Error("Source of `toByteStreamReader` has to be a ArrayBuffer or ReadableStream")}("string"==typeof n?nK().encode(n):n),new aW(s,i));e.asyncQueue.enqueueAndForget(async()=>{!function(e,t,n){(async function(e,t,n){try{var r;let i=await t.getMetadata();if(await function(e,t){let n=rn(t.createTime);return e.persistence.runTransaction("hasNewerBundle","readonly",n=>e.$r.getBundleMetadata(n,t.id)).then(e=>!!e&&e.createTime.compareTo(n)>=0)}(e.localStore,i))return await t.close(),n._completeWith({taskState:"Success",documentsLoaded:i.totalDocuments,bytesLoaded:i.totalBytes,totalDocuments:i.totalDocuments,totalBytes:i.totalBytes}),Promise.resolve(new Set);n._updateProgress(as(i));let s=new ai(i,e.localStore,t.serializer),a=await t.va();for(;a;){let e=await s.Y_(a);e&&n._updateProgress(e),a=await t.va()}let o=await s.complete();return await aA(e,o.ea,void 0),await (r=e.localStore).persistence.runTransaction("Save bundle","readwrite",e=>r.$r.saveBundleMetadata(e,i)),n._completeWith(o.progress),Promise.resolve(o.X_)}catch(e){return v("SyncEngine",`Loading bundle failed with ${e}`),n._failWith(e),Promise.resolve(new Set)}})(e,t,n).then(t=>{e.sharedClientState.notifyBundleLoaded(t)})}(await a3(e),a,r)})}(n,e._databaseId,t,r),r}function oV(e,t){var n;return(n=oS(e=oo(e,oT))).asyncQueue.enqueue(async()=>{var e;return(e=await a4(n)).persistence.runTransaction("Get named query","readonly",n=>e.$r.getNamedQuery(n,t))}).then(t=>t?new od(e,null,t.query):null)}function oL(e){if(e._initialized||e._terminated)throw new T(E.FAILED_PRECONDITION,"Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.")}/**
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
 */class oO{constructor(e){this._byteString=e}static fromBase64String(e){try{return new oO(e0.fromBase64String(e))}catch(e){throw new T(E.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(e){return new oO(e0.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class oP{constructor(...e){for(let t=0;t<e.length;++t)if(0===e[t].length)throw new T(E.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new z(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class oq{constructor(e){this._methodName=e}}/**
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
 */class oU{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new T(E.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new T(E.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return V(this._lat,e._lat)||V(this._long,e._long)}}/**
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
 */let oB=/^__.*__$/;class oz{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return null!==this.fieldMask?new nR(e,this.data,this.fieldMask,t,this.fieldTransforms):new nk(e,this.data,t,this.fieldTransforms)}}class oG{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return new nR(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function oK(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw _()}}class o${constructor(e,t,n,r,i,s){this.settings=e,this.databaseId=t,this.serializer=n,this.ignoreUndefinedProperties=r,void 0===i&&this.cu(),this.fieldTransforms=i||[],this.fieldMask=s||[]}get path(){return this.settings.path}get lu(){return this.settings.lu}hu(e){return new o$(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Pu(e){var t;let n=null===(t=this.path)||void 0===t?void 0:t.child(e),r=this.hu({path:n,Iu:!1});return r.Tu(e),r}Eu(e){var t;let n=null===(t=this.path)||void 0===t?void 0:t.child(e),r=this.hu({path:n,Iu:!1});return r.cu(),r}du(e){return this.hu({path:void 0,Iu:!0})}Au(e){return lt(e,this.settings.methodName,this.settings.Ru||!1,this.path,this.settings.Vu)}contains(e){return void 0!==this.fieldMask.find(t=>e.isPrefixOf(t))||void 0!==this.fieldTransforms.find(t=>e.isPrefixOf(t.field))}cu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Tu(this.path.get(e))}Tu(e){if(0===e.length)throw this.Au("Document fields must not be empty");if(oK(this.lu)&&oB.test(e))throw this.Au('Document fields cannot begin and end with "__"')}}class oj{constructor(e,t,n){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=n||sI(e)}mu(e,t,n,r=!1){return new o$({lu:e,methodName:t,Vu:n,path:z.emptyPath(),Iu:!1,Ru:r},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function oQ(e){let t=e._freezeSettings(),n=sI(e._databaseId);return new oj(e._databaseId,!!t.ignoreUndefinedProperties,n)}function oW(e,t,n,r,i,s={}){let a,o;let l=e.mu(s.merge||s.mergeFields?2:0,t,n,i);o9("Data must be an object, but it was:",l,r);let u=o8(r,l);if(s.merge)a=new eJ(l.fieldMask),o=l.fieldTransforms;else if(s.mergeFields){let e=[];for(let r of s.mergeFields){let i=o6(t,r,n);if(!l.contains(i))throw new T(E.INVALID_ARGUMENT,`Field '${i}' is specified in your field mask but missing from your input data.`);ln(e,i)||e.push(i)}a=new eJ(e),o=l.fieldTransforms.filter(e=>a.covers(e.field))}else a=null,o=l.fieldTransforms;return new oz(new tw(u),a,o)}class oY extends oq{_toFieldTransform(e){if(2!==e.lu)throw 1===e.lu?e.Au(`${this._methodName}() can only appear at the top level of your update data`):e.Au(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof oY}}function oH(e,t,n){return new o$({lu:3,Vu:t.settings.Vu,methodName:e._methodName,Iu:n},t.databaseId,t.serializer,t.ignoreUndefinedProperties)}class oJ extends oq{_toFieldTransform(e){return new nE(e.path,new ng)}isEqual(e){return e instanceof oJ}}class oZ extends oq{constructor(e,t){super(e),this.fu=t}_toFieldTransform(e){let t=oH(this,e,!0),n=this.fu.map(e=>o4(e,t)),r=new np(n);return new nE(e.path,r)}isEqual(e){return this===e}}class oX extends oq{constructor(e,t){super(e),this.fu=t}_toFieldTransform(e){let t=oH(this,e,!0),n=this.fu.map(e=>o4(e,t)),r=new nw(n);return new nE(e.path,r)}isEqual(e){return this===e}}class o0 extends oq{constructor(e,t){super(e),this.gu=t}_toFieldTransform(e){let t=new nI(e.serializer,nd(e.serializer,this.gu));return new nE(e.path,t)}isEqual(e){return this===e}}function o1(e,t,n,r){let i=e.mu(1,t,n);o9("Data must be an object, but it was:",i,r);let s=[],a=tw.empty();eG(r,(e,r)=>{let o=le(t,e,n);r=(0,l.m9)(r);let u=i.Eu(o);if(r instanceof oY)s.push(o);else{let e=o4(r,u);null!=e&&(s.push(o),a.set(o,e))}});let o=new eJ(s);return new oG(a,o,i.fieldTransforms)}function o2(e,t,n,r,i,s){let a=e.mu(1,t,n),o=[o6(t,r,n)],u=[i];if(s.length%2!=0)throw new T(E.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let e=0;e<s.length;e+=2)o.push(o6(t,s[e])),u.push(s[e+1]);let c=[],h=tw.empty();for(let e=o.length-1;e>=0;--e)if(!ln(c,o[e])){let t=o[e],n=u[e];n=(0,l.m9)(n);let r=a.Eu(t);if(n instanceof oY)c.push(t);else{let e=o4(n,r);null!=e&&(c.push(t),h.set(t,e))}}let d=new eJ(c);return new oG(h,d,a.fieldTransforms)}function o5(e,t,n,r=!1){return o4(n,e.mu(r?4:3,t))}function o4(e,t){if(o3(e=(0,l.m9)(e)))return o9("Unsupported field value:",t,e),o8(e,t);if(e instanceof oq)return function(e,t){if(!oK(t.lu))throw t.Au(`${e._methodName}() can only be used with update() and set()`);if(!t.path)throw t.Au(`${e._methodName}() is not currently supported inside arrays`);let n=e._toFieldTransform(t);n&&t.fieldTransforms.push(n)}(e,t),null;if(void 0===e&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.Iu&&4!==t.lu)throw t.Au("Nested arrays are not supported");return function(e,t){let n=[],r=0;for(let i of e){let e=o4(i,t.du(r));null==e&&(e={nullValue:"NULL_VALUE"}),n.push(e),r++}return{arrayValue:{values:n}}}(e,t)}return function(e,t){if(null===(e=(0,l.m9)(e)))return{nullValue:"NULL_VALUE"};if("number"==typeof e)return nd(t.serializer,e);if("boolean"==typeof e)return{booleanValue:e};if("string"==typeof e)return{stringValue:e};if(e instanceof Date){let n=O.fromDate(e);return{timestampValue:re(t.serializer,n)}}if(e instanceof O){let n=new O(e.seconds,1e3*Math.floor(e.nanoseconds/1e3));return{timestampValue:re(t.serializer,n)}}if(e instanceof oU)return{geoPointValue:{latitude:e.latitude,longitude:e.longitude}};if(e instanceof oO)return{bytesValue:rt(t.serializer,e._byteString)};if(e instanceof of){let n=t.databaseId,r=e.firestore._databaseId;if(!r.isEqual(n))throw t.Au(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:rr(e.firestore._databaseId||t.databaseId,e._key.path)}}throw t.Au(`Unsupported field value: ${oa(e)}`)}(e,t)}function o8(e,t){let n={};return eK(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):eG(e,(e,r)=>{let i=o4(r,t.Pu(e));null!=i&&(n[e]=i)}),{mapValue:{fields:n}}}function o3(e){return!("object"!=typeof e||null===e||e instanceof Array||e instanceof Date||e instanceof O||e instanceof oU||e instanceof oO||e instanceof of||e instanceof oq)}function o9(e,t,n){if(!o3(n)||!("object"==typeof n&&null!==n&&(Object.getPrototypeOf(n)===Object.prototype||null===Object.getPrototypeOf(n)))){let r=oa(n);throw"an object"===r?t.Au(e+" a custom object"):t.Au(e+" "+r)}}function o6(e,t,n){if((t=(0,l.m9)(t))instanceof oP)return t._internalPath;if("string"==typeof t)return le(e,t);throw lt("Field path arguments must be of type string or ",e,!1,void 0,n)}let o7=RegExp("[~\\*/\\[\\]]");function le(e,t,n){if(t.search(o7)>=0)throw lt(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new oP(...t.split("."))._internalPath}catch(r){throw lt(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function lt(e,t,n,r,i){let s=r&&!r.isEmpty(),a=void 0!==i,o=`Function ${t}() called with invalid data`;n&&(o+=" (via `toFirestore()`)"),o+=". ";let l="";return(s||a)&&(l+=" (found",s&&(l+=` in field ${r}`),a&&(l+=` in document ${i}`),l+=")"),new T(E.INVALID_ARGUMENT,o+e+l)}function ln(e,t){return e.some(e=>e.isEqual(t))}/**
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
 */class lr{constructor(e,t,n,r,i){this._firestore=e,this._userDataWriter=t,this._key=n,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new of(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){let e=new li(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){let t=this._document.data.field(ls("DocumentSnapshot.get",e));if(null!==t)return this._userDataWriter.convertValue(t)}}}class li extends lr{data(){return super.data()}}function ls(e,t){return"string"==typeof t?le(e,t):t instanceof oP?t._internalPath:t._delegate._internalPath}/**
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
 */function la(e){if("L"===e.limitType&&0===e.explicitOrderBy.length)throw new T(E.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class lo{}class ll extends lo{}function lu(e,t,...n){let r=[];for(let i of(t instanceof lo&&r.push(t),function(e){let t=e.filter(e=>e instanceof ld).length,n=e.filter(e=>e instanceof lc).length;if(t>1||t>0&&n>0)throw new T(E.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r=r.concat(n)),r))e=i._apply(e);return e}class lc extends ll{constructor(e,t,n){super(),this._field=e,this._op=t,this._value=n,this.type="where"}static _create(e,t,n){return new lc(e,t,n)}_apply(e){let t=this._parse(e);return lD(e._query,t),new od(e.firestore,e.converter,t2(e._query,t))}_parse(e){let t=oQ(e.firestore),n=function(e,t,n,r,i,s,a){let o;if(i.isKeyField()){if("array-contains"===s||"array-contains-any"===s)throw new T(E.INVALID_ARGUMENT,`Invalid Query. You can't perform '${s}' queries on documentId().`);if("in"===s||"not-in"===s){lx(a,s);let t=[];for(let n of a)t.push(lS(r,e,n));o={arrayValue:{values:t}}}else o=lS(r,e,a)}else"in"!==s&&"not-in"!==s&&"array-contains-any"!==s||lx(a,s),o=o5(n,t,a,"in"===s||"not-in"===s);return tS.create(i,s,o)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value);return n}}function lh(e,t,n){let r=ls("where",e);return lc._create(r,t,n)}class ld extends lo{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new ld(e,t)}_parse(e){let t=this._queryConstraints.map(t=>t._parse(e)).filter(e=>e.getFilters().length>0);return 1===t.length?t[0]:tx.create(t,this._getOperator())}_apply(e){let t=this._parse(e);return 0===t.getFilters().length?e:(function(e,t){let n=e,r=t.getFlattenedFilters();for(let e of r)lD(n,e),n=t2(n,e)}(e._query,t),new od(e.firestore,e.converter,t2(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return"and"===this.type?"and":"or"}}class lf extends ll{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new lf(e,t)}_apply(e){let t=function(e,t,n){if(null!==e.startAt)throw new T(E.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(null!==e.endAt)throw new T(E.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");let r=new tE(t,n);return function(e,t){if(null===tJ(e)){let n=tZ(e);null!==n&&lA(e,n,t.field)}}(e,r),r}(e._query,this._field,this._direction);return new od(e.firestore,e.converter,function(e,t){let n=e.explicitOrderBy.concat([t]);return new tW(e.path,e.collectionGroup,n,e.filters.slice(),e.limit,e.limitType,e.startAt,e.endAt)}(e._query,t))}}function lm(e,t="asc"){let n=ls("orderBy",e);return lf._create(n,t)}class lg extends ll{constructor(e,t,n){super(),this.type=e,this._limit=t,this._limitType=n}static _create(e,t,n){return new lg(e,t,n)}_apply(e){return new od(e.firestore,e.converter,t5(e._query,this._limit,this._limitType))}}function lp(e){return ol("limit",e),lg._create("limit",e,"F")}function ly(e){return ol("limitToLast",e),lg._create("limitToLast",e,"L")}class lw extends ll{constructor(e,t,n){super(),this.type=e,this._docOrFields=t,this._inclusive=n}static _create(e,t,n){return new lw(e,t,n)}_apply(e){var t;let n=lT(e,this.type,this._docOrFields,this._inclusive);return new od(e.firestore,e.converter,(t=e._query,new tW(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),t.limit,t.limitType,n,t.endAt)))}}function lv(...e){return lw._create("startAt",e,!0)}function lI(...e){return lw._create("startAfter",e,!1)}class l_ extends ll{constructor(e,t,n){super(),this.type=e,this._docOrFields=t,this._inclusive=n}static _create(e,t,n){return new l_(e,t,n)}_apply(e){var t;let n=lT(e,this.type,this._docOrFields,this._inclusive);return new od(e.firestore,e.converter,(t=e._query,new tW(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),t.limit,t.limitType,t.startAt,n)))}}function lb(...e){return l_._create("endBefore",e,!1)}function lE(...e){return l_._create("endAt",e,!0)}function lT(e,t,n,r){if(n[0]=(0,l.m9)(n[0]),n[0]instanceof lr)return function(e,t,n,r,i){if(!r)throw new T(E.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${n}().`);let s=[];for(let n of t0(e))if(n.field.isKeyField())s.push(tl(t,r.key));else{let e=r.data.field(n.field);if(e8(e))throw new T(E.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+n.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(null===e){let e=n.field.canonicalString();throw new T(E.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${e}' (used as the orderBy) does not exist.`)}s.push(e)}return new tI(s,i)}(e._query,e.firestore._databaseId,t,n[0]._document,r);{let i=oQ(e.firestore);return function(e,t,n,r,i,s){let a=e.explicitOrderBy;if(i.length>a.length)throw new T(E.INVALID_ARGUMENT,`Too many arguments provided to ${r}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);let o=[];for(let s=0;s<i.length;s++){let l=i[s];if(a[s].field.isKeyField()){if("string"!=typeof l)throw new T(E.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${r}(), but got a ${typeof l}`);if(!tX(e)&&-1!==l.indexOf("/"))throw new T(E.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${r}() must be a plain document ID, but '${l}' contains a slash.`);let n=e.path.child(U.fromString(l));if(!G.isDocumentKey(n))throw new T(E.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${r}() must result in a valid document path, but '${n}' is not because it contains an odd number of segments.`);let i=new G(n);o.push(tl(t,i))}else{let e=o5(n,r,l);o.push(e)}}return new tI(o,s)}(e._query,e.firestore._databaseId,i,t,n,r)}}function lS(e,t,n){if("string"==typeof(n=(0,l.m9)(n))){if(""===n)throw new T(E.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!tX(t)&&-1!==n.indexOf("/"))throw new T(E.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);let r=t.path.child(U.fromString(n));if(!G.isDocumentKey(r))throw new T(E.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return tl(e,new G(r))}if(n instanceof of)return tl(e,n._key);throw new T(E.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${oa(n)}.`)}function lx(e,t){if(!Array.isArray(e)||0===e.length)throw new T(E.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`)}function lD(e,t){if(t.isInequality()){let n=tZ(e),r=t.field;if(null!==n&&!n.isEqual(r))throw new T(E.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${n.toString()}' and '${r.toString()}'`);let i=tJ(e);null!==i&&lA(e,r,i)}let n=function(e,t){for(let n of e)for(let e of n.getFlattenedFilters())if(t.indexOf(e.op)>=0)return e.op;return null}(e.filters,function(e){switch(e){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(null!==n)throw n===t.op?new T(E.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new T(E.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${n.toString()}' filters.`)}function lA(e,t,n){if(!n.isEqual(t))throw new T(E.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${t.toString()}' and so you must also use '${t.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}class lC{convertValue(e,t="none"){switch(tn(e)){case 0:return null;case 1:return e.booleanValue;case 2:return e5(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(e4(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 10:return this.convertObject(e.mapValue,t);default:throw _()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){let n={};return eG(e,(e,r)=>{n[e]=this.convertValue(r,t)}),n}convertGeoPoint(e){return new oU(e5(e.latitude),e5(e.longitude))}convertArray(e,t){return(e.values||[]).map(e=>this.convertValue(e,t))}convertServerTimestamp(e,t){switch(t){case"previous":let n=e3(e);return null==n?null:this.convertValue(n,t);case"estimate":return this.convertTimestamp(e9(e));default:return null}}convertTimestamp(e){let t=e2(e);return new O(t.seconds,t.nanos)}convertDocumentKey(e,t){let n=U.fromString(e);rI(n)||_();let r=new e7(n.get(1),n.get(3)),i=new G(n.popFirst(5));return r.isEqual(t)||w(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}/**
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
 */function lN(e,t,n){return e?n&&(n.merge||n.mergeFields)?e.toFirestore(t,n):e.toFirestore(t):t}class lk extends lC{constructor(e){super(),this.firestore=e}convertBytes(e){return new oO(e)}convertReference(e){let t=this.convertDocumentKey(e,this.firestore._databaseId);return new of(this.firestore,null,t)}}/**
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
 */class lR{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class lF extends lr{constructor(e,t,n,r,i,s){super(e,t,n,r,s),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){let t=new lM(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){let n=this._document.data.field(ls("DocumentSnapshot.get",e));if(null!==n)return this._userDataWriter.convertValue(n,t.serverTimestamps)}}}class lM extends lF{data(e={}){return super.data(e)}}class lV{constructor(e,t,n,r){this._firestore=e,this._userDataWriter=t,this._snapshot=r,this.metadata=new lR(r.hasPendingWrites,r.fromCache),this.query=n}get docs(){let e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(e,t){this._snapshot.docs.forEach(n=>{e.call(t,new lM(this._firestore,this._userDataWriter,n.key,n,new lR(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){let t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new T(E.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(e,t){if(e._snapshot.oldDocs.isEmpty()){let t=0;return e._snapshot.docChanges.map(n=>{let r=new lM(e._firestore,e._userDataWriter,n.doc.key,n.doc,new lR(e._snapshot.mutatedKeys.has(n.doc.key),e._snapshot.fromCache),e.query.converter);return n.doc,{type:"added",doc:r,oldIndex:-1,newIndex:t++}})}{let n=e._snapshot.oldDocs;return e._snapshot.docChanges.filter(e=>t||3!==e.type).map(t=>{let r=new lM(e._firestore,e._userDataWriter,t.doc.key,t.doc,new lR(e._snapshot.mutatedKeys.has(t.doc.key),e._snapshot.fromCache),e.query.converter),i=-1,s=-1;return 0!==t.type&&(i=n.indexOf(t.doc.key),n=n.delete(t.doc.key)),1!==t.type&&(s=(n=n.add(t.doc)).indexOf(t.doc.key)),{type:function(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return _()}}(t.type),doc:r,oldIndex:i,newIndex:s}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function lL(e,t){return e instanceof lF&&t instanceof lF?e._firestore===t._firestore&&e._key.isEqual(t._key)&&(null===e._document?null===t._document:e._document.isEqual(t._document))&&e._converter===t._converter:e instanceof lV&&t instanceof lV&&e._firestore===t._firestore&&ov(e.query,t.query)&&e.metadata.isEqual(t.metadata)&&e._snapshot.isEqual(t._snapshot)}/**
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
 */function lO(e){e=oo(e,of);let t=oo(e.firestore,oT);return a6(oS(t),e._key).then(n=>lJ(t,e,n))}class lP extends lC{constructor(e){super(),this.firestore=e}convertBytes(e){return new oO(e)}convertReference(e){let t=this.convertDocumentKey(e,this.firestore._databaseId);return new of(this.firestore,null,t)}}function lq(e){e=oo(e,of);let t=oo(e.firestore,oT),n=oS(t),r=new lP(t);return(function(e,t){let n=new S;return e.asyncQueue.enqueueAndForget(async()=>(async function(e,t,n){try{let r=await e.persistence.runTransaction("read document","readonly",n=>e.localDocuments.getDocument(n,t));r.isFoundDocument()?n.resolve(r):r.isNoDocument()?n.resolve(null):n.reject(new T(E.UNAVAILABLE,"Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)"))}catch(r){let e=s0(r,`Failed to get document '${t} from cache`);n.reject(e)}})(await a4(e),t,n)),n.promise})(n,e._key).then(n=>new lF(t,r,e._key,n,new lR(null!==n&&n.hasLocalMutations,!0),e.converter))}function lU(e){e=oo(e,of);let t=oo(e.firestore,oT);return a6(oS(t),e._key,{source:"server"}).then(n=>lJ(t,e,n))}function lB(e){e=oo(e,od);let t=oo(e.firestore,oT),n=oS(t),r=new lP(t);return la(e._query),a7(n,e._query).then(n=>new lV(t,r,e,n))}function lz(e){e=oo(e,od);let t=oo(e.firestore,oT),n=oS(t),r=new lP(t);return(function(e,t){let n=new S;return e.asyncQueue.enqueueAndForget(async()=>(async function(e,t,n){try{let r=await i4(e,t,!0),i=new al(t,r._s),s=i._a(r.documents),a=i.applyChanges(s,!1);n.resolve(a.snapshot)}catch(r){let e=s0(r,`Failed to execute query '${t} against cache`);n.reject(e)}})(await a4(e),t,n)),n.promise})(n,e._query).then(n=>new lV(t,r,e,n))}function lG(e){e=oo(e,od);let t=oo(e.firestore,oT),n=oS(t),r=new lP(t);return a7(n,e._query,{source:"server"}).then(n=>new lV(t,r,e,n))}function lK(e,t,n){e=oo(e,of);let r=oo(e.firestore,oT),i=lN(e.converter,t,n);return lH(r,[oW(oQ(r),"setDoc",e._key,i,null!==e.converter,n).toMutation(e._key,nS.none())])}function l$(e,t,n,...r){let i;e=oo(e,of);let s=oo(e.firestore,oT),a=oQ(s);return i="string"==typeof(t=(0,l.m9)(t))||t instanceof oP?o2(a,"updateDoc",e._key,t,n,r):o1(a,"updateDoc",e._key,t),lH(s,[i.toMutation(e._key,nS.exists(!0))])}function lj(e){return lH(oo(e.firestore,oT),[new nL(e._key,nS.none())])}function lQ(e,t){let n=oo(e.firestore,oT),r=oy(e),i=lN(e.converter,t);return lH(n,[oW(oQ(e.firestore),"addDoc",r._key,i,null!==e.converter,{}).toMutation(r._key,nS.exists(!1))]).then(()=>r)}function lW(e,...t){var n,r,i;let s,a,o;e=(0,l.m9)(e);let u={includeMetadataChanges:!1},c=0;"object"!=typeof t[0]||o_(t[c])||(u=t[c],c++);let h={includeMetadataChanges:u.includeMetadataChanges};if(o_(t[c])){let e=t[c];t[c]=null===(n=e.next)||void 0===n?void 0:n.bind(e),t[c+1]=null===(r=e.error)||void 0===r?void 0:r.bind(e),t[c+2]=null===(i=e.complete)||void 0===i?void 0:i.bind(e)}if(e instanceof of)a=oo(e.firestore,oT),o=tY(e._key.path),s={next:n=>{t[c]&&t[c](lJ(a,e,n))},error:t[c+1],complete:t[c+2]};else{let n=oo(e,od);a=oo(n.firestore,oT),o=n._query;let r=new lP(a);s={next:e=>{t[c]&&t[c](new lV(a,r,n,e))},error:t[c+1],complete:t[c+2]},la(e._query)}return function(e,t,n,r){let i=new aQ(r),s=new at(t,i,n);return e.asyncQueue.enqueueAndForget(async()=>s3(await a9(e),s)),()=>{i.Ma(),e.asyncQueue.enqueueAndForget(async()=>s9(await a9(e),s))}}(oS(a),o,h,s)}function lY(e,t){return function(e,t){let n=new aQ(t);return e.asyncQueue.enqueueAndForget(async()=>{(await a9(e)).B_.add(n),n.next()}),()=>{n.Ma(),e.asyncQueue.enqueueAndForget(async()=>(function(e,t){e.B_.delete(t)})(await a9(e),n))}}(oS(e=oo(e,oT)),o_(t)?t:{next:t})}function lH(e,t){return function(e,t){let n=new S;return e.asyncQueue.enqueueAndForget(async()=>ag(await a3(e),t,n)),n.promise}(oS(e),t)}function lJ(e,t,n){let r=n.docs.get(t._key),i=new lP(e);return new lF(e,i,t._key,r,new lR(n.hasPendingWrites,n.fromCache),t.converter)}/**
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
 */let lZ={maxAttempts:5};/**
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
 */class lX{constructor(e,t){this._firestore=e,this._commitHandler=t,this._mutations=[],this._committed=!1,this._dataReader=oQ(e)}set(e,t,n){this._verifyNotCommitted();let r=l0(e,this._firestore),i=lN(r.converter,t,n),s=oW(this._dataReader,"WriteBatch.set",r._key,i,null!==r.converter,n);return this._mutations.push(s.toMutation(r._key,nS.none())),this}update(e,t,n,...r){let i;this._verifyNotCommitted();let s=l0(e,this._firestore);return i="string"==typeof(t=(0,l.m9)(t))||t instanceof oP?o2(this._dataReader,"WriteBatch.update",s._key,t,n,r):o1(this._dataReader,"WriteBatch.update",s._key,t),this._mutations.push(i.toMutation(s._key,nS.exists(!0))),this}delete(e){this._verifyNotCommitted();let t=l0(e,this._firestore);return this._mutations=this._mutations.concat(new nL(t._key,nS.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new T(E.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function l0(e,t){if((e=(0,l.m9)(e)).firestore!==t)throw new T(E.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return e}/**
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
 */class l1 extends class{constructor(e,t){this._firestore=e,this._transaction=t,this._dataReader=oQ(e)}get(e){let t=l0(e,this._firestore),n=new lk(this._firestore);return this._transaction.lookup([t._key]).then(e=>{if(!e||1!==e.length)return _();let r=e[0];if(r.isFoundDocument())return new lr(this._firestore,n,r.key,r,t.converter);if(r.isNoDocument())return new lr(this._firestore,n,t._key,null,t.converter);throw _()})}set(e,t,n){let r=l0(e,this._firestore),i=lN(r.converter,t,n),s=oW(this._dataReader,"Transaction.set",r._key,i,null!==r.converter,n);return this._transaction.set(r._key,s),this}update(e,t,n,...r){let i;let s=l0(e,this._firestore);return i="string"==typeof(t=(0,l.m9)(t))||t instanceof oP?o2(this._dataReader,"Transaction.update",s._key,t,n,r):o1(this._dataReader,"Transaction.update",s._key,t),this._transaction.update(s._key,i),this}delete(e){let t=l0(e,this._firestore);return this._transaction.delete(t._key),this}}{constructor(e,t){super(e,t),this._firestore=e}get(e){let t=l0(e,this._firestore),n=new lP(this._firestore);return super.get(e).then(e=>new lF(this._firestore,n,t._key,e._document,new lR(!1,!1),t.converter))}}function l2(e,t,n){e=oo(e,oT);let r=Object.assign(Object.assign({},lZ),n);return!function(e){if(e.maxAttempts<1)throw new T(E.INVALID_ARGUMENT,"Max attempts must be at least 1")}(r),function(e,t,n){let r=new S;return e.asyncQueue.enqueueAndForget(async()=>{let i=await a2(e).then(e=>e.datastore);new aH(e.asyncQueue,i,n,t,r).run()}),r.promise}(oS(e),n=>t(new l1(e,n)),r)}/**
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
 */function l5(){return new oY("deleteField")}function l4(){return new oJ("serverTimestamp")}function l8(...e){return new oZ("arrayUnion",e)}function l3(...e){return new oX("arrayRemove",e)}function l9(e){return new o0("increment",e)}!function(e,t=!0){f=s.SDK_VERSION,(0,s._registerComponent)(new a.wA("firestore",(e,{instanceIdentifier:n,options:r})=>{let i=e.getProvider("app").getImmediate(),s=new oT(new C(e.getProvider("auth-internal")),new F(e.getProvider("app-check-internal")),function(e,t){if(!Object.prototype.hasOwnProperty.apply(e.options,["projectId"]))throw new T(E.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new e7(e.options.projectId,t)}(i,n),i);return r=Object.assign({useFetchStreams:t},r),s._setSettings(r),s},"PUBLIC").setMultipleInstances(!0)),(0,s.registerVersion)(h,"4.1.2",void 0),(0,s.registerVersion)(h,"4.1.2","esm2017")}()}}]);