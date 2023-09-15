"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4358],{99978:function(e,t,n){n.d(t,{$q:function(){return lV},AK:function(){return l4},Ab:function(){return l9},B$:function(){return oy},Bt:function(){return l8},Cf:function(){return ol},EK:function(){return O},ET:function(){return lW},Eo:function(){return ov},F8:function(){return oB},Fc:function(){return ok},GL:function(){return lX},IO:function(){return lc},IX:function(){return oT},Ix:function(){return oF},JU:function(){return ow},Jj:function(){return oP},K9:function(){return b},Ky:function(){return z},L$:function(){return oL},Lx:function(){return lE},Lz:function(){return oq},Me:function(){return eZ},Mx:function(){return oR},PL:function(){return lK},PU:function(){return l0},Pb:function(){return oV},QT:function(){return lP},ST:function(){return oC},TF:function(){return oM},TQ:function(){return l_},UQ:function(){return lz},Ub:function(){return p},W:function(){return lL},WA:function(){return T},Wi:function(){return oi},Wu:function(){return lT},Xb:function(){return K},Xk:function(){return lB},Xo:function(){return lg},ar:function(){return ld},at:function(){return od},b9:function(){return ly},cf:function(){return lH},e0:function(){return lI},fH:function(){return oN},hJ:function(){return op},i3:function(){return l5},iE:function(){return oI},kl:function(){return lU},l7:function(){return e7},my:function(){return om},nP:function(){return l6},oe:function(){return lQ},pl:function(){return l$},qK:function(){return lO},qY:function(){return ox},r7:function(){return lj},sc:function(){return lY},u7:function(){return lA},vh:function(){return lw},vr:function(){return l3},xU:function(){return lM},yq:function(){return v},zN:function(){return lG}});var r,i,s=n(63991),a=n(45538),o=n(56914),l=n(8745),u=n(30613),c=n(62601);let h="@firebase/firestore";/**
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
 */let f="10.4.0",m=new o.Yd("@firebase/firestore");function g(){return m.logLevel}function p(e){m.setLogLevel(e)}function y(e,...t){if(m.logLevel<=o.in.DEBUG){let n=t.map(I);m.debug(`Firestore (${f}): ${e}`,...n)}}function w(e,...t){if(m.logLevel<=o.in.ERROR){let n=t.map(I);m.error(`Firestore (${f}): ${e}`,...n)}}function v(e,...t){if(m.logLevel<=o.in.WARN){let n=t.map(I);m.warn(`Firestore (${f}): ${e}`,...n)}}function I(e){if("string"==typeof e)return e;try{/**
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
 */class x{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class D{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(d.UNAUTHENTICATED))}shutdown(){}}class C{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class N{constructor(e){this.t=e,this.currentUser=d.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){let n=this.i,r=e=>this.i!==n?(n=this.i,t(e)):Promise.resolve(),i=new S;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new S,e.enqueueRetryable(()=>r(this.currentUser))};let s=()=>{let t=i;e.enqueueRetryable(async()=>{await t.promise,await r(this.currentUser)})},a=e=>{y("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=e,this.auth.addAuthTokenListener(this.o),s()};this.t.onInit(e=>a(e)),setTimeout(()=>{if(!this.auth){let e=this.t.getImmediate({optional:!0});e?a(e):(y("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new S)}},0),s()}getToken(){let e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(t=>this.i!==e?(y("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):t?("string"==typeof t.accessToken||_(),new x(t.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){let e=this.auth&&this.auth.getUid();return null===e||"string"==typeof e||_(),new d(e)}}class A{constructor(e,t,n){this.l=e,this.h=t,this.P=n,this.type="FirstParty",this.user=d.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);let e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class k{constructor(e,t,n){this.l=e,this.h=t,this.P=n}getToken(){return Promise.resolve(new A(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(d.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class R{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class F{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,t){let n=e=>{null!=e.error&&y("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${e.error.message}`);let n=e.token!==this.R;return this.R=e.token,y("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?t(e.token):Promise.resolve()};this.o=t=>{e.enqueueRetryable(()=>n(t))};let r=e=>{y("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=e,this.appCheck.addTokenListener(this.o)};this.A.onInit(e=>r(e)),setTimeout(()=>{if(!this.appCheck){let e=this.A.getImmediate({optional:!0});e?r(e):y("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){let e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(e=>e?("string"==typeof e.token||_(),this.R=e.token,new R(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */class q{constructor(e,t,n){void 0===t?t=0:t>e.length&&_(),void 0===n?n=e.length-t:n>e.length-t&&_(),this.segments=e,this.offset=t,this.len=n}get length(){return this.len}isEqual(e){return 0===q.comparator(this,e)}child(e){let t=this.segments.slice(this.offset,this.limit());return e instanceof q?e.forEach(e=>{t.push(e)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=void 0===e?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return 0===this.length}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,n=this.limit();t<n;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){let n=Math.min(e.length,t.length);for(let r=0;r<n;r++){let n=e.get(r),i=t.get(r);if(n<i)return -1;if(n>i)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class U extends q{construct(e,t,n){return new U(e,t,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){let t=[];for(let n of e){if(n.indexOf("//")>=0)throw new T(E.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);t.push(...n.split("/").filter(e=>e.length>0))}return new U(t)}static emptyPath(){return new U([])}}let B=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class K extends q{construct(e,t,n){return new K(e,t,n)}static isValidIdentifier(e){return B.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),K.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new K(["__name__"])}static fromServerFormat(e){let t=[],n="",r=0,i=()=>{if(0===n.length)throw new T(E.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(n),n=""},s=!1;for(;r<e.length;){let t=e[r];if("\\"===t){if(r+1===e.length)throw new T(E.INVALID_ARGUMENT,"Path has trailing escape character: "+e);let t=e[r+1];if("\\"!==t&&"."!==t&&"`"!==t)throw new T(E.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);n+=t,r+=2}else"`"===t?s=!s:"."!==t||s?n+=t:i(),r++}if(i(),s)throw new T(E.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new K(t)}static emptyPath(){return new K([])}}/**
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
 */class z{constructor(e){this.path=e}static fromPath(e){return new z(U.fromString(e))}static fromName(e){return new z(U.fromString(e).popFirst(5))}static empty(){return new z(U.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return null!==e&&0===U.comparator(this.path,e.path)}toString(){return this.path.toString()}static comparator(e,t){return U.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new z(new U(e.slice()))}}/**
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
 */class G{constructor(e,t,n,r){this.indexId=e,this.collectionGroup=t,this.fields=n,this.indexState=r}}function $(e){return e.fields.find(e=>2===e.kind)}function j(e){return e.fields.filter(e=>2!==e.kind)}G.UNKNOWN_ID=-1;class Q{constructor(e,t){this.fieldPath=e,this.kind=t}}class W{constructor(e,t){this.sequenceNumber=e,this.offset=t}static empty(){return new W(0,X.min())}}function H(e,t){let n=e.toTimestamp().seconds,r=e.toTimestamp().nanoseconds+1,i=P.fromTimestamp(1e9===r?new O(n+1,0):new O(n,r));return new X(i,z.empty(),t)}function Y(e){return new X(e.readTime,e.key,-1)}class X{constructor(e,t,n){this.readTime=e,this.documentKey=t,this.largestBatchId=n}static min(){return new X(P.min(),z.empty(),-1)}static max(){return new X(P.max(),z.empty(),-1)}}function J(e,t){let n=e.readTime.compareTo(t.readTime);return 0!==n?n:0!==(n=z.comparator(e.documentKey,t.documentKey))?n:V(e.largestBatchId,t.largestBatchId)}/**
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
 */let Z="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class ee{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function et(e){if(e.code!==E.FAILED_PRECONDITION||e.message!==Z)throw e;y("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class er{constructor(e,t){this.action=e,this.transaction=t,this.aborted=!1,this.m=new S,this.transaction.oncomplete=()=>{this.m.resolve()},this.transaction.onabort=()=>{t.error?this.m.reject(new ea(e,t.error)):this.m.resolve()},this.transaction.onerror=t=>{let n=eh(t.target.error);this.m.reject(new ea(e,n))}}static open(e,t,n,r){try{return new er(t,e.transaction(r,n))}catch(e){throw new ea(t,e)}}get g(){return this.m.promise}abort(e){e&&this.m.reject(e),this.aborted||(y("SimpleDb","Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}p(){let e=this.transaction;this.aborted||"function"!=typeof e.commit||e.commit()}store(e){let t=this.transaction.objectStore(e);return new el(t)}}class ei{constructor(e,t,n){this.name=e,this.version=t,this.S=n,12.2===ei.D((0,l.z$)())&&w("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(e){return y("SimpleDb","Removing database:",e),eu(window.indexedDB.deleteDatabase(e)).toPromise()}static C(){if(!(0,l.hl)())return!1;if(ei.v())return!0;let e=(0,l.z$)(),t=ei.D(e),n=ei.F(e);return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||0<t&&t<10||0<n&&n<4.5)}static v(){var e;return void 0!==c&&"YES"===(null===(e=c.env)||void 0===e?void 0:e.M)}static O(e,t){return e.store(t)}static D(e){let t=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),n=t?t[1].split("_").slice(0,2).join("."):"-1";return Number(n)}static F(e){let t=e.match(/Android ([\d.]+)/i),n=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(n)}async N(e){return this.db||(y("SimpleDb","Opening database:",this.name),this.db=await new Promise((t,n)=>{let r=indexedDB.open(this.name,this.version);r.onsuccess=e=>{let n=e.target.result;t(n)},r.onblocked=()=>{n(new ea(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},r.onerror=t=>{let r=t.target.error;"VersionError"===r.name?n(new T(E.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):"InvalidStateError"===r.name?n(new T(E.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+r)):n(new ea(e,r))},r.onupgradeneeded=e=>{y("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',e.oldVersion);let t=e.target.result;this.S.B(t,r.transaction,e.oldVersion,this.version).next(()=>{y("SimpleDb","Database upgrade to version "+this.version+" complete")})}})),this.L&&(this.db.onversionchange=e=>this.L(e)),this.db}k(e){this.L=e,this.db&&(this.db.onversionchange=t=>e(t))}async runTransaction(e,t,n,r){let i="readonly"===t,s=0;for(;;){++s;try{this.db=await this.N(e);let t=er.open(this.db,e,i?"readonly":"readwrite",n),s=r(t).next(e=>(t.p(),e)).catch(e=>(t.abort(e),en.reject(e))).toPromise();return s.catch(()=>{}),await t.g,s}catch(t){let e="FirebaseError"!==t.name&&s<3;if(y("SimpleDb","Transaction failed with error:",t.message,"Retrying:",e),this.close(),!e)return Promise.reject(t)}}}close(){this.db&&this.db.close(),this.db=void 0}}class es{constructor(e){this.q=e,this.K=!1,this.$=null}get isDone(){return this.K}get U(){return this.$}set cursor(e){this.q=e}done(){this.K=!0}W(e){this.$=e}delete(){return eu(this.q.delete())}}class ea extends T{constructor(e,t){super(E.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${t}`),this.name="IndexedDbTransactionError"}}function eo(e){return"IndexedDbTransactionError"===e.name}class el{constructor(e){this.store=e}put(e,t){let n;return void 0!==t?(y("SimpleDb","PUT",this.store.name,e,t),n=this.store.put(t,e)):(y("SimpleDb","PUT",this.store.name,"<auto-key>",e),n=this.store.put(e)),eu(n)}add(e){return y("SimpleDb","ADD",this.store.name,e,e),eu(this.store.add(e))}get(e){return eu(this.store.get(e)).next(t=>(void 0===t&&(t=null),y("SimpleDb","GET",this.store.name,e,t),t))}delete(e){return y("SimpleDb","DELETE",this.store.name,e),eu(this.store.delete(e))}count(){return y("SimpleDb","COUNT",this.store.name),eu(this.store.count())}G(e,t){let n=this.options(e,t);if(n.index||"function"!=typeof this.store.getAll){let e=this.cursor(n),t=[];return this.j(e,(e,n)=>{t.push(n)}).next(()=>t)}{let e=this.store.getAll(n.range);return new en((t,n)=>{e.onerror=e=>{n(e.target.error)},e.onsuccess=e=>{t(e.target.result)}})}}H(e,t){let n=this.store.getAll(e,null===t?void 0:t);return new en((e,t)=>{n.onerror=e=>{t(e.target.error)},n.onsuccess=t=>{e(t.target.result)}})}J(e,t){y("SimpleDb","DELETE ALL",this.store.name);let n=this.options(e,t);n.Y=!1;let r=this.cursor(n);return this.j(r,(e,t,n)=>n.delete())}Z(e,t){let n;t?n=e:(n={},t=e);let r=this.cursor(n);return this.j(r,t)}X(e){let t=this.cursor({});return new en((n,r)=>{t.onerror=e=>{let t=eh(e.target.error);r(t)},t.onsuccess=t=>{let r=t.target.result;r?e(r.primaryKey,r.value).next(e=>{e?r.continue():n()}):n()}})}j(e,t){let n=[];return new en((r,i)=>{e.onerror=e=>{i(e.target.error)},e.onsuccess=e=>{let i=e.target.result;if(!i)return void r();let s=new es(i),a=t(i.primaryKey,i.value,s);if(a instanceof en){let e=a.catch(e=>(s.done(),en.reject(e)));n.push(e)}s.isDone?r():null===s.U?i.continue():i.continue(s.U)}}).next(()=>en.waitFor(n))}options(e,t){let n;return void 0!==e&&("string"==typeof e?n=e:t=e),{index:n,range:t}}cursor(e){let t="next";if(e.reverse&&(t="prev"),e.index){let n=this.store.index(e.index);return e.Y?n.openKeyCursor(e.range,t):n.openCursor(e.range,t)}return this.store.openCursor(e.range,t)}}function eu(e){return new en((t,n)=>{e.onsuccess=e=>{let n=e.target.result;t(n)},e.onerror=e=>{let t=eh(e.target.error);n(t)}})}let ec=!1;function eh(e){let t=ei.D((0,l.z$)());if(t>=12.2&&t<13){let t="An internal error was encountered in the Indexed Database server";if(e.message.indexOf(t)>=0){let e=new T("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${t}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return ec||(ec=!0,setTimeout(()=>{throw e},0)),e}}return e}class ed{constructor(e,t){this.asyncQueue=e,this.ee=t,this.task=null}start(){this.te(15e3)}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return null!==this.task}te(e){y("IndexBackiller",`Scheduled in ${e}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",e,async()=>{this.task=null;try{y("IndexBackiller",`Documents written: ${await this.ee.ne()}`)}catch(e){eo(e)?y("IndexBackiller","Ignoring IndexedDB error during index backfill: ",e):await et(e)}await this.te(6e4)})}}class ef{constructor(e,t){this.localStore=e,this.persistence=t}async ne(e=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",t=>this.re(t,e))}re(e,t){let n=new Set,r=t,i=!0;return en.doWhile(()=>!0===i&&r>0,()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(e).next(t=>{if(null!==t&&!n.has(t))return y("IndexBackiller",`Processing collection: ${t}`),this.ie(e,t,r).next(e=>{r-=e,n.add(t)});i=!1})).next(()=>t-r)}ie(e,t,n){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(e,t).next(r=>this.localStore.localDocuments.getNextDocuments(e,t,r,n).next(n=>{let i=n.changes;return this.localStore.indexManager.updateIndexEntries(e,i).next(()=>this.se(r,n)).next(n=>(y("IndexBackiller",`Updating offset: ${n}`),this.localStore.indexManager.updateCollectionGroup(e,t,n))).next(()=>i.size)}))}se(e,t){let n=e;return t.changes.forEach((e,t)=>{let r=Y(t);J(r,n)>0&&(n=r)}),new X(n.readTime,n.documentKey,Math.max(t.batchId,e.largestBatchId))}}/**
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
 */let eI=["userId","batchId"],e_={},eb=["prefixPath","collectionGroup","readTime","documentId"],eE=["prefixPath","collectionGroup","documentId"],eT=["collectionGroup","readTime","prefixPath","documentId"],eS=["canonicalId","targetId"],ex=["targetId","path"],eD=["path","targetId"],eC=["collectionId","parent"],eN=["indexId","uid"],eA=["uid","sequenceNumber"],ek=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],eR=["indexId","uid","orderedDocumentKey"],eF=["userId","collectionPath","documentId"],eM=["userId","collectionPath","largestBatchId"],eV=["userId","collectionGroup","largestBatchId"],eL=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],eO=[...eL,"documentOverlays"],eP=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],eq=[...eP,"indexConfiguration","indexState","indexEntries"];/**
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
 */function eK(e){let t=0;for(let n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function ez(e,t){for(let n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function eG(e){for(let t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}/**
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
 */class eW{constructor(e){this.comparator=e,this.data=new e$(this.comparator)}has(e){return null!==this.data.get(e)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,n)=>(e(t),!1))}forEachInRange(e,t){let n=this.data.getIteratorFrom(e[0]);for(;n.hasNext();){let r=n.getNext();if(this.comparator(r.key,e[1])>=0)return;t(r.key)}}forEachWhile(e,t){let n;for(n=void 0!==t?this.data.getIteratorFrom(t):this.data.getIterator();n.hasNext();)if(!e(n.getNext().key))return}firstAfterOrEqual(e){let t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new eH(this.data.getIterator())}getIteratorFrom(e){return new eH(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(e=>{t=t.add(e)}),t}isEqual(e){if(!(e instanceof eW)||this.size!==e.size)return!1;let t=this.data.getIterator(),n=e.data.getIterator();for(;t.hasNext();){let e=t.getNext().key,r=n.getNext().key;if(0!==this.comparator(e,r))return!1}return!0}toArray(){let e=[];return this.forEach(t=>{e.push(t)}),e}toString(){let e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){let t=new eW(this.comparator);return t.data=e,t}}class eH{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function eY(e){return e.hasNext()?e.getNext():void 0}/**
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
 */class eX{constructor(e){this.fields=e,e.sort(K.comparator)}static empty(){return new eX([])}unionWith(e){let t=new eW(K.comparator);for(let e of this.fields)t=t.add(e);for(let n of e)t=t.add(n);return new eX(t.toArray())}covers(e){for(let t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return L(this.fields,e.fields,(e,t)=>e.isEqual(t))}}/**
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
 */class eJ extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */function eZ(){return"undefined"!=typeof atob}/**
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
 */class e0{constructor(e){this.binaryString=e}static fromBase64String(e){let t=function(e){try{return atob(e)}catch(e){throw"undefined"!=typeof DOMException&&e instanceof DOMException?new eJ("Invalid base64 string: "+e):e}}(e);return new e0(t)}static fromUint8Array(e){let t=function(e){let t="";for(let n=0;n<e.length;++n)t+=String.fromCharCode(e[n]);return t}(e);return new e0(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return btoa(this.binaryString)}toUint8Array(){return function(e){let t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return t}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return V(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}e0.EMPTY_BYTE_STRING=new e0("");let e1=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function e2(e){if(e||_(),"string"==typeof e){let t=0,n=e1.exec(e);if(n||_(),n[1]){let e=n[1];t=Number(e=(e+"000000000").substr(0,9))}let r=new Date(e);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:e5(e.seconds),nanos:e5(e.nanos)}}function e5(e){return"number"==typeof e?e:"string"==typeof e?Number(e):0}function e4(e){return"string"==typeof e?e0.fromBase64String(e):e0.fromUint8Array(e)}/**
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
 */let te={mapValue:{fields:{__type__:{stringValue:"__max__"}}}},tt={nullValue:"NULL_VALUE"};function tn(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?e8(e)?4:tg(e)?9007199254740991:10:_()}function tr(e,t){if(e===t)return!0;let n=tn(e);if(n!==tn(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return e9(e).isEqual(e9(t));case 3:return function(e,t){if("string"==typeof e.timestampValue&&"string"==typeof t.timestampValue&&e.timestampValue.length===t.timestampValue.length)return e.timestampValue===t.timestampValue;let n=e2(e.timestampValue),r=e2(t.timestampValue);return n.seconds===r.seconds&&n.nanos===r.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return e4(e.bytesValue).isEqual(e4(t.bytesValue));case 7:return e.referenceValue===t.referenceValue;case 8:return e5(e.geoPointValue.latitude)===e5(t.geoPointValue.latitude)&&e5(e.geoPointValue.longitude)===e5(t.geoPointValue.longitude);case 2:return function(e,t){if("integerValue"in e&&"integerValue"in t)return e5(e.integerValue)===e5(t.integerValue);if("doubleValue"in e&&"doubleValue"in t){let n=e5(e.doubleValue),r=e5(t.doubleValue);return n===r?ep(n)===ep(r):isNaN(n)&&isNaN(r)}return!1}(e,t);case 9:return L(e.arrayValue.values||[],t.arrayValue.values||[],tr);case 10:return function(e,t){let n=e.mapValue.fields||{},r=t.mapValue.fields||{};if(eK(n)!==eK(r))return!1;for(let e in n)if(n.hasOwnProperty(e)&&(void 0===r[e]||!tr(n[e],r[e])))return!1;return!0}(e,t);default:return _()}}function ti(e,t){return void 0!==(e.values||[]).find(e=>tr(e,t))}function ts(e,t){if(e===t)return 0;let n=tn(e),r=tn(t);if(n!==r)return V(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return V(e.booleanValue,t.booleanValue);case 2:return function(e,t){let n=e5(e.integerValue||e.doubleValue),r=e5(t.integerValue||t.doubleValue);return n<r?-1:n>r?1:n===r?0:isNaN(n)?isNaN(r)?0:-1:1}(e,t);case 3:return ta(e.timestampValue,t.timestampValue);case 4:return ta(e9(e),e9(t));case 5:return V(e.stringValue,t.stringValue);case 6:return function(e,t){let n=e4(e),r=e4(t);return n.compareTo(r)}(e.bytesValue,t.bytesValue);case 7:return function(e,t){let n=e.split("/"),r=t.split("/");for(let e=0;e<n.length&&e<r.length;e++){let t=V(n[e],r[e]);if(0!==t)return t}return V(n.length,r.length)}(e.referenceValue,t.referenceValue);case 8:return function(e,t){let n=V(e5(e.latitude),e5(t.latitude));return 0!==n?n:V(e5(e.longitude),e5(t.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(e,t){let n=e.values||[],r=t.values||[];for(let e=0;e<n.length&&e<r.length;++e){let t=ts(n[e],r[e]);if(t)return t}return V(n.length,r.length)}(e.arrayValue,t.arrayValue);case 10:return function(e,t){if(e===te.mapValue&&t===te.mapValue)return 0;if(e===te.mapValue)return 1;if(t===te.mapValue)return -1;let n=e.fields||{},r=Object.keys(n),i=t.fields||{},s=Object.keys(i);r.sort(),s.sort();for(let e=0;e<r.length&&e<s.length;++e){let t=V(r[e],s[e]);if(0!==t)return t;let a=ts(n[r[e]],i[s[e]]);if(0!==a)return a}return V(r.length,s.length)}(e.mapValue,t.mapValue);default:throw _()}}function ta(e,t){if("string"==typeof e&&"string"==typeof t&&e.length===t.length)return V(e,t);let n=e2(e),r=e2(t),i=V(n.seconds,r.seconds);return 0!==i?i:V(n.nanos,r.nanos)}function to(e){var t,n;return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(e){let t=e2(e);return`time(${t.seconds},${t.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?e4(e.bytesValue).toBase64():"referenceValue"in e?(t=e.referenceValue,z.fromName(t).toString()):"geoPointValue"in e?(n=e.geoPointValue,`geo(${n.latitude},${n.longitude})`):"arrayValue"in e?function(e){let t="[",n=!0;for(let r of e.values||[])n?n=!1:t+=",",t+=to(r);return t+"]"}(e.arrayValue):"mapValue"in e?function(e){let t=Object.keys(e.fields||{}).sort(),n="{",r=!0;for(let i of t)r?r=!1:n+=",",n+=`${i}:${to(e.fields[i])}`;return n+"}"}(e.mapValue):_()}function tl(e,t){return{referenceValue:`projects/${e.projectId}/databases/${e.database}/documents/${t.path.canonicalString()}`}}function tu(e){return!!e&&"integerValue"in e}function tc(e){return!!e&&"arrayValue"in e}function th(e){return!!e&&"nullValue"in e}function td(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function tf(e){return!!e&&"mapValue"in e}function tm(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&"object"==typeof e.timestampValue)return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){let t={mapValue:{fields:{}}};return ez(e.mapValue.fields,(e,n)=>t.mapValue.fields[e]=tm(n)),t}if(e.arrayValue){let t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=tm(e.arrayValue.values[n]);return t}return Object.assign({},e)}function tg(e){return"__max__"===(((e.mapValue||{}).fields||{}).__type__||{}).stringValue}function tp(e,t){let n=ts(e.value,t.value);return 0!==n?n:e.inclusive&&!t.inclusive?-1:!e.inclusive&&t.inclusive?1:0}function ty(e,t){let n=ts(e.value,t.value);return 0!==n?n:e.inclusive&&!t.inclusive?1:!e.inclusive&&t.inclusive?-1:0}/**
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
 */class tw{constructor(e){this.value=e}static empty(){return new tw({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let n=0;n<e.length-1;++n)if(!tf(t=(t.mapValue.fields||{})[e.get(n)]))return null;return(t=(t.mapValue.fields||{})[e.lastSegment()])||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=tm(t)}setAll(e){let t=K.emptyPath(),n={},r=[];e.forEach((e,i)=>{if(!t.isImmediateParentOf(i)){let e=this.getFieldsMap(t);this.applyChanges(e,n,r),n={},r=[],t=i.popLast()}e?n[i.lastSegment()]=tm(e):r.push(i.lastSegment())});let i=this.getFieldsMap(t);this.applyChanges(i,n,r)}delete(e){let t=this.field(e.popLast());tf(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return tr(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let n=0;n<e.length;++n){let r=t.mapValue.fields[e.get(n)];tf(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},t.mapValue.fields[e.get(n)]=r),t=r}return t.mapValue.fields}applyChanges(e,t,n){for(let r of(ez(t,(t,n)=>e[t]=n),n))delete e[r]}clone(){return new tw(tm(this.value))}}/**
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
 */class tI{constructor(e,t){this.position=e,this.inclusive=t}}function t_(e,t,n){let r=0;for(let i=0;i<e.position.length;i++){let s=t[i],a=e.position[i];if(r=s.field.isKeyField()?z.comparator(z.fromName(a.referenceValue),n.key):ts(a,n.data.field(s.field)),"desc"===s.dir&&(r*=-1),0!==r)break}return r}function tb(e,t){if(null===e)return null===t;if(null===t||e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!tr(e.position[n],t.position[n]))return!1;return!0}/**
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
 */class tT{}class tS extends tT{constructor(e,t,n){super(),this.field=e,this.op=t,this.value=n}static create(e,t,n){return e.isKeyField()?"in"===t||"not-in"===t?this.createKeyFieldInFilter(e,t,n):new tR(e,t,n):"array-contains"===t?new tL(e,n):"in"===t?new tO(e,n):"not-in"===t?new tP(e,n):"array-contains-any"===t?new tq(e,n):new tS(e,t,n)}static createKeyFieldInFilter(e,t,n){return"in"===t?new tF(e,n):new tM(e,n)}matches(e){let t=e.data.field(this.field);return"!="===this.op?null!==t&&this.matchesComparison(ts(t,this.value)):null!==t&&tn(this.value)===tn(t)&&this.matchesComparison(ts(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return 0===e;case"!=":return 0!==e;case">":return e>0;case">=":return e>=0;default:return _()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class tx extends tT{constructor(e,t){super(),this.filters=e,this.op=t,this.ce=null}static create(e,t){return new tx(e,t)}matches(e){return tD(this)?void 0===this.filters.find(t=>!t.matches(e)):void 0!==this.filters.find(t=>t.matches(e))}getFlattenedFilters(){return null!==this.ce||(this.ce=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ce}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){let e=this.le(e=>e.isInequality());return null!==e?e.field:null}le(e){for(let t of this.getFlattenedFilters())if(e(t))return t;return null}}function tD(e){return"and"===e.op}function tC(e){return"or"===e.op}function tN(e){return tA(e)&&tD(e)}function tA(e){for(let t of e.filters)if(t instanceof tx)return!1;return!0}function tk(e,t){let n=e.filters.concat(t);return tx.create(n,e.op)}class tR extends tS{constructor(e,t,n){super(e,t,n),this.key=z.fromName(n.referenceValue)}matches(e){let t=z.comparator(e.key,this.key);return this.matchesComparison(t)}}class tF extends tS{constructor(e,t){super(e,"in",t),this.keys=tV("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class tM extends tS{constructor(e,t){super(e,"not-in",t),this.keys=tV("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function tV(e,t){var n;return((null===(n=t.arrayValue)||void 0===n?void 0:n.values)||[]).map(e=>z.fromName(e.referenceValue))}class tL extends tS{constructor(e,t){super(e,"array-contains",t)}matches(e){let t=e.data.field(this.field);return tc(t)&&ti(t.arrayValue,this.value)}}class tO extends tS{constructor(e,t){super(e,"in",t)}matches(e){let t=e.data.field(this.field);return null!==t&&ti(this.value.arrayValue,t)}}class tP extends tS{constructor(e,t){super(e,"not-in",t)}matches(e){if(ti(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;let t=e.data.field(this.field);return null!==t&&!ti(this.value.arrayValue,t)}}class tq extends tS{constructor(e,t){super(e,"array-contains-any",t)}matches(e){let t=e.data.field(this.field);return!(!tc(t)||!t.arrayValue.values)&&t.arrayValue.values.some(e=>ti(this.value.arrayValue,e))}}/**
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
 */class tU{constructor(e,t=null,n=[],r=[],i=null,s=null,a=null){this.path=e,this.collectionGroup=t,this.orderBy=n,this.filters=r,this.limit=i,this.startAt=s,this.endAt=a,this.he=null}}function tB(e,t=null,n=[],r=[],i=null,s=null,a=null){return new tU(e,t,n,r,i,s,a)}function tK(e){if(null===e.he){let t=e.path.canonicalString();null!==e.collectionGroup&&(t+="|cg:"+e.collectionGroup),t+="|f:"+e.filters.map(e=>(function e(t){if(t instanceof tS)return t.field.canonicalString()+t.op.toString()+to(t.value);if(tN(t))return t.filters.map(t=>e(t)).join(",");{let n=t.filters.map(t=>e(t)).join(",");return`${t.op}(${n})`}})(e)).join(",")+"|ob:"+e.orderBy.map(e=>e.field.canonicalString()+e.dir).join(","),eg(e.limit)||(t+="|l:"+e.limit),e.startAt&&(t+="|lb:"+(e.startAt.inclusive?"b:":"a:")+e.startAt.position.map(e=>to(e)).join(",")),e.endAt&&(t+="|ub:"+(e.endAt.inclusive?"a:":"b:")+e.endAt.position.map(e=>to(e)).join(",")),e.he=t}return e.he}function tz(e,t){if(e.limit!==t.limit||e.orderBy.length!==t.orderBy.length)return!1;for(let i=0;i<e.orderBy.length;i++){var n,r;if(n=e.orderBy[i],r=t.orderBy[i],!(n.dir===r.dir&&n.field.isEqual(r.field)))return!1}if(e.filters.length!==t.filters.length)return!1;for(let n=0;n<e.filters.length;n++)if(!function e(t,n){return t instanceof tS?n instanceof tS&&t.op===n.op&&t.field.isEqual(n.field)&&tr(t.value,n.value):t instanceof tx?n instanceof tx&&t.op===n.op&&t.filters.length===n.filters.length&&t.filters.reduce((t,r,i)=>t&&e(r,n.filters[i]),!0):void _()}(e.filters[n],t.filters[n]))return!1;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!tb(e.startAt,t.startAt)&&tb(e.endAt,t.endAt)}function tG(e){return z.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}function t$(e,t){return e.filters.filter(e=>e instanceof tS&&e.field.isEqual(t))}function tj(e,t,n){let r=tt,i=!0;for(let n of t$(e,t)){let e=tt,t=!0;switch(n.op){case"<":case"<=":var s;e="nullValue"in(s=n.value)?tt:"booleanValue"in s?{booleanValue:!1}:"integerValue"in s||"doubleValue"in s?{doubleValue:NaN}:"timestampValue"in s?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in s?{stringValue:""}:"bytesValue"in s?{bytesValue:""}:"referenceValue"in s?tl(e7.empty(),z.empty()):"geoPointValue"in s?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in s?{arrayValue:{}}:"mapValue"in s?{mapValue:{}}:_();break;case"==":case"in":case">=":e=n.value;break;case">":e=n.value,t=!1;break;case"!=":case"not-in":e=tt}0>tp({value:r,inclusive:i},{value:e,inclusive:t})&&(r=e,i=t)}if(null!==n){for(let s=0;s<e.orderBy.length;++s)if(e.orderBy[s].field.isEqual(t)){let e=n.position[s];0>tp({value:r,inclusive:i},{value:e,inclusive:n.inclusive})&&(r=e,i=n.inclusive);break}}return{value:r,inclusive:i}}function tQ(e,t,n){let r=te,i=!0;for(let n of t$(e,t)){let e=te,t=!0;switch(n.op){case">=":case">":var s;e="nullValue"in(s=n.value)?{booleanValue:!1}:"booleanValue"in s?{doubleValue:NaN}:"integerValue"in s||"doubleValue"in s?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in s?{stringValue:""}:"stringValue"in s?{bytesValue:""}:"bytesValue"in s?tl(e7.empty(),z.empty()):"referenceValue"in s?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in s?{arrayValue:{}}:"arrayValue"in s?{mapValue:{}}:"mapValue"in s?te:_(),t=!1;break;case"==":case"in":case"<=":e=n.value;break;case"<":e=n.value,t=!1;break;case"!=":case"not-in":e=te}ty({value:r,inclusive:i},{value:e,inclusive:t})>0&&(r=e,i=t)}if(null!==n){for(let s=0;s<e.orderBy.length;++s)if(e.orderBy[s].field.isEqual(t)){let e=n.position[s];ty({value:r,inclusive:i},{value:e,inclusive:n.inclusive})>0&&(r=e,i=n.inclusive);break}}return{value:r,inclusive:i}}/**
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
 */class tW{constructor(e,t=null,n=[],r=[],i=null,s="F",a=null,o=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=n,this.filters=r,this.limit=i,this.limitType=s,this.startAt=a,this.endAt=o,this.Pe=null,this.Ie=null,this.de=null,this.startAt,this.endAt}}function tH(e){return new tW(e)}function tY(e){return 0===e.filters.length&&null===e.limit&&null==e.startAt&&null==e.endAt&&(0===e.explicitOrderBy.length||1===e.explicitOrderBy.length&&e.explicitOrderBy[0].field.isKeyField())}function tX(e){return e.explicitOrderBy.length>0?e.explicitOrderBy[0].field:null}function tJ(e){for(let t of e.filters){let e=t.getFirstInequalityField();if(null!==e)return e}return null}function tZ(e){return null!==e.collectionGroup}function t0(e){if(null===e.Pe){e.Pe=[];let t=tJ(e),n=tX(e);if(null!==t&&null===n)t.isKeyField()||e.Pe.push(new tE(t)),e.Pe.push(new tE(K.keyField(),"asc"));else{let t=!1;for(let n of e.explicitOrderBy)e.Pe.push(n),n.field.isKeyField()&&(t=!0);if(!t){let t=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.Pe.push(new tE(K.keyField(),t))}}}return e.Pe}function t1(e){return e.Ie||(e.Ie=function(e,t){if("F"===e.limitType)return tB(e.path,e.collectionGroup,t,e.filters,e.limit,e.startAt,e.endAt);{t=t.map(e=>{let t="desc"===e.dir?"asc":"desc";return new tE(e.field,t)});let n=e.endAt?new tI(e.endAt.position,e.endAt.inclusive):null,r=e.startAt?new tI(e.startAt.position,e.startAt.inclusive):null;return tB(e.path,e.collectionGroup,t,e.filters,e.limit,n,r)}}(e,t0(e))),e.Ie}function t2(e,t){t.getFirstInequalityField(),tJ(e);let n=e.filters.concat([t]);return new tW(e.path,e.collectionGroup,e.explicitOrderBy.slice(),n,e.limit,e.limitType,e.startAt,e.endAt)}function t5(e,t,n){return new tW(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function t4(e,t){return tz(t1(e),t1(t))&&e.limitType===t.limitType}function t8(e){return`${tK(t1(e))}|lt:${e.limitType}`}function t3(e){var t;let n;return`Query(target=${n=(t=t1(e)).path.canonicalString(),null!==t.collectionGroup&&(n+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(n+=`, filters: [${t.filters.map(e=>(function e(t){return t instanceof tS?`${t.field.canonicalString()} ${t.op} ${to(t.value)}`:t instanceof tx?t.op.toString()+" {"+t.getFilters().map(e).join(" ,")+"}":"Filter"})(e)).join(", ")}]`),eg(t.limit)||(n+=", limit: "+t.limit),t.orderBy.length>0&&(n+=`, orderBy: [${t.orderBy.map(e=>`${e.field.canonicalString()} (${e.dir})`).join(", ")}]`),t.startAt&&(n+=", startAt: "+(t.startAt.inclusive?"b:":"a:")+t.startAt.position.map(e=>to(e)).join(",")),t.endAt&&(n+=", endAt: "+(t.endAt.inclusive?"a:":"b:")+t.endAt.position.map(e=>to(e)).join(",")),`Target(${n})`}; limitType=${e.limitType})`}function t9(e,t){return t.isFoundDocument()&&function(e,t){let n=t.key.path;return null!==e.collectionGroup?t.key.hasCollectionId(e.collectionGroup)&&e.path.isPrefixOf(n):z.isDocumentKey(e.path)?e.path.isEqual(n):e.path.isImmediateParentOf(n)}(e,t)&&function(e,t){for(let n of t0(e))if(!n.field.isKeyField()&&null===t.data.field(n.field))return!1;return!0}(e,t)&&function(e,t){for(let n of e.filters)if(!n.matches(t))return!1;return!0}(e,t)&&(!e.startAt||!!function(e,t,n){let r=t_(e,t,n);return e.inclusive?r<=0:r<0}(e.startAt,t0(e),t))&&(!e.endAt||!!function(e,t,n){let r=t_(e,t,n);return e.inclusive?r>=0:r>0}(e.endAt,t0(e),t))}function t6(e){return e.collectionGroup||(e.path.length%2==1?e.path.lastSegment():e.path.get(e.path.length-2))}function t7(e){return(t,n)=>{let r=!1;for(let i of t0(e)){let e=function(e,t,n){let r=e.field.isKeyField()?z.comparator(t.key,n.key):function(e,t,n){let r=t.data.field(e),i=n.data.field(e);return null!==r&&null!==i?ts(r,i):_()}(e.field,t,n);switch(e.dir){case"asc":return r;case"desc":return -1*r;default:return _()}}(i,t,n);if(0!==e)return e;r=r||i.field.isKeyField()}return 0}}/**
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
 */class ne{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){let t=this.mapKeyFn(e),n=this.inner[t];if(void 0!==n){for(let[t,r]of n)if(this.equalsFn(t,e))return r}}has(e){return void 0!==this.get(e)}set(e,t){let n=this.mapKeyFn(e),r=this.inner[n];if(void 0===r)return this.inner[n]=[[e,t]],void this.innerSize++;for(let n=0;n<r.length;n++)if(this.equalsFn(r[n][0],e))return void(r[n]=[e,t]);r.push([e,t]),this.innerSize++}delete(e){let t=this.mapKeyFn(e),n=this.inner[t];if(void 0===n)return!1;for(let r=0;r<n.length;r++)if(this.equalsFn(n[r][0],e))return 1===n.length?delete this.inner[t]:n.splice(r,1),this.innerSize--,!0;return!1}forEach(e){ez(this.inner,(t,n)=>{for(let[t,r]of n)e(t,r)})}isEmpty(){return eG(this.inner)}size(){return this.innerSize}}/**
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
 */let nt=new e$(z.comparator),nn=new e$(z.comparator);function nr(...e){let t=nn;for(let n of e)t=t.insert(n.key,n);return t}function ni(e){let t=nn;return e.forEach((e,n)=>t=t.insert(e,n.overlayedDocument)),t}function ns(){return new ne(e=>e.toString(),(e,t)=>e.isEqual(t))}let na=new e$(z.comparator),no=new eW(z.comparator);function nl(...e){let t=no;for(let n of e)t=t.add(n);return t}let nu=new eW(V);/**
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
 */class nf{constructor(){this._=void 0}}function nm(e,t){return e instanceof nI?tu(t)||t&&"doubleValue"in t?t:{integerValue:0}:null}class ng extends nf{}class np extends nf{constructor(e){super(),this.elements=e}}function ny(e,t){let n=nb(t);for(let t of e.elements)n.some(e=>tr(e,t))||n.push(t);return{arrayValue:{values:n}}}class nw extends nf{constructor(e){super(),this.elements=e}}function nv(e,t){let n=nb(t);for(let t of e.elements)n=n.filter(e=>!tr(e,t));return{arrayValue:{values:n}}}class nI extends nf{constructor(e,t){super(),this.serializer=e,this.Te=t}}function n_(e){return e5(e.integerValue||e.doubleValue)}function nb(e){return tc(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}/**
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
 */class nE{constructor(e,t){this.field=e,this.transform=t}}class nT{constructor(e,t){this.version=e,this.transformResults=t}}class nS{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new nS}static exists(e){return new nS(void 0,e)}static updateTime(e){return new nS(e)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function nx(e,t){return void 0!==e.updateTime?t.isFoundDocument()&&t.version.isEqual(e.updateTime):void 0===e.exists||e.exists===t.isFoundDocument()}class nD{}function nC(e,t){if(!e.hasLocalMutations||t&&0===t.fields.length)return null;if(null===t)return e.isNoDocument()?new nL(e.key,nS.none()):new nk(e.key,e.data,nS.none());{let n=e.data,r=tw.empty(),i=new eW(K.comparator);for(let e of t.fields)if(!i.has(e)){let t=n.field(e);null===t&&e.length>1&&(e=e.popLast(),t=n.field(e)),null===t?r.delete(e):r.set(e,t),i=i.add(e)}return new nR(e.key,r,new eX(i.toArray()),nS.none())}}function nN(e,t,n,r){return e instanceof nk?function(e,t,n,r){if(!nx(e.precondition,t))return n;let i=e.value.clone(),s=nV(e.fieldTransforms,r,t);return i.setAll(s),t.convertToFoundDocument(t.version,i).setHasLocalMutations(),null}(e,t,n,r):e instanceof nR?function(e,t,n,r){if(!nx(e.precondition,t))return n;let i=nV(e.fieldTransforms,r,t),s=t.data;return(s.setAll(nF(e)),s.setAll(i),t.convertToFoundDocument(t.version,s).setHasLocalMutations(),null===n)?null:n.unionWith(e.fieldMask.fields).unionWith(e.fieldTransforms.map(e=>e.field))}(e,t,n,r):nx(e.precondition,t)?(t.convertToNoDocument(t.version).setHasLocalMutations(),null):n}function nA(e,t){var n,r;return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&(n=e.fieldTransforms,r=t.fieldTransforms,!!(void 0===n&&void 0===r||!(!n||!r)&&L(n,r,(e,t)=>{var n,r;return e.field.isEqual(t.field)&&(n=e.transform,r=t.transform,n instanceof np&&r instanceof np||n instanceof nw&&r instanceof nw?L(n.elements,r.elements,tr):n instanceof nI&&r instanceof nI?tr(n.Te,r.Te):n instanceof ng&&r instanceof ng)})))&&(0===e.type?e.value.isEqual(t.value):1!==e.type||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}class nk extends nD{constructor(e,t,n,r=[]){super(),this.key=e,this.value=t,this.precondition=n,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class nR extends nD{constructor(e,t,n,r,i=[]){super(),this.key=e,this.data=t,this.fieldMask=n,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function nF(e){let t=new Map;return e.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){let r=e.data.field(n);t.set(n,r)}}),t}function nM(e,t,n){var r;let i=new Map;e.length===n.length||_();for(let s=0;s<n.length;s++){let a=e[s],o=a.transform,l=t.data.field(a.field);i.set(a.field,(r=n[s],o instanceof np?ny(o,l):o instanceof nw?nv(o,l):r))}return i}function nV(e,t,n){let r=new Map;for(let i of e){let e=i.transform,s=n.data.field(i.field);r.set(i.field,e instanceof ng?function(e,t){let n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:e.seconds,nanos:e.nanoseconds}}}};return t&&e8(t)&&(t=e3(t)),t&&(n.fields.__previous_value__=t),{mapValue:n}}(t,s):e instanceof np?ny(e,s):e instanceof nw?nv(e,s):function(e,t){let n=nm(e,t),r=n_(n)+n_(e.Te);return tu(n)&&tu(e.Te)?nh(r):nc(e.serializer,r)}(e,s))}return r}class nL extends nD{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class nO extends nD{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class nP{constructor(e,t,n,r){this.batchId=e,this.localWriteTime=t,this.baseMutations=n,this.mutations=r}applyToRemoteDocument(e,t){let n=t.mutationResults;for(let t=0;t<this.mutations.length;t++){let i=this.mutations[t];if(i.key.isEqual(e.key)){var r;r=n[t],i instanceof nk?function(e,t,n){let r=e.value.clone(),i=nM(e.fieldTransforms,t,n.transformResults);r.setAll(i),t.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(i,e,r):i instanceof nR?function(e,t,n){if(!nx(e.precondition,t))return void t.convertToUnknownDocument(n.version);let r=nM(e.fieldTransforms,t,n.transformResults),i=t.data;i.setAll(nF(e)),i.setAll(r),t.convertToFoundDocument(n.version,i).setHasCommittedMutations()}(i,e,r):function(e,t,n){t.convertToNoDocument(n.version).setHasCommittedMutations()}(0,e,r)}}}applyToLocalView(e,t){for(let n of this.baseMutations)n.key.isEqual(e.key)&&(t=nN(n,e,t,this.localWriteTime));for(let n of this.mutations)n.key.isEqual(e.key)&&(t=nN(n,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){let n=ns();return this.mutations.forEach(r=>{let i=e.get(r.key),s=i.overlayedDocument,a=this.applyToLocalView(s,i.mutatedFields);a=t.has(r.key)?null:a;let o=nC(s,a);null!==o&&n.set(r.key,o),s.isValidDocument()||s.convertToNoDocument(P.min())}),n}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),nl())}isEqual(e){return this.batchId===e.batchId&&L(this.mutations,e.mutations,(e,t)=>nA(e,t))&&L(this.baseMutations,e.baseMutations,(e,t)=>nA(e,t))}}class nq{constructor(e,t,n,r){this.batch=e,this.commitVersion=t,this.mutationResults=n,this.docVersions=r}static from(e,t,n){e.mutations.length===n.length||_();let r=na,i=e.mutations;for(let e=0;e<i.length;e++)r=r.insert(i[e].key,n[e].version);return new nq(e,t,n,r)}}/**
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
 */class nB{constructor(e,t){this.count=e,this.unchangedNames=t}}function nK(e){switch(e){default:return _();case E.CANCELLED:case E.UNKNOWN:case E.DEADLINE_EXCEEDED:case E.RESOURCE_EXHAUSTED:case E.INTERNAL:case E.UNAVAILABLE:case E.UNAUTHENTICATED:return!1;case E.INVALID_ARGUMENT:case E.NOT_FOUND:case E.ALREADY_EXISTS:case E.PERMISSION_DENIED:case E.FAILED_PRECONDITION:case E.ABORTED:case E.OUT_OF_RANGE:case E.UNIMPLEMENTED:case E.DATA_LOSS:return!0}}function nz(e){if(void 0===e)return w("GRPC error has no .code"),E.UNKNOWN;switch(e){case r.OK:return E.OK;case r.CANCELLED:return E.CANCELLED;case r.UNKNOWN:return E.UNKNOWN;case r.DEADLINE_EXCEEDED:return E.DEADLINE_EXCEEDED;case r.RESOURCE_EXHAUSTED:return E.RESOURCE_EXHAUSTED;case r.INTERNAL:return E.INTERNAL;case r.UNAVAILABLE:return E.UNAVAILABLE;case r.UNAUTHENTICATED:return E.UNAUTHENTICATED;case r.INVALID_ARGUMENT:return E.INVALID_ARGUMENT;case r.NOT_FOUND:return E.NOT_FOUND;case r.ALREADY_EXISTS:return E.ALREADY_EXISTS;case r.PERMISSION_DENIED:return E.PERMISSION_DENIED;case r.FAILED_PRECONDITION:return E.FAILED_PRECONDITION;case r.ABORTED:return E.ABORTED;case r.OUT_OF_RANGE:return E.OUT_OF_RANGE;case r.UNIMPLEMENTED:return E.UNIMPLEMENTED;case r.DATA_LOSS:return E.DATA_LOSS;default:return _()}}/**
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
 */function nG(){return new TextEncoder}(i=r||(r={}))[i.OK=0]="OK",i[i.CANCELLED=1]="CANCELLED",i[i.UNKNOWN=2]="UNKNOWN",i[i.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",i[i.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",i[i.NOT_FOUND=5]="NOT_FOUND",i[i.ALREADY_EXISTS=6]="ALREADY_EXISTS",i[i.PERMISSION_DENIED=7]="PERMISSION_DENIED",i[i.UNAUTHENTICATED=16]="UNAUTHENTICATED",i[i.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",i[i.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",i[i.ABORTED=10]="ABORTED",i[i.OUT_OF_RANGE=11]="OUT_OF_RANGE",i[i.UNIMPLEMENTED=12]="UNIMPLEMENTED",i[i.INTERNAL=13]="INTERNAL",i[i.UNAVAILABLE=14]="UNAVAILABLE",i[i.DATA_LOSS=15]="DATA_LOSS";/**
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
 */let n$=new u.z8([4294967295,4294967295],0);function nj(e){let t=nG().encode(e),n=new u.V8;return n.update(t),new Uint8Array(n.digest())}function nQ(e){let t=new DataView(e.buffer),n=t.getUint32(0,!0),r=t.getUint32(4,!0),i=t.getUint32(8,!0),s=t.getUint32(12,!0);return[new u.z8([n,r],0),new u.z8([i,s],0)]}class nW{constructor(e,t,n){if(this.bitmap=e,this.padding=t,this.hashCount=n,t<0||t>=8)throw new nH(`Invalid padding: ${t}`);if(n<0||e.length>0&&0===this.hashCount)throw new nH(`Invalid hash count: ${n}`);if(0===e.length&&0!==t)throw new nH(`Invalid padding when bitmap length is 0: ${t}`);this.Ae=8*e.length-t,this.Re=u.z8.fromNumber(this.Ae)}Ve(e,t,n){let r=e.add(t.multiply(u.z8.fromNumber(n)));return 1===r.compare(n$)&&(r=new u.z8([r.getBits(0),r.getBits(1)],0)),r.modulo(this.Re).toNumber()}me(e){return 0!=(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(0===this.Ae)return!1;let t=nj(e),[n,r]=nQ(t);for(let e=0;e<this.hashCount;e++){let t=this.Ve(n,r,e);if(!this.me(t))return!1}return!0}static create(e,t,n){let r=new Uint8Array(Math.ceil(e/8)),i=new nW(r,e%8==0?0:8-e%8,t);return n.forEach(e=>i.insert(e)),i}insert(e){if(0===this.Ae)return;let t=nj(e),[n,r]=nQ(t);for(let e=0;e<this.hashCount;e++){let t=this.Ve(n,r,e);this.fe(t)}}fe(e){this.bitmap[Math.floor(e/8)]|=1<<e%8}}class nH extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class nY{constructor(e,t,n,r,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=n,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t,n){let r=new Map;return r.set(e,nX.createSynthesizedTargetChangeForCurrentChange(e,t,n)),new nY(P.min(),r,new e$(V),nt,nl())}}class nX{constructor(e,t,n,r,i){this.resumeToken=e,this.current=t,this.addedDocuments=n,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,n){return new nX(n,t,nl(),nl(),nl())}}/**
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
 */class nJ{constructor(e,t,n,r){this.ge=e,this.removedTargetIds=t,this.key=n,this.pe=r}}class nZ{constructor(e,t){this.targetId=e,this.ye=t}}class n0{constructor(e,t,n=e0.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=t,this.resumeToken=n,this.cause=r}}class n1{constructor(){this.we=0,this.Se=n4(),this.be=e0.EMPTY_BYTE_STRING,this.De=!1,this.Ce=!0}get current(){return this.De}get resumeToken(){return this.be}get ve(){return 0!==this.we}get Fe(){return this.Ce}Me(e){e.approximateByteSize()>0&&(this.Ce=!0,this.be=e)}xe(){let e=nl(),t=nl(),n=nl();return this.Se.forEach((r,i)=>{switch(i){case 0:e=e.add(r);break;case 2:t=t.add(r);break;case 1:n=n.add(r);break;default:_()}}),new nX(this.be,this.De,e,t,n)}Oe(){this.Ce=!1,this.Se=n4()}Ne(e,t){this.Ce=!0,this.Se=this.Se.insert(e,t)}Be(e){this.Ce=!0,this.Se=this.Se.remove(e)}Le(){this.we+=1}ke(){this.we-=1}qe(){this.Ce=!0,this.De=!0}}class n2{constructor(e){this.Qe=e,this.Ke=new Map,this.$e=nt,this.Ue=n5(),this.We=new e$(V)}Ge(e){for(let t of e.ge)e.pe&&e.pe.isFoundDocument()?this.ze(t,e.pe):this.je(t,e.key,e.pe);for(let t of e.removedTargetIds)this.je(t,e.key,e.pe)}He(e){this.forEachTarget(e,t=>{let n=this.Je(t);switch(e.state){case 0:this.Ye(t)&&n.Me(e.resumeToken);break;case 1:n.ke(),n.ve||n.Oe(),n.Me(e.resumeToken);break;case 2:n.ke(),n.ve||this.removeTarget(t);break;case 3:this.Ye(t)&&(n.qe(),n.Me(e.resumeToken));break;case 4:this.Ye(t)&&(this.Ze(t),n.Me(e.resumeToken));break;default:_()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Ke.forEach((e,n)=>{this.Ye(n)&&t(n)})}Xe(e){let t=e.targetId,n=e.ye.count,r=this.et(t);if(r){let i=r.target;if(tG(i)){if(0===n){let e=new z(i.path);this.je(t,e,tv.newNoDocument(e,P.min()))}else 1===n||_()}else{let r=this.tt(t);if(r!==n){let n=this.nt(e),i=n?this.rt(n,e,r):1;0!==i&&(this.Ze(t),this.We=this.We.insert(t,2===i?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch"))}}}}nt(e){let t,n;let r=e.ye.unchangedNames;if(!r||!r.bits)return null;let{bits:{bitmap:i="",padding:s=0},hashCount:a=0}=r;try{t=e4(i).toUint8Array()}catch(e){if(e instanceof eJ)return v("Decoding the base64 bloom filter in existence filter failed ("+e.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw e}try{n=new nW(t,s,a)}catch(e){return v(e instanceof nH?"BloomFilter error: ":"Applying bloom filter failed: ",e),null}return 0===n.Ae?null:n}rt(e,t,n){return t.ye.count===n-this.ot(e,t.targetId)?0:2}ot(e,t){let n=this.Qe.getRemoteKeysForTarget(t),r=0;return n.forEach(n=>{let i=this.Qe.st(),s=`projects/${i.projectId}/databases/${i.database}/documents/${n.path.canonicalString()}`;e.mightContain(s)||(this.je(t,n,null),r++)}),r}_t(e){let t=new Map;this.Ke.forEach((n,r)=>{let i=this.et(r);if(i){if(n.current&&tG(i.target)){let t=new z(i.target.path);null!==this.$e.get(t)||this.ut(r,t)||this.je(r,t,tv.newNoDocument(t,e))}n.Fe&&(t.set(r,n.xe()),n.Oe())}});let n=nl();this.Ue.forEach((e,t)=>{let r=!0;t.forEachWhile(e=>{let t=this.et(e);return!t||"TargetPurposeLimboResolution"===t.purpose||(r=!1,!1)}),r&&(n=n.add(e))}),this.$e.forEach((t,n)=>n.setReadTime(e));let r=new nY(e,t,this.We,this.$e,n);return this.$e=nt,this.Ue=n5(),this.We=new e$(V),r}ze(e,t){if(!this.Ye(e))return;let n=this.ut(e,t.key)?2:0;this.Je(e).Ne(t.key,n),this.$e=this.$e.insert(t.key,t),this.Ue=this.Ue.insert(t.key,this.ct(t.key).add(e))}je(e,t,n){if(!this.Ye(e))return;let r=this.Je(e);this.ut(e,t)?r.Ne(t,1):r.Be(t),this.Ue=this.Ue.insert(t,this.ct(t).delete(e)),n&&(this.$e=this.$e.insert(t,n))}removeTarget(e){this.Ke.delete(e)}tt(e){let t=this.Je(e).xe();return this.Qe.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Le(e){this.Je(e).Le()}Je(e){let t=this.Ke.get(e);return t||(t=new n1,this.Ke.set(e,t)),t}ct(e){let t=this.Ue.get(e);return t||(t=new eW(V),this.Ue=this.Ue.insert(e,t)),t}Ye(e){let t=null!==this.et(e);return t||y("WatchChangeAggregator","Detected inactive target",e),t}et(e){let t=this.Ke.get(e);return t&&t.ve?null:this.Qe.lt(e)}Ze(e){this.Ke.set(e,new n1),this.Qe.getRemoteKeysForTarget(e).forEach(t=>{this.je(e,t,null)})}ut(e,t){return this.Qe.getRemoteKeysForTarget(e).has(t)}}function n5(){return new e$(z.comparator)}function n4(){return new e$(z.comparator)}let n8={asc:"ASCENDING",desc:"DESCENDING"},n3={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},n9={and:"AND",or:"OR"};class n6{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function n7(e,t){return e.useProto3Json||eg(t)?t:{value:t}}function re(e,t){return e.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function rt(e,t){return e.useProto3Json?t.toBase64():t.toUint8Array()}function rn(e){return e||_(),P.fromTimestamp(function(e){let t=e2(e);return new O(t.seconds,t.nanos)}(e))}function rr(e,t){return new U(["projects",e.projectId,"databases",e.database]).child("documents").child(t).canonicalString()}function ri(e){let t=U.fromString(e);return rI(t)||_(),t}function rs(e,t){return rr(e.databaseId,t.path)}function ra(e,t){let n=ri(t);if(n.get(1)!==e.databaseId.projectId)throw new T(E.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new T(E.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new z(rc(n))}function ro(e,t){return rr(e.databaseId,t)}function rl(e){let t=ri(e);return 4===t.length?U.emptyPath():rc(t)}function ru(e){return new U(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function rc(e){return e.length>4&&"documents"===e.get(4)||_(),e.popFirst(5)}function rh(e,t,n){return{name:rs(e,t),fields:n.value.mapValue.fields}}function rd(e,t,n){let r=ra(e,t.name),i=rn(t.updateTime),s=t.createTime?rn(t.createTime):P.min(),a=new tw({mapValue:{fields:t.fields}}),o=tv.newFoundDocument(r,i,s,a);return n&&o.setHasCommittedMutations(),n?o.setHasCommittedMutations():o}function rf(e,t){var n;let r;if(t instanceof nk)r={update:rh(e,t.key,t.value)};else if(t instanceof nL)r={delete:rs(e,t.key)};else if(t instanceof nR)r={update:rh(e,t.key,t.data),updateMask:function(e){let t=[];return e.fields.forEach(e=>t.push(e.canonicalString())),{fieldPaths:t}}(t.fieldMask)};else{if(!(t instanceof nO))return _();r={verify:rs(e,t.key)}}return t.fieldTransforms.length>0&&(r.updateTransforms=t.fieldTransforms.map(e=>(function(e,t){let n=t.transform;if(n instanceof ng)return{fieldPath:t.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof np)return{fieldPath:t.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof nw)return{fieldPath:t.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof nI)return{fieldPath:t.field.canonicalString(),increment:n.Te};throw _()})(0,e))),t.precondition.isNone||(r.currentDocument=void 0!==(n=t.precondition).updateTime?{updateTime:re(e,n.updateTime.toTimestamp())}:void 0!==n.exists?{exists:n.exists}:_()),r}function rm(e,t){var n;let r=t.currentDocument?void 0!==(n=t.currentDocument).updateTime?nS.updateTime(rn(n.updateTime)):void 0!==n.exists?nS.exists(n.exists):nS.none():nS.none(),i=t.updateTransforms?t.updateTransforms.map(t=>(function(e,t){let n=null;if("setToServerValue"in t)"REQUEST_TIME"===t.setToServerValue||_(),n=new ng;else if("appendMissingElements"in t){let e=t.appendMissingElements.values||[];n=new np(e)}else if("removeAllFromArray"in t){let e=t.removeAllFromArray.values||[];n=new nw(e)}else"increment"in t?n=new nI(e,t.increment):_();let r=K.fromServerFormat(t.fieldPath);return new nE(r,n)})(e,t)):[];if(t.update){t.update.name;let n=ra(e,t.update.name),s=new tw({mapValue:{fields:t.update.fields}});if(t.updateMask){let e=function(e){let t=e.fieldPaths||[];return new eX(t.map(e=>K.fromServerFormat(e)))}(t.updateMask);return new nR(n,s,e,r,i)}return new nk(n,s,r,i)}if(t.delete){let n=ra(e,t.delete);return new nL(n,r)}if(t.verify){let n=ra(e,t.verify);return new nO(n,r)}return _()}function rg(e,t){return{documents:[ro(e,t.path)]}}function rp(e,t){var n,r;let i={structuredQuery:{}},s=t.path;null!==t.collectionGroup?(i.parent=ro(e,s),i.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(i.parent=ro(e,s.popLast()),i.structuredQuery.from=[{collectionId:s.lastSegment()}]);let a=function(e){if(0!==e.length)return function e(t){return t instanceof tS?function(e){if("=="===e.op){if(td(e.value))return{unaryFilter:{field:rw(e.field),op:"IS_NAN"}};if(th(e.value))return{unaryFilter:{field:rw(e.field),op:"IS_NULL"}}}else if("!="===e.op){if(td(e.value))return{unaryFilter:{field:rw(e.field),op:"IS_NOT_NAN"}};if(th(e.value))return{unaryFilter:{field:rw(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:rw(e.field),op:n3[e.op],value:e.value}}}(t):t instanceof tx?function(t){let n=t.getFilters().map(t=>e(t));return 1===n.length?n[0]:{compositeFilter:{op:n9[t.op],filters:n}}}(t):_()}(tx.create(e,"and"))}(t.filters);a&&(i.structuredQuery.where=a);let o=function(e){if(0!==e.length)return e.map(e=>({field:rw(e.field),direction:n8[e.dir]}))}(t.orderBy);o&&(i.structuredQuery.orderBy=o);let l=n7(e,t.limit);return null!==l&&(i.structuredQuery.limit=l),t.startAt&&(i.structuredQuery.startAt={before:(n=t.startAt).inclusive,values:n.position}),t.endAt&&(i.structuredQuery.endAt={before:!(r=t.endAt).inclusive,values:r.position}),i}function ry(e){var t,n,r,i,s,a,o,l;let u,c=rl(e.parent),h=e.structuredQuery,d=h.from?h.from.length:0,f=null;if(d>0){1===d||_();let e=h.from[0];e.allDescendants?f=e.collectionId:c=c.child(e.collectionId)}let m=[];h.where&&(m=function(e){let t=function e(t){return void 0!==t.unaryFilter?function(e){switch(e.unaryFilter.op){case"IS_NAN":let t=rv(e.unaryFilter.field);return tS.create(t,"==",{doubleValue:NaN});case"IS_NULL":let n=rv(e.unaryFilter.field);return tS.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":let r=rv(e.unaryFilter.field);return tS.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":let i=rv(e.unaryFilter.field);return tS.create(i,"!=",{nullValue:"NULL_VALUE"});default:return _()}}(t):void 0!==t.fieldFilter?tS.create(rv(t.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return _()}}(t.fieldFilter.op),t.fieldFilter.value):void 0!==t.compositeFilter?tx.create(t.compositeFilter.filters.map(t=>e(t)),function(e){switch(e){case"AND":return"and";case"OR":return"or";default:return _()}}(t.compositeFilter.op)):_()}(e);return t instanceof tx&&tN(t)?t.getFilters():[t]}(h.where));let g=[];h.orderBy&&(g=h.orderBy.map(e=>new tE(rv(e.field),function(e){switch(e){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(e.direction))));let p=null;h.limit&&(p=eg(u="object"==typeof(t=h.limit)?t.value:t)?null:u);let y=null;h.startAt&&(y=function(e){let t=!!e.before,n=e.values||[];return new tI(n,t)}(h.startAt));let w=null;return h.endAt&&(w=function(e){let t=!e.before,n=e.values||[];return new tI(n,t)}(h.endAt)),n=c,r=f,i=g,s=m,a=p,o=y,l=w,new tW(n,r,i,s,a,"F",o,l)}function rw(e){return{fieldPath:e.canonicalString()}}function rv(e){return K.fromServerFormat(e.fieldPath)}function rI(e){return e.length>=4&&"projects"===e.get(0)&&"databases"===e.get(2)}/**
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
 */class rb{constructor(e){this.ht=e}}function rE(e,t){let n=t.key,r={prefixPath:n.getCollectionPath().popLast().toArray(),collectionGroup:n.collectionGroup,documentId:n.path.lastSegment(),readTime:rT(t.readTime),hasCommittedMutations:t.hasCommittedMutations};if(t.isFoundDocument()){var i;r.document={name:rs(i=e.ht,t.key),fields:t.data.value.mapValue.fields,updateTime:re(i,t.version.toTimestamp()),createTime:re(i,t.createTime.toTimestamp())}}else if(t.isNoDocument())r.noDocument={path:n.path.toArray(),readTime:rS(t.version)};else{if(!t.isUnknownDocument())return _();r.unknownDocument={path:n.path.toArray(),version:rS(t.version)}}return r}function rT(e){let t=e.toTimestamp();return[t.seconds,t.nanoseconds]}function rS(e){let t=e.toTimestamp();return{seconds:t.seconds,nanoseconds:t.nanoseconds}}function rx(e){let t=new O(e.seconds,e.nanoseconds);return P.fromTimestamp(t)}function rD(e,t){let n=(t.baseMutations||[]).map(t=>rm(e.ht,t));for(let e=0;e<t.mutations.length-1;++e){let n=t.mutations[e];if(e+1<t.mutations.length&&void 0!==t.mutations[e+1].transform){let r=t.mutations[e+1];n.updateTransforms=r.transform.fieldTransforms,t.mutations.splice(e+1,1),++e}}let r=t.mutations.map(t=>rm(e.ht,t)),i=O.fromMillis(t.localWriteTimeMs);return new nP(t.batchId,i,n,r)}function rC(e){var t;let n;let r=rx(e.readTime),i=void 0!==e.lastLimboFreeSnapshotVersion?rx(e.lastLimboFreeSnapshotVersion):P.min();return n=void 0!==e.query.documents?(1===(t=e.query).documents.length||_(),t1(tH(rl(t.documents[0])))):t1(ry(e.query)),new r_(n,e.targetId,"TargetPurposeListen",e.lastListenSequenceNumber,r,i,e0.fromBase64String(e.resumeToken))}function rN(e,t){let n;let r=rS(t.snapshotVersion),i=rS(t.lastLimboFreeSnapshotVersion);n=tG(t.target)?rg(e.ht,t.target):rp(e.ht,t.target);let s=t.resumeToken.toBase64();return{targetId:t.targetId,canonicalId:tK(t.target),readTime:r,resumeToken:s,lastListenSequenceNumber:t.sequenceNumber,lastLimboFreeSnapshotVersion:i,query:n}}function rA(e){let t=ry({parent:e.parent,structuredQuery:e.structuredQuery});return"LAST"===e.limitType?t5(t,t.limit,"L"):t}function rk(e,t){return new nU(t.largestBatchId,rm(e.ht,t.overlayMutation))}function rR(e,t){let n=t.path.lastSegment();return[e,ew(t.path.popLast()),n]}function rF(e,t,n,r){return{indexId:e,uid:t.uid||"",sequenceNumber:n,readTime:rS(r.readTime),documentKey:ew(r.documentKey.path),largestBatchId:r.largestBatchId}}/**
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
 */class rM{getBundleMetadata(e,t){return rV(e).get(t).next(e=>{if(e)return{id:e.bundleId,createTime:rx(e.createTime),version:e.version}})}saveBundleMetadata(e,t){return rV(e).put({bundleId:t.id,createTime:rS(rn(t.createTime)),version:t.version})}getNamedQuery(e,t){return rL(e).get(t).next(e=>{if(e)return{name:e.name,query:rA(e.bundledQuery),readTime:rx(e.readTime)}})}saveNamedQuery(e,t){return rL(e).put({name:t.name,readTime:rS(rn(t.readTime)),bundledQuery:t.bundledQuery})}}function rV(e){return eB(e,"bundles")}function rL(e){return eB(e,"namedQueries")}/**
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
 */class rq{constructor(){}dt(e,t){this.Tt(e,t),t.Et()}Tt(e,t){if("nullValue"in e)this.At(t,5);else if("booleanValue"in e)this.At(t,10),t.Rt(e.booleanValue?1:0);else if("integerValue"in e)this.At(t,15),t.Rt(e5(e.integerValue));else if("doubleValue"in e){let n=e5(e.doubleValue);isNaN(n)?this.At(t,13):(this.At(t,15),ep(n)?t.Rt(0):t.Rt(n))}else if("timestampValue"in e){let n=e.timestampValue;this.At(t,20),"string"==typeof n?t.Vt(n):(t.Vt(`${n.seconds||""}`),t.Rt(n.nanos||0))}else if("stringValue"in e)this.ft(e.stringValue,t),this.gt(t);else if("bytesValue"in e)this.At(t,30),t.yt(e4(e.bytesValue)),this.gt(t);else if("referenceValue"in e)this.wt(e.referenceValue,t);else if("geoPointValue"in e){let n=e.geoPointValue;this.At(t,45),t.Rt(n.latitude||0),t.Rt(n.longitude||0)}else"mapValue"in e?tg(e)?this.At(t,Number.MAX_SAFE_INTEGER):(this.St(e.mapValue,t),this.gt(t)):"arrayValue"in e?(this.bt(e.arrayValue,t),this.gt(t)):_()}ft(e,t){this.At(t,25),this.Dt(e,t)}Dt(e,t){t.Vt(e)}St(e,t){let n=e.fields||{};for(let e of(this.At(t,55),Object.keys(n)))this.ft(e,t),this.Tt(n[e],t)}bt(e,t){let n=e.values||[];for(let e of(this.At(t,50),n))this.Tt(e,t)}wt(e,t){this.At(t,37),z.fromName(e).path.forEach(e=>{this.At(t,60),this.Dt(e,t)})}At(e,t){e.Rt(t)}gt(e){e.Rt(2)}}function rU(e){let t=64-function(e){let t=0;for(let n=0;n<8;++n){let r=function(e){if(0===e)return 8;let t=0;return e>>4==0&&(t+=4,e<<=4),e>>6==0&&(t+=2,e<<=2),e>>7==0&&(t+=1),t}(255&e[n]);if(t+=r,8!==r)break}return t}(e);return Math.ceil(t/8)}rq.Ct=new rq;class rB{constructor(){this.buffer=new Uint8Array(1024),this.position=0}vt(e){let t=e[Symbol.iterator](),n=t.next();for(;!n.done;)this.Ft(n.value),n=t.next();this.Mt()}xt(e){let t=e[Symbol.iterator](),n=t.next();for(;!n.done;)this.Ot(n.value),n=t.next();this.Nt()}Bt(e){for(let t of e){let e=t.charCodeAt(0);if(e<128)this.Ft(e);else if(e<2048)this.Ft(960|e>>>6),this.Ft(128|63&e);else if(t<"\ud800"||"\udbff"<t)this.Ft(480|e>>>12),this.Ft(128|63&e>>>6),this.Ft(128|63&e);else{let e=t.codePointAt(0);this.Ft(240|e>>>18),this.Ft(128|63&e>>>12),this.Ft(128|63&e>>>6),this.Ft(128|63&e)}}this.Mt()}Lt(e){for(let t of e){let e=t.charCodeAt(0);if(e<128)this.Ot(e);else if(e<2048)this.Ot(960|e>>>6),this.Ot(128|63&e);else if(t<"\ud800"||"\udbff"<t)this.Ot(480|e>>>12),this.Ot(128|63&e>>>6),this.Ot(128|63&e);else{let e=t.codePointAt(0);this.Ot(240|e>>>18),this.Ot(128|63&e>>>12),this.Ot(128|63&e>>>6),this.Ot(128|63&e)}}this.Nt()}kt(e){let t=this.qt(e),n=rU(t);this.Qt(1+n),this.buffer[this.position++]=255&n;for(let e=t.length-n;e<t.length;++e)this.buffer[this.position++]=255&t[e]}Kt(e){let t=this.qt(e),n=rU(t);this.Qt(1+n),this.buffer[this.position++]=~(255&n);for(let e=t.length-n;e<t.length;++e)this.buffer[this.position++]=~(255&t[e])}$t(){this.Ut(255),this.Ut(255)}Wt(){this.Gt(255),this.Gt(255)}reset(){this.position=0}seed(e){this.Qt(e.length),this.buffer.set(e,this.position),this.position+=e.length}zt(){return this.buffer.slice(0,this.position)}qt(e){let t=function(e){let t=new DataView(new ArrayBuffer(8));return t.setFloat64(0,e,!1),new Uint8Array(t.buffer)}(e),n=0!=(128&t[0]);t[0]^=n?255:128;for(let e=1;e<t.length;++e)t[e]^=n?255:0;return t}Ft(e){let t=255&e;0===t?(this.Ut(0),this.Ut(255)):255===t?(this.Ut(255),this.Ut(0)):this.Ut(t)}Ot(e){let t=255&e;0===t?(this.Gt(0),this.Gt(255)):255===t?(this.Gt(255),this.Gt(0)):this.Gt(e)}Mt(){this.Ut(0),this.Ut(1)}Nt(){this.Gt(0),this.Gt(1)}Ut(e){this.Qt(1),this.buffer[this.position++]=e}Gt(e){this.Qt(1),this.buffer[this.position++]=~e}Qt(e){let t=e+this.position;if(t<=this.buffer.length)return;let n=2*this.buffer.length;n<t&&(n=t);let r=new Uint8Array(n);r.set(this.buffer),this.buffer=r}}class rK{constructor(e){this.jt=e}yt(e){this.jt.vt(e)}Vt(e){this.jt.Bt(e)}Rt(e){this.jt.kt(e)}Et(){this.jt.$t()}}class rz{constructor(e){this.jt=e}yt(e){this.jt.xt(e)}Vt(e){this.jt.Lt(e)}Rt(e){this.jt.Kt(e)}Et(){this.jt.Wt()}}class rG{constructor(){this.jt=new rB,this.Ht=new rK(this.jt),this.Jt=new rz(this.jt)}seed(e){this.jt.seed(e)}Yt(e){return 0===e?this.Ht:this.Jt}zt(){return this.jt.zt()}reset(){this.jt.reset()}}/**
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
 */class r${constructor(e,t,n,r){this.indexId=e,this.documentKey=t,this.arrayValue=n,this.directionalValue=r}Zt(){let e=this.directionalValue.length,t=0===e||255===this.directionalValue[e-1]?e+1:e,n=new Uint8Array(t);return n.set(this.directionalValue,0),t!==e?n.set([0],this.directionalValue.length):++n[n.length-1],new r$(this.indexId,this.documentKey,this.arrayValue,n)}}function rj(e,t){let n=e.indexId-t.indexId;return 0!==n?n:0!==(n=rQ(e.arrayValue,t.arrayValue))?n:0!==(n=rQ(e.directionalValue,t.directionalValue))?n:z.comparator(e.documentKey,t.documentKey)}function rQ(e,t){for(let n=0;n<e.length&&n<t.length;++n){let r=e[n]-t[n];if(0!==r)return r}return e.length-t.length}/**
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
 */class rW{constructor(e){for(let t of(this.collectionId=null!=e.collectionGroup?e.collectionGroup:e.path.lastSegment(),this.Xt=e.orderBy,this.en=[],e.filters))t.isInequality()?this.tn=t:this.en.push(t)}nn(e){e.collectionGroup===this.collectionId||_();let t=$(e);if(void 0!==t&&!this.rn(t))return!1;let n=j(e),r=new Set,i=0,s=0;for(;i<n.length&&this.rn(n[i]);++i)r=r.add(n[i].fieldPath.canonicalString());if(i===n.length)return!0;if(void 0!==this.tn){if(!r.has(this.tn.field.canonicalString())){let e=n[i];if(!this.sn(this.tn,e)||!this.on(this.Xt[s++],e))return!1}++i}for(;i<n.length;++i){let e=n[i];if(s>=this.Xt.length||!this.on(this.Xt[s++],e))return!1}return!0}_n(){let e=new eW(K.comparator),t=[];for(let n of this.en)if(!n.field.isKeyField()){if("array-contains"===n.op||"array-contains-any"===n.op)t.push(new Q(n.field,2));else{if(e.has(n.field))continue;e=e.add(n.field),t.push(new Q(n.field,0))}}for(let n of this.Xt)n.field.isKeyField()||e.has(n.field)||(e=e.add(n.field),t.push(new Q(n.field,"asc"===n.dir?0:1)));return new G(G.UNKNOWN_ID,this.collectionId,t,W.empty())}rn(e){for(let t of this.en)if(this.sn(t,e))return!0;return!1}sn(e,t){if(void 0===e||!e.field.isEqual(t.fieldPath))return!1;let n="array-contains"===e.op||"array-contains-any"===e.op;return 2===t.kind===n}on(e,t){return!!e.field.isEqual(t.fieldPath)&&(0===t.kind&&"asc"===e.dir||1===t.kind&&"desc"===e.dir)}}function rH(e){return e instanceof tS}function rY(e){return e instanceof tx&&tN(e)}function rX(e){return rH(e)||rY(e)||function(e){if(e instanceof tx&&tC(e)){for(let t of e.getFilters())if(!rH(t)&&!rY(t))return!1;return!0}return!1}(e)}function rJ(e,t){return e instanceof tS||e instanceof tx||_(),t instanceof tS||t instanceof tx||_(),r0(e instanceof tS?t instanceof tS?tx.create([e,t],"and"):rZ(e,t):t instanceof tS?rZ(t,e):function(e,t){if(e.filters.length>0&&t.filters.length>0||_(),tD(e)&&tD(t))return tk(e,t.getFilters());let n=tC(e)?e:t,r=tC(e)?t:e,i=n.filters.map(e=>rJ(e,r));return tx.create(i,"or")}(e,t))}function rZ(e,t){if(tD(t))return tk(t,e.getFilters());{let n=t.filters.map(t=>rJ(e,t));return tx.create(n,"or")}}function r0(e){if(e instanceof tS||e instanceof tx||_(),e instanceof tS)return e;let t=e.getFilters();if(1===t.length)return r0(t[0]);if(tA(e))return e;let n=t.map(e=>r0(e)),r=[];return n.forEach(t=>{t instanceof tS?r.push(t):t instanceof tx&&(t.op===e.op?r.push(...t.filters):r.push(t))}),1===r.length?r[0]:tx.create(r,e.op)}/**
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
 */class r1{constructor(){this.an=new r2}addToCollectionParentIndex(e,t){return this.an.add(t),en.resolve()}getCollectionParents(e,t){return en.resolve(this.an.getEntries(t))}addFieldIndex(e,t){return en.resolve()}deleteFieldIndex(e,t){return en.resolve()}deleteAllFieldIndexes(e){return en.resolve()}createTargetIndexes(e,t){return en.resolve()}getDocumentsMatchingTarget(e,t){return en.resolve(null)}getIndexType(e,t){return en.resolve(0)}getFieldIndexes(e,t){return en.resolve([])}getNextCollectionGroupToUpdate(e){return en.resolve(null)}getMinOffset(e,t){return en.resolve(X.min())}getMinOffsetFromCollectionGroup(e,t){return en.resolve(X.min())}updateCollectionGroup(e,t,n){return en.resolve()}updateIndexEntries(e,t){return en.resolve()}}class r2{constructor(){this.index={}}add(e){let t=e.lastSegment(),n=e.popLast(),r=this.index[t]||new eW(U.comparator),i=!r.has(n);return this.index[t]=r.add(n),i}has(e){let t=e.lastSegment(),n=e.popLast(),r=this.index[t];return r&&r.has(n)}getEntries(e){return(this.index[e]||new eW(U.comparator)).toArray()}}/**
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
 */let r5=new Uint8Array(0);class r4{constructor(e,t){this.user=e,this.databaseId=t,this.un=new r2,this.cn=new ne(e=>tK(e),(e,t)=>tz(e,t)),this.uid=e.uid||""}addToCollectionParentIndex(e,t){if(!this.un.has(t)){let n=t.lastSegment(),r=t.popLast();e.addOnCommittedListener(()=>{this.un.add(t)});let i={collectionId:n,parent:ew(r)};return r8(e).put(i)}return en.resolve()}getCollectionParents(e,t){let n=[],r=IDBKeyRange.bound([t,""],[t+"\x00",""],!1,!0);return r8(e).G(r).next(e=>{for(let r of e){if(r.collectionId!==t)break;n.push(ev(r.parent))}return n})}addFieldIndex(e,t){let n=r9(e),r={indexId:t.indexId,collectionGroup:t.collectionGroup,fields:t.fields.map(e=>[e.fieldPath.canonicalString(),e.kind])};delete r.indexId;let i=n.add(r);if(t.indexState){let n=r6(e);return i.next(e=>{n.put(rF(e,this.user,t.indexState.sequenceNumber,t.indexState.offset))})}return i.next()}deleteFieldIndex(e,t){let n=r9(e),r=r6(e),i=r3(e);return n.delete(t.indexId).next(()=>r.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0))).next(()=>i.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0)))}deleteAllFieldIndexes(e){let t=r9(e),n=r3(e),r=r6(e);return t.J().next(()=>n.J()).next(()=>r.J())}createTargetIndexes(e,t){return en.forEach(this.ln(t),t=>this.getIndexType(e,t).next(n=>{if(0===n||1===n){let n=new rW(t);return this.addFieldIndex(e,n._n())}}))}getDocumentsMatchingTarget(e,t){let n=r3(e),r=!0,i=new Map;return en.forEach(this.ln(t),t=>this.hn(e,t).next(e=>{r&&(r=!!e),i.set(t,e)})).next(()=>{if(r){let e=nl(),r=[];return en.forEach(i,(i,s)=>{y("IndexedDbIndexManager",`Using index id=${i.indexId}|cg=${i.collectionGroup}|f=${i.fields.map(e=>`${e.fieldPath}:${e.kind}`).join(",")} to execute ${tK(t)}`);let a=function(e,t){let n=$(t);if(void 0===n)return null;for(let t of t$(e,n.fieldPath))switch(t.op){case"array-contains-any":return t.value.arrayValue.values||[];case"array-contains":return[t.value]}return null}(s,i),o=function(e,t){let n=new Map;for(let r of j(t))for(let t of t$(e,r.fieldPath))switch(t.op){case"==":case"in":n.set(r.fieldPath.canonicalString(),t.value);break;case"not-in":case"!=":return n.set(r.fieldPath.canonicalString(),t.value),Array.from(n.values())}return null}(s,i),l=function(e,t){let n=[],r=!0;for(let i of j(t)){let t=0===i.kind?tj(e,i.fieldPath,e.startAt):tQ(e,i.fieldPath,e.startAt);n.push(t.value),r&&(r=t.inclusive)}return new tI(n,r)}(s,i),u=function(e,t){let n=[],r=!0;for(let i of j(t)){let t=0===i.kind?tQ(e,i.fieldPath,e.endAt):tj(e,i.fieldPath,e.endAt);n.push(t.value),r&&(r=t.inclusive)}return new tI(n,r)}(s,i),c=this.Pn(i,s,l),h=this.Pn(i,s,u),d=this.In(i,s,o),f=this.dn(i.indexId,a,c,l.inclusive,h,u.inclusive,d);return en.forEach(f,i=>n.H(i,t.limit).next(t=>{t.forEach(t=>{let n=z.fromSegments(t.documentKey);e.has(n)||(e=e.add(n),r.push(n))})}))}).next(()=>r)}return en.resolve(null)})}ln(e){let t=this.cn.get(e);return t||(t=0===e.filters.length?[e]:(function(e){if(0===e.getFilters().length)return[];let t=function e(t){if(t instanceof tS||t instanceof tx||_(),t instanceof tS)return t;if(1===t.filters.length)return e(t.filters[0]);let n=t.filters.map(t=>e(t)),r=tx.create(n,t.op);return rX(r=r0(r))?r:(r instanceof tx||_(),tD(r)||_(),r.filters.length>1||_(),r.filters.reduce((e,t)=>rJ(e,t)))}(/**
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
 */function e(t){var n,r;if(t instanceof tS||t instanceof tx||_(),t instanceof tS){if(t instanceof tO){let e=(null===(r=null===(n=t.value.arrayValue)||void 0===n?void 0:n.values)||void 0===r?void 0:r.map(e=>tS.create(t.field,"==",e)))||[];return tx.create(e,"or")}return t}let i=t.filters.map(t=>e(t));return tx.create(i,t.op)}(e));return rX(t)||_(),rH(t)||rY(t)?[t]:t.getFilters()})(tx.create(e.filters,"and")).map(t=>tB(e.path,e.collectionGroup,e.orderBy,t.getFilters(),e.limit,e.startAt,e.endAt)),this.cn.set(e,t)),t}dn(e,t,n,r,i,s,a){let o=(null!=t?t.length:1)*Math.max(n.length,i.length),l=o/(null!=t?t.length:1),u=[];for(let c=0;c<o;++c){let o=t?this.Tn(t[c/l]):r5,h=this.En(e,o,n[c%l],r),d=this.An(e,o,i[c%l],s),f=a.map(t=>this.En(e,o,t,!0));u.push(...this.createRange(h,d,f))}return u}En(e,t,n,r){let i=new r$(e,z.empty(),t,n);return r?i:i.Zt()}An(e,t,n,r){let i=new r$(e,z.empty(),t,n);return r?i.Zt():i}hn(e,t){let n=new rW(t),r=null!=t.collectionGroup?t.collectionGroup:t.path.lastSegment();return this.getFieldIndexes(e,r).next(e=>{let t=null;for(let r of e)n.nn(r)&&(!t||r.fields.length>t.fields.length)&&(t=r);return t})}getIndexType(e,t){let n=2,r=this.ln(t);return en.forEach(r,t=>this.hn(e,t).next(e=>{e?0!==n&&e.fields.length<function(e){let t=new eW(K.comparator),n=!1;for(let r of e.filters)for(let e of r.getFlattenedFilters())e.field.isKeyField()||("array-contains"===e.op||"array-contains-any"===e.op?n=!0:t=t.add(e.field));for(let n of e.orderBy)n.field.isKeyField()||(t=t.add(n.field));return t.size+(n?1:0)}(t)&&(n=1):n=0})).next(()=>null!==t.limit&&r.length>1&&2===n?1:n)}Rn(e,t){let n=new rG;for(let r of j(e)){let e=t.data.field(r.fieldPath);if(null==e)return null;let i=n.Yt(r.kind);rq.Ct.dt(e,i)}return n.zt()}Tn(e){let t=new rG;return rq.Ct.dt(e,t.Yt(0)),t.zt()}Vn(e,t){let n=new rG;return rq.Ct.dt(tl(this.databaseId,t),n.Yt(function(e){let t=j(e);return 0===t.length?0:t[t.length-1].kind}(e))),n.zt()}In(e,t,n){if(null===n)return[];let r=[];r.push(new rG);let i=0;for(let s of j(e)){let e=n[i++];for(let n of r)if(this.mn(t,s.fieldPath)&&tc(e))r=this.fn(r,s,e);else{let t=n.Yt(s.kind);rq.Ct.dt(e,t)}}return this.gn(r)}Pn(e,t,n){return this.In(e,t,n.position)}gn(e){let t=[];for(let n=0;n<e.length;++n)t[n]=e[n].zt();return t}fn(e,t,n){let r=[...e],i=[];for(let e of n.arrayValue.values||[])for(let n of r){let r=new rG;r.seed(n.zt()),rq.Ct.dt(e,r.Yt(t.kind)),i.push(r)}return i}mn(e,t){return!!e.filters.find(e=>e instanceof tS&&e.field.isEqual(t)&&("in"===e.op||"not-in"===e.op))}getFieldIndexes(e,t){let n=r9(e),r=r6(e);return(t?n.G("collectionGroupIndex",IDBKeyRange.bound(t,t)):n.G()).next(e=>{let t=[];return en.forEach(e,e=>r.get([e.indexId,this.uid]).next(n=>{t.push(function(e,t){let n=t?new W(t.sequenceNumber,new X(rx(t.readTime),new z(ev(t.documentKey)),t.largestBatchId)):W.empty(),r=e.fields.map(([e,t])=>new Q(K.fromServerFormat(e),t));return new G(e.indexId,e.collectionGroup,r,n)}(e,n))})).next(()=>t)})}getNextCollectionGroupToUpdate(e){return this.getFieldIndexes(e).next(e=>0===e.length?null:(e.sort((e,t)=>{let n=e.indexState.sequenceNumber-t.indexState.sequenceNumber;return 0!==n?n:V(e.collectionGroup,t.collectionGroup)}),e[0].collectionGroup))}updateCollectionGroup(e,t,n){let r=r9(e),i=r6(e);return this.pn(e).next(e=>r.G("collectionGroupIndex",IDBKeyRange.bound(t,t)).next(t=>en.forEach(t,t=>i.put(rF(t.indexId,this.user,e,n)))))}updateIndexEntries(e,t){let n=new Map;return en.forEach(t,(t,r)=>{let i=n.get(t.collectionGroup);return(i?en.resolve(i):this.getFieldIndexes(e,t.collectionGroup)).next(i=>(n.set(t.collectionGroup,i),en.forEach(i,n=>this.yn(e,t,n).next(t=>{let i=this.wn(r,n);return t.isEqual(i)?en.resolve():this.Sn(e,r,n,t,i)}))))})}bn(e,t,n,r){return r3(e).put({indexId:r.indexId,uid:this.uid,arrayValue:r.arrayValue,directionalValue:r.directionalValue,orderedDocumentKey:this.Vn(n,t.key),documentKey:t.key.path.toArray()})}Dn(e,t,n,r){return r3(e).delete([r.indexId,this.uid,r.arrayValue,r.directionalValue,this.Vn(n,t.key),t.key.path.toArray()])}yn(e,t,n){let r=r3(e),i=new eW(rj);return r.Z({index:"documentKeyIndex",range:IDBKeyRange.only([n.indexId,this.uid,this.Vn(n,t)])},(e,r)=>{i=i.add(new r$(n.indexId,t,r.arrayValue,r.directionalValue))}).next(()=>i)}wn(e,t){let n=new eW(rj),r=this.Rn(t,e);if(null==r)return n;let i=$(t);if(null!=i){let s=e.data.field(i.fieldPath);if(tc(s))for(let i of s.arrayValue.values||[])n=n.add(new r$(t.indexId,e.key,this.Tn(i),r))}else n=n.add(new r$(t.indexId,e.key,r5,r));return n}Sn(e,t,n,r,i){y("IndexedDbIndexManager","Updating index entries for document '%s'",t.key);let s=[];return function(e,t,n,r,i){let s=e.getIterator(),a=t.getIterator(),o=eY(s),l=eY(a);for(;o||l;){let e=!1,t=!1;if(o&&l){let r=n(o,l);r<0?t=!0:r>0&&(e=!0)}else null!=o?t=!0:e=!0;e?(r(l),l=eY(a)):t?(i(o),o=eY(s)):(o=eY(s),l=eY(a))}}(r,i,rj,r=>{s.push(this.bn(e,t,n,r))},r=>{s.push(this.Dn(e,t,n,r))}),en.waitFor(s)}pn(e){let t=1;return r6(e).Z({index:"sequenceNumberIndex",reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},(e,n,r)=>{r.done(),t=n.sequenceNumber+1}).next(()=>t)}createRange(e,t,n){n=n.sort((e,t)=>rj(e,t)).filter((e,t,n)=>!t||0!==rj(e,n[t-1]));let r=[];for(let i of(r.push(e),n)){let n=rj(i,e),s=rj(i,t);if(0===n)r[0]=e.Zt();else if(n>0&&s<0)r.push(i),r.push(i.Zt());else if(s>0)break}r.push(t);let i=[];for(let e=0;e<r.length;e+=2){if(this.Cn(r[e],r[e+1]))return[];let t=[r[e].indexId,this.uid,r[e].arrayValue,r[e].directionalValue,r5,[]],n=[r[e+1].indexId,this.uid,r[e+1].arrayValue,r[e+1].directionalValue,r5,[]];i.push(IDBKeyRange.bound(t,n))}return i}Cn(e,t){return rj(e,t)>0}getMinOffsetFromCollectionGroup(e,t){return this.getFieldIndexes(e,t).next(r7)}getMinOffset(e,t){return en.mapArray(this.ln(t),t=>this.hn(e,t).next(e=>e||_())).next(r7)}}function r8(e){return eB(e,"collectionParents")}function r3(e){return eB(e,"indexEntries")}function r9(e){return eB(e,"indexConfiguration")}function r6(e){return eB(e,"indexState")}function r7(e){0!==e.length||_();let t=e[0].indexState.offset,n=t.largestBatchId;for(let r=1;r<e.length;r++){let i=e[r].indexState.offset;0>J(i,t)&&(t=i),n<i.largestBatchId&&(n=i.largestBatchId)}return new X(t.readTime,t.documentKey,n)}/**
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
 */it.DEFAULT_COLLECTION_PERCENTILE=10,it.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,it.DEFAULT=new it(41943040,it.DEFAULT_COLLECTION_PERCENTILE,it.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),it.DISABLED=new it(-1,0,0);class is{constructor(e,t,n,r){this.userId=e,this.serializer=t,this.indexManager=n,this.referenceDelegate=r,this.vn={}}static Pt(e,t,n,r){""!==e.uid||_();let i=e.isAuthenticated()?e.uid:"";return new is(i,t,n,r)}checkEmpty(e){let t=!0,n=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return io(e).Z({index:"userMutationsIndex",range:n},(e,n,r)=>{t=!1,r.done()}).next(()=>t)}addMutationBatch(e,t,n,r){let i=il(e),s=io(e);return s.add({}).next(a=>{"number"==typeof a||_();let o=new nP(a,t,n,r),l=function(e,t,n){let r=n.baseMutations.map(t=>rf(e.ht,t)),i=n.mutations.map(t=>rf(e.ht,t));return{userId:t,batchId:n.batchId,localWriteTimeMs:n.localWriteTime.toMillis(),baseMutations:r,mutations:i}}(this.serializer,this.userId,o),u=[],c=new eW((e,t)=>V(e.canonicalString(),t.canonicalString()));for(let e of r){let t=[this.userId,ew(e.key.path),a];c=c.add(e.key.path.popLast()),u.push(s.put(l)),u.push(i.put(t,e_))}return c.forEach(t=>{u.push(this.indexManager.addToCollectionParentIndex(e,t))}),e.addOnCommittedListener(()=>{this.vn[a]=o.keys()}),en.waitFor(u).next(()=>o)})}lookupMutationBatch(e,t){return io(e).get(t).next(e=>e?(e.userId===this.userId||_(),rD(this.serializer,e)):null)}Fn(e,t){return this.vn[t]?en.resolve(this.vn[t]):this.lookupMutationBatch(e,t).next(e=>{if(e){let n=e.keys();return this.vn[t]=n,n}return null})}getNextMutationBatchAfterBatchId(e,t){let n=t+1,r=IDBKeyRange.lowerBound([this.userId,n]),i=null;return io(e).Z({index:"userMutationsIndex",range:r},(e,t,r)=>{t.userId===this.userId&&(t.batchId>=n||_(),i=rD(this.serializer,t)),r.done()}).next(()=>i)}getHighestUnacknowledgedBatchId(e){let t=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]),n=-1;return io(e).Z({index:"userMutationsIndex",range:t,reverse:!0},(e,t,r)=>{n=t.batchId,r.done()}).next(()=>n)}getAllMutationBatches(e){let t=IDBKeyRange.bound([this.userId,-1],[this.userId,Number.POSITIVE_INFINITY]);return io(e).G("userMutationsIndex",t).next(e=>e.map(e=>rD(this.serializer,e)))}getAllMutationBatchesAffectingDocumentKey(e,t){let n=[this.userId,ew(t.path)],r=IDBKeyRange.lowerBound(n),i=[];return il(e).Z({range:r},(n,r,s)=>{let[a,o,l]=n,u=ev(o);if(a===this.userId&&t.path.isEqual(u))return io(e).get(l).next(e=>{if(!e)throw _();e.userId===this.userId||_(),i.push(rD(this.serializer,e))});s.done()}).next(()=>i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new eW(V),r=[];return t.forEach(t=>{let i=[this.userId,ew(t.path)],s=IDBKeyRange.lowerBound(i),a=il(e).Z({range:s},(e,r,i)=>{let[s,a,o]=e,l=ev(a);s===this.userId&&t.path.isEqual(l)?n=n.add(o):i.done()});r.push(a)}),en.waitFor(r).next(()=>this.Mn(e,n))}getAllMutationBatchesAffectingQuery(e,t){let n=t.path,r=n.length+1,i=[this.userId,ew(n)],s=IDBKeyRange.lowerBound(i),a=new eW(V);return il(e).Z({range:s},(e,t,i)=>{let[s,o,l]=e,u=ev(o);s===this.userId&&n.isPrefixOf(u)?u.length===r&&(a=a.add(l)):i.done()}).next(()=>this.Mn(e,a))}Mn(e,t){let n=[],r=[];return t.forEach(t=>{r.push(io(e).get(t).next(e=>{if(null===e)throw _();e.userId===this.userId||_(),n.push(rD(this.serializer,e))}))}),en.waitFor(r).next(()=>n)}removeMutationBatch(e,t){return ir(e.ue,this.userId,t).next(n=>(e.addOnCommittedListener(()=>{this.xn(t.batchId)}),en.forEach(n,t=>this.referenceDelegate.markPotentiallyOrphaned(e,t))))}xn(e){delete this.vn[e]}performConsistencyCheck(e){return this.checkEmpty(e).next(t=>{if(!t)return en.resolve();let n=IDBKeyRange.lowerBound([this.userId]),r=[];return il(e).Z({range:n},(e,t,n)=>{if(e[0]===this.userId){let t=ev(e[1]);r.push(t)}else n.done()}).next(()=>{0===r.length||_()})})}containsKey(e,t){return ia(e,this.userId,t)}On(e){return iu(e).get(this.userId).next(e=>e||{userId:this.userId,lastAcknowledgedBatchId:-1,lastStreamToken:""})}}function ia(e,t,n){let r=[t,ew(n.path)],i=r[1],s=IDBKeyRange.lowerBound(r),a=!1;return il(e).Z({range:s,Y:!0},(e,n,r)=>{let[s,o,l]=e;s===t&&o===i&&(a=!0),r.done()}).next(()=>a)}function io(e){return eB(e,"mutations")}function il(e){return eB(e,"documentMutations")}function iu(e){return eB(e,"mutationQueues")}/**
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
 */class ic{constructor(e){this.Nn=e}next(){return this.Nn+=2,this.Nn}static Bn(){return new ic(0)}static Ln(){return new ic(-1)}}/**
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
 */class ih{constructor(e,t){this.referenceDelegate=e,this.serializer=t}allocateTargetId(e){return this.kn(e).next(t=>{let n=new ic(t.highestTargetId);return t.highestTargetId=n.next(),this.qn(e,t).next(()=>t.highestTargetId)})}getLastRemoteSnapshotVersion(e){return this.kn(e).next(e=>P.fromTimestamp(new O(e.lastRemoteSnapshotVersion.seconds,e.lastRemoteSnapshotVersion.nanoseconds)))}getHighestSequenceNumber(e){return this.kn(e).next(e=>e.highestListenSequenceNumber)}setTargetsMetadata(e,t,n){return this.kn(e).next(r=>(r.highestListenSequenceNumber=t,n&&(r.lastRemoteSnapshotVersion=n.toTimestamp()),t>r.highestListenSequenceNumber&&(r.highestListenSequenceNumber=t),this.qn(e,r)))}addTargetData(e,t){return this.Qn(e,t).next(()=>this.kn(e).next(n=>(n.targetCount+=1,this.Kn(t,n),this.qn(e,n))))}updateTargetData(e,t){return this.Qn(e,t)}removeTargetData(e,t){return this.removeMatchingKeysForTargetId(e,t.targetId).next(()=>id(e).delete(t.targetId)).next(()=>this.kn(e)).next(t=>(t.targetCount>0||_(),t.targetCount-=1,this.qn(e,t)))}removeTargets(e,t,n){let r=0,i=[];return id(e).Z((s,a)=>{let o=rC(a);o.sequenceNumber<=t&&null===n.get(o.targetId)&&(r++,i.push(this.removeTargetData(e,o)))}).next(()=>en.waitFor(i)).next(()=>r)}forEachTarget(e,t){return id(e).Z((e,n)=>{let r=rC(n);t(r)})}kn(e){return im(e).get("targetGlobalKey").next(e=>(null!==e||_(),e))}qn(e,t){return im(e).put("targetGlobalKey",t)}Qn(e,t){return id(e).put(rN(this.serializer,t))}Kn(e,t){let n=!1;return e.targetId>t.highestTargetId&&(t.highestTargetId=e.targetId,n=!0),e.sequenceNumber>t.highestListenSequenceNumber&&(t.highestListenSequenceNumber=e.sequenceNumber,n=!0),n}getTargetCount(e){return this.kn(e).next(e=>e.targetCount)}getTargetData(e,t){let n=tK(t),r=IDBKeyRange.bound([n,Number.NEGATIVE_INFINITY],[n,Number.POSITIVE_INFINITY]),i=null;return id(e).Z({range:r,index:"queryTargetsIndex"},(e,n,r)=>{let s=rC(n);tz(t,s.target)&&(i=s,r.done())}).next(()=>i)}addMatchingKeys(e,t,n){let r=[],i=ig(e);return t.forEach(t=>{let s=ew(t.path);r.push(i.put({targetId:n,path:s})),r.push(this.referenceDelegate.addReference(e,n,t))}),en.waitFor(r)}removeMatchingKeys(e,t,n){let r=ig(e);return en.forEach(t,t=>{let i=ew(t.path);return en.waitFor([r.delete([n,i]),this.referenceDelegate.removeReference(e,n,t)])})}removeMatchingKeysForTargetId(e,t){let n=ig(e),r=IDBKeyRange.bound([t],[t+1],!1,!0);return n.delete(r)}getMatchingKeysForTargetId(e,t){let n=IDBKeyRange.bound([t],[t+1],!1,!0),r=ig(e),i=nl();return r.Z({range:n,Y:!0},(e,t,n)=>{let r=ev(e[1]),s=new z(r);i=i.add(s)}).next(()=>i)}containsKey(e,t){let n=ew(t.path),r=IDBKeyRange.bound([n],[n+"\x00"],!1,!0),i=0;return ig(e).Z({index:"documentTargetsIndex",Y:!0,range:r},([e,t],n,r)=>{0!==e&&(i++,r.done())}).next(()=>i>0)}lt(e,t){return id(e).get(t).next(e=>e?rC(e):null)}}function id(e){return eB(e,"targets")}function im(e){return eB(e,"targetGlobal")}function ig(e){return eB(e,"targetDocuments")}/**
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
 */function ip([e,t],[n,r]){let i=V(e,n);return 0===i?V(t,r):i}class iy{constructor(e){this.$n=e,this.buffer=new eW(ip),this.Un=0}Wn(){return++this.Un}Gn(e){let t=[e,this.Wn()];if(this.buffer.size<this.$n)this.buffer=this.buffer.add(t);else{let e=this.buffer.last();0>ip(t,e)&&(this.buffer=this.buffer.delete(e).add(t))}}get maxValue(){return this.buffer.last()[0]}}class iw{constructor(e,t,n){this.garbageCollector=e,this.asyncQueue=t,this.localStore=n,this.zn=null}start(){-1!==this.garbageCollector.params.cacheSizeCollectionThreshold&&this.jn(6e4)}stop(){this.zn&&(this.zn.cancel(),this.zn=null)}get started(){return null!==this.zn}jn(e){y("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.zn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.zn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(e){eo(e)?y("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",e):await et(e)}await this.jn(3e5)})}}class iv{constructor(e,t){this.Hn=e,this.params=t}calculateTargetCount(e,t){return this.Hn.Jn(e).next(e=>Math.floor(t/100*e))}nthSequenceNumber(e,t){if(0===t)return en.resolve(em.ae);let n=new iy(t);return this.Hn.forEachTarget(e,e=>n.Gn(e.sequenceNumber)).next(()=>this.Hn.Yn(e,e=>n.Gn(e))).next(()=>n.maxValue)}removeTargets(e,t,n){return this.Hn.removeTargets(e,t,n)}removeOrphanedDocuments(e,t){return this.Hn.removeOrphanedDocuments(e,t)}collect(e,t){return -1===this.params.cacheSizeCollectionThreshold?(y("LruGarbageCollector","Garbage collection skipped; disabled"),en.resolve(ie)):this.getCacheSize(e).next(n=>n<this.params.cacheSizeCollectionThreshold?(y("LruGarbageCollector",`Garbage collection skipped; Cache size ${n} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),ie):this.Zn(e,t))}getCacheSize(e){return this.Hn.getCacheSize(e)}Zn(e,t){let n,r,i,s,a,l,u;let c=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(t=>(t>this.params.maximumSequenceNumbersToCollect?(y("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${t}`),r=this.params.maximumSequenceNumbersToCollect):r=t,s=Date.now(),this.nthSequenceNumber(e,r))).next(r=>(n=r,a=Date.now(),this.removeTargets(e,n,t))).next(t=>(i=t,l=Date.now(),this.removeOrphanedDocuments(e,n))).next(e=>(u=Date.now(),g()<=o.in.DEBUG&&y("LruGarbageCollector",`LRU Garbage Collection
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
 */class iI{constructor(e,t){this.db=e,this.garbageCollector=new iv(this,t)}Jn(e){let t=this.Xn(e);return this.db.getTargetCache().getTargetCount(e).next(e=>t.next(t=>e+t))}Xn(e){let t=0;return this.Yn(e,e=>{t++}).next(()=>t)}forEachTarget(e,t){return this.db.getTargetCache().forEachTarget(e,t)}Yn(e,t){return this.er(e,(e,n)=>t(n))}addReference(e,t,n){return i_(e,n)}removeReference(e,t,n){return i_(e,n)}removeTargets(e,t,n){return this.db.getTargetCache().removeTargets(e,t,n)}markPotentiallyOrphaned(e,t){return i_(e,t)}tr(e,t){let n;return n=!1,iu(e).X(r=>ia(e,r,t).next(e=>(e&&(n=!0),en.resolve(!e)))).next(()=>n)}removeOrphanedDocuments(e,t){let n=this.db.getRemoteDocumentCache().newChangeBuffer(),r=[],i=0;return this.er(e,(s,a)=>{if(a<=t){let t=this.tr(e,s).next(t=>{if(!t)return i++,n.getEntry(e,s).next(()=>(n.removeEntry(s,P.min()),ig(e).delete([0,ew(s.path)])))});r.push(t)}}).next(()=>en.waitFor(r)).next(()=>n.apply(e)).next(()=>i)}removeTarget(e,t){let n=t.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,n)}updateLimboDocument(e,t){return i_(e,t)}er(e,t){let n=ig(e),r,i=em.ae;return n.Z({index:"documentTargetsIndex"},([e,n],{path:s,sequenceNumber:a})=>{0===e?(i!==em.ae&&t(new z(ev(r)),i),i=a,r=s):i=em.ae}).next(()=>{i!==em.ae&&t(new z(ev(r)),i)})}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}}function i_(e,t){var n;return ig(e).put((n=e.currentSequenceNumber,{targetId:0,path:ew(t.path),sequenceNumber:n}))}/**
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
 */class iE{constructor(e){this.serializer=e}setIndexManager(e){this.indexManager=e}addEntry(e,t,n){return ix(e).put(n)}removeEntry(e,t,n){return ix(e).delete(function(e,t){let n=e.path.toArray();return[n.slice(0,n.length-2),n[n.length-2],rT(t),n[n.length-1]]}(t,n))}updateMetadata(e,t){return this.getMetadata(e).next(n=>(n.byteSize+=t,this.nr(e,n)))}getEntry(e,t){let n=tv.newInvalidDocument(t);return ix(e).Z({index:"documentKeyIndex",range:IDBKeyRange.only(iD(t))},(e,r)=>{n=this.rr(t,r)}).next(()=>n)}ir(e,t){let n={size:0,document:tv.newInvalidDocument(t)};return ix(e).Z({index:"documentKeyIndex",range:IDBKeyRange.only(iD(t))},(e,r)=>{n={document:this.rr(t,r),size:ii(r)}}).next(()=>n)}getEntries(e,t){let n=nt;return this.sr(e,t,(e,t)=>{let r=this.rr(e,t);n=n.insert(e,r)}).next(()=>n)}_r(e,t){let n=nt,r=new e$(z.comparator);return this.sr(e,t,(e,t)=>{let i=this.rr(e,t);n=n.insert(e,i),r=r.insert(e,ii(t))}).next(()=>({documents:n,ar:r}))}sr(e,t,n){if(t.isEmpty())return en.resolve();let r=new eW(iN);t.forEach(e=>r=r.add(e));let i=IDBKeyRange.bound(iD(r.first()),iD(r.last())),s=r.getIterator(),a=s.getNext();return ix(e).Z({index:"documentKeyIndex",range:i},(e,t,r)=>{let i=z.fromSegments([...t.prefixPath,t.collectionGroup,t.documentId]);for(;a&&0>iN(a,i);)n(a,null),a=s.getNext();a&&a.isEqual(i)&&(n(a,t),a=s.hasNext()?s.getNext():null),a?r.W(iD(a)):r.done()}).next(()=>{for(;a;)n(a,null),a=s.hasNext()?s.getNext():null})}getDocumentsMatchingQuery(e,t,n,r,i){let s=t.path,a=[s.popLast().toArray(),s.lastSegment(),rT(n.readTime),n.documentKey.path.isEmpty()?"":n.documentKey.path.lastSegment()],o=[s.popLast().toArray(),s.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return ix(e).G(IDBKeyRange.bound(a,o,!0)).next(e=>{null==i||i.incrementDocumentReadCount(e.length);let n=nt;for(let i of e){let e=this.rr(z.fromSegments(i.prefixPath.concat(i.collectionGroup,i.documentId)),i);e.isFoundDocument()&&(t9(t,e)||r.has(e.key))&&(n=n.insert(e.key,e))}return n})}getAllFromCollectionGroup(e,t,n,r){let i=nt,s=iC(t,n),a=iC(t,X.max());return ix(e).Z({index:"collectionGroupIndex",range:IDBKeyRange.bound(s,a,!0)},(e,t,n)=>{let s=this.rr(z.fromSegments(t.prefixPath.concat(t.collectionGroup,t.documentId)),t);(i=i.insert(s.key,s)).size===r&&n.done()}).next(()=>i)}newChangeBuffer(e){return new iT(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next(e=>e.byteSize)}getMetadata(e){return iS(e).get("remoteDocumentGlobalKey").next(e=>(e||_(),e))}nr(e,t){return iS(e).put("remoteDocumentGlobalKey",t)}rr(e,t){if(t){let e=function(e,t){let n;if(t.document)n=rd(e.ht,t.document,!!t.hasCommittedMutations);else if(t.noDocument){let e=z.fromSegments(t.noDocument.path),r=rx(t.noDocument.readTime);n=tv.newNoDocument(e,r),t.hasCommittedMutations&&n.setHasCommittedMutations()}else{if(!t.unknownDocument)return _();{let e=z.fromSegments(t.unknownDocument.path),r=rx(t.unknownDocument.version);n=tv.newUnknownDocument(e,r)}}return t.readTime&&n.setReadTime(function(e){let t=new O(e[0],e[1]);return P.fromTimestamp(t)}(t.readTime)),n}(this.serializer,t);if(!(e.isNoDocument()&&e.version.isEqual(P.min())))return e}return tv.newInvalidDocument(e)}}class iT extends ib{constructor(e,t){super(),this.ur=e,this.trackRemovals=t,this.cr=new ne(e=>e.toString(),(e,t)=>e.isEqual(t))}applyChanges(e){let t=[],n=0,r=new eW((e,t)=>V(e.canonicalString(),t.canonicalString()));return this.changes.forEach((i,s)=>{let a=this.cr.get(i);if(t.push(this.ur.removeEntry(e,i,a.readTime)),s.isValidDocument()){let o=rE(this.ur.serializer,s);r=r.add(i.path.popLast());let l=ii(o);n+=l-a.size,t.push(this.ur.addEntry(e,i,o))}else if(n-=a.size,this.trackRemovals){let n=rE(this.ur.serializer,s.convertToNoDocument(P.min()));t.push(this.ur.addEntry(e,i,n))}}),r.forEach(n=>{t.push(this.ur.indexManager.addToCollectionParentIndex(e,n))}),t.push(this.ur.updateMetadata(e,n)),en.waitFor(t)}getFromCache(e,t){return this.ur.ir(e,t).next(e=>(this.cr.set(t,{size:e.size,readTime:e.document.readTime}),e.document))}getAllFromCache(e,t){return this.ur._r(e,t).next(({documents:e,ar:t})=>(t.forEach((t,n)=>{this.cr.set(t,{size:n,readTime:e.get(t).readTime})}),e))}}function iS(e){return eB(e,"remoteDocumentGlobal")}function ix(e){return eB(e,"remoteDocumentsV14")}function iD(e){let t=e.path.toArray();return[t.slice(0,t.length-2),t[t.length-2],t[t.length-1]]}function iC(e,t){let n=t.documentKey.path.toArray();return[e,rT(t.readTime),n.slice(0,n.length-2),n.length>0?n[n.length-1]:""]}function iN(e,t){let n=e.path.toArray(),r=t.path.toArray(),i=0;for(let e=0;e<n.length-2&&e<r.length-2;++e)if(i=V(n[e],r[e]))return i;return(i=V(n.length,r.length))||(i=V(n[n.length-2],r[r.length-2]))||V(n[n.length-1],r[r.length-1])}/**
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
 */class iA{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class ik{constructor(e,t,n,r){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=n,this.indexManager=r}getDocument(e,t){let n=null;return this.documentOverlayCache.getOverlay(e,t).next(r=>(n=r,this.remoteDocumentCache.getEntry(e,t))).next(e=>(null!==n&&nN(n.mutation,e,eX.empty(),O.now()),e))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(t=>this.getLocalViewOfDocuments(e,t,nl()).next(()=>t))}getLocalViewOfDocuments(e,t,n=nl()){let r=ns();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,n).next(e=>{let t=nr();return e.forEach((e,n)=>{t=t.insert(e,n.overlayedDocument)}),t}))}getOverlayedDocuments(e,t){let n=ns();return this.populateOverlays(e,n,t).next(()=>this.computeViews(e,t,n,nl()))}populateOverlays(e,t,n){let r=[];return n.forEach(e=>{t.has(e)||r.push(e)}),this.documentOverlayCache.getOverlays(e,r).next(e=>{e.forEach((e,n)=>{t.set(e,n)})})}computeViews(e,t,n,r){let i=nt,s=ns(),a=ns();return t.forEach((e,t)=>{let a=n.get(t.key);r.has(t.key)&&(void 0===a||a.mutation instanceof nR)?i=i.insert(t.key,t):void 0!==a?(s.set(t.key,a.mutation.getFieldMask()),nN(a.mutation,t,a.mutation.getFieldMask(),O.now())):s.set(t.key,eX.empty())}),this.recalculateAndSaveOverlays(e,i).next(e=>(e.forEach((e,t)=>s.set(e,t)),t.forEach((e,t)=>{var n;return a.set(e,new iA(t,null!==(n=s.get(e))&&void 0!==n?n:null))}),a))}recalculateAndSaveOverlays(e,t){let n=ns(),r=new e$((e,t)=>e-t),i=nl();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(e=>{for(let i of e)i.keys().forEach(e=>{let s=t.get(e);if(null===s)return;let a=n.get(e)||eX.empty();a=i.applyToLocalView(s,a),n.set(e,a);let o=(r.get(i.batchId)||nl()).add(e);r=r.insert(i.batchId,o)})}).next(()=>{let s=[],a=r.getReverseIterator();for(;a.hasNext();){let r=a.getNext(),o=r.key,l=r.value,u=ns();l.forEach(e=>{if(!i.has(e)){let r=nC(t.get(e),n.get(e));null!==r&&u.set(e,r),i=i.add(e)}}),s.push(this.documentOverlayCache.saveOverlays(e,o,u))}return en.waitFor(s)}).next(()=>n)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(t=>this.recalculateAndSaveOverlays(e,t))}getDocumentsMatchingQuery(e,t,n,r){return z.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length?this.getDocumentsMatchingDocumentQuery(e,t.path):tZ(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,n,r):this.getDocumentsMatchingCollectionQuery(e,t,n,r)}getNextDocuments(e,t,n,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,n,r).next(i=>{let s=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,n.largestBatchId,r-i.size):en.resolve(ns()),a=-1,o=i;return s.next(t=>en.forEach(t,(t,n)=>(a<n.largestBatchId&&(a=n.largestBatchId),i.get(t)?en.resolve():this.remoteDocumentCache.getEntry(e,t).next(e=>{o=o.insert(t,e)}))).next(()=>this.populateOverlays(e,t,i)).next(()=>this.computeViews(e,o,t,nl())).next(e=>({batchId:a,changes:ni(e)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new z(t)).next(e=>{let t=nr();return e.isFoundDocument()&&(t=t.insert(e.key,e)),t})}getDocumentsMatchingCollectionGroupQuery(e,t,n,r){let i=t.collectionGroup,s=nr();return this.indexManager.getCollectionParents(e,i).next(a=>en.forEach(a,a=>{var o;let l=(o=a.child(i),new tW(o,null,t.explicitOrderBy.slice(),t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt));return this.getDocumentsMatchingCollectionQuery(e,l,n,r).next(e=>{e.forEach((e,t)=>{s=s.insert(e,t)})})}).next(()=>s))}getDocumentsMatchingCollectionQuery(e,t,n,r){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,n.largestBatchId).next(s=>(i=s,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,n,i,r))).next(e=>{i.forEach((t,n)=>{let r=n.getKey();null===e.get(r)&&(e=e.insert(r,tv.newInvalidDocument(r)))});let n=nr();return e.forEach((e,r)=>{let s=i.get(e);void 0!==s&&nN(s.mutation,r,eX.empty(),O.now()),t9(t,r)&&(n=n.insert(e,r))}),n})}}/**
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
 */class iR{constructor(e){this.serializer=e,this.lr=new Map,this.hr=new Map}getBundleMetadata(e,t){return en.resolve(this.lr.get(t))}saveBundleMetadata(e,t){return this.lr.set(t.id,{id:t.id,version:t.version,createTime:rn(t.createTime)}),en.resolve()}getNamedQuery(e,t){return en.resolve(this.hr.get(t))}saveNamedQuery(e,t){return this.hr.set(t.name,{name:t.name,query:rA(t.bundledQuery),readTime:rn(t.readTime)}),en.resolve()}}/**
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
 */class iF{constructor(){this.overlays=new e$(z.comparator),this.Pr=new Map}getOverlay(e,t){return en.resolve(this.overlays.get(t))}getOverlays(e,t){let n=ns();return en.forEach(t,t=>this.getOverlay(e,t).next(e=>{null!==e&&n.set(t,e)})).next(()=>n)}saveOverlays(e,t,n){return n.forEach((n,r)=>{this.It(e,t,r)}),en.resolve()}removeOverlaysForBatchId(e,t,n){let r=this.Pr.get(n);return void 0!==r&&(r.forEach(e=>this.overlays=this.overlays.remove(e)),this.Pr.delete(n)),en.resolve()}getOverlaysForCollection(e,t,n){let r=ns(),i=t.length+1,s=new z(t.child("")),a=this.overlays.getIteratorFrom(s);for(;a.hasNext();){let e=a.getNext().value,s=e.getKey();if(!t.isPrefixOf(s.path))break;s.path.length===i&&e.largestBatchId>n&&r.set(e.getKey(),e)}return en.resolve(r)}getOverlaysForCollectionGroup(e,t,n,r){let i=new e$((e,t)=>e-t),s=this.overlays.getIterator();for(;s.hasNext();){let e=s.getNext().value;if(e.getKey().getCollectionGroup()===t&&e.largestBatchId>n){let t=i.get(e.largestBatchId);null===t&&(t=ns(),i=i.insert(e.largestBatchId,t)),t.set(e.getKey(),e)}}let a=ns(),o=i.getIterator();for(;o.hasNext()&&(o.getNext().value.forEach((e,t)=>a.set(e,t)),!(a.size()>=r)););return en.resolve(a)}It(e,t,n){let r=this.overlays.get(n.key);if(null!==r){let e=this.Pr.get(r.largestBatchId).delete(n.key);this.Pr.set(r.largestBatchId,e)}this.overlays=this.overlays.insert(n.key,new nU(t,n));let i=this.Pr.get(t);void 0===i&&(i=nl(),this.Pr.set(t,i)),this.Pr.set(t,i.add(n.key))}}/**
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
 */class iM{constructor(){this.Ir=new eW(iV.dr),this.Tr=new eW(iV.Er)}isEmpty(){return this.Ir.isEmpty()}addReference(e,t){let n=new iV(e,t);this.Ir=this.Ir.add(n),this.Tr=this.Tr.add(n)}Ar(e,t){e.forEach(e=>this.addReference(e,t))}removeReference(e,t){this.Rr(new iV(e,t))}Vr(e,t){e.forEach(e=>this.removeReference(e,t))}mr(e){let t=new z(new U([])),n=new iV(t,e),r=new iV(t,e+1),i=[];return this.Tr.forEachInRange([n,r],e=>{this.Rr(e),i.push(e.key)}),i}gr(){this.Ir.forEach(e=>this.Rr(e))}Rr(e){this.Ir=this.Ir.delete(e),this.Tr=this.Tr.delete(e)}pr(e){let t=new z(new U([])),n=new iV(t,e),r=new iV(t,e+1),i=nl();return this.Tr.forEachInRange([n,r],e=>{i=i.add(e.key)}),i}containsKey(e){let t=new iV(e,0),n=this.Ir.firstAfterOrEqual(t);return null!==n&&e.isEqual(n.key)}}class iV{constructor(e,t){this.key=e,this.yr=t}static dr(e,t){return z.comparator(e.key,t.key)||V(e.yr,t.yr)}static Er(e,t){return V(e.yr,t.yr)||z.comparator(e.key,t.key)}}/**
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
 */class iL{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.wr=1,this.Sr=new eW(iV.dr)}checkEmpty(e){return en.resolve(0===this.mutationQueue.length)}addMutationBatch(e,t,n,r){let i=this.wr;this.wr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];let s=new nP(i,t,n,r);for(let t of(this.mutationQueue.push(s),r))this.Sr=this.Sr.add(new iV(t.key,i)),this.indexManager.addToCollectionParentIndex(e,t.key.path.popLast());return en.resolve(s)}lookupMutationBatch(e,t){return en.resolve(this.br(t))}getNextMutationBatchAfterBatchId(e,t){let n=this.Dr(t+1),r=n<0?0:n;return en.resolve(this.mutationQueue.length>r?this.mutationQueue[r]:null)}getHighestUnacknowledgedBatchId(){return en.resolve(0===this.mutationQueue.length?-1:this.wr-1)}getAllMutationBatches(e){return en.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){let n=new iV(t,0),r=new iV(t,Number.POSITIVE_INFINITY),i=[];return this.Sr.forEachInRange([n,r],e=>{let t=this.br(e.yr);i.push(t)}),en.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new eW(V);return t.forEach(e=>{let t=new iV(e,0),r=new iV(e,Number.POSITIVE_INFINITY);this.Sr.forEachInRange([t,r],e=>{n=n.add(e.yr)})}),en.resolve(this.Cr(n))}getAllMutationBatchesAffectingQuery(e,t){let n=t.path,r=n.length+1,i=n;z.isDocumentKey(i)||(i=i.child(""));let s=new iV(new z(i),0),a=new eW(V);return this.Sr.forEachWhile(e=>{let t=e.key.path;return!!n.isPrefixOf(t)&&(t.length===r&&(a=a.add(e.yr)),!0)},s),en.resolve(this.Cr(a))}Cr(e){let t=[];return e.forEach(e=>{let n=this.br(e);null!==n&&t.push(n)}),t}removeMutationBatch(e,t){0===this.vr(t.batchId,"removed")||_(),this.mutationQueue.shift();let n=this.Sr;return en.forEach(t.mutations,r=>{let i=new iV(r.key,t.batchId);return n=n.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)}).next(()=>{this.Sr=n})}xn(e){}containsKey(e,t){let n=new iV(t,0),r=this.Sr.firstAfterOrEqual(n);return en.resolve(t.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,en.resolve()}vr(e,t){return this.Dr(e)}Dr(e){return 0===this.mutationQueue.length?0:e-this.mutationQueue[0].batchId}br(e){let t=this.Dr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class iO{constructor(e){this.Fr=e,this.docs=new e$(z.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){let n=t.key,r=this.docs.get(n),i=r?r.size:0,s=this.Fr(t);return this.docs=this.docs.insert(n,{document:t.mutableCopy(),size:s}),this.size+=s-i,this.indexManager.addToCollectionParentIndex(e,n.path.popLast())}removeEntry(e){let t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){let n=this.docs.get(t);return en.resolve(n?n.document.mutableCopy():tv.newInvalidDocument(t))}getEntries(e,t){let n=nt;return t.forEach(e=>{let t=this.docs.get(e);n=n.insert(e,t?t.document.mutableCopy():tv.newInvalidDocument(e))}),en.resolve(n)}getDocumentsMatchingQuery(e,t,n,r){let i=nt,s=t.path,a=new z(s.child("")),o=this.docs.getIteratorFrom(a);for(;o.hasNext();){let{key:e,value:{document:a}}=o.getNext();if(!s.isPrefixOf(e.path))break;e.path.length>s.length+1||0>=J(Y(a),n)||(r.has(a.key)||t9(t,a))&&(i=i.insert(a.key,a.mutableCopy()))}return en.resolve(i)}getAllFromCollectionGroup(e,t,n,r){_()}Mr(e,t){return en.forEach(this.docs,e=>t(e))}newChangeBuffer(e){return new iP(this)}getSize(e){return en.resolve(this.size)}}class iP extends ib{constructor(e){super(),this.ur=e}applyChanges(e){let t=[];return this.changes.forEach((n,r)=>{r.isValidDocument()?t.push(this.ur.addEntry(e,r)):this.ur.removeEntry(n)}),en.waitFor(t)}getFromCache(e,t){return this.ur.getEntry(e,t)}getAllFromCache(e,t){return this.ur.getEntries(e,t)}}/**
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
 */class iq{constructor(e){this.persistence=e,this.Or=new ne(e=>tK(e),tz),this.lastRemoteSnapshotVersion=P.min(),this.highestTargetId=0,this.Nr=0,this.Br=new iM,this.targetCount=0,this.Lr=ic.Bn()}forEachTarget(e,t){return this.Or.forEach((e,n)=>t(n)),en.resolve()}getLastRemoteSnapshotVersion(e){return en.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return en.resolve(this.Nr)}allocateTargetId(e){return this.highestTargetId=this.Lr.next(),en.resolve(this.highestTargetId)}setTargetsMetadata(e,t,n){return n&&(this.lastRemoteSnapshotVersion=n),t>this.Nr&&(this.Nr=t),en.resolve()}Qn(e){this.Or.set(e.target,e);let t=e.targetId;t>this.highestTargetId&&(this.Lr=new ic(t),this.highestTargetId=t),e.sequenceNumber>this.Nr&&(this.Nr=e.sequenceNumber)}addTargetData(e,t){return this.Qn(t),this.targetCount+=1,en.resolve()}updateTargetData(e,t){return this.Qn(t),en.resolve()}removeTargetData(e,t){return this.Or.delete(t.target),this.Br.mr(t.targetId),this.targetCount-=1,en.resolve()}removeTargets(e,t,n){let r=0,i=[];return this.Or.forEach((s,a)=>{a.sequenceNumber<=t&&null===n.get(a.targetId)&&(this.Or.delete(s),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),r++)}),en.waitFor(i).next(()=>r)}getTargetCount(e){return en.resolve(this.targetCount)}getTargetData(e,t){let n=this.Or.get(t)||null;return en.resolve(n)}addMatchingKeys(e,t,n){return this.Br.Ar(t,n),en.resolve()}removeMatchingKeys(e,t,n){this.Br.Vr(t,n);let r=this.persistence.referenceDelegate,i=[];return r&&t.forEach(t=>{i.push(r.markPotentiallyOrphaned(e,t))}),en.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.Br.mr(t),en.resolve()}getMatchingKeysForTargetId(e,t){let n=this.Br.pr(t);return en.resolve(n)}containsKey(e,t){return en.resolve(this.Br.containsKey(t))}}/**
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
 */class iU{constructor(e,t){this.kr={},this.overlays={},this.qr=new em(0),this.Qr=!1,this.Qr=!0,this.referenceDelegate=e(this),this.Kr=new iq(this),this.indexManager=new r1,this.remoteDocumentCache=new iO(e=>this.referenceDelegate.$r(e)),this.serializer=new rb(t),this.Ur=new iR(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Qr=!1,Promise.resolve()}get started(){return this.Qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new iF,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let n=this.kr[e.toKey()];return n||(n=new iL(t,this.referenceDelegate),this.kr[e.toKey()]=n),n}getTargetCache(){return this.Kr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ur}runTransaction(e,t,n){y("MemoryPersistence","Starting transaction:",e);let r=new iB(this.qr.next());return this.referenceDelegate.Wr(),n(r).next(e=>this.referenceDelegate.Gr(r).next(()=>e)).toPromise().then(e=>(r.raiseOnCommittedEvent(),e))}zr(e,t){return en.or(Object.values(this.kr).map(n=>()=>n.containsKey(e,t)))}}class iB extends ee{constructor(e){super(),this.currentSequenceNumber=e}}class iK{constructor(e){this.persistence=e,this.jr=new iM,this.Hr=null}static Jr(e){return new iK(e)}get Yr(){if(this.Hr)return this.Hr;throw _()}addReference(e,t,n){return this.jr.addReference(n,t),this.Yr.delete(n.toString()),en.resolve()}removeReference(e,t,n){return this.jr.removeReference(n,t),this.Yr.add(n.toString()),en.resolve()}markPotentiallyOrphaned(e,t){return this.Yr.add(t.toString()),en.resolve()}removeTarget(e,t){this.jr.mr(t.targetId).forEach(e=>this.Yr.add(e.toString()));let n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(e,t.targetId).next(e=>{e.forEach(e=>this.Yr.add(e.toString()))}).next(()=>n.removeTargetData(e,t))}Wr(){this.Hr=new Set}Gr(e){let t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return en.forEach(this.Yr,n=>{let r=z.fromPath(n);return this.Zr(e,r).next(e=>{e||t.removeEntry(r,P.min())})}).next(()=>(this.Hr=null,t.apply(e)))}updateLimboDocument(e,t){return this.Zr(e,t).next(e=>{e?this.Yr.delete(t.toString()):this.Yr.add(t.toString())})}$r(e){return 0}Zr(e,t){return en.or([()=>en.resolve(this.jr.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.zr(e,t)])}}/**
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
 */class iz{constructor(e){this.serializer=e}B(e,t,n,r){let i=new er("createOrUpgrade",t);n<1&&r>=1&&(!function(e){e.createObjectStore("owner")}(e),e.createObjectStore("mutationQueues",{keyPath:"userId"}),e.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",eI,{unique:!0}),e.createObjectStore("documentMutations"),iG(e),function(e){e.createObjectStore("remoteDocuments")}(e));let s=en.resolve();return n<3&&r>=3&&(0!==n&&(e.deleteObjectStore("targetDocuments"),e.deleteObjectStore("targets"),e.deleteObjectStore("targetGlobal"),iG(e)),s=s.next(()=>(function(e){let t=e.store("targetGlobal"),n={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:P.min().toTimestamp(),targetCount:0};return t.put("targetGlobalKey",n)})(i))),n<4&&r>=4&&(0!==n&&(s=s.next(()=>i.store("mutations").G().next(t=>{e.deleteObjectStore("mutations"),e.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",eI,{unique:!0});let n=i.store("mutations"),r=t.map(e=>n.put(e));return en.waitFor(r)}))),s=s.next(()=>{!function(e){e.createObjectStore("clientMetadata",{keyPath:"clientId"})}(e)})),n<5&&r>=5&&(s=s.next(()=>this.ei(i))),n<6&&r>=6&&(s=s.next(()=>((function(e){e.createObjectStore("remoteDocumentGlobal")})(e),this.ti(i)))),n<7&&r>=7&&(s=s.next(()=>this.ni(i))),n<8&&r>=8&&(s=s.next(()=>this.ri(e,i))),n<9&&r>=9&&(s=s.next(()=>{e.objectStoreNames.contains("remoteDocumentChanges")&&e.deleteObjectStore("remoteDocumentChanges")})),n<10&&r>=10&&(s=s.next(()=>this.ii(i))),n<11&&r>=11&&(s=s.next(()=>{(function(e){e.createObjectStore("bundles",{keyPath:"bundleId"})})(e),function(e){e.createObjectStore("namedQueries",{keyPath:"name"})}(e)})),n<12&&r>=12&&(s=s.next(()=>{!function(e){let t=e.createObjectStore("documentOverlays",{keyPath:eF});t.createIndex("collectionPathOverlayIndex",eM,{unique:!1}),t.createIndex("collectionGroupOverlayIndex",eV,{unique:!1})}(e)})),n<13&&r>=13&&(s=s.next(()=>(function(e){let t=e.createObjectStore("remoteDocumentsV14",{keyPath:eb});t.createIndex("documentKeyIndex",eE),t.createIndex("collectionGroupIndex",eT)})(e)).next(()=>this.si(e,i)).next(()=>e.deleteObjectStore("remoteDocuments"))),n<14&&r>=14&&(s=s.next(()=>this.oi(e,i))),n<15&&r>=15&&(s=s.next(()=>{e.createObjectStore("indexConfiguration",{keyPath:"indexId",autoIncrement:!0}).createIndex("collectionGroupIndex","collectionGroup",{unique:!1}),e.createObjectStore("indexState",{keyPath:eN}).createIndex("sequenceNumberIndex",eA,{unique:!1}),e.createObjectStore("indexEntries",{keyPath:ek}).createIndex("documentKeyIndex",eR,{unique:!1})})),s}ti(e){let t=0;return e.store("remoteDocuments").Z((e,n)=>{t+=ii(n)}).next(()=>{let n={byteSize:t};return e.store("remoteDocumentGlobal").put("remoteDocumentGlobalKey",n)})}ei(e){let t=e.store("mutationQueues"),n=e.store("mutations");return t.G().next(t=>en.forEach(t,t=>{let r=IDBKeyRange.bound([t.userId,-1],[t.userId,t.lastAcknowledgedBatchId]);return n.G("userMutationsIndex",r).next(n=>en.forEach(n,n=>{n.userId===t.userId||_();let r=rD(this.serializer,n);return ir(e,t.userId,r).next(()=>{})}))}))}ni(e){let t=e.store("targetDocuments"),n=e.store("remoteDocuments");return e.store("targetGlobal").get("targetGlobalKey").next(e=>{let r=[];return n.Z((n,i)=>{let s=new U(n),a=[0,ew(s)];r.push(t.get(a).next(n=>n?en.resolve():t.put({targetId:0,path:ew(s),sequenceNumber:e.highestListenSequenceNumber})))}).next(()=>en.waitFor(r))})}ri(e,t){e.createObjectStore("collectionParents",{keyPath:eC});let n=t.store("collectionParents"),r=new r2,i=e=>{if(r.add(e)){let t=e.lastSegment(),r=e.popLast();return n.put({collectionId:t,parent:ew(r)})}};return t.store("remoteDocuments").Z({Y:!0},(e,t)=>{let n=new U(e);return i(n.popLast())}).next(()=>t.store("documentMutations").Z({Y:!0},([e,t,n],r)=>{let s=ev(t);return i(s.popLast())}))}ii(e){let t=e.store("targets");return t.Z((e,n)=>{let r=rC(n),i=rN(this.serializer,r);return t.put(i)})}si(e,t){let n=t.store("remoteDocuments"),r=[];return n.Z((e,n)=>{let i=t.store("remoteDocumentsV14"),s=(n.document?new z(U.fromString(n.document.name).popFirst(5)):n.noDocument?z.fromSegments(n.noDocument.path):n.unknownDocument?z.fromSegments(n.unknownDocument.path):_()).path.toArray(),a={prefixPath:s.slice(0,s.length-2),collectionGroup:s[s.length-2],documentId:s[s.length-1],readTime:n.readTime||[0,0],unknownDocument:n.unknownDocument,noDocument:n.noDocument,document:n.document,hasCommittedMutations:!!n.hasCommittedMutations};r.push(i.put(a))}).next(()=>en.waitFor(r))}oi(e,t){var n;let r=t.store("mutations"),i=(n=this.serializer,new iE(n)),s=new iU(iK.Jr,this.serializer.ht);return r.G().next(e=>{let n=new Map;return e.forEach(e=>{var t;let r=null!==(t=n.get(e.userId))&&void 0!==t?t:nl();rD(this.serializer,e).keys().forEach(e=>r=r.add(e)),n.set(e.userId,r)}),en.forEach(n,(e,n)=>{let r=new d(n),a=rO.Pt(this.serializer,r),o=s.getIndexManager(r),l=is.Pt(r,this.serializer,o,s.referenceDelegate);return new ik(i,l,a,o).recalculateAndSaveOverlaysForDocumentKeys(new eU(t,em.ae),e).next()})})}}function iG(e){e.createObjectStore("targetDocuments",{keyPath:ex}).createIndex("documentTargetsIndex",eD,{unique:!0}),e.createObjectStore("targets",{keyPath:"targetId"}).createIndex("queryTargetsIndex",eS,{unique:!0}),e.createObjectStore("targetGlobal")}let i$="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.";class ij{constructor(e,t,n,r,i,s,a,o,l,u,c=15){var h;if(this.allowTabSynchronization=e,this.persistenceKey=t,this.clientId=n,this._i=i,this.window=s,this.document=a,this.ai=l,this.ui=u,this.ci=c,this.qr=null,this.Qr=!1,this.isPrimary=!1,this.networkEnabled=!0,this.li=null,this.inForeground=!1,this.hi=null,this.Pi=null,this.Ii=Number.NEGATIVE_INFINITY,this.di=e=>Promise.resolve(),!ij.C())throw new T(E.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new iI(this,r),this.Ti=t+"main",this.serializer=new rb(o),this.Ei=new ei(this.Ti,this.ci,new iz(this.serializer)),this.Kr=new ih(this.referenceDelegate,this.serializer),this.remoteDocumentCache=(h=this.serializer,new iE(h)),this.Ur=new rM,this.window&&this.window.localStorage?this.Ai=this.window.localStorage:(this.Ai=null,!1===u&&w("IndexedDbPersistence","LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.Ri().then(()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new T(E.FAILED_PRECONDITION,i$);return this.Vi(),this.mi(),this.fi(),this.runTransaction("getHighestListenSequenceNumber","readonly",e=>this.Kr.getHighestSequenceNumber(e))}).then(e=>{this.qr=new em(e,this.ai)}).then(()=>{this.Qr=!0}).catch(e=>(this.Ei&&this.Ei.close(),Promise.reject(e)))}gi(e){return this.di=async t=>{if(this.started)return e(t)},e(this.isPrimary)}setDatabaseDeletedListener(e){this.Ei.k(async t=>{null===t.newVersion&&await e()})}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this._i.enqueueAndForget(async()=>{this.started&&await this.Ri()}))}Ri(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",e=>iW(e).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next(()=>{if(this.isPrimary)return this.pi(e).next(e=>{e||(this.isPrimary=!1,this._i.enqueueRetryable(()=>this.di(!1)))})}).next(()=>this.yi(e)).next(t=>this.isPrimary&&!t?this.wi(e).next(()=>!1):!!t&&this.Si(e).next(()=>!0))).catch(e=>{if(eo(e))return y("IndexedDbPersistence","Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return y("IndexedDbPersistence","Releasing owner lease after error during lease refresh",e),!1}).then(e=>{this.isPrimary!==e&&this._i.enqueueRetryable(()=>this.di(e)),this.isPrimary=e})}pi(e){return iQ(e).get("owner").next(e=>en.resolve(this.bi(e)))}Di(e){return iW(e).delete(this.clientId)}async Ci(){if(this.isPrimary&&!this.vi(this.Ii,18e5)){this.Ii=Date.now();let e=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",e=>{let t=eB(e,"clientMetadata");return t.G().next(e=>{let n=this.Fi(e,18e5),r=e.filter(e=>-1===n.indexOf(e));return en.forEach(r,e=>t.delete(e.clientId)).next(()=>r)})}).catch(()=>[]);if(this.Ai)for(let t of e)this.Ai.removeItem(this.Mi(t.clientId))}}fi(){this.Pi=this._i.enqueueAfterDelay("client_metadata_refresh",4e3,()=>this.Ri().then(()=>this.Ci()).then(()=>this.fi()))}bi(e){return!!e&&e.ownerId===this.clientId}yi(e){return this.ui?en.resolve(!0):iQ(e).get("owner").next(t=>{if(null!==t&&this.vi(t.leaseTimestampMs,5e3)&&!this.xi(t.ownerId)){if(this.bi(t)&&this.networkEnabled)return!0;if(!this.bi(t)){if(!t.allowTabSynchronization)throw new T(E.FAILED_PRECONDITION,i$);return!1}}return!(!this.networkEnabled||!this.inForeground)||iW(e).G().next(e=>void 0===this.Fi(e,5e3).find(e=>{if(this.clientId!==e.clientId){let t=!this.networkEnabled&&e.networkEnabled,n=!this.inForeground&&e.inForeground,r=this.networkEnabled===e.networkEnabled;if(t||n&&r)return!0}return!1}))}).next(e=>(this.isPrimary!==e&&y("IndexedDbPersistence",`Client ${e?"is":"is not"} eligible for a primary lease.`),e))}async shutdown(){this.Qr=!1,this.Oi(),this.Pi&&(this.Pi.cancel(),this.Pi=null),this.Ni(),this.Bi(),await this.Ei.runTransaction("shutdown","readwrite",["owner","clientMetadata"],e=>{let t=new eU(e,em.ae);return this.wi(t).next(()=>this.Di(t))}),this.Ei.close(),this.Li()}Fi(e,t){return e.filter(e=>this.vi(e.updateTimeMs,t)&&!this.xi(e.clientId))}ki(){return this.runTransaction("getActiveClients","readonly",e=>iW(e).G().next(e=>this.Fi(e,18e5).map(e=>e.clientId)))}get started(){return this.Qr}getMutationQueue(e,t){return is.Pt(e,this.serializer,t,this.referenceDelegate)}getTargetCache(){return this.Kr}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(e){return new r4(e,this.serializer.ht.databaseId)}getDocumentOverlayCache(e){return rO.Pt(this.serializer,e)}getBundleCache(){return this.Ur}runTransaction(e,t,n){var r;let i;y("IndexedDbPersistence","Starting transaction:",e);let s="readonly"===t?"readonly":"readwrite",a=15===(r=this.ci)?eq:14===r?eP:13===r?eP:12===r?eO:11===r?eL:void _();return this.Ei.runTransaction(e,s,a,r=>(i=new eU(r,this.qr?this.qr.next():em.ae),"readwrite-primary"===t?this.pi(i).next(e=>!!e||this.yi(i)).next(t=>{if(!t)throw w(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this._i.enqueueRetryable(()=>this.di(!1)),new T(E.FAILED_PRECONDITION,Z);return n(i)}).next(e=>this.Si(i).next(()=>e)):this.qi(i).next(()=>n(i)))).then(e=>(i.raiseOnCommittedEvent(),e))}qi(e){return iQ(e).get("owner").next(e=>{if(null!==e&&this.vi(e.leaseTimestampMs,5e3)&&!this.xi(e.ownerId)&&!this.bi(e)&&!(this.ui||this.allowTabSynchronization&&e.allowTabSynchronization))throw new T(E.FAILED_PRECONDITION,i$)})}Si(e){let t={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return iQ(e).put("owner",t)}static C(){return ei.C()}wi(e){let t=iQ(e);return t.get("owner").next(e=>this.bi(e)?(y("IndexedDbPersistence","Releasing primary lease."),t.delete("owner")):en.resolve())}vi(e,t){let n=Date.now();return!(e<n-t)&&(!(e>n)||(w(`Detected an update time that is in the future: ${e} > ${n}`),!1))}Vi(){null!==this.document&&"function"==typeof this.document.addEventListener&&(this.hi=()=>{this._i.enqueueAndForget(()=>(this.inForeground="visible"===this.document.visibilityState,this.Ri()))},this.document.addEventListener("visibilitychange",this.hi),this.inForeground="visible"===this.document.visibilityState)}Ni(){this.hi&&(this.document.removeEventListener("visibilitychange",this.hi),this.hi=null)}mi(){var e;"function"==typeof(null===(e=this.window)||void 0===e?void 0:e.addEventListener)&&(this.li=()=>{this.Oi();let e=/(?:Version|Mobile)\/1[456]/;(0,l.G6)()&&(navigator.appVersion.match(e)||navigator.userAgent.match(e))&&this._i.enterRestrictedMode(!0),this._i.enqueueAndForget(()=>this.shutdown())},this.window.addEventListener("pagehide",this.li))}Bi(){this.li&&(this.window.removeEventListener("pagehide",this.li),this.li=null)}xi(e){var t;try{let n=null!==(null===(t=this.Ai)||void 0===t?void 0:t.getItem(this.Mi(e)));return y("IndexedDbPersistence",`Client '${e}' ${n?"is":"is not"} zombied in LocalStorage`),n}catch(e){return w("IndexedDbPersistence","Failed to get zombied client id.",e),!1}}Oi(){if(this.Ai)try{this.Ai.setItem(this.Mi(this.clientId),String(Date.now()))}catch(e){w("Failed to set zombie client id.",e)}}Li(){if(this.Ai)try{this.Ai.removeItem(this.Mi(this.clientId))}catch(e){}}Mi(e){return`firestore_zombie_${this.persistenceKey}_${e}`}}function iQ(e){return eB(e,"owner")}function iW(e){return eB(e,"clientMetadata")}function iH(e,t){let n=e.projectId;return e.isDefaultDatabase||(n+="."+e.database),"firestore/"+t+"/"+n+"/"}/**
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
 */class iY{constructor(e,t,n,r){this.targetId=e,this.fromCache=t,this.Qi=n,this.Ki=r}static $i(e,t){let n=nl(),r=nl();for(let e of t.docChanges)switch(e.type){case 0:n=n.add(e.doc.key);break;case 1:r=r.add(e.doc.key)}return new iY(e,t.fromCache,n,r)}}/**
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
 */class iX{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class iJ{constructor(){this.Ui=!1,this.Wi=!1,this.Gi=100,this.zi=8}initialize(e,t){this.ji=e,this.indexManager=t,this.Ui=!0}getDocumentsMatchingQuery(e,t,n,r){let i={result:null};return this.Hi(e,t).next(e=>{i.result=e}).next(()=>{if(!i.result)return this.Ji(e,t,r,n).next(e=>{i.result=e})}).next(()=>{if(i.result)return;let n=new iX;return this.Yi(e,t,n).next(r=>{if(i.result=r,this.Wi)return this.Zi(e,t,n,r.size)})}).next(()=>i.result)}Zi(e,t,n,r){return n.documentReadCount<this.Gi?(g()<=o.in.DEBUG&&y("QueryEngine","SDK will not create cache indexes for query:",t3(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Gi,"documents"),en.resolve()):(g()<=o.in.DEBUG&&y("QueryEngine","Query:",t3(t),"scans",n.documentReadCount,"local documents and returns",r,"documents as results."),n.documentReadCount>this.zi*r?(g()<=o.in.DEBUG&&y("QueryEngine","The SDK decides to create cache indexes for query:",t3(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,t1(t))):en.resolve())}Hi(e,t){if(tY(t))return en.resolve(null);let n=t1(t);return this.indexManager.getIndexType(e,n).next(r=>0===r?null:(null!==t.limit&&1===r&&(n=t1(t=t5(t,null,"F"))),this.indexManager.getDocumentsMatchingTarget(e,n).next(r=>{let i=nl(...r);return this.ji.getDocuments(e,i).next(r=>this.indexManager.getMinOffset(e,n).next(n=>{let s=this.Xi(t,r);return this.es(t,s,i,n.readTime)?this.Hi(e,t5(t,null,"F")):this.ts(e,s,t,n)}))})))}Ji(e,t,n,r){return tY(t)||r.isEqual(P.min())?en.resolve(null):this.ji.getDocuments(e,n).next(i=>{let s=this.Xi(t,i);return this.es(t,s,n,r)?en.resolve(null):(g()<=o.in.DEBUG&&y("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),t3(t)),this.ts(e,s,t,H(r,-1)).next(e=>e))})}Xi(e,t){let n=new eW(t7(e));return t.forEach((t,r)=>{t9(e,r)&&(n=n.add(r))}),n}es(e,t,n,r){if(null===e.limit)return!1;if(n.size!==t.size)return!0;let i="F"===e.limitType?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Yi(e,t,n){return g()<=o.in.DEBUG&&y("QueryEngine","Using full collection scan to execute query:",t3(t)),this.ji.getDocumentsMatchingQuery(e,t,X.min(),n)}ts(e,t,n,r){return this.ji.getDocumentsMatchingQuery(e,n,r).next(e=>(t.forEach(t=>{e=e.insert(t.key,t)}),e))}}/**
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
 */class iZ{constructor(e,t,n,r){this.persistence=e,this.ns=t,this.serializer=r,this.rs=new e$(V),this.ss=new ne(e=>tK(e),tz),this.os=new Map,this._s=e.getRemoteDocumentCache(),this.Kr=e.getTargetCache(),this.Ur=e.getBundleCache(),this.us(n)}us(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new ik(this._s,this.mutationQueue,this.documentOverlayCache,this.indexManager),this._s.setIndexManager(this.indexManager),this.ns.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.rs))}}async function i0(e,t){return await e.persistence.runTransaction("Handle user change","readonly",n=>{let r;return e.mutationQueue.getAllMutationBatches(n).next(i=>(r=i,e.us(t),e.mutationQueue.getAllMutationBatches(n))).next(t=>{let i=[],s=[],a=nl();for(let e of r)for(let t of(i.push(e.batchId),e.mutations))a=a.add(t.key);for(let e of t)for(let t of(s.push(e.batchId),e.mutations))a=a.add(t.key);return e.localDocuments.getDocuments(n,a).next(e=>({cs:e,removedBatchIds:i,addedBatchIds:s}))})})}function i1(e){return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Kr.getLastRemoteSnapshotVersion(t))}function i2(e,t,n){let r=nl(),i=nl();return n.forEach(e=>r=r.add(e)),t.getEntries(e,r).next(e=>{let r=nt;return n.forEach((n,s)=>{let a=e.get(n);s.isFoundDocument()!==a.isFoundDocument()&&(i=i.add(n)),s.isNoDocument()&&s.version.isEqual(P.min())?(t.removeEntry(n,s.readTime),r=r.insert(n,s)):!a.isValidDocument()||s.version.compareTo(a.version)>0||0===s.version.compareTo(a.version)&&a.hasPendingWrites?(t.addEntry(s),r=r.insert(n,s)):y("LocalStore","Ignoring outdated watch update for ",n,". Current version:",a.version," Watch version:",s.version)}),{ls:r,hs:i}})}function i5(e,t){return e.persistence.runTransaction("Allocate target","readwrite",n=>{let r;return e.Kr.getTargetData(n,t).next(i=>i?(r=i,en.resolve(r)):e.Kr.allocateTargetId(n).next(i=>(r=new r_(t,i,"TargetPurposeListen",n.currentSequenceNumber),e.Kr.addTargetData(n,r).next(()=>r))))}).then(n=>{let r=e.rs.get(n.targetId);return(null===r||n.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(e.rs=e.rs.insert(n.targetId,n),e.ss.set(t,n.targetId)),n})}async function i4(e,t,n){let r=e.rs.get(t);try{n||await e.persistence.runTransaction("Release target",n?"readwrite":"readwrite-primary",t=>e.persistence.referenceDelegate.removeTarget(t,r))}catch(e){if(!eo(e))throw e;y("LocalStore",`Failed to update sequence numbers for target ${t}: ${e}`)}e.rs=e.rs.remove(t),e.ss.delete(r.target)}function i8(e,t,n){let r=P.min(),i=nl();return e.persistence.runTransaction("Execute query","readwrite",s=>(function(e,t,n){let r=e.ss.get(n);return void 0!==r?en.resolve(e.rs.get(r)):e.Kr.getTargetData(t,n)})(e,s,t1(t)).next(t=>{if(t)return r=t.lastLimboFreeSnapshotVersion,e.Kr.getMatchingKeysForTargetId(s,t.targetId).next(e=>{i=e})}).next(()=>e.ns.getDocumentsMatchingQuery(s,t,n?r:P.min(),n?i:nl())).next(n=>(i6(e,t6(t),n),{documents:n,Ps:i})))}function i3(e,t){let n=e.Kr,r=e.rs.get(t);return r?Promise.resolve(r.target):e.persistence.runTransaction("Get target data","readonly",e=>n.lt(e,t).next(e=>e?e.target:null))}function i9(e,t){let n=e.os.get(t)||P.min();return e.persistence.runTransaction("Get new document changes","readonly",r=>e._s.getAllFromCollectionGroup(r,t,H(n,-1),Number.MAX_SAFE_INTEGER)).then(n=>(i6(e,t,n),n))}function i6(e,t,n){let r=e.os.get(t)||P.min();n.forEach((e,t)=>{t.readTime.compareTo(r)>0&&(r=t.readTime)}),e.os.set(t,r)}async function i7(e,t,n,r){let i=nl(),s=nt;for(let e of n){let n=t.Is(e.metadata.name);e.document&&(i=i.add(n));let r=t.ds(e);r.setReadTime(t.Ts(e.metadata.readTime)),s=s.insert(n,r)}let a=e._s.newChangeBuffer({trackRemovals:!0}),o=await i5(e,t1(tH(U.fromString(`__bundle__/docs/${r}`))));return e.persistence.runTransaction("Apply bundle documents","readwrite",t=>i2(t,a,s).next(e=>(a.apply(t),e)).next(n=>e.Kr.removeMatchingKeysForTargetId(t,o.targetId).next(()=>e.Kr.addMatchingKeys(t,i,o.targetId)).next(()=>e.localDocuments.getLocalViewOfDocuments(t,n.ls,n.hs)).next(()=>n.ls)))}async function se(e,t,n=nl()){let r=await i5(e,t1(rA(t.bundledQuery)));return e.persistence.runTransaction("Save named query","readwrite",i=>{let s=rn(t.readTime);if(r.snapshotVersion.compareTo(s)>=0)return e.Ur.saveNamedQuery(i,t);let a=r.withResumeToken(e0.EMPTY_BYTE_STRING,s);return e.rs=e.rs.insert(a.targetId,a),e.Kr.updateTargetData(i,a).next(()=>e.Kr.removeMatchingKeysForTargetId(i,r.targetId)).next(()=>e.Kr.addMatchingKeys(i,n,r.targetId)).next(()=>e.Ur.saveNamedQuery(i,t))})}function st(e,t){return`firestore_clients_${e}_${t}`}function sn(e,t,n){let r=`firestore_mutations_${e}_${n}`;return t.isAuthenticated()&&(r+=`_${t.uid}`),r}function sr(e,t){return`firestore_targets_${e}_${t}`}class si{constructor(e,t,n,r){this.user=e,this.batchId=t,this.state=n,this.error=r}static Es(e,t,n){let r=JSON.parse(n),i,s="object"==typeof r&&-1!==["pending","acknowledged","rejected"].indexOf(r.state)&&(void 0===r.error||"object"==typeof r.error);return s&&r.error&&(s="string"==typeof r.error.message&&"string"==typeof r.error.code)&&(i=new T(r.error.code,r.error.message)),s?new si(e,t,r.state,i):(w("SharedClientState",`Failed to parse mutation state for ID '${t}': ${n}`),null)}As(){let e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class ss{constructor(e,t,n){this.targetId=e,this.state=t,this.error=n}static Es(e,t){let n=JSON.parse(t),r,i="object"==typeof n&&-1!==["not-current","current","rejected"].indexOf(n.state)&&(void 0===n.error||"object"==typeof n.error);return i&&n.error&&(i="string"==typeof n.error.message&&"string"==typeof n.error.code)&&(r=new T(n.error.code,n.error.message)),i?new ss(e,n.state,r):(w("SharedClientState",`Failed to parse target state for ID '${e}': ${t}`),null)}As(){let e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class sa{constructor(e,t){this.clientId=e,this.activeTargetIds=t}static Es(e,t){let n=JSON.parse(t),r="object"==typeof n&&n.activeTargetIds instanceof Array,i=nu;for(let e=0;r&&e<n.activeTargetIds.length;++e)r=ey(n.activeTargetIds[e]),i=i.add(n.activeTargetIds[e]);return r?new sa(e,i):(w("SharedClientState",`Failed to parse client data for instance '${e}': ${t}`),null)}}class so{constructor(e,t){this.clientId=e,this.onlineState=t}static Es(e){let t=JSON.parse(e);return"object"==typeof t&&-1!==["Unknown","Online","Offline"].indexOf(t.onlineState)&&"string"==typeof t.clientId?new so(t.clientId,t.onlineState):(w("SharedClientState",`Failed to parse online state: ${e}`),null)}}class sl{constructor(){this.activeTargetIds=nu}Rs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Vs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}As(){let e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class su{constructor(e,t,n,r,i){this.window=e,this._i=t,this.persistenceKey=n,this.fs=r,this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null,this.gs=this.ps.bind(this),this.ys=new e$(V),this.started=!1,this.ws=[];let s=n.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");this.storage=this.window.localStorage,this.currentUser=i,this.Ss=st(this.persistenceKey,this.fs),this.bs=`firestore_sequence_number_${this.persistenceKey}`,this.ys=this.ys.insert(this.fs,new sl),this.Ds=RegExp(`^firestore_clients_${s}_([^_]*)$`),this.Cs=RegExp(`^firestore_mutations_${s}_(\\d+)(?:_(.*))?$`),this.vs=RegExp(`^firestore_targets_${s}_(\\d+)$`),this.Fs=`firestore_online_state_${this.persistenceKey}`,this.Ms=`firestore_bundle_loaded_v2_${this.persistenceKey}`,this.window.addEventListener("storage",this.gs)}static C(e){return!(!e||!e.localStorage)}async start(){let e=await this.syncEngine.ki();for(let t of e){if(t===this.fs)continue;let e=this.getItem(st(this.persistenceKey,t));if(e){let n=sa.Es(t,e);n&&(this.ys=this.ys.insert(n.clientId,n))}}this.xs();let t=this.storage.getItem(this.Fs);if(t){let e=this.Os(t);e&&this.Ns(e)}for(let e of this.ws)this.ps(e);this.ws=[],this.window.addEventListener("pagehide",()=>this.shutdown()),this.started=!0}writeSequenceNumber(e){this.setItem(this.bs,JSON.stringify(e))}getAllActiveQueryTargets(){return this.Bs(this.ys)}isActiveQueryTarget(e){let t=!1;return this.ys.forEach((n,r)=>{r.activeTargetIds.has(e)&&(t=!0)}),t}addPendingMutation(e){this.Ls(e,"pending")}updateMutationState(e,t,n){this.Ls(e,t,n),this.ks(e)}addLocalQueryTarget(e){let t="not-current";if(this.isActiveQueryTarget(e)){let n=this.storage.getItem(sr(this.persistenceKey,e));if(n){let r=ss.Es(e,n);r&&(t=r.state)}}return this.qs.Rs(e),this.xs(),t}removeLocalQueryTarget(e){this.qs.Vs(e),this.xs()}isLocalQueryTarget(e){return this.qs.activeTargetIds.has(e)}clearQueryState(e){this.removeItem(sr(this.persistenceKey,e))}updateQueryState(e,t,n){this.Qs(e,t,n)}handleUserChange(e,t,n){t.forEach(e=>{this.ks(e)}),this.currentUser=e,n.forEach(e=>{this.addPendingMutation(e)})}setOnlineState(e){this.Ks(e)}notifyBundleLoaded(e){this.$s(e)}shutdown(){this.started&&(this.window.removeEventListener("storage",this.gs),this.removeItem(this.Ss),this.started=!1)}getItem(e){let t=this.storage.getItem(e);return y("SharedClientState","READ",e,t),t}setItem(e,t){y("SharedClientState","SET",e,t),this.storage.setItem(e,t)}removeItem(e){y("SharedClientState","REMOVE",e),this.storage.removeItem(e)}ps(e){if(e.storageArea===this.storage){if(y("SharedClientState","EVENT",e.key,e.newValue),e.key===this.Ss)return void w("Received WebStorage notification for local change. Another client might have garbage-collected our state");this._i.enqueueRetryable(async()=>{if(this.started){if(null!==e.key){if(this.Ds.test(e.key)){if(null==e.newValue){let t=this.Us(e.key);return this.Ws(t,null)}{let t=this.Gs(e.key,e.newValue);if(t)return this.Ws(t.clientId,t)}}else if(this.Cs.test(e.key)){if(null!==e.newValue){let t=this.zs(e.key,e.newValue);if(t)return this.js(t)}}else if(this.vs.test(e.key)){if(null!==e.newValue){let t=this.Hs(e.key,e.newValue);if(t)return this.Js(t)}}else if(e.key===this.Fs){if(null!==e.newValue){let t=this.Os(e.newValue);if(t)return this.Ns(t)}}else if(e.key===this.bs){let t=function(e){let t=em.ae;if(null!=e)try{let n=JSON.parse(e);"number"==typeof n||_(),t=n}catch(e){w("SharedClientState","Failed to read sequence number from WebStorage",e)}return t}(e.newValue);t!==em.ae&&this.sequenceNumberHandler(t)}else if(e.key===this.Ms){let t=this.Ys(e.newValue);await Promise.all(t.map(e=>this.syncEngine.Zs(e)))}}}else this.ws.push(e)})}}get qs(){return this.ys.get(this.fs)}xs(){this.setItem(this.Ss,this.qs.As())}Ls(e,t,n){let r=new si(this.currentUser,e,t,n),i=sn(this.persistenceKey,this.currentUser,e);this.setItem(i,r.As())}ks(e){let t=sn(this.persistenceKey,this.currentUser,e);this.removeItem(t)}Ks(e){let t={clientId:this.fs,onlineState:e};this.storage.setItem(this.Fs,JSON.stringify(t))}Qs(e,t,n){let r=sr(this.persistenceKey,e),i=new ss(e,t,n);this.setItem(r,i.As())}$s(e){let t=JSON.stringify(Array.from(e));this.setItem(this.Ms,t)}Us(e){let t=this.Ds.exec(e);return t?t[1]:null}Gs(e,t){let n=this.Us(e);return sa.Es(n,t)}zs(e,t){let n=this.Cs.exec(e),r=Number(n[1]),i=void 0!==n[2]?n[2]:null;return si.Es(new d(i),r,t)}Hs(e,t){let n=this.vs.exec(e),r=Number(n[1]);return ss.Es(r,t)}Os(e){return so.Es(e)}Ys(e){return JSON.parse(e)}async js(e){if(e.user.uid===this.currentUser.uid)return this.syncEngine.Xs(e.batchId,e.state,e.error);y("SharedClientState",`Ignoring mutation for non-active user ${e.user.uid}`)}Js(e){return this.syncEngine.eo(e.targetId,e.state,e.error)}Ws(e,t){let n=t?this.ys.insert(e,t):this.ys.remove(e),r=this.Bs(this.ys),i=this.Bs(n),s=[],a=[];return i.forEach(e=>{r.has(e)||s.push(e)}),r.forEach(e=>{i.has(e)||a.push(e)}),this.syncEngine.no(s,a).then(()=>{this.ys=n})}Ns(e){this.ys.get(e.clientId)&&this.onlineStateHandler(e.onlineState)}Bs(e){let t=nu;return e.forEach((e,n)=>{t=t.unionWith(n.activeTargetIds)}),t}}class sc{constructor(){this.ro=new sl,this.io={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,n){}addLocalQueryTarget(e){return this.ro.Rs(e),this.io[e]||"not-current"}updateQueryState(e,t,n){this.io[e]=t}removeLocalQueryTarget(e){this.ro.Vs(e)}isLocalQueryTarget(e){return this.ro.activeTargetIds.has(e)}clearQueryState(e){delete this.io[e]}getAllActiveQueryTargets(){return this.ro.activeTargetIds}isActiveQueryTarget(e){return this.ro.activeTargetIds.has(e)}start(){return this.ro=new sl,Promise.resolve()}handleUserChange(e,t,n){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class sh{so(e){}shutdown(){}}/**
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
 */class sd{constructor(){this.oo=()=>this._o(),this.ao=()=>this.uo(),this.co=[],this.lo()}so(e){this.co.push(e)}shutdown(){window.removeEventListener("online",this.oo),window.removeEventListener("offline",this.ao)}lo(){window.addEventListener("online",this.oo),window.addEventListener("offline",this.ao)}_o(){for(let e of(y("ConnectivityMonitor","Network connectivity changed: AVAILABLE"),this.co))e(0)}uo(){for(let e of(y("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE"),this.co))e(1)}static C(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}/**
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
 */let sf=null;function sm(){return null===sf?sf=268435456+Math.round(2147483648*Math.random()):sf++,"0x"+sf.toString(16)}/**
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
 */let sg={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class sp{constructor(e){this.ho=e.ho,this.Po=e.Po}Io(e){this.To=e}Eo(e){this.Ao=e}onMessage(e){this.Ro=e}close(){this.Po()}send(e){this.ho(e)}Vo(){this.To()}mo(e){this.Ao(e)}fo(e){this.Ro(e)}}/**
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
 */let sy="WebChannelConnection";class sw extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;let t=e.ssl?"https":"http",n=encodeURIComponent(this.databaseId.projectId),r=encodeURIComponent(this.databaseId.database);this.po=t+"://"+e.host,this.yo=`projects/${n}/databases/${r}`,this.wo="(default)"===this.databaseId.database?`project_id=${n}`:`project_id=${n}&database_id=${r}`}get So(){return!1}bo(e,t,n,r,i){let s=sm(),a=this.Do(e,t);y("RestConnection",`Sending RPC '${e}' ${s}:`,a,n);let o={"google-cloud-resource-prefix":this.yo,"x-goog-request-params":this.wo};return this.Co(o,r,i),this.vo(e,a,o,n).then(t=>(y("RestConnection",`Received RPC '${e}' ${s}: `,t),t),t=>{throw v("RestConnection",`RPC '${e}' ${s} failed with error: `,t,"url: ",a,"request:",n),t})}Fo(e,t,n,r,i,s){return this.bo(e,t,n,r,i)}Co(e,t,n){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+f}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((t,n)=>e[n]=t),n&&n.headers.forEach((t,n)=>e[n]=t)}Do(e,t){let n=sg[e];return`${this.po}/v1/${t}:${n}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}vo(e,t,n,r){let i=sm();return new Promise((s,a)=>{let o=new u.JJ;o.setWithCredentials(!0),o.listenOnce(u.tw.COMPLETE,()=>{try{switch(o.getLastErrorCode()){case u.jK.NO_ERROR:let t=o.getResponseJson();y(sy,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(t)),s(t);break;case u.jK.TIMEOUT:y(sy,`RPC '${e}' ${i} timed out`),a(new T(E.DEADLINE_EXCEEDED,"Request time out"));break;case u.jK.HTTP_ERROR:let n=o.getStatus();if(y(sy,`RPC '${e}' ${i} failed with status:`,n,"response text:",o.getResponseText()),n>0){let e=o.getResponseJson();Array.isArray(e)&&(e=e[0]);let t=null==e?void 0:e.error;if(t&&t.status&&t.message){let e=function(e){let t=e.toLowerCase().replace(/_/g,"-");return Object.values(E).indexOf(t)>=0?t:E.UNKNOWN}(t.status);a(new T(e,t.message))}else a(new T(E.UNKNOWN,"Server responded with status "+o.getStatus()))}else a(new T(E.UNAVAILABLE,"Connection failed."));break;default:_()}}finally{y(sy,`RPC '${e}' ${i} completed.`)}});let l=JSON.stringify(r);y(sy,`RPC '${e}' ${i} sending request:`,r),o.send(t,"POST",l,n,15)})}Mo(e,t,n){let i=sm(),s=[this.po,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=(0,u.UE)(),o=(0,u.FJ)(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;void 0!==c&&(l.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(l.useFetchStreams=!0),this.Co(l.initMessageHeaders,t,n),l.encodeInitMessageHeaders=!0;let h=s.join("");y(sy,`Creating RPC '${e}' stream ${i}: ${h}`,l);let d=a.createWebChannel(h,l),f=!1,m=!1,g=new sp({ho:t=>{m?y(sy,`Not sending because RPC '${e}' stream ${i} is closed:`,t):(f||(y(sy,`Opening RPC '${e}' stream ${i} transport.`),d.open(),f=!0),y(sy,`RPC '${e}' stream ${i} sending:`,t),d.send(t))},Po:()=>d.close()}),p=(e,t,n)=>{e.listen(t,e=>{try{n(e)}catch(e){setTimeout(()=>{throw e},0)}})};return p(d,u.ii.EventType.OPEN,()=>{m||y(sy,`RPC '${e}' stream ${i} transport opened.`)}),p(d,u.ii.EventType.CLOSE,()=>{m||(m=!0,y(sy,`RPC '${e}' stream ${i} transport closed`),g.mo())}),p(d,u.ii.EventType.ERROR,t=>{m||(m=!0,v(sy,`RPC '${e}' stream ${i} transport errored:`,t),g.mo(new T(E.UNAVAILABLE,"The operation could not be completed")))}),p(d,u.ii.EventType.MESSAGE,t=>{var n;if(!m){let s=t.data[0];s||_();let a=s.error||(null===(n=s[0])||void 0===n?void 0:n.error);if(a){y(sy,`RPC '${e}' stream ${i} received error:`,a);let t=a.status,n=function(e){let t=r[e];if(void 0!==t)return nz(t)}(t),s=a.message;void 0===n&&(n=E.INTERNAL,s="Unknown error status: "+t+" with message "+a.message),m=!0,g.mo(new T(n,s)),d.close()}else y(sy,`RPC '${e}' stream ${i} received:`,s),g.fo(s)}}),p(o,u.ju.STAT_EVENT,t=>{t.stat===u.kN.PROXY?y(sy,`RPC '${e}' stream ${i} detected buffering proxy`):t.stat===u.kN.NOPROXY&&y(sy,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{g.Vo()},0),g}}/**
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
 */function sv(){return"undefined"!=typeof window?window:null}function sI(){return"undefined"!=typeof document?document:null}/**
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
 */function s_(e){return new n6(e,!0)}/**
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
 */class sb{constructor(e,t,n=1e3,r=1.5,i=6e4){this._i=e,this.timerId=t,this.xo=n,this.Oo=r,this.No=i,this.Bo=0,this.Lo=null,this.ko=Date.now(),this.reset()}reset(){this.Bo=0}qo(){this.Bo=this.No}Qo(e){this.cancel();let t=Math.floor(this.Bo+this.Ko()),n=Math.max(0,Date.now()-this.ko),r=Math.max(0,t-n);r>0&&y("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.Bo} ms, delay with jitter: ${t} ms, last attempt: ${n} ms ago)`),this.Lo=this._i.enqueueAfterDelay(this.timerId,r,()=>(this.ko=Date.now(),e())),this.Bo*=this.Oo,this.Bo<this.xo&&(this.Bo=this.xo),this.Bo>this.No&&(this.Bo=this.No)}$o(){null!==this.Lo&&(this.Lo.skipDelay(),this.Lo=null)}cancel(){null!==this.Lo&&(this.Lo.cancel(),this.Lo=null)}Ko(){return(Math.random()-.5)*this.Bo}}/**
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
 */class sE{constructor(e,t,n,r,i,s,a,o){this._i=e,this.Uo=n,this.Wo=r,this.connection=i,this.authCredentialsProvider=s,this.appCheckCredentialsProvider=a,this.listener=o,this.state=0,this.Go=0,this.zo=null,this.jo=null,this.stream=null,this.Ho=new sb(e,t)}Jo(){return 1===this.state||5===this.state||this.Yo()}Yo(){return 2===this.state||3===this.state}start(){4!==this.state?this.auth():this.Zo()}async stop(){this.Jo()&&await this.close(0)}Xo(){this.state=0,this.Ho.reset()}e_(){this.Yo()&&null===this.zo&&(this.zo=this._i.enqueueAfterDelay(this.Uo,6e4,()=>this.t_()))}n_(e){this.r_(),this.stream.send(e)}async t_(){if(this.Yo())return this.close(0)}r_(){this.zo&&(this.zo.cancel(),this.zo=null)}i_(){this.jo&&(this.jo.cancel(),this.jo=null)}async close(e,t){this.r_(),this.i_(),this.Ho.cancel(),this.Go++,4!==e?this.Ho.reset():t&&t.code===E.RESOURCE_EXHAUSTED?(w(t.toString()),w("Using maximum backoff delay to prevent overloading the backend."),this.Ho.qo()):t&&t.code===E.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.s_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Eo(t)}s_(){}auth(){this.state=1;let e=this.o_(this.Go),t=this.Go;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([e,n])=>{this.Go===t&&this.__(e,n)},t=>{e(()=>{let e=new T(E.UNKNOWN,"Fetching auth token failed: "+t.message);return this.a_(e)})})}__(e,t){let n=this.o_(this.Go);this.stream=this.u_(e,t),this.stream.Io(()=>{n(()=>(this.state=2,this.jo=this._i.enqueueAfterDelay(this.Wo,1e4,()=>(this.Yo()&&(this.state=3),Promise.resolve())),this.listener.Io()))}),this.stream.Eo(e=>{n(()=>this.a_(e))}),this.stream.onMessage(e=>{n(()=>this.onMessage(e))})}Zo(){this.state=5,this.Ho.Qo(async()=>{this.state=0,this.start()})}a_(e){return y("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}o_(e){return t=>{this._i.enqueueAndForget(()=>this.Go===e?t():(y("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class sT extends sE{constructor(e,t,n,r,i,s){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,n,r,s),this.serializer=i}u_(e,t){return this.connection.Mo("Listen",e,t)}onMessage(e){this.Ho.reset();let t=function(e,t){let n;if("targetChange"in t){var r,i;t.targetChange;let s="NO_CHANGE"===(r=t.targetChange.targetChangeType||"NO_CHANGE")?0:"ADD"===r?1:"REMOVE"===r?2:"CURRENT"===r?3:"RESET"===r?4:_(),a=t.targetChange.targetIds||[],o=(i=t.targetChange.resumeToken,e.useProto3Json?(void 0===i||"string"==typeof i||_(),e0.fromBase64String(i||"")):(void 0===i||i instanceof Uint8Array||_(),e0.fromUint8Array(i||new Uint8Array))),l=t.targetChange.cause,u=l&&function(e){let t=void 0===e.code?E.UNKNOWN:nz(e.code);return new T(t,e.message||"")}(l);n=new n0(s,a,o,u||null)}else if("documentChange"in t){t.documentChange;let r=t.documentChange;r.document,r.document.name,r.document.updateTime;let i=ra(e,r.document.name),s=rn(r.document.updateTime),a=r.document.createTime?rn(r.document.createTime):P.min(),o=new tw({mapValue:{fields:r.document.fields}}),l=tv.newFoundDocument(i,s,a,o),u=r.targetIds||[],c=r.removedTargetIds||[];n=new nJ(u,c,l.key,l)}else if("documentDelete"in t){t.documentDelete;let r=t.documentDelete;r.document;let i=ra(e,r.document),s=r.readTime?rn(r.readTime):P.min(),a=tv.newNoDocument(i,s),o=r.removedTargetIds||[];n=new nJ([],o,a.key,a)}else if("documentRemove"in t){t.documentRemove;let r=t.documentRemove;r.document;let i=ra(e,r.document),s=r.removedTargetIds||[];n=new nJ([],s,i,null)}else{if(!("filter"in t))return _();{t.filter;let e=t.filter;e.targetId;let{count:r=0,unchangedNames:i}=e,s=new nB(r,i),a=e.targetId;n=new nZ(a,s)}}return n}(this.serializer,e),n=function(e){if(!("targetChange"in e))return P.min();let t=e.targetChange;return t.targetIds&&t.targetIds.length?P.min():t.readTime?rn(t.readTime):P.min()}(e);return this.listener.c_(t,n)}l_(e){let t={};t.database=ru(this.serializer),t.addTarget=function(e,t){let n;let r=t.target;if((n=tG(r)?{documents:rg(e,r)}:{query:rp(e,r)}).targetId=t.targetId,t.resumeToken.approximateByteSize()>0){n.resumeToken=rt(e,t.resumeToken);let r=n7(e,t.expectedCount);null!==r&&(n.expectedCount=r)}else if(t.snapshotVersion.compareTo(P.min())>0){n.readTime=re(e,t.snapshotVersion.toTimestamp());let r=n7(e,t.expectedCount);null!==r&&(n.expectedCount=r)}return n}(this.serializer,e);let n=function(e,t){let n=function(e){switch(e){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return _()}}(t.purpose);return null==n?null:{"goog-listen-tags":n}}(this.serializer,e);n&&(t.labels=n),this.n_(t)}h_(e){let t={};t.database=ru(this.serializer),t.removeTarget=e,this.n_(t)}}class sS extends sE{constructor(e,t,n,r,i,s){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,n,r,s),this.serializer=i,this.P_=!1}get I_(){return this.P_}start(){this.P_=!1,this.lastStreamToken=void 0,super.start()}s_(){this.P_&&this.d_([])}u_(e,t){return this.connection.Mo("Write",e,t)}onMessage(e){var t,n;if(e.streamToken||_(),this.lastStreamToken=e.streamToken,this.P_){this.Ho.reset();let r=(t=e.writeResults,n=e.commitTime,t&&t.length>0?(void 0!==n||_(),t.map(e=>{let t;return(t=e.updateTime?rn(e.updateTime):rn(n)).isEqual(P.min())&&(t=rn(n)),new nT(t,e.transformResults||[])})):[]),i=rn(e.commitTime);return this.listener.T_(i,r)}return e.writeResults&&0!==e.writeResults.length&&_(),this.P_=!0,this.listener.E_()}A_(){let e={};e.database=ru(this.serializer),this.n_(e)}d_(e){let t={streamToken:this.lastStreamToken,writes:e.map(e=>rf(this.serializer,e))};this.n_(t)}}/**
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
 */class sx extends class{}{constructor(e,t,n,r){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=n,this.serializer=r,this.R_=!1}V_(){if(this.R_)throw new T(E.FAILED_PRECONDITION,"The client has already been terminated.")}bo(e,t,n){return this.V_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,i])=>this.connection.bo(e,t,n,r,i)).catch(e=>{throw"FirebaseError"===e.name?(e.code===E.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new T(E.UNKNOWN,e.toString())})}Fo(e,t,n,r){return this.V_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.connection.Fo(e,t,n,i,s,r)).catch(e=>{throw"FirebaseError"===e.name?(e.code===E.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new T(E.UNKNOWN,e.toString())})}terminate(){this.R_=!0}}class sD{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.f_=0,this.g_=null,this.p_=!0}y_(){0===this.f_&&(this.w_("Unknown"),this.g_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.g_=null,this.S_("Backend didn't respond within 10 seconds."),this.w_("Offline"),Promise.resolve())))}b_(e){"Online"===this.state?this.w_("Unknown"):(this.f_++,this.f_>=1&&(this.D_(),this.S_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.w_("Offline")))}set(e){this.D_(),this.f_=0,"Online"===e&&(this.p_=!1),this.w_(e)}w_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}S_(e){let t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.p_?(w(t),this.p_=!1):y("OnlineStateTracker",t)}D_(){null!==this.g_&&(this.g_.cancel(),this.g_=null)}}/**
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
 */class sC{constructor(e,t,n,r,i){this.localStore=e,this.datastore=t,this.asyncQueue=n,this.remoteSyncer={},this.C_=[],this.v_=new Map,this.F_=new Set,this.M_=[],this.x_=i,this.x_.so(e=>{n.enqueueAndForget(async()=>{sO(this)&&(y("RemoteStore","Restarting streams for network reachability change."),await async function(e){e.F_.add(4),await sA(e),e.O_.set("Unknown"),e.F_.delete(4),await sN(e)}(this))})}),this.O_=new sD(n,r)}}async function sN(e){if(sO(e))for(let t of e.M_)await t(!0)}async function sA(e){for(let t of e.M_)await t(!1)}function sk(e,t){e.v_.has(t.targetId)||(e.v_.set(t.targetId,t),sL(e)?sV(e):sJ(e).Yo()&&sF(e,t))}function sR(e,t){let n=sJ(e);e.v_.delete(t),n.Yo()&&sM(e,t),0===e.v_.size&&(n.Yo()?n.e_():sO(e)&&e.O_.set("Unknown"))}function sF(e,t){if(e.N_.Le(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(P.min())>0){let n=e.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(n)}sJ(e).l_(t)}function sM(e,t){e.N_.Le(t),sJ(e).h_(t)}function sV(e){e.N_=new n2({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),lt:t=>e.v_.get(t)||null,st:()=>e.datastore.serializer.databaseId}),sJ(e).start(),e.O_.y_()}function sL(e){return sO(e)&&!sJ(e).Jo()&&e.v_.size>0}function sO(e){return 0===e.F_.size}async function sP(e){e.v_.forEach((t,n)=>{sF(e,t)})}async function sq(e,t){e.N_=void 0,sL(e)?(e.O_.b_(t),sV(e)):e.O_.set("Unknown")}async function sU(e,t,n){if(e.O_.set("Online"),t instanceof n0&&2===t.state&&t.cause)try{await async function(e,t){let n=t.cause;for(let r of t.targetIds)e.v_.has(r)&&(await e.remoteSyncer.rejectListen(r,n),e.v_.delete(r),e.N_.removeTarget(r))}(e,t)}catch(n){y("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),n),await sB(e,n)}else if(t instanceof nJ?e.N_.Ge(t):t instanceof nZ?e.N_.Xe(t):e.N_.He(t),!n.isEqual(P.min()))try{let t=await i1(e.localStore);n.compareTo(t)>=0&&await function(e,t){let n=e.N_._t(t);return n.targetChanges.forEach((n,r)=>{if(n.resumeToken.approximateByteSize()>0){let i=e.v_.get(r);i&&e.v_.set(r,i.withResumeToken(n.resumeToken,t))}}),n.targetMismatches.forEach((t,n)=>{let r=e.v_.get(t);if(!r)return;e.v_.set(t,r.withResumeToken(e0.EMPTY_BYTE_STRING,r.snapshotVersion)),sM(e,t);let i=new r_(r.target,t,n,r.sequenceNumber);sF(e,i)}),e.remoteSyncer.applyRemoteEvent(n)}(e,n)}catch(t){y("RemoteStore","Failed to raise snapshot:",t),await sB(e,t)}}async function sB(e,t,n){if(!eo(t))throw t;e.F_.add(1),await sA(e),e.O_.set("Offline"),n||(n=()=>i1(e.localStore)),e.asyncQueue.enqueueRetryable(async()=>{y("RemoteStore","Retrying IndexedDB access"),await n(),e.F_.delete(1),await sN(e)})}function sK(e,t){return t().catch(n=>sB(e,n,t))}async function sz(e){let t=sZ(e),n=e.C_.length>0?e.C_[e.C_.length-1].batchId:-1;for(;sO(e)&&e.C_.length<10;)try{let r=await function(e,t){return e.persistence.runTransaction("Get next mutation batch","readonly",n=>(void 0===t&&(t=-1),e.mutationQueue.getNextMutationBatchAfterBatchId(n,t)))}(e.localStore,n);if(null===r){0===e.C_.length&&t.e_();break}n=r.batchId,function(e,t){e.C_.push(t);let n=sZ(e);n.Yo()&&n.I_&&n.d_(t.mutations)}(e,r)}catch(t){await sB(e,t)}sG(e)&&s$(e)}function sG(e){return sO(e)&&!sZ(e).Jo()&&e.C_.length>0}function s$(e){sZ(e).start()}async function sj(e){sZ(e).A_()}async function sQ(e){let t=sZ(e);for(let n of e.C_)t.d_(n.mutations)}async function sW(e,t,n){let r=e.C_.shift(),i=nq.from(r,t,n);await sK(e,()=>e.remoteSyncer.applySuccessfulWrite(i)),await sz(e)}async function sH(e,t){t&&sZ(e).I_&&await async function(e,t){var n;if(nK(n=t.code)&&n!==E.ABORTED){let n=e.C_.shift();sZ(e).Xo(),await sK(e,()=>e.remoteSyncer.rejectFailedWrite(n.batchId,t)),await sz(e)}}(e,t),sG(e)&&s$(e)}async function sY(e,t){e.asyncQueue.verifyOperationInProgress(),y("RemoteStore","RemoteStore received new credentials");let n=sO(e);e.F_.add(3),await sA(e),n&&e.O_.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.F_.delete(3),await sN(e)}async function sX(e,t){t?(e.F_.delete(2),await sN(e)):t||(e.F_.add(2),await sA(e),e.O_.set("Unknown"))}function sJ(e){var t,n,r;return e.B_||(e.B_=(t=e.datastore,n=e.asyncQueue,r={Io:sP.bind(null,e),Eo:sq.bind(null,e),c_:sU.bind(null,e)},t.V_(),new sT(n,t.connection,t.authCredentials,t.appCheckCredentials,t.serializer,r)),e.M_.push(async t=>{t?(e.B_.Xo(),sL(e)?sV(e):e.O_.set("Unknown")):(await e.B_.stop(),e.N_=void 0)})),e.B_}function sZ(e){var t,n,r;return e.L_||(e.L_=(t=e.datastore,n=e.asyncQueue,r={Io:sj.bind(null,e),Eo:sH.bind(null,e),E_:sQ.bind(null,e),T_:sW.bind(null,e)},t.V_(),new sS(n,t.connection,t.authCredentials,t.appCheckCredentials,t.serializer,r)),e.M_.push(async t=>{t?(e.L_.Xo(),await sz(e)):(await e.L_.stop(),e.C_.length>0&&(y("RemoteStore",`Stopping write stream with ${e.C_.length} pending writes`),e.C_=[]))})),e.L_}/**
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
 */class s0{constructor(e,t,n,r,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=n,this.op=r,this.removalCallback=i,this.deferred=new S,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(e=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,n,r,i){let s=Date.now()+n,a=new s0(e,t,s,r,i);return a.start(n),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new T(E.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function s1(e,t){if(w("AsyncQueue",`${t}: ${e}`),eo(e))return new T(E.UNAVAILABLE,`${t}: ${e}`);throw e}/**
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
 */class s2{constructor(e){this.comparator=e?(t,n)=>e(t,n)||z.comparator(t.key,n.key):(e,t)=>z.comparator(e.key,t.key),this.keyedMap=nr(),this.sortedSet=new e$(this.comparator)}static emptySet(e){return new s2(e.comparator)}has(e){return null!=this.keyedMap.get(e)}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){let t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,n)=>(e(t),!1))}add(e){let t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){let t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof s2)||this.size!==e.size)return!1;let t=this.sortedSet.getIterator(),n=e.sortedSet.getIterator();for(;t.hasNext();){let e=t.getNext().key,r=n.getNext().key;if(!e.isEqual(r))return!1}return!0}toString(){let e=[];return this.forEach(t=>{e.push(t.toString())}),0===e.length?"DocumentSet ()":"DocumentSet (\n  "+e.join("  \n")+"\n)"}copy(e,t){let n=new s2;return n.comparator=this.comparator,n.keyedMap=e,n.sortedSet=t,n}}/**
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
 */class s5{constructor(){this.k_=new e$(z.comparator)}track(e){let t=e.doc.key,n=this.k_.get(t);n?0!==e.type&&3===n.type?this.k_=this.k_.insert(t,e):3===e.type&&1!==n.type?this.k_=this.k_.insert(t,{type:n.type,doc:e.doc}):2===e.type&&2===n.type?this.k_=this.k_.insert(t,{type:2,doc:e.doc}):2===e.type&&0===n.type?this.k_=this.k_.insert(t,{type:0,doc:e.doc}):1===e.type&&0===n.type?this.k_=this.k_.remove(t):1===e.type&&2===n.type?this.k_=this.k_.insert(t,{type:1,doc:n.doc}):0===e.type&&1===n.type?this.k_=this.k_.insert(t,{type:2,doc:e.doc}):_():this.k_=this.k_.insert(t,e)}q_(){let e=[];return this.k_.inorderTraversal((t,n)=>{e.push(n)}),e}}class s4{constructor(e,t,n,r,i,s,a,o,l){this.query=e,this.docs=t,this.oldDocs=n,this.docChanges=r,this.mutatedKeys=i,this.fromCache=s,this.syncStateChanged=a,this.excludesMetadataChanges=o,this.hasCachedResults=l}static fromInitialDocuments(e,t,n,r,i){let s=[];return t.forEach(e=>{s.push({type:0,doc:e})}),new s4(e,t,s2.emptySet(t),s,n,r,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&t4(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;let t=this.docChanges,n=e.docChanges;if(t.length!==n.length)return!1;for(let e=0;e<t.length;e++)if(t[e].type!==n[e].type||!t[e].doc.isEqual(n[e].doc))return!1;return!0}}/**
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
 */class s8{constructor(){this.Q_=void 0,this.listeners=[]}}class s3{constructor(){this.queries=new ne(e=>t8(e),t4),this.onlineState="Unknown",this.K_=new Set}}async function s9(e,t){let n=t.query,r=!1,i=e.queries.get(n);if(i||(r=!0,i=new s8),r)try{i.Q_=await e.onListen(n)}catch(n){let e=s1(n,`Initialization of query '${t3(t.query)}' failed`);return void t.onError(e)}e.queries.set(n,i),i.listeners.push(t),t.U_(e.onlineState),i.Q_&&t.W_(i.Q_)&&at(e)}async function s6(e,t){let n=t.query,r=!1,i=e.queries.get(n);if(i){let e=i.listeners.indexOf(t);e>=0&&(i.listeners.splice(e,1),r=0===i.listeners.length)}if(r)return e.queries.delete(n),e.onUnlisten(n)}function s7(e,t){let n=!1;for(let r of t){let t=r.query,i=e.queries.get(t);if(i){for(let e of i.listeners)e.W_(r)&&(n=!0);i.Q_=r}}n&&at(e)}function ae(e,t,n){let r=e.queries.get(t);if(r)for(let e of r.listeners)e.onError(n);e.queries.delete(t)}function at(e){e.K_.forEach(e=>{e.next()})}class an{constructor(e,t,n){this.query=e,this.G_=t,this.z_=!1,this.j_=null,this.onlineState="Unknown",this.options=n||{}}W_(e){if(!this.options.includeMetadataChanges){let t=[];for(let n of e.docChanges)3!==n.type&&t.push(n);e=new s4(e.query,e.docs,e.oldDocs,t,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.z_?this.H_(e)&&(this.G_.next(e),t=!0):this.J_(e,this.onlineState)&&(this.Y_(e),t=!0),this.j_=e,t}onError(e){this.G_.error(e)}U_(e){this.onlineState=e;let t=!1;return this.j_&&!this.z_&&this.J_(this.j_,e)&&(this.Y_(this.j_),t=!0),t}J_(e,t){return!e.fromCache||(!this.options.Z_||!("Offline"!==t))&&(!e.docs.isEmpty()||e.hasCachedResults||"Offline"===t)}H_(e){if(e.docChanges.length>0)return!0;let t=this.j_&&this.j_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&!0===this.options.includeMetadataChanges}Y_(e){e=s4.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.z_=!0,this.G_.next(e)}}/**
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
 */class ar{constructor(e,t){this.X_=e,this.byteLength=t}ea(){return"metadata"in this.X_}}/**
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
 */class ai{constructor(e){this.serializer=e}Is(e){return ra(this.serializer,e)}ds(e){return e.metadata.exists?rd(this.serializer,e.document,!1):tv.newNoDocument(this.Is(e.metadata.name),this.Ts(e.metadata.readTime))}Ts(e){return rn(e)}}class as{constructor(e,t,n){this.ta=e,this.localStore=t,this.serializer=n,this.queries=[],this.documents=[],this.collectionGroups=new Set,this.progress=aa(e)}na(e){this.progress.bytesLoaded+=e.byteLength;let t=this.progress.documentsLoaded;if(e.X_.namedQuery)this.queries.push(e.X_.namedQuery);else if(e.X_.documentMetadata){this.documents.push({metadata:e.X_.documentMetadata}),e.X_.documentMetadata.exists||++t;let n=U.fromString(e.X_.documentMetadata.name);this.collectionGroups.add(n.get(n.length-2))}else e.X_.document&&(this.documents[this.documents.length-1].document=e.X_.document,++t);return t!==this.progress.documentsLoaded?(this.progress.documentsLoaded=t,Object.assign({},this.progress)):null}ra(e){let t=new Map,n=new ai(this.serializer);for(let r of e)if(r.metadata.queries){let e=n.Is(r.metadata.name);for(let n of r.metadata.queries){let r=(t.get(n)||nl()).add(e);t.set(n,r)}}return t}async complete(){let e=await i7(this.localStore,new ai(this.serializer),this.documents,this.ta.id),t=this.ra(this.documents);for(let e of this.queries)await se(this.localStore,e,t.get(e.name));return this.progress.taskState="Success",{progress:this.progress,ia:this.collectionGroups,sa:e}}}function aa(e){return{taskState:"Running",documentsLoaded:0,bytesLoaded:0,totalDocuments:e.totalDocuments,totalBytes:e.totalBytes}}/**
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
 */class ao{constructor(e){this.key=e}}class al{constructor(e){this.key=e}}class au{constructor(e,t){this.query=e,this.oa=t,this._a=null,this.hasCachedResults=!1,this.current=!1,this.aa=nl(),this.mutatedKeys=nl(),this.ua=t7(e),this.ca=new s2(this.ua)}get la(){return this.oa}ha(e,t){let n=t?t.Pa:new s5,r=t?t.ca:this.ca,i=t?t.mutatedKeys:this.mutatedKeys,s=r,a=!1,o="F"===this.query.limitType&&r.size===this.query.limit?r.last():null,l="L"===this.query.limitType&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal((e,t)=>{let u=r.get(e),c=t9(this.query,t)?t:null,h=!!u&&this.mutatedKeys.has(u.key),d=!!c&&(c.hasLocalMutations||this.mutatedKeys.has(c.key)&&c.hasCommittedMutations),f=!1;u&&c?u.data.isEqual(c.data)?h!==d&&(n.track({type:3,doc:c}),f=!0):this.Ia(u,c)||(n.track({type:2,doc:c}),f=!0,(o&&this.ua(c,o)>0||l&&0>this.ua(c,l))&&(a=!0)):!u&&c?(n.track({type:0,doc:c}),f=!0):u&&!c&&(n.track({type:1,doc:u}),f=!0,(o||l)&&(a=!0)),f&&(c?(s=s.add(c),i=d?i.add(e):i.delete(e)):(s=s.delete(e),i=i.delete(e)))}),null!==this.query.limit)for(;s.size>this.query.limit;){let e="F"===this.query.limitType?s.last():s.first();s=s.delete(e.key),i=i.delete(e.key),n.track({type:1,doc:e})}return{ca:s,Pa:n,es:a,mutatedKeys:i}}Ia(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,n){let r=this.ca;this.ca=e.ca,this.mutatedKeys=e.mutatedKeys;let i=e.Pa.q_();i.sort((e,t)=>(function(e,t){let n=e=>{switch(e){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return _()}};return n(e)-n(t)})(e.type,t.type)||this.ua(e.doc,t.doc)),this.da(n);let s=t?this.Ta():[],a=0===this.aa.size&&this.current?1:0,o=a!==this._a;return(this._a=a,0!==i.length||o)?{snapshot:new s4(this.query,e.ca,r,i,e.mutatedKeys,0===a,o,!1,!!n&&n.resumeToken.approximateByteSize()>0),Ea:s}:{Ea:s}}U_(e){return this.current&&"Offline"===e?(this.current=!1,this.applyChanges({ca:this.ca,Pa:new s5,mutatedKeys:this.mutatedKeys,es:!1},!1)):{Ea:[]}}Aa(e){return!this.oa.has(e)&&!!this.ca.has(e)&&!this.ca.get(e).hasLocalMutations}da(e){e&&(e.addedDocuments.forEach(e=>this.oa=this.oa.add(e)),e.modifiedDocuments.forEach(e=>{}),e.removedDocuments.forEach(e=>this.oa=this.oa.delete(e)),this.current=e.current)}Ta(){if(!this.current)return[];let e=this.aa;this.aa=nl(),this.ca.forEach(e=>{this.Aa(e.key)&&(this.aa=this.aa.add(e.key))});let t=[];return e.forEach(e=>{this.aa.has(e)||t.push(new al(e))}),this.aa.forEach(n=>{e.has(n)||t.push(new ao(n))}),t}Ra(e){this.oa=e.Ps,this.aa=nl();let t=this.ha(e.documents);return this.applyChanges(t,!0)}Va(){return s4.fromInitialDocuments(this.query,this.ca,this.mutatedKeys,0===this._a,this.hasCachedResults)}}class ac{constructor(e,t,n){this.query=e,this.targetId=t,this.view=n}}class ah{constructor(e){this.key=e,this.ma=!1}}class ad{constructor(e,t,n,r,i,s){this.localStore=e,this.remoteStore=t,this.eventManager=n,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=s,this.fa={},this.ga=new ne(e=>t8(e),t4),this.pa=new Map,this.ya=new Set,this.wa=new e$(z.comparator),this.Sa=new Map,this.ba=new iM,this.Da={},this.Ca=new Map,this.va=ic.Ln(),this.onlineState="Unknown",this.Fa=void 0}get isPrimaryClient(){return!0===this.Fa}}async function af(e,t){let n,r;let i=aB(e),s=i.ga.get(t);if(s)n=s.targetId,i.sharedClientState.addLocalQueryTarget(n),r=s.view.Va();else{let e=await i5(i.localStore,t1(t)),s=i.sharedClientState.addLocalQueryTarget(e.targetId);n=e.targetId,r=await am(i,t,n,"current"===s,e.resumeToken),i.isPrimaryClient&&sk(i.remoteStore,e)}return r}async function am(e,t,n,r,i){e.Ma=(t,n,r)=>(async function(e,t,n,r){let i=t.view.ha(n);i.es&&(i=await i8(e.localStore,t.query,!1).then(({documents:e})=>t.view.ha(e,i)));let s=r&&r.targetChanges.get(t.targetId),a=t.view.applyChanges(i,e.isPrimaryClient,s);return aD(e,t.targetId,a.Ea),a.snapshot})(e,t,n,r);let s=await i8(e.localStore,t,!0),a=new au(t,s.Ps),o=a.ha(s.documents),l=nX.createSynthesizedTargetChangeForCurrentChange(n,r&&"Offline"!==e.onlineState,i),u=a.applyChanges(o,e.isPrimaryClient,l);aD(e,n,u.Ea);let c=new ac(t,n,a);return e.ga.set(t,c),e.pa.has(n)?e.pa.get(n).push(t):e.pa.set(n,[t]),u.snapshot}async function ag(e,t){let n=e.ga.get(t),r=e.pa.get(n.targetId);if(r.length>1)return e.pa.set(n.targetId,r.filter(e=>!t4(e,t))),void e.ga.delete(t);e.isPrimaryClient?(e.sharedClientState.removeLocalQueryTarget(n.targetId),e.sharedClientState.isActiveQueryTarget(n.targetId)||await i4(e.localStore,n.targetId,!1).then(()=>{e.sharedClientState.clearQueryState(n.targetId),sR(e.remoteStore,n.targetId),aS(e,n.targetId)}).catch(et)):(aS(e,n.targetId),await i4(e.localStore,n.targetId,!0))}async function ap(e,t,n){let r=aK(e);try{var i;let e;let s=await function(e,t){let n,r;let i=O.now(),s=t.reduce((e,t)=>e.add(t.key),nl());return e.persistence.runTransaction("Locally write mutations","readwrite",a=>{let o=nt,l=nl();return e._s.getEntries(a,s).next(e=>{(o=e).forEach((e,t)=>{t.isValidDocument()||(l=l.add(e))})}).next(()=>e.localDocuments.getOverlayedDocuments(a,o)).next(r=>{n=r;let s=[];for(let e of t){let t=function(e,t){let n=null;for(let r of e.fieldTransforms){let e=t.data.field(r.field),i=nm(r.transform,e||null);null!=i&&(null===n&&(n=tw.empty()),n.set(r.field,i))}return n||null}(e,n.get(e.key).overlayedDocument);null!=t&&s.push(new nR(e.key,t,function e(t){let n=[];return ez(t.fields,(t,r)=>{let i=new K([t]);if(tf(r)){let t=e(r.mapValue).fields;if(0===t.length)n.push(i);else for(let e of t)n.push(i.child(e))}else n.push(i)}),new eX(n)}(t.value.mapValue),nS.exists(!0)))}return e.mutationQueue.addMutationBatch(a,i,s,t)}).next(t=>{r=t;let i=t.applyToLocalDocumentSet(n,l);return e.documentOverlayCache.saveOverlays(a,t.batchId,i)})}).then(()=>({batchId:r.batchId,changes:ni(n)}))}(r.localStore,t);r.sharedClientState.addPendingMutation(s.batchId),i=s.batchId,(e=r.Da[r.currentUser.toKey()])||(e=new e$(V)),e=e.insert(i,n),r.Da[r.currentUser.toKey()]=e,await aN(r,s.changes),await sz(r.remoteStore)}catch(t){let e=s1(t,"Failed to persist write");n.reject(e)}}async function ay(e,t){try{let n=await function(e,t){let n=t.snapshotVersion,r=e.rs;return e.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{let s=e._s.newChangeBuffer({trackRemovals:!0});r=e.rs;let a=[];t.targetChanges.forEach((s,o)=>{var l;let u=r.get(o);if(!u)return;a.push(e.Kr.removeMatchingKeys(i,s.removedDocuments,o).next(()=>e.Kr.addMatchingKeys(i,s.addedDocuments,o)));let c=u.withSequenceNumber(i.currentSequenceNumber);null!==t.targetMismatches.get(o)?c=c.withResumeToken(e0.EMPTY_BYTE_STRING,P.min()).withLastLimboFreeSnapshotVersion(P.min()):s.resumeToken.approximateByteSize()>0&&(c=c.withResumeToken(s.resumeToken,n)),r=r.insert(o,c),l=c,(0===u.resumeToken.approximateByteSize()||l.snapshotVersion.toMicroseconds()-u.snapshotVersion.toMicroseconds()>=3e8||s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size>0)&&a.push(e.Kr.updateTargetData(i,c))});let o=nt,l=nl();if(t.documentUpdates.forEach(n=>{t.resolvedLimboDocuments.has(n)&&a.push(e.persistence.referenceDelegate.updateLimboDocument(i,n))}),a.push(i2(i,s,t.documentUpdates).next(e=>{o=e.ls,l=e.hs})),!n.isEqual(P.min())){let t=e.Kr.getLastRemoteSnapshotVersion(i).next(t=>e.Kr.setTargetsMetadata(i,i.currentSequenceNumber,n));a.push(t)}return en.waitFor(a).next(()=>s.apply(i)).next(()=>e.localDocuments.getLocalViewOfDocuments(i,o,l)).next(()=>o)}).then(t=>(e.rs=r,t))}(e.localStore,t);t.targetChanges.forEach((t,n)=>{let r=e.Sa.get(n);r&&(t.addedDocuments.size+t.modifiedDocuments.size+t.removedDocuments.size<=1||_(),t.addedDocuments.size>0?r.ma=!0:t.modifiedDocuments.size>0?r.ma||_():t.removedDocuments.size>0&&(r.ma||_(),r.ma=!1))}),await aN(e,n,t)}catch(e){await et(e)}}function aw(e,t,n){var r;if(e.isPrimaryClient&&0===n||!e.isPrimaryClient&&1===n){let n;let i=[];e.ga.forEach((e,n)=>{let r=n.view.U_(t);r.snapshot&&i.push(r.snapshot)}),(r=e.eventManager).onlineState=t,n=!1,r.queries.forEach((e,r)=>{for(let e of r.listeners)e.U_(t)&&(n=!0)}),n&&at(r),i.length&&e.fa.c_(i),e.onlineState=t,e.isPrimaryClient&&e.sharedClientState.setOnlineState(t)}}async function av(e,t,n){e.sharedClientState.updateQueryState(t,"rejected",n);let r=e.Sa.get(t),i=r&&r.key;if(i){let n=new e$(z.comparator);n=n.insert(i,tv.newNoDocument(i,P.min()));let r=nl().add(i),s=new nY(P.min(),new Map,new e$(V),n,r);await ay(e,s),e.wa=e.wa.remove(i),e.Sa.delete(t),aC(e)}else await i4(e.localStore,t,!1).then(()=>aS(e,t,n)).catch(et)}async function aI(e,t){var n;let r=t.batch.batchId;try{let i=await (n=e.localStore).persistence.runTransaction("Acknowledge batch","readwrite-primary",e=>{let r=t.batch.keys(),i=n._s.newChangeBuffer({trackRemovals:!0});return(function(e,t,n,r){let i=n.batch,s=i.keys(),a=en.resolve();return s.forEach(e=>{a=a.next(()=>r.getEntry(t,e)).next(t=>{let s=n.docVersions.get(e);null!==s||_(),0>t.version.compareTo(s)&&(i.applyToRemoteDocument(t,n),t.isValidDocument()&&(t.setReadTime(n.commitVersion),r.addEntry(t)))})}),a.next(()=>e.mutationQueue.removeMutationBatch(t,i))})(n,e,t,i).next(()=>i.apply(e)).next(()=>n.mutationQueue.performConsistencyCheck(e)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(e,r,t.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,function(e){let t=nl();for(let n=0;n<e.mutationResults.length;++n)e.mutationResults[n].transformResults.length>0&&(t=t.add(e.batch.mutations[n].key));return t}(t))).next(()=>n.localDocuments.getDocuments(e,r))});aT(e,r,null),aE(e,r),e.sharedClientState.updateMutationState(r,"acknowledged"),await aN(e,i)}catch(e){await et(e)}}async function a_(e,t,n){var r;try{let i=await (r=e.localStore).persistence.runTransaction("Reject batch","readwrite-primary",e=>{let n;return r.mutationQueue.lookupMutationBatch(e,t).next(t=>(null!==t||_(),n=t.keys(),r.mutationQueue.removeMutationBatch(e,t))).next(()=>r.mutationQueue.performConsistencyCheck(e)).next(()=>r.documentOverlayCache.removeOverlaysForBatchId(e,n,t)).next(()=>r.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,n)).next(()=>r.localDocuments.getDocuments(e,n))});aT(e,t,n),aE(e,t),e.sharedClientState.updateMutationState(t,"rejected",n),await aN(e,i)}catch(e){await et(e)}}async function ab(e,t){var n;sO(e.remoteStore)||y("SyncEngine","The network is disabled. The task returned by 'awaitPendingWrites()' will not complete until the network is enabled.");try{let r=await (n=e.localStore).persistence.runTransaction("Get highest unacknowledged batch id","readonly",e=>n.mutationQueue.getHighestUnacknowledgedBatchId(e));if(-1===r)return void t.resolve();let i=e.Ca.get(r)||[];i.push(t),e.Ca.set(r,i)}catch(n){let e=s1(n,"Initialization of waitForPendingWrites() operation failed");t.reject(e)}}function aE(e,t){(e.Ca.get(t)||[]).forEach(e=>{e.resolve()}),e.Ca.delete(t)}function aT(e,t,n){let r=e.Da[e.currentUser.toKey()];if(r){let i=r.get(t);i&&(n?i.reject(n):i.resolve(),r=r.remove(t)),e.Da[e.currentUser.toKey()]=r}}function aS(e,t,n=null){for(let r of(e.sharedClientState.removeLocalQueryTarget(t),e.pa.get(t)))e.ga.delete(r),n&&e.fa.xa(r,n);e.pa.delete(t),e.isPrimaryClient&&e.ba.mr(t).forEach(t=>{e.ba.containsKey(t)||ax(e,t)})}function ax(e,t){e.ya.delete(t.path.canonicalString());let n=e.wa.get(t);null!==n&&(sR(e.remoteStore,n),e.wa=e.wa.remove(t),e.Sa.delete(n),aC(e))}function aD(e,t,n){for(let r of n)r instanceof ao?(e.ba.addReference(r.key,t),function(e,t){let n=t.key,r=n.path.canonicalString();e.wa.get(n)||e.ya.has(r)||(y("SyncEngine","New document in limbo: "+n),e.ya.add(r),aC(e))}(e,r)):r instanceof al?(y("SyncEngine","Document no longer in limbo: "+r.key),e.ba.removeReference(r.key,t),e.ba.containsKey(r.key)||ax(e,r.key)):_()}function aC(e){for(;e.ya.size>0&&e.wa.size<e.maxConcurrentLimboResolutions;){let t=e.ya.values().next().value;e.ya.delete(t);let n=new z(U.fromString(t)),r=e.va.next();e.Sa.set(r,new ah(n)),e.wa=e.wa.insert(n,r),sk(e.remoteStore,new r_(t1(tH(n.path)),r,"TargetPurposeLimboResolution",em.ae))}}async function aN(e,t,n){let r=[],i=[],s=[];e.ga.isEmpty()||(e.ga.forEach((a,o)=>{s.push(e.Ma(o,t,n).then(t=>{if((t||n)&&e.isPrimaryClient&&e.sharedClientState.updateQueryState(o.targetId,(null==t?void 0:t.fromCache)?"not-current":"current"),t){r.push(t);let e=iY.$i(o.targetId,t);i.push(e)}}))}),await Promise.all(s),e.fa.c_(r),await async function(e,t){try{await e.persistence.runTransaction("notifyLocalViewChanges","readwrite",n=>en.forEach(t,t=>en.forEach(t.Qi,r=>e.persistence.referenceDelegate.addReference(n,t.targetId,r)).next(()=>en.forEach(t.Ki,r=>e.persistence.referenceDelegate.removeReference(n,t.targetId,r)))))}catch(e){if(!eo(e))throw e;y("LocalStore","Failed to update sequence numbers: "+e)}for(let n of t){let t=n.targetId;if(!n.fromCache){let n=e.rs.get(t),r=n.snapshotVersion,i=n.withLastLimboFreeSnapshotVersion(r);e.rs=e.rs.insert(t,i)}}}(e.localStore,i))}async function aA(e,t){if(!e.currentUser.isEqual(t)){y("SyncEngine","User change. New user:",t.toKey());let n=await i0(e.localStore,t);e.currentUser=t,e.Ca.forEach(e=>{e.forEach(e=>{e.reject(new T(E.CANCELLED,"'waitForPendingWrites' promise is rejected due to a user change."))})}),e.Ca.clear(),e.sharedClientState.handleUserChange(t,n.removedBatchIds,n.addedBatchIds),await aN(e,n.cs)}}function ak(e,t){let n=e.Sa.get(t);if(n&&n.ma)return nl().add(n.key);{let n=nl(),r=e.pa.get(t);if(!r)return n;for(let t of r){let r=e.ga.get(t);n=n.unionWith(r.view.la)}return n}}async function aR(e,t){let n=await i8(e.localStore,t.query,!0),r=t.view.Ra(n);return e.isPrimaryClient&&aD(e,t.targetId,r.Ea),r}async function aF(e,t){return i9(e.localStore,t).then(t=>aN(e,t))}async function aM(e,t,n,r){let i=await function(e,t){let n=e.mutationQueue;return e.persistence.runTransaction("Lookup mutation documents","readonly",r=>n.Fn(r,t).next(t=>t?e.localDocuments.getDocuments(r,t):en.resolve(null)))}(e.localStore,t);null!==i?("pending"===n?await sz(e.remoteStore):"acknowledged"===n||"rejected"===n?(aT(e,t,r||null),aE(e,t),function(e,t){e.mutationQueue.xn(t)}(e.localStore,t)):_(),await aN(e,i)):y("SyncEngine","Cannot apply mutation batch with id: "+t)}async function aV(e,t){if(aB(e),aK(e),!0===t&&!0!==e.Fa){let t=e.sharedClientState.getAllActiveQueryTargets(),n=await aL(e,t.toArray());for(let t of(e.Fa=!0,await sX(e.remoteStore,!0),n))sk(e.remoteStore,t)}else if(!1===t&&!1!==e.Fa){let t=[],n=Promise.resolve();e.pa.forEach((r,i)=>{e.sharedClientState.isLocalQueryTarget(i)?t.push(i):n=n.then(()=>(aS(e,i),i4(e.localStore,i,!0))),sR(e.remoteStore,i)}),await n,await aL(e,t),e.Sa.forEach((t,n)=>{sR(e.remoteStore,n)}),e.ba.gr(),e.Sa=new Map,e.wa=new e$(z.comparator),e.Fa=!1,await sX(e.remoteStore,!1)}}async function aL(e,t,n){let r=[],i=[];for(let n of t){let t;let s=e.pa.get(n);if(s&&0!==s.length)for(let n of(t=await i5(e.localStore,t1(s[0])),s)){let t=e.ga.get(n),r=await aR(e,t);r.snapshot&&i.push(r.snapshot)}else{let r=await i3(e.localStore,n);t=await i5(e.localStore,r),await am(e,aO(r),n,!1,t.resumeToken)}r.push(t)}return e.fa.c_(i),r}function aO(e){var t,n,r,i,s,a,o;return t=e.path,n=e.collectionGroup,r=e.orderBy,i=e.filters,s=e.limit,a=e.startAt,o=e.endAt,new tW(t,n,r,i,s,"F",a,o)}function aP(e){return e.localStore.persistence.ki()}async function aq(e,t,n,r){if(e.Fa)return void y("SyncEngine","Ignoring unexpected query state notification.");let i=e.pa.get(t);if(i&&i.length>0)switch(n){case"current":case"not-current":{let r=await i9(e.localStore,t6(i[0])),s=nY.createSynthesizedRemoteEventForCurrentChange(t,"current"===n,e0.EMPTY_BYTE_STRING);await aN(e,r,s);break}case"rejected":await i4(e.localStore,t,!0),aS(e,t,r);break;default:_()}}async function aU(e,t,n){let r=aB(e);if(r.Fa){for(let e of t){if(r.pa.has(e)){y("SyncEngine","Adding an already active target "+e);continue}let t=await i3(r.localStore,e),n=await i5(r.localStore,t);await am(r,aO(t),n.targetId,!1,n.resumeToken),sk(r.remoteStore,n)}for(let e of n)r.pa.has(e)&&await i4(r.localStore,e,!1).then(()=>{sR(r.remoteStore,e),aS(r,e)}).catch(et)}}function aB(e){return e.remoteStore.remoteSyncer.applyRemoteEvent=ay.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=ak.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=av.bind(null,e),e.fa.c_=s7.bind(null,e.eventManager),e.fa.xa=ae.bind(null,e.eventManager),e}function aK(e){return e.remoteStore.remoteSyncer.applySuccessfulWrite=aI.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=a_.bind(null,e),e}class az{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=s_(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,t){return null}createIndexBackfillerScheduler(e,t){return null}createLocalStore(e){var t,n,r,i;return t=this.persistence,n=new iJ,r=e.initialUser,i=this.serializer,new iZ(t,n,r,i)}createPersistence(e){return new iU(iK.Jr,this.serializer)}createSharedClientState(e){return new sc}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class aG extends az{constructor(e,t,n){super(),this.Na=e,this.cacheSizeBytes=t,this.forceOwnership=n,this.synchronizeTabs=!1}async initialize(e){await super.initialize(e),await this.Na.initialize(this,e),await aK(this.Na.syncEngine),await sz(this.Na.remoteStore),await this.persistence.gi(()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve()))}createLocalStore(e){var t,n,r,i;return t=this.persistence,n=new iJ,r=e.initialUser,i=this.serializer,new iZ(t,n,r,i)}createGarbageCollectionScheduler(e,t){let n=this.persistence.referenceDelegate.garbageCollector;return new iw(n,e.asyncQueue,t)}createIndexBackfillerScheduler(e,t){let n=new ef(t,this.persistence);return new ed(e.asyncQueue,n)}createPersistence(e){let t=iH(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),n=void 0!==this.cacheSizeBytes?it.withCacheSize(this.cacheSizeBytes):it.DEFAULT;return new ij(this.synchronizeTabs,t,e.clientId,n,e.asyncQueue,sv(),sI(),this.serializer,this.sharedClientState,!!this.forceOwnership)}createSharedClientState(e){return new sc}}class a$ extends aG{constructor(e,t){super(e,t,!1),this.Na=e,this.cacheSizeBytes=t,this.synchronizeTabs=!0}async initialize(e){await super.initialize(e);let t=this.Na.syncEngine;this.sharedClientState instanceof su&&(this.sharedClientState.syncEngine={Xs:aM.bind(null,t),eo:aq.bind(null,t),no:aU.bind(null,t),ki:aP.bind(null,t),Zs:aF.bind(null,t)},await this.sharedClientState.start()),await this.persistence.gi(async e=>{await aV(this.Na.syncEngine,e),this.gcScheduler&&(e&&!this.gcScheduler.started?this.gcScheduler.start():e||this.gcScheduler.stop()),this.indexBackfillerScheduler&&(e&&!this.indexBackfillerScheduler.started?this.indexBackfillerScheduler.start():e||this.indexBackfillerScheduler.stop())})}createSharedClientState(e){let t=sv();if(!su.C(t))throw new T(E.UNIMPLEMENTED,"IndexedDB persistence is only available on platforms that support LocalStorage.");let n=iH(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey);return new su(t,e.asyncQueue,n,e.clientId,e.initialUser)}}class aj{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=e=>aw(this.syncEngine,e,1),this.remoteStore.remoteSyncer.handleCredentialChange=aA.bind(null,this.syncEngine),await sX(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new s3}createDatastore(e){var t,n,r;let i=s_(e.databaseInfo.databaseId),s=(t=e.databaseInfo,new sw(t));return n=e.authCredentials,r=e.appCheckCredentials,new sx(n,r,s,i)}createRemoteStore(e){var t,n,r,i;return t=this.localStore,n=this.datastore,r=e.asyncQueue,i=sd.C()?new sd:new sh,new sC(t,n,r,e=>aw(this.syncEngine,e,0),i)}createSyncEngine(e,t){return function(e,t,n,r,i,s,a){let o=new ad(e,t,n,r,i,s);return a&&(o.Fa=!0),o}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}terminate(){return async function(e){y("RemoteStore","RemoteStore shutting down."),e.F_.add(5),await sA(e),e.x_.shutdown(),e.O_.set("Unknown")}(this.remoteStore)}}/**
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
 */function aQ(e,t=10240){let n=0;return{async read(){if(n<e.byteLength){let r={value:e.slice(n,n+t),done:!1};return n+=t,r}return{done:!0}},async cancel(){},releaseLock(){},closed:Promise.resolve()}}/**
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
 */class aW{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Ba(this.observer.next,e)}error(e){this.observer.error?this.Ba(this.observer.error,e):w("Uncaught Error in snapshot listener:",e.toString())}La(){this.muted=!0}Ba(e,t){this.muted||setTimeout(()=>{this.muted||e(t)},0)}}/**
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
 */class aH{constructor(e,t){this.ka=e,this.serializer=t,this.metadata=new S,this.buffer=new Uint8Array,this.qa=new TextDecoder("utf-8"),this.Qa().then(e=>{e&&e.ea()?this.metadata.resolve(e.X_.metadata):this.metadata.reject(Error(`The first element of the bundle is not a metadata, it is
             ${JSON.stringify(null==e?void 0:e.X_)}`))},e=>this.metadata.reject(e))}close(){return this.ka.cancel()}async getMetadata(){return this.metadata.promise}async Oa(){return await this.getMetadata(),this.Qa()}async Qa(){let e=await this.Ka();if(null===e)return null;let t=this.qa.decode(e),n=Number(t);isNaN(n)&&this.$a(`length string (${t}) is not valid number`);let r=await this.Ua(n);return new ar(JSON.parse(r),e.length+n)}Wa(){return this.buffer.findIndex(e=>123===e)}async Ka(){for(;0>this.Wa()&&!await this.Ga(););if(0===this.buffer.length)return null;let e=this.Wa();e<0&&this.$a("Reached the end of bundle when a length string is expected.");let t=this.buffer.slice(0,e);return this.buffer=this.buffer.slice(e),t}async Ua(e){for(;this.buffer.length<e;)await this.Ga()&&this.$a("Reached the end of bundle when more is expected.");let t=this.qa.decode(this.buffer.slice(0,e));return this.buffer=this.buffer.slice(e),t}$a(e){throw this.ka.cancel(),Error(`Invalid bundle format: ${e}`)}async Ga(){let e=await this.ka.read();if(!e.done){let t=new Uint8Array(this.buffer.length+e.value.length);t.set(this.buffer),t.set(e.value,this.buffer.length),this.buffer=t}return e.done}}/**
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
 */class aY{constructor(e){this.datastore=e,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastWriteError=null,this.writtenDocs=new Set}async lookup(e){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw new T(E.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes.");let t=await async function(e,t){let n=ru(e.serializer)+"/documents",r={documents:t.map(t=>rs(e.serializer,t))},i=await e.Fo("BatchGetDocuments",n,r,t.length),s=new Map;i.forEach(t=>{var n;let r=(n=e.serializer,"found"in t?function(e,t){t.found||_(),t.found.name,t.found.updateTime;let n=ra(e,t.found.name),r=rn(t.found.updateTime),i=t.found.createTime?rn(t.found.createTime):P.min(),s=new tw({mapValue:{fields:t.found.fields}});return tv.newFoundDocument(n,r,i,s)}(n,t):"missing"in t?function(e,t){t.missing||_(),t.readTime||_();let n=ra(e,t.missing),r=rn(t.readTime);return tv.newNoDocument(n,r)}(n,t):_());s.set(r.key.toString(),r)});let a=[];return t.forEach(e=>{let t=s.get(e.toString());t||_(),a.push(t)}),a}(this.datastore,e);return t.forEach(e=>this.recordVersion(e)),t}set(e,t){this.write(t.toMutation(e,this.precondition(e))),this.writtenDocs.add(e.toString())}update(e,t){try{this.write(t.toMutation(e,this.preconditionForUpdate(e)))}catch(e){this.lastWriteError=e}this.writtenDocs.add(e.toString())}delete(e){this.write(new nL(e,this.precondition(e))),this.writtenDocs.add(e.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastWriteError)throw this.lastWriteError;let e=this.readVersions;this.mutations.forEach(t=>{e.delete(t.key.toString())}),e.forEach((e,t)=>{let n=z.fromPath(t);this.mutations.push(new nO(n,this.precondition(n)))}),await async function(e,t){let n=ru(e.serializer)+"/documents",r={writes:t.map(t=>rf(e.serializer,t))};await e.bo("Commit",n,r)}(this.datastore,this.mutations),this.committed=!0}recordVersion(e){let t;if(e.isFoundDocument())t=e.version;else{if(!e.isNoDocument())throw _();t=P.min()}let n=this.readVersions.get(e.key.toString());if(n){if(!t.isEqual(n))throw new T(E.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(e.key.toString(),t)}precondition(e){let t=this.readVersions.get(e.toString());return!this.writtenDocs.has(e.toString())&&t?t.isEqual(P.min())?nS.exists(!1):nS.updateTime(t):nS.none()}preconditionForUpdate(e){let t=this.readVersions.get(e.toString());if(!this.writtenDocs.has(e.toString())&&t){if(t.isEqual(P.min()))throw new T(E.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return nS.updateTime(t)}return nS.exists(!0)}write(e){this.ensureCommitNotCalled(),this.mutations.push(e)}ensureCommitNotCalled(){}}/**
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
 */class aX{constructor(e,t,n,r,i){this.asyncQueue=e,this.datastore=t,this.options=n,this.updateFunction=r,this.deferred=i,this.za=n.maxAttempts,this.Ho=new sb(this.asyncQueue,"transaction_retry")}run(){this.za-=1,this.ja()}ja(){this.Ho.Qo(async()=>{let e=new aY(this.datastore),t=this.Ha(e);t&&t.then(t=>{this.asyncQueue.enqueueAndForget(()=>e.commit().then(()=>{this.deferred.resolve(t)}).catch(e=>{this.Ja(e)}))}).catch(e=>{this.Ja(e)})})}Ha(e){try{let t=this.updateFunction(e);return!eg(t)&&t.catch&&t.then?t:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(e){return this.deferred.reject(e),null}}Ja(e){this.za>0&&this.Ya(e)?(this.za-=1,this.asyncQueue.enqueueAndForget(()=>(this.ja(),Promise.resolve()))):this.deferred.reject(e)}Ya(e){if("FirebaseError"===e.name){let t=e.code;return"aborted"===t||"failed-precondition"===t||"already-exists"===t||!nK(t)}return!1}}/**
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
 */class aJ{constructor(e,t,n,r){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=n,this.databaseInfo=r,this.user=d.UNAUTHENTICATED,this.clientId=M.V(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(n,async e=>{y("FirestoreClient","Received user=",e.uid),await this.authCredentialListener(e),this.user=e}),this.appCheckCredentials.start(n,e=>(y("FirestoreClient","Received new app check token=",e),this.appCheckCredentialListener(e,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new T(E.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();let e=new S;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){let t=s1(n,"Failed to shutdown persistence");e.reject(t)}}),e.promise}}async function aZ(e,t){e.asyncQueue.verifyOperationInProgress(),y("FirestoreClient","Initializing OfflineComponentProvider");let n=await e.getConfiguration();await t.initialize(n);let r=n.initialUser;e.setCredentialChangeListener(async e=>{r.isEqual(e)||(await i0(t.localStore,e),r=e)}),t.persistence.setDatabaseDeletedListener(()=>e.terminate()),e._offlineComponents=t}async function a0(e,t){e.asyncQueue.verifyOperationInProgress();let n=await a2(e);y("FirestoreClient","Initializing OnlineComponentProvider");let r=await e.getConfiguration();await t.initialize(n,r),e.setCredentialChangeListener(e=>sY(t.remoteStore,e)),e.setAppCheckTokenChangeListener((e,n)=>sY(t.remoteStore,n)),e._onlineComponents=t}function a1(e){return"FirebaseError"===e.name?e.code===E.FAILED_PRECONDITION||e.code===E.UNIMPLEMENTED:!("undefined"!=typeof DOMException&&e instanceof DOMException)||22===e.code||20===e.code||11===e.code}async function a2(e){if(!e._offlineComponents){if(e._uninitializedComponentsProvider){y("FirestoreClient","Using user provided OfflineComponentProvider");try{await aZ(e,e._uninitializedComponentsProvider._offline)}catch(t){if(!a1(t))throw t;v("Error using user provided cache. Falling back to memory cache: "+t),await aZ(e,new az)}}else y("FirestoreClient","Using default OfflineComponentProvider"),await aZ(e,new az)}return e._offlineComponents}async function a5(e){return e._onlineComponents||(e._uninitializedComponentsProvider?(y("FirestoreClient","Using user provided OnlineComponentProvider"),await a0(e,e._uninitializedComponentsProvider._online)):(y("FirestoreClient","Using default OnlineComponentProvider"),await a0(e,new aj))),e._onlineComponents}function a4(e){return a2(e).then(e=>e.persistence)}function a8(e){return a2(e).then(e=>e.localStore)}function a3(e){return a5(e).then(e=>e.remoteStore)}function a9(e){return a5(e).then(e=>e.syncEngine)}async function a6(e){let t=await a5(e),n=t.eventManager;return n.onListen=af.bind(null,t.syncEngine),n.onUnlisten=ag.bind(null,t.syncEngine),n}function a7(e,t,n={}){let r=new S;return e.asyncQueue.enqueueAndForget(async()=>(function(e,t,n,r,i){let s=new aW({next:s=>{t.enqueueAndForget(()=>s6(e,a));let o=s.docs.has(n);!o&&s.fromCache?i.reject(new T(E.UNAVAILABLE,"Failed to get document because the client is offline.")):o&&s.fromCache&&r&&"server"===r.source?i.reject(new T(E.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):i.resolve(s)},error:e=>i.reject(e)}),a=new an(tH(n.path),s,{includeMetadataChanges:!0,Z_:!0});return s9(e,a)})(await a6(e),e.asyncQueue,t,n,r)),r.promise}function oe(e,t,n={}){let r=new S;return e.asyncQueue.enqueueAndForget(async()=>(function(e,t,n,r,i){let s=new aW({next:n=>{t.enqueueAndForget(()=>s6(e,a)),n.fromCache&&"server"===r.source?i.reject(new T(E.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):i.resolve(n)},error:e=>i.reject(e)}),a=new an(n,s,{includeMetadataChanges:!0,Z_:!0});return s9(e,a)})(await a6(e),e.asyncQueue,t,n,r)),r.promise}/**
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
 */function ot(e){let t={};return void 0!==e.timeoutSeconds&&(t.timeoutSeconds=e.timeoutSeconds),t}/**
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
 */let on=new Map;/**
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
 */function or(e,t,n){if(!n)throw new T(E.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function oi(e,t,n,r){if(!0===t&&!0===r)throw new T(E.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}function os(e){if(!z.isDocumentKey(e))throw new T(E.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function oa(e){if(z.isDocumentKey(e))throw new T(E.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function oo(e){if(void 0===e)return"undefined";if(null===e)return"null";if("string"==typeof e)return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if("number"==typeof e||"boolean"==typeof e)return""+e;if("object"==typeof e){if(e instanceof Array)return"an array";{var t;let n=(t=e).constructor?t.constructor.name:null;return n?`a custom ${n} object`:"an object"}}return"function"==typeof e?"a function":_()}function ol(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new T(E.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{let n=oo(e);throw new T(E.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}function ou(e,t){if(t<=0)throw new T(E.INVALID_ARGUMENT,`Function ${e}() requires a positive number, but it was: ${t}.`)}/**
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
 */class oc{constructor(e){var t,n;if(void 0===e.host){if(void 0!==e.ssl)throw new T(E.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=null===(t=e.ssl)||void 0===t||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,void 0===e.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==e.cacheSizeBytes&&e.cacheSizeBytes<1048576)throw new T(E.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}oi("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:void 0===e.experimentalAutoDetectLongPolling?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=ot(null!==(n=e.experimentalLongPollingOptions)&&void 0!==n?n:{}),function(e){if(void 0!==e.timeoutSeconds){if(isNaN(e.timeoutSeconds))throw new T(E.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (must not be NaN)`);if(e.timeoutSeconds<5)throw new T(E.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (minimum allowed value is 5)`);if(e.timeoutSeconds>30)throw new T(E.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){var t,n;return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(t=this.experimentalLongPollingOptions,n=e.experimentalLongPollingOptions,t.timeoutSeconds===n.timeoutSeconds)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class oh{constructor(e,t,n,r){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=n,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new oc({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new T(E.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(e){if(this._settingsFrozen)throw new T(E.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new oc(e),void 0!==e.credentials&&(this._authCredentials=function(e){if(!e)return new D;switch(e.type){case"firstParty":return new k(e.sessionIndex||"0",e.iamToken||null,e.authTokenFactory||null);case"provider":return e.client;default:throw new T(E.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){let t=on.get(e);t&&(y("ComponentProvider","Removing Datastore"),on.delete(e),t.terminate())}(this),Promise.resolve()}}function od(e,t,n,r={}){var i;let s=(e=ol(e,oh))._getSettings(),a=`${t}:${n}`;if("firestore.googleapis.com"!==s.host&&s.host!==a&&v("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),e._setSettings(Object.assign(Object.assign({},s),{host:a,ssl:!1})),r.mockUserToken){let t,n;if("string"==typeof r.mockUserToken)t=r.mockUserToken,n=d.MOCK_USER;else{t=(0,l.Sg)(r.mockUserToken,null===(i=e._app)||void 0===i?void 0:i.options.projectId);let s=r.mockUserToken.sub||r.mockUserToken.user_id;if(!s)throw new T(E.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");n=new d(s)}e._authCredentials=new C(new x(t,n))}}/**
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
 */class of{constructor(e,t,n){this.converter=t,this._query=n,this.type="query",this.firestore=e}withConverter(e){return new of(this.firestore,e,this._query)}}class om{constructor(e,t,n){this.converter=t,this._key=n,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new og(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new om(this.firestore,e,this._key)}}class og extends of{constructor(e,t,n){super(e,t,tH(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){let e=this._path.popLast();return e.isEmpty()?null:new om(this.firestore,null,new z(e))}withConverter(e){return new og(this.firestore,e,this._path)}}function op(e,t,...n){if(e=(0,l.m9)(e),or("collection","path",t),e instanceof oh){let r=U.fromString(t,...n);return oa(r),new og(e,null,r)}{if(!(e instanceof om||e instanceof og))throw new T(E.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");let r=e._path.child(U.fromString(t,...n));return oa(r),new og(e.firestore,null,r)}}function oy(e,t){if(e=ol(e,oh),or("collectionGroup","collection id",t),t.indexOf("/")>=0)throw new T(E.INVALID_ARGUMENT,`Invalid collection ID '${t}' passed to function collectionGroup(). Collection IDs must not contain '/'.`);return new of(e,null,new tW(U.emptyPath(),t))}function ow(e,t,...n){if(e=(0,l.m9)(e),1==arguments.length&&(t=M.V()),or("doc","path",t),e instanceof oh){let r=U.fromString(t,...n);return os(r),new om(e,null,new z(r))}{if(!(e instanceof om||e instanceof og))throw new T(E.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");let r=e._path.child(U.fromString(t,...n));return os(r),new om(e.firestore,e instanceof og?e.converter:null,new z(r))}}function ov(e,t){return e=(0,l.m9)(e),t=(0,l.m9)(t),(e instanceof om||e instanceof og)&&(t instanceof om||t instanceof og)&&e.firestore===t.firestore&&e.path===t.path&&e.converter===t.converter}function oI(e,t){return e=(0,l.m9)(e),t=(0,l.m9)(t),e instanceof of&&t instanceof of&&e.firestore===t.firestore&&t4(e._query,t._query)&&e.converter===t.converter}/**
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
 */class o_{constructor(){this.Za=Promise.resolve(),this.Xa=[],this.eu=!1,this.tu=[],this.nu=null,this.ru=!1,this.iu=!1,this.su=[],this.Ho=new sb(this,"async_queue_retry"),this.ou=()=>{let e=sI();e&&y("AsyncQueue","Visibility state changed to "+e.visibilityState),this.Ho.$o()};let e=sI();e&&"function"==typeof e.addEventListener&&e.addEventListener("visibilitychange",this.ou)}get isShuttingDown(){return this.eu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this._u(),this.au(e)}enterRestrictedMode(e){if(!this.eu){this.eu=!0,this.iu=e||!1;let t=sI();t&&"function"==typeof t.removeEventListener&&t.removeEventListener("visibilitychange",this.ou)}}enqueue(e){if(this._u(),this.eu)return new Promise(()=>{});let t=new S;return this.au(()=>this.eu&&this.iu?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Xa.push(e),this.uu()))}async uu(){if(0!==this.Xa.length){try{await this.Xa[0](),this.Xa.shift(),this.Ho.reset()}catch(e){if(!eo(e))throw e;y("AsyncQueue","Operation failed with retryable error: "+e)}this.Xa.length>0&&this.Ho.Qo(()=>this.uu())}}au(e){let t=this.Za.then(()=>(this.ru=!0,e().catch(e=>{let t;this.nu=e,this.ru=!1;let n=(t=e.message||"",e.stack&&(t=e.stack.includes(e.message)?e.stack:e.message+"\n"+e.stack),t);throw w("INTERNAL UNHANDLED ERROR: ",n),e}).then(e=>(this.ru=!1,e))));return this.Za=t,t}enqueueAfterDelay(e,t,n){this._u(),this.su.indexOf(e)>-1&&(t=0);let r=s0.createAndSchedule(this,e,t,n,e=>this.cu(e));return this.tu.push(r),r}_u(){this.nu&&_()}verifyOperationInProgress(){}async lu(){let e;do e=this.Za,await e;while(e!==this.Za)}hu(e){for(let t of this.tu)if(t.timerId===e)return!0;return!1}Pu(e){return this.lu().then(()=>{for(let t of(this.tu.sort((e,t)=>e.targetTimeMs-t.targetTimeMs),this.tu))if(t.skipDelay(),"all"!==e&&t.timerId===e)break;return this.lu()})}Iu(e){this.su.push(e)}cu(e){let t=this.tu.indexOf(e);this.tu.splice(t,1)}}function ob(e){return function(e,t){if("object"!=typeof e||null===e)return!1;for(let n of t)if(n in e&&"function"==typeof e[n])return!0;return!1}(e,["next","error","complete"])}class oE{constructor(){this._progressObserver={},this._taskCompletionResolver=new S,this._lastProgress={taskState:"Running",totalBytes:0,totalDocuments:0,bytesLoaded:0,documentsLoaded:0}}onProgress(e,t,n){this._progressObserver={next:e,error:t,complete:n}}catch(e){return this._taskCompletionResolver.promise.catch(e)}then(e,t){return this._taskCompletionResolver.promise.then(e,t)}_completeWith(e){this._updateProgress(e),this._progressObserver.complete&&this._progressObserver.complete(),this._taskCompletionResolver.resolve(e)}_failWith(e){this._lastProgress.taskState="Error",this._progressObserver.next&&this._progressObserver.next(this._lastProgress),this._progressObserver.error&&this._progressObserver.error(e),this._taskCompletionResolver.reject(e)}_updateProgress(e){this._lastProgress=e,this._progressObserver.next&&this._progressObserver.next(e)}}/**
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
 */let oT=-1;class oS extends oh{constructor(e,t,n,r){super(e,t,n,r),this.type="firestore",this._queue=new o_,this._persistenceKey=(null==r?void 0:r.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||oD(this),this._firestoreClient.terminate()}}function ox(e){return e._firestoreClient||oD(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function oD(e){var t,n,r,i,s,a;let o=e._freezeSettings(),l=(i=e._databaseId,s=(null===(t=e._app)||void 0===t?void 0:t.options.appId)||"",a=e._persistenceKey,new e6(i,s,a,o.host,o.ssl,o.experimentalForceLongPolling,o.experimentalAutoDetectLongPolling,ot(o.experimentalLongPollingOptions),o.useFetchStreams));e._firestoreClient=new aJ(e._authCredentials,e._appCheckCredentials,e._queue,l),(null===(n=o.localCache)||void 0===n?void 0:n._offlineComponentProvider)&&(null===(r=o.localCache)||void 0===r?void 0:r._onlineComponentProvider)&&(e._firestoreClient._uninitializedComponentsProvider={_offlineKind:o.localCache.kind,_offline:o.localCache._offlineComponentProvider,_online:o.localCache._onlineComponentProvider})}function oC(e,t){oO(e=ol(e,oS));let n=ox(e);if(n._uninitializedComponentsProvider)throw new T(E.FAILED_PRECONDITION,"SDK cache is already specified.");v("enableIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");let r=e._freezeSettings(),i=new aj;return oA(n,i,new aG(i,r.cacheSizeBytes,null==t?void 0:t.forceOwnership))}function oN(e){oO(e=ol(e,oS));let t=ox(e);if(t._uninitializedComponentsProvider)throw new T(E.FAILED_PRECONDITION,"SDK cache is already specified.");v("enableMultiTabIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");let n=e._freezeSettings(),r=new aj;return oA(t,r,new a$(r,n.cacheSizeBytes))}function oA(e,t,n){let r=new S;return e.asyncQueue.enqueue(async()=>{try{await aZ(e,n),await a0(e,t),r.resolve()}catch(e){if(!a1(e))throw e;v("Error enabling indexeddb cache. Falling back to memory cache: "+e),r.reject(e)}}).then(()=>r.promise)}function ok(e){if(e._initialized&&!e._terminated)throw new T(E.FAILED_PRECONDITION,"Persistence can only be cleared before a Firestore instance is initialized or after it is terminated.");let t=new S;return e._queue.enqueueAndForgetEvenWhileRestricted(async()=>{try{await async function(e){if(!ei.C())return Promise.resolve();await ei.delete(e+"main")}(iH(e._databaseId,e._persistenceKey)),t.resolve()}catch(e){t.reject(e)}}),t.promise}function oR(e){return function(e){let t=new S;return e.asyncQueue.enqueueAndForget(async()=>ab(await a9(e),t)),t.promise}(ox(e=ol(e,oS)))}function oF(e){var t;return(t=ox(e=ol(e,oS))).asyncQueue.enqueue(async()=>{let e=await a4(t),n=await a3(t);return e.setNetworkEnabled(!0),n.F_.delete(0),sN(n)})}function oM(e){var t;return(t=ox(e=ol(e,oS))).asyncQueue.enqueue(async()=>{let e=await a4(t),n=await a3(t);return e.setNetworkEnabled(!1),async function(e){e.F_.add(0),await sA(e),e.O_.set("Offline")}(n)})}function oV(e,t){let n=ox(e=ol(e,oS)),r=new oE;return function(e,t,n,r){var i,s;let a=(i=s_(t),s=function(e,t){if(e instanceof Uint8Array)return aQ(e,t);if(e instanceof ArrayBuffer)return aQ(new Uint8Array(e),t);if(e instanceof ReadableStream)return e.getReader();throw Error("Source of `toByteStreamReader` has to be a ArrayBuffer or ReadableStream")}("string"==typeof n?nG().encode(n):n),new aH(s,i));e.asyncQueue.enqueueAndForget(async()=>{!function(e,t,n){(async function(e,t,n){try{var r;let i=await t.getMetadata();if(await function(e,t){let n=rn(t.createTime);return e.persistence.runTransaction("hasNewerBundle","readonly",n=>e.Ur.getBundleMetadata(n,t.id)).then(e=>!!e&&e.createTime.compareTo(n)>=0)}(e.localStore,i))return await t.close(),n._completeWith({taskState:"Success",documentsLoaded:i.totalDocuments,bytesLoaded:i.totalBytes,totalDocuments:i.totalDocuments,totalBytes:i.totalBytes}),Promise.resolve(new Set);n._updateProgress(aa(i));let s=new as(i,e.localStore,t.serializer),a=await t.Oa();for(;a;){let e=await s.na(a);e&&n._updateProgress(e),a=await t.Oa()}let o=await s.complete();return await aN(e,o.sa,void 0),await (r=e.localStore).persistence.runTransaction("Save bundle","readwrite",e=>r.Ur.saveBundleMetadata(e,i)),n._completeWith(o.progress),Promise.resolve(o.ia)}catch(e){return v("SyncEngine",`Loading bundle failed with ${e}`),n._failWith(e),Promise.resolve(new Set)}})(e,t,n).then(t=>{e.sharedClientState.notifyBundleLoaded(t)})}(await a9(e),a,r)})}(n,e._databaseId,t,r),r}function oL(e,t){var n;return(n=ox(e=ol(e,oS))).asyncQueue.enqueue(async()=>{var e;return(e=await a8(n)).persistence.runTransaction("Get named query","readonly",n=>e.Ur.getNamedQuery(n,t))}).then(t=>t?new of(e,null,t.query):null)}function oO(e){if(e._initialized||e._terminated)throw new T(E.FAILED_PRECONDITION,"Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.")}/**
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
 */class oP{constructor(e){this._byteString=e}static fromBase64String(e){try{return new oP(e0.fromBase64String(e))}catch(e){throw new T(E.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(e){return new oP(e0.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class oq{constructor(...e){for(let t=0;t<e.length;++t)if(0===e[t].length)throw new T(E.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new K(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class oU{constructor(e){this._methodName=e}}/**
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
 */class oB{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new T(E.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new T(E.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return V(this._lat,e._lat)||V(this._long,e._long)}}/**
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
 */let oK=/^__.*__$/;class oz{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return null!==this.fieldMask?new nR(e,this.data,this.fieldMask,t,this.fieldTransforms):new nk(e,this.data,t,this.fieldTransforms)}}class oG{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return new nR(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function o$(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw _()}}class oj{constructor(e,t,n,r,i,s){this.settings=e,this.databaseId=t,this.serializer=n,this.ignoreUndefinedProperties=r,void 0===i&&this.du(),this.fieldTransforms=i||[],this.fieldMask=s||[]}get path(){return this.settings.path}get Tu(){return this.settings.Tu}Eu(e){return new oj(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Au(e){var t;let n=null===(t=this.path)||void 0===t?void 0:t.child(e),r=this.Eu({path:n,Ru:!1});return r.Vu(e),r}mu(e){var t;let n=null===(t=this.path)||void 0===t?void 0:t.child(e),r=this.Eu({path:n,Ru:!1});return r.du(),r}fu(e){return this.Eu({path:void 0,Ru:!0})}gu(e){return ln(e,this.settings.methodName,this.settings.pu||!1,this.path,this.settings.yu)}contains(e){return void 0!==this.fieldMask.find(t=>e.isPrefixOf(t))||void 0!==this.fieldTransforms.find(t=>e.isPrefixOf(t.field))}du(){if(this.path)for(let e=0;e<this.path.length;e++)this.Vu(this.path.get(e))}Vu(e){if(0===e.length)throw this.gu("Document fields must not be empty");if(o$(this.Tu)&&oK.test(e))throw this.gu('Document fields cannot begin and end with "__"')}}class oQ{constructor(e,t,n){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=n||s_(e)}wu(e,t,n,r=!1){return new oj({Tu:e,methodName:t,yu:n,path:K.emptyPath(),Ru:!1,pu:r},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function oW(e){let t=e._freezeSettings(),n=s_(e._databaseId);return new oQ(e._databaseId,!!t.ignoreUndefinedProperties,n)}function oH(e,t,n,r,i,s={}){let a,o;let l=e.wu(s.merge||s.mergeFields?2:0,t,n,i);o6("Data must be an object, but it was:",l,r);let u=o3(r,l);if(s.merge)a=new eX(l.fieldMask),o=l.fieldTransforms;else if(s.mergeFields){let e=[];for(let r of s.mergeFields){let i=o7(t,r,n);if(!l.contains(i))throw new T(E.INVALID_ARGUMENT,`Field '${i}' is specified in your field mask but missing from your input data.`);lr(e,i)||e.push(i)}a=new eX(e),o=l.fieldTransforms.filter(e=>a.covers(e.field))}else a=null,o=l.fieldTransforms;return new oz(new tw(u),a,o)}class oY extends oU{_toFieldTransform(e){if(2!==e.Tu)throw 1===e.Tu?e.gu(`${this._methodName}() can only appear at the top level of your update data`):e.gu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof oY}}function oX(e,t,n){return new oj({Tu:3,yu:t.settings.yu,methodName:e._methodName,Ru:n},t.databaseId,t.serializer,t.ignoreUndefinedProperties)}class oJ extends oU{_toFieldTransform(e){return new nE(e.path,new ng)}isEqual(e){return e instanceof oJ}}class oZ extends oU{constructor(e,t){super(e),this.Su=t}_toFieldTransform(e){let t=oX(this,e,!0),n=this.Su.map(e=>o8(e,t)),r=new np(n);return new nE(e.path,r)}isEqual(e){return this===e}}class o0 extends oU{constructor(e,t){super(e),this.Su=t}_toFieldTransform(e){let t=oX(this,e,!0),n=this.Su.map(e=>o8(e,t)),r=new nw(n);return new nE(e.path,r)}isEqual(e){return this===e}}class o1 extends oU{constructor(e,t){super(e),this.bu=t}_toFieldTransform(e){let t=new nI(e.serializer,nd(e.serializer,this.bu));return new nE(e.path,t)}isEqual(e){return this===e}}function o2(e,t,n,r){let i=e.wu(1,t,n);o6("Data must be an object, but it was:",i,r);let s=[],a=tw.empty();ez(r,(e,r)=>{let o=lt(t,e,n);r=(0,l.m9)(r);let u=i.mu(o);if(r instanceof oY)s.push(o);else{let e=o8(r,u);null!=e&&(s.push(o),a.set(o,e))}});let o=new eX(s);return new oG(a,o,i.fieldTransforms)}function o5(e,t,n,r,i,s){let a=e.wu(1,t,n),o=[o7(t,r,n)],u=[i];if(s.length%2!=0)throw new T(E.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let e=0;e<s.length;e+=2)o.push(o7(t,s[e])),u.push(s[e+1]);let c=[],h=tw.empty();for(let e=o.length-1;e>=0;--e)if(!lr(c,o[e])){let t=o[e],n=u[e];n=(0,l.m9)(n);let r=a.mu(t);if(n instanceof oY)c.push(t);else{let e=o8(n,r);null!=e&&(c.push(t),h.set(t,e))}}let d=new eX(c);return new oG(h,d,a.fieldTransforms)}function o4(e,t,n,r=!1){return o8(n,e.wu(r?4:3,t))}function o8(e,t){if(o9(e=(0,l.m9)(e)))return o6("Unsupported field value:",t,e),o3(e,t);if(e instanceof oU)return function(e,t){if(!o$(t.Tu))throw t.gu(`${e._methodName}() can only be used with update() and set()`);if(!t.path)throw t.gu(`${e._methodName}() is not currently supported inside arrays`);let n=e._toFieldTransform(t);n&&t.fieldTransforms.push(n)}(e,t),null;if(void 0===e&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.Ru&&4!==t.Tu)throw t.gu("Nested arrays are not supported");return function(e,t){let n=[],r=0;for(let i of e){let e=o8(i,t.fu(r));null==e&&(e={nullValue:"NULL_VALUE"}),n.push(e),r++}return{arrayValue:{values:n}}}(e,t)}return function(e,t){if(null===(e=(0,l.m9)(e)))return{nullValue:"NULL_VALUE"};if("number"==typeof e)return nd(t.serializer,e);if("boolean"==typeof e)return{booleanValue:e};if("string"==typeof e)return{stringValue:e};if(e instanceof Date){let n=O.fromDate(e);return{timestampValue:re(t.serializer,n)}}if(e instanceof O){let n=new O(e.seconds,1e3*Math.floor(e.nanoseconds/1e3));return{timestampValue:re(t.serializer,n)}}if(e instanceof oB)return{geoPointValue:{latitude:e.latitude,longitude:e.longitude}};if(e instanceof oP)return{bytesValue:rt(t.serializer,e._byteString)};if(e instanceof om){let n=t.databaseId,r=e.firestore._databaseId;if(!r.isEqual(n))throw t.gu(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:rr(e.firestore._databaseId||t.databaseId,e._key.path)}}throw t.gu(`Unsupported field value: ${oo(e)}`)}(e,t)}function o3(e,t){let n={};return eG(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):ez(e,(e,r)=>{let i=o8(r,t.Au(e));null!=i&&(n[e]=i)}),{mapValue:{fields:n}}}function o9(e){return!("object"!=typeof e||null===e||e instanceof Array||e instanceof Date||e instanceof O||e instanceof oB||e instanceof oP||e instanceof om||e instanceof oU)}function o6(e,t,n){if(!o9(n)||!("object"==typeof n&&null!==n&&(Object.getPrototypeOf(n)===Object.prototype||null===Object.getPrototypeOf(n)))){let r=oo(n);throw"an object"===r?t.gu(e+" a custom object"):t.gu(e+" "+r)}}function o7(e,t,n){if((t=(0,l.m9)(t))instanceof oq)return t._internalPath;if("string"==typeof t)return lt(e,t);throw ln("Field path arguments must be of type string or ",e,!1,void 0,n)}let le=RegExp("[~\\*/\\[\\]]");function lt(e,t,n){if(t.search(le)>=0)throw ln(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new oq(...t.split("."))._internalPath}catch(r){throw ln(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function ln(e,t,n,r,i){let s=r&&!r.isEmpty(),a=void 0!==i,o=`Function ${t}() called with invalid data`;n&&(o+=" (via `toFirestore()`)"),o+=". ";let l="";return(s||a)&&(l+=" (found",s&&(l+=` in field ${r}`),a&&(l+=` in document ${i}`),l+=")"),new T(E.INVALID_ARGUMENT,o+e+l)}function lr(e,t){return e.some(e=>e.isEqual(t))}/**
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
 */class li{constructor(e,t,n,r,i){this._firestore=e,this._userDataWriter=t,this._key=n,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new om(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){let e=new ls(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){let t=this._document.data.field(la("DocumentSnapshot.get",e));if(null!==t)return this._userDataWriter.convertValue(t)}}}class ls extends li{data(){return super.data()}}function la(e,t){return"string"==typeof t?lt(e,t):t instanceof oq?t._internalPath:t._delegate._internalPath}/**
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
 */function lo(e){if("L"===e.limitType&&0===e.explicitOrderBy.length)throw new T(E.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class ll{}class lu extends ll{}function lc(e,t,...n){let r=[];for(let i of(t instanceof ll&&r.push(t),function(e){let t=e.filter(e=>e instanceof lf).length,n=e.filter(e=>e instanceof lh).length;if(t>1||t>0&&n>0)throw new T(E.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r=r.concat(n)),r))e=i._apply(e);return e}class lh extends lu{constructor(e,t,n){super(),this._field=e,this._op=t,this._value=n,this.type="where"}static _create(e,t,n){return new lh(e,t,n)}_apply(e){let t=this._parse(e);return lC(e._query,t),new of(e.firestore,e.converter,t2(e._query,t))}_parse(e){let t=oW(e.firestore),n=function(e,t,n,r,i,s,a){let o;if(i.isKeyField()){if("array-contains"===s||"array-contains-any"===s)throw new T(E.INVALID_ARGUMENT,`Invalid Query. You can't perform '${s}' queries on documentId().`);if("in"===s||"not-in"===s){lD(a,s);let t=[];for(let n of a)t.push(lx(r,e,n));o={arrayValue:{values:t}}}else o=lx(r,e,a)}else"in"!==s&&"not-in"!==s&&"array-contains-any"!==s||lD(a,s),o=o4(n,t,a,"in"===s||"not-in"===s);return tS.create(i,s,o)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value);return n}}function ld(e,t,n){let r=la("where",e);return lh._create(r,t,n)}class lf extends ll{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new lf(e,t)}_parse(e){let t=this._queryConstraints.map(t=>t._parse(e)).filter(e=>e.getFilters().length>0);return 1===t.length?t[0]:tx.create(t,this._getOperator())}_apply(e){let t=this._parse(e);return 0===t.getFilters().length?e:(function(e,t){let n=e,r=t.getFlattenedFilters();for(let e of r)lC(n,e),n=t2(n,e)}(e._query,t),new of(e.firestore,e.converter,t2(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return"and"===this.type?"and":"or"}}class lm extends lu{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new lm(e,t)}_apply(e){let t=function(e,t,n){if(null!==e.startAt)throw new T(E.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(null!==e.endAt)throw new T(E.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");let r=new tE(t,n);return function(e,t){if(null===tX(e)){let n=tJ(e);null!==n&&lN(e,n,t.field)}}(e,r),r}(e._query,this._field,this._direction);return new of(e.firestore,e.converter,function(e,t){let n=e.explicitOrderBy.concat([t]);return new tW(e.path,e.collectionGroup,n,e.filters.slice(),e.limit,e.limitType,e.startAt,e.endAt)}(e._query,t))}}function lg(e,t="asc"){let n=la("orderBy",e);return lm._create(n,t)}class lp extends lu{constructor(e,t,n){super(),this.type=e,this._limit=t,this._limitType=n}static _create(e,t,n){return new lp(e,t,n)}_apply(e){return new of(e.firestore,e.converter,t5(e._query,this._limit,this._limitType))}}function ly(e){return ou("limit",e),lp._create("limit",e,"F")}function lw(e){return ou("limitToLast",e),lp._create("limitToLast",e,"L")}class lv extends lu{constructor(e,t,n){super(),this.type=e,this._docOrFields=t,this._inclusive=n}static _create(e,t,n){return new lv(e,t,n)}_apply(e){var t;let n=lS(e,this.type,this._docOrFields,this._inclusive);return new of(e.firestore,e.converter,(t=e._query,new tW(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),t.limit,t.limitType,n,t.endAt)))}}function lI(...e){return lv._create("startAt",e,!0)}function l_(...e){return lv._create("startAfter",e,!1)}class lb extends lu{constructor(e,t,n){super(),this.type=e,this._docOrFields=t,this._inclusive=n}static _create(e,t,n){return new lb(e,t,n)}_apply(e){var t;let n=lS(e,this.type,this._docOrFields,this._inclusive);return new of(e.firestore,e.converter,(t=e._query,new tW(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),t.limit,t.limitType,t.startAt,n)))}}function lE(...e){return lb._create("endBefore",e,!1)}function lT(...e){return lb._create("endAt",e,!0)}function lS(e,t,n,r){if(n[0]=(0,l.m9)(n[0]),n[0]instanceof li)return function(e,t,n,r,i){if(!r)throw new T(E.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${n}().`);let s=[];for(let n of t0(e))if(n.field.isKeyField())s.push(tl(t,r.key));else{let e=r.data.field(n.field);if(e8(e))throw new T(E.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+n.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(null===e){let e=n.field.canonicalString();throw new T(E.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${e}' (used as the orderBy) does not exist.`)}s.push(e)}return new tI(s,i)}(e._query,e.firestore._databaseId,t,n[0]._document,r);{let i=oW(e.firestore);return function(e,t,n,r,i,s){let a=e.explicitOrderBy;if(i.length>a.length)throw new T(E.INVALID_ARGUMENT,`Too many arguments provided to ${r}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);let o=[];for(let s=0;s<i.length;s++){let l=i[s];if(a[s].field.isKeyField()){if("string"!=typeof l)throw new T(E.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${r}(), but got a ${typeof l}`);if(!tZ(e)&&-1!==l.indexOf("/"))throw new T(E.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${r}() must be a plain document ID, but '${l}' contains a slash.`);let n=e.path.child(U.fromString(l));if(!z.isDocumentKey(n))throw new T(E.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${r}() must result in a valid document path, but '${n}' is not because it contains an odd number of segments.`);let i=new z(n);o.push(tl(t,i))}else{let e=o4(n,r,l);o.push(e)}}return new tI(o,s)}(e._query,e.firestore._databaseId,i,t,n,r)}}function lx(e,t,n){if("string"==typeof(n=(0,l.m9)(n))){if(""===n)throw new T(E.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!tZ(t)&&-1!==n.indexOf("/"))throw new T(E.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);let r=t.path.child(U.fromString(n));if(!z.isDocumentKey(r))throw new T(E.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return tl(e,new z(r))}if(n instanceof om)return tl(e,n._key);throw new T(E.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${oo(n)}.`)}function lD(e,t){if(!Array.isArray(e)||0===e.length)throw new T(E.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`)}function lC(e,t){if(t.isInequality()){let n=tJ(e),r=t.field;if(null!==n&&!n.isEqual(r))throw new T(E.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${n.toString()}' and '${r.toString()}'`);let i=tX(e);null!==i&&lN(e,r,i)}let n=function(e,t){for(let n of e)for(let e of n.getFlattenedFilters())if(t.indexOf(e.op)>=0)return e.op;return null}(e.filters,function(e){switch(e){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(null!==n)throw n===t.op?new T(E.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new T(E.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${n.toString()}' filters.`)}function lN(e,t,n){if(!n.isEqual(t))throw new T(E.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${t.toString()}' and so you must also use '${t.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}class lA{convertValue(e,t="none"){switch(tn(e)){case 0:return null;case 1:return e.booleanValue;case 2:return e5(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(e4(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 10:return this.convertObject(e.mapValue,t);default:throw _()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){let n={};return ez(e,(e,r)=>{n[e]=this.convertValue(r,t)}),n}convertGeoPoint(e){return new oB(e5(e.latitude),e5(e.longitude))}convertArray(e,t){return(e.values||[]).map(e=>this.convertValue(e,t))}convertServerTimestamp(e,t){switch(t){case"previous":let n=e3(e);return null==n?null:this.convertValue(n,t);case"estimate":return this.convertTimestamp(e9(e));default:return null}}convertTimestamp(e){let t=e2(e);return new O(t.seconds,t.nanos)}convertDocumentKey(e,t){let n=U.fromString(e);rI(n)||_();let r=new e7(n.get(1),n.get(3)),i=new z(n.popFirst(5));return r.isEqual(t)||w(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}/**
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
 */function lk(e,t,n){return e?n&&(n.merge||n.mergeFields)?e.toFirestore(t,n):e.toFirestore(t):t}class lR extends lA{constructor(e){super(),this.firestore=e}convertBytes(e){return new oP(e)}convertReference(e){let t=this.convertDocumentKey(e,this.firestore._databaseId);return new om(this.firestore,null,t)}}/**
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
 */class lF{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class lM extends li{constructor(e,t,n,r,i,s){super(e,t,n,r,s),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){let t=new lV(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){let n=this._document.data.field(la("DocumentSnapshot.get",e));if(null!==n)return this._userDataWriter.convertValue(n,t.serverTimestamps)}}}class lV extends lM{data(e={}){return super.data(e)}}class lL{constructor(e,t,n,r){this._firestore=e,this._userDataWriter=t,this._snapshot=r,this.metadata=new lF(r.hasPendingWrites,r.fromCache),this.query=n}get docs(){let e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(e,t){this._snapshot.docs.forEach(n=>{e.call(t,new lV(this._firestore,this._userDataWriter,n.key,n,new lF(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){let t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new T(E.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(e,t){if(e._snapshot.oldDocs.isEmpty()){let t=0;return e._snapshot.docChanges.map(n=>{let r=new lV(e._firestore,e._userDataWriter,n.doc.key,n.doc,new lF(e._snapshot.mutatedKeys.has(n.doc.key),e._snapshot.fromCache),e.query.converter);return n.doc,{type:"added",doc:r,oldIndex:-1,newIndex:t++}})}{let n=e._snapshot.oldDocs;return e._snapshot.docChanges.filter(e=>t||3!==e.type).map(t=>{let r=new lV(e._firestore,e._userDataWriter,t.doc.key,t.doc,new lF(e._snapshot.mutatedKeys.has(t.doc.key),e._snapshot.fromCache),e.query.converter),i=-1,s=-1;return 0!==t.type&&(i=n.indexOf(t.doc.key),n=n.delete(t.doc.key)),1!==t.type&&(s=(n=n.add(t.doc)).indexOf(t.doc.key)),{type:function(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return _()}}(t.type),doc:r,oldIndex:i,newIndex:s}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function lO(e,t){return e instanceof lM&&t instanceof lM?e._firestore===t._firestore&&e._key.isEqual(t._key)&&(null===e._document?null===t._document:e._document.isEqual(t._document))&&e._converter===t._converter:e instanceof lL&&t instanceof lL&&e._firestore===t._firestore&&oI(e.query,t.query)&&e.metadata.isEqual(t.metadata)&&e._snapshot.isEqual(t._snapshot)}/**
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
 */function lP(e){e=ol(e,om);let t=ol(e.firestore,oS);return a7(ox(t),e._key).then(n=>lJ(t,e,n))}class lq extends lA{constructor(e){super(),this.firestore=e}convertBytes(e){return new oP(e)}convertReference(e){let t=this.convertDocumentKey(e,this.firestore._databaseId);return new om(this.firestore,null,t)}}function lU(e){e=ol(e,om);let t=ol(e.firestore,oS),n=ox(t),r=new lq(t);return(function(e,t){let n=new S;return e.asyncQueue.enqueueAndForget(async()=>(async function(e,t,n){try{let r=await e.persistence.runTransaction("read document","readonly",n=>e.localDocuments.getDocument(n,t));r.isFoundDocument()?n.resolve(r):r.isNoDocument()?n.resolve(null):n.reject(new T(E.UNAVAILABLE,"Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)"))}catch(r){let e=s1(r,`Failed to get document '${t} from cache`);n.reject(e)}})(await a8(e),t,n)),n.promise})(n,e._key).then(n=>new lM(t,r,e._key,n,new lF(null!==n&&n.hasLocalMutations,!0),e.converter))}function lB(e){e=ol(e,om);let t=ol(e.firestore,oS);return a7(ox(t),e._key,{source:"server"}).then(n=>lJ(t,e,n))}function lK(e){e=ol(e,of);let t=ol(e.firestore,oS),n=ox(t),r=new lq(t);return lo(e._query),oe(n,e._query).then(n=>new lL(t,r,e,n))}function lz(e){e=ol(e,of);let t=ol(e.firestore,oS),n=ox(t),r=new lq(t);return(function(e,t){let n=new S;return e.asyncQueue.enqueueAndForget(async()=>(async function(e,t,n){try{let r=await i8(e,t,!0),i=new au(t,r.Ps),s=i.ha(r.documents),a=i.applyChanges(s,!1);n.resolve(a.snapshot)}catch(r){let e=s1(r,`Failed to execute query '${t} against cache`);n.reject(e)}})(await a8(e),t,n)),n.promise})(n,e._query).then(n=>new lL(t,r,e,n))}function lG(e){e=ol(e,of);let t=ol(e.firestore,oS),n=ox(t),r=new lq(t);return oe(n,e._query,{source:"server"}).then(n=>new lL(t,r,e,n))}function l$(e,t,n){e=ol(e,om);let r=ol(e.firestore,oS),i=lk(e.converter,t,n);return lX(r,[oH(oW(r),"setDoc",e._key,i,null!==e.converter,n).toMutation(e._key,nS.none())])}function lj(e,t,n,...r){let i;e=ol(e,om);let s=ol(e.firestore,oS),a=oW(s);return i="string"==typeof(t=(0,l.m9)(t))||t instanceof oq?o5(a,"updateDoc",e._key,t,n,r):o2(a,"updateDoc",e._key,t),lX(s,[i.toMutation(e._key,nS.exists(!0))])}function lQ(e){return lX(ol(e.firestore,oS),[new nL(e._key,nS.none())])}function lW(e,t){let n=ol(e.firestore,oS),r=ow(e),i=lk(e.converter,t);return lX(n,[oH(oW(e.firestore),"addDoc",r._key,i,null!==e.converter,{}).toMutation(r._key,nS.exists(!1))]).then(()=>r)}function lH(e,...t){var n,r,i;let s,a,o;e=(0,l.m9)(e);let u={includeMetadataChanges:!1},c=0;"object"!=typeof t[0]||ob(t[c])||(u=t[c],c++);let h={includeMetadataChanges:u.includeMetadataChanges};if(ob(t[c])){let e=t[c];t[c]=null===(n=e.next)||void 0===n?void 0:n.bind(e),t[c+1]=null===(r=e.error)||void 0===r?void 0:r.bind(e),t[c+2]=null===(i=e.complete)||void 0===i?void 0:i.bind(e)}if(e instanceof om)a=ol(e.firestore,oS),o=tH(e._key.path),s={next:n=>{t[c]&&t[c](lJ(a,e,n))},error:t[c+1],complete:t[c+2]};else{let n=ol(e,of);a=ol(n.firestore,oS),o=n._query;let r=new lq(a);s={next:e=>{t[c]&&t[c](new lL(a,r,n,e))},error:t[c+1],complete:t[c+2]},lo(e._query)}return function(e,t,n,r){let i=new aW(r),s=new an(t,i,n);return e.asyncQueue.enqueueAndForget(async()=>s9(await a6(e),s)),()=>{i.La(),e.asyncQueue.enqueueAndForget(async()=>s6(await a6(e),s))}}(ox(a),o,h,s)}function lY(e,t){return function(e,t){let n=new aW(t);return e.asyncQueue.enqueueAndForget(async()=>{(await a6(e)).K_.add(n),n.next()}),()=>{n.La(),e.asyncQueue.enqueueAndForget(async()=>(function(e,t){e.K_.delete(t)})(await a6(e),n))}}(ox(e=ol(e,oS)),ob(t)?t:{next:t})}function lX(e,t){return function(e,t){let n=new S;return e.asyncQueue.enqueueAndForget(async()=>ap(await a9(e),t,n)),n.promise}(ox(e),t)}function lJ(e,t,n){let r=n.docs.get(t._key),i=new lq(e);return new lM(e,i,t._key,r,new lF(n.hasPendingWrites,n.fromCache),t.converter)}/**
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
 */class l0{constructor(e,t){this._firestore=e,this._commitHandler=t,this._mutations=[],this._committed=!1,this._dataReader=oW(e)}set(e,t,n){this._verifyNotCommitted();let r=l1(e,this._firestore),i=lk(r.converter,t,n),s=oH(this._dataReader,"WriteBatch.set",r._key,i,null!==r.converter,n);return this._mutations.push(s.toMutation(r._key,nS.none())),this}update(e,t,n,...r){let i;this._verifyNotCommitted();let s=l1(e,this._firestore);return i="string"==typeof(t=(0,l.m9)(t))||t instanceof oq?o5(this._dataReader,"WriteBatch.update",s._key,t,n,r):o2(this._dataReader,"WriteBatch.update",s._key,t),this._mutations.push(i.toMutation(s._key,nS.exists(!0))),this}delete(e){this._verifyNotCommitted();let t=l1(e,this._firestore);return this._mutations=this._mutations.concat(new nL(t._key,nS.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new T(E.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function l1(e,t){if((e=(0,l.m9)(e)).firestore!==t)throw new T(E.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return e}/**
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
 */class l2 extends class{constructor(e,t){this._firestore=e,this._transaction=t,this._dataReader=oW(e)}get(e){let t=l1(e,this._firestore),n=new lR(this._firestore);return this._transaction.lookup([t._key]).then(e=>{if(!e||1!==e.length)return _();let r=e[0];if(r.isFoundDocument())return new li(this._firestore,n,r.key,r,t.converter);if(r.isNoDocument())return new li(this._firestore,n,t._key,null,t.converter);throw _()})}set(e,t,n){let r=l1(e,this._firestore),i=lk(r.converter,t,n),s=oH(this._dataReader,"Transaction.set",r._key,i,null!==r.converter,n);return this._transaction.set(r._key,s),this}update(e,t,n,...r){let i;let s=l1(e,this._firestore);return i="string"==typeof(t=(0,l.m9)(t))||t instanceof oq?o5(this._dataReader,"Transaction.update",s._key,t,n,r):o2(this._dataReader,"Transaction.update",s._key,t),this._transaction.update(s._key,i),this}delete(e){let t=l1(e,this._firestore);return this._transaction.delete(t._key),this}}{constructor(e,t){super(e,t),this._firestore=e}get(e){let t=l1(e,this._firestore),n=new lq(this._firestore);return super.get(e).then(e=>new lM(this._firestore,n,t._key,e._document,new lF(!1,!1),t.converter))}}function l5(e,t,n){e=ol(e,oS);let r=Object.assign(Object.assign({},lZ),n);return!function(e){if(e.maxAttempts<1)throw new T(E.INVALID_ARGUMENT,"Max attempts must be at least 1")}(r),function(e,t,n){let r=new S;return e.asyncQueue.enqueueAndForget(async()=>{let i=await a5(e).then(e=>e.datastore);new aX(e.asyncQueue,i,n,t,r).run()}),r.promise}(ox(e),n=>t(new l2(e,n)),r)}/**
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
 */function l4(){return new oY("deleteField")}function l8(){return new oJ("serverTimestamp")}function l3(...e){return new oZ("arrayUnion",e)}function l9(...e){return new o0("arrayRemove",e)}function l6(e){return new o1("increment",e)}new WeakMap,function(e=!0){f=s.SDK_VERSION,(0,s._registerComponent)(new a.wA("firestore",(t,{instanceIdentifier:n,options:r})=>{let i=t.getProvider("app").getImmediate(),s=new oS(new N(t.getProvider("auth-internal")),new F(t.getProvider("app-check-internal")),function(e,t){if(!Object.prototype.hasOwnProperty.apply(e.options,["projectId"]))throw new T(E.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new e7(e.options.projectId,t)}(i,n),i);return r=Object.assign({useFetchStreams:e},r),s._setSettings(r),s},"PUBLIC").setMultipleInstances(!0)),(0,s.registerVersion)(h,"4.2.0",void 0),(0,s.registerVersion)(h,"4.2.0","esm2017")}()}}]);