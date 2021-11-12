/*
Copyright 2021 The Matrix.org Foundation C.I.C.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

import { TypedEventEmitter } from "../models/typed-event-emitter";

export enum LocalStorageErrors {
    Global = 'Global',
    SetItemError = 'setItem',
    GetItemError = 'getItem',
    RemoveItemError = 'removeItem',
    ClearError = 'clear',
    QuotaExceededError = 'QuotaExceededError'
}

// Used in element-web as a temporary hack to handle all the localStorage errors on the highest level possible
export const localStorageErrorsEventsEmitter = new TypedEventEmitter<LocalStorageErrors>();
