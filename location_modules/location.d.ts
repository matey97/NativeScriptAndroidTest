/// <reference path="android-declarations.d.ts"/>

declare module com {
	export module google {
		export module android {
			export module gms {
				export module actions {
					export class ItemListIntents {
						public static class: java.lang.Class<com.google.android.gms.actions.ItemListIntents>;
						public static ACTION_CREATE_ITEM_LIST: string;
						public static ACTION_DELETE_ITEM_LIST: string;
						public static ACTION_APPEND_ITEM_LIST: string;
						public static ACTION_ACCEPT_ITEM: string;
						public static ACTION_REJECT_ITEM: string;
						public static ACTION_DELETE_ITEM: string;
						public static EXTRA_LIST_NAME: string;
						public static EXTRA_LIST_QUERY: string;
						public static EXTRA_ITEM_NAME: string;
						public static EXTRA_ITEM_NAMES: string;
						public static EXTRA_ITEM_QUERY: string;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module actions {
					export class NoteIntents {
						public static class: java.lang.Class<com.google.android.gms.actions.NoteIntents>;
						public static ACTION_CREATE_NOTE: string;
						public static ACTION_APPEND_NOTE: string;
						public static ACTION_DELETE_NOTE: string;
						public static EXTRA_NAME: string;
						public static EXTRA_TEXT: string;
						public static EXTRA_NOTE_QUERY: string;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module actions {
					export class ReserveIntents {
						public static class: java.lang.Class<com.google.android.gms.actions.ReserveIntents>;
						public static ACTION_RESERVE_TAXI_RESERVATION: string;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module actions {
					export class SearchIntents {
						public static class: java.lang.Class<com.google.android.gms.actions.SearchIntents>;
						public static ACTION_SEARCH: string;
						public static EXTRA_QUERY: string;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module auth {
					export module api {
						export module signin {
							export class GoogleSignInAccount extends com.google.android.gms.common.internal.safeparcel.AbstractSafeParcelable implements com.google.android.gms.common.internal.ReflectedParcelable {
								public static class: java.lang.Class<com.google.android.gms.auth.api.signin.GoogleSignInAccount>;
								public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.gms.auth.api.signin.GoogleSignInAccount>;
								public getAccount(): globalAndroid.accounts.Account;
								public getGrantedScopes(): java.util.Set<com.google.android.gms.common.api.Scope>;
								public getGivenName(): string;
								public static createDefault(): com.google.android.gms.auth.api.signin.GoogleSignInAccount;
								public equals(param0: any): boolean;
								public getIdToken(): string;
								public getDisplayName(): string;
								public isExpired(): boolean;
								public zab(): string;
								public getFamilyName(): string;
								public getRequestedScopes(): java.util.Set<com.google.android.gms.common.api.Scope>;
								public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
								public static zaa(param0: string): com.google.android.gms.auth.api.signin.GoogleSignInAccount;
								public getPhotoUrl(): globalAndroid.net.Uri;
								public getEmail(): string;
								public getServerAuthCode(): string;
								public zac(): string;
								public requestExtraScopes(param0: native.Array<com.google.android.gms.common.api.Scope>): com.google.android.gms.auth.api.signin.GoogleSignInAccount;
								public getId(): string;
								public hashCode(): number;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module auth {
					export module api {
						export module signin {
							export class GoogleSignInOptions extends com.google.android.gms.common.internal.safeparcel.AbstractSafeParcelable implements com.google.android.gms.common.api.Api.ApiOptions.Optional, com.google.android.gms.common.internal.ReflectedParcelable {
								public static class: java.lang.Class<com.google.android.gms.auth.api.signin.GoogleSignInOptions>;
								public static zar: com.google.android.gms.common.api.Scope;
								public static zas: com.google.android.gms.common.api.Scope;
								public static zat: com.google.android.gms.common.api.Scope;
								public static zau: com.google.android.gms.common.api.Scope;
								public static zav: com.google.android.gms.common.api.Scope;
								public static DEFAULT_SIGN_IN: com.google.android.gms.auth.api.signin.GoogleSignInOptions;
								public static DEFAULT_GAMES_SIGN_IN: com.google.android.gms.auth.api.signin.GoogleSignInOptions;
								public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.gms.auth.api.signin.GoogleSignInOptions>;
								public getAccount(): globalAndroid.accounts.Account;
								public getServerClientId(): string;
								public isForceCodeForRefreshToken(): boolean;
								public equals(param0: any): boolean;
								public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
								public static zab(param0: string): com.google.android.gms.auth.api.signin.GoogleSignInOptions;
								public zae(): string;
								public getScopes(): java.util.ArrayList<com.google.android.gms.common.api.Scope>;
								public isServerAuthCodeRequested(): boolean;
								public isIdTokenRequested(): boolean;
								public hashCode(): number;
								public getExtensions(): java.util.ArrayList<com.google.android.gms.auth.api.signin.internal.GoogleSignInOptionsExtensionParcelable>;
								public getScopeArray(): native.Array<com.google.android.gms.common.api.Scope>;
							}
							export module GoogleSignInOptions {
								export class Builder {
									public static class: java.lang.Class<com.google.android.gms.auth.api.signin.GoogleSignInOptions.Builder>;
									public requestServerAuthCode(param0: string): com.google.android.gms.auth.api.signin.GoogleSignInOptions.Builder;
									public constructor();
									public requestScopes(param0: com.google.android.gms.common.api.Scope, param1: native.Array<com.google.android.gms.common.api.Scope>): com.google.android.gms.auth.api.signin.GoogleSignInOptions.Builder;
									public requestIdToken(param0: string): com.google.android.gms.auth.api.signin.GoogleSignInOptions.Builder;
									public addExtension(param0: com.google.android.gms.auth.api.signin.GoogleSignInOptionsExtension): com.google.android.gms.auth.api.signin.GoogleSignInOptions.Builder;
									public requestEmail(): com.google.android.gms.auth.api.signin.GoogleSignInOptions.Builder;
									public setAccountName(param0: string): com.google.android.gms.auth.api.signin.GoogleSignInOptions.Builder;
									public requestServerAuthCode(param0: string, param1: boolean): com.google.android.gms.auth.api.signin.GoogleSignInOptions.Builder;
									public setHostedDomain(param0: string): com.google.android.gms.auth.api.signin.GoogleSignInOptions.Builder;
									public constructor(param0: com.google.android.gms.auth.api.signin.GoogleSignInOptions);
									public requestId(): com.google.android.gms.auth.api.signin.GoogleSignInOptions.Builder;
									public requestProfile(): com.google.android.gms.auth.api.signin.GoogleSignInOptions.Builder;
									public build(): com.google.android.gms.auth.api.signin.GoogleSignInOptions;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module auth {
					export module api {
						export module signin {
							export class GoogleSignInOptionsExtension {
								public static class: java.lang.Class<com.google.android.gms.auth.api.signin.GoogleSignInOptionsExtension>;
								/**
								 * Constructs a new instance of the com.google.android.gms.auth.api.signin.GoogleSignInOptionsExtension interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									getExtensionType(): number;
									toBundle(): globalAndroid.os.Bundle;
									getImpliedScopes(): java.util.List<com.google.android.gms.common.api.Scope>;
								});
								public constructor();
								public static FITNESS: number;
								public static GAMES: number;
								public toBundle(): globalAndroid.os.Bundle;
								public getImpliedScopes(): java.util.List<com.google.android.gms.common.api.Scope>;
								public getExtensionType(): number;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module auth {
					export module api {
						export module signin {
							export module internal {
								export class GoogleSignInOptionsExtensionParcelable extends com.google.android.gms.common.internal.safeparcel.AbstractSafeParcelable {
									public static class: java.lang.Class<com.google.android.gms.auth.api.signin.internal.GoogleSignInOptionsExtensionParcelable>;
									public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.gms.auth.api.signin.internal.GoogleSignInOptionsExtensionParcelable>;
									public constructor();
									public constructor(param0: com.google.android.gms.auth.api.signin.GoogleSignInOptionsExtension);
									public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
									public getType(): number;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module auth {
					export module api {
						export module signin {
							export module internal {
								export class HashAccumulator {
									public static class: java.lang.Class<com.google.android.gms.auth.api.signin.internal.HashAccumulator>;
									public constructor();
									public zaa(param0: boolean): com.google.android.gms.auth.api.signin.internal.HashAccumulator;
									public addObject(param0: any): com.google.android.gms.auth.api.signin.internal.HashAccumulator;
									public hash(): number;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module auth {
					export module api {
						export module signin {
							export module internal {
								export class Storage {
									public static class: java.lang.Class<com.google.android.gms.auth.api.signin.internal.Storage>;
									public getSavedRefreshToken(): string;
									public getSavedDefaultGoogleSignInAccount(): com.google.android.gms.auth.api.signin.GoogleSignInAccount;
									public clear(): void;
									public zaf(): void;
									public getSavedDefaultGoogleSignInOptions(): com.google.android.gms.auth.api.signin.GoogleSignInOptions;
									public static getInstance(param0: globalAndroid.content.Context): com.google.android.gms.auth.api.signin.internal.Storage;
									public saveDefaultGoogleSignInAccount(param0: com.google.android.gms.auth.api.signin.GoogleSignInAccount, param1: com.google.android.gms.auth.api.signin.GoogleSignInOptions): void;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module auth {
					export module api {
						export module signin {
							export module internal {
								export class zaa extends globalAndroid.os.Parcelable.Creator<com.google.android.gms.auth.api.signin.internal.GoogleSignInOptionsExtensionParcelable> {
									public static class: java.lang.Class<com.google.android.gms.auth.api.signin.internal.zaa>;
									public constructor();
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module auth {
					export module api {
						export module signin {
							export class zaa {
								public static class: java.lang.Class<com.google.android.gms.auth.api.signin.zaa>;
								public compare(param0: any, param1: any): number;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module auth {
					export module api {
						export module signin {
							export class zab extends globalAndroid.os.Parcelable.Creator<com.google.android.gms.auth.api.signin.GoogleSignInAccount> {
								public static class: java.lang.Class<com.google.android.gms.auth.api.signin.zab>;
								public constructor();
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module auth {
					export module api {
						export module signin {
							export class zac extends java.util.Comparator<com.google.android.gms.common.api.Scope> {
								public static class: java.lang.Class<com.google.android.gms.auth.api.signin.zac>;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module auth {
					export module api {
						export module signin {
							export class zad extends globalAndroid.os.Parcelable.Creator<com.google.android.gms.auth.api.signin.GoogleSignInOptions> {
								public static class: java.lang.Class<com.google.android.gms.auth.api.signin.zad>;
								public constructor();
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export class AccountPicker {
						public static class: java.lang.Class<com.google.android.gms.common.AccountPicker>;
						public static newChooseAccountIntent(param0: globalAndroid.accounts.Account, param1: java.util.ArrayList<globalAndroid.accounts.Account>, param2: native.Array<string>, param3: boolean, param4: string, param5: string, param6: native.Array<string>, param7: globalAndroid.os.Bundle): globalAndroid.content.Intent;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export class BlockingServiceConnection {
						public static class: java.lang.Class<com.google.android.gms.common.BlockingServiceConnection>;
						public constructor();
						public onServiceConnected(param0: globalAndroid.content.ComponentName, param1: globalAndroid.os.IBinder): void;
						public getService(): globalAndroid.os.IBinder;
						public getServiceWithTimeout(param0: number, param1: java.util.concurrent.TimeUnit): globalAndroid.os.IBinder;
						public onServiceDisconnected(param0: globalAndroid.content.ComponentName): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export class ConnectionResult extends com.google.android.gms.common.internal.safeparcel.AbstractSafeParcelable {
						public static class: java.lang.Class<com.google.android.gms.common.ConnectionResult>;
						public static UNKNOWN: number;
						public static SUCCESS: number;
						public static SERVICE_MISSING: number;
						public static SERVICE_VERSION_UPDATE_REQUIRED: number;
						public static SERVICE_DISABLED: number;
						public static SIGN_IN_REQUIRED: number;
						public static INVALID_ACCOUNT: number;
						public static RESOLUTION_REQUIRED: number;
						public static NETWORK_ERROR: number;
						public static INTERNAL_ERROR: number;
						public static SERVICE_INVALID: number;
						public static DEVELOPER_ERROR: number;
						public static LICENSE_CHECK_FAILED: number;
						public static CANCELED: number;
						public static TIMEOUT: number;
						public static INTERRUPTED: number;
						public static API_UNAVAILABLE: number;
						public static SIGN_IN_FAILED: number;
						public static SERVICE_UPDATING: number;
						public static SERVICE_MISSING_PERMISSION: number;
						public static RESTRICTED_PROFILE: number;
						public static DRIVE_EXTERNAL_STORAGE_REQUIRED: number;
						public static RESULT_SUCCESS: com.google.android.gms.common.ConnectionResult;
						public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.gms.common.ConnectionResult>;
						public hasResolution(): boolean;
						public getErrorMessage(): string;
						public constructor();
						public getErrorCode(): number;
						public getResolution(): globalAndroid.app.PendingIntent;
						public isSuccess(): boolean;
						public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
						public equals(param0: any): boolean;
						public hashCode(): number;
						public toString(): string;
						public constructor(param0: number, param1: globalAndroid.app.PendingIntent);
						public constructor(param0: number);
						public startResolutionForResult(param0: globalAndroid.app.Activity, param1: number): void;
						public constructor(param0: number, param1: globalAndroid.app.PendingIntent, param2: string);
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export class ErrorDialogFragment {
						public static class: java.lang.Class<com.google.android.gms.common.ErrorDialogFragment>;
						public show(param0: globalAndroid.app.FragmentManager, param1: string): void;
						public constructor();
						public static newInstance(param0: globalAndroid.app.Dialog): com.google.android.gms.common.ErrorDialogFragment;
						public onCancel(param0: globalAndroid.content.DialogInterface): void;
						public onCreateDialog(param0: globalAndroid.os.Bundle): globalAndroid.app.Dialog;
						public static newInstance(param0: globalAndroid.app.Dialog, param1: globalAndroid.content.DialogInterface.OnCancelListener): com.google.android.gms.common.ErrorDialogFragment;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export class Feature extends com.google.android.gms.common.internal.safeparcel.AbstractSafeParcelable {
						public static class: java.lang.Class<com.google.android.gms.common.Feature>;
						public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.gms.common.Feature>;
						public constructor();
						public constructor(param0: string, param1: number);
						public constructor(param0: string, param1: number, param2: number);
						public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
						public getVersion(): number;
						public equals(param0: any): boolean;
						public hashCode(): number;
						public getName(): string;
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export class FirstPartyScopes {
						public static class: java.lang.Class<com.google.android.gms.common.FirstPartyScopes>;
						public static GAMES_1P: string;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export class GoogleApiAvailability extends com.google.android.gms.common.GoogleApiAvailabilityLight {
						public static class: java.lang.Class<com.google.android.gms.common.GoogleApiAvailability>;
						public static GOOGLE_PLAY_SERVICES_VERSION_CODE: number;
						public static GOOGLE_PLAY_SERVICES_PACKAGE: string;
						public static getInstance(): com.google.android.gms.common.GoogleApiAvailabilityLight;
						public static zaa(param0: globalAndroid.app.Activity, param1: globalAndroid.content.DialogInterface.OnCancelListener): globalAndroid.app.Dialog;
						public getErrorDialog(param0: globalAndroid.app.Activity, param1: number, param2: number, param3: globalAndroid.content.DialogInterface.OnCancelListener): globalAndroid.app.Dialog;
						public zaa(param0: globalAndroid.content.Context, param1: com.google.android.gms.common.api.internal.zabr): com.google.android.gms.common.api.internal.zabq;
						public showErrorDialogFragment(param0: globalAndroid.app.Activity, param1: number, param2: number): boolean;
						public zaa(param0: globalAndroid.content.Context, param1: com.google.android.gms.common.ConnectionResult, param2: number): boolean;
						public showErrorNotification(param0: globalAndroid.content.Context, param1: number): void;
						public getErrorResolutionPendingIntent(param0: globalAndroid.content.Context, param1: number, param2: number): globalAndroid.app.PendingIntent;
						public getErrorResolutionPendingIntent(param0: globalAndroid.content.Context, param1: number, param2: number, param3: string): globalAndroid.app.PendingIntent;
						public zaa(param0: globalAndroid.app.Activity, param1: com.google.android.gms.common.api.internal.LifecycleFragment, param2: number, param3: number, param4: globalAndroid.content.DialogInterface.OnCancelListener): boolean;
						public setDefaultNotificationChannelId(param0: globalAndroid.content.Context, param1: string): void;
						/** @deprecated */
						public getErrorResolutionIntent(param0: number): globalAndroid.content.Intent;
						public getErrorDialog(param0: globalAndroid.app.Activity, param1: number, param2: number): globalAndroid.app.Dialog;
						public isGooglePlayServicesAvailable(param0: globalAndroid.content.Context): number;
						public isGooglePlayServicesAvailable(param0: globalAndroid.content.Context, param1: number): number;
						public makeGooglePlayServicesAvailable(param0: globalAndroid.app.Activity): com.google.android.gms.tasks.Task<java.lang.Void>;
						public showErrorNotification(param0: globalAndroid.content.Context, param1: com.google.android.gms.common.ConnectionResult): void;
						public getErrorResolutionPendingIntent(param0: globalAndroid.content.Context, param1: com.google.android.gms.common.ConnectionResult): globalAndroid.app.PendingIntent;
						public getClientVersion(param0: globalAndroid.content.Context): number;
						public static getInstance(): com.google.android.gms.common.GoogleApiAvailability;
						public checkApiAvailability(param0: com.google.android.gms.common.api.GoogleApi<any>, param1: native.Array<com.google.android.gms.common.api.GoogleApi<any>>): com.google.android.gms.tasks.Task<java.lang.Void>;
						public getErrorResolutionIntent(param0: globalAndroid.content.Context, param1: number, param2: string): globalAndroid.content.Intent;
						public showErrorDialogFragment(param0: globalAndroid.app.Activity, param1: number, param2: number, param3: globalAndroid.content.DialogInterface.OnCancelListener): boolean;
						public getErrorString(param0: number): string;
						public isUserResolvableError(param0: number): boolean;
					}
					export module GoogleApiAvailability {
						export class zaa extends com.google.android.gms.internal.base.zal {
							public static class: java.lang.Class<com.google.android.gms.common.GoogleApiAvailability.zaa>;
							public constructor();
							public constructor(param0: globalAndroid.os.Looper);
							public constructor(param0: com.google.android.gms.common.GoogleApiAvailability, param1: globalAndroid.content.Context);
							public constructor(param0: globalAndroid.os.Looper, param1: globalAndroid.os.Handler.Callback);
							public handleMessage(param0: globalAndroid.os.Message): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export class GoogleApiAvailabilityLight {
						public static class: java.lang.Class<com.google.android.gms.common.GoogleApiAvailabilityLight>;
						public static GOOGLE_PLAY_SERVICES_VERSION_CODE: number;
						public static GOOGLE_PLAY_SERVICES_PACKAGE: string;
						public static GOOGLE_PLAY_STORE_PACKAGE: string;
						public static getInstance(): com.google.android.gms.common.GoogleApiAvailabilityLight;
						public getClientVersion(param0: globalAndroid.content.Context): number;
						public isPlayStorePossiblyUpdating(param0: globalAndroid.content.Context, param1: number): boolean;
						public getErrorResolutionPendingIntent(param0: globalAndroid.content.Context, param1: number, param2: number): globalAndroid.app.PendingIntent;
						public isUninstalledAppPossiblyUpdating(param0: globalAndroid.content.Context, param1: string): boolean;
						public getErrorResolutionIntent(param0: globalAndroid.content.Context, param1: number, param2: string): globalAndroid.content.Intent;
						public getErrorResolutionPendingIntent(param0: globalAndroid.content.Context, param1: number, param2: number, param3: string): globalAndroid.app.PendingIntent;
						/** @deprecated */
						public getErrorResolutionIntent(param0: number): globalAndroid.content.Intent;
						public getApkVersion(param0: globalAndroid.content.Context): number;
						public cancelAvailabilityErrorNotifications(param0: globalAndroid.content.Context): void;
						public getErrorString(param0: number): string;
						public isGooglePlayServicesAvailable(param0: globalAndroid.content.Context): number;
						public verifyGooglePlayServicesIsAvailable(param0: globalAndroid.content.Context, param1: number): void;
						public isPlayServicesPossiblyUpdating(param0: globalAndroid.content.Context, param1: number): boolean;
						public isGooglePlayServicesAvailable(param0: globalAndroid.content.Context, param1: number): number;
						public isUserResolvableError(param0: number): boolean;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export class GooglePlayServicesNotAvailableException {
						public static class: java.lang.Class<com.google.android.gms.common.GooglePlayServicesNotAvailableException>;
						public errorCode: number;
						public constructor(param0: number);
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export class GooglePlayServicesRepairableException extends com.google.android.gms.common.UserRecoverableException {
						public static class: java.lang.Class<com.google.android.gms.common.GooglePlayServicesRepairableException>;
						public getConnectionStatusCode(): number;
						public constructor(param0: number, param1: string, param2: globalAndroid.content.Intent);
						public constructor(param0: string, param1: globalAndroid.content.Intent);
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export class GooglePlayServicesUtil extends com.google.android.gms.common.GooglePlayServicesUtilLight {
						public static class: java.lang.Class<com.google.android.gms.common.GooglePlayServicesUtil>;
						public static GMS_ERROR_DIALOG: string;
						public static GOOGLE_PLAY_SERVICES_VERSION_CODE: number;
						public static GOOGLE_PLAY_SERVICES_PACKAGE: string;
						public static GOOGLE_PLAY_STORE_PACKAGE: string;
						/** @deprecated */
						public static showErrorNotification(param0: number, param1: globalAndroid.content.Context): void;
						/** @deprecated */
						public static isGooglePlayServicesAvailable(param0: globalAndroid.content.Context, param1: number): number;
						public static showErrorDialogFragment(param0: number, param1: globalAndroid.app.Activity, param2: globalAndroid.support.v4.app.Fragment, param3: number, param4: globalAndroid.content.DialogInterface.OnCancelListener): boolean;
						public static getRemoteContext(param0: globalAndroid.content.Context): globalAndroid.content.Context;
						/** @deprecated */
						public static getErrorString(param0: number): string;
						public static getRemoteResource(param0: globalAndroid.content.Context): globalAndroid.content.res.Resources;
						/** @deprecated */
						public static showErrorDialogFragment(param0: number, param1: globalAndroid.app.Activity, param2: number, param3: globalAndroid.content.DialogInterface.OnCancelListener): boolean;
						/** @deprecated */
						public static getErrorPendingIntent(param0: number, param1: globalAndroid.content.Context, param2: number): globalAndroid.app.PendingIntent;
						/** @deprecated */
						public static isUserRecoverableError(param0: number): boolean;
						/** @deprecated */
						public static getErrorDialog(param0: number, param1: globalAndroid.app.Activity, param2: number, param3: globalAndroid.content.DialogInterface.OnCancelListener): globalAndroid.app.Dialog;
						/** @deprecated */
						public static showErrorDialogFragment(param0: number, param1: globalAndroid.app.Activity, param2: number): boolean;
						/** @deprecated */
						public static isGooglePlayServicesAvailable(param0: globalAndroid.content.Context): number;
						/** @deprecated */
						public static getErrorDialog(param0: number, param1: globalAndroid.app.Activity, param2: number): globalAndroid.app.Dialog;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export class GooglePlayServicesUtilLight {
						public static class: java.lang.Class<com.google.android.gms.common.GooglePlayServicesUtilLight>;
						public static GOOGLE_PLAY_SERVICES_VERSION_CODE: number;
						public static GOOGLE_PLAY_SERVICES_PACKAGE: string;
						public static GOOGLE_PLAY_GAMES_PACKAGE: string;
						public static GOOGLE_PLAY_STORE_PACKAGE: string;
						/** @deprecated */
						public static ensurePlayServicesAvailable(param0: globalAndroid.content.Context, param1: number): void;
						/** @deprecated */
						public static uidHasPackageName(param0: globalAndroid.content.Context, param1: number, param2: string): boolean;
						/** @deprecated */
						public static isGooglePlayServicesAvailable(param0: globalAndroid.content.Context, param1: number): number;
						/** @deprecated */
						public static cancelAvailabilityErrorNotifications(param0: globalAndroid.content.Context): void;
						public static enableUsingApkIndependentContext(): void;
						/** @deprecated */
						public static isPlayStorePossiblyUpdating(param0: globalAndroid.content.Context, param1: number): boolean;
						public static getRemoteContext(param0: globalAndroid.content.Context): globalAndroid.content.Context;
						/** @deprecated */
						public static getErrorString(param0: number): string;
						/** @deprecated */
						public static getGooglePlayServicesAvailabilityRecoveryIntent(param0: number): globalAndroid.content.Intent;
						public static isRestrictedUserProfile(param0: globalAndroid.content.Context): boolean;
						public static honorsDebugCertificates(param0: globalAndroid.content.Context): boolean;
						/** @deprecated */
						public static isSidewinderDevice(param0: globalAndroid.content.Context): boolean;
						public static getRemoteResource(param0: globalAndroid.content.Context): globalAndroid.content.res.Resources;
						/** @deprecated */
						public static isGooglePlayServicesUid(param0: globalAndroid.content.Context, param1: number): boolean;
						/** @deprecated */
						public static getErrorPendingIntent(param0: number, param1: globalAndroid.content.Context, param2: number): globalAndroid.app.PendingIntent;
						/** @deprecated */
						public static isUserRecoverableError(param0: number): boolean;
						/** @deprecated */
						public static isPlayServicesPossiblyUpdating(param0: globalAndroid.content.Context, param1: number): boolean;
						/** @deprecated */
						public static getClientVersion(param0: globalAndroid.content.Context): number;
						/** @deprecated */
						public static getApkVersion(param0: globalAndroid.content.Context): number;
						/** @deprecated */
						public static isGooglePlayServicesAvailable(param0: globalAndroid.content.Context): number;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export class GoogleSignatureVerifier {
						public static class: java.lang.Class<com.google.android.gms.common.GoogleSignatureVerifier>;
						public isGooglePublicSignedPackage(param0: globalAndroid.content.pm.PackageInfo): boolean;
						public isPackageGoogleSigned(param0: string): boolean;
						public isUidGoogleSigned(param0: number): boolean;
						public static getInstance(param0: globalAndroid.content.Context): com.google.android.gms.common.GoogleSignatureVerifier;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export class ProGuardCanary {
						public static class: java.lang.Class<com.google.android.gms.common.ProGuardCanary>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export class Scopes {
						public static class: java.lang.Class<com.google.android.gms.common.Scopes>;
						public static PROFILE: string;
						public static EMAIL: string;
						public static OPEN_ID: string;
						public static PLUS_LOGIN: string;
						public static PLUS_ME: string;
						public static GAMES: string;
						public static GAMES_LITE: string;
						public static CLOUD_SAVE: string;
						public static APP_STATE: string;
						public static DRIVE_FILE: string;
						public static DRIVE_APPFOLDER: string;
						public static DRIVE_FULL: string;
						public static DRIVE_APPS: string;
						public static FITNESS_ACTIVITY_READ: string;
						public static FITNESS_ACTIVITY_READ_WRITE: string;
						public static FITNESS_LOCATION_READ: string;
						public static FITNESS_LOCATION_READ_WRITE: string;
						public static FITNESS_BODY_READ: string;
						public static FITNESS_BODY_READ_WRITE: string;
						public static FITNESS_NUTRITION_READ: string;
						public static FITNESS_NUTRITION_READ_WRITE: string;
						public static FITNESS_BLOOD_PRESSURE_READ: string;
						public static FITNESS_BLOOD_PRESSURE_READ_WRITE: string;
						public static FITNESS_BLOOD_GLUCOSE_READ: string;
						public static FITNESS_BLOOD_GLUCOSE_READ_WRITE: string;
						public static FITNESS_OXYGEN_SATURATION_READ: string;
						public static FITNESS_OXYGEN_SATURATION_READ_WRITE: string;
						public static FITNESS_BODY_TEMPERATURE_READ: string;
						public static FITNESS_BODY_TEMPERATURE_READ_WRITE: string;
						public static FITNESS_REPRODUCTIVE_HEALTH_READ: string;
						public static FITNESS_REPRODUCTIVE_HEALTH_READ_WRITE: string;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export class SignInButton {
						public static class: java.lang.Class<com.google.android.gms.common.SignInButton>;
						public static SIZE_STANDARD: number;
						public static SIZE_WIDE: number;
						public static SIZE_ICON_ONLY: number;
						public static COLOR_DARK: number;
						public static COLOR_LIGHT: number;
						public static COLOR_AUTO: number;
						public setSize(param0: number): void;
						/** @deprecated */
						public setScopes(param0: native.Array<com.google.android.gms.common.api.Scope>): void;
						/** @deprecated */
						public setStyle(param0: number, param1: number, param2: native.Array<com.google.android.gms.common.api.Scope>): void;
						public constructor(param0: globalAndroid.content.Context);
						public setColorScheme(param0: number): void;
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
						public setOnClickListener(param0: globalAndroid.view.View.OnClickListener): void;
						public setStyle(param0: number, param1: number): void;
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
						public setEnabled(param0: boolean): void;
						public onClick(param0: globalAndroid.view.View): void;
					}
					export module SignInButton {
						export class ButtonSize {
							public static class: java.lang.Class<com.google.android.gms.common.SignInButton.ButtonSize>;
							/**
							 * Constructs a new instance of the com.google.android.gms.common.SignInButton$ButtonSize interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
							});
							public constructor();
						}
						export class ColorScheme {
							public static class: java.lang.Class<com.google.android.gms.common.SignInButton.ColorScheme>;
							/**
							 * Constructs a new instance of the com.google.android.gms.common.SignInButton$ColorScheme interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
							});
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export class SupportErrorDialogFragment {
						public static class: java.lang.Class<com.google.android.gms.common.SupportErrorDialogFragment>;
						public constructor();
						public onCancel(param0: globalAndroid.content.DialogInterface): void;
						public show(param0: globalAndroid.support.v4.app.FragmentManager, param1: string): void;
						public static newInstance(param0: globalAndroid.app.Dialog, param1: globalAndroid.content.DialogInterface.OnCancelListener): com.google.android.gms.common.SupportErrorDialogFragment;
						public onCreateDialog(param0: globalAndroid.os.Bundle): globalAndroid.app.Dialog;
						public static newInstance(param0: globalAndroid.app.Dialog): com.google.android.gms.common.SupportErrorDialogFragment;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export class UserRecoverableException {
						public static class: java.lang.Class<com.google.android.gms.common.UserRecoverableException>;
						public getIntent(): globalAndroid.content.Intent;
						public constructor(param0: string, param1: globalAndroid.content.Intent);
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module annotation {
						export class KeepForSdk {
							public static class: java.lang.Class<com.google.android.gms.common.annotation.KeepForSdk>;
							/**
							 * Constructs a new instance of the com.google.android.gms.common.annotation.KeepForSdk interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
							});
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module annotation {
						export class KeepForSdkWithFieldsAndMethods {
							public static class: java.lang.Class<com.google.android.gms.common.annotation.KeepForSdkWithFieldsAndMethods>;
							/**
							 * Constructs a new instance of the com.google.android.gms.common.annotation.KeepForSdkWithFieldsAndMethods interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
							});
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module annotation {
						export class KeepForSdkWithMembers {
							public static class: java.lang.Class<com.google.android.gms.common.annotation.KeepForSdkWithMembers>;
							/**
							 * Constructs a new instance of the com.google.android.gms.common.annotation.KeepForSdkWithMembers interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
							});
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module annotation {
						export class KeepName {
							public static class: java.lang.Class<com.google.android.gms.common.annotation.KeepName>;
							/**
							 * Constructs a new instance of the com.google.android.gms.common.annotation.KeepName interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
							});
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export class Api<O>  extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.gms.common.api.Api<any>>;
							public constructor(param0: string, param1: com.google.android.gms.common.api.Api.AbstractClientBuilder<any,any>, param2: com.google.android.gms.common.api.Api.ClientKey<any>);
							public zah(): com.google.android.gms.common.api.Api.BaseClientBuilder<any,O>;
							public getClientKey(): com.google.android.gms.common.api.Api.AnyClientKey<any>;
							public zai(): com.google.android.gms.common.api.Api.AbstractClientBuilder<any,O>;
							public getName(): string;
						}
						export module Api {
							export abstract class AbstractClientBuilder<T, O>  extends com.google.android.gms.common.api.Api.BaseClientBuilder<any,any> {
								public static class: java.lang.Class<com.google.android.gms.common.api.Api.AbstractClientBuilder<any,any>>;
								public buildClient(param0: globalAndroid.content.Context, param1: globalAndroid.os.Looper, param2: com.google.android.gms.common.internal.ClientSettings, param3: any, param4: com.google.android.gms.common.api.GoogleApiClient.ConnectionCallbacks, param5: com.google.android.gms.common.api.GoogleApiClient.OnConnectionFailedListener): any;
								public constructor();
							}
							export class AnyClient {
								public static class: java.lang.Class<com.google.android.gms.common.api.Api.AnyClient>;
								/**
								 * Constructs a new instance of the com.google.android.gms.common.api.Api$AnyClient interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
								});
								public constructor();
							}
							export class AnyClientKey<C>  extends java.lang.Object {
								public static class: java.lang.Class<com.google.android.gms.common.api.Api.AnyClientKey<any>>;
								public constructor();
							}
							export class ApiOptions {
								public static class: java.lang.Class<com.google.android.gms.common.api.Api.ApiOptions>;
								/**
								 * Constructs a new instance of the com.google.android.gms.common.api.Api$ApiOptions interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
								});
								public constructor();
							}
							export module ApiOptions {
								export class HasAccountOptions implements com.google.android.gms.common.api.Api.ApiOptions.HasOptions, com.google.android.gms.common.api.Api.ApiOptions.NotRequiredOptions {
									public static class: java.lang.Class<com.google.android.gms.common.api.Api.ApiOptions.HasAccountOptions>;
									/**
									 * Constructs a new instance of the com.google.android.gms.common.api.Api$ApiOptions$HasAccountOptions interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
									 */
									public constructor(implementation: {
										getAccount(): globalAndroid.accounts.Account;
									});
									public constructor();
									public getAccount(): globalAndroid.accounts.Account;
								}
								export class HasGoogleSignInAccountOptions extends com.google.android.gms.common.api.Api.ApiOptions.HasOptions {
									public static class: java.lang.Class<com.google.android.gms.common.api.Api.ApiOptions.HasGoogleSignInAccountOptions>;
									/**
									 * Constructs a new instance of the com.google.android.gms.common.api.Api$ApiOptions$HasGoogleSignInAccountOptions interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
									 */
									public constructor(implementation: {
										getGoogleSignInAccount(): com.google.android.gms.auth.api.signin.GoogleSignInAccount;
									});
									public constructor();
									public getGoogleSignInAccount(): com.google.android.gms.auth.api.signin.GoogleSignInAccount;
								}
								export class HasOptions extends com.google.android.gms.common.api.Api.ApiOptions {
									public static class: java.lang.Class<com.google.android.gms.common.api.Api.ApiOptions.HasOptions>;
									/**
									 * Constructs a new instance of the com.google.android.gms.common.api.Api$ApiOptions$HasOptions interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
									 */
									public constructor(implementation: {
									});
									public constructor();
								}
								export class NoOptions extends com.google.android.gms.common.api.Api.ApiOptions.NotRequiredOptions {
									public static class: java.lang.Class<com.google.android.gms.common.api.Api.ApiOptions.NoOptions>;
								}
								export class NotRequiredOptions extends com.google.android.gms.common.api.Api.ApiOptions {
									public static class: java.lang.Class<com.google.android.gms.common.api.Api.ApiOptions.NotRequiredOptions>;
									/**
									 * Constructs a new instance of the com.google.android.gms.common.api.Api$ApiOptions$NotRequiredOptions interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
									 */
									public constructor(implementation: {
									});
									public constructor();
								}
								export class Optional implements com.google.android.gms.common.api.Api.ApiOptions.HasOptions, com.google.android.gms.common.api.Api.ApiOptions.NotRequiredOptions {
									public static class: java.lang.Class<com.google.android.gms.common.api.Api.ApiOptions.Optional>;
									/**
									 * Constructs a new instance of the com.google.android.gms.common.api.Api$ApiOptions$Optional interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
									 */
									public constructor(implementation: {
									});
									public constructor();
								}
							}
							export class BaseClientBuilder<T, O>  extends java.lang.Object {
								public static class: java.lang.Class<com.google.android.gms.common.api.Api.BaseClientBuilder<any,any>>;
								public static API_PRIORITY_GAMES: number;
								public static API_PRIORITY_PLUS: number;
								public static API_PRIORITY_OTHER: number;
								public getImpliedScopes(param0: O): java.util.List<com.google.android.gms.common.api.Scope>;
								public getPriority(): number;
								public constructor();
							}
							export class Client extends com.google.android.gms.common.api.Api.AnyClient {
								public static class: java.lang.Class<com.google.android.gms.common.api.Api.Client>;
								/**
								 * Constructs a new instance of the com.google.android.gms.common.api.Api$Client interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									connect(param0: com.google.android.gms.common.internal.BaseGmsClient.ConnectionProgressReportCallbacks): void;
									disconnect(): void;
									isConnected(): boolean;
									isConnecting(): boolean;
									getRemoteService(param0: com.google.android.gms.common.internal.IAccountAccessor, param1: java.util.Set<com.google.android.gms.common.api.Scope>): void;
									requiresSignIn(): boolean;
									onUserSignOut(param0: com.google.android.gms.common.internal.BaseGmsClient.SignOutCallbacks): void;
									requiresAccount(): boolean;
									requiresGooglePlayServices(): boolean;
									providesSignIn(): boolean;
									getSignInIntent(): globalAndroid.content.Intent;
									dump(param0: string, param1: java.io.FileDescriptor, param2: java.io.PrintWriter, param3: native.Array<string>): void;
									getServiceBrokerBinder(): globalAndroid.os.IBinder;
									getRequiredFeatures(): native.Array<com.google.android.gms.common.Feature>;
									getEndpointPackageName(): string;
									getMinApkVersion(): number;
									getAvailableFeatures(): native.Array<com.google.android.gms.common.Feature>;
								});
								public constructor();
								public getRemoteService(param0: com.google.android.gms.common.internal.IAccountAccessor, param1: java.util.Set<com.google.android.gms.common.api.Scope>): void;
								public connect(param0: com.google.android.gms.common.internal.BaseGmsClient.ConnectionProgressReportCallbacks): void;
								public requiresSignIn(): boolean;
								public onUserSignOut(param0: com.google.android.gms.common.internal.BaseGmsClient.SignOutCallbacks): void;
								public getSignInIntent(): globalAndroid.content.Intent;
								public getRequiredFeatures(): native.Array<com.google.android.gms.common.Feature>;
								public getServiceBrokerBinder(): globalAndroid.os.IBinder;
								public getEndpointPackageName(): string;
								public requiresGooglePlayServices(): boolean;
								public isConnected(): boolean;
								public requiresAccount(): boolean;
								public dump(param0: string, param1: java.io.FileDescriptor, param2: java.io.PrintWriter, param3: native.Array<string>): void;
								public getMinApkVersion(): number;
								public disconnect(): void;
								public getAvailableFeatures(): native.Array<com.google.android.gms.common.Feature>;
								public isConnecting(): boolean;
								public providesSignIn(): boolean;
							}
							export class ClientKey<C>  extends com.google.android.gms.common.api.Api.AnyClientKey<any> {
								public static class: java.lang.Class<com.google.android.gms.common.api.Api.ClientKey<any>>;
								public constructor();
							}
							export class SimpleClient<T>  extends com.google.android.gms.common.api.Api.AnyClient {
								public static class: java.lang.Class<com.google.android.gms.common.api.Api.SimpleClient<any>>;
								/**
								 * Constructs a new instance of the com.google.android.gms.common.api.Api$SimpleClient interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									getStartServiceAction(): string;
									getServiceDescriptor(): string;
									createServiceInterface(param0: globalAndroid.os.IBinder): any;
									getContext(): globalAndroid.content.Context;
									setState(param0: number, param1: any): void;
								});
								public constructor();
								public getStartServiceAction(): string;
								public createServiceInterface(param0: globalAndroid.os.IBinder): any;
								public getContext(): globalAndroid.content.Context;
								public getServiceDescriptor(): string;
								public setState(param0: number, param1: any): void;
							}
							export class zaa<T, O>  extends com.google.android.gms.common.api.Api.BaseClientBuilder<any,any> {
								public static class: java.lang.Class<com.google.android.gms.common.api.Api.zaa<any,any>>;
							}
							export class zab<C>  extends com.google.android.gms.common.api.Api.AnyClientKey<any> {
								public static class: java.lang.Class<com.google.android.gms.common.api.Api.zab<any>>;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export class ApiException {
							public static class: java.lang.Class<com.google.android.gms.common.api.ApiException>;
							public mStatus: com.google.android.gms.common.api.Status;
							public getStatusCode(): number;
							public constructor(param0: com.google.android.gms.common.api.Status);
							/** @deprecated */
							public getStatusMessage(): string;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export class AvailabilityException {
							public static class: java.lang.Class<com.google.android.gms.common.api.AvailabilityException>;
							public zaj(): globalAndroid.support.v4.util.ArrayMap<com.google.android.gms.common.api.internal.zai<any>,com.google.android.gms.common.ConnectionResult>;
							public constructor(param0: globalAndroid.support.v4.util.ArrayMap<com.google.android.gms.common.api.internal.zai<any>,com.google.android.gms.common.ConnectionResult>);
							public getMessage(): string;
							public getConnectionResult(param0: com.google.android.gms.common.api.GoogleApi<any>): com.google.android.gms.common.ConnectionResult;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export class Batch extends com.google.android.gms.common.api.internal.BasePendingResult<com.google.android.gms.common.api.BatchResult> {
							public static class: java.lang.Class<com.google.android.gms.common.api.Batch>;
							public cancel(): void;
							public createFailedResult(param0: com.google.android.gms.common.api.Status): com.google.android.gms.common.api.BatchResult;
							public createFailedResult(param0: com.google.android.gms.common.api.Status): any;
						}
						export module Batch {
							export class Builder {
								public static class: java.lang.Class<com.google.android.gms.common.api.Batch.Builder>;
								public build(): com.google.android.gms.common.api.Batch;
								public add(param0: com.google.android.gms.common.api.PendingResult<any>): com.google.android.gms.common.api.BatchResultToken<any>;
								public constructor(param0: com.google.android.gms.common.api.GoogleApiClient);
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export class BatchResult extends com.google.android.gms.common.api.Result {
							public static class: java.lang.Class<com.google.android.gms.common.api.BatchResult>;
							public getStatus(): com.google.android.gms.common.api.Status;
							public take(param0: com.google.android.gms.common.api.BatchResultToken<any>): com.google.android.gms.common.api.Result;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export class BatchResultToken<R>  extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.gms.common.api.BatchResultToken<any>>;
							public mId: number;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export class BooleanResult extends com.google.android.gms.common.api.Result {
							public static class: java.lang.Class<com.google.android.gms.common.api.BooleanResult>;
							public constructor(param0: com.google.android.gms.common.api.Status, param1: boolean);
							public getStatus(): com.google.android.gms.common.api.Status;
							public hashCode(): number;
							public getValue(): boolean;
							public equals(param0: any): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export class CommonStatusCodes {
							public static class: java.lang.Class<com.google.android.gms.common.api.CommonStatusCodes>;
							public static SUCCESS_CACHE: number;
							public static SUCCESS: number;
							public static SERVICE_VERSION_UPDATE_REQUIRED: number;
							public static SERVICE_DISABLED: number;
							public static SIGN_IN_REQUIRED: number;
							public static INVALID_ACCOUNT: number;
							public static RESOLUTION_REQUIRED: number;
							public static NETWORK_ERROR: number;
							public static INTERNAL_ERROR: number;
							public static DEVELOPER_ERROR: number;
							public static ERROR: number;
							public static INTERRUPTED: number;
							public static TIMEOUT: number;
							public static CANCELED: number;
							public static API_NOT_CONNECTED: number;
							public constructor();
							public static getStatusCodeString(param0: number): string;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export class DataBufferResponse<T, R>  extends com.google.android.gms.common.api.Response<any> implements com.google.android.gms.common.data.DataBuffer<any>  {
							public static class: java.lang.Class<com.google.android.gms.common.api.DataBufferResponse<any,any>>;
							public constructor();
							public singleRefIterator(): java.util.Iterator<any>;
							public getMetadata(): globalAndroid.os.Bundle;
							public close(): void;
							public iterator(): java.util.Iterator<any>;
							/** @deprecated */
							public close(): void;
							public get(param0: number): any;
							public isClosed(): boolean;
							public release(): void;
							/** @deprecated */
							public isClosed(): boolean;
							public getCount(): number;
							public constructor(param0: any);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export class GoogleApi<O>  extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.gms.common.api.GoogleApi<any>>;
							public zabm: com.google.android.gms.common.api.internal.GoogleApiManager;
							public doRegisterEventListener(param0: com.google.android.gms.common.api.internal.RegistrationMethods<any,any>): com.google.android.gms.tasks.Task<any>;
							public registerListener(param0: any, param1: string): com.google.android.gms.common.api.internal.ListenerHolder<any>;
							public zaa(param0: globalAndroid.os.Looper, param1: com.google.android.gms.common.api.internal.GoogleApiManager.zaa<O>): com.google.android.gms.common.api.Api.Client;
							public doWrite(param0: com.google.android.gms.common.api.internal.TaskApiCall<any,any>): com.google.android.gms.tasks.Task<any>;
							public doBestEffortWrite(param0: com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<any,any>): com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<any,any>;
							public doUnregisterEventListener(param0: com.google.android.gms.common.api.internal.ListenerHolder.ListenerKey<any>): com.google.android.gms.tasks.Task<java.lang.Boolean>;
							public getLooper(): globalAndroid.os.Looper;
							public getApi(): com.google.android.gms.common.api.Api<O>;
							/** @deprecated */
							public constructor(param0: globalAndroid.content.Context, param1: com.google.android.gms.common.api.Api<O>, param2: O, param3: com.google.android.gms.common.api.internal.StatusExceptionMapper);
							public getApiOptions(): O;
							public constructor(param0: globalAndroid.app.Activity, param1: com.google.android.gms.common.api.Api<O>, param2: O, param3: com.google.android.gms.common.api.GoogleApi.Settings);
							public zak(): com.google.android.gms.common.api.internal.zai<O>;
							public createClientSettingsBuilder(): com.google.android.gms.common.internal.ClientSettings.Builder;
							/** @deprecated */
							public doRegisterEventListener(param0: com.google.android.gms.common.api.internal.RegisterListenerMethod<any,any>, param1: com.google.android.gms.common.api.internal.UnregisterListenerMethod<any,any>): com.google.android.gms.tasks.Task<any>;
							public getInstanceId(): number;
							/** @deprecated */
							public constructor(param0: globalAndroid.content.Context, param1: com.google.android.gms.common.api.Api<O>, param2: O, param3: globalAndroid.os.Looper, param4: com.google.android.gms.common.api.internal.StatusExceptionMapper);
							public doRead(param0: com.google.android.gms.common.api.internal.TaskApiCall<any,any>): com.google.android.gms.tasks.Task<any>;
							public constructor(param0: globalAndroid.content.Context, param1: com.google.android.gms.common.api.Api<O>, param2: globalAndroid.os.Looper);
							public getApplicationContext(): globalAndroid.content.Context;
							public doWrite(param0: com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<any,any>): com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<any,any>;
							/** @deprecated */
							public constructor(param0: globalAndroid.app.Activity, param1: com.google.android.gms.common.api.Api<O>, param2: O, param3: com.google.android.gms.common.api.internal.StatusExceptionMapper);
							public disconnectService(): com.google.android.gms.tasks.Task<java.lang.Boolean>;
							public zaa(param0: globalAndroid.content.Context, param1: globalAndroid.os.Handler): com.google.android.gms.common.api.internal.zace;
							public doBestEffortWrite(param0: com.google.android.gms.common.api.internal.TaskApiCall<any,any>): com.google.android.gms.tasks.Task<any>;
							public asGoogleApiClient(): com.google.android.gms.common.api.GoogleApiClient;
							public constructor(param0: globalAndroid.content.Context, param1: com.google.android.gms.common.api.Api<O>, param2: O, param3: com.google.android.gms.common.api.GoogleApi.Settings);
							public doRead(param0: com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<any,any>): com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<any,any>;
						}
						export module GoogleApi {
							export class Settings {
								public static class: java.lang.Class<com.google.android.gms.common.api.GoogleApi.Settings>;
								public static DEFAULT_SETTINGS: com.google.android.gms.common.api.GoogleApi.Settings;
								public zabn: com.google.android.gms.common.api.internal.StatusExceptionMapper;
								public zabo: globalAndroid.os.Looper;
							}
							export module Settings {
								export class Builder {
									public static class: java.lang.Class<com.google.android.gms.common.api.GoogleApi.Settings.Builder>;
									public constructor();
									public setLooper(param0: globalAndroid.os.Looper): com.google.android.gms.common.api.GoogleApi.Settings.Builder;
									public build(): com.google.android.gms.common.api.GoogleApi.Settings;
									public setMapper(param0: com.google.android.gms.common.api.internal.StatusExceptionMapper): com.google.android.gms.common.api.GoogleApi.Settings.Builder;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export class GoogleApiActivity {
							public static class: java.lang.Class<com.google.android.gms.common.api.GoogleApiActivity>;
							public constructor();
							public onCancel(param0: globalAndroid.content.DialogInterface): void;
							public onActivityResult(param0: number, param1: number, param2: globalAndroid.content.Intent): void;
							public onCreate(param0: globalAndroid.os.Bundle): void;
							public static zaa(param0: globalAndroid.content.Context, param1: globalAndroid.app.PendingIntent, param2: number): globalAndroid.app.PendingIntent;
							public static zaa(param0: globalAndroid.content.Context, param1: globalAndroid.app.PendingIntent, param2: number, param3: boolean): globalAndroid.content.Intent;
							public onSaveInstanceState(param0: globalAndroid.os.Bundle): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export abstract class GoogleApiClient {
							public static class: java.lang.Class<com.google.android.gms.common.api.GoogleApiClient>;
							public static DEFAULT_ACCOUNT: string;
							public static SIGN_IN_MODE_REQUIRED: number;
							public static SIGN_IN_MODE_OPTIONAL: number;
							public isConnectionFailedListenerRegistered(param0: com.google.android.gms.common.api.GoogleApiClient.OnConnectionFailedListener): boolean;
							public static dumpAll(param0: string, param1: java.io.FileDescriptor, param2: java.io.PrintWriter, param3: native.Array<string>): void;
							public registerConnectionFailedListener(param0: com.google.android.gms.common.api.GoogleApiClient.OnConnectionFailedListener): void;
							public unregisterConnectionCallbacks(param0: com.google.android.gms.common.api.GoogleApiClient.ConnectionCallbacks): void;
							public registerConnectionCallbacks(param0: com.google.android.gms.common.api.GoogleApiClient.ConnectionCallbacks): void;
							public getLooper(): globalAndroid.os.Looper;
							public dump(param0: string, param1: java.io.FileDescriptor, param2: java.io.PrintWriter, param3: native.Array<string>): void;
							public zaa(param0: com.google.android.gms.common.api.internal.zacm<any>): void;
							public hasConnectedApi(param0: com.google.android.gms.common.api.Api<any>): boolean;
							public blockingConnect(): com.google.android.gms.common.ConnectionResult;
							public zab(param0: com.google.android.gms.common.api.internal.zacm<any>): void;
							public connect(): void;
							public stopAutoManage(param0: globalAndroid.support.v4.app.FragmentActivity): void;
							public execute(param0: com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<any,any>): com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<any,any>;
							public maybeSignOut(): void;
							public clearDefaultAccountAndReconnect(): com.google.android.gms.common.api.PendingResult<com.google.android.gms.common.api.Status>;
							public hasApi(param0: com.google.android.gms.common.api.Api<any>): boolean;
							public constructor();
							public isConnectionCallbacksRegistered(param0: com.google.android.gms.common.api.GoogleApiClient.ConnectionCallbacks): boolean;
							public getContext(): globalAndroid.content.Context;
							public disconnect(): void;
							public isConnected(): boolean;
							public reconnect(): void;
							public unregisterConnectionFailedListener(param0: com.google.android.gms.common.api.GoogleApiClient.OnConnectionFailedListener): void;
							public getConnectionResult(param0: com.google.android.gms.common.api.Api<any>): com.google.android.gms.common.ConnectionResult;
							public isConnecting(): boolean;
							public enqueue(param0: com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<any,any>): com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<any,any>;
							public registerListener(param0: any): com.google.android.gms.common.api.internal.ListenerHolder<any>;
							public blockingConnect(param0: number, param1: java.util.concurrent.TimeUnit): com.google.android.gms.common.ConnectionResult;
							public maybeSignIn(param0: com.google.android.gms.common.api.internal.SignInConnectionListener): boolean;
							public static getAllClients(): java.util.Set<com.google.android.gms.common.api.GoogleApiClient>;
							public getClient(param0: com.google.android.gms.common.api.Api.AnyClientKey<any>): com.google.android.gms.common.api.Api.Client;
							public connect(param0: number): void;
						}
						export module GoogleApiClient {
							export class Builder {
								public static class: java.lang.Class<com.google.android.gms.common.api.GoogleApiClient.Builder>;
								public build(): com.google.android.gms.common.api.GoogleApiClient;
								public useDefaultAccount(): com.google.android.gms.common.api.GoogleApiClient.Builder;
								public addConnectionCallbacks(param0: com.google.android.gms.common.api.GoogleApiClient.ConnectionCallbacks): com.google.android.gms.common.api.GoogleApiClient.Builder;
								public buildClientSettings(): com.google.android.gms.common.internal.ClientSettings;
								public addScopeNames(param0: native.Array<string>): com.google.android.gms.common.api.GoogleApiClient.Builder;
								public addScope(param0: com.google.android.gms.common.api.Scope): com.google.android.gms.common.api.GoogleApiClient.Builder;
								public addOnConnectionFailedListener(param0: com.google.android.gms.common.api.GoogleApiClient.OnConnectionFailedListener): com.google.android.gms.common.api.GoogleApiClient.Builder;
								public enableAutoManage(param0: globalAndroid.support.v4.app.FragmentActivity, param1: com.google.android.gms.common.api.GoogleApiClient.OnConnectionFailedListener): com.google.android.gms.common.api.GoogleApiClient.Builder;
								public constructor(param0: globalAndroid.content.Context, param1: com.google.android.gms.common.api.GoogleApiClient.ConnectionCallbacks, param2: com.google.android.gms.common.api.GoogleApiClient.OnConnectionFailedListener);
								public enableAutoManage(param0: globalAndroid.support.v4.app.FragmentActivity, param1: number, param2: com.google.android.gms.common.api.GoogleApiClient.OnConnectionFailedListener): com.google.android.gms.common.api.GoogleApiClient.Builder;
								public setViewForPopups(param0: globalAndroid.view.View): com.google.android.gms.common.api.GoogleApiClient.Builder;
								public setHandler(param0: globalAndroid.os.Handler): com.google.android.gms.common.api.GoogleApiClient.Builder;
								public addApiIfAvailable(param0: com.google.android.gms.common.api.Api<any>, param1: native.Array<com.google.android.gms.common.api.Scope>): com.google.android.gms.common.api.GoogleApiClient.Builder;
								public constructor(param0: globalAndroid.content.Context);
								public addApi(param0: com.google.android.gms.common.api.Api<any>): com.google.android.gms.common.api.GoogleApiClient.Builder;
								public addApi(param0: com.google.android.gms.common.api.Api<any>, param1: com.google.android.gms.common.api.Api.ApiOptions.HasOptions): com.google.android.gms.common.api.GoogleApiClient.Builder;
								public addApiIfAvailable(param0: com.google.android.gms.common.api.Api<any>, param1: com.google.android.gms.common.api.Api.ApiOptions.HasOptions, param2: native.Array<com.google.android.gms.common.api.Scope>): com.google.android.gms.common.api.GoogleApiClient.Builder;
								public setGravityForPopups(param0: number): com.google.android.gms.common.api.GoogleApiClient.Builder;
								public setAccountName(param0: string): com.google.android.gms.common.api.GoogleApiClient.Builder;
							}
							export class ConnectionCallbacks {
								public static class: java.lang.Class<com.google.android.gms.common.api.GoogleApiClient.ConnectionCallbacks>;
								/**
								 * Constructs a new instance of the com.google.android.gms.common.api.GoogleApiClient$ConnectionCallbacks interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									onConnected(param0: globalAndroid.os.Bundle): void;
									onConnectionSuspended(param0: number): void;
								});
								public constructor();
								public static CAUSE_SERVICE_DISCONNECTED: number;
								public static CAUSE_NETWORK_LOST: number;
								public onConnected(param0: globalAndroid.os.Bundle): void;
								public onConnectionSuspended(param0: number): void;
							}
							export class OnConnectionFailedListener {
								public static class: java.lang.Class<com.google.android.gms.common.api.GoogleApiClient.OnConnectionFailedListener>;
								/**
								 * Constructs a new instance of the com.google.android.gms.common.api.GoogleApiClient$OnConnectionFailedListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									onConnectionFailed(param0: com.google.android.gms.common.ConnectionResult): void;
								});
								public constructor();
								public onConnectionFailed(param0: com.google.android.gms.common.ConnectionResult): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export abstract class OptionalPendingResult<R>  extends com.google.android.gms.common.api.PendingResult<any> {
							public static class: java.lang.Class<com.google.android.gms.common.api.OptionalPendingResult<any>>;
							public constructor();
							public get(): any;
							public isDone(): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export abstract class PendingResult<R>  extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.gms.common.api.PendingResult<any>>;
							public constructor();
							public cancel(): void;
							public isCanceled(): boolean;
							public await(param0: number, param1: java.util.concurrent.TimeUnit): R;
							public await(): R;
							public addStatusListener(param0: com.google.android.gms.common.api.PendingResult.StatusListener): void;
							public then(param0: com.google.android.gms.common.api.ResultTransform<any,any>): com.google.android.gms.common.api.TransformedResult<any>;
							public setResultCallback(param0: com.google.android.gms.common.api.ResultCallback<any>, param1: number, param2: java.util.concurrent.TimeUnit): void;
							public setResultCallback(param0: com.google.android.gms.common.api.ResultCallback<any>): void;
							public zam(): java.lang.Integer;
						}
						export module PendingResult {
							export class StatusListener {
								public static class: java.lang.Class<com.google.android.gms.common.api.PendingResult.StatusListener>;
								/**
								 * Constructs a new instance of the com.google.android.gms.common.api.PendingResult$StatusListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									onComplete(param0: com.google.android.gms.common.api.Status): void;
								});
								public constructor();
								public onComplete(param0: com.google.android.gms.common.api.Status): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export class PendingResults {
							public static class: java.lang.Class<com.google.android.gms.common.api.PendingResults>;
							public static immediateFailedResult(param0: com.google.android.gms.common.api.Result, param1: com.google.android.gms.common.api.GoogleApiClient): com.google.android.gms.common.api.PendingResult<any>;
							public static immediatePendingResult(param0: com.google.android.gms.common.api.Status): com.google.android.gms.common.api.PendingResult<com.google.android.gms.common.api.Status>;
							public static canceledPendingResult(param0: com.google.android.gms.common.api.Result): com.google.android.gms.common.api.PendingResult<any>;
							public static immediatePendingResult(param0: com.google.android.gms.common.api.Result, param1: com.google.android.gms.common.api.GoogleApiClient): com.google.android.gms.common.api.OptionalPendingResult<any>;
							public static immediatePendingResult(param0: com.google.android.gms.common.api.Result): com.google.android.gms.common.api.OptionalPendingResult<any>;
							public static immediatePendingResult(param0: com.google.android.gms.common.api.Status, param1: com.google.android.gms.common.api.GoogleApiClient): com.google.android.gms.common.api.PendingResult<com.google.android.gms.common.api.Status>;
							public static canceledPendingResult(): com.google.android.gms.common.api.PendingResult<com.google.android.gms.common.api.Status>;
						}
						export module PendingResults {
							export class zaa<R>  extends com.google.android.gms.common.api.internal.BasePendingResult<any> {
								public static class: java.lang.Class<com.google.android.gms.common.api.PendingResults.zaa<any>>;
								public constructor(param0: any);
								public constructor(param0: com.google.android.gms.common.api.GoogleApiClient);
								public constructor(param0: com.google.android.gms.common.api.internal.BasePendingResult.CallbackHandler<any>);
								public createFailedResult(param0: com.google.android.gms.common.api.Status): any;
								public constructor();
								/** @deprecated */
								public constructor(param0: globalAndroid.os.Looper);
							}
							export class zab<R>  extends com.google.android.gms.common.api.internal.BasePendingResult<any> {
								public static class: java.lang.Class<com.google.android.gms.common.api.PendingResults.zab<any>>;
								public constructor(param0: com.google.android.gms.common.api.GoogleApiClient);
								public constructor(param0: com.google.android.gms.common.api.internal.BasePendingResult.CallbackHandler<any>);
								public constructor(param0: com.google.android.gms.common.api.GoogleApiClient, param1: any);
								public createFailedResult(param0: com.google.android.gms.common.api.Status): any;
								public constructor();
								/** @deprecated */
								public constructor(param0: globalAndroid.os.Looper);
							}
							export class zac<R>  extends com.google.android.gms.common.api.internal.BasePendingResult<any> {
								public static class: java.lang.Class<com.google.android.gms.common.api.PendingResults.zac<any>>;
								public constructor(param0: com.google.android.gms.common.api.GoogleApiClient);
								public constructor(param0: com.google.android.gms.common.api.internal.BasePendingResult.CallbackHandler<any>);
								public createFailedResult(param0: com.google.android.gms.common.api.Status): any;
								public constructor();
								/** @deprecated */
								public constructor(param0: globalAndroid.os.Looper);
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export class Releasable {
							public static class: java.lang.Class<com.google.android.gms.common.api.Releasable>;
							/**
							 * Constructs a new instance of the com.google.android.gms.common.api.Releasable interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								release(): void;
							});
							public constructor();
							public release(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export class ResolvableApiException extends com.google.android.gms.common.api.ApiException {
							public static class: java.lang.Class<com.google.android.gms.common.api.ResolvableApiException>;
							public constructor(param0: com.google.android.gms.common.api.Status);
							public startResolutionForResult(param0: globalAndroid.app.Activity, param1: number): void;
							public getResolution(): globalAndroid.app.PendingIntent;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export abstract class ResolvingResultCallbacks<R>  extends com.google.android.gms.common.api.ResultCallbacks<any> {
							public static class: java.lang.Class<com.google.android.gms.common.api.ResolvingResultCallbacks<any>>;
							public constructor();
							public onSuccess(param0: any): void;
							public constructor(param0: globalAndroid.app.Activity, param1: number);
							public onUnresolvableFailure(param0: com.google.android.gms.common.api.Status): void;
							public onResult(param0: any): void;
							public onFailure(param0: com.google.android.gms.common.api.Status): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export class Response<T>  extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.gms.common.api.Response<any>>;
							public constructor();
							public getResult(): T;
							public constructor(param0: T);
							public setResult(param0: T): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export class Result {
							public static class: java.lang.Class<com.google.android.gms.common.api.Result>;
							/**
							 * Constructs a new instance of the com.google.android.gms.common.api.Result interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								getStatus(): com.google.android.gms.common.api.Status;
							});
							public constructor();
							public getStatus(): com.google.android.gms.common.api.Status;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export class ResultCallback<R>  extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.gms.common.api.ResultCallback<any>>;
							/**
							 * Constructs a new instance of the com.google.android.gms.common.api.ResultCallback<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								onResult(param0: R): void;
							});
							public constructor();
							public onResult(param0: R): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export abstract class ResultCallbacks<R>  extends com.google.android.gms.common.api.ResultCallback<any> {
							public static class: java.lang.Class<com.google.android.gms.common.api.ResultCallbacks<any>>;
							public constructor();
							public onSuccess(param0: any): void;
							public onResult(param0: any): void;
							public onFailure(param0: com.google.android.gms.common.api.Status): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export abstract class ResultTransform<R, S>  extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.gms.common.api.ResultTransform<any,any>>;
							public constructor();
							public onSuccess(param0: R): com.google.android.gms.common.api.PendingResult<S>;
							public createFailedResult(param0: com.google.android.gms.common.api.Status): com.google.android.gms.common.api.PendingResult<S>;
							public onFailure(param0: com.google.android.gms.common.api.Status): com.google.android.gms.common.api.Status;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export class Scope extends com.google.android.gms.common.internal.safeparcel.AbstractSafeParcelable implements com.google.android.gms.common.internal.ReflectedParcelable {
							public static class: java.lang.Class<com.google.android.gms.common.api.Scope>;
							public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.gms.common.api.Scope>;
							public constructor();
							public getScopeUri(): string;
							public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
							public hashCode(): number;
							public constructor(param0: string);
							public toString(): string;
							public equals(param0: any): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export class Status extends com.google.android.gms.common.internal.safeparcel.AbstractSafeParcelable implements com.google.android.gms.common.api.Result, com.google.android.gms.common.internal.ReflectedParcelable {
							public static class: java.lang.Class<com.google.android.gms.common.api.Status>;
							public static RESULT_SUCCESS: com.google.android.gms.common.api.Status;
							public static RESULT_INTERRUPTED: com.google.android.gms.common.api.Status;
							public static RESULT_INTERNAL_ERROR: com.google.android.gms.common.api.Status;
							public static RESULT_TIMEOUT: com.google.android.gms.common.api.Status;
							public static RESULT_CANCELED: com.google.android.gms.common.api.Status;
							public static RESULT_DEAD_CLIENT: com.google.android.gms.common.api.Status;
							public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.gms.common.api.Status>;
							public constructor();
							public hasResolution(): boolean;
							public getStatus(): com.google.android.gms.common.api.Status;
							public isInterrupted(): boolean;
							public hashCode(): number;
							public toString(): string;
							public getResolution(): globalAndroid.app.PendingIntent;
							public constructor(param0: number);
							public isCanceled(): boolean;
							public getStatusCode(): number;
							public getStatusMessage(): string;
							public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
							public constructor(param0: number, param1: string, param2: globalAndroid.app.PendingIntent);
							public startResolutionForResult(param0: globalAndroid.app.Activity, param1: number): void;
							public equals(param0: any): boolean;
							public isSuccess(): boolean;
							public constructor(param0: number, param1: string);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export abstract class TransformedResult<R>  extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.gms.common.api.TransformedResult<any>>;
							public constructor();
							public then(param0: com.google.android.gms.common.api.ResultTransform<any,any>): com.google.android.gms.common.api.TransformedResult<any>;
							public andFinally(param0: com.google.android.gms.common.api.ResultCallbacks<any>): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export class UnsupportedApiCallException {
							public static class: java.lang.Class<com.google.android.gms.common.api.UnsupportedApiCallException>;
							public constructor(param0: com.google.android.gms.common.Feature);
							public getMessage(): string;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export module internal {
							export abstract class ActivityLifecycleObserver {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.ActivityLifecycleObserver>;
								public onStopCallOnce(param0: java.lang.Runnable): com.google.android.gms.common.api.internal.ActivityLifecycleObserver;
								public static of(param0: globalAndroid.app.Activity): com.google.android.gms.common.api.internal.ActivityLifecycleObserver;
								public constructor();
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export module internal {
							export class ApiExceptionMapper extends com.google.android.gms.common.api.internal.StatusExceptionMapper {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.ApiExceptionMapper>;
								public constructor();
								public getException(param0: com.google.android.gms.common.api.Status): java.lang.Exception;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export module internal {
							export class BackgroundDetector {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.BackgroundDetector>;
								public readCurrentStateIfPossible(param0: boolean): boolean;
								public isInBackground(): boolean;
								public onActivityResumed(param0: globalAndroid.app.Activity): void;
								public onActivityCreated(param0: globalAndroid.app.Activity, param1: globalAndroid.os.Bundle): void;
								public onConfigurationChanged(param0: globalAndroid.content.res.Configuration): void;
								public onTrimMemory(param0: number): void;
								public onLowMemory(): void;
								public addListener(param0: com.google.android.gms.common.api.internal.BackgroundDetector.BackgroundStateChangeListener): void;
								public onActivityStarted(param0: globalAndroid.app.Activity): void;
								public onActivitySaveInstanceState(param0: globalAndroid.app.Activity, param1: globalAndroid.os.Bundle): void;
								public onActivityPaused(param0: globalAndroid.app.Activity): void;
								public onActivityDestroyed(param0: globalAndroid.app.Activity): void;
								public static initialize(param0: globalAndroid.app.Application): void;
								public onActivityStopped(param0: globalAndroid.app.Activity): void;
								public static getInstance(): com.google.android.gms.common.api.internal.BackgroundDetector;
							}
							export module BackgroundDetector {
								export class BackgroundStateChangeListener {
									public static class: java.lang.Class<com.google.android.gms.common.api.internal.BackgroundDetector.BackgroundStateChangeListener>;
									/**
									 * Constructs a new instance of the com.google.android.gms.common.api.internal.BackgroundDetector$BackgroundStateChangeListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
									 */
									public constructor(implementation: {
										onBackgroundStateChanged(param0: boolean): void;
									});
									public constructor();
									public onBackgroundStateChanged(param0: boolean): void;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export module internal {
							export class BaseImplementation {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.BaseImplementation>;
								public constructor();
							}
							export module BaseImplementation {
								export abstract class ApiMethodImpl<R, A>  extends com.google.android.gms.common.api.internal.BasePendingResult<any> implements com.google.android.gms.common.api.internal.BaseImplementation.ResultHolder<any>  {
									public static class: java.lang.Class<com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<any,any>>;
									public constructor();
									public getApi(): com.google.android.gms.common.api.Api<any>;
									/** @deprecated */
									public constructor(param0: com.google.android.gms.common.api.Api.AnyClientKey<any>, param1: com.google.android.gms.common.api.GoogleApiClient);
									public run(param0: any): void;
									public constructor(param0: com.google.android.gms.common.api.GoogleApiClient);
									public setFailedResult(param0: com.google.android.gms.common.api.Status): void;
									/** @deprecated */
									public constructor(param0: globalAndroid.os.Looper);
									public getClientKey(): com.google.android.gms.common.api.Api.AnyClientKey<any>;
									public onSetFailedResult(param0: any): void;
									public constructor(param0: com.google.android.gms.common.api.internal.BasePendingResult.CallbackHandler<any>);
									public doExecute(param0: any): void;
									public setResult(param0: any): void;
									public constructor(param0: com.google.android.gms.common.api.Api<any>, param1: com.google.android.gms.common.api.GoogleApiClient);
								}
								export class ResultHolder<R>  extends java.lang.Object {
									public static class: java.lang.Class<com.google.android.gms.common.api.internal.BaseImplementation.ResultHolder<any>>;
									/**
									 * Constructs a new instance of the com.google.android.gms.common.api.internal.BaseImplementation$ResultHolder interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
									 */
									public constructor(implementation: {
										setResult(param0: R): void;
										setFailedResult(param0: com.google.android.gms.common.api.Status): void;
									});
									public constructor();
									public setResult(param0: R): void;
									public setFailedResult(param0: com.google.android.gms.common.api.Status): void;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export module internal {
							export abstract class BasePendingResult<R>  extends com.google.android.gms.common.api.PendingResult<any> {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.BasePendingResult<any>>;
								public setResultCallback(param0: com.google.android.gms.common.api.ResultCallback<any>): void;
								public setCancelToken(param0: com.google.android.gms.common.internal.ICancelToken): void;
								public then(param0: com.google.android.gms.common.api.ResultTransform<any,any>): com.google.android.gms.common.api.TransformedResult<any>;
								public static zab(param0: com.google.android.gms.common.api.Result): void;
								public cancel(): void;
								public zab(param0: com.google.android.gms.common.api.Status): void;
								public constructor(param0: com.google.android.gms.common.api.GoogleApiClient);
								public constructor(param0: com.google.android.gms.common.api.internal.BasePendingResult.CallbackHandler<any>);
								public zat(): boolean;
								public createFailedResult(param0: com.google.android.gms.common.api.Status): any;
								public constructor();
								public await(param0: number, param1: java.util.concurrent.TimeUnit): any;
								public setResultCallback(param0: com.google.android.gms.common.api.ResultCallback<any>, param1: number, param2: java.util.concurrent.TimeUnit): void;
								/** @deprecated */
								public constructor(param0: globalAndroid.os.Looper);
								public setResult(param0: any): void;
								public await(): any;
								public zaa(param0: com.google.android.gms.common.api.internal.zacs): void;
								public zau(): void;
								public isCanceled(): boolean;
								public isReady(): boolean;
								public addStatusListener(param0: com.google.android.gms.common.api.PendingResult.StatusListener): void;
								public zam(): java.lang.Integer;
							}
							export module BasePendingResult {
								export class CallbackHandler<R>  extends com.google.android.gms.internal.base.zal {
									public static class: java.lang.Class<com.google.android.gms.common.api.internal.BasePendingResult.CallbackHandler<any>>;
									public constructor();
									public zaa(param0: com.google.android.gms.common.api.ResultCallback<any>, param1: any): void;
									public constructor(param0: globalAndroid.os.Looper, param1: globalAndroid.os.Handler.Callback);
									public handleMessage(param0: globalAndroid.os.Message): void;
									public constructor(param0: globalAndroid.os.Looper);
								}
								export class zaa {
									public static class: java.lang.Class<com.google.android.gms.common.api.internal.BasePendingResult.zaa>;
									public finalize(): void;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export module internal {
							export abstract class DataHolderNotifier<L>  extends com.google.android.gms.common.api.internal.ListenerHolder.Notifier<any> {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.DataHolderNotifier<any>>;
								public onNotifyListenerFailed(): void;
								public notifyListener(param0: any, param1: com.google.android.gms.common.data.DataHolder): void;
								public notifyListener(param0: any): void;
								public constructor(param0: com.google.android.gms.common.data.DataHolder);
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export module internal {
							export class DataHolderResult implements com.google.android.gms.common.api.Releasable, com.google.android.gms.common.api.Result {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.DataHolderResult>;
								public mStatus: com.google.android.gms.common.api.Status;
								public mDataHolder: com.google.android.gms.common.data.DataHolder;
								public constructor(param0: com.google.android.gms.common.data.DataHolder, param1: com.google.android.gms.common.api.Status);
								public getStatus(): com.google.android.gms.common.api.Status;
								public release(): void;
								public constructor(param0: com.google.android.gms.common.data.DataHolder);
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export module internal {
							export class GoogleApiManager {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.GoogleApiManager>;
								public static zahw: com.google.android.gms.common.api.Status;
								public zac(param0: com.google.android.gms.common.api.GoogleApi<any>): com.google.android.gms.tasks.Task<java.lang.Boolean>;
								public zao(): void;
								public handleMessage(param0: globalAndroid.os.Message): boolean;
								public zaa(param0: com.google.android.gms.common.api.internal.zaae): void;
								public static zabc(): com.google.android.gms.common.api.internal.GoogleApiManager;
								public zabd(): number;
								public zaa(param0: com.google.android.gms.common.api.GoogleApi<any>, param1: com.google.android.gms.common.api.internal.RegisterListenerMethod<any,any>, param2: com.google.android.gms.common.api.internal.UnregisterListenerMethod<any,any>): com.google.android.gms.tasks.Task<any>;
								public zaa(param0: com.google.android.gms.common.api.GoogleApi<any>, param1: com.google.android.gms.common.api.internal.ListenerHolder.ListenerKey<any>): com.google.android.gms.tasks.Task<any>;
								public zaa(param0: com.google.android.gms.common.ConnectionResult, param1: number): void;
								public static reportSignOut(): void;
								public zaa(param0: java.lang.Iterable<any>): com.google.android.gms.tasks.Task<java.util.Map<com.google.android.gms.common.api.internal.zai<any>,string>>;
								public zaa(param0: com.google.android.gms.common.api.GoogleApi<any>): void;
								public static zab(param0: globalAndroid.content.Context): com.google.android.gms.common.api.internal.GoogleApiManager;
								public zaa(param0: com.google.android.gms.common.api.GoogleApi<any>, param1: number, param2: com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<any,any>): void;
								public zaa(param0: com.google.android.gms.common.api.GoogleApi<any>, param1: number, param2: com.google.android.gms.common.api.internal.TaskApiCall<any,any>, param3: com.google.android.gms.tasks.TaskCompletionSource<any>, param4: com.google.android.gms.common.api.internal.StatusExceptionMapper): void;
							}
							export module GoogleApiManager {
								export class zaa<O>  extends java.lang.Object {
									public static class: java.lang.Class<com.google.android.gms.common.api.internal.GoogleApiManager.zaa<any>>;
									public zag(param0: com.google.android.gms.common.ConnectionResult): void;
									public zabm(): com.google.android.gms.common.ConnectionResult;
									public zaa(param0: com.google.android.gms.common.ConnectionResult, param1: com.google.android.gms.common.api.Api<any>, param2: boolean): void;
									public requiresSignIn(): boolean;
									public zaa(param0: com.google.android.gms.common.api.internal.zab): void;
									public connect(): void;
									public zabl(): void;
									public zaa(param0: com.google.android.gms.common.api.internal.zak): void;
									public getInstanceId(): number;
									public onConnected(param0: globalAndroid.os.Bundle): void;
									public constructor(param0: com.google.android.gms.common.api.GoogleApi<O>);
									public zabp(): boolean;
									public onConnectionSuspended(param0: number): void;
									public zaab(): com.google.android.gms.common.api.Api.Client;
									public zabk(): java.util.Map<com.google.android.gms.common.api.internal.ListenerHolder.ListenerKey<any>,com.google.android.gms.common.api.internal.zabw>;
									public onConnectionFailed(param0: com.google.android.gms.common.ConnectionResult): void;
									public resume(): void;
									public zaav(): void;
									public zabj(): void;
									public zac(param0: com.google.android.gms.common.api.Status): void;
								}
								export class zab {
									public static class: java.lang.Class<com.google.android.gms.common.api.internal.GoogleApiManager.zab>;
									public hashCode(): number;
									public equals(param0: any): boolean;
									public toString(): string;
								}
								export class zac implements com.google.android.gms.common.api.internal.zach, com.google.android.gms.common.internal.BaseGmsClient.ConnectionProgressReportCallbacks {
									public static class: java.lang.Class<com.google.android.gms.common.api.internal.GoogleApiManager.zac>;
									public zag(param0: com.google.android.gms.common.ConnectionResult): void;
									public onReportServiceBinding(param0: com.google.android.gms.common.ConnectionResult): void;
									public constructor(param0: com.google.android.gms.common.api.Api.Client, param1: com.google.android.gms.common.api.internal.zai<any>);
									public zaa(param0: com.google.android.gms.common.internal.IAccountAccessor, param1: java.util.Set<com.google.android.gms.common.api.Scope>): void;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export module internal {
							export class GoogleServices {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.GoogleServices>;
								public static isMeasurementExplicitlyDisabled(): boolean;
								public static initialize(param0: globalAndroid.content.Context, param1: string, param2: boolean): com.google.android.gms.common.api.Status;
								public static getGoogleAppId(): string;
								public static initialize(param0: globalAndroid.content.Context): com.google.android.gms.common.api.Status;
								public static isMeasurementEnabled(): boolean;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export module internal {
							export class IStatusCallback {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.IStatusCallback>;
								/**
								 * Constructs a new instance of the com.google.android.gms.common.api.internal.IStatusCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									onResult(param0: com.google.android.gms.common.api.Status): void;
								});
								public constructor();
								public onResult(param0: com.google.android.gms.common.api.Status): void;
							}
							export module IStatusCallback {
								export abstract class Stub extends com.google.android.gms.internal.base.zab implements com.google.android.gms.common.api.internal.IStatusCallback {
									public static class: java.lang.Class<com.google.android.gms.common.api.internal.IStatusCallback.Stub>;
									public constructor(param0: string);
									public constructor();
									public onResult(param0: com.google.android.gms.common.api.Status): void;
									public dispatchTransaction(param0: number, param1: globalAndroid.os.Parcel, param2: globalAndroid.os.Parcel, param3: number): boolean;
									public static asInterface(param0: globalAndroid.os.IBinder): com.google.android.gms.common.api.internal.IStatusCallback;
								}
								export module Stub {
									export class zaa extends com.google.android.gms.internal.base.zaa implements com.google.android.gms.common.api.internal.IStatusCallback {
										public static class: java.lang.Class<com.google.android.gms.common.api.internal.IStatusCallback.Stub.zaa>;
										public onResult(param0: com.google.android.gms.common.api.Status): void;
									}
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export module internal {
							export class LifecycleActivity {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.LifecycleActivity>;
								public asObject(): any;
								public asFragmentActivity(): globalAndroid.support.v4.app.FragmentActivity;
								public constructor(param0: globalAndroid.app.Activity);
								public constructor(param0: globalAndroid.content.ContextWrapper);
								public isChimera(): boolean;
								public isSupport(): boolean;
								public asActivity(): globalAndroid.app.Activity;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export module internal {
							export class LifecycleCallback {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.LifecycleCallback>;
								public mLifecycleFragment: com.google.android.gms.common.api.internal.LifecycleFragment;
								public static getFragment(param0: globalAndroid.content.ContextWrapper): com.google.android.gms.common.api.internal.LifecycleFragment;
								public onResume(): void;
								public static getFragment(param0: globalAndroid.app.Activity): com.google.android.gms.common.api.internal.LifecycleFragment;
								public onDestroy(): void;
								public static getFragment(param0: com.google.android.gms.common.api.internal.LifecycleActivity): com.google.android.gms.common.api.internal.LifecycleFragment;
								public getActivity(): globalAndroid.app.Activity;
								public onStop(): void;
								public constructor(param0: com.google.android.gms.common.api.internal.LifecycleFragment);
								public dump(param0: string, param1: java.io.FileDescriptor, param2: java.io.PrintWriter, param3: native.Array<string>): void;
								public onCreate(param0: globalAndroid.os.Bundle): void;
								public onStart(): void;
								public onSaveInstanceState(param0: globalAndroid.os.Bundle): void;
								public onActivityResult(param0: number, param1: number, param2: globalAndroid.content.Intent): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export module internal {
							export class LifecycleFragment {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.LifecycleFragment>;
								/**
								 * Constructs a new instance of the com.google.android.gms.common.api.internal.LifecycleFragment interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									getCallbackOrNull(param0: string, param1: java.lang.Class): com.google.android.gms.common.api.internal.LifecycleCallback;
									addCallback(param0: string, param1: com.google.android.gms.common.api.internal.LifecycleCallback): void;
									startActivityForResult(param0: globalAndroid.content.Intent, param1: number): void;
									getLifecycleActivity(): globalAndroid.app.Activity;
									isCreated(): boolean;
									isStarted(): boolean;
								});
								public constructor();
								public addCallback(param0: string, param1: com.google.android.gms.common.api.internal.LifecycleCallback): void;
								public isCreated(): boolean;
								public startActivityForResult(param0: globalAndroid.content.Intent, param1: number): void;
								public getCallbackOrNull(param0: string, param1: java.lang.Class): com.google.android.gms.common.api.internal.LifecycleCallback;
								public isStarted(): boolean;
								public getLifecycleActivity(): globalAndroid.app.Activity;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export module internal {
							export class ListenerHolder<L>  extends java.lang.Object {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.ListenerHolder<any>>;
								public getListenerKey(): com.google.android.gms.common.api.internal.ListenerHolder.ListenerKey<L>;
								public clear(): void;
								public notifyListener(param0: com.google.android.gms.common.api.internal.ListenerHolder.Notifier<any>): void;
								public hasListener(): boolean;
							}
							export module ListenerHolder {
								export class ListenerKey<L>  extends java.lang.Object {
									public static class: java.lang.Class<com.google.android.gms.common.api.internal.ListenerHolder.ListenerKey<any>>;
									public hashCode(): number;
									public equals(param0: any): boolean;
								}
								export class Notifier<L>  extends java.lang.Object {
									public static class: java.lang.Class<com.google.android.gms.common.api.internal.ListenerHolder.Notifier<any>>;
									/**
									 * Constructs a new instance of the com.google.android.gms.common.api.internal.ListenerHolder$Notifier interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
									 */
									public constructor(implementation: {
										notifyListener(param0: L): void;
										onNotifyListenerFailed(): void;
									});
									public constructor();
									public notifyListener(param0: L): void;
									public onNotifyListenerFailed(): void;
								}
								export class zaa extends com.google.android.gms.internal.base.zal {
									public static class: java.lang.Class<com.google.android.gms.common.api.internal.ListenerHolder.zaa>;
									public constructor();
									public constructor(param0: globalAndroid.os.Looper, param1: globalAndroid.os.Handler.Callback);
									public handleMessage(param0: globalAndroid.os.Message): void;
									public constructor(param0: globalAndroid.os.Looper);
									public constructor(param0: com.google.android.gms.common.api.internal.ListenerHolder<any>, param1: globalAndroid.os.Looper);
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export module internal {
							export class ListenerHolders {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.ListenerHolders>;
								public static createListenerKey(param0: any, param1: string): com.google.android.gms.common.api.internal.ListenerHolder.ListenerKey<any>;
								public constructor();
								public static createListenerHolder(param0: any, param1: globalAndroid.os.Looper, param2: string): com.google.android.gms.common.api.internal.ListenerHolder<any>;
								public release(): void;
								public zaa(param0: any, param1: globalAndroid.os.Looper, param2: string): com.google.android.gms.common.api.internal.ListenerHolder<any>;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export module internal {
							export class OptionalPendingResultImpl<R>  extends com.google.android.gms.common.api.OptionalPendingResult<any> {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.OptionalPendingResultImpl<any>>;
								public setResultCallback(param0: com.google.android.gms.common.api.ResultCallback<any>): void;
								public then(param0: com.google.android.gms.common.api.ResultTransform<any,any>): com.google.android.gms.common.api.TransformedResult<any>;
								public cancel(): void;
								public get(): any;
								public constructor();
								public isDone(): boolean;
								public await(param0: number, param1: java.util.concurrent.TimeUnit): any;
								public setResultCallback(param0: com.google.android.gms.common.api.ResultCallback<any>, param1: number, param2: java.util.concurrent.TimeUnit): void;
								public await(): any;
								public isCanceled(): boolean;
								public constructor(param0: com.google.android.gms.common.api.PendingResult<any>);
								public addStatusListener(param0: com.google.android.gms.common.api.PendingResult.StatusListener): void;
								public zam(): java.lang.Integer;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export module internal {
							export abstract class PendingResultFacade<A, B>  extends com.google.android.gms.common.api.PendingResult<any> {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.PendingResultFacade<any,any>>;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export module internal {
							export abstract class RegisterListenerMethod<A, L>  extends java.lang.Object {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.RegisterListenerMethod<any,any>>;
								public registerListener(param0: A, param1: com.google.android.gms.tasks.TaskCompletionSource<java.lang.Void>): void;
								public getListenerKey(): com.google.android.gms.common.api.internal.ListenerHolder.ListenerKey<L>;
								public clearListener(): void;
								public constructor(param0: com.google.android.gms.common.api.internal.ListenerHolder<L>, param1: native.Array<com.google.android.gms.common.Feature>, param2: boolean);
								public constructor(param0: com.google.android.gms.common.api.internal.ListenerHolder<L>);
								public getRequiredFeatures(): native.Array<com.google.android.gms.common.Feature>;
								public shouldAutoResolveMissingFeatures(): boolean;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export module internal {
							export class RegistrationMethods<A, L>  extends java.lang.Object {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.RegistrationMethods<any,any>>;
								public zajy: com.google.android.gms.common.api.internal.RegisterListenerMethod<A,L>;
								public zajz: com.google.android.gms.common.api.internal.UnregisterListenerMethod<A,L>;
								public static builder(): com.google.android.gms.common.api.internal.RegistrationMethods.Builder<any,any>;
							}
							export module RegistrationMethods {
								export class Builder<A, L>  extends java.lang.Object {
									public static class: java.lang.Class<com.google.android.gms.common.api.internal.RegistrationMethods.Builder<any,any>>;
									public setAutoResolveMissingFeatures(param0: boolean): com.google.android.gms.common.api.internal.RegistrationMethods.Builder<A,L>;
									public withHolder(param0: com.google.android.gms.common.api.internal.ListenerHolder<L>): com.google.android.gms.common.api.internal.RegistrationMethods.Builder<A,L>;
									/** @deprecated */
									public register(param0: com.google.android.gms.common.util.BiConsumer<A,com.google.android.gms.tasks.TaskCompletionSource<java.lang.Void>>): com.google.android.gms.common.api.internal.RegistrationMethods.Builder<A,L>;
									public unregister(param0: com.google.android.gms.common.api.internal.RemoteCall<A,com.google.android.gms.tasks.TaskCompletionSource<java.lang.Boolean>>): com.google.android.gms.common.api.internal.RegistrationMethods.Builder<A,L>;
									public register(param0: com.google.android.gms.common.api.internal.RemoteCall<A,com.google.android.gms.tasks.TaskCompletionSource<java.lang.Void>>): com.google.android.gms.common.api.internal.RegistrationMethods.Builder<A,L>;
									public build(): com.google.android.gms.common.api.internal.RegistrationMethods<A,L>;
									public setFeatures(param0: native.Array<com.google.android.gms.common.Feature>): com.google.android.gms.common.api.internal.RegistrationMethods.Builder<A,L>;
									/** @deprecated */
									public unregister(param0: com.google.android.gms.common.util.BiConsumer<A,com.google.android.gms.tasks.TaskCompletionSource<java.lang.Boolean>>): com.google.android.gms.common.api.internal.RegistrationMethods.Builder<A,L>;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export module internal {
							export class RemoteCall<T, U>  extends java.lang.Object {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.RemoteCall<any,any>>;
								/**
								 * Constructs a new instance of the com.google.android.gms.common.api.internal.RemoteCall<any,any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									accept(param0: T, param1: U): void;
								});
								public constructor();
								public accept(param0: T, param1: U): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export module internal {
							export class SignInConnectionListener {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.SignInConnectionListener>;
								/**
								 * Constructs a new instance of the com.google.android.gms.common.api.internal.SignInConnectionListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									onComplete(): void;
								});
								public constructor();
								public onComplete(): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export module internal {
							export class StatusCallback extends com.google.android.gms.common.api.internal.IStatusCallback.Stub {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.StatusCallback>;
								public constructor(param0: com.google.android.gms.common.api.internal.BaseImplementation.ResultHolder<com.google.android.gms.common.api.Status>);
								public constructor();
								public onResult(param0: com.google.android.gms.common.api.Status): void;
								public constructor(param0: string);
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export module internal {
							export class StatusExceptionMapper {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.StatusExceptionMapper>;
								/**
								 * Constructs a new instance of the com.google.android.gms.common.api.internal.StatusExceptionMapper interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									getException(param0: com.google.android.gms.common.api.Status): java.lang.Exception;
								});
								public constructor();
								public getException(param0: com.google.android.gms.common.api.Status): java.lang.Exception;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export module internal {
							export class StatusPendingResult extends com.google.android.gms.common.api.internal.BasePendingResult<com.google.android.gms.common.api.Status> {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.StatusPendingResult>;
								public constructor(param0: com.google.android.gms.common.api.GoogleApiClient);
								public constructor(param0: com.google.android.gms.common.api.internal.BasePendingResult.CallbackHandler<any>);
								public constructor();
								/** @deprecated */
								public constructor(param0: globalAndroid.os.Looper);
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export module internal {
							export abstract class TaskApiCall<A, ResultT>  extends java.lang.Object {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.TaskApiCall<any,any>>;
								/** @deprecated */
								public constructor();
								public zabt(): native.Array<com.google.android.gms.common.Feature>;
								public doExecute(param0: A, param1: com.google.android.gms.tasks.TaskCompletionSource<ResultT>): void;
								public shouldAutoResolveMissingFeatures(): boolean;
								public static builder(): com.google.android.gms.common.api.internal.TaskApiCall.Builder<any,any>;
							}
							export module TaskApiCall {
								export class Builder<A, ResultT>  extends java.lang.Object {
									public static class: java.lang.Class<com.google.android.gms.common.api.internal.TaskApiCall.Builder<any,any>>;
									public setFeatures(param0: native.Array<com.google.android.gms.common.Feature>): com.google.android.gms.common.api.internal.TaskApiCall.Builder<A,ResultT>;
									public build(): com.google.android.gms.common.api.internal.TaskApiCall<A,ResultT>;
									public run(param0: com.google.android.gms.common.api.internal.RemoteCall<A,com.google.android.gms.tasks.TaskCompletionSource<ResultT>>): com.google.android.gms.common.api.internal.TaskApiCall.Builder<A,ResultT>;
									public setAutoResolveMissingFeatures(param0: boolean): com.google.android.gms.common.api.internal.TaskApiCall.Builder<A,ResultT>;
									/** @deprecated */
									public execute(param0: com.google.android.gms.common.util.BiConsumer<A,com.google.android.gms.tasks.TaskCompletionSource<ResultT>>): com.google.android.gms.common.api.internal.TaskApiCall.Builder<A,ResultT>;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export module internal {
							export class TaskUtil {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.TaskUtil>;
								public static setResultOrApiException(param0: com.google.android.gms.common.api.Status, param1: any, param2: com.google.android.gms.tasks.TaskCompletionSource<any>): void;
								public static setResultOrApiException(param0: com.google.android.gms.common.api.Status, param1: com.google.android.gms.tasks.TaskCompletionSource<java.lang.Void>): void;
								public constructor();
								/** @deprecated */
								public static toVoidTaskThatFailsOnFalse(param0: com.google.android.gms.tasks.Task<java.lang.Boolean>): com.google.android.gms.tasks.Task<java.lang.Void>;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export module internal {
							export abstract class UnregisterListenerMethod<A, L>  extends java.lang.Object {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.UnregisterListenerMethod<any,any>>;
								public getListenerKey(): com.google.android.gms.common.api.internal.ListenerHolder.ListenerKey<L>;
								public unregisterListener(param0: A, param1: com.google.android.gms.tasks.TaskCompletionSource<java.lang.Boolean>): void;
								public constructor(param0: com.google.android.gms.common.api.internal.ListenerHolder.ListenerKey<L>);
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export module internal {
							export class zaa extends com.google.android.gms.common.api.internal.ActivityLifecycleObserver {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zaa>;
								public onStopCallOnce(param0: java.lang.Runnable): com.google.android.gms.common.api.internal.ActivityLifecycleObserver;
								public constructor(param0: globalAndroid.app.Activity);
								public constructor();
							}
							export module zaa {
								export class zaa extends com.google.android.gms.common.api.internal.LifecycleCallback {
									public static class: java.lang.Class<com.google.android.gms.common.api.internal.zaa.zaa>;
									public onStop(): void;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export module internal {
							export class zaaa extends com.google.android.gms.tasks.OnCompleteListener<java.util.Map<com.google.android.gms.common.api.internal.zai<any>,string>> {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zaaa>;
								public onComplete(param0: com.google.android.gms.tasks.Task<any>): void;
								public onComplete(param0: com.google.android.gms.tasks.Task<java.util.Map<com.google.android.gms.common.api.internal.zai<any>,string>>): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export module internal {
							export class zaab {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zaab>;
								public constructor();
								public zaai(): void;
								public zaah(): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export module internal {
							export class zaac extends com.google.android.gms.common.api.PendingResult.StatusListener {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zaac>;
								public onComplete(param0: com.google.android.gms.common.api.Status): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export module internal {
							export class zaad extends com.google.android.gms.tasks.OnCompleteListener<any> {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zaad>;
								public onComplete(param0: com.google.android.gms.tasks.Task<any>): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export module internal {
							export class zaae extends com.google.android.gms.common.api.internal.zal {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zaae>;
								public zao(): void;
								public static zaa(param0: globalAndroid.app.Activity, param1: com.google.android.gms.common.api.internal.GoogleApiManager, param2: com.google.android.gms.common.api.internal.zai<any>): void;
								public onResume(): void;
								public zaa(param0: com.google.android.gms.common.ConnectionResult, param1: number): void;
								public onStop(): void;
								public onStart(): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export module internal {
							export class zaaf {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zaaf>;
								public constructor(param0: com.google.android.gms.common.api.internal.zai<any>);
								public zaal(): com.google.android.gms.tasks.TaskCompletionSource<java.lang.Boolean>;
								public zak(): com.google.android.gms.common.api.internal.zai<any>;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export module internal {
							export class zaag extends com.google.android.gms.common.api.GoogleApiClient {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zaag>;
								public unregisterConnectionCallbacks(param0: com.google.android.gms.common.api.GoogleApiClient.ConnectionCallbacks): void;
								public clearDefaultAccountAndReconnect(): com.google.android.gms.common.api.PendingResult<com.google.android.gms.common.api.Status>;
								public blockingConnect(param0: number, param1: java.util.concurrent.TimeUnit): com.google.android.gms.common.ConnectionResult;
								public registerConnectionCallbacks(param0: com.google.android.gms.common.api.GoogleApiClient.ConnectionCallbacks): void;
								public blockingConnect(): com.google.android.gms.common.ConnectionResult;
								public constructor();
								public connect(param0: number): void;
								public connect(): void;
								public registerConnectionFailedListener(param0: com.google.android.gms.common.api.GoogleApiClient.OnConnectionFailedListener): void;
								public stopAutoManage(param0: globalAndroid.support.v4.app.FragmentActivity): void;
								public isConnected(): boolean;
								public isConnectionFailedListenerRegistered(param0: com.google.android.gms.common.api.GoogleApiClient.OnConnectionFailedListener): boolean;
								public getConnectionResult(param0: com.google.android.gms.common.api.Api<any>): com.google.android.gms.common.ConnectionResult;
								public reconnect(): void;
								public isConnectionCallbacksRegistered(param0: com.google.android.gms.common.api.GoogleApiClient.ConnectionCallbacks): boolean;
								public unregisterConnectionFailedListener(param0: com.google.android.gms.common.api.GoogleApiClient.OnConnectionFailedListener): void;
								public hasConnectedApi(param0: com.google.android.gms.common.api.Api<any>): boolean;
								public dump(param0: string, param1: java.io.FileDescriptor, param2: java.io.PrintWriter, param3: native.Array<string>): void;
								public constructor(param0: string);
								public disconnect(): void;
								public isConnecting(): boolean;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export module internal {
							export class zaah extends com.google.android.gms.common.api.internal.zabd {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zaah>;
								public disconnect(): boolean;
								public zaa(param0: com.google.android.gms.common.ConnectionResult, param1: com.google.android.gms.common.api.Api<any>, param2: boolean): void;
								public enqueue(param0: com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<any,any>): com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<any,any>;
								public constructor(param0: com.google.android.gms.common.api.internal.zabe);
								public begin(): void;
								public onConnected(param0: globalAndroid.os.Bundle): void;
								public execute(param0: com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<any,any>): com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<any,any>;
								public connect(): void;
								public onConnectionSuspended(param0: number): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export module internal {
							export class zaai extends com.google.android.gms.common.api.internal.zabf {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zaai>;
								public zaan(): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export module internal {
							export class zaaj extends com.google.android.gms.common.api.internal.zabf {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zaaj>;
								public zaan(): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export module internal {
							export class zaak extends com.google.android.gms.common.api.internal.zabd {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zaak>;
								public zaa(param0: com.google.android.gms.common.ConnectionResult, param1: com.google.android.gms.common.api.Api<any>, param2: boolean): void;
								public disconnect(): boolean;
								public enqueue(param0: com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<any,any>): com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<any,any>;
								public begin(): void;
								public onConnected(param0: globalAndroid.os.Bundle): void;
								public execute(param0: com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<any,any>): com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<any,any>;
								public constructor(param0: com.google.android.gms.common.api.internal.zabe, param1: com.google.android.gms.common.internal.ClientSettings, param2: java.util.Map<com.google.android.gms.common.api.Api<any>,java.lang.Boolean>, param3: com.google.android.gms.common.GoogleApiAvailabilityLight, param4: com.google.android.gms.common.api.Api.AbstractClientBuilder<any,com.google.android.gms.signin.SignInOptions>, param5: java.util.concurrent.locks.Lock, param6: globalAndroid.content.Context);
								public connect(): void;
								public onConnectionSuspended(param0: number): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export module internal {
							export class zaal {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zaal>;
								public run(): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export module internal {
							export class zaam extends com.google.android.gms.common.internal.BaseGmsClient.ConnectionProgressReportCallbacks {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zaam>;
								public onReportServiceBinding(param0: com.google.android.gms.common.ConnectionResult): void;
								public constructor(param0: com.google.android.gms.common.api.internal.zaak, param1: com.google.android.gms.common.api.Api<any>, param2: boolean);
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export module internal {
							export class zaan extends com.google.android.gms.common.api.internal.zaau {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zaan>;
								public constructor(param0: java.util.Map<com.google.android.gms.common.api.Api.Client,com.google.android.gms.common.api.internal.zaam>);
								public zaan(): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export module internal {
							export class zaao extends com.google.android.gms.common.api.internal.zabf {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zaao>;
								public zaan(): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export module internal {
							export class zaap extends com.google.android.gms.common.api.internal.zabf {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zaap>;
								public zaan(): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export module internal {
							export class zaaq extends com.google.android.gms.common.api.internal.zaau {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zaaq>;
								public constructor(param0: java.util.ArrayList<com.google.android.gms.common.api.Api.Client>);
								public zaan(): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export module internal {
							export class zaar extends com.google.android.gms.signin.internal.zac {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zaar>;
								public zah(param0: com.google.android.gms.common.api.Status): void;
								public zag(param0: com.google.android.gms.common.api.Status): void;
								public zab(param0: com.google.android.gms.signin.internal.zaj): void;
								public zaa(param0: com.google.android.gms.common.ConnectionResult, param1: com.google.android.gms.signin.internal.zaa): void;
								public zaa(param0: com.google.android.gms.common.api.Status, param1: com.google.android.gms.auth.api.signin.GoogleSignInAccount): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export module internal {
							export class zaas extends com.google.android.gms.common.api.internal.zabf {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zaas>;
								public zaan(): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export module internal {
							export class zaat implements com.google.android.gms.common.api.GoogleApiClient.ConnectionCallbacks, com.google.android.gms.common.api.GoogleApiClient.OnConnectionFailedListener {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zaat>;
								public onConnectionFailed(param0: com.google.android.gms.common.ConnectionResult): void;
								public onConnected(param0: globalAndroid.os.Bundle): void;
								public onConnectionSuspended(param0: number): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export module internal {
							export abstract class zaau {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zaau>;
								public zaan(): void;
								public run(): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export module internal {
							export class zaav extends com.google.android.gms.common.api.internal.zabd {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zaav>;
								public disconnect(): boolean;
								public zaa(param0: com.google.android.gms.common.ConnectionResult, param1: com.google.android.gms.common.api.Api<any>, param2: boolean): void;
								public enqueue(param0: com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<any,any>): com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<any,any>;
								public constructor(param0: com.google.android.gms.common.api.internal.zabe);
								public begin(): void;
								public onConnected(param0: globalAndroid.os.Bundle): void;
								public execute(param0: com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<any,any>): com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<any,any>;
								public connect(): void;
								public onConnectionSuspended(param0: number): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export module internal {
							export class zaaw extends com.google.android.gms.common.api.GoogleApiClient implements com.google.android.gms.common.api.internal.zabt {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zaaw>;
								public unregisterConnectionCallbacks(param0: com.google.android.gms.common.api.GoogleApiClient.ConnectionCallbacks): void;
								public constructor(param0: globalAndroid.content.Context, param1: java.util.concurrent.locks.Lock, param2: globalAndroid.os.Looper, param3: com.google.android.gms.common.internal.ClientSettings, param4: com.google.android.gms.common.GoogleApiAvailability, param5: com.google.android.gms.common.api.Api.AbstractClientBuilder<any,com.google.android.gms.signin.SignInOptions>, param6: java.util.Map<com.google.android.gms.common.api.Api<any>,java.lang.Boolean>, param7: java.util.List<com.google.android.gms.common.api.GoogleApiClient.ConnectionCallbacks>, param8: java.util.List<com.google.android.gms.common.api.GoogleApiClient.OnConnectionFailedListener>, param9: java.util.Map<com.google.android.gms.common.api.Api.AnyClientKey<any>,com.google.android.gms.common.api.Api.Client>, param10: number, param11: number, param12: java.util.ArrayList<com.google.android.gms.common.api.internal.zaq>, param13: boolean);
								public blockingConnect(param0: number, param1: java.util.concurrent.TimeUnit): com.google.android.gms.common.ConnectionResult;
								public getClient(param0: com.google.android.gms.common.api.Api.AnyClientKey<any>): com.google.android.gms.common.api.Api.Client;
								public zab(param0: globalAndroid.os.Bundle): void;
								public zab(param0: com.google.android.gms.common.api.internal.zacm<any>): void;
								public getContext(): globalAndroid.content.Context;
								public connect(param0: number): void;
								public zaa(param0: com.google.android.gms.common.api.internal.zacm<any>): void;
								public connect(): void;
								public static zaa(param0: java.lang.Iterable<com.google.android.gms.common.api.Api.Client>, param1: boolean): number;
								public stopAutoManage(param0: globalAndroid.support.v4.app.FragmentActivity): void;
								public isConnectionCallbacksRegistered(param0: com.google.android.gms.common.api.GoogleApiClient.ConnectionCallbacks): boolean;
								public unregisterConnectionFailedListener(param0: com.google.android.gms.common.api.GoogleApiClient.OnConnectionFailedListener): void;
								public hasConnectedApi(param0: com.google.android.gms.common.api.Api<any>): boolean;
								public dump(param0: string, param1: java.io.FileDescriptor, param2: java.io.PrintWriter, param3: native.Array<string>): void;
								public clearDefaultAccountAndReconnect(): com.google.android.gms.common.api.PendingResult<com.google.android.gms.common.api.Status>;
								public enqueue(param0: com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<any,any>): com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<any,any>;
								public registerConnectionCallbacks(param0: com.google.android.gms.common.api.GoogleApiClient.ConnectionCallbacks): void;
								public blockingConnect(): com.google.android.gms.common.ConnectionResult;
								public constructor();
								public maybeSignOut(): void;
								public registerConnectionFailedListener(param0: com.google.android.gms.common.api.GoogleApiClient.OnConnectionFailedListener): void;
								public zab(param0: number, param1: boolean): void;
								public maybeSignIn(param0: com.google.android.gms.common.api.internal.SignInConnectionListener): boolean;
								public zac(param0: com.google.android.gms.common.ConnectionResult): void;
								public isConnected(): boolean;
								public isConnectionFailedListenerRegistered(param0: com.google.android.gms.common.api.GoogleApiClient.OnConnectionFailedListener): boolean;
								public getConnectionResult(param0: com.google.android.gms.common.api.Api<any>): com.google.android.gms.common.ConnectionResult;
								public reconnect(): void;
								public hasApi(param0: com.google.android.gms.common.api.Api<any>): boolean;
								public execute(param0: com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<any,any>): com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<any,any>;
								public disconnect(): void;
								public isConnecting(): boolean;
								public registerListener(param0: any): com.google.android.gms.common.api.internal.ListenerHolder<any>;
								public getLooper(): globalAndroid.os.Looper;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export module internal {
							export class zaax extends com.google.android.gms.common.internal.GmsClientEventManager.GmsClientEventState {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zaax>;
								public getConnectionHint(): globalAndroid.os.Bundle;
								public isConnected(): boolean;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export module internal {
							export class zaay extends com.google.android.gms.common.api.GoogleApiClient.ConnectionCallbacks {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zaay>;
								public onConnected(param0: globalAndroid.os.Bundle): void;
								public onConnectionSuspended(param0: number): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export module internal {
							export class zaaz extends com.google.android.gms.common.api.GoogleApiClient.OnConnectionFailedListener {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zaaz>;
								public onConnectionFailed(param0: com.google.android.gms.common.ConnectionResult): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export module internal {
							export abstract class zab {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zab>;
								public zaa(param0: com.google.android.gms.common.api.Status): void;
								public constructor(param0: number);
								public zaa(param0: java.lang.RuntimeException): void;
								public zaa(param0: com.google.android.gms.common.api.internal.zaab, param1: boolean): void;
								public zaa(param0: com.google.android.gms.common.api.internal.GoogleApiManager.zaa<any>): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export module internal {
							export class zaba extends com.google.android.gms.common.api.ResultCallback<com.google.android.gms.common.api.Status> {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zaba>;
								public onResult(param0: any): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export module internal {
							export class zabb extends com.google.android.gms.internal.base.zal {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zabb>;
								public handleMessage(param0: globalAndroid.os.Message): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export module internal {
							export class zabc extends com.google.android.gms.common.api.internal.zabr {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zabc>;
								public zas(): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export module internal {
							export class zabd {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zabd>;
								/**
								 * Constructs a new instance of the com.google.android.gms.common.api.internal.zabd interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									begin(): void;
									enqueue(param0: com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<any,any>): com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<any,any>;
									execute(param0: com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<any,any>): com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<any,any>;
									disconnect(): boolean;
									connect(): void;
									onConnected(param0: globalAndroid.os.Bundle): void;
									zaa(param0: com.google.android.gms.common.ConnectionResult, param1: com.google.android.gms.common.api.Api<any>, param2: boolean): void;
									onConnectionSuspended(param0: number): void;
								});
								public constructor();
								public disconnect(): boolean;
								public zaa(param0: com.google.android.gms.common.ConnectionResult, param1: com.google.android.gms.common.api.Api<any>, param2: boolean): void;
								public enqueue(param0: com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<any,any>): com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<any,any>;
								public begin(): void;
								public onConnected(param0: globalAndroid.os.Bundle): void;
								public execute(param0: com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<any,any>): com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<any,any>;
								public connect(): void;
								public onConnectionSuspended(param0: number): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export module internal {
							export class zabe implements com.google.android.gms.common.api.internal.zabs, com.google.android.gms.common.api.internal.zar {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zabe>;
								public enqueue(param0: com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<any,any>): com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<any,any>;
								public blockingConnect(param0: number, param1: java.util.concurrent.TimeUnit): com.google.android.gms.common.ConnectionResult;
								public blockingConnect(): com.google.android.gms.common.ConnectionResult;
								public maybeSignOut(): void;
								public connect(): void;
								public maybeSignIn(param0: com.google.android.gms.common.api.internal.SignInConnectionListener): boolean;
								public zaa(param0: com.google.android.gms.common.ConnectionResult, param1: com.google.android.gms.common.api.Api<any>, param2: boolean): void;
								public isConnected(): boolean;
								public getConnectionResult(param0: com.google.android.gms.common.api.Api<any>): com.google.android.gms.common.ConnectionResult;
								public constructor(param0: globalAndroid.content.Context, param1: com.google.android.gms.common.api.internal.zaaw, param2: java.util.concurrent.locks.Lock, param3: globalAndroid.os.Looper, param4: com.google.android.gms.common.GoogleApiAvailabilityLight, param5: java.util.Map<com.google.android.gms.common.api.Api.AnyClientKey<any>,com.google.android.gms.common.api.Api.Client>, param6: com.google.android.gms.common.internal.ClientSettings, param7: java.util.Map<com.google.android.gms.common.api.Api<any>,java.lang.Boolean>, param8: com.google.android.gms.common.api.Api.AbstractClientBuilder<any,com.google.android.gms.signin.SignInOptions>, param9: java.util.ArrayList<com.google.android.gms.common.api.internal.zaq>, param10: com.google.android.gms.common.api.internal.zabt);
								public onConnected(param0: globalAndroid.os.Bundle): void;
								public dump(param0: string, param1: java.io.FileDescriptor, param2: java.io.PrintWriter, param3: native.Array<string>): void;
								public execute(param0: com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<any,any>): com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<any,any>;
								public disconnect(): void;
								public zaw(): void;
								public isConnecting(): boolean;
								public onConnectionSuspended(param0: number): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export module internal {
							export abstract class zabf {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zabf>;
								public zaan(): void;
								public constructor(param0: com.google.android.gms.common.api.internal.zabd);
								public zac(param0: com.google.android.gms.common.api.internal.zabe): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export module internal {
							export class zabg extends com.google.android.gms.internal.base.zal {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zabg>;
								public handleMessage(param0: globalAndroid.os.Message): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export module internal {
							export class zabh {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zabh>;
								public static zabb(): java.util.concurrent.ExecutorService;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export module internal {
							export class zabi extends com.google.android.gms.common.api.internal.BackgroundDetector.BackgroundStateChangeListener {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zabi>;
								public onBackgroundStateChanged(param0: boolean): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export module internal {
							export class zabj {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zabj>;
								public run(): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export module internal {
							export class zabk {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zabk>;
								public run(): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export module internal {
							export class zabl {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zabl>;
								public run(): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export module internal {
							export class zabm extends com.google.android.gms.common.internal.BaseGmsClient.SignOutCallbacks {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zabm>;
								public onSignOutComplete(): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export module internal {
							export class zabn {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zabn>;
								public run(): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export module internal {
							export class zabo {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zabo>;
								public run(): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export module internal {
							export class zabp<O>  extends com.google.android.gms.common.api.internal.zaag {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zabp<any>>;
								public constructor(param0: com.google.android.gms.common.api.GoogleApi<any>);
								public enqueue(param0: com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<any,any>): com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<any,any>;
								public constructor();
								public constructor(param0: string);
								public execute(param0: com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<any,any>): com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<any,any>;
								public zab(param0: com.google.android.gms.common.api.internal.zacm<any>): void;
								public getContext(): globalAndroid.content.Context;
								public zaa(param0: com.google.android.gms.common.api.internal.zacm<any>): void;
								public getLooper(): globalAndroid.os.Looper;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export module internal {
							export class zabq {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zabq>;
								public onReceive(param0: globalAndroid.content.Context, param1: globalAndroid.content.Intent): void;
								public constructor(param0: com.google.android.gms.common.api.internal.zabr);
								public zac(param0: globalAndroid.content.Context): void;
								public unregister(): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export module internal {
							export abstract class zabr {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zabr>;
								public constructor();
								public zas(): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export module internal {
							export class zabs {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zabs>;
								/**
								 * Constructs a new instance of the com.google.android.gms.common.api.internal.zabs interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									enqueue(param0: com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<any,any>): com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<any,any>;
									execute(param0: com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<any,any>): com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<any,any>;
									connect(): void;
									blockingConnect(): com.google.android.gms.common.ConnectionResult;
									blockingConnect(param0: number, param1: java.util.concurrent.TimeUnit): com.google.android.gms.common.ConnectionResult;
									disconnect(): void;
									getConnectionResult(param0: com.google.android.gms.common.api.Api<any>): com.google.android.gms.common.ConnectionResult;
									isConnected(): boolean;
									isConnecting(): boolean;
									maybeSignIn(param0: com.google.android.gms.common.api.internal.SignInConnectionListener): boolean;
									maybeSignOut(): void;
									dump(param0: string, param1: java.io.FileDescriptor, param2: java.io.PrintWriter, param3: native.Array<string>): void;
									zaw(): void;
								});
								public constructor();
								public enqueue(param0: com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<any,any>): com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<any,any>;
								public blockingConnect(param0: number, param1: java.util.concurrent.TimeUnit): com.google.android.gms.common.ConnectionResult;
								public blockingConnect(): com.google.android.gms.common.ConnectionResult;
								public maybeSignOut(): void;
								public connect(): void;
								public maybeSignIn(param0: com.google.android.gms.common.api.internal.SignInConnectionListener): boolean;
								public isConnected(): boolean;
								public getConnectionResult(param0: com.google.android.gms.common.api.Api<any>): com.google.android.gms.common.ConnectionResult;
								public dump(param0: string, param1: java.io.FileDescriptor, param2: java.io.PrintWriter, param3: native.Array<string>): void;
								public execute(param0: com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<any,any>): com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<any,any>;
								public disconnect(): void;
								public zaw(): void;
								public isConnecting(): boolean;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export module internal {
							export class zabt {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zabt>;
								/**
								 * Constructs a new instance of the com.google.android.gms.common.api.internal.zabt interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									zab(param0: globalAndroid.os.Bundle): void;
									zac(param0: com.google.android.gms.common.ConnectionResult): void;
									zab(param0: number, param1: boolean): void;
								});
								public constructor();
								public zac(param0: com.google.android.gms.common.ConnectionResult): void;
								public zab(param0: globalAndroid.os.Bundle): void;
								public zab(param0: number, param1: boolean): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export module internal {
							export class zabu extends com.google.android.gms.common.api.internal.zal {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zabu>;
								public zao(): void;
								public getTask(): com.google.android.gms.tasks.Task<java.lang.Void>;
								public onDestroy(): void;
								public zaa(param0: com.google.android.gms.common.ConnectionResult, param1: number): void;
								public static zac(param0: globalAndroid.app.Activity): com.google.android.gms.common.api.internal.zabu;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export module internal {
							export class zabv {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zabv>;
								public zajq: com.google.android.gms.common.api.internal.zab;
								public zajr: number;
								public zajs: com.google.android.gms.common.api.GoogleApi<any>;
								public constructor(param0: com.google.android.gms.common.api.internal.zab, param1: number, param2: com.google.android.gms.common.api.GoogleApi<any>);
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export module internal {
							export class zabw {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zabw>;
								public zajw: com.google.android.gms.common.api.internal.RegisterListenerMethod<com.google.android.gms.common.api.Api.AnyClient,any>;
								public zajx: com.google.android.gms.common.api.internal.UnregisterListenerMethod<com.google.android.gms.common.api.Api.AnyClient,any>;
								public constructor(param0: com.google.android.gms.common.api.internal.RegisterListenerMethod<com.google.android.gms.common.api.Api.AnyClient,any>, param1: com.google.android.gms.common.api.internal.UnregisterListenerMethod<com.google.android.gms.common.api.Api.AnyClient,any>);
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export module internal {
							export class zabx {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zabx>;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export module internal {
							export class zaby extends com.google.android.gms.common.api.internal.RemoteCall<any,any> {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zaby>;
								public accept(param0: any, param1: any): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export module internal {
							export class zabz extends com.google.android.gms.common.api.internal.RemoteCall<any,any> {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zabz>;
								public accept(param0: any, param1: any): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export module internal {
							export abstract class zac extends com.google.android.gms.common.api.internal.zab {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zac>;
								public zac(param0: com.google.android.gms.common.api.internal.GoogleApiManager.zaa<any>): boolean;
								public constructor(param0: number);
								public zab(param0: com.google.android.gms.common.api.internal.GoogleApiManager.zaa<any>): native.Array<com.google.android.gms.common.Feature>;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export module internal {
							export class zaca extends com.google.android.gms.common.api.internal.RegisterListenerMethod<any,any> {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zaca>;
								public registerListener(param0: any, param1: com.google.android.gms.tasks.TaskCompletionSource<java.lang.Void>): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export module internal {
							export class zacb extends com.google.android.gms.common.api.internal.UnregisterListenerMethod<any,any> {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zacb>;
								public unregisterListener(param0: any, param1: com.google.android.gms.tasks.TaskCompletionSource<java.lang.Boolean>): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export module internal {
							export class zacc {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zacc>;
								public static zabb(): java.util.concurrent.ExecutorService;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export module internal {
							export class zacd<R>  extends com.google.android.gms.common.api.PendingResult<any> {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zacd<any>>;
								public constructor(param0: com.google.android.gms.common.api.Status);
								public setResultCallback(param0: com.google.android.gms.common.api.ResultCallback<any>): void;
								public then(param0: com.google.android.gms.common.api.ResultTransform<any,any>): com.google.android.gms.common.api.TransformedResult<any>;
								public cancel(): void;
								public isCanceled(): boolean;
								public addStatusListener(param0: com.google.android.gms.common.api.PendingResult.StatusListener): void;
								public constructor();
								public await(param0: number, param1: java.util.concurrent.TimeUnit): any;
								public setResultCallback(param0: com.google.android.gms.common.api.ResultCallback<any>, param1: number, param2: java.util.concurrent.TimeUnit): void;
								public await(): any;
								public zam(): java.lang.Integer;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export module internal {
							export class zace extends com.google.android.gms.signin.internal.zac implements com.google.android.gms.common.api.GoogleApiClient.ConnectionCallbacks, com.google.android.gms.common.api.GoogleApiClient.OnConnectionFailedListener {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zace>;
								public zag(param0: com.google.android.gms.common.api.Status): void;
								public zaa(param0: com.google.android.gms.common.api.internal.zach): void;
								public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.os.Handler, param2: com.google.android.gms.common.internal.ClientSettings, param3: com.google.android.gms.common.api.Api.AbstractClientBuilder<any,com.google.android.gms.signin.SignInOptions>);
								public zaa(param0: com.google.android.gms.common.ConnectionResult, param1: com.google.android.gms.signin.internal.zaa): void;
								public zaa(param0: com.google.android.gms.common.api.Status, param1: com.google.android.gms.auth.api.signin.GoogleSignInAccount): void;
								public constructor();
								public zabq(): com.google.android.gms.signin.zad;
								public onConnectionFailed(param0: com.google.android.gms.common.ConnectionResult): void;
								public zabs(): void;
								public zah(param0: com.google.android.gms.common.api.Status): void;
								public onConnected(param0: globalAndroid.os.Bundle): void;
								public zab(param0: com.google.android.gms.signin.internal.zaj): void;
								public constructor(param0: string);
								public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.os.Handler, param2: com.google.android.gms.common.internal.ClientSettings);
								public onConnectionSuspended(param0: number): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export module internal {
							export class zacf {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zacf>;
								public run(): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export module internal {
							export class zacg {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zacg>;
								public run(): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export module internal {
							export class zach {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zach>;
								/**
								 * Constructs a new instance of the com.google.android.gms.common.api.internal.zach interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									zag(param0: com.google.android.gms.common.ConnectionResult): void;
									zaa(param0: com.google.android.gms.common.internal.IAccountAccessor, param1: java.util.Set<com.google.android.gms.common.api.Scope>): void;
								});
								public constructor();
								public zag(param0: com.google.android.gms.common.ConnectionResult): void;
								public zaa(param0: com.google.android.gms.common.internal.IAccountAccessor, param1: java.util.Set<com.google.android.gms.common.api.Scope>): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export module internal {
							export class zaci {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zaci>;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export module internal {
							export class zacj extends com.google.android.gms.common.api.internal.RemoteCall<any,any> {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zacj>;
								public accept(param0: any, param1: any): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export module internal {
							export class zack extends com.google.android.gms.common.api.internal.TaskApiCall<any,any> {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zack>;
								public doExecute(param0: any, param1: com.google.android.gms.tasks.TaskCompletionSource<any>): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export module internal {
							export class zacl extends com.google.android.gms.tasks.Continuation<java.lang.Boolean,java.lang.Void> {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zacl>;
								public then(param0: com.google.android.gms.tasks.Task<any>): any;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export module internal {
							export class zacm<R>  extends com.google.android.gms.common.api.TransformedResult<any> implements com.google.android.gms.common.api.ResultCallback<any>  {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zacm<any>>;
								public constructor(param0: java.lang.ref.WeakReference<com.google.android.gms.common.api.GoogleApiClient>);
								public then(param0: com.google.android.gms.common.api.ResultTransform<any,any>): com.google.android.gms.common.api.TransformedResult<any>;
								public zaa(param0: com.google.android.gms.common.api.PendingResult<any>): void;
								public constructor();
								public onResult(param0: any): void;
								public andFinally(param0: com.google.android.gms.common.api.ResultCallbacks<any>): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export module internal {
							export class zacn {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zacn>;
								public run(): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export module internal {
							export class zaco extends com.google.android.gms.internal.base.zal {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zaco>;
								public constructor(param0: com.google.android.gms.common.api.internal.zacm<any>, param1: globalAndroid.os.Looper);
								public constructor(param0: globalAndroid.os.Looper, param1: globalAndroid.os.Handler.Callback);
								public handleMessage(param0: globalAndroid.os.Message): void;
								public constructor();
								public constructor(param0: globalAndroid.os.Looper);
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export module internal {
							export class zacp {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zacp>;
								public static zakw: com.google.android.gms.common.api.Status;
								public constructor(param0: java.util.Map<com.google.android.gms.common.api.Api.AnyClientKey<any>,com.google.android.gms.common.api.Api.Client>);
								public release(): void;
								public zabx(): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export module internal {
							export class zacq extends com.google.android.gms.common.api.internal.zacs {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zacq>;
								public zac(param0: com.google.android.gms.common.api.internal.BasePendingResult<any>): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export module internal {
							export class zacr extends com.google.android.gms.common.api.internal.zacs {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zacr>;
								public binderDied(): void;
								public zac(param0: com.google.android.gms.common.api.internal.BasePendingResult<any>): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export module internal {
							export class zacs {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zacs>;
								/**
								 * Constructs a new instance of the com.google.android.gms.common.api.internal.zacs interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									zac(param0: com.google.android.gms.common.api.internal.BasePendingResult<any>): void;
								});
								public constructor();
								public zac(param0: com.google.android.gms.common.api.internal.BasePendingResult<any>): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export module internal {
							export abstract class zad<T>  extends com.google.android.gms.common.api.internal.zac {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zad<any>>;
								public zacm: com.google.android.gms.tasks.TaskCompletionSource<any>;
								public constructor(param0: number, param1: com.google.android.gms.tasks.TaskCompletionSource<any>);
								public zaa(param0: com.google.android.gms.common.api.Status): void;
								public constructor(param0: number);
								public zaa(param0: java.lang.RuntimeException): void;
								public zaa(param0: com.google.android.gms.common.api.internal.zaab, param1: boolean): void;
								public zaa(param0: com.google.android.gms.common.api.internal.GoogleApiManager.zaa<any>): void;
								public zad(param0: com.google.android.gms.common.api.internal.GoogleApiManager.zaa<any>): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export module internal {
							export class zae<A>  extends com.google.android.gms.common.api.internal.zab {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zae<any>>;
								public zaa(param0: com.google.android.gms.common.api.Status): void;
								public constructor(param0: number);
								public zaa(param0: java.lang.RuntimeException): void;
								public zaa(param0: com.google.android.gms.common.api.internal.zaab, param1: boolean): void;
								public zaa(param0: com.google.android.gms.common.api.internal.GoogleApiManager.zaa<any>): void;
								public constructor(param0: number, param1: any);
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export module internal {
							export class zaf extends com.google.android.gms.common.api.internal.zad<java.lang.Void> {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zaf>;
								public constructor(param0: number, param1: com.google.android.gms.tasks.TaskCompletionSource<any>);
								public zac(param0: com.google.android.gms.common.api.internal.GoogleApiManager.zaa<any>): boolean;
								public constructor(param0: number);
								public zad(param0: com.google.android.gms.common.api.internal.GoogleApiManager.zaa<any>): void;
								public constructor(param0: com.google.android.gms.common.api.internal.zabw, param1: com.google.android.gms.tasks.TaskCompletionSource<java.lang.Void>);
								public zab(param0: com.google.android.gms.common.api.internal.GoogleApiManager.zaa<any>): native.Array<com.google.android.gms.common.Feature>;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export module internal {
							export class zag<ResultT>  extends com.google.android.gms.common.api.internal.zac {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zag<any>>;
								public zaa(param0: com.google.android.gms.common.api.Status): void;
								public zac(param0: com.google.android.gms.common.api.internal.GoogleApiManager.zaa<any>): boolean;
								public constructor(param0: number);
								public constructor(param0: number, param1: com.google.android.gms.common.api.internal.TaskApiCall<com.google.android.gms.common.api.Api.AnyClient,any>, param2: com.google.android.gms.tasks.TaskCompletionSource<any>, param3: com.google.android.gms.common.api.internal.StatusExceptionMapper);
								public zaa(param0: java.lang.RuntimeException): void;
								public zaa(param0: com.google.android.gms.common.api.internal.zaab, param1: boolean): void;
								public zaa(param0: com.google.android.gms.common.api.internal.GoogleApiManager.zaa<any>): void;
								public zab(param0: com.google.android.gms.common.api.internal.GoogleApiManager.zaa<any>): native.Array<com.google.android.gms.common.Feature>;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export module internal {
							export class zah extends com.google.android.gms.common.api.internal.zad<java.lang.Boolean> {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zah>;
								public constructor(param0: number, param1: com.google.android.gms.tasks.TaskCompletionSource<any>);
								public zac(param0: com.google.android.gms.common.api.internal.GoogleApiManager.zaa<any>): boolean;
								public constructor(param0: number);
								public constructor(param0: com.google.android.gms.common.api.internal.ListenerHolder.ListenerKey<any>, param1: com.google.android.gms.tasks.TaskCompletionSource<java.lang.Boolean>);
								public zad(param0: com.google.android.gms.common.api.internal.GoogleApiManager.zaa<any>): void;
								public zab(param0: com.google.android.gms.common.api.internal.GoogleApiManager.zaa<any>): native.Array<com.google.android.gms.common.Feature>;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export module internal {
							export class zai<O>  extends java.lang.Object {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zai<any>>;
								public equals(param0: any): boolean;
								public zan(): string;
								public static zaa(param0: com.google.android.gms.common.api.Api<any>, param1: com.google.android.gms.common.api.Api.ApiOptions): com.google.android.gms.common.api.internal.zai<any>;
								public static zaa(param0: com.google.android.gms.common.api.Api<any>): com.google.android.gms.common.api.internal.zai<any>;
								public hashCode(): number;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export module internal {
							export class zaj extends com.google.android.gms.common.api.internal.zal {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zaj>;
								public zao(): void;
								public static zaa(param0: com.google.android.gms.common.api.internal.LifecycleActivity): com.google.android.gms.common.api.internal.zaj;
								public dump(param0: string, param1: java.io.FileDescriptor, param2: java.io.PrintWriter, param3: native.Array<string>): void;
								public zaa(param0: number, param1: com.google.android.gms.common.api.GoogleApiClient, param2: com.google.android.gms.common.api.GoogleApiClient.OnConnectionFailedListener): void;
								public zaa(param0: com.google.android.gms.common.ConnectionResult, param1: number): void;
								public zaa(param0: number): void;
								public onStop(): void;
								public onStart(): void;
							}
							export module zaj {
								export class zaa extends com.google.android.gms.common.api.GoogleApiClient.OnConnectionFailedListener {
									public static class: java.lang.Class<com.google.android.gms.common.api.internal.zaj.zaa>;
									public zacw: number;
									public zacx: com.google.android.gms.common.api.GoogleApiClient;
									public zacy: com.google.android.gms.common.api.GoogleApiClient.OnConnectionFailedListener;
									public constructor(param0: com.google.android.gms.common.api.internal.zaj, param1: number, param2: com.google.android.gms.common.api.GoogleApiClient, param3: com.google.android.gms.common.api.GoogleApiClient.OnConnectionFailedListener);
									public onConnectionFailed(param0: com.google.android.gms.common.ConnectionResult): void;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export module internal {
							export class zak {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zak>;
								public constructor(param0: java.lang.Iterable<any>);
								public zap(): java.util.Set<com.google.android.gms.common.api.internal.zai<any>>;
								public getTask(): com.google.android.gms.tasks.Task<java.util.Map<com.google.android.gms.common.api.internal.zai<any>,string>>;
								public zaa(param0: com.google.android.gms.common.api.internal.zai<any>, param1: com.google.android.gms.common.ConnectionResult, param2: string): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export module internal {
							export abstract class zal extends com.google.android.gms.common.api.internal.LifecycleCallback {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zal>;
								public mStarted: boolean;
								public zade: java.util.concurrent.atomic.AtomicReference<com.google.android.gms.common.api.internal.zam>;
								public zacc: com.google.android.gms.common.GoogleApiAvailability;
								public zab(param0: com.google.android.gms.common.ConnectionResult, param1: number): void;
								public zao(): void;
								public onCreate(param0: globalAndroid.os.Bundle): void;
								public onCancel(param0: globalAndroid.content.DialogInterface): void;
								public zaq(): void;
								public zaa(param0: com.google.android.gms.common.ConnectionResult, param1: number): void;
								public onStop(): void;
								public constructor(param0: com.google.android.gms.common.api.internal.LifecycleFragment);
								public onSaveInstanceState(param0: globalAndroid.os.Bundle): void;
								public onStart(): void;
								public onActivityResult(param0: number, param1: number, param2: globalAndroid.content.Intent): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export module internal {
							export class zam {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zam>;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export module internal {
							export class zan {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zan>;
								public run(): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export module internal {
							export class zao extends com.google.android.gms.common.api.internal.zabr {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zao>;
								public zas(): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export module internal {
							export class zap extends java.lang.ThreadLocal<java.lang.Boolean> {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zap>;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export module internal {
							export class zaq implements com.google.android.gms.common.api.GoogleApiClient.ConnectionCallbacks, com.google.android.gms.common.api.GoogleApiClient.OnConnectionFailedListener {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zaq>;
								public mApi: com.google.android.gms.common.api.Api<any>;
								public onConnectionFailed(param0: com.google.android.gms.common.ConnectionResult): void;
								public onConnected(param0: globalAndroid.os.Bundle): void;
								public constructor(param0: com.google.android.gms.common.api.Api<any>, param1: boolean);
								public onConnectionSuspended(param0: number): void;
								public zaa(param0: com.google.android.gms.common.api.internal.zar): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export module internal {
							export class zar extends com.google.android.gms.common.api.GoogleApiClient.ConnectionCallbacks {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zar>;
								/**
								 * Constructs a new instance of the com.google.android.gms.common.api.internal.zar interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									zaa(param0: com.google.android.gms.common.ConnectionResult, param1: com.google.android.gms.common.api.Api<any>, param2: boolean): void;
									onConnected(param0: globalAndroid.os.Bundle): void;
									onConnectionSuspended(param0: number): void;
								});
								public constructor();
								public static CAUSE_SERVICE_DISCONNECTED: number;
								public static CAUSE_NETWORK_LOST: number;
								public zaa(param0: com.google.android.gms.common.ConnectionResult, param1: com.google.android.gms.common.api.Api<any>, param2: boolean): void;
								public onConnected(param0: globalAndroid.os.Bundle): void;
								public onConnectionSuspended(param0: number): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export module internal {
							export class zas extends com.google.android.gms.common.api.internal.zabs {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zas>;
								public enqueue(param0: com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<any,any>): com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<any,any>;
								public blockingConnect(param0: number, param1: java.util.concurrent.TimeUnit): com.google.android.gms.common.ConnectionResult;
								public blockingConnect(): com.google.android.gms.common.ConnectionResult;
								public maybeSignOut(): void;
								public connect(): void;
								public maybeSignIn(param0: com.google.android.gms.common.api.internal.SignInConnectionListener): boolean;
								public isConnected(): boolean;
								public getConnectionResult(param0: com.google.android.gms.common.api.Api<any>): com.google.android.gms.common.ConnectionResult;
								public dump(param0: string, param1: java.io.FileDescriptor, param2: java.io.PrintWriter, param3: native.Array<string>): void;
								public execute(param0: com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<any,any>): com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<any,any>;
								public disconnect(): void;
								public zaw(): void;
								public static zaa(param0: globalAndroid.content.Context, param1: com.google.android.gms.common.api.internal.zaaw, param2: java.util.concurrent.locks.Lock, param3: globalAndroid.os.Looper, param4: com.google.android.gms.common.GoogleApiAvailabilityLight, param5: java.util.Map<com.google.android.gms.common.api.Api.AnyClientKey<any>,com.google.android.gms.common.api.Api.Client>, param6: com.google.android.gms.common.internal.ClientSettings, param7: java.util.Map<com.google.android.gms.common.api.Api<any>,java.lang.Boolean>, param8: com.google.android.gms.common.api.Api.AbstractClientBuilder<any,com.google.android.gms.signin.SignInOptions>, param9: java.util.ArrayList<com.google.android.gms.common.api.internal.zaq>): com.google.android.gms.common.api.internal.zas;
								public isConnecting(): boolean;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export module internal {
							export class zat {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zat>;
								public run(): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export module internal {
							export class zau extends com.google.android.gms.common.api.internal.zabt {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zau>;
								public zac(param0: com.google.android.gms.common.ConnectionResult): void;
								public zab(param0: globalAndroid.os.Bundle): void;
								public zab(param0: number, param1: boolean): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export module internal {
							export class zav extends com.google.android.gms.common.api.internal.zabt {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zav>;
								public zac(param0: com.google.android.gms.common.ConnectionResult): void;
								public zab(param0: globalAndroid.os.Bundle): void;
								public zab(param0: number, param1: boolean): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export module internal {
							export class zaw<O>  extends com.google.android.gms.common.api.GoogleApi<any> {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zaw<any>>;
								public constructor(param0: globalAndroid.app.Activity, param1: com.google.android.gms.common.api.Api<any>, param2: any, param3: com.google.android.gms.common.api.GoogleApi.Settings);
								public zaab(): com.google.android.gms.common.api.Api.Client;
								public zaa(param0: globalAndroid.os.Looper, param1: com.google.android.gms.common.api.internal.GoogleApiManager.zaa<any>): com.google.android.gms.common.api.Api.Client;
								public constructor(param0: globalAndroid.content.Context, param1: com.google.android.gms.common.api.Api<any>, param2: globalAndroid.os.Looper);
								/** @deprecated */
								public constructor(param0: globalAndroid.app.Activity, param1: com.google.android.gms.common.api.Api<any>, param2: any, param3: com.google.android.gms.common.api.internal.StatusExceptionMapper);
								public constructor(param0: globalAndroid.content.Context, param1: com.google.android.gms.common.api.Api<any>, param2: any, param3: com.google.android.gms.common.api.GoogleApi.Settings);
								/** @deprecated */
								public constructor(param0: globalAndroid.content.Context, param1: com.google.android.gms.common.api.Api<any>, param2: any, param3: com.google.android.gms.common.api.internal.StatusExceptionMapper);
								public zaa(param0: globalAndroid.content.Context, param1: globalAndroid.os.Handler): com.google.android.gms.common.api.internal.zace;
								/** @deprecated */
								public constructor(param0: globalAndroid.content.Context, param1: com.google.android.gms.common.api.Api<any>, param2: any, param3: globalAndroid.os.Looper, param4: com.google.android.gms.common.api.internal.StatusExceptionMapper);
								public constructor(param0: globalAndroid.content.Context, param1: com.google.android.gms.common.api.Api<any>, param2: globalAndroid.os.Looper, param3: com.google.android.gms.common.api.Api.Client, param4: com.google.android.gms.common.api.internal.zaq, param5: com.google.android.gms.common.internal.ClientSettings, param6: com.google.android.gms.common.api.Api.AbstractClientBuilder<any,com.google.android.gms.signin.SignInOptions>);
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export module internal {
							export class zax extends com.google.android.gms.common.api.internal.zabs {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zax>;
								public constructor(param0: globalAndroid.content.Context, param1: java.util.concurrent.locks.Lock, param2: globalAndroid.os.Looper, param3: com.google.android.gms.common.GoogleApiAvailabilityLight, param4: java.util.Map<com.google.android.gms.common.api.Api.AnyClientKey<any>,com.google.android.gms.common.api.Api.Client>, param5: com.google.android.gms.common.internal.ClientSettings, param6: java.util.Map<com.google.android.gms.common.api.Api<any>,java.lang.Boolean>, param7: com.google.android.gms.common.api.Api.AbstractClientBuilder<any,com.google.android.gms.signin.SignInOptions>, param8: java.util.ArrayList<com.google.android.gms.common.api.internal.zaq>, param9: com.google.android.gms.common.api.internal.zaaw, param10: boolean);
								public enqueue(param0: com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<any,any>): com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<any,any>;
								public blockingConnect(param0: number, param1: java.util.concurrent.TimeUnit): com.google.android.gms.common.ConnectionResult;
								public blockingConnect(): com.google.android.gms.common.ConnectionResult;
								public maybeSignOut(): void;
								public connect(): void;
								public maybeSignIn(param0: com.google.android.gms.common.api.internal.SignInConnectionListener): boolean;
								public isConnected(): boolean;
								public getConnectionResult(param0: com.google.android.gms.common.api.Api<any>): com.google.android.gms.common.ConnectionResult;
								public dump(param0: string, param1: java.io.FileDescriptor, param2: java.io.PrintWriter, param3: native.Array<string>): void;
								public execute(param0: com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<any,any>): com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<any,any>;
								public disconnect(): void;
								public zaw(): void;
								public isConnecting(): boolean;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export module internal {
							export class zay {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zay>;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export module internal {
							export class zaz extends com.google.android.gms.tasks.OnCompleteListener<java.util.Map<com.google.android.gms.common.api.internal.zai<any>,string>> {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zaz>;
								public onComplete(param0: com.google.android.gms.tasks.Task<any>): void;
								public onComplete(param0: com.google.android.gms.tasks.Task<java.util.Map<com.google.android.gms.common.api.internal.zai<any>,string>>): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export module internal {
							export class zza implements com.google.android.gms.common.api.internal.LifecycleFragment {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zza>;
								public onResume(): void;
								public startActivityForResult(param0: globalAndroid.content.Intent, param1: number): void;
								public constructor();
								public onDestroy(): void;
								public onStop(): void;
								public addCallback(param0: string, param1: com.google.android.gms.common.api.internal.LifecycleCallback): void;
								public isCreated(): boolean;
								public dump(param0: string, param1: java.io.FileDescriptor, param2: java.io.PrintWriter, param3: native.Array<string>): void;
								public onCreate(param0: globalAndroid.os.Bundle): void;
								public getCallbackOrNull(param0: string, param1: java.lang.Class): com.google.android.gms.common.api.internal.LifecycleCallback;
								public isStarted(): boolean;
								public getLifecycleActivity(): globalAndroid.app.Activity;
								public onStart(): void;
								public onActivityResult(param0: number, param1: number, param2: globalAndroid.content.Intent): void;
								public onSaveInstanceState(param0: globalAndroid.os.Bundle): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export module internal {
							export class zzb {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zzb>;
								public run(): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export module internal {
							export class zzc implements com.google.android.gms.common.api.internal.LifecycleFragment {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zzc>;
								public onResume(): void;
								public startActivityForResult(param0: globalAndroid.content.Intent, param1: number): void;
								public constructor();
								public onDestroy(): void;
								public onStop(): void;
								public addCallback(param0: string, param1: com.google.android.gms.common.api.internal.LifecycleCallback): void;
								public isCreated(): boolean;
								public dump(param0: string, param1: java.io.FileDescriptor, param2: java.io.PrintWriter, param3: native.Array<string>): void;
								public onCreate(param0: globalAndroid.os.Bundle): void;
								public getCallbackOrNull(param0: string, param1: java.lang.Class): com.google.android.gms.common.api.internal.LifecycleCallback;
								public isStarted(): boolean;
								public onStart(): void;
								public onActivityResult(param0: number, param1: number, param2: globalAndroid.content.Intent): void;
								public onSaveInstanceState(param0: globalAndroid.os.Bundle): void;
								public getLifecycleActivity(): globalAndroid.app.Activity;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export module internal {
							export class zzd {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zzd>;
								public run(): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export class zaa extends com.google.android.gms.common.api.PendingResult.StatusListener {
							public static class: java.lang.Class<com.google.android.gms.common.api.zaa>;
							public onComplete(param0: com.google.android.gms.common.api.Status): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export class zab {
							public static class: java.lang.Class<com.google.android.gms.common.api.zab>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export abstract class zac {
							public static class: java.lang.Class<com.google.android.gms.common.api.zac>;
							public constructor();
							public remove(param0: number): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export class zza extends globalAndroid.os.Parcelable.Creator<com.google.android.gms.common.api.Scope> {
							public static class: java.lang.Class<com.google.android.gms.common.api.zza>;
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export class zzb extends globalAndroid.os.Parcelable.Creator<com.google.android.gms.common.api.Status> {
							public static class: java.lang.Class<com.google.android.gms.common.api.zzb>;
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module config {
						export abstract class GservicesValue<T>  extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.gms.common.config.GservicesValue<any>>;
							public mKey: string;
							public static value(param0: string, param1: string): com.google.android.gms.common.config.GservicesValue<string>;
							/** @deprecated */
							public getBinderSafe(): T;
							public constructor(param0: string, param1: T);
							public static value(param0: string, param1: java.lang.Float): com.google.android.gms.common.config.GservicesValue<java.lang.Float>;
							public resetOverride(): void;
							public static value(param0: string, param1: java.lang.Long): com.google.android.gms.common.config.GservicesValue<java.lang.Long>;
							public static value(param0: string, param1: java.lang.Integer): com.google.android.gms.common.config.GservicesValue<java.lang.Integer>;
							public static isInitialized(): boolean;
							public get(): T;
							public static value(param0: string, param1: boolean): com.google.android.gms.common.config.GservicesValue<java.lang.Boolean>;
							public override(param0: T): void;
						}
						export module GservicesValue {
							export class zza {
								public static class: java.lang.Class<com.google.android.gms.common.config.GservicesValue.zza>;
								/**
								 * Constructs a new instance of the com.google.android.gms.common.config.GservicesValue$zza interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									zza(param0: string, param1: java.lang.Boolean): java.lang.Boolean;
									getLong(param0: string, param1: java.lang.Long): java.lang.Long;
									zza(param0: string, param1: java.lang.Integer): java.lang.Integer;
									zza(param0: string, param1: java.lang.Float): java.lang.Float;
									getString(param0: string, param1: string): string;
								});
								public constructor();
								public getString(param0: string, param1: string): string;
								public getLong(param0: string, param1: java.lang.Long): java.lang.Long;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module config {
						export class zza extends com.google.android.gms.common.config.GservicesValue<java.lang.Boolean> {
							public static class: java.lang.Class<com.google.android.gms.common.config.zza>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module config {
						export class zzb extends com.google.android.gms.common.config.GservicesValue<java.lang.Long> {
							public static class: java.lang.Class<com.google.android.gms.common.config.zzb>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module config {
						export class zzc extends com.google.android.gms.common.config.GservicesValue<java.lang.Integer> {
							public static class: java.lang.Class<com.google.android.gms.common.config.zzc>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module config {
						export class zzd extends com.google.android.gms.common.config.GservicesValue<java.lang.Float> {
							public static class: java.lang.Class<com.google.android.gms.common.config.zzd>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module config {
						export class zze extends com.google.android.gms.common.config.GservicesValue<string> {
							public static class: java.lang.Class<com.google.android.gms.common.config.zze>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module data {
						export abstract class AbstractDataBuffer<T>  extends com.google.android.gms.common.data.DataBuffer<any> {
							public static class: java.lang.Class<com.google.android.gms.common.data.AbstractDataBuffer<any>>;
							public mDataHolder: com.google.android.gms.common.data.DataHolder;
							public singleRefIterator(): java.util.Iterator<any>;
							public getMetadata(): globalAndroid.os.Bundle;
							public iterator(): java.util.Iterator<any>;
							/** @deprecated */
							public close(): void;
							public get(param0: number): any;
							public release(): void;
							/** @deprecated */
							public isClosed(): boolean;
							public constructor(param0: com.google.android.gms.common.data.DataHolder);
							public getCount(): number;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module data {
						export class BitmapTeleporter extends com.google.android.gms.common.internal.safeparcel.AbstractSafeParcelable implements com.google.android.gms.common.internal.ReflectedParcelable {
							public static class: java.lang.Class<com.google.android.gms.common.data.BitmapTeleporter>;
							public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.gms.common.data.BitmapTeleporter>;
							public constructor();
							public constructor(param0: globalAndroid.graphics.Bitmap);
							public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
							public release(): void;
							public setTempDir(param0: java.io.File): void;
							public get(): globalAndroid.graphics.Bitmap;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module data {
						export class DataBuffer<T>  extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.gms.common.data.DataBuffer<any>>;
							/**
							 * Constructs a new instance of the com.google.android.gms.common.data.DataBuffer<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								getCount(): number;
								get(param0: number): T;
								getMetadata(): globalAndroid.os.Bundle;
								close(): void;
								isClosed(): boolean;
								iterator(): java.util.Iterator<T>;
								singleRefIterator(): java.util.Iterator<T>;
								release(): void;
								release(): void;
							});
							public constructor();
							public get(param0: number): T;
							public getMetadata(): globalAndroid.os.Bundle;
							/** @deprecated */
							public close(): void;
							public release(): void;
							/** @deprecated */
							public isClosed(): boolean;
							public singleRefIterator(): java.util.Iterator<T>;
							public getCount(): number;
							public iterator(): java.util.Iterator<T>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module data {
						export class DataBufferIterator<T>  extends java.util.Iterator<any> {
							public static class: java.lang.Class<com.google.android.gms.common.data.DataBufferIterator<any>>;
							public zalj: com.google.android.gms.common.data.DataBuffer<any>;
							public zalk: number;
							public constructor(param0: com.google.android.gms.common.data.DataBuffer<any>);
							public hasNext(): boolean;
							public remove(): void;
							public next(): any;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module data {
						export class DataBufferObserver {
							public static class: java.lang.Class<com.google.android.gms.common.data.DataBufferObserver>;
							/**
							 * Constructs a new instance of the com.google.android.gms.common.data.DataBufferObserver interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								onDataChanged(): void;
								onDataRangeChanged(param0: number, param1: number): void;
								onDataRangeInserted(param0: number, param1: number): void;
								onDataRangeRemoved(param0: number, param1: number): void;
								onDataRangeMoved(param0: number, param1: number, param2: number): void;
							});
							public constructor();
							public onDataRangeInserted(param0: number, param1: number): void;
							public onDataChanged(): void;
							public onDataRangeChanged(param0: number, param1: number): void;
							public onDataRangeRemoved(param0: number, param1: number): void;
							public onDataRangeMoved(param0: number, param1: number, param2: number): void;
						}
						export module DataBufferObserver {
							export class Observable {
								public static class: java.lang.Class<com.google.android.gms.common.data.DataBufferObserver.Observable>;
								/**
								 * Constructs a new instance of the com.google.android.gms.common.data.DataBufferObserver$Observable interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									addObserver(param0: com.google.android.gms.common.data.DataBufferObserver): void;
									removeObserver(param0: com.google.android.gms.common.data.DataBufferObserver): void;
								});
								public constructor();
								public removeObserver(param0: com.google.android.gms.common.data.DataBufferObserver): void;
								public addObserver(param0: com.google.android.gms.common.data.DataBufferObserver): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module data {
						export class DataBufferObserverSet implements com.google.android.gms.common.data.DataBufferObserver, com.google.android.gms.common.data.DataBufferObserver.Observable {
							public static class: java.lang.Class<com.google.android.gms.common.data.DataBufferObserverSet>;
							public constructor();
							public addObserver(param0: com.google.android.gms.common.data.DataBufferObserver): void;
							public removeObserver(param0: com.google.android.gms.common.data.DataBufferObserver): void;
							public hasObservers(): boolean;
							public onDataRangeInserted(param0: number, param1: number): void;
							public clear(): void;
							public onDataChanged(): void;
							public onDataRangeChanged(param0: number, param1: number): void;
							public onDataRangeRemoved(param0: number, param1: number): void;
							public onDataRangeMoved(param0: number, param1: number, param2: number): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module data {
						export class DataBufferRef {
							public static class: java.lang.Class<com.google.android.gms.common.data.DataBufferRef>;
							public mDataHolder: com.google.android.gms.common.data.DataHolder;
							public mDataRow: number;
							public getInteger(param0: string): number;
							public hasColumn(param0: string): boolean;
							public hashCode(): number;
							public getFloat(param0: string): number;
							public parseUri(param0: string): globalAndroid.net.Uri;
							public getByteArray(param0: string): native.Array<number>;
							public copyToBuffer(param0: string, param1: globalAndroid.database.CharArrayBuffer): void;
							public getDouble(param0: string): number;
							public hasNull(param0: string): boolean;
							public isDataValid(): boolean;
							public getLong(param0: string): number;
							public getString(param0: string): string;
							public zag(param0: number): void;
							public constructor(param0: com.google.android.gms.common.data.DataHolder, param1: number);
							public getDataRow(): number;
							public equals(param0: any): boolean;
							public getBoolean(param0: string): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module data {
						export class DataBufferSafeParcelable<T>  extends com.google.android.gms.common.data.AbstractDataBuffer<any> {
							public static class: java.lang.Class<com.google.android.gms.common.data.DataBufferSafeParcelable<any>>;
							public singleRefIterator(): java.util.Iterator<any>;
							public constructor(param0: com.google.android.gms.common.data.DataHolder, param1: globalAndroid.os.Parcelable.Creator<any>);
							public getMetadata(): globalAndroid.os.Bundle;
							public iterator(): java.util.Iterator<any>;
							/** @deprecated */
							public close(): void;
							public get(param0: number): any;
							public static addValue(param0: com.google.android.gms.common.data.DataHolder.Builder, param1: com.google.android.gms.common.internal.safeparcel.SafeParcelable): void;
							public release(): void;
							/** @deprecated */
							public isClosed(): boolean;
							public constructor(param0: com.google.android.gms.common.data.DataHolder);
							public getCount(): number;
							public static buildDataHolder(): com.google.android.gms.common.data.DataHolder.Builder;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module data {
						export class DataBufferUtils {
							public static class: java.lang.Class<com.google.android.gms.common.data.DataBufferUtils>;
							public static KEY_NEXT_PAGE_TOKEN: string;
							public static KEY_PREV_PAGE_TOKEN: string;
							public static freezeAndClose(param0: com.google.android.gms.common.data.DataBuffer<any>): java.util.ArrayList;
							public static hasData(param0: com.google.android.gms.common.data.DataBuffer<any>): boolean;
							public static hasPrevPage(param0: com.google.android.gms.common.data.DataBuffer<any>): boolean;
							public static hasNextPage(param0: com.google.android.gms.common.data.DataBuffer<any>): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module data {
						export class DataHolder extends com.google.android.gms.common.internal.safeparcel.AbstractSafeParcelable {
							public static class: java.lang.Class<com.google.android.gms.common.data.DataHolder>;
							public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.gms.common.data.DataHolder>;
							public constructor();
							public getString(param0: string, param1: number, param2: number): string;
							public close(): void;
							public static empty(param0: number): com.google.android.gms.common.data.DataHolder;
							public hasColumn(param0: string): boolean;
							public hasNull(param0: string, param1: number, param2: number): boolean;
							public constructor(param0: globalAndroid.database.Cursor, param1: number, param2: globalAndroid.os.Bundle);
							public finalize(): void;
							public zaca(): void;
							public getLong(param0: string, param1: number, param2: number): number;
							public isClosed(): boolean;
							public zab(param0: string, param1: number, param2: number): number;
							public getCount(): number;
							public zaa(param0: string, param1: number, param2: number, param3: globalAndroid.database.CharArrayBuffer): void;
							public constructor(param0: native.Array<string>, param1: native.Array<globalAndroid.database.CursorWindow>, param2: number, param3: globalAndroid.os.Bundle);
							public getStatusCode(): number;
							public getMetadata(): globalAndroid.os.Bundle;
							public getInteger(param0: string, param1: number, param2: number): number;
							public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
							public static builder(param0: native.Array<string>): com.google.android.gms.common.data.DataHolder.Builder;
							public zaa(param0: string, param1: number, param2: number): number;
							public getBoolean(param0: string, param1: number, param2: number): boolean;
							public getByteArray(param0: string, param1: number, param2: number): native.Array<number>;
							public getWindowIndex(param0: number): number;
						}
						export module DataHolder {
							export class Builder {
								public static class: java.lang.Class<com.google.android.gms.common.data.DataHolder.Builder>;
								public build(param0: number, param1: globalAndroid.os.Bundle): com.google.android.gms.common.data.DataHolder;
								public zaa(param0: java.util.HashMap<string,any>): com.google.android.gms.common.data.DataHolder.Builder;
								public build(param0: number): com.google.android.gms.common.data.DataHolder;
								public withRow(param0: globalAndroid.content.ContentValues): com.google.android.gms.common.data.DataHolder.Builder;
							}
							export class zaa {
								public static class: java.lang.Class<com.google.android.gms.common.data.DataHolder.zaa>;
								public constructor(param0: string);
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module data {
						export abstract class EntityBuffer<T>  extends com.google.android.gms.common.data.AbstractDataBuffer<any> {
							public static class: java.lang.Class<com.google.android.gms.common.data.EntityBuffer<any>>;
							public singleRefIterator(): java.util.Iterator<any>;
							public getMetadata(): globalAndroid.os.Bundle;
							public getChildDataMarkerColumn(): string;
							public iterator(): java.util.Iterator<any>;
							public getPrimaryDataMarkerColumn(): string;
							/** @deprecated */
							public close(): void;
							public get(param0: number): any;
							public release(): void;
							/** @deprecated */
							public isClosed(): boolean;
							public constructor(param0: com.google.android.gms.common.data.DataHolder);
							public getCount(): number;
							public getEntry(param0: number, param1: number): any;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module data {
						export class Freezable<T>  extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.gms.common.data.Freezable<any>>;
							/**
							 * Constructs a new instance of the com.google.android.gms.common.data.Freezable<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								freeze(): T;
								isDataValid(): boolean;
							});
							public constructor();
							public isDataValid(): boolean;
							public freeze(): T;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module data {
						export class FreezableUtils {
							public static class: java.lang.Class<com.google.android.gms.common.data.FreezableUtils>;
							public constructor();
							public static freezeIterable(param0: java.lang.Iterable): java.util.ArrayList;
							public static freeze(param0: java.util.ArrayList): java.util.ArrayList;
							public static freeze(param0: native.Array<com.google.android.gms.common.data.Freezable<any>>): java.util.ArrayList;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module data {
						export class SingleRefDataBufferIterator<T>  extends com.google.android.gms.common.data.DataBufferIterator<any> {
							public static class: java.lang.Class<com.google.android.gms.common.data.SingleRefDataBufferIterator<any>>;
							public constructor(param0: com.google.android.gms.common.data.DataBuffer<any>);
							public next(): any;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module data {
						export class zaa extends globalAndroid.os.Parcelable.Creator<com.google.android.gms.common.data.BitmapTeleporter> {
							public static class: java.lang.Class<com.google.android.gms.common.data.zaa>;
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module data {
						export class zab extends com.google.android.gms.common.data.DataHolder.Builder {
							public static class: java.lang.Class<com.google.android.gms.common.data.zab>;
							public withRow(param0: globalAndroid.content.ContentValues): com.google.android.gms.common.data.DataHolder.Builder;
							public zaa(param0: java.util.HashMap<string,any>): com.google.android.gms.common.data.DataHolder.Builder;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module data {
						export class zac extends globalAndroid.os.Parcelable.Creator<com.google.android.gms.common.data.DataHolder> {
							public static class: java.lang.Class<com.google.android.gms.common.data.zac>;
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module images {
						export class ImageManager {
							public static class: java.lang.Class<com.google.android.gms.common.images.ImageManager>;
							public loadImage(param0: globalAndroid.widget.ImageView, param1: globalAndroid.net.Uri): void;
							public loadImage(param0: com.google.android.gms.common.images.ImageManager.OnImageLoadedListener, param1: globalAndroid.net.Uri, param2: number): void;
							public loadImage(param0: globalAndroid.widget.ImageView, param1: number): void;
							public loadImage(param0: com.google.android.gms.common.images.ImageManager.OnImageLoadedListener, param1: globalAndroid.net.Uri): void;
							public loadImage(param0: globalAndroid.widget.ImageView, param1: globalAndroid.net.Uri, param2: number): void;
							public static create(param0: globalAndroid.content.Context): com.google.android.gms.common.images.ImageManager;
						}
						export module ImageManager {
							export class ImageReceiver {
								public static class: java.lang.Class<com.google.android.gms.common.images.ImageManager.ImageReceiver>;
								public zace(): void;
								public zab(param0: com.google.android.gms.common.images.zaa): void;
								public zac(param0: com.google.android.gms.common.images.zaa): void;
								public onReceiveResult(param0: number, param1: globalAndroid.os.Bundle): void;
							}
							export class OnImageLoadedListener {
								public static class: java.lang.Class<com.google.android.gms.common.images.ImageManager.OnImageLoadedListener>;
								/**
								 * Constructs a new instance of the com.google.android.gms.common.images.ImageManager$OnImageLoadedListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									onImageLoaded(param0: globalAndroid.net.Uri, param1: globalAndroid.graphics.drawable.Drawable, param2: boolean): void;
								});
								public constructor();
								public onImageLoaded(param0: globalAndroid.net.Uri, param1: globalAndroid.graphics.drawable.Drawable, param2: boolean): void;
							}
							export class zaa extends globalAndroid.support.v4.util.LruCache<com.google.android.gms.common.images.zab,globalAndroid.graphics.Bitmap> {
								public static class: java.lang.Class<com.google.android.gms.common.images.ImageManager.zaa>;
							}
							export class zab {
								public static class: java.lang.Class<com.google.android.gms.common.images.ImageManager.zab>;
								public constructor(param0: com.google.android.gms.common.images.ImageManager, param1: globalAndroid.net.Uri, param2: globalAndroid.os.ParcelFileDescriptor);
								public run(): void;
							}
							export class zac {
								public static class: java.lang.Class<com.google.android.gms.common.images.ImageManager.zac>;
								public constructor(param0: com.google.android.gms.common.images.ImageManager, param1: com.google.android.gms.common.images.zaa);
								public run(): void;
							}
							export class zad {
								public static class: java.lang.Class<com.google.android.gms.common.images.ImageManager.zad>;
								public constructor(param0: com.google.android.gms.common.images.ImageManager, param1: globalAndroid.net.Uri, param2: globalAndroid.graphics.Bitmap, param3: boolean, param4: java.util.concurrent.CountDownLatch);
								public run(): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module images {
						export class Size {
							public static class: java.lang.Class<com.google.android.gms.common.images.Size>;
							public getWidth(): number;
							public getHeight(): number;
							public constructor(param0: number, param1: number);
							public hashCode(): number;
							public toString(): string;
							public equals(param0: any): boolean;
							public static parseSize(param0: string): com.google.android.gms.common.images.Size;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module images {
						export class WebImage extends com.google.android.gms.common.internal.safeparcel.AbstractSafeParcelable {
							public static class: java.lang.Class<com.google.android.gms.common.images.WebImage>;
							public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.gms.common.images.WebImage>;
							public constructor();
							public getWidth(): number;
							public getHeight(): number;
							public constructor(param0: globalAndroid.net.Uri);
							public getUrl(): globalAndroid.net.Uri;
							public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
							public constructor(param0: globalAndroid.net.Uri, param1: number, param2: number);
							public constructor(param0: org.json.JSONObject);
							public hashCode(): number;
							public toJson(): org.json.JSONObject;
							public toString(): string;
							public equals(param0: any): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module images {
						export abstract class zaa {
							public static class: java.lang.Class<com.google.android.gms.common.images.zaa>;
							public zamw: number;
							public constructor(param0: globalAndroid.net.Uri, param1: number);
							public zaa(param0: globalAndroid.graphics.drawable.Drawable, param1: boolean, param2: boolean, param3: boolean): void;
							public zaa(param0: boolean, param1: boolean): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module images {
						export class zab {
							public static class: java.lang.Class<com.google.android.gms.common.images.zab>;
							public uri: globalAndroid.net.Uri;
							public constructor(param0: globalAndroid.net.Uri);
							public hashCode(): number;
							public equals(param0: any): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module images {
						export class zac extends com.google.android.gms.common.images.zaa {
							public static class: java.lang.Class<com.google.android.gms.common.images.zac>;
							public constructor(param0: globalAndroid.widget.ImageView, param1: globalAndroid.net.Uri);
							public hashCode(): number;
							public constructor(param0: globalAndroid.net.Uri, param1: number);
							public zaa(param0: globalAndroid.graphics.drawable.Drawable, param1: boolean, param2: boolean, param3: boolean): void;
							public equals(param0: any): boolean;
							public zaa(param0: boolean, param1: boolean): boolean;
							public constructor(param0: globalAndroid.widget.ImageView, param1: number);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module images {
						export class zad extends com.google.android.gms.common.images.zaa {
							public static class: java.lang.Class<com.google.android.gms.common.images.zad>;
							public hashCode(): number;
							public constructor(param0: globalAndroid.net.Uri, param1: number);
							public zaa(param0: globalAndroid.graphics.drawable.Drawable, param1: boolean, param2: boolean, param3: boolean): void;
							public equals(param0: any): boolean;
							public constructor(param0: com.google.android.gms.common.images.ImageManager.OnImageLoadedListener, param1: globalAndroid.net.Uri);
							public zaa(param0: boolean, param1: boolean): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module images {
						export class zae extends globalAndroid.os.Parcelable.Creator<com.google.android.gms.common.images.WebImage> {
							public static class: java.lang.Class<com.google.android.gms.common.images.zae>;
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module internal {
						export class AccountAccessor extends com.google.android.gms.common.internal.IAccountAccessor.Stub {
							public static class: java.lang.Class<com.google.android.gms.common.internal.AccountAccessor>;
							public getAccount(): globalAndroid.accounts.Account;
							public static getAccountBinderSafe(param0: com.google.android.gms.common.internal.IAccountAccessor): globalAndroid.accounts.Account;
							public equals(param0: any): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module internal {
						export class AccountType {
							public static class: java.lang.Class<com.google.android.gms.common.internal.AccountType>;
							public static GOOGLE: string;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module internal {
						export class ApiExceptionUtil {
							public static class: java.lang.Class<com.google.android.gms.common.internal.ApiExceptionUtil>;
							public constructor();
							public static fromStatus(param0: com.google.android.gms.common.api.Status): com.google.android.gms.common.api.ApiException;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module internal {
						export class Asserts {
							public static class: java.lang.Class<com.google.android.gms.common.internal.Asserts>;
							public static checkNotNull(param0: any, param1: any): void;
							public static checkState(param0: boolean, param1: any): void;
							public static checkNotMainThread(param0: string): void;
							public static checkNull(param0: any): void;
							public static checkNotNull(param0: any): void;
							public static checkMainThread(param0: string): void;
							public static checkState(param0: boolean): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module internal {
						export class AuthAccountRequest extends com.google.android.gms.common.internal.safeparcel.AbstractSafeParcelable {
							public static class: java.lang.Class<com.google.android.gms.common.internal.AuthAccountRequest>;
							public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.gms.common.internal.AuthAccountRequest>;
							public constructor();
							public constructor(param0: globalAndroid.accounts.Account, param1: java.util.Set<com.google.android.gms.common.api.Scope>);
							public setPolicyAction(param0: java.lang.Integer): com.google.android.gms.common.internal.AuthAccountRequest;
							public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
							public getScopes(): java.util.Set<com.google.android.gms.common.api.Scope>;
							public getAccount(): globalAndroid.accounts.Account;
							/** @deprecated */
							public constructor(param0: com.google.android.gms.common.internal.IAccountAccessor, param1: java.util.Set<com.google.android.gms.common.api.Scope>);
							public setOauthPolicy(param0: java.lang.Integer): com.google.android.gms.common.internal.AuthAccountRequest;
							public getPolicyAction(): java.lang.Integer;
							public getOauthPolicy(): java.lang.Integer;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module internal {
						export abstract class BaseGmsClient<T>  extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.gms.common.internal.BaseGmsClient<any>>;
							public static CONNECT_STATE_DISCONNECTED: number;
							public static CONNECT_STATE_CONNECTED: number;
							public static CONNECT_STATE_DISCONNECTING: number;
							public static KEY_PENDING_INTENT: string;
							public static DEFAULT_ACCOUNT: string;
							public static GOOGLE_PLUS_REQUIRED_FEATURES: native.Array<string>;
							public getStartServiceAction(): string;
							public requiresGooglePlayServices(): boolean;
							public getServiceBrokerBinder(): globalAndroid.os.IBinder;
							public onConnectedLocked(param0: T): void;
							public getServiceDescriptor(): string;
							public getLooper(): globalAndroid.os.Looper;
							public onConnectionSuspended(param0: number): void;
							public checkConnected(): void;
							public dump(param0: string, param1: java.io.FileDescriptor, param2: java.io.PrintWriter, param3: native.Array<string>): void;
							public onPostInitHandler(param0: number, param1: globalAndroid.os.IBinder, param2: globalAndroid.os.Bundle, param3: number): void;
							public getAvailableFeatures(): native.Array<com.google.android.gms.common.Feature>;
							public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.os.Looper, param2: com.google.android.gms.common.internal.GmsClientSupervisor, param3: com.google.android.gms.common.GoogleApiAvailabilityLight, param4: number, param5: com.google.android.gms.common.internal.BaseGmsClient.BaseConnectionCallbacks, param6: com.google.android.gms.common.internal.BaseGmsClient.BaseOnConnectionFailedListener, param7: string);
							public getAccount(): globalAndroid.accounts.Account;
							public createServiceInterface(param0: globalAndroid.os.IBinder): T;
							public getEndpointPackageName(): string;
							public triggerConnectionSuspended(param0: number): void;
							public getSignInIntent(): globalAndroid.content.Intent;
							public onConnectionFailed(param0: com.google.android.gms.common.ConnectionResult): void;
							public getApiFeatures(): native.Array<com.google.android.gms.common.Feature>;
							public getConnectionHint(): globalAndroid.os.Bundle;
							public getService(): T;
							public getLocalStartServiceAction(): string;
							public getGetServiceRequestExtraArgs(): globalAndroid.os.Bundle;
							public getStartServicePackage(): string;
							public getContext(): globalAndroid.content.Context;
							public requiresAccount(): boolean;
							public checkAvailabilityAndConnect(): void;
							public disconnect(): void;
							public getScopes(): java.util.Set<com.google.android.gms.common.api.Scope>;
							public isConnected(): boolean;
							public providesSignIn(): boolean;
							public triggerNotAvailable(param0: com.google.android.gms.common.internal.BaseGmsClient.ConnectionProgressReportCallbacks, param1: number, param2: globalAndroid.app.PendingIntent): void;
							public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.os.Looper, param2: number, param3: com.google.android.gms.common.internal.BaseGmsClient.BaseConnectionCallbacks, param4: com.google.android.gms.common.internal.BaseGmsClient.BaseOnConnectionFailedListener, param5: string);
							public isConnecting(): boolean;
							public getMinApkVersion(): number;
							public connect(param0: com.google.android.gms.common.internal.BaseGmsClient.ConnectionProgressReportCallbacks): void;
							public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.os.Handler, param2: com.google.android.gms.common.internal.GmsClientSupervisor, param3: com.google.android.gms.common.GoogleApiAvailabilityLight, param4: number, param5: com.google.android.gms.common.internal.BaseGmsClient.BaseConnectionCallbacks, param6: com.google.android.gms.common.internal.BaseGmsClient.BaseOnConnectionFailedListener);
							public onUserSignOut(param0: com.google.android.gms.common.internal.BaseGmsClient.SignOutCallbacks): void;
							public getRemoteService(param0: com.google.android.gms.common.internal.IAccountAccessor, param1: java.util.Set<com.google.android.gms.common.api.Scope>): void;
							public requiresSignIn(): boolean;
						}
						export module BaseGmsClient {
							export class BaseConnectionCallbacks {
								public static class: java.lang.Class<com.google.android.gms.common.internal.BaseGmsClient.BaseConnectionCallbacks>;
								/**
								 * Constructs a new instance of the com.google.android.gms.common.internal.BaseGmsClient$BaseConnectionCallbacks interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									onConnected(param0: globalAndroid.os.Bundle): void;
									onConnectionSuspended(param0: number): void;
								});
								public constructor();
								public onConnected(param0: globalAndroid.os.Bundle): void;
								public onConnectionSuspended(param0: number): void;
							}
							export class BaseOnConnectionFailedListener {
								public static class: java.lang.Class<com.google.android.gms.common.internal.BaseGmsClient.BaseOnConnectionFailedListener>;
								/**
								 * Constructs a new instance of the com.google.android.gms.common.internal.BaseGmsClient$BaseOnConnectionFailedListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									onConnectionFailed(param0: com.google.android.gms.common.ConnectionResult): void;
								});
								public constructor();
								public onConnectionFailed(param0: com.google.android.gms.common.ConnectionResult): void;
							}
							export class ConnectionProgressReportCallbacks {
								public static class: java.lang.Class<com.google.android.gms.common.internal.BaseGmsClient.ConnectionProgressReportCallbacks>;
								/**
								 * Constructs a new instance of the com.google.android.gms.common.internal.BaseGmsClient$ConnectionProgressReportCallbacks interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									onReportServiceBinding(param0: com.google.android.gms.common.ConnectionResult): void;
								});
								public constructor();
								public onReportServiceBinding(param0: com.google.android.gms.common.ConnectionResult): void;
							}
							export class LegacyClientCallbackAdapter extends com.google.android.gms.common.internal.BaseGmsClient.ConnectionProgressReportCallbacks {
								public static class: java.lang.Class<com.google.android.gms.common.internal.BaseGmsClient.LegacyClientCallbackAdapter>;
								public onReportServiceBinding(param0: com.google.android.gms.common.ConnectionResult): void;
								public constructor(param0: com.google.android.gms.common.internal.BaseGmsClient<any>);
							}
							export class SignOutCallbacks {
								public static class: java.lang.Class<com.google.android.gms.common.internal.BaseGmsClient.SignOutCallbacks>;
								/**
								 * Constructs a new instance of the com.google.android.gms.common.internal.BaseGmsClient$SignOutCallbacks interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									onSignOutComplete(): void;
								});
								public constructor();
								public onSignOutComplete(): void;
							}
							export abstract class zza extends com.google.android.gms.common.internal.BaseGmsClient.zzc<java.lang.Boolean> {
								public static class: java.lang.Class<com.google.android.gms.common.internal.BaseGmsClient.zza>;
								public constructor(param0: any);
								public constructor(param0: com.google.android.gms.common.internal.BaseGmsClient<any>, param1: number, param2: globalAndroid.os.Bundle);
							}
							export class zzb extends com.google.android.gms.internal.common.zze {
								public static class: java.lang.Class<com.google.android.gms.common.internal.BaseGmsClient.zzb>;
								public constructor(param0: com.google.android.gms.common.internal.BaseGmsClient<any>, param1: globalAndroid.os.Looper);
								public constructor(param0: globalAndroid.os.Looper, param1: globalAndroid.os.Handler.Callback);
								public handleMessage(param0: globalAndroid.os.Message): void;
								public constructor();
								public constructor(param0: globalAndroid.os.Looper);
							}
							export abstract class zzc<TListener>  extends java.lang.Object {
								public static class: java.lang.Class<com.google.android.gms.common.internal.BaseGmsClient.zzc<any>>;
								public removeListener(): void;
								public constructor(param0: TListener);
								public unregister(): void;
							}
							export class zzd extends com.google.android.gms.common.internal.IGmsCallbacks.zza {
								public static class: java.lang.Class<com.google.android.gms.common.internal.BaseGmsClient.zzd>;
								public constructor(param0: com.google.android.gms.common.internal.BaseGmsClient<any>, param1: number);
								public onPostInitComplete(param0: number, param1: globalAndroid.os.IBinder, param2: globalAndroid.os.Bundle): void;
								public constructor();
								public constructor(param0: string);
							}
							export class zze {
								public static class: java.lang.Class<com.google.android.gms.common.internal.BaseGmsClient.zze>;
								public onServiceDisconnected(param0: globalAndroid.content.ComponentName): void;
								public constructor(param0: com.google.android.gms.common.internal.BaseGmsClient<any>, param1: number);
								public onServiceConnected(param0: globalAndroid.content.ComponentName, param1: globalAndroid.os.IBinder): void;
							}
							export class zzf extends java.lang.Object /* com.google.android.gms.common.internal.BaseGmsClient.zza*/ {
								public static class: java.lang.Class<com.google.android.gms.common.internal.BaseGmsClient.zzf>;
								public constructor(param0: any);
								public constructor(param0: com.google.android.gms.common.internal.BaseGmsClient<any>, param1: number, param2: globalAndroid.os.IBinder, param3: globalAndroid.os.Bundle);
								public constructor(param0: com.google.android.gms.common.internal.BaseGmsClient<any>, param1: number, param2: globalAndroid.os.Bundle);
							}
							export class zzg extends java.lang.Object /* com.google.android.gms.common.internal.BaseGmsClient.zza*/ {
								public static class: java.lang.Class<com.google.android.gms.common.internal.BaseGmsClient.zzg>;
								public constructor(param0: any);
								public constructor(param0: com.google.android.gms.common.internal.BaseGmsClient<any>, param1: number, param2: globalAndroid.os.Bundle);
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module internal {
						export class BinderWrapper {
							public static class: java.lang.Class<com.google.android.gms.common.internal.BinderWrapper>;
							public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.gms.common.internal.BinderWrapper>;
							public constructor();
							public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
							public describeContents(): number;
							public constructor(param0: globalAndroid.os.IBinder);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module internal {
						export class ClientIdentity extends com.google.android.gms.common.internal.safeparcel.AbstractSafeParcelable {
							public static class: java.lang.Class<com.google.android.gms.common.internal.ClientIdentity>;
							public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.gms.common.internal.ClientIdentity>;
							public constructor();
							public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
							public hashCode(): number;
							public toString(): string;
							public equals(param0: any): boolean;
							public constructor(param0: number, param1: string);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module internal {
						export class ClientSettings {
							public static class: java.lang.Class<com.google.android.gms.common.internal.ClientSettings>;
							public static KEY_CLIENT_SESSION_ID: string;
							public getClientSessionId(): java.lang.Integer;
							public getGravityForPopups(): number;
							public getRealClientPackageName(): string;
							public setClientSessionId(param0: java.lang.Integer): void;
							public static createDefault(param0: globalAndroid.content.Context): com.google.android.gms.common.internal.ClientSettings;
							public getViewForPopups(): globalAndroid.view.View;
							public getOptionalApiSettings(): java.util.Map<com.google.android.gms.common.api.Api<any>,com.google.android.gms.common.internal.ClientSettings.OptionalApiSettings>;
							public getRequiredScopes(): java.util.Set<com.google.android.gms.common.api.Scope>;
							public getRealClientClassName(): string;
							public getAccountOrDefault(): globalAndroid.accounts.Account;
							public getApplicableScopes(param0: com.google.android.gms.common.api.Api<any>): java.util.Set<com.google.android.gms.common.api.Scope>;
							/** @deprecated */
							public getAccountName(): string;
							public getAccount(): globalAndroid.accounts.Account;
							public getAllRequestedScopes(): java.util.Set<com.google.android.gms.common.api.Scope>;
							public getSignInOptions(): com.google.android.gms.signin.SignInOptions;
							public constructor(param0: globalAndroid.accounts.Account, param1: java.util.Set<com.google.android.gms.common.api.Scope>, param2: java.util.Map<com.google.android.gms.common.api.Api<any>,com.google.android.gms.common.internal.ClientSettings.OptionalApiSettings>, param3: number, param4: globalAndroid.view.View, param5: string, param6: string, param7: com.google.android.gms.signin.SignInOptions);
						}
						export module ClientSettings {
							export class Builder {
								public static class: java.lang.Class<com.google.android.gms.common.internal.ClientSettings.Builder>;
								public setGravityForPopups(param0: number): com.google.android.gms.common.internal.ClientSettings.Builder;
								public setRealClientClassName(param0: string): com.google.android.gms.common.internal.ClientSettings.Builder;
								public setAccount(param0: globalAndroid.accounts.Account): com.google.android.gms.common.internal.ClientSettings.Builder;
								public setSignInOptions(param0: com.google.android.gms.signin.SignInOptions): com.google.android.gms.common.internal.ClientSettings.Builder;
								public build(): com.google.android.gms.common.internal.ClientSettings;
								public setViewForPopups(param0: globalAndroid.view.View): com.google.android.gms.common.internal.ClientSettings.Builder;
								public addAllRequiredScopes(param0: java.util.Collection<com.google.android.gms.common.api.Scope>): com.google.android.gms.common.internal.ClientSettings.Builder;
								public setOptionalApiSettingsMap(param0: java.util.Map<com.google.android.gms.common.api.Api<any>,com.google.android.gms.common.internal.ClientSettings.OptionalApiSettings>): com.google.android.gms.common.internal.ClientSettings.Builder;
								public addRequiredScope(param0: com.google.android.gms.common.api.Scope): com.google.android.gms.common.internal.ClientSettings.Builder;
								public constructor();
								public setRealClientPackageName(param0: string): com.google.android.gms.common.internal.ClientSettings.Builder;
							}
							export class OptionalApiSettings {
								public static class: java.lang.Class<com.google.android.gms.common.internal.ClientSettings.OptionalApiSettings>;
								public mScopes: java.util.Set<com.google.android.gms.common.api.Scope>;
								public constructor(param0: java.util.Set<com.google.android.gms.common.api.Scope>);
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module internal {
						export class ConnectionErrorMessages {
							public static class: java.lang.Class<com.google.android.gms.common.internal.ConnectionErrorMessages>;
							public static getErrorMessage(param0: globalAndroid.content.Context, param1: number): string;
							public static getAppName(param0: globalAndroid.content.Context): string;
							public static getErrorTitle(param0: globalAndroid.content.Context, param1: number): string;
							public static getDefaultNotificationChannelName(param0: globalAndroid.content.Context): string;
							public static getErrorDialogButtonMessage(param0: globalAndroid.content.Context, param1: number): string;
							public static getErrorNotificationMessage(param0: globalAndroid.content.Context, param1: number): string;
							public static getErrorNotificationTitle(param0: globalAndroid.content.Context, param1: number): string;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module internal {
						export class Constants {
							public static class: java.lang.Class<com.google.android.gms.common.internal.Constants>;
							public static KEY_GMS_ERROR_CODE: string;
							public static KEY_NETWORK_TO_USE: string;
							public static ACTION_LOAD_IMAGE: string;
							public static EXTRA_URI: string;
							public static EXTRA_RESULT_RECEIVER: string;
							public static EXTRA_PRIORITY: string;
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module internal {
						export abstract class DialogRedirect {
							public static class: java.lang.Class<com.google.android.gms.common.internal.DialogRedirect>;
							public constructor();
							public static getInstance(param0: globalAndroid.support.v4.app.Fragment, param1: globalAndroid.content.Intent, param2: number): com.google.android.gms.common.internal.DialogRedirect;
							public redirect(): void;
							public static getInstance(param0: globalAndroid.app.Activity, param1: globalAndroid.content.Intent, param2: number): com.google.android.gms.common.internal.DialogRedirect;
							public static getInstance(param0: com.google.android.gms.common.api.internal.LifecycleFragment, param1: globalAndroid.content.Intent, param2: number): com.google.android.gms.common.internal.DialogRedirect;
							public onClick(param0: globalAndroid.content.DialogInterface, param1: number): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module internal {
						export abstract class DowngradeableSafeParcel extends com.google.android.gms.common.internal.safeparcel.AbstractSafeParcelable implements com.google.android.gms.common.internal.ReflectedParcelable {
							public static class: java.lang.Class<com.google.android.gms.common.internal.DowngradeableSafeParcel>;
							public constructor();
							public static canUnparcelSafely(param0: string): boolean;
							public setShouldDowngrade(param0: boolean): void;
							public prepareForClientVersion(param0: number): boolean;
							public static getUnparcelClientVersion(): java.lang.Integer;
							public shouldDowngrade(): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module internal {
						export abstract class FallbackServiceBroker extends com.google.android.gms.common.internal.IGmsServiceBroker.Stub {
							public static class: java.lang.Class<com.google.android.gms.common.internal.FallbackServiceBroker>;
							public constructor();
							public getService(param0: com.google.android.gms.common.internal.IGmsCallbacks, param1: com.google.android.gms.common.internal.GetServiceRequest): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module internal {
						export class GetServiceRequest extends com.google.android.gms.common.internal.safeparcel.AbstractSafeParcelable {
							public static class: java.lang.Class<com.google.android.gms.common.internal.GetServiceRequest>;
							public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.gms.common.internal.GetServiceRequest>;
							public constructor();
							public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
							public getExtraArgs(): globalAndroid.os.Bundle;
							public constructor(param0: number);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module internal {
						export abstract class GmsClient<T>  extends com.google.android.gms.common.internal.BaseGmsClient<any> {
							public static class: java.lang.Class<com.google.android.gms.common.internal.GmsClient<any>>;
							public requiresGooglePlayServices(): boolean;
							public getServiceBrokerBinder(): globalAndroid.os.IBinder;
							public dump(param0: string, param1: java.io.FileDescriptor, param2: java.io.PrintWriter, param3: native.Array<string>): void;
							public validateScopes(param0: java.util.Set<com.google.android.gms.common.api.Scope>): java.util.Set<com.google.android.gms.common.api.Scope>;
							public getAvailableFeatures(): native.Array<com.google.android.gms.common.Feature>;
							public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.os.Looper, param2: com.google.android.gms.common.internal.GmsClientSupervisor, param3: com.google.android.gms.common.GoogleApiAvailabilityLight, param4: number, param5: com.google.android.gms.common.internal.BaseGmsClient.BaseConnectionCallbacks, param6: com.google.android.gms.common.internal.BaseGmsClient.BaseOnConnectionFailedListener, param7: string);
							public getAccount(): globalAndroid.accounts.Account;
							public getClientSettings(): com.google.android.gms.common.internal.ClientSettings;
							public getEndpointPackageName(): string;
							public getSignInIntent(): globalAndroid.content.Intent;
							public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.os.Looper, param2: number, param3: com.google.android.gms.common.internal.ClientSettings);
							public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.os.Handler, param2: number, param3: com.google.android.gms.common.internal.ClientSettings);
							public getConnectionHint(): globalAndroid.os.Bundle;
							public requiresAccount(): boolean;
							public getScopes(): java.util.Set<com.google.android.gms.common.api.Scope>;
							public disconnect(): void;
							public isConnected(): boolean;
							public providesSignIn(): boolean;
							public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.os.Looper, param2: number, param3: com.google.android.gms.common.internal.BaseGmsClient.BaseConnectionCallbacks, param4: com.google.android.gms.common.internal.BaseGmsClient.BaseOnConnectionFailedListener, param5: string);
							public isConnecting(): boolean;
							public getMinApkVersion(): number;
							public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.os.Looper, param2: number, param3: com.google.android.gms.common.internal.ClientSettings, param4: com.google.android.gms.common.api.GoogleApiClient.ConnectionCallbacks, param5: com.google.android.gms.common.api.GoogleApiClient.OnConnectionFailedListener);
							public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.os.Looper, param2: com.google.android.gms.common.internal.GmsClientSupervisor, param3: com.google.android.gms.common.GoogleApiAvailability, param4: number, param5: com.google.android.gms.common.internal.ClientSettings, param6: com.google.android.gms.common.api.GoogleApiClient.ConnectionCallbacks, param7: com.google.android.gms.common.api.GoogleApiClient.OnConnectionFailedListener);
							public connect(param0: com.google.android.gms.common.internal.BaseGmsClient.ConnectionProgressReportCallbacks): void;
							public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.os.Handler, param2: com.google.android.gms.common.internal.GmsClientSupervisor, param3: com.google.android.gms.common.GoogleApiAvailability, param4: number, param5: com.google.android.gms.common.internal.ClientSettings, param6: com.google.android.gms.common.api.GoogleApiClient.ConnectionCallbacks, param7: com.google.android.gms.common.api.GoogleApiClient.OnConnectionFailedListener);
							public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.os.Handler, param2: com.google.android.gms.common.internal.GmsClientSupervisor, param3: com.google.android.gms.common.GoogleApiAvailabilityLight, param4: number, param5: com.google.android.gms.common.internal.BaseGmsClient.BaseConnectionCallbacks, param6: com.google.android.gms.common.internal.BaseGmsClient.BaseOnConnectionFailedListener);
							public getRequiredFeatures(): native.Array<com.google.android.gms.common.Feature>;
							public onUserSignOut(param0: com.google.android.gms.common.internal.BaseGmsClient.SignOutCallbacks): void;
							public getRemoteService(param0: com.google.android.gms.common.internal.IAccountAccessor, param1: java.util.Set<com.google.android.gms.common.api.Scope>): void;
							public requiresSignIn(): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module internal {
						export class GmsClientEventManager {
							public static class: java.lang.Class<com.google.android.gms.common.internal.GmsClientEventManager>;
							public isConnectionCallbacksRegistered(param0: com.google.android.gms.common.api.GoogleApiClient.ConnectionCallbacks): boolean;
							public isConnectionFailedListenerRegistered(param0: com.google.android.gms.common.api.GoogleApiClient.OnConnectionFailedListener): boolean;
							public onUnintentionalDisconnection(param0: number): void;
							public registerConnectionFailedListener(param0: com.google.android.gms.common.api.GoogleApiClient.OnConnectionFailedListener): void;
							public unregisterConnectionCallbacks(param0: com.google.android.gms.common.api.GoogleApiClient.ConnectionCallbacks): void;
							public disableCallbacks(): void;
							public registerConnectionCallbacks(param0: com.google.android.gms.common.api.GoogleApiClient.ConnectionCallbacks): void;
							public unregisterConnectionFailedListener(param0: com.google.android.gms.common.api.GoogleApiClient.OnConnectionFailedListener): void;
							public onConnectionSuccess(): void;
							public onConnectionFailure(param0: com.google.android.gms.common.ConnectionResult): void;
							public handleMessage(param0: globalAndroid.os.Message): boolean;
							public constructor(param0: globalAndroid.os.Looper, param1: com.google.android.gms.common.internal.GmsClientEventManager.GmsClientEventState);
							public onConnectionSuccess(param0: globalAndroid.os.Bundle): void;
							public enableCallbacks(): void;
							public areCallbacksEnabled(): boolean;
						}
						export module GmsClientEventManager {
							export class GmsClientEventState {
								public static class: java.lang.Class<com.google.android.gms.common.internal.GmsClientEventManager.GmsClientEventState>;
								/**
								 * Constructs a new instance of the com.google.android.gms.common.internal.GmsClientEventManager$GmsClientEventState interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									isConnected(): boolean;
									getConnectionHint(): globalAndroid.os.Bundle;
								});
								public constructor();
								public getConnectionHint(): globalAndroid.os.Bundle;
								public isConnected(): boolean;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module internal {
						export abstract class GmsClientSupervisor {
							public static class: java.lang.Class<com.google.android.gms.common.internal.GmsClientSupervisor>;
							public constructor();
							public bindService(param0: string, param1: globalAndroid.content.ServiceConnection, param2: string): boolean;
							public unbindService(param0: globalAndroid.content.ComponentName, param1: globalAndroid.content.ServiceConnection, param2: string): void;
							public unbindService(param0: string, param1: globalAndroid.content.ServiceConnection, param2: string): void;
							public bindService(param0: globalAndroid.content.ComponentName, param1: globalAndroid.content.ServiceConnection, param2: string): boolean;
							public static getInstance(param0: globalAndroid.content.Context): com.google.android.gms.common.internal.GmsClientSupervisor;
						}
						export module GmsClientSupervisor {
							export class zza {
								public static class: java.lang.Class<com.google.android.gms.common.internal.GmsClientSupervisor.zza>;
								public toString(): string;
								public constructor(param0: globalAndroid.content.ComponentName, param1: number);
								public getComponentName(): globalAndroid.content.ComponentName;
								public constructor(param0: string, param1: string, param2: number);
								public equals(param0: any): boolean;
								public getPackage(): string;
								public hashCode(): number;
								public constructor(param0: string, param1: number);
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module internal {
						export class GmsLogger {
							public static class: java.lang.Class<com.google.android.gms.common.internal.GmsLogger>;
							public d(param0: string, param1: string, param2: java.lang.Throwable): void;
							public efmt(param0: string, param1: string, param2: native.Array<any>): void;
							public w(param0: string, param1: string): void;
							public v(param0: string, param1: string): void;
							public w(param0: string, param1: string, param2: java.lang.Throwable): void;
							public constructor(param0: string, param1: string);
							public canLog(param0: number): boolean;
							public i(param0: string, param1: string, param2: java.lang.Throwable): void;
							public wtf(param0: string, param1: string, param2: java.lang.Throwable): void;
							public i(param0: string, param1: string): void;
							public pii(param0: string, param1: string): void;
							public v(param0: string, param1: string, param2: java.lang.Throwable): void;
							public constructor(param0: string);
							public wfmt(param0: string, param1: string, param2: native.Array<any>): void;
							public e(param0: string, param1: string, param2: java.lang.Throwable): void;
							public pii(param0: string, param1: string, param2: java.lang.Throwable): void;
							public d(param0: string, param1: string): void;
							public canLogPii(): boolean;
							public e(param0: string, param1: string): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module internal {
						export class GoogleApiAvailabilityCache {
							public static class: java.lang.Class<com.google.android.gms.common.internal.GoogleApiAvailabilityCache>;
							public constructor();
							public getClientAvailability(param0: globalAndroid.content.Context, param1: com.google.android.gms.common.api.Api.Client): number;
							public constructor(param0: com.google.android.gms.common.GoogleApiAvailabilityLight);
							public flush(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module internal {
						export class HideFirstParty {
							public static class: java.lang.Class<com.google.android.gms.common.internal.HideFirstParty>;
							/**
							 * Constructs a new instance of the com.google.android.gms.common.internal.HideFirstParty interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
							});
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module internal {
						export class IAccountAccessor {
							public static class: java.lang.Class<com.google.android.gms.common.internal.IAccountAccessor>;
							/**
							 * Constructs a new instance of the com.google.android.gms.common.internal.IAccountAccessor interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								getAccount(): globalAndroid.accounts.Account;
							});
							public constructor();
							public getAccount(): globalAndroid.accounts.Account;
						}
						export module IAccountAccessor {
							export abstract class Stub extends com.google.android.gms.internal.common.zzb implements com.google.android.gms.common.internal.IAccountAccessor {
								public static class: java.lang.Class<com.google.android.gms.common.internal.IAccountAccessor.Stub>;
								public getAccount(): globalAndroid.accounts.Account;
								public static asInterface(param0: globalAndroid.os.IBinder): com.google.android.gms.common.internal.IAccountAccessor;
								public constructor();
								public constructor(param0: string);
							}
							export module Stub {
								export class zza extends com.google.android.gms.internal.common.zza implements com.google.android.gms.common.internal.IAccountAccessor {
									public static class: java.lang.Class<com.google.android.gms.common.internal.IAccountAccessor.Stub.zza>;
									public getAccount(): globalAndroid.accounts.Account;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module internal {
						export class ICancelToken {
							public static class: java.lang.Class<com.google.android.gms.common.internal.ICancelToken>;
							/**
							 * Constructs a new instance of the com.google.android.gms.common.internal.ICancelToken interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								cancel(): void;
							});
							public constructor();
							public cancel(): void;
						}
						export module ICancelToken {
							export abstract class Stub extends com.google.android.gms.internal.common.zzb implements com.google.android.gms.common.internal.ICancelToken {
								public static class: java.lang.Class<com.google.android.gms.common.internal.ICancelToken.Stub>;
								public static asInterface(param0: globalAndroid.os.IBinder): com.google.android.gms.common.internal.ICancelToken;
								public cancel(): void;
								public constructor();
								public constructor(param0: string);
							}
							export module Stub {
								export class zza extends com.google.android.gms.internal.common.zza implements com.google.android.gms.common.internal.ICancelToken {
									public static class: java.lang.Class<com.google.android.gms.common.internal.ICancelToken.Stub.zza>;
									public cancel(): void;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module internal {
						export class IGmsCallbacks {
							public static class: java.lang.Class<com.google.android.gms.common.internal.IGmsCallbacks>;
							/**
							 * Constructs a new instance of the com.google.android.gms.common.internal.IGmsCallbacks interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								onPostInitComplete(param0: number, param1: globalAndroid.os.IBinder, param2: globalAndroid.os.Bundle): void;
								zza(param0: number, param1: globalAndroid.os.Bundle): void;
								zza(param0: number, param1: globalAndroid.os.IBinder, param2: any /* com.google.android.gms.common.internal.zzb*/): void;
							});
							public constructor();
							public onPostInitComplete(param0: number, param1: globalAndroid.os.IBinder, param2: globalAndroid.os.Bundle): void;
						}
						export module IGmsCallbacks {
							export abstract class zza extends com.google.android.gms.internal.common.zzb implements com.google.android.gms.common.internal.IGmsCallbacks {
								public static class: java.lang.Class<com.google.android.gms.common.internal.IGmsCallbacks.zza>;
								public onPostInitComplete(param0: number, param1: globalAndroid.os.IBinder, param2: globalAndroid.os.Bundle): void;
								public constructor();
								public constructor(param0: string);
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module internal {
						export class IGmsServiceBroker {
							public static class: java.lang.Class<com.google.android.gms.common.internal.IGmsServiceBroker>;
							/**
							 * Constructs a new instance of the com.google.android.gms.common.internal.IGmsServiceBroker interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								getService(param0: com.google.android.gms.common.internal.IGmsCallbacks, param1: com.google.android.gms.common.internal.GetServiceRequest): void;
							});
							public constructor();
							public getService(param0: com.google.android.gms.common.internal.IGmsCallbacks, param1: com.google.android.gms.common.internal.GetServiceRequest): void;
						}
						export module IGmsServiceBroker {
							export abstract class Stub implements com.google.android.gms.common.internal.IGmsServiceBroker {
								public static class: java.lang.Class<com.google.android.gms.common.internal.IGmsServiceBroker.Stub>;
								public constructor();
								public getService(param0: com.google.android.gms.common.internal.IGmsCallbacks, param1: com.google.android.gms.common.internal.GetServiceRequest): void;
								public asBinder(): globalAndroid.os.IBinder;
								public onTransact(param0: number, param1: globalAndroid.os.Parcel, param2: globalAndroid.os.Parcel, param3: number): boolean;
							}
							export module Stub {
								export class zza extends com.google.android.gms.common.internal.IGmsServiceBroker {
									public static class: java.lang.Class<com.google.android.gms.common.internal.IGmsServiceBroker.Stub.zza>;
									public asBinder(): globalAndroid.os.IBinder;
									public getService(param0: com.google.android.gms.common.internal.IGmsCallbacks, param1: com.google.android.gms.common.internal.GetServiceRequest): void;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module internal {
						export class IResolveAccountCallbacks {
							public static class: java.lang.Class<com.google.android.gms.common.internal.IResolveAccountCallbacks>;
							/**
							 * Constructs a new instance of the com.google.android.gms.common.internal.IResolveAccountCallbacks interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								onAccountResolutionComplete(param0: com.google.android.gms.common.internal.ResolveAccountResponse): void;
							});
							public constructor();
							public onAccountResolutionComplete(param0: com.google.android.gms.common.internal.ResolveAccountResponse): void;
						}
						export module IResolveAccountCallbacks {
							export abstract class Stub extends com.google.android.gms.internal.base.zab implements com.google.android.gms.common.internal.IResolveAccountCallbacks {
								public static class: java.lang.Class<com.google.android.gms.common.internal.IResolveAccountCallbacks.Stub>;
								public static asInterface(param0: globalAndroid.os.IBinder): com.google.android.gms.common.internal.IResolveAccountCallbacks;
								public onAccountResolutionComplete(param0: com.google.android.gms.common.internal.ResolveAccountResponse): void;
								public dispatchTransaction(param0: number, param1: globalAndroid.os.Parcel, param2: globalAndroid.os.Parcel, param3: number): boolean;
								public constructor();
								public constructor(param0: string);
							}
							export module Stub {
								export class Proxy extends com.google.android.gms.internal.base.zaa implements com.google.android.gms.common.internal.IResolveAccountCallbacks {
									public static class: java.lang.Class<com.google.android.gms.common.internal.IResolveAccountCallbacks.Stub.Proxy>;
									public onAccountResolutionComplete(param0: com.google.android.gms.common.internal.ResolveAccountResponse): void;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module internal {
						export class ISignInButtonCreator {
							public static class: java.lang.Class<com.google.android.gms.common.internal.ISignInButtonCreator>;
							/**
							 * Constructs a new instance of the com.google.android.gms.common.internal.ISignInButtonCreator interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								newSignInButton(param0: com.google.android.gms.dynamic.IObjectWrapper, param1: number, param2: number): com.google.android.gms.dynamic.IObjectWrapper;
								newSignInButtonFromConfig(param0: com.google.android.gms.dynamic.IObjectWrapper, param1: com.google.android.gms.common.internal.SignInButtonConfig): com.google.android.gms.dynamic.IObjectWrapper;
							});
							public constructor();
							public newSignInButtonFromConfig(param0: com.google.android.gms.dynamic.IObjectWrapper, param1: com.google.android.gms.common.internal.SignInButtonConfig): com.google.android.gms.dynamic.IObjectWrapper;
							public newSignInButton(param0: com.google.android.gms.dynamic.IObjectWrapper, param1: number, param2: number): com.google.android.gms.dynamic.IObjectWrapper;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module internal {
						export class ImagesContract {
							public static class: java.lang.Class<com.google.android.gms.common.internal.ImagesContract>;
							public static URL: string;
							public static LOCAL: string;
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module internal {
						export abstract class LegacyInternalGmsClient<T>  extends com.google.android.gms.common.internal.GmsClient<any> {
							public static class: java.lang.Class<com.google.android.gms.common.internal.LegacyInternalGmsClient<any>>;
							public onConnectedLocked(param0: any): void;
							public isConnectionFailedListenerRegistered(param0: com.google.android.gms.common.api.GoogleApiClient.OnConnectionFailedListener): boolean;
							public registerConnectionFailedListener(param0: com.google.android.gms.common.api.GoogleApiClient.OnConnectionFailedListener): void;
							public unregisterConnectionCallbacks(param0: com.google.android.gms.common.api.GoogleApiClient.ConnectionCallbacks): void;
							public registerConnectionCallbacks(param0: com.google.android.gms.common.api.GoogleApiClient.ConnectionCallbacks): void;
							public requiresGooglePlayServices(): boolean;
							public getServiceBrokerBinder(): globalAndroid.os.IBinder;
							public onConnectionSuspended(param0: number): void;
							public dump(param0: string, param1: java.io.FileDescriptor, param2: java.io.PrintWriter, param3: native.Array<string>): void;
							public getAvailableFeatures(): native.Array<com.google.android.gms.common.Feature>;
							public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.os.Looper, param2: com.google.android.gms.common.internal.GmsClientSupervisor, param3: com.google.android.gms.common.GoogleApiAvailabilityLight, param4: number, param5: com.google.android.gms.common.internal.BaseGmsClient.BaseConnectionCallbacks, param6: com.google.android.gms.common.internal.BaseGmsClient.BaseOnConnectionFailedListener, param7: string);
							public getEndpointPackageName(): string;
							public getSignInIntent(): globalAndroid.content.Intent;
							public onConnectionFailed(param0: com.google.android.gms.common.ConnectionResult): void;
							public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.os.Looper, param2: number, param3: com.google.android.gms.common.internal.ClientSettings);
							public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.os.Handler, param2: number, param3: com.google.android.gms.common.internal.ClientSettings);
							public getConnectionHint(): globalAndroid.os.Bundle;
							public isConnectionCallbacksRegistered(param0: com.google.android.gms.common.api.GoogleApiClient.ConnectionCallbacks): boolean;
							public requiresAccount(): boolean;
							public checkAvailabilityAndConnect(): void;
							public disconnect(): void;
							public constructor(param0: globalAndroid.content.Context, param1: number, param2: com.google.android.gms.common.internal.ClientSettings, param3: com.google.android.gms.common.api.GoogleApiClient.ConnectionCallbacks, param4: com.google.android.gms.common.api.GoogleApiClient.OnConnectionFailedListener);
							public isConnected(): boolean;
							public providesSignIn(): boolean;
							public unregisterConnectionFailedListener(param0: com.google.android.gms.common.api.GoogleApiClient.OnConnectionFailedListener): void;
							public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.os.Looper, param2: number, param3: com.google.android.gms.common.internal.BaseGmsClient.BaseConnectionCallbacks, param4: com.google.android.gms.common.internal.BaseGmsClient.BaseOnConnectionFailedListener, param5: string);
							public isConnecting(): boolean;
							public getMinApkVersion(): number;
							public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.os.Looper, param2: number, param3: com.google.android.gms.common.internal.ClientSettings, param4: com.google.android.gms.common.api.GoogleApiClient.ConnectionCallbacks, param5: com.google.android.gms.common.api.GoogleApiClient.OnConnectionFailedListener);
							public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.os.Looper, param2: com.google.android.gms.common.internal.GmsClientSupervisor, param3: com.google.android.gms.common.GoogleApiAvailability, param4: number, param5: com.google.android.gms.common.internal.ClientSettings, param6: com.google.android.gms.common.api.GoogleApiClient.ConnectionCallbacks, param7: com.google.android.gms.common.api.GoogleApiClient.OnConnectionFailedListener);
							public connect(param0: com.google.android.gms.common.internal.BaseGmsClient.ConnectionProgressReportCallbacks): void;
							public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.os.Handler, param2: com.google.android.gms.common.internal.GmsClientSupervisor, param3: com.google.android.gms.common.GoogleApiAvailability, param4: number, param5: com.google.android.gms.common.internal.ClientSettings, param6: com.google.android.gms.common.api.GoogleApiClient.ConnectionCallbacks, param7: com.google.android.gms.common.api.GoogleApiClient.OnConnectionFailedListener);
							public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.os.Handler, param2: com.google.android.gms.common.internal.GmsClientSupervisor, param3: com.google.android.gms.common.GoogleApiAvailabilityLight, param4: number, param5: com.google.android.gms.common.internal.BaseGmsClient.BaseConnectionCallbacks, param6: com.google.android.gms.common.internal.BaseGmsClient.BaseOnConnectionFailedListener);
							public onUserSignOut(param0: com.google.android.gms.common.internal.BaseGmsClient.SignOutCallbacks): void;
							public getRequiredFeatures(): native.Array<com.google.android.gms.common.Feature>;
							public getRemoteService(param0: com.google.android.gms.common.internal.IAccountAccessor, param1: java.util.Set<com.google.android.gms.common.api.Scope>): void;
							public requiresSignIn(): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module internal {
						export class LibraryVersion {
							public static class: java.lang.Class<com.google.android.gms.common.internal.LibraryVersion>;
							public constructor();
							public static getInstance(): com.google.android.gms.common.internal.LibraryVersion;
							public getVersion(param0: string): string;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module internal {
						export class Objects {
							public static class: java.lang.Class<com.google.android.gms.common.internal.Objects>;
							public static toStringHelper(param0: any): com.google.android.gms.common.internal.Objects.ToStringHelper;
							public static hashCode(param0: native.Array<any>): number;
							public static equal(param0: any, param1: any): boolean;
						}
						export module Objects {
							export class ToStringHelper {
								public static class: java.lang.Class<com.google.android.gms.common.internal.Objects.ToStringHelper>;
								public toString(): string;
								public add(param0: string, param1: any): com.google.android.gms.common.internal.Objects.ToStringHelper;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module internal {
						export class PendingResultUtil {
							public static class: java.lang.Class<com.google.android.gms.common.internal.PendingResultUtil>;
							public constructor();
							public static toVoidTask(param0: com.google.android.gms.common.api.PendingResult<any>): com.google.android.gms.tasks.Task<any>;
							public static toTask(param0: com.google.android.gms.common.api.PendingResult<any>, param1: com.google.android.gms.common.internal.PendingResultUtil.ResultConverter<any,any>): com.google.android.gms.tasks.Task<any>;
							public static toResponseTask(param0: com.google.android.gms.common.api.PendingResult<any>, param1: com.google.android.gms.common.api.Response<any>): com.google.android.gms.tasks.Task<any>;
						}
						export module PendingResultUtil {
							export class ResultConverter<R, T>  extends java.lang.Object {
								public static class: java.lang.Class<com.google.android.gms.common.internal.PendingResultUtil.ResultConverter<any,any>>;
								/**
								 * Constructs a new instance of the com.google.android.gms.common.internal.PendingResultUtil$ResultConverter interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									convert(param0: R): T;
								});
								public constructor();
								public convert(param0: R): T;
							}
							export class zaa {
								public static class: java.lang.Class<com.google.android.gms.common.internal.PendingResultUtil.zaa>;
								/**
								 * Constructs a new instance of the com.google.android.gms.common.internal.PendingResultUtil$zaa interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									zaf(param0: com.google.android.gms.common.api.Status): com.google.android.gms.common.api.ApiException;
								});
								public constructor();
								public zaf(param0: com.google.android.gms.common.api.Status): com.google.android.gms.common.api.ApiException;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module internal {
						export class Preconditions {
							public static class: java.lang.Class<com.google.android.gms.common.internal.Preconditions>;
							public static checkArgument(param0: boolean): void;
							public static checkNotMainThread(param0: string): void;
							public static checkHandlerThread(param0: globalAndroid.os.Handler): void;
							public static checkNotZero(param0: number): number;
							public static checkState(param0: boolean, param1: string, param2: native.Array<any>): void;
							public static checkNotEmpty(param0: string): string;
							public static checkNotNull(param0: any): any;
							public static checkState(param0: boolean): void;
							public static checkState(param0: boolean, param1: any): void;
							public static checkNotEmpty(param0: string, param1: any): string;
							public static checkNotZero(param0: number, param1: any): number;
							public static checkMainThread(param0: string): void;
							public static checkNotMainThread(): void;
							public static checkNotNull(param0: any, param1: any): any;
							public static checkArgument(param0: boolean, param1: any): void;
							public static checkArgument(param0: boolean, param1: string, param2: native.Array<any>): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module internal {
						export class ReflectedParcelable {
							public static class: java.lang.Class<com.google.android.gms.common.internal.ReflectedParcelable>;
							/**
							 * Constructs a new instance of the com.google.android.gms.common.internal.ReflectedParcelable interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
							});
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module internal {
						export class ResolveAccountRequest extends com.google.android.gms.common.internal.safeparcel.AbstractSafeParcelable {
							public static class: java.lang.Class<com.google.android.gms.common.internal.ResolveAccountRequest>;
							public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.gms.common.internal.ResolveAccountRequest>;
							public constructor();
							public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
							public getAccount(): globalAndroid.accounts.Account;
							public getSessionId(): number;
							public constructor(param0: globalAndroid.accounts.Account, param1: number, param2: com.google.android.gms.auth.api.signin.GoogleSignInAccount);
							public getSignInAccountHint(): com.google.android.gms.auth.api.signin.GoogleSignInAccount;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module internal {
						export class ResolveAccountResponse extends com.google.android.gms.common.internal.safeparcel.AbstractSafeParcelable {
							public static class: java.lang.Class<com.google.android.gms.common.internal.ResolveAccountResponse>;
							public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.gms.common.internal.ResolveAccountResponse>;
							public constructor();
							public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
							public setSaveDefaultAccount(param0: boolean): com.google.android.gms.common.internal.ResolveAccountResponse;
							public getSaveDefaultAccount(): boolean;
							public setIsFromCrossClientAuth(param0: boolean): com.google.android.gms.common.internal.ResolveAccountResponse;
							public getAccountAccessor(): com.google.android.gms.common.internal.IAccountAccessor;
							public setAccountAccessor(param0: com.google.android.gms.common.internal.IAccountAccessor): com.google.android.gms.common.internal.ResolveAccountResponse;
							public isFromCrossClientAuth(): boolean;
							public equals(param0: any): boolean;
							public constructor(param0: com.google.android.gms.common.ConnectionResult);
							public constructor(param0: number);
							public getConnectionResult(): com.google.android.gms.common.ConnectionResult;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module internal {
						export class ResourceUtils {
							public static class: java.lang.Class<com.google.android.gms.common.internal.ResourceUtils>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module internal {
						export class ServiceSpecificExtraArgs {
							public static class: java.lang.Class<com.google.android.gms.common.internal.ServiceSpecificExtraArgs>;
						}
						export module ServiceSpecificExtraArgs {
							export class CastExtraArgs {
								public static class: java.lang.Class<com.google.android.gms.common.internal.ServiceSpecificExtraArgs.CastExtraArgs>;
								/**
								 * Constructs a new instance of the com.google.android.gms.common.internal.ServiceSpecificExtraArgs$CastExtraArgs interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
								});
								public constructor();
								public static LISTENER: string;
							}
							export class GamesExtraArgs {
								public static class: java.lang.Class<com.google.android.gms.common.internal.ServiceSpecificExtraArgs.GamesExtraArgs>;
								/**
								 * Constructs a new instance of the com.google.android.gms.common.internal.ServiceSpecificExtraArgs$GamesExtraArgs interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
								});
								public constructor();
								public static DESIRED_LOCALE: string;
								public static SIGNIN_OPTIONS: string;
								public static GAME_PACKAGE_NAME: string;
								public static WINDOW_TOKEN: string;
							}
							export class PlusExtraArgs {
								public static class: java.lang.Class<com.google.android.gms.common.internal.ServiceSpecificExtraArgs.PlusExtraArgs>;
								/**
								 * Constructs a new instance of the com.google.android.gms.common.internal.ServiceSpecificExtraArgs$PlusExtraArgs interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
								});
								public constructor();
								public static PLUS_AUTH_PACKAGE: string;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module internal {
						export class ShowFirstParty {
							public static class: java.lang.Class<com.google.android.gms.common.internal.ShowFirstParty>;
							/**
							 * Constructs a new instance of the com.google.android.gms.common.internal.ShowFirstParty interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
							});
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module internal {
						export class SignInButtonConfig extends com.google.android.gms.common.internal.safeparcel.AbstractSafeParcelable {
							public static class: java.lang.Class<com.google.android.gms.common.internal.SignInButtonConfig>;
							public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.gms.common.internal.SignInButtonConfig>;
							public constructor();
							public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
							public getButtonSize(): number;
							public getColorScheme(): number;
							/** @deprecated */
							public getScopes(): native.Array<com.google.android.gms.common.api.Scope>;
							public constructor(param0: number, param1: number, param2: native.Array<com.google.android.gms.common.api.Scope>);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module internal {
						export class SignInButtonCreator extends com.google.android.gms.dynamic.RemoteCreator<com.google.android.gms.common.internal.ISignInButtonCreator> {
							public static class: java.lang.Class<com.google.android.gms.common.internal.SignInButtonCreator>;
							public getRemoteCreator(param0: globalAndroid.os.IBinder): any;
							public static createView(param0: globalAndroid.content.Context, param1: number, param2: number): globalAndroid.view.View;
							public getRemoteCreator(param0: globalAndroid.os.IBinder): com.google.android.gms.common.internal.ISignInButtonCreator;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module internal {
						export class SignInButtonImpl {
							public static class: java.lang.Class<com.google.android.gms.common.internal.SignInButtonImpl>;
							public configure(param0: globalAndroid.content.res.Resources, param1: com.google.android.gms.common.internal.SignInButtonConfig): void;
							public configure(param0: globalAndroid.content.res.Resources, param1: number, param2: number): void;
							public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
							public constructor(param0: globalAndroid.content.Context);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module internal {
						export class SimpleClientAdapter<T>  extends com.google.android.gms.common.internal.GmsClient<any> {
							public static class: java.lang.Class<com.google.android.gms.common.internal.SimpleClientAdapter<any>>;
							public getStartServiceAction(): string;
							public getClient(): com.google.android.gms.common.api.Api.SimpleClient<any>;
							public requiresGooglePlayServices(): boolean;
							public getServiceBrokerBinder(): globalAndroid.os.IBinder;
							public getServiceDescriptor(): string;
							public dump(param0: string, param1: java.io.FileDescriptor, param2: java.io.PrintWriter, param3: native.Array<string>): void;
							public getAvailableFeatures(): native.Array<com.google.android.gms.common.Feature>;
							public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.os.Looper, param2: com.google.android.gms.common.internal.GmsClientSupervisor, param3: com.google.android.gms.common.GoogleApiAvailabilityLight, param4: number, param5: com.google.android.gms.common.internal.BaseGmsClient.BaseConnectionCallbacks, param6: com.google.android.gms.common.internal.BaseGmsClient.BaseOnConnectionFailedListener, param7: string);
							public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.os.Looper, param2: number, param3: com.google.android.gms.common.api.GoogleApiClient.ConnectionCallbacks, param4: com.google.android.gms.common.api.GoogleApiClient.OnConnectionFailedListener, param5: com.google.android.gms.common.internal.ClientSettings, param6: com.google.android.gms.common.api.Api.SimpleClient<any>);
							public getEndpointPackageName(): string;
							public getSignInIntent(): globalAndroid.content.Intent;
							public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.os.Looper, param2: number, param3: com.google.android.gms.common.internal.ClientSettings);
							public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.os.Handler, param2: number, param3: com.google.android.gms.common.internal.ClientSettings);
							public getConnectionHint(): globalAndroid.os.Bundle;
							public createServiceInterface(param0: globalAndroid.os.IBinder): any;
							public requiresAccount(): boolean;
							public disconnect(): void;
							public isConnected(): boolean;
							public providesSignIn(): boolean;
							public onSetConnectState(param0: number, param1: any): void;
							public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.os.Looper, param2: number, param3: com.google.android.gms.common.internal.BaseGmsClient.BaseConnectionCallbacks, param4: com.google.android.gms.common.internal.BaseGmsClient.BaseOnConnectionFailedListener, param5: string);
							public isConnecting(): boolean;
							public getMinApkVersion(): number;
							public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.os.Looper, param2: number, param3: com.google.android.gms.common.internal.ClientSettings, param4: com.google.android.gms.common.api.GoogleApiClient.ConnectionCallbacks, param5: com.google.android.gms.common.api.GoogleApiClient.OnConnectionFailedListener);
							public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.os.Looper, param2: com.google.android.gms.common.internal.GmsClientSupervisor, param3: com.google.android.gms.common.GoogleApiAvailability, param4: number, param5: com.google.android.gms.common.internal.ClientSettings, param6: com.google.android.gms.common.api.GoogleApiClient.ConnectionCallbacks, param7: com.google.android.gms.common.api.GoogleApiClient.OnConnectionFailedListener);
							public connect(param0: com.google.android.gms.common.internal.BaseGmsClient.ConnectionProgressReportCallbacks): void;
							public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.os.Handler, param2: com.google.android.gms.common.internal.GmsClientSupervisor, param3: com.google.android.gms.common.GoogleApiAvailability, param4: number, param5: com.google.android.gms.common.internal.ClientSettings, param6: com.google.android.gms.common.api.GoogleApiClient.ConnectionCallbacks, param7: com.google.android.gms.common.api.GoogleApiClient.OnConnectionFailedListener);
							public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.os.Handler, param2: com.google.android.gms.common.internal.GmsClientSupervisor, param3: com.google.android.gms.common.GoogleApiAvailabilityLight, param4: number, param5: com.google.android.gms.common.internal.BaseGmsClient.BaseConnectionCallbacks, param6: com.google.android.gms.common.internal.BaseGmsClient.BaseOnConnectionFailedListener);
							public onUserSignOut(param0: com.google.android.gms.common.internal.BaseGmsClient.SignOutCallbacks): void;
							public getRequiredFeatures(): native.Array<com.google.android.gms.common.Feature>;
							public getRemoteService(param0: com.google.android.gms.common.internal.IAccountAccessor, param1: java.util.Set<com.google.android.gms.common.api.Scope>): void;
							public requiresSignIn(): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module internal {
						export class StringResourceValueReader {
							public static class: java.lang.Class<com.google.android.gms.common.internal.StringResourceValueReader>;
							public getString(param0: string): string;
							public constructor(param0: globalAndroid.content.Context);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module internal {
						export class ViewUtils {
							public static class: java.lang.Class<com.google.android.gms.common.internal.ViewUtils>;
							public static getXmlAttributeString(param0: string, param1: string, param2: globalAndroid.content.Context, param3: globalAndroid.util.AttributeSet, param4: boolean, param5: boolean, param6: string): string;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module internal {
						export module constants {
							export class ListAppsActivityContract {
								public static class: java.lang.Class<com.google.android.gms.common.internal.constants.ListAppsActivityContract>;
								/**
								 * Constructs a new instance of the com.google.android.gms.common.internal.constants.ListAppsActivityContract interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
								});
								public constructor();
								public static EXTRA_PRESELECTED_FILTER: string;
								public static ACTION_APPS: string;
								public static PRESELECTED_FILTER_FITNESS_APPS: number;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module internal {
						export module safeparcel {
							export abstract class AbstractSafeParcelable extends com.google.android.gms.common.internal.safeparcel.SafeParcelable {
								public static class: java.lang.Class<com.google.android.gms.common.internal.safeparcel.AbstractSafeParcelable>;
								public describeContents(): number;
								public constructor();
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module internal {
						export module safeparcel {
							export class SafeParcelReader {
								public static class: java.lang.Class<com.google.android.gms.common.internal.safeparcel.SafeParcelReader>;
								public static createParcelable(param0: globalAndroid.os.Parcel, param1: number, param2: globalAndroid.os.Parcelable.Creator): globalAndroid.os.Parcelable;
								public static createBundle(param0: globalAndroid.os.Parcel, param1: number): globalAndroid.os.Bundle;
								public static createStringList(param0: globalAndroid.os.Parcel, param1: number): java.util.ArrayList<string>;
								public static createIBinderArray(param0: globalAndroid.os.Parcel, param1: number): native.Array<globalAndroid.os.IBinder>;
								public static readIntegerObject(param0: globalAndroid.os.Parcel, param1: number): java.lang.Integer;
								public static readShort(param0: globalAndroid.os.Parcel, param1: number): number;
								public static createFloatArray(param0: globalAndroid.os.Parcel, param1: number): native.Array<number>;
								public static readList(param0: globalAndroid.os.Parcel, param1: number, param2: java.util.List, param3: java.lang.ClassLoader): void;
								public static createIntegerList(param0: globalAndroid.os.Parcel, param1: number): java.util.ArrayList<java.lang.Integer>;
								public static createTypedList(param0: globalAndroid.os.Parcel, param1: number, param2: globalAndroid.os.Parcelable.Creator): java.util.ArrayList;
								public static readInt(param0: globalAndroid.os.Parcel, param1: number): number;
								public static readDoubleObject(param0: globalAndroid.os.Parcel, param1: number): java.lang.Double;
								public static createParcel(param0: globalAndroid.os.Parcel, param1: number): globalAndroid.os.Parcel;
								public static createSparseBooleanArray(param0: globalAndroid.os.Parcel, param1: number): globalAndroid.util.SparseBooleanArray;
								public static createByteArrayArray(param0: globalAndroid.os.Parcel, param1: number): native.Array<native.Array<number>>;
								public static readLong(param0: globalAndroid.os.Parcel, param1: number): number;
								public static createStringArray(param0: globalAndroid.os.Parcel, param1: number): native.Array<string>;
								public static readByte(param0: globalAndroid.os.Parcel, param1: number): number;
								public static skipUnknownField(param0: globalAndroid.os.Parcel, param1: number): void;
								public static createParcelArray(param0: globalAndroid.os.Parcel, param1: number): native.Array<globalAndroid.os.Parcel>;
								public static readBoolean(param0: globalAndroid.os.Parcel, param1: number): boolean;
								public static createTypedSparseArray(param0: globalAndroid.os.Parcel, param1: number, param2: globalAndroid.os.Parcelable.Creator): globalAndroid.util.SparseArray;
								public static createParcelList(param0: globalAndroid.os.Parcel, param1: number): java.util.ArrayList<globalAndroid.os.Parcel>;
								public static createTypedArray(param0: globalAndroid.os.Parcel, param1: number, param2: globalAndroid.os.Parcelable.Creator): native.Array<any>;
								public static createLongList(param0: globalAndroid.os.Parcel, param1: number): java.util.ArrayList<java.lang.Long>;
								public static readSize(param0: globalAndroid.os.Parcel, param1: number): number;
								public static createLongArray(param0: globalAndroid.os.Parcel, param1: number): native.Array<number>;
								public static createDoubleList(param0: globalAndroid.os.Parcel, param1: number): java.util.ArrayList<java.lang.Double>;
								public static validateObjectHeader(param0: globalAndroid.os.Parcel): number;
								public static createFloatList(param0: globalAndroid.os.Parcel, param1: number): java.util.ArrayList<java.lang.Float>;
								public static readHeader(param0: globalAndroid.os.Parcel): number;
								public static readIBinder(param0: globalAndroid.os.Parcel, param1: number): globalAndroid.os.IBinder;
								public static readFloatObject(param0: globalAndroid.os.Parcel, param1: number): java.lang.Float;
								public static createStringSparseArray(param0: globalAndroid.os.Parcel, param1: number): globalAndroid.util.SparseArray<string>;
								public static readBooleanObject(param0: globalAndroid.os.Parcel, param1: number): java.lang.Boolean;
								public static createBooleanList(param0: globalAndroid.os.Parcel, param1: number): java.util.ArrayList<java.lang.Boolean>;
								public static createBooleanArray(param0: globalAndroid.os.Parcel, param1: number): native.Array<boolean>;
								public static createDoubleSparseArray(param0: globalAndroid.os.Parcel, param1: number): globalAndroid.util.SparseArray<java.lang.Double>;
								public static createIBinderList(param0: globalAndroid.os.Parcel, param1: number): java.util.ArrayList<globalAndroid.os.IBinder>;
								public static createBigInteger(param0: globalAndroid.os.Parcel, param1: number): java.math.BigInteger;
								public static readChar(param0: globalAndroid.os.Parcel, param1: number): string;
								public static createByteArraySparseArray(param0: globalAndroid.os.Parcel, param1: number): globalAndroid.util.SparseArray<native.Array<number>>;
								public static createIntArray(param0: globalAndroid.os.Parcel, param1: number): native.Array<number>;
								public static ensureAtEnd(param0: globalAndroid.os.Parcel, param1: number): void;
								public static getFieldId(param0: number): number;
								public static readDouble(param0: globalAndroid.os.Parcel, param1: number): number;
								public static createIBinderSparseArray(param0: globalAndroid.os.Parcel, param1: number): globalAndroid.util.SparseArray<globalAndroid.os.IBinder>;
								public static createBigDecimal(param0: globalAndroid.os.Parcel, param1: number): java.math.BigDecimal;
								public static createString(param0: globalAndroid.os.Parcel, param1: number): string;
								public static createCharArray(param0: globalAndroid.os.Parcel, param1: number): native.Array<string>;
								public static readLongObject(param0: globalAndroid.os.Parcel, param1: number): java.lang.Long;
								public static createSparseIntArray(param0: globalAndroid.os.Parcel, param1: number): globalAndroid.util.SparseIntArray;
								public static createByteArray(param0: globalAndroid.os.Parcel, param1: number): native.Array<number>;
								public static createDoubleArray(param0: globalAndroid.os.Parcel, param1: number): native.Array<number>;
								public static createBigIntegerArray(param0: globalAndroid.os.Parcel, param1: number): native.Array<java.math.BigInteger>;
								public static createSparseLongArray(param0: globalAndroid.os.Parcel, param1: number): globalAndroid.util.SparseLongArray;
								public static createBigDecimalArray(param0: globalAndroid.os.Parcel, param1: number): native.Array<java.math.BigDecimal>;
								public static createParcelSparseArray(param0: globalAndroid.os.Parcel, param1: number): globalAndroid.util.SparseArray<globalAndroid.os.Parcel>;
								public static createFloatSparseArray(param0: globalAndroid.os.Parcel, param1: number): globalAndroid.util.SparseArray<java.lang.Float>;
								public static readFloat(param0: globalAndroid.os.Parcel, param1: number): number;
							}
							export module SafeParcelReader {
								export class ParseException {
									public static class: java.lang.Class<com.google.android.gms.common.internal.safeparcel.SafeParcelReader.ParseException>;
									public constructor(param0: string, param1: globalAndroid.os.Parcel);
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module internal {
						export module safeparcel {
							export class SafeParcelWriter {
								public static class: java.lang.Class<com.google.android.gms.common.internal.safeparcel.SafeParcelWriter>;
								public static writeIBinderArray(param0: globalAndroid.os.Parcel, param1: number, param2: native.Array<globalAndroid.os.IBinder>, param3: boolean): void;
								public static writeIntArray(param0: globalAndroid.os.Parcel, param1: number, param2: native.Array<number>, param3: boolean): void;
								public static writeParcelArray(param0: globalAndroid.os.Parcel, param1: number, param2: native.Array<globalAndroid.os.Parcel>, param3: boolean): void;
								public static writeStringSparseArray(param0: globalAndroid.os.Parcel, param1: number, param2: globalAndroid.util.SparseArray<string>, param3: boolean): void;
								public static writeLongArray(param0: globalAndroid.os.Parcel, param1: number, param2: native.Array<number>, param3: boolean): void;
								public static writeSparseIntArray(param0: globalAndroid.os.Parcel, param1: number, param2: globalAndroid.util.SparseIntArray, param3: boolean): void;
								public static writeDouble(param0: globalAndroid.os.Parcel, param1: number, param2: number): void;
								public static writeBooleanArray(param0: globalAndroid.os.Parcel, param1: number, param2: native.Array<boolean>, param3: boolean): void;
								public static writeBigIntegerArray(param0: globalAndroid.os.Parcel, param1: number, param2: native.Array<java.math.BigInteger>, param3: boolean): void;
								public static writeTypedArray(param0: globalAndroid.os.Parcel, param1: number, param2: native.Array<globalAndroid.os.Parcelable>, param3: number, param4: boolean): void;
								public static writeSparseBooleanArray(param0: globalAndroid.os.Parcel, param1: number, param2: globalAndroid.util.SparseBooleanArray, param3: boolean): void;
								public static writeStringArray(param0: globalAndroid.os.Parcel, param1: number, param2: native.Array<string>, param3: boolean): void;
								public static writeBooleanObject(param0: globalAndroid.os.Parcel, param1: number, param2: java.lang.Boolean, param3: boolean): void;
								public static writeParcelSparseArray(param0: globalAndroid.os.Parcel, param1: number, param2: globalAndroid.util.SparseArray<globalAndroid.os.Parcel>, param3: boolean): void;
								public static writeShort(param0: globalAndroid.os.Parcel, param1: number, param2: number): void;
								public static writeFloat(param0: globalAndroid.os.Parcel, param1: number, param2: number): void;
								public static writeBundle(param0: globalAndroid.os.Parcel, param1: number, param2: globalAndroid.os.Bundle, param3: boolean): void;
								public static writeIBinder(param0: globalAndroid.os.Parcel, param1: number, param2: globalAndroid.os.IBinder, param3: boolean): void;
								public static writeSparseLongArray(param0: globalAndroid.os.Parcel, param1: number, param2: globalAndroid.util.SparseLongArray, param3: boolean): void;
								public static writeChar(param0: globalAndroid.os.Parcel, param1: number, param2: string): void;
								public static writeString(param0: globalAndroid.os.Parcel, param1: number, param2: string, param3: boolean): void;
								public static writeParcel(param0: globalAndroid.os.Parcel, param1: number, param2: globalAndroid.os.Parcel, param3: boolean): void;
								public static writeBooleanList(param0: globalAndroid.os.Parcel, param1: number, param2: java.util.List<java.lang.Boolean>, param3: boolean): void;
								public static writeLongObject(param0: globalAndroid.os.Parcel, param1: number, param2: java.lang.Long, param3: boolean): void;
								public static writeBigDecimalArray(param0: globalAndroid.os.Parcel, param1: number, param2: native.Array<java.math.BigDecimal>, param3: boolean): void;
								public static writeFloatSparseArray(param0: globalAndroid.os.Parcel, param1: number, param2: globalAndroid.util.SparseArray<java.lang.Float>, param3: boolean): void;
								public static writeBoolean(param0: globalAndroid.os.Parcel, param1: number, param2: boolean): void;
								public static writeCharArray(param0: globalAndroid.os.Parcel, param1: number, param2: native.Array<string>, param3: boolean): void;
								public static writeDoubleArray(param0: globalAndroid.os.Parcel, param1: number, param2: native.Array<number>, param3: boolean): void;
								public static writeDoubleSparseArray(param0: globalAndroid.os.Parcel, param1: number, param2: globalAndroid.util.SparseArray<java.lang.Double>, param3: boolean): void;
								public static writeFloatList(param0: globalAndroid.os.Parcel, param1: number, param2: java.util.List<java.lang.Float>, param3: boolean): void;
								public static writeStringList(param0: globalAndroid.os.Parcel, param1: number, param2: java.util.List<string>, param3: boolean): void;
								public static writeFloatObject(param0: globalAndroid.os.Parcel, param1: number, param2: java.lang.Float, param3: boolean): void;
								public static writeParcelable(param0: globalAndroid.os.Parcel, param1: number, param2: globalAndroid.os.Parcelable, param3: number, param4: boolean): void;
								public static writeFloatArray(param0: globalAndroid.os.Parcel, param1: number, param2: native.Array<number>, param3: boolean): void;
								public static writeTypedSparseArray(param0: globalAndroid.os.Parcel, param1: number, param2: globalAndroid.util.SparseArray, param3: boolean): void;
								public static writeTypedList(param0: globalAndroid.os.Parcel, param1: number, param2: java.util.List, param3: boolean): void;
								public static finishObjectHeader(param0: globalAndroid.os.Parcel, param1: number): void;
								public static writeIntegerList(param0: globalAndroid.os.Parcel, param1: number, param2: java.util.List<java.lang.Integer>, param3: boolean): void;
								public static beginObjectHeader(param0: globalAndroid.os.Parcel): number;
								public static writeByte(param0: globalAndroid.os.Parcel, param1: number, param2: number): void;
								public static writeLong(param0: globalAndroid.os.Parcel, param1: number, param2: number): void;
								public static writeLongList(param0: globalAndroid.os.Parcel, param1: number, param2: java.util.List<java.lang.Long>, param3: boolean): void;
								public static writeIntegerObject(param0: globalAndroid.os.Parcel, param1: number, param2: java.lang.Integer, param3: boolean): void;
								public static writeList(param0: globalAndroid.os.Parcel, param1: number, param2: java.util.List, param3: boolean): void;
								public static writeDoubleList(param0: globalAndroid.os.Parcel, param1: number, param2: java.util.List<java.lang.Double>, param3: boolean): void;
								public static writeBigInteger(param0: globalAndroid.os.Parcel, param1: number, param2: java.math.BigInteger, param3: boolean): void;
								public static writeDoubleObject(param0: globalAndroid.os.Parcel, param1: number, param2: java.lang.Double, param3: boolean): void;
								public static writeIBinderList(param0: globalAndroid.os.Parcel, param1: number, param2: java.util.List<globalAndroid.os.IBinder>, param3: boolean): void;
								public static writeInt(param0: globalAndroid.os.Parcel, param1: number, param2: number): void;
								public static writeByteArray(param0: globalAndroid.os.Parcel, param1: number, param2: native.Array<number>, param3: boolean): void;
								public static writeBigDecimal(param0: globalAndroid.os.Parcel, param1: number, param2: java.math.BigDecimal, param3: boolean): void;
								public static writeIBinderSparseArray(param0: globalAndroid.os.Parcel, param1: number, param2: globalAndroid.util.SparseArray<globalAndroid.os.IBinder>, param3: boolean): void;
								public static writeByteArraySparseArray(param0: globalAndroid.os.Parcel, param1: number, param2: globalAndroid.util.SparseArray<native.Array<number>>, param3: boolean): void;
								public static writeParcelList(param0: globalAndroid.os.Parcel, param1: number, param2: java.util.List<globalAndroid.os.Parcel>, param3: boolean): void;
								public static writeByteArrayArray(param0: globalAndroid.os.Parcel, param1: number, param2: native.Array<native.Array<number>>, param3: boolean): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module internal {
						export module safeparcel {
							export class SafeParcelable {
								public static class: java.lang.Class<com.google.android.gms.common.internal.safeparcel.SafeParcelable>;
								/**
								 * Constructs a new instance of the com.google.android.gms.common.internal.safeparcel.SafeParcelable interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
								});
								public constructor();
								public static NULL: string;
							}
							export module SafeParcelable {
								export class Class {
									public static class: java.lang.Class<com.google.android.gms.common.internal.safeparcel.SafeParcelable.Class>;
									/**
									 * Constructs a new instance of the com.google.android.gms.common.internal.safeparcel.SafeParcelable$Class interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
									 */
									public constructor(implementation: {
										creator(): string;
										validate(): boolean;
									});
									public constructor();
									public creator(): string;
									public validate(): boolean;
								}
								export class Constructor {
									public static class: java.lang.Class<com.google.android.gms.common.internal.safeparcel.SafeParcelable.Constructor>;
									/**
									 * Constructs a new instance of the com.google.android.gms.common.internal.safeparcel.SafeParcelable$Constructor interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
									 */
									public constructor(implementation: {
									});
									public constructor();
								}
								export class Field {
									public static class: java.lang.Class<com.google.android.gms.common.internal.safeparcel.SafeParcelable.Field>;
									/**
									 * Constructs a new instance of the com.google.android.gms.common.internal.safeparcel.SafeParcelable$Field interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
									 */
									public constructor(implementation: {
										id(): number;
										getter(): string;
										type(): string;
										defaultValue(): string;
										defaultValueUnchecked(): string;
									});
									public constructor();
									public getter(): string;
									public defaultValueUnchecked(): string;
									public type(): string;
									public id(): number;
									public defaultValue(): string;
								}
								export class Indicator {
									public static class: java.lang.Class<com.google.android.gms.common.internal.safeparcel.SafeParcelable.Indicator>;
									/**
									 * Constructs a new instance of the com.google.android.gms.common.internal.safeparcel.SafeParcelable$Indicator interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
									 */
									public constructor(implementation: {
										getter(): string;
									});
									public constructor();
									public getter(): string;
								}
								export class Param {
									public static class: java.lang.Class<com.google.android.gms.common.internal.safeparcel.SafeParcelable.Param>;
									/**
									 * Constructs a new instance of the com.google.android.gms.common.internal.safeparcel.SafeParcelable$Param interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
									 */
									public constructor(implementation: {
										id(): number;
									});
									public constructor();
									public id(): number;
								}
								export class Reserved {
									public static class: java.lang.Class<com.google.android.gms.common.internal.safeparcel.SafeParcelable.Reserved>;
									/**
									 * Constructs a new instance of the com.google.android.gms.common.internal.safeparcel.SafeParcelable$Reserved interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
									 */
									public constructor(implementation: {
										value(): native.Array<number>;
									});
									public constructor();
									public value(): native.Array<number>;
								}
								export class VersionField {
									public static class: java.lang.Class<com.google.android.gms.common.internal.safeparcel.SafeParcelable.VersionField>;
									/**
									 * Constructs a new instance of the com.google.android.gms.common.internal.safeparcel.SafeParcelable$VersionField interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
									 */
									public constructor(implementation: {
										id(): number;
										getter(): string;
										type(): string;
									});
									public constructor();
									public getter(): string;
									public type(): string;
									public id(): number;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module internal {
						export module safeparcel {
							export class SafeParcelableSerializer {
								public static class: java.lang.Class<com.google.android.gms.common.internal.safeparcel.SafeParcelableSerializer>;
								public static serializeToString(param0: com.google.android.gms.common.internal.safeparcel.SafeParcelable): string;
								public static deserializeFromString(param0: string, param1: globalAndroid.os.Parcelable.Creator): com.google.android.gms.common.internal.safeparcel.SafeParcelable;
								public static serializeToIntentExtra(param0: com.google.android.gms.common.internal.safeparcel.SafeParcelable, param1: globalAndroid.content.Intent, param2: string): void;
								public static serializeToBytes(param0: com.google.android.gms.common.internal.safeparcel.SafeParcelable): native.Array<number>;
								public static deserializeFromIntentExtra(param0: globalAndroid.content.Intent, param1: string, param2: globalAndroid.os.Parcelable.Creator): com.google.android.gms.common.internal.safeparcel.SafeParcelable;
								public constructor();
								public static serializeIterableToIntentExtra(param0: java.lang.Iterable, param1: globalAndroid.content.Intent, param2: string): void;
								public static deserializeIterableFromIntentExtra(param0: globalAndroid.content.Intent, param1: string, param2: globalAndroid.os.Parcelable.Creator): java.util.ArrayList;
								public static serializeIterableToBundle(param0: java.lang.Iterable, param1: globalAndroid.os.Bundle, param2: string): void;
								public static deserializeFromBytes(param0: native.Array<number>, param1: globalAndroid.os.Parcelable.Creator): com.google.android.gms.common.internal.safeparcel.SafeParcelable;
								public static deserializeIterableFromBundle(param0: globalAndroid.os.Bundle, param1: string, param2: globalAndroid.os.Parcelable.Creator): java.util.ArrayList;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module internal {
						export module service {
							export class Common {
								public static class: java.lang.Class<com.google.android.gms.common.internal.service.Common>;
								public static CLIENT_KEY: com.google.android.gms.common.api.Api.ClientKey<com.google.android.gms.common.internal.service.zai>;
								public static API: com.google.android.gms.common.api.Api<com.google.android.gms.common.api.Api.ApiOptions.NoOptions>;
								public static zaph: com.google.android.gms.common.internal.service.zac;
								public constructor();
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module internal {
						export module service {
							export class zaa extends com.google.android.gms.common.internal.service.zak {
								public static class: java.lang.Class<com.google.android.gms.common.internal.service.zaa>;
								public zaj(param0: number): void;
								public constructor();
								public constructor(param0: string);
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module internal {
						export module service {
							export class zab extends com.google.android.gms.common.api.Api.AbstractClientBuilder<com.google.android.gms.common.internal.service.zai,com.google.android.gms.common.api.Api.ApiOptions.NoOptions> {
								public static class: java.lang.Class<com.google.android.gms.common.internal.service.zab>;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module internal {
						export module service {
							export class zac {
								public static class: java.lang.Class<com.google.android.gms.common.internal.service.zac>;
								/**
								 * Constructs a new instance of the com.google.android.gms.common.internal.service.zac interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									zaa(param0: com.google.android.gms.common.api.GoogleApiClient): com.google.android.gms.common.api.PendingResult<com.google.android.gms.common.api.Status>;
								});
								public constructor();
								public zaa(param0: com.google.android.gms.common.api.GoogleApiClient): com.google.android.gms.common.api.PendingResult<com.google.android.gms.common.api.Status>;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module internal {
						export module service {
							export class zad extends com.google.android.gms.common.internal.service.zac {
								public static class: java.lang.Class<com.google.android.gms.common.internal.service.zad>;
								public constructor();
								public zaa(param0: com.google.android.gms.common.api.GoogleApiClient): com.google.android.gms.common.api.PendingResult<com.google.android.gms.common.api.Status>;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module internal {
						export module service {
							export class zae extends com.google.android.gms.common.internal.service.zah {
								public static class: java.lang.Class<com.google.android.gms.common.internal.service.zae>;
								public setResult(param0: any): void;
								public setFailedResult(param0: com.google.android.gms.common.api.Status): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module internal {
						export module service {
							export class zaf extends com.google.android.gms.common.internal.service.zaa {
								public static class: java.lang.Class<com.google.android.gms.common.internal.service.zaf>;
								public constructor(param0: com.google.android.gms.common.api.internal.BaseImplementation.ResultHolder<com.google.android.gms.common.api.Status>);
								public zaj(param0: number): void;
								public constructor();
								public constructor(param0: string);
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module internal {
						export module service {
							export abstract class zag<R>  extends com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<any,com.google.android.gms.common.internal.service.zai> {
								public static class: java.lang.Class<com.google.android.gms.common.internal.service.zag<any>>;
								public constructor(param0: com.google.android.gms.common.api.Api<any>, param1: com.google.android.gms.common.api.GoogleApiClient);
								public constructor(param0: com.google.android.gms.common.api.internal.BasePendingResult.CallbackHandler<any>);
								public constructor(param0: com.google.android.gms.common.api.GoogleApiClient);
								public constructor();
								/** @deprecated */
								public constructor(param0: com.google.android.gms.common.api.Api.AnyClientKey<any>, param1: com.google.android.gms.common.api.GoogleApiClient);
								/** @deprecated */
								public constructor(param0: globalAndroid.os.Looper);
								public setResult(param0: any): void;
								public setFailedResult(param0: com.google.android.gms.common.api.Status): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module internal {
						export module service {
							export abstract class zah extends com.google.android.gms.common.internal.service.zag<com.google.android.gms.common.api.Status> {
								public static class: java.lang.Class<com.google.android.gms.common.internal.service.zah>;
								public constructor(param0: com.google.android.gms.common.api.Api<any>, param1: com.google.android.gms.common.api.GoogleApiClient);
								public constructor(param0: com.google.android.gms.common.api.GoogleApiClient);
								public constructor(param0: com.google.android.gms.common.api.internal.BasePendingResult.CallbackHandler<any>);
								public constructor();
								/** @deprecated */
								public constructor(param0: com.google.android.gms.common.api.Api.AnyClientKey<any>, param1: com.google.android.gms.common.api.GoogleApiClient);
								/** @deprecated */
								public constructor(param0: globalAndroid.os.Looper);
								public setResult(param0: any): void;
								public setFailedResult(param0: com.google.android.gms.common.api.Status): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module internal {
						export module service {
							export class zai extends com.google.android.gms.common.internal.GmsClient<com.google.android.gms.common.internal.service.zal> {
								public static class: java.lang.Class<com.google.android.gms.common.internal.service.zai>;
								public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.os.Handler, param2: number, param3: com.google.android.gms.common.internal.ClientSettings);
								public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.os.Looper, param2: com.google.android.gms.common.internal.ClientSettings, param3: com.google.android.gms.common.api.GoogleApiClient.ConnectionCallbacks, param4: com.google.android.gms.common.api.GoogleApiClient.OnConnectionFailedListener);
								public connect(param0: com.google.android.gms.common.internal.BaseGmsClient.ConnectionProgressReportCallbacks): void;
								public getRequiredFeatures(): native.Array<com.google.android.gms.common.Feature>;
								public getServiceBrokerBinder(): globalAndroid.os.IBinder;
								public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.os.Looper, param2: number, param3: com.google.android.gms.common.internal.ClientSettings, param4: com.google.android.gms.common.api.GoogleApiClient.ConnectionCallbacks, param5: com.google.android.gms.common.api.GoogleApiClient.OnConnectionFailedListener);
								public getEndpointPackageName(): string;
								public requiresGooglePlayServices(): boolean;
								public requiresAccount(): boolean;
								public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.os.Looper, param2: number, param3: com.google.android.gms.common.internal.ClientSettings);
								public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.os.Handler, param2: com.google.android.gms.common.internal.GmsClientSupervisor, param3: com.google.android.gms.common.GoogleApiAvailabilityLight, param4: number, param5: com.google.android.gms.common.internal.BaseGmsClient.BaseConnectionCallbacks, param6: com.google.android.gms.common.internal.BaseGmsClient.BaseOnConnectionFailedListener);
								public dump(param0: string, param1: java.io.FileDescriptor, param2: java.io.PrintWriter, param3: native.Array<string>): void;
								public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.os.Looper, param2: number, param3: com.google.android.gms.common.internal.BaseGmsClient.BaseConnectionCallbacks, param4: com.google.android.gms.common.internal.BaseGmsClient.BaseOnConnectionFailedListener, param5: string);
								public getMinApkVersion(): number;
								public getAvailableFeatures(): native.Array<com.google.android.gms.common.Feature>;
								public getServiceDescriptor(): string;
								public getRemoteService(param0: com.google.android.gms.common.internal.IAccountAccessor, param1: java.util.Set<com.google.android.gms.common.api.Scope>): void;
								public getConnectionHint(): globalAndroid.os.Bundle;
								public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.os.Looper, param2: com.google.android.gms.common.internal.GmsClientSupervisor, param3: com.google.android.gms.common.GoogleApiAvailability, param4: number, param5: com.google.android.gms.common.internal.ClientSettings, param6: com.google.android.gms.common.api.GoogleApiClient.ConnectionCallbacks, param7: com.google.android.gms.common.api.GoogleApiClient.OnConnectionFailedListener);
								public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.os.Looper, param2: com.google.android.gms.common.internal.GmsClientSupervisor, param3: com.google.android.gms.common.GoogleApiAvailabilityLight, param4: number, param5: com.google.android.gms.common.internal.BaseGmsClient.BaseConnectionCallbacks, param6: com.google.android.gms.common.internal.BaseGmsClient.BaseOnConnectionFailedListener, param7: string);
								public requiresSignIn(): boolean;
								public onUserSignOut(param0: com.google.android.gms.common.internal.BaseGmsClient.SignOutCallbacks): void;
								public getSignInIntent(): globalAndroid.content.Intent;
								public isConnected(): boolean;
								public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.os.Handler, param2: com.google.android.gms.common.internal.GmsClientSupervisor, param3: com.google.android.gms.common.GoogleApiAvailability, param4: number, param5: com.google.android.gms.common.internal.ClientSettings, param6: com.google.android.gms.common.api.GoogleApiClient.ConnectionCallbacks, param7: com.google.android.gms.common.api.GoogleApiClient.OnConnectionFailedListener);
								public getStartServiceAction(): string;
								public disconnect(): void;
								public isConnecting(): boolean;
								public providesSignIn(): boolean;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module internal {
						export module service {
							export class zaj {
								public static class: java.lang.Class<com.google.android.gms.common.internal.service.zaj>;
								/**
								 * Constructs a new instance of the com.google.android.gms.common.internal.service.zaj interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									zaj(param0: number): void;
								});
								public constructor();
								public zaj(param0: number): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module internal {
						export module service {
							export abstract class zak extends com.google.android.gms.internal.base.zab implements com.google.android.gms.common.internal.service.zaj {
								public static class: java.lang.Class<com.google.android.gms.common.internal.service.zak>;
								public dispatchTransaction(param0: number, param1: globalAndroid.os.Parcel, param2: globalAndroid.os.Parcel, param3: number): boolean;
								public zaj(param0: number): void;
								public constructor();
								public constructor(param0: string);
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module internal {
						export module service {
							export class zal {
								public static class: java.lang.Class<com.google.android.gms.common.internal.service.zal>;
								/**
								 * Constructs a new instance of the com.google.android.gms.common.internal.service.zal interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									zaa(param0: com.google.android.gms.common.internal.service.zaj): void;
								});
								public constructor();
								public zaa(param0: com.google.android.gms.common.internal.service.zaj): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module internal {
						export module service {
							export class zam extends com.google.android.gms.internal.base.zaa implements com.google.android.gms.common.internal.service.zal {
								public static class: java.lang.Class<com.google.android.gms.common.internal.service.zam>;
								public zaa(): globalAndroid.os.Parcel;
								public zaa(param0: com.google.android.gms.common.internal.service.zaj): void;
								public zaa(param0: number, param1: globalAndroid.os.Parcel): globalAndroid.os.Parcel;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module internal {
						export class zaa extends globalAndroid.os.Parcelable.Creator<com.google.android.gms.common.internal.AuthAccountRequest> {
							public static class: java.lang.Class<com.google.android.gms.common.internal.zaa>;
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module internal {
						export class zab extends globalAndroid.os.Parcelable.Creator<com.google.android.gms.common.internal.ClientIdentity> {
							public static class: java.lang.Class<com.google.android.gms.common.internal.zab>;
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module internal {
						export class zac extends com.google.android.gms.common.internal.DialogRedirect {
							public static class: java.lang.Class<com.google.android.gms.common.internal.zac>;
							public redirect(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module internal {
						export class zad extends com.google.android.gms.common.internal.DialogRedirect {
							public static class: java.lang.Class<com.google.android.gms.common.internal.zad>;
							public redirect(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module internal {
						export class zae extends com.google.android.gms.common.internal.DialogRedirect {
							public static class: java.lang.Class<com.google.android.gms.common.internal.zae>;
							public redirect(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module internal {
						export class zaf extends com.google.android.gms.common.internal.BaseGmsClient.BaseConnectionCallbacks {
							public static class: java.lang.Class<com.google.android.gms.common.internal.zaf>;
							public onConnected(param0: globalAndroid.os.Bundle): void;
							public onConnectionSuspended(param0: number): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module internal {
						export class zag extends com.google.android.gms.common.internal.BaseGmsClient.BaseOnConnectionFailedListener {
							public static class: java.lang.Class<com.google.android.gms.common.internal.zag>;
							public onConnectionFailed(param0: com.google.android.gms.common.ConnectionResult): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module internal {
						export class zah extends com.google.android.gms.internal.base.zaa implements com.google.android.gms.common.internal.ISignInButtonCreator {
							public static class: java.lang.Class<com.google.android.gms.common.internal.zah>;
							public newSignInButtonFromConfig(param0: com.google.android.gms.dynamic.IObjectWrapper, param1: com.google.android.gms.common.internal.SignInButtonConfig): com.google.android.gms.dynamic.IObjectWrapper;
							public newSignInButton(param0: com.google.android.gms.dynamic.IObjectWrapper, param1: number, param2: number): com.google.android.gms.dynamic.IObjectWrapper;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module internal {
						export class zai extends com.google.android.gms.common.internal.PendingResultUtil.zaa {
							public static class: java.lang.Class<com.google.android.gms.common.internal.zai>;
							public zaf(param0: com.google.android.gms.common.api.Status): com.google.android.gms.common.api.ApiException;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module internal {
						export class zaj extends com.google.android.gms.common.api.PendingResult.StatusListener {
							public static class: java.lang.Class<com.google.android.gms.common.internal.zaj>;
							public onComplete(param0: com.google.android.gms.common.api.Status): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module internal {
						export class zak extends com.google.android.gms.common.internal.PendingResultUtil.ResultConverter<any,any> {
							public static class: java.lang.Class<com.google.android.gms.common.internal.zak>;
							public convert(param0: any): any;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module internal {
						export class zal extends com.google.android.gms.common.internal.PendingResultUtil.ResultConverter<any,java.lang.Void> {
							public static class: java.lang.Class<com.google.android.gms.common.internal.zal>;
							public convert(param0: any): any;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module internal {
						export class zam extends globalAndroid.os.Parcelable.Creator<com.google.android.gms.common.internal.ResolveAccountRequest> {
							public static class: java.lang.Class<com.google.android.gms.common.internal.zam>;
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module internal {
						export class zan extends globalAndroid.os.Parcelable.Creator<com.google.android.gms.common.internal.ResolveAccountResponse> {
							public static class: java.lang.Class<com.google.android.gms.common.internal.zan>;
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module internal {
						export class zao extends globalAndroid.os.Parcelable.Creator<com.google.android.gms.common.internal.SignInButtonConfig> {
							public static class: java.lang.Class<com.google.android.gms.common.internal.zao>;
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module internal {
						export class zza extends globalAndroid.os.Parcelable.Creator<com.google.android.gms.common.internal.BinderWrapper> {
							public static class: java.lang.Class<com.google.android.gms.common.internal.zza>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module internal {
						export class zzb extends com.google.android.gms.common.internal.safeparcel.AbstractSafeParcelable {
							public static class: java.lang.Class<com.google.android.gms.common.internal.zzb>;
							public static CREATOR: any /* globalAndroid.os.Parcelable.Creator<com.google.android.gms.common.internal.zzb>*/;
							public constructor();
							public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module internal {
						export class zzc extends java.lang.Object /* globalAndroid.os.Parcelable.Creator<com.google.android.gms.common.internal.zzb>*/ {
							public static class: java.lang.Class<com.google.android.gms.common.internal.zzc>;
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module internal {
						export class zzd extends globalAndroid.os.Parcelable.Creator<com.google.android.gms.common.internal.GetServiceRequest> {
							public static class: java.lang.Class<com.google.android.gms.common.internal.zzd>;
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module internal {
						export class zze extends com.google.android.gms.common.internal.GmsClientSupervisor {
							public static class: java.lang.Class<com.google.android.gms.common.internal.zze>;
							public handleMessage(param0: globalAndroid.os.Message): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module internal {
						export class zzf {
							public static class: java.lang.Class<com.google.android.gms.common.internal.zzf>;
							public constructor(param0: any /* com.google.android.gms.common.internal.zze*/, param1: any /* com.google.android.gms.common.internal.GmsClientSupervisor.zza*/);
							public isBound(): boolean;
							public getBinder(): globalAndroid.os.IBinder;
							public onServiceDisconnected(param0: globalAndroid.content.ComponentName): void;
							public getState(): number;
							public getComponentName(): globalAndroid.content.ComponentName;
							public onServiceConnected(param0: globalAndroid.content.ComponentName, param1: globalAndroid.os.IBinder): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module internal {
						export class zzg {
							public static class: java.lang.Class<com.google.android.gms.common.internal.zzg>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module internal {
						export class zzh {
							public static class: java.lang.Class<com.google.android.gms.common.internal.zzh>;
							public constructor(param0: string, param1: string, param2: boolean, param3: number);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module internal {
						export class zzi {
							public static class: java.lang.Class<com.google.android.gms.common.internal.zzi>;
							/**
							 * Constructs a new instance of the com.google.android.gms.common.internal.zzi interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								zzb(): com.google.android.gms.dynamic.IObjectWrapper;
								zzc(): number;
							});
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module internal {
						export abstract class zzj extends com.google.android.gms.internal.common.zzb implements com.google.android.gms.common.internal.zzi {
							public static class: java.lang.Class<com.google.android.gms.common.internal.zzj>;
							public constructor();
							public constructor(param0: string);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module internal {
						export class zzk extends com.google.android.gms.internal.common.zza implements com.google.android.gms.common.internal.zzi {
							public static class: java.lang.Class<com.google.android.gms.common.internal.zzk>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module internal {
						export class zzl extends com.google.android.gms.internal.common.zza implements com.google.android.gms.common.internal.IGmsCallbacks {
							public static class: java.lang.Class<com.google.android.gms.common.internal.zzl>;
							public onPostInitComplete(param0: number, param1: globalAndroid.os.IBinder, param2: globalAndroid.os.Bundle): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module internal {
						export class zzm {
							public static class: java.lang.Class<com.google.android.gms.common.internal.zzm>;
							/**
							 * Constructs a new instance of the com.google.android.gms.common.internal.zzm interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								zza(param0: any /* com.google.android.gms.common.zzk*/, param1: com.google.android.gms.dynamic.IObjectWrapper): boolean;
							});
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module internal {
						export abstract class zzn extends com.google.android.gms.internal.common.zzb implements com.google.android.gms.common.internal.zzm {
							public static class: java.lang.Class<com.google.android.gms.common.internal.zzn>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module internal {
						export class zzo extends com.google.android.gms.internal.common.zza implements com.google.android.gms.common.internal.zzm {
							public static class: java.lang.Class<com.google.android.gms.common.internal.zzo>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module internal {
						export class zzp {
							public static class: java.lang.Class<com.google.android.gms.common.internal.zzp>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module internal {
						export class zzq {
							public static class: java.lang.Class<com.google.android.gms.common.internal.zzq>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module internal {
						export class zzr extends com.google.android.gms.common.internal.safeparcel.AbstractSafeParcelable {
							public static class: java.lang.Class<com.google.android.gms.common.internal.zzr>;
							public static CREATOR: any /* globalAndroid.os.Parcelable.Creator<com.google.android.gms.common.internal.zzr>*/;
							public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module internal {
						export class zzs extends java.lang.Object /* globalAndroid.os.Parcelable.Creator<com.google.android.gms.common.internal.zzr>*/ {
							public static class: java.lang.Class<com.google.android.gms.common.internal.zzs>;
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module logging {
						export class Logger {
							public static class: java.lang.Class<com.google.android.gms.common.logging.Logger>;
							public v(param0: string, param1: native.Array<any>): void;
							public e(param0: string, param1: java.lang.Throwable, param2: native.Array<any>): void;
							public wtf(param0: java.lang.Throwable): void;
							public i(param0: string, param1: native.Array<any>): void;
							public isLoggable(param0: number): boolean;
							public e(param0: string, param1: native.Array<any>): void;
							public wtf(param0: string, param1: java.lang.Throwable, param2: native.Array<any>): void;
							public constructor(param0: string, param1: native.Array<string>);
							public w(param0: string, param1: native.Array<any>): void;
							public d(param0: string, param1: native.Array<any>): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module providers {
						export class PooledExecutorsProvider {
							public static class: java.lang.Class<com.google.android.gms.common.providers.PooledExecutorsProvider>;
							public static getInstance(): com.google.android.gms.common.providers.PooledExecutorsProvider.PooledExecutorFactory;
						}
						export module PooledExecutorsProvider {
							export class PooledExecutorFactory {
								public static class: java.lang.Class<com.google.android.gms.common.providers.PooledExecutorsProvider.PooledExecutorFactory>;
								/**
								 * Constructs a new instance of the com.google.android.gms.common.providers.PooledExecutorsProvider$PooledExecutorFactory interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									newSingleThreadScheduledExecutor(): java.util.concurrent.ScheduledExecutorService;
								});
								public constructor();
								public newSingleThreadScheduledExecutor(): java.util.concurrent.ScheduledExecutorService;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module providers {
						export class zza extends com.google.android.gms.common.providers.PooledExecutorsProvider.PooledExecutorFactory {
							public static class: java.lang.Class<com.google.android.gms.common.providers.zza>;
							public newSingleThreadScheduledExecutor(): java.util.concurrent.ScheduledExecutorService;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module server {
						export class FavaDiagnosticsEntity extends com.google.android.gms.common.internal.safeparcel.AbstractSafeParcelable implements com.google.android.gms.common.internal.ReflectedParcelable {
							public static class: java.lang.Class<com.google.android.gms.common.server.FavaDiagnosticsEntity>;
							public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.gms.common.server.FavaDiagnosticsEntity>;
							public constructor();
							public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
							public constructor(param0: number, param1: string, param2: number);
							public constructor(param0: string, param1: number);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module server {
						export module converter {
							export class StringToIntConverter extends com.google.android.gms.common.internal.safeparcel.AbstractSafeParcelable implements com.google.android.gms.common.server.response.FastJsonResponse.FieldConverter<string,java.lang.Integer>  {
								public static class: java.lang.Class<com.google.android.gms.common.server.converter.StringToIntConverter>;
								public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.gms.common.server.converter.StringToIntConverter>;
								public convert(param0: any): any;
								public zacj(): number;
								public zack(): number;
								public add(param0: string, param1: number): com.google.android.gms.common.server.converter.StringToIntConverter;
								public constructor();
								public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
								public convertBack(param0: any): any;
							}
							export module StringToIntConverter {
								export class zaa extends com.google.android.gms.common.internal.safeparcel.AbstractSafeParcelable {
									public static class: java.lang.Class<com.google.android.gms.common.server.converter.StringToIntConverter.zaa>;
									public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.gms.common.server.converter.StringToIntConverter.zaa>;
									public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module server {
						export module converter {
							export class zaa extends com.google.android.gms.common.internal.safeparcel.AbstractSafeParcelable {
								public static class: java.lang.Class<com.google.android.gms.common.server.converter.zaa>;
								public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.gms.common.server.converter.zaa>;
								public zaci(): com.google.android.gms.common.server.response.FastJsonResponse.FieldConverter<any,any>;
								public static zaa(param0: com.google.android.gms.common.server.response.FastJsonResponse.FieldConverter<any,any>): com.google.android.gms.common.server.converter.zaa;
								public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module server {
						export module converter {
							export class zab extends globalAndroid.os.Parcelable.Creator<com.google.android.gms.common.server.converter.zaa> {
								public static class: java.lang.Class<com.google.android.gms.common.server.converter.zab>;
								public constructor();
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module server {
						export module converter {
							export class zac extends globalAndroid.os.Parcelable.Creator<com.google.android.gms.common.server.converter.StringToIntConverter> {
								public static class: java.lang.Class<com.google.android.gms.common.server.converter.zac>;
								public constructor();
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module server {
						export module converter {
							export class zad extends globalAndroid.os.Parcelable.Creator<com.google.android.gms.common.server.converter.StringToIntConverter.zaa> {
								public static class: java.lang.Class<com.google.android.gms.common.server.converter.zad>;
								public constructor();
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module server {
						export module response {
							export abstract class FastJsonResponse {
								public static class: java.lang.Class<com.google.android.gms.common.server.response.FastJsonResponse>;
								public toString(): string;
								public zaa(param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<any,any>, param1: java.util.Map): void;
								public setIntegerInternal(param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<any,any>, param1: string, param2: number): void;
								public zaa(param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<any,any>, param1: string, param2: java.util.ArrayList<java.lang.Integer>): void;
								public zaa(param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<any,any>, param1: string, param2: java.util.Map<string,string>): void;
								public zaa(param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<any,any>, param1: string, param2: java.math.BigInteger): void;
								public zad(param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<any,any>, param1: string, param2: java.util.ArrayList<java.lang.Float>): void;
								public addConcreteTypeInternal(param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<any,any>, param1: string, param2: com.google.android.gms.common.server.response.FastJsonResponse): void;
								public zaa(param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<any,any>, param1: number): void;
								public setStringsInternal(param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<any,any>, param1: string, param2: java.util.ArrayList<string>): void;
								public zaa(param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<any,any>, param1: java.math.BigDecimal): void;
								public zaa(param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<any,any>, param1: string, param2: java.math.BigDecimal): void;
								public zae(param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<any,any>, param1: java.util.ArrayList): void;
								public setLongInternal(param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<any,any>, param1: string, param2: number): void;
								public zaa(param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<any,any>, param1: java.util.ArrayList): void;
								public zab(param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<any,any>, param1: java.util.ArrayList): void;
								public setDecodedBytesInternal(param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<any,any>, param1: string, param2: native.Array<number>): void;
								public zad(param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<any,any>, param1: java.util.ArrayList): void;
								public zac(param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<any,any>, param1: string, param2: java.util.ArrayList<java.lang.Long>): void;
								public zac(param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<any,any>, param1: java.util.ArrayList): void;
								public zag(param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<any,any>, param1: string, param2: java.util.ArrayList<java.lang.Boolean>): void;
								public zag(param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<any,any>, param1: java.util.ArrayList): void;
								public zaa(param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<any,any>, param1: native.Array<number>): void;
								public static zab(param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<any,any>, param1: any): any;
								public zaa(param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<any,any>, param1: boolean): void;
								public zaa(param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<any,any>, param1: java.math.BigInteger): void;
								public zaf(param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<any,any>, param1: java.util.ArrayList): void;
								public zaa(param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<any,any>, param1: string): void;
								public zab(param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<any,any>, param1: string, param2: java.util.ArrayList<java.math.BigInteger>): void;
								public zaa(param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<any,any>, param1: string, param2: number): void;
								public constructor();
								public zah(param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<any,any>, param1: java.util.ArrayList): void;
								public getFieldMappings(): java.util.Map<string,com.google.android.gms.common.server.response.FastJsonResponse.Field<any,any>>;
								public zae(param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<any,any>, param1: string, param2: java.util.ArrayList<java.lang.Double>): void;
								public isPrimitiveFieldSet(param0: string): boolean;
								public addConcreteTypeArrayInternal(param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<any,any>, param1: string, param2: java.util.ArrayList): void;
								public isFieldSet(param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<any,any>): boolean;
								public getValueObject(param0: string): any;
								public zaf(param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<any,any>, param1: string, param2: java.util.ArrayList<java.math.BigDecimal>): void;
								public setBooleanInternal(param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<any,any>, param1: string, param2: boolean): void;
								public getFieldValue(param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<any,any>): any;
								public setStringInternal(param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<any,any>, param1: string, param2: string): void;
							}
							export module FastJsonResponse {
								export class Field<I, O>  extends com.google.android.gms.common.internal.safeparcel.AbstractSafeParcelable {
									public static class: java.lang.Class<com.google.android.gms.common.server.response.FastJsonResponse.Field<any,any>>;
									public zapq: number;
									public zapr: boolean;
									public zaps: number;
									public zapt: boolean;
									public zapu: string;
									public zapv: number;
									public zapw: java.lang.Class<any>;
									public static CREATOR: com.google.android.gms.common.server.response.zai;
									public static forBase64(param0: string, param1: number): com.google.android.gms.common.server.response.FastJsonResponse.Field<native.Array<number>,native.Array<number>>;
									public zacp(): com.google.android.gms.common.server.response.FastJsonResponse;
									public convertBack(param0: any): any;
									public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
									public static forConcreteTypeArray(param0: string, param1: number, param2: java.lang.Class): com.google.android.gms.common.server.response.FastJsonResponse.Field<any,any>;
									public static forBoolean(param0: string, param1: number): com.google.android.gms.common.server.response.FastJsonResponse.Field<java.lang.Boolean,java.lang.Boolean>;
									public toString(): string;
									public convert(param0: any): any;
									public static forLong(param0: string, param1: number): com.google.android.gms.common.server.response.FastJsonResponse.Field<java.lang.Long,java.lang.Long>;
									public static forStrings(param0: string, param1: number): com.google.android.gms.common.server.response.FastJsonResponse.Field<java.util.ArrayList<string>,java.util.ArrayList<string>>;
									public static forFloat(param0: string, param1: number): com.google.android.gms.common.server.response.FastJsonResponse.Field<java.lang.Float,java.lang.Float>;
									public zacl(): com.google.android.gms.common.server.response.FastJsonResponse.Field<any,any>;
									public getSafeParcelableFieldId(): number;
									public static forString(param0: string, param1: number): com.google.android.gms.common.server.response.FastJsonResponse.Field<string,string>;
									public static forDouble(param0: string, param1: number): com.google.android.gms.common.server.response.FastJsonResponse.Field<java.lang.Double,java.lang.Double>;
									public zacq(): java.util.Map<string,com.google.android.gms.common.server.response.FastJsonResponse.Field<any,any>>;
									public zaa(param0: com.google.android.gms.common.server.response.zak): void;
									public static forConcreteType(param0: string, param1: number, param2: java.lang.Class): com.google.android.gms.common.server.response.FastJsonResponse.Field<any,any>;
									public static forInteger(param0: string, param1: number): com.google.android.gms.common.server.response.FastJsonResponse.Field<java.lang.Integer,java.lang.Integer>;
									public static withConverter(param0: string, param1: number, param2: com.google.android.gms.common.server.response.FastJsonResponse.FieldConverter<any,any>, param3: boolean): com.google.android.gms.common.server.response.FastJsonResponse.Field<any,any>;
									public zacn(): boolean;
								}
								export class FieldConverter<I, O>  extends java.lang.Object {
									public static class: java.lang.Class<com.google.android.gms.common.server.response.FastJsonResponse.FieldConverter<any,any>>;
									/**
									 * Constructs a new instance of the com.google.android.gms.common.server.response.FastJsonResponse$FieldConverter interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
									 */
									public constructor(implementation: {
										zacj(): number;
										zack(): number;
										convert(param0: I): O;
										convertBack(param0: O): I;
									});
									public constructor();
									public zack(): number;
									public convertBack(param0: O): I;
									public zacj(): number;
									public convert(param0: I): O;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module server {
						export module response {
							export class FastParser<T>  extends java.lang.Object {
								public static class: java.lang.Class<com.google.android.gms.common.server.response.FastParser<any>>;
								public constructor();
								public parse(param0: java.io.InputStream, param1: T): void;
							}
							export module FastParser {
								export class ParseException {
									public static class: java.lang.Class<com.google.android.gms.common.server.response.FastParser.ParseException>;
									public constructor(param0: java.lang.Throwable);
									public constructor(param0: string);
									public constructor(param0: string, param1: java.lang.Throwable);
								}
								export class zaa<O>  extends java.lang.Object {
									public static class: java.lang.Class<com.google.android.gms.common.server.response.FastParser.zaa<any>>;
									/**
									 * Constructs a new instance of the com.google.android.gms.common.server.response.FastParser$zaa interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
									 */
									public constructor(implementation: {
										zah(param0: com.google.android.gms.common.server.response.FastParser<any>, param1: java.io.BufferedReader): O;
									});
									public constructor();
									public zah(param0: com.google.android.gms.common.server.response.FastParser<any>, param1: java.io.BufferedReader): O;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module server {
						export module response {
							export abstract class FastSafeParcelableJsonResponse extends com.google.android.gms.common.server.response.FastJsonResponse implements com.google.android.gms.common.internal.safeparcel.SafeParcelable {
								public static class: java.lang.Class<com.google.android.gms.common.server.response.FastSafeParcelableJsonResponse>;
								public describeContents(): number;
								public isPrimitiveFieldSet(param0: string): boolean;
								public equals(param0: any): boolean;
								public toByteArray(): native.Array<number>;
								public getValueObject(param0: string): any;
								public constructor();
								public hashCode(): number;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module server {
						export module response {
							export class SafeParcelResponse extends com.google.android.gms.common.server.response.FastSafeParcelableJsonResponse {
								public static class: java.lang.Class<com.google.android.gms.common.server.response.SafeParcelResponse>;
								public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.gms.common.server.response.SafeParcelResponse>;
								public toString(): string;
								public zaa(param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<any,any>, param1: java.util.Map): void;
								public setIntegerInternal(param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<any,any>, param1: string, param2: number): void;
								public zaa(param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<any,any>, param1: string, param2: java.util.ArrayList<java.lang.Integer>): void;
								public zaa(param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<any,any>, param1: string, param2: java.util.Map<string,string>): void;
								public static from(param0: com.google.android.gms.common.server.response.FastJsonResponse): com.google.android.gms.common.server.response.SafeParcelResponse;
								public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
								public zaa(param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<any,any>, param1: string, param2: java.math.BigInteger): void;
								public zad(param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<any,any>, param1: string, param2: java.util.ArrayList<java.lang.Float>): void;
								public addConcreteTypeInternal(param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<any,any>, param1: string, param2: com.google.android.gms.common.server.response.FastJsonResponse): void;
								public zaa(param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<any,any>, param1: number): void;
								public setStringsInternal(param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<any,any>, param1: string, param2: java.util.ArrayList<string>): void;
								public zaa(param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<any,any>, param1: java.math.BigDecimal): void;
								public zaa(param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<any,any>, param1: string, param2: java.math.BigDecimal): void;
								public zae(param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<any,any>, param1: java.util.ArrayList): void;
								public setLongInternal(param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<any,any>, param1: string, param2: number): void;
								public zaa(param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<any,any>, param1: java.util.ArrayList): void;
								public zab(param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<any,any>, param1: java.util.ArrayList): void;
								public setDecodedBytesInternal(param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<any,any>, param1: string, param2: native.Array<number>): void;
								public zac(param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<any,any>, param1: string, param2: java.util.ArrayList<java.lang.Long>): void;
								public zad(param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<any,any>, param1: java.util.ArrayList): void;
								public zac(param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<any,any>, param1: java.util.ArrayList): void;
								public zag(param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<any,any>, param1: string, param2: java.util.ArrayList<java.lang.Boolean>): void;
								public zaa(param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<any,any>, param1: native.Array<number>): void;
								public zag(param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<any,any>, param1: java.util.ArrayList): void;
								public static zab(param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<any,any>, param1: any): any;
								public zaa(param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<any,any>, param1: boolean): void;
								public zaa(param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<any,any>, param1: java.math.BigInteger): void;
								public zaf(param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<any,any>, param1: java.util.ArrayList): void;
								public zaa(param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<any,any>, param1: string): void;
								public zab(param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<any,any>, param1: string, param2: java.util.ArrayList<java.math.BigInteger>): void;
								public constructor(param0: com.google.android.gms.common.server.response.zak, param1: string);
								public zaa(param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<any,any>, param1: string, param2: number): void;
								public constructor();
								public getFieldMappings(): java.util.Map<string,com.google.android.gms.common.server.response.FastJsonResponse.Field<any,any>>;
								public zae(param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<any,any>, param1: string, param2: java.util.ArrayList<java.lang.Double>): void;
								public isPrimitiveFieldSet(param0: string): boolean;
								public addConcreteTypeArrayInternal(param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<any,any>, param1: string, param2: java.util.ArrayList): void;
								public getValueObject(param0: string): any;
								public zaf(param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<any,any>, param1: string, param2: java.util.ArrayList<java.math.BigDecimal>): void;
								public setBooleanInternal(param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<any,any>, param1: string, param2: boolean): void;
								public setStringInternal(param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<any,any>, param1: string, param2: string): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module server {
						export module response {
							export class zaa extends com.google.android.gms.common.server.response.FastParser.zaa<java.lang.Integer> {
								public static class: java.lang.Class<com.google.android.gms.common.server.response.zaa>;
								public zah(param0: com.google.android.gms.common.server.response.FastParser<any>, param1: java.io.BufferedReader): any;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module server {
						export module response {
							export class zab extends com.google.android.gms.common.server.response.FastParser.zaa<java.lang.Long> {
								public static class: java.lang.Class<com.google.android.gms.common.server.response.zab>;
								public zah(param0: com.google.android.gms.common.server.response.FastParser<any>, param1: java.io.BufferedReader): any;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module server {
						export module response {
							export class zac extends com.google.android.gms.common.server.response.FastParser.zaa<java.lang.Float> {
								public static class: java.lang.Class<com.google.android.gms.common.server.response.zac>;
								public zah(param0: com.google.android.gms.common.server.response.FastParser<any>, param1: java.io.BufferedReader): any;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module server {
						export module response {
							export class zad extends com.google.android.gms.common.server.response.FastParser.zaa<java.lang.Double> {
								public static class: java.lang.Class<com.google.android.gms.common.server.response.zad>;
								public zah(param0: com.google.android.gms.common.server.response.FastParser<any>, param1: java.io.BufferedReader): any;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module server {
						export module response {
							export class zae extends com.google.android.gms.common.server.response.FastParser.zaa<java.lang.Boolean> {
								public static class: java.lang.Class<com.google.android.gms.common.server.response.zae>;
								public zah(param0: com.google.android.gms.common.server.response.FastParser<any>, param1: java.io.BufferedReader): any;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module server {
						export module response {
							export class zaf extends com.google.android.gms.common.server.response.FastParser.zaa<string> {
								public static class: java.lang.Class<com.google.android.gms.common.server.response.zaf>;
								public zah(param0: com.google.android.gms.common.server.response.FastParser<any>, param1: java.io.BufferedReader): any;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module server {
						export module response {
							export class zag extends com.google.android.gms.common.server.response.FastParser.zaa<java.math.BigInteger> {
								public static class: java.lang.Class<com.google.android.gms.common.server.response.zag>;
								public zah(param0: com.google.android.gms.common.server.response.FastParser<any>, param1: java.io.BufferedReader): any;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module server {
						export module response {
							export class zah extends com.google.android.gms.common.server.response.FastParser.zaa<java.math.BigDecimal> {
								public static class: java.lang.Class<com.google.android.gms.common.server.response.zah>;
								public zah(param0: com.google.android.gms.common.server.response.FastParser<any>, param1: java.io.BufferedReader): any;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module server {
						export module response {
							export class zai extends globalAndroid.os.Parcelable.Creator<com.google.android.gms.common.server.response.FastJsonResponse.Field<any,any>> {
								public static class: java.lang.Class<com.google.android.gms.common.server.response.zai>;
								public constructor();
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module server {
						export module response {
							export class zaj extends globalAndroid.os.Parcelable.Creator<com.google.android.gms.common.server.response.zam> {
								public static class: java.lang.Class<com.google.android.gms.common.server.response.zaj>;
								public constructor();
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module server {
						export module response {
							export class zak extends com.google.android.gms.common.internal.safeparcel.AbstractSafeParcelable {
								public static class: java.lang.Class<com.google.android.gms.common.server.response.zak>;
								public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.gms.common.server.response.zak>;
								public zaa(param0: java.lang.Class<any>): boolean;
								public toString(): string;
								public zai(param0: string): java.util.Map<string,com.google.android.gms.common.server.response.FastJsonResponse.Field<any,any>>;
								public zacs(): void;
								public constructor();
								public zaa(param0: java.lang.Class<any>, param1: java.util.Map<string,com.google.android.gms.common.server.response.FastJsonResponse.Field<any,any>>): void;
								public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
								public zacr(): void;
								public constructor(param0: java.lang.Class<any>);
								public zact(): string;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module server {
						export module response {
							export class zal extends com.google.android.gms.common.internal.safeparcel.AbstractSafeParcelable {
								public static class: java.lang.Class<com.google.android.gms.common.server.response.zal>;
								public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.gms.common.server.response.zal>;
								public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module server {
						export module response {
							export class zam extends com.google.android.gms.common.internal.safeparcel.AbstractSafeParcelable {
								public static class: java.lang.Class<com.google.android.gms.common.server.response.zam>;
								public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.gms.common.server.response.zam>;
								public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module server {
						export module response {
							export class zan extends globalAndroid.os.Parcelable.Creator<com.google.android.gms.common.server.response.zak> {
								public static class: java.lang.Class<com.google.android.gms.common.server.response.zan>;
								public constructor();
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module server {
						export module response {
							export class zao extends globalAndroid.os.Parcelable.Creator<com.google.android.gms.common.server.response.zal> {
								public static class: java.lang.Class<com.google.android.gms.common.server.response.zao>;
								public constructor();
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module server {
						export module response {
							export class zap extends globalAndroid.os.Parcelable.Creator<com.google.android.gms.common.server.response.SafeParcelResponse> {
								public static class: java.lang.Class<com.google.android.gms.common.server.response.zap>;
								public constructor();
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module server {
						export class zaa extends globalAndroid.os.Parcelable.Creator<com.google.android.gms.common.server.FavaDiagnosticsEntity> {
							public static class: java.lang.Class<com.google.android.gms.common.server.zaa>;
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module sqlite {
						export class CursorWrapper {
							public static class: java.lang.Class<com.google.android.gms.common.sqlite.CursorWrapper>;
							public setWindow(param0: globalAndroid.database.CursorWindow): void;
							public getWindow(): globalAndroid.database.CursorWindow;
							public constructor(param0: globalAndroid.database.Cursor);
							public fillWindow(param0: number, param1: globalAndroid.database.CursorWindow): void;
							public onMove(param0: number, param1: number): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module stats {
						export class ConnectionTracker {
							public static class: java.lang.Class<com.google.android.gms.common.stats.ConnectionTracker>;
							public static getInstance(): com.google.android.gms.common.stats.ConnectionTracker;
							public bindService(param0: globalAndroid.content.Context, param1: globalAndroid.content.Intent, param2: globalAndroid.content.ServiceConnection, param3: number): boolean;
							public unbindService(param0: globalAndroid.content.Context, param1: globalAndroid.content.ServiceConnection): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module stats {
						export class LoggingConstants {
							public static class: java.lang.Class<com.google.android.gms.common.stats.LoggingConstants>;
							public static EXTRA_WAKE_LOCK_KEY: string;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module stats {
						export abstract class StatsEvent extends com.google.android.gms.common.internal.safeparcel.AbstractSafeParcelable implements com.google.android.gms.common.internal.ReflectedParcelable {
							public static class: java.lang.Class<com.google.android.gms.common.stats.StatsEvent>;
							public constructor();
							public toString(): string;
							public getEventType(): number;
							public getTimeMillis(): number;
						}
						export module StatsEvent {
							export class Types {
								public static class: java.lang.Class<com.google.android.gms.common.stats.StatsEvent.Types>;
								/**
								 * Constructs a new instance of the com.google.android.gms.common.stats.StatsEvent$Types interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
								});
								public constructor();
								public static EVENT_TYPE_RELEASE_WAKE_LOCK: number;
								public static EVENT_TYPE_ACQUIRE_WAKE_LOCK: number;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module stats {
						export class StatsUtils {
							public static class: java.lang.Class<com.google.android.gms.common.stats.StatsUtils>;
							public constructor();
							public static getEventKey(param0: globalAndroid.content.Context, param1: globalAndroid.content.Intent): string;
							public static getEventKey(param0: globalAndroid.os.PowerManager.WakeLock, param1: string): string;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module stats {
						export class WakeLockEvent extends com.google.android.gms.common.stats.StatsEvent {
							public static class: java.lang.Class<com.google.android.gms.common.stats.WakeLockEvent>;
							public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.gms.common.stats.WakeLockEvent>;
							public constructor();
							public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
							public constructor(param0: number, param1: number, param2: string, param3: number, param4: java.util.List<string>, param5: string, param6: number, param7: number, param8: string, param9: string, param10: number, param11: number, param12: string);
							public getEventType(): number;
							public getTimeMillis(): number;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module stats {
						export class WakeLockTracker {
							public static class: java.lang.Class<com.google.android.gms.common.stats.WakeLockTracker>;
							public constructor();
							public registerReleaseEvent(param0: globalAndroid.content.Context, param1: globalAndroid.content.Intent): void;
							public registerEvent(param0: globalAndroid.content.Context, param1: string, param2: number, param3: string, param4: string, param5: string, param6: number, param7: java.util.List<string>): void;
							public registerAcquireEvent(param0: globalAndroid.content.Context, param1: globalAndroid.content.Intent, param2: string, param3: string, param4: string, param5: number, param6: string): void;
							public registerEvent(param0: globalAndroid.content.Context, param1: string, param2: number, param3: string, param4: string, param5: string, param6: number, param7: java.util.List<string>, param8: number): void;
							public static getInstance(): com.google.android.gms.common.stats.WakeLockTracker;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module stats {
						export class zza extends globalAndroid.os.Parcelable.Creator<com.google.android.gms.common.stats.WakeLockEvent> {
							public static class: java.lang.Class<com.google.android.gms.common.stats.zza>;
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module util {
						export class AndroidUtilsLight {
							public static class: java.lang.Class<com.google.android.gms.common.util.AndroidUtilsLight>;
							public constructor();
							public static getPackageCertificateHashBytes(param0: globalAndroid.content.Context, param1: string): native.Array<number>;
							public static getDeviceProtectedStorageContext(param0: globalAndroid.content.Context): globalAndroid.content.Context;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module util {
						export class ArrayUtils {
							public static class: java.lang.Class<com.google.android.gms.common.util.ArrayUtils>;
							public static removeAll(param0: native.Array<any>, param1: native.Array<any>): native.Array<any>;
							public static contains(param0: native.Array<number>, param1: number): boolean;
							public static contains(param0: native.Array<any>, param1: any): boolean;
							public static concat(param0: native.Array<native.Array<any>>): native.Array<any>;
							public static writeArray(param0: java.lang.StringBuilder, param1: native.Array<any>): void;
							public static newArrayList(): java.util.ArrayList;
							public static toPrimitiveArray(param0: java.util.Collection<java.lang.Integer>): native.Array<number>;
							public static writeStringArray(param0: java.lang.StringBuilder, param1: native.Array<string>): void;
							public static toWrapperArray(param0: native.Array<number>): native.Array<java.lang.Integer>;
							public static concatByteArrays(param0: native.Array<native.Array<number>>): native.Array<number>;
							public static writeArray(param0: java.lang.StringBuilder, param1: native.Array<number>): void;
							public static writeArray(param0: java.lang.StringBuilder, param1: native.Array<boolean>): void;
							public static toArrayList(param0: native.Array<any>): java.util.ArrayList;
							public static appendToArray(param0: native.Array<any>, param1: any): native.Array<any>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module util {
						export class Base64Utils {
							public static class: java.lang.Class<com.google.android.gms.common.util.Base64Utils>;
							public constructor();
							public static encode(param0: native.Array<number>): string;
							public static decode(param0: string): native.Array<number>;
							public static encodeUrlSafe(param0: native.Array<number>): string;
							public static encodeUrlSafeNoPadding(param0: native.Array<number>): string;
							public static decodeUrlSafe(param0: string): native.Array<number>;
							public static decodeUrlSafeNoPadding(param0: string): native.Array<number>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module util {
						export class BiConsumer<T, U>  extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.gms.common.util.BiConsumer<any,any>>;
							/**
							 * Constructs a new instance of the com.google.android.gms.common.util.BiConsumer<any,any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								accept(param0: T, param1: U): void;
							});
							public constructor();
							public accept(param0: T, param1: U): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module util {
						export class ClientLibraryUtils {
							public static class: java.lang.Class<com.google.android.gms.common.util.ClientLibraryUtils>;
							public static getClientVersion(param0: globalAndroid.content.Context, param1: string): number;
							public static isPackageSide(): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module util {
						export class Clock {
							public static class: java.lang.Class<com.google.android.gms.common.util.Clock>;
							/**
							 * Constructs a new instance of the com.google.android.gms.common.util.Clock interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								currentTimeMillis(): number;
								elapsedRealtime(): number;
								nanoTime(): number;
								currentThreadTimeMillis(): number;
							});
							public constructor();
							public currentThreadTimeMillis(): number;
							public nanoTime(): number;
							public elapsedRealtime(): number;
							public currentTimeMillis(): number;
						}
						export module Clock {
								export class CC {
									public static class: java.lang.Class<com.google.android.gms.common.util.Clock.CC>;
									public static currentThreadTimeMillis(param0: com.google.android.gms.common.util.Clock): number;
								}
							
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module util {
						export class CollectionUtils {
							public static class: java.lang.Class<com.google.android.gms.common.util.CollectionUtils>;
							public static mutableSetOfWithSize(param0: number): java.util.Set;
							public static mapOf(param0: any, param1: any, param2: any, param3: any, param4: any, param5: any): java.util.Map;
							public static isEmpty(param0: java.util.Collection<any>): boolean;
							/** @deprecated */
							public static setOf(param0: any, param1: any, param2: any): java.util.Set;
							/** @deprecated */
							public static setOf(param0: native.Array<any>): java.util.Set;
							/** @deprecated */
							public static listOf(): java.util.List;
							public static mapOf(param0: any, param1: any, param2: any, param3: any, param4: any, param5: any, param6: any, param7: any, param8: any, param9: any, param10: any, param11: any): java.util.Map;
							/** @deprecated */
							public static listOf(param0: native.Array<any>): java.util.List;
							/** @deprecated */
							public static listOf(param0: any): java.util.List;
							public static mapOfKeyValueArrays(param0: native.Array<any>, param1: native.Array<any>): java.util.Map;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module util {
						export class CrashUtils {
							public static class: java.lang.Class<com.google.android.gms.common.util.CrashUtils>;
							public constructor();
							public static addDynamiteErrorToDropBox(param0: globalAndroid.content.Context, param1: java.lang.Throwable): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module util {
						export class DataUtils {
							public static class: java.lang.Class<com.google.android.gms.common.util.DataUtils>;
							public constructor();
							public static copyStringToBuffer(param0: string, param1: globalAndroid.database.CharArrayBuffer): void;
							public static loadImageBytes(param0: globalAndroid.graphics.Bitmap): native.Array<number>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module util {
						export class DefaultClock extends com.google.android.gms.common.util.Clock {
							public static class: java.lang.Class<com.google.android.gms.common.util.DefaultClock>;
							public currentThreadTimeMillis(): number;
							public nanoTime(): number;
							public elapsedRealtime(): number;
							public currentTimeMillis(): number;
							public static getInstance(): com.google.android.gms.common.util.Clock;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module util {
						export class DeviceProperties {
							public static class: java.lang.Class<com.google.android.gms.common.util.DeviceProperties>;
							public static isTablet(param0: globalAndroid.content.res.Resources): boolean;
							public static isTv(param0: globalAndroid.content.Context): boolean;
							public static isLatchsky(param0: globalAndroid.content.Context): boolean;
							public static isWearable(param0: globalAndroid.content.Context): boolean;
							public static isUserBuild(): boolean;
							public static isWearableWithoutPlayStore(param0: globalAndroid.content.Context): boolean;
							public static isSidewinder(param0: globalAndroid.content.Context): boolean;
							public static isAuto(param0: globalAndroid.content.Context): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module util {
						export class DynamiteApi {
							public static class: java.lang.Class<com.google.android.gms.common.util.DynamiteApi>;
							/**
							 * Constructs a new instance of the com.google.android.gms.common.util.DynamiteApi interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
							});
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module util {
						export class GmsVersion {
							public static class: java.lang.Class<com.google.android.gms.common.util.GmsVersion>;
							public static VERSION_HALLOUMI: number;
							public static VERSION_JARLSBERG: number;
							public static VERSION_KENAFA: number;
							public static VERSION_LONGHORN: number;
							public static VERSION_MANCHEGO: number;
							public static VERSION_ORLA: number;
							public static VERSION_PARMESAN: number;
							public static VERSION_QUESO: number;
							public static VERSION_REBLOCHON: number;
							public static VERSION_SAGA: number;
							public static isAtLeastFenacho(param0: number): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module util {
						export class Hex {
							public static class: java.lang.Class<com.google.android.gms.common.util.Hex>;
							public constructor();
							public static bytesToStringUppercase(param0: native.Array<number>, param1: boolean): string;
							public static stringToBytes(param0: string): native.Array<number>;
							public static bytesToStringLowercase(param0: native.Array<number>): string;
							public static bytesToStringUppercase(param0: native.Array<number>): string;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module util {
						export class HexDumpUtils {
							public static class: java.lang.Class<com.google.android.gms.common.util.HexDumpUtils>;
							public constructor();
							public static dump(param0: native.Array<number>, param1: number, param2: number, param3: boolean): string;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module util {
						export class HttpUtils {
							public static class: java.lang.Class<com.google.android.gms.common.util.HttpUtils>;
							public static parse(param0: java.net.URI, param1: string): java.util.Map<string,string>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module util {
						export class IOUtils {
							public static class: java.lang.Class<com.google.android.gms.common.util.IOUtils>;
							public static closeQuietly(param0: globalAndroid.os.ParcelFileDescriptor): void;
							/** @deprecated */
							public static readInputStreamFully(param0: java.io.InputStream): native.Array<number>;
							/** @deprecated */
							public static toByteArray(param0: java.io.InputStream): native.Array<number>;
							/** @deprecated */
							public static readInputStreamFully(param0: java.io.InputStream, param1: boolean): native.Array<number>;
							/** @deprecated */
							public static copyStream(param0: java.io.InputStream, param1: java.io.OutputStream): number;
							/** @deprecated */
							public static copyStream(param0: java.io.InputStream, param1: java.io.OutputStream, param2: boolean, param3: number): number;
							public static closeQuietly(param0: java.io.Closeable): void;
							public static isGzipByteBuffer(param0: native.Array<number>): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module util {
						export class JsonUtils {
							public static class: java.lang.Class<com.google.android.gms.common.util.JsonUtils>;
							public static escapeString(param0: string): string;
							public static areJsonValuesEquivalent(param0: any, param1: any): boolean;
							public static unescapeString(param0: string): string;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module util {
						export class MapUtils {
							public static class: java.lang.Class<com.google.android.gms.common.util.MapUtils>;
							public constructor();
							public static writeStringMapToJson(param0: java.lang.StringBuilder, param1: java.util.HashMap<string,string>): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module util {
						export class MurmurHash3 {
							public static class: java.lang.Class<com.google.android.gms.common.util.MurmurHash3>;
							public static murmurhash3_x86_32(param0: native.Array<number>, param1: number, param2: number, param3: number): number;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module util {
						export class NumberUtils {
							public static class: java.lang.Class<com.google.android.gms.common.util.NumberUtils>;
							public static parseHexLong(param0: string): number;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module util {
						export class PlatformVersion {
							public static class: java.lang.Class<com.google.android.gms.common.util.PlatformVersion>;
							public static isAtLeastJellyBean(): boolean;
							public static isAtLeastLollipop(): boolean;
							public static isAtLeastN(): boolean;
							public static isAtLeastO(): boolean;
							public static isAtLeastJellyBeanMR1(): boolean;
							public static isAtLeastHoneycombMR1(): boolean;
							public static isAtLeastHoneycomb(): boolean;
							public static isAtLeastJellyBeanMR2(): boolean;
							public static isAtLeastP(): boolean;
							public static isAtLeastLollipopMR1(): boolean;
							public static isAtLeastM(): boolean;
							public static isAtLeastIceCreamSandwich(): boolean;
							public static isAtLeastKitKatWatch(): boolean;
							public static isAtLeastKitKat(): boolean;
							public static isAtLeastIceCreamSandwichMR1(): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module util {
						export class Predicate<T>  extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.gms.common.util.Predicate<any>>;
							/**
							 * Constructs a new instance of the com.google.android.gms.common.util.Predicate<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								apply(param0: T): boolean;
							});
							public constructor();
							public apply(param0: T): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module util {
						export class ProcessUtils {
							public static class: java.lang.Class<com.google.android.gms.common.util.ProcessUtils>;
							public static getMyProcessName(): string;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module util {
						export class RetainForClient {
							public static class: java.lang.Class<com.google.android.gms.common.util.RetainForClient>;
							/**
							 * Constructs a new instance of the com.google.android.gms.common.util.RetainForClient interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
							});
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module util {
						export class ScopeUtil {
							public static class: java.lang.Class<com.google.android.gms.common.util.ScopeUtil>;
							public static toScopeString(param0: java.util.Set<com.google.android.gms.common.api.Scope>): native.Array<string>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module util {
						export class SharedPreferencesUtils {
							public static class: java.lang.Class<com.google.android.gms.common.util.SharedPreferencesUtils>;
							/** @deprecated */
							public static publishWorldReadableSharedPreferences(param0: globalAndroid.content.Context, param1: globalAndroid.content.SharedPreferences.Editor, param2: string): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module util {
						export class Strings {
							public static class: java.lang.Class<com.google.android.gms.common.util.Strings>;
							public static isEmptyOrWhitespace(param0: string): boolean;
							public static emptyToNull(param0: string): string;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module util {
						export class UidVerifier {
							public static class: java.lang.Class<com.google.android.gms.common.util.UidVerifier>;
							public static isGooglePlayServicesUid(param0: globalAndroid.content.Context, param1: number): boolean;
							public static uidHasPackageName(param0: globalAndroid.content.Context, param1: number, param2: string): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module util {
						export class VisibleForTesting {
							public static class: java.lang.Class<com.google.android.gms.common.util.VisibleForTesting>;
							/**
							 * Constructs a new instance of the com.google.android.gms.common.util.VisibleForTesting interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
							});
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module util {
						export class WorkSourceUtil {
							public static class: java.lang.Class<com.google.android.gms.common.util.WorkSourceUtil>;
							public static fromPackage(param0: globalAndroid.content.Context, param1: string): globalAndroid.os.WorkSource;
							public static hasWorkSourcePermission(param0: globalAndroid.content.Context): boolean;
							public static getNames(param0: globalAndroid.os.WorkSource): java.util.List<string>;
							public static fromPackageAndModuleExperimentalPi(param0: globalAndroid.content.Context, param1: string, param2: string): globalAndroid.os.WorkSource;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module util {
						export module concurrent {
							export class HandlerExecutor {
								public static class: java.lang.Class<com.google.android.gms.common.util.concurrent.HandlerExecutor>;
								public execute(param0: java.lang.Runnable): void;
								public constructor(param0: globalAndroid.os.Looper);
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module util {
						export module concurrent {
							export class NamedThreadFactory {
								public static class: java.lang.Class<com.google.android.gms.common.util.concurrent.NamedThreadFactory>;
								public constructor(param0: string);
								public newThread(param0: java.lang.Runnable): java.lang.Thread;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module util {
						export module concurrent {
							export class NumberedThreadFactory {
								public static class: java.lang.Class<com.google.android.gms.common.util.concurrent.NumberedThreadFactory>;
								public constructor(param0: string);
								public newThread(param0: java.lang.Runnable): java.lang.Thread;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module util {
						export module concurrent {
							export class zza {
								public static class: java.lang.Class<com.google.android.gms.common.util.concurrent.zza>;
								public constructor(param0: java.lang.Runnable, param1: number);
								public run(): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module util {
						export class zza {
							public static class: java.lang.Class<com.google.android.gms.common.util.zza>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module util {
						export class zzb {
							public static class: java.lang.Class<com.google.android.gms.common.util.zzb>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module util {
						export class zzc {
							public static class: java.lang.Class<com.google.android.gms.common.util.zzc>;
							public static isMainThread(): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module util {
						export class zzd {
							public static class: java.lang.Class<com.google.android.gms.common.util.zzd>;
							public static unescape(param0: string): string;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module wrappers {
						export class InstantApps {
							public static class: java.lang.Class<com.google.android.gms.common.wrappers.InstantApps>;
							public constructor();
							public static isInstantApp(param0: globalAndroid.content.Context): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module wrappers {
						export class PackageManagerWrapper {
							public static class: java.lang.Class<com.google.android.gms.common.wrappers.PackageManagerWrapper>;
							public checkCallingOrSelfPermission(param0: string): number;
							public getPackagesForUid(param0: number): native.Array<string>;
							public checkPermission(param0: string, param1: string): number;
							public getApplicationInfo(param0: string, param1: number): globalAndroid.content.pm.ApplicationInfo;
							public isCallerInstantApp(): boolean;
							public constructor(param0: globalAndroid.content.Context);
							public getPackageInfo(param0: string, param1: number): globalAndroid.content.pm.PackageInfo;
							public getApplicationLabel(param0: string): string;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module wrappers {
						export class Wrappers {
							public static class: java.lang.Class<com.google.android.gms.common.wrappers.Wrappers>;
							public constructor();
							public static packageManager(param0: globalAndroid.content.Context): com.google.android.gms.common.wrappers.PackageManagerWrapper;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export class zaa extends com.google.android.gms.tasks.Continuation<java.util.Map<com.google.android.gms.common.api.internal.zai<any>,string>,java.lang.Void> {
						public static class: java.lang.Class<com.google.android.gms.common.zaa>;
						public then(param0: com.google.android.gms.tasks.Task<any>): any;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export class zza extends globalAndroid.os.Parcelable.Creator<com.google.android.gms.common.ConnectionResult> {
						public static class: java.lang.Class<com.google.android.gms.common.zza>;
						public constructor();
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export class zzb extends globalAndroid.os.Parcelable.Creator<com.google.android.gms.common.Feature> {
						public static class: java.lang.Class<com.google.android.gms.common.zzb>;
						public constructor();
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export class zzc {
						public static class: java.lang.Class<com.google.android.gms.common.zzc>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export class zzd {
						public static class: java.lang.Class<com.google.android.gms.common.zzd>;
						public call(): any;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export abstract class zze extends com.google.android.gms.common.internal.zzj {
						public static class: java.lang.Class<com.google.android.gms.common.zze>;
						public constructor();
						public constructor(param0: native.Array<number>);
						public hashCode(): number;
						public equals(param0: any): boolean;
						public constructor(param0: string);
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export class zzf extends com.google.android.gms.common.zze {
						public static class: java.lang.Class<com.google.android.gms.common.zzf>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export abstract class zzg extends com.google.android.gms.common.zze {
						public static class: java.lang.Class<com.google.android.gms.common.zzg>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export class zzh {
						public static class: java.lang.Class<com.google.android.gms.common.zzh>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export class zzi extends com.google.android.gms.common.zzg {
						public static class: java.lang.Class<com.google.android.gms.common.zzi>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export class zzj extends com.google.android.gms.common.zzg {
						public static class: java.lang.Class<com.google.android.gms.common.zzj>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export class zzk extends com.google.android.gms.common.internal.safeparcel.AbstractSafeParcelable {
						public static class: java.lang.Class<com.google.android.gms.common.zzk>;
						public static CREATOR: any /* globalAndroid.os.Parcelable.Creator<com.google.android.gms.common.zzk>*/;
						public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export class zzl extends java.lang.Object /* globalAndroid.os.Parcelable.Creator<com.google.android.gms.common.zzk>*/ {
						public static class: java.lang.Class<com.google.android.gms.common.zzl>;
						public constructor();
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export class zzm {
						public static class: java.lang.Class<com.google.android.gms.common.zzm>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export class zzn {
						public static class: java.lang.Class<com.google.android.gms.common.zzn>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export class zzo extends com.google.android.gms.common.zzm {
						public static class: java.lang.Class<com.google.android.gms.common.zzo>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module dynamic {
					export abstract class DeferredLifecycleHelper<T>  extends java.lang.Object {
						public static class: java.lang.Class<com.google.android.gms.dynamic.DeferredLifecycleHelper<any>>;
						public constructor();
						public onResume(): void;
						public createDelegate(param0: com.google.android.gms.dynamic.OnDelegateCreatedListener<T>): void;
						public handleGooglePlayUnavailable(param0: globalAndroid.widget.FrameLayout): void;
						public onStop(): void;
						public onLowMemory(): void;
						public onPause(): void;
						public onDestroyView(): void;
						public onDestroy(): void;
						public onInflate(param0: globalAndroid.app.Activity, param1: globalAndroid.os.Bundle, param2: globalAndroid.os.Bundle): void;
						public onCreate(param0: globalAndroid.os.Bundle): void;
						public onCreateView(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: globalAndroid.os.Bundle): globalAndroid.view.View;
						public onSaveInstanceState(param0: globalAndroid.os.Bundle): void;
						public static showGooglePlayUnavailableMessage(param0: globalAndroid.widget.FrameLayout): void;
						public onStart(): void;
						public getDelegate(): T;
					}
					export module DeferredLifecycleHelper {
						export class zaa {
							public static class: java.lang.Class<com.google.android.gms.dynamic.DeferredLifecycleHelper.zaa>;
							/**
							 * Constructs a new instance of the com.google.android.gms.dynamic.DeferredLifecycleHelper$zaa interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								getState(): number;
								zaa(param0: com.google.android.gms.dynamic.LifecycleDelegate): void;
							});
							public constructor();
							public zaa(param0: com.google.android.gms.dynamic.LifecycleDelegate): void;
							public getState(): number;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module dynamic {
					export class FragmentWrapper extends com.google.android.gms.dynamic.IFragmentWrapper.Stub {
						public static class: java.lang.Class<com.google.android.gms.dynamic.FragmentWrapper>;
						public static wrap(param0: globalAndroid.app.Fragment): com.google.android.gms.dynamic.FragmentWrapper;
						public setRetainInstance(param0: boolean): void;
						public startActivityForResult(param0: globalAndroid.content.Intent, param1: number): void;
						public isRemoving(): boolean;
						public setHasOptionsMenu(param0: boolean): void;
						public setMenuVisibility(param0: boolean): void;
						public getRetainInstance(): boolean;
						public getUserVisibleHint(): boolean;
						public isResumed(): boolean;
						public getId(): number;
						public isInLayout(): boolean;
						public getArguments(): globalAndroid.os.Bundle;
						public isHidden(): boolean;
						public startActivity(param0: globalAndroid.content.Intent): void;
						public getTargetRequestCode(): number;
						public isVisible(): boolean;
						public isAdded(): boolean;
						public getTag(): string;
						public isDetached(): boolean;
						public setUserVisibleHint(param0: boolean): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module dynamic {
					export class IFragmentWrapper {
						public static class: java.lang.Class<com.google.android.gms.dynamic.IFragmentWrapper>;
						/**
						 * Constructs a new instance of the com.google.android.gms.dynamic.IFragmentWrapper interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							zzae(): com.google.android.gms.dynamic.IObjectWrapper;
							getArguments(): globalAndroid.os.Bundle;
							getId(): number;
							zzaf(): com.google.android.gms.dynamic.IFragmentWrapper;
							zzag(): com.google.android.gms.dynamic.IObjectWrapper;
							getRetainInstance(): boolean;
							getTag(): string;
							zzah(): com.google.android.gms.dynamic.IFragmentWrapper;
							getTargetRequestCode(): number;
							getUserVisibleHint(): boolean;
							zzai(): com.google.android.gms.dynamic.IObjectWrapper;
							isAdded(): boolean;
							isDetached(): boolean;
							isHidden(): boolean;
							isInLayout(): boolean;
							isRemoving(): boolean;
							isResumed(): boolean;
							isVisible(): boolean;
							zza(param0: com.google.android.gms.dynamic.IObjectWrapper): void;
							setHasOptionsMenu(param0: boolean): void;
							setMenuVisibility(param0: boolean): void;
							setRetainInstance(param0: boolean): void;
							setUserVisibleHint(param0: boolean): void;
							startActivity(param0: globalAndroid.content.Intent): void;
							startActivityForResult(param0: globalAndroid.content.Intent, param1: number): void;
							zzb(param0: com.google.android.gms.dynamic.IObjectWrapper): void;
						});
						public constructor();
						public setRetainInstance(param0: boolean): void;
						public startActivityForResult(param0: globalAndroid.content.Intent, param1: number): void;
						public isRemoving(): boolean;
						public setHasOptionsMenu(param0: boolean): void;
						public setMenuVisibility(param0: boolean): void;
						public getRetainInstance(): boolean;
						public getUserVisibleHint(): boolean;
						public isResumed(): boolean;
						public getId(): number;
						public isInLayout(): boolean;
						public getArguments(): globalAndroid.os.Bundle;
						public isHidden(): boolean;
						public startActivity(param0: globalAndroid.content.Intent): void;
						public getTargetRequestCode(): number;
						public isVisible(): boolean;
						public isAdded(): boolean;
						public getTag(): string;
						public isDetached(): boolean;
						public setUserVisibleHint(param0: boolean): void;
					}
					export module IFragmentWrapper {
						export abstract class Stub extends com.google.android.gms.internal.common.zzb implements com.google.android.gms.dynamic.IFragmentWrapper {
							public static class: java.lang.Class<com.google.android.gms.dynamic.IFragmentWrapper.Stub>;
							public constructor();
							public static asInterface(param0: globalAndroid.os.IBinder): com.google.android.gms.dynamic.IFragmentWrapper;
							public isResumed(): boolean;
							public isAdded(): boolean;
							public startActivityForResult(param0: globalAndroid.content.Intent, param1: number): void;
							public isVisible(): boolean;
							public isDetached(): boolean;
							public isRemoving(): boolean;
							public getTag(): string;
							public startActivity(param0: globalAndroid.content.Intent): void;
							public setRetainInstance(param0: boolean): void;
							public setUserVisibleHint(param0: boolean): void;
							public getArguments(): globalAndroid.os.Bundle;
							public isHidden(): boolean;
							public getRetainInstance(): boolean;
							public getUserVisibleHint(): boolean;
							public constructor(param0: string);
							public setHasOptionsMenu(param0: boolean): void;
							public setMenuVisibility(param0: boolean): void;
							public getId(): number;
							public getTargetRequestCode(): number;
							public isInLayout(): boolean;
						}
						export module Stub {
							export class zza extends com.google.android.gms.internal.common.zza implements com.google.android.gms.dynamic.IFragmentWrapper {
								public static class: java.lang.Class<com.google.android.gms.dynamic.IFragmentWrapper.Stub.zza>;
								public setRetainInstance(param0: boolean): void;
								public isRemoving(): boolean;
								public startActivity(param0: globalAndroid.content.Intent): void;
								public getArguments(): globalAndroid.os.Bundle;
								public getRetainInstance(): boolean;
								public isResumed(): boolean;
								public startActivityForResult(param0: globalAndroid.content.Intent, param1: number): void;
								public setHasOptionsMenu(param0: boolean): void;
								public setMenuVisibility(param0: boolean): void;
								public isHidden(): boolean;
								public isInLayout(): boolean;
								public getId(): number;
								public getUserVisibleHint(): boolean;
								public getTag(): string;
								public getTargetRequestCode(): number;
								public isAdded(): boolean;
								public isDetached(): boolean;
								public isVisible(): boolean;
								public setUserVisibleHint(param0: boolean): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module dynamic {
					export class IObjectWrapper {
						public static class: java.lang.Class<com.google.android.gms.dynamic.IObjectWrapper>;
						/**
						 * Constructs a new instance of the com.google.android.gms.dynamic.IObjectWrapper interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
						});
						public constructor();
					}
					export module IObjectWrapper {
						export class Stub extends com.google.android.gms.internal.common.zzb implements com.google.android.gms.dynamic.IObjectWrapper {
							public static class: java.lang.Class<com.google.android.gms.dynamic.IObjectWrapper.Stub>;
							public constructor();
							public static asInterface(param0: globalAndroid.os.IBinder): com.google.android.gms.dynamic.IObjectWrapper;
							public constructor(param0: string);
						}
						export module Stub {
							export class zza extends com.google.android.gms.internal.common.zza implements com.google.android.gms.dynamic.IObjectWrapper {
								public static class: java.lang.Class<com.google.android.gms.dynamic.IObjectWrapper.Stub.zza>;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module dynamic {
					export class LifecycleDelegate {
						public static class: java.lang.Class<com.google.android.gms.dynamic.LifecycleDelegate>;
						/**
						 * Constructs a new instance of the com.google.android.gms.dynamic.LifecycleDelegate interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onInflate(param0: globalAndroid.app.Activity, param1: globalAndroid.os.Bundle, param2: globalAndroid.os.Bundle): void;
							onCreate(param0: globalAndroid.os.Bundle): void;
							onCreateView(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: globalAndroid.os.Bundle): globalAndroid.view.View;
							onStart(): void;
							onResume(): void;
							onPause(): void;
							onStop(): void;
							onDestroyView(): void;
							onDestroy(): void;
							onLowMemory(): void;
							onSaveInstanceState(param0: globalAndroid.os.Bundle): void;
						});
						public constructor();
						public onDestroyView(): void;
						public onDestroy(): void;
						public onInflate(param0: globalAndroid.app.Activity, param1: globalAndroid.os.Bundle, param2: globalAndroid.os.Bundle): void;
						public onResume(): void;
						public onCreate(param0: globalAndroid.os.Bundle): void;
						public onCreateView(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: globalAndroid.os.Bundle): globalAndroid.view.View;
						public onSaveInstanceState(param0: globalAndroid.os.Bundle): void;
						public onStop(): void;
						public onLowMemory(): void;
						public onStart(): void;
						public onPause(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module dynamic {
					export class ObjectWrapper<T>  extends com.google.android.gms.dynamic.IObjectWrapper.Stub {
						public static class: java.lang.Class<com.google.android.gms.dynamic.ObjectWrapper<any>>;
						public static unwrap(param0: com.google.android.gms.dynamic.IObjectWrapper): any;
						public static wrap(param0: any): com.google.android.gms.dynamic.IObjectWrapper;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module dynamic {
					export class OnDelegateCreatedListener<T>  extends java.lang.Object {
						public static class: java.lang.Class<com.google.android.gms.dynamic.OnDelegateCreatedListener<any>>;
						/**
						 * Constructs a new instance of the com.google.android.gms.dynamic.OnDelegateCreatedListener<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onDelegateCreated(param0: T): void;
						});
						public constructor();
						public onDelegateCreated(param0: T): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module dynamic {
					export abstract class RemoteCreator<T>  extends java.lang.Object {
						public static class: java.lang.Class<com.google.android.gms.dynamic.RemoteCreator<any>>;
						public getRemoteCreator(param0: globalAndroid.os.IBinder): T;
						public getRemoteCreatorInstance(param0: globalAndroid.content.Context): T;
						public constructor(param0: string);
					}
					export module RemoteCreator {
						export class RemoteCreatorException {
							public static class: java.lang.Class<com.google.android.gms.dynamic.RemoteCreator.RemoteCreatorException>;
							public constructor(param0: string);
							public constructor(param0: string, param1: java.lang.Throwable);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module dynamic {
					export class SupportFragmentWrapper extends com.google.android.gms.dynamic.IFragmentWrapper.Stub {
						public static class: java.lang.Class<com.google.android.gms.dynamic.SupportFragmentWrapper>;
						public setRetainInstance(param0: boolean): void;
						public startActivityForResult(param0: globalAndroid.content.Intent, param1: number): void;
						public isRemoving(): boolean;
						public setHasOptionsMenu(param0: boolean): void;
						public setMenuVisibility(param0: boolean): void;
						public getRetainInstance(): boolean;
						public getUserVisibleHint(): boolean;
						public isResumed(): boolean;
						public getId(): number;
						public isInLayout(): boolean;
						public getArguments(): globalAndroid.os.Bundle;
						public isHidden(): boolean;
						public startActivity(param0: globalAndroid.content.Intent): void;
						public getTargetRequestCode(): number;
						public isVisible(): boolean;
						public isAdded(): boolean;
						public getTag(): string;
						public isDetached(): boolean;
						public static wrap(param0: globalAndroid.support.v4.app.Fragment): com.google.android.gms.dynamic.SupportFragmentWrapper;
						public setUserVisibleHint(param0: boolean): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module dynamic {
					export class zaa extends com.google.android.gms.dynamic.OnDelegateCreatedListener<any> {
						public static class: java.lang.Class<com.google.android.gms.dynamic.zaa>;
						public onDelegateCreated(param0: any): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module dynamic {
					export class zab extends com.google.android.gms.dynamic.DeferredLifecycleHelper.zaa {
						public static class: java.lang.Class<com.google.android.gms.dynamic.zab>;
						public getState(): number;
						public zaa(param0: com.google.android.gms.dynamic.LifecycleDelegate): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module dynamic {
					export class zac extends com.google.android.gms.dynamic.DeferredLifecycleHelper.zaa {
						public static class: java.lang.Class<com.google.android.gms.dynamic.zac>;
						public getState(): number;
						public zaa(param0: com.google.android.gms.dynamic.LifecycleDelegate): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module dynamic {
					export class zad extends com.google.android.gms.dynamic.DeferredLifecycleHelper.zaa {
						public static class: java.lang.Class<com.google.android.gms.dynamic.zad>;
						public getState(): number;
						public zaa(param0: com.google.android.gms.dynamic.LifecycleDelegate): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module dynamic {
					export class zae {
						public static class: java.lang.Class<com.google.android.gms.dynamic.zae>;
						public onClick(param0: globalAndroid.view.View): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module dynamic {
					export class zaf extends com.google.android.gms.dynamic.DeferredLifecycleHelper.zaa {
						public static class: java.lang.Class<com.google.android.gms.dynamic.zaf>;
						public getState(): number;
						public zaa(param0: com.google.android.gms.dynamic.LifecycleDelegate): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module dynamic {
					export class zag extends com.google.android.gms.dynamic.DeferredLifecycleHelper.zaa {
						public static class: java.lang.Class<com.google.android.gms.dynamic.zag>;
						public getState(): number;
						public zaa(param0: com.google.android.gms.dynamic.LifecycleDelegate): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module dynamite {
					export class DynamiteModule {
						public static class: java.lang.Class<com.google.android.gms.dynamite.DynamiteModule>;
						public static PREFER_REMOTE: com.google.android.gms.dynamite.DynamiteModule.VersionPolicy;
						public static PREFER_LOCAL: com.google.android.gms.dynamite.DynamiteModule.VersionPolicy;
						public static PREFER_HIGHEST_OR_LOCAL_VERSION: com.google.android.gms.dynamite.DynamiteModule.VersionPolicy;
						public static PREFER_HIGHEST_OR_LOCAL_VERSION_NO_FORCE_STAGING: com.google.android.gms.dynamite.DynamiteModule.VersionPolicy;
						public static PREFER_HIGHEST_OR_REMOTE_VERSION: com.google.android.gms.dynamite.DynamiteModule.VersionPolicy;
						public static getRemoteVersion(param0: globalAndroid.content.Context, param1: string): number;
						public static getLocalVersion(param0: globalAndroid.content.Context, param1: string): number;
						public getModuleContext(): globalAndroid.content.Context;
						public instantiate(param0: string): globalAndroid.os.IBinder;
						public static load(param0: globalAndroid.content.Context, param1: com.google.android.gms.dynamite.DynamiteModule.VersionPolicy, param2: string): com.google.android.gms.dynamite.DynamiteModule;
					}
					export module DynamiteModule {
						export class DynamiteLoaderClassLoader {
							public static class: java.lang.Class<com.google.android.gms.dynamite.DynamiteModule.DynamiteLoaderClassLoader>;
							public static sClassLoader: java.lang.ClassLoader;
							public constructor();
						}
						export class LoadingException {
							public static class: java.lang.Class<com.google.android.gms.dynamite.DynamiteModule.LoadingException>;
						}
						export class VersionPolicy {
							public static class: java.lang.Class<com.google.android.gms.dynamite.DynamiteModule.VersionPolicy>;
							/**
							 * Constructs a new instance of the com.google.android.gms.dynamite.DynamiteModule$VersionPolicy interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								zza(param0: globalAndroid.content.Context, param1: string, param2: any /* com.google.android.gms.dynamite.DynamiteModule.VersionPolicy.zza*/): any /* com.google.android.gms.dynamite.DynamiteModule.VersionPolicy.zzb*/;
							});
							public constructor();
						}
						export module VersionPolicy {
							export class zza {
								public static class: java.lang.Class<com.google.android.gms.dynamite.DynamiteModule.VersionPolicy.zza>;
								/**
								 * Constructs a new instance of the com.google.android.gms.dynamite.DynamiteModule$VersionPolicy$zza interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									zza(param0: globalAndroid.content.Context, param1: string, param2: boolean): number;
									getLocalVersion(param0: globalAndroid.content.Context, param1: string): number;
								});
								public constructor();
								public getLocalVersion(param0: globalAndroid.content.Context, param1: string): number;
							}
							export class zzb {
								public static class: java.lang.Class<com.google.android.gms.dynamite.DynamiteModule.VersionPolicy.zzb>;
								public constructor();
							}
						}
						export class zza {
							public static class: java.lang.Class<com.google.android.gms.dynamite.DynamiteModule.zza>;
						}
						export class zzb extends com.google.android.gms.dynamite.DynamiteModule.VersionPolicy.zza {
							public static class: java.lang.Class<com.google.android.gms.dynamite.DynamiteModule.zzb>;
							public constructor(param0: number, param1: number);
							public getLocalVersion(param0: globalAndroid.content.Context, param1: string): number;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module dynamite {
					export class zza extends com.google.android.gms.dynamite.DynamiteModule.VersionPolicy.zza {
						public static class: java.lang.Class<com.google.android.gms.dynamite.zza>;
						public getLocalVersion(param0: globalAndroid.content.Context, param1: string): number;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module dynamite {
					export class zzb extends com.google.android.gms.dynamite.DynamiteModule.VersionPolicy {
						public static class: java.lang.Class<com.google.android.gms.dynamite.zzb>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module dynamite {
					export class zzc extends com.google.android.gms.dynamite.DynamiteModule.VersionPolicy {
						public static class: java.lang.Class<com.google.android.gms.dynamite.zzc>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module dynamite {
					export class zzd extends com.google.android.gms.dynamite.DynamiteModule.VersionPolicy {
						public static class: java.lang.Class<com.google.android.gms.dynamite.zzd>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module dynamite {
					export class zze extends com.google.android.gms.dynamite.DynamiteModule.VersionPolicy {
						public static class: java.lang.Class<com.google.android.gms.dynamite.zze>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module dynamite {
					export class zzf extends com.google.android.gms.dynamite.DynamiteModule.VersionPolicy {
						public static class: java.lang.Class<com.google.android.gms.dynamite.zzf>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module dynamite {
					export class zzg extends com.google.android.gms.dynamite.DynamiteModule.VersionPolicy {
						public static class: java.lang.Class<com.google.android.gms.dynamite.zzg>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module dynamite {
					export class zzh {
						public static class: java.lang.Class<com.google.android.gms.dynamite.zzh>;
						public loadClass(param0: string, param1: boolean): java.lang.Class<any>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module dynamite {
					export class zzi {
						public static class: java.lang.Class<com.google.android.gms.dynamite.zzi>;
						/**
						 * Constructs a new instance of the com.google.android.gms.dynamite.zzi interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							zza(param0: com.google.android.gms.dynamic.IObjectWrapper, param1: string, param2: number): com.google.android.gms.dynamic.IObjectWrapper;
							zza(param0: com.google.android.gms.dynamic.IObjectWrapper, param1: string, param2: boolean): number;
							zzb(param0: com.google.android.gms.dynamic.IObjectWrapper, param1: string, param2: number): com.google.android.gms.dynamic.IObjectWrapper;
							zzb(param0: com.google.android.gms.dynamic.IObjectWrapper, param1: string, param2: boolean): number;
							zzak(): number;
						});
						public constructor();
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module dynamite {
					export class zzj extends com.google.android.gms.internal.common.zza implements com.google.android.gms.dynamite.zzi {
						public static class: java.lang.Class<com.google.android.gms.dynamite.zzj>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module dynamite {
					export class zzk {
						public static class: java.lang.Class<com.google.android.gms.dynamite.zzk>;
						/**
						 * Constructs a new instance of the com.google.android.gms.dynamite.zzk interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							zza(param0: com.google.android.gms.dynamic.IObjectWrapper, param1: string, param2: number, param3: com.google.android.gms.dynamic.IObjectWrapper): com.google.android.gms.dynamic.IObjectWrapper;
							zzb(param0: com.google.android.gms.dynamic.IObjectWrapper, param1: string, param2: number, param3: com.google.android.gms.dynamic.IObjectWrapper): com.google.android.gms.dynamic.IObjectWrapper;
						});
						public constructor();
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module dynamite {
					export class zzl extends com.google.android.gms.internal.common.zza implements com.google.android.gms.dynamite.zzk {
						public static class: java.lang.Class<com.google.android.gms.dynamite.zzl>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module base {
						export class zaa {
							public static class: java.lang.Class<com.google.android.gms.internal.base.zaa>;
							public constructor(param0: globalAndroid.os.IBinder, param1: string);
							public asBinder(): globalAndroid.os.IBinder;
							public zaa(param0: number, param1: globalAndroid.os.Parcel): globalAndroid.os.Parcel;
							public zac(param0: number, param1: globalAndroid.os.Parcel): void;
							public zaa(): globalAndroid.os.Parcel;
							public zab(param0: number, param1: globalAndroid.os.Parcel): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module base {
						export class zab {
							public static class: java.lang.Class<com.google.android.gms.internal.base.zab>;
							public asBinder(): globalAndroid.os.IBinder;
							public constructor(param0: string);
							public onTransact(param0: number, param1: globalAndroid.os.Parcel, param2: globalAndroid.os.Parcel, param3: number): boolean;
							public dispatchTransaction(param0: number, param1: globalAndroid.os.Parcel, param2: globalAndroid.os.Parcel, param3: number): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module base {
						export class zac {
							public static class: java.lang.Class<com.google.android.gms.internal.base.zac>;
							public static writeBoolean(param0: globalAndroid.os.Parcel, param1: boolean): void;
							public static zaa(param0: globalAndroid.os.Parcel, param1: globalAndroid.os.Parcelable.Creator): globalAndroid.os.Parcelable;
							public static zaa(param0: globalAndroid.os.Parcel, param1: globalAndroid.os.Parcelable): void;
							public static zaa(param0: globalAndroid.os.Parcel, param1: globalAndroid.os.IInterface): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module base {
						export class zad {
							public static class: java.lang.Class<com.google.android.gms.internal.base.zad>;
							/**
							 * Constructs a new instance of the com.google.android.gms.internal.base.zad interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
							});
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module base {
						export class zae {
							public static class: java.lang.Class<com.google.android.gms.internal.base.zae>;
							public invalidateDrawable(param0: globalAndroid.graphics.drawable.Drawable): void;
							public getConstantState(): globalAndroid.graphics.drawable.Drawable.ConstantState;
							public unscheduleDrawable(param0: globalAndroid.graphics.drawable.Drawable, param1: java.lang.Runnable): void;
							public startTransition(param0: number): void;
							public onBoundsChange(param0: globalAndroid.graphics.Rect): void;
							public draw(param0: globalAndroid.graphics.Canvas): void;
							public setColorFilter(param0: globalAndroid.graphics.ColorFilter): void;
							public getIntrinsicHeight(): number;
							public scheduleDrawable(param0: globalAndroid.graphics.drawable.Drawable, param1: java.lang.Runnable, param2: number): void;
							public getChangingConfigurations(): number;
							public mutate(): globalAndroid.graphics.drawable.Drawable;
							public setAlpha(param0: number): void;
							public zacf(): globalAndroid.graphics.drawable.Drawable;
							public constructor(param0: globalAndroid.graphics.drawable.Drawable, param1: globalAndroid.graphics.drawable.Drawable);
							public getIntrinsicWidth(): number;
							public getOpacity(): number;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module base {
						export class zaf {
							public static class: java.lang.Class<com.google.android.gms.internal.base.zaf>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module base {
						export class zag {
							public static class: java.lang.Class<com.google.android.gms.internal.base.zag>;
							public setAlpha(param0: number): void;
							public getConstantState(): globalAndroid.graphics.drawable.Drawable.ConstantState;
							public draw(param0: globalAndroid.graphics.Canvas): void;
							public getOpacity(): number;
							public setColorFilter(param0: globalAndroid.graphics.ColorFilter): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module base {
						export class zah {
							public static class: java.lang.Class<com.google.android.gms.internal.base.zah>;
							public newDrawable(): globalAndroid.graphics.drawable.Drawable;
							public getChangingConfigurations(): number;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module base {
						export class zai {
							public static class: java.lang.Class<com.google.android.gms.internal.base.zai>;
							public newDrawable(): globalAndroid.graphics.drawable.Drawable;
							public getChangingConfigurations(): number;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module base {
						export class zaj {
							public static class: java.lang.Class<com.google.android.gms.internal.base.zaj>;
							public onMeasure(param0: number, param1: number): void;
							public static zach(): number;
							public onDraw(param0: globalAndroid.graphics.Canvas): void;
							public static zaa(param0: globalAndroid.net.Uri): void;
							public static zai(param0: number): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module base {
						export class zak extends globalAndroid.support.v4.util.LruCache<any,globalAndroid.graphics.drawable.Drawable> {
							public static class: java.lang.Class<com.google.android.gms.internal.base.zak>;
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module base {
						export class zal {
							public static class: java.lang.Class<com.google.android.gms.internal.base.zal>;
							public constructor();
							public constructor(param0: globalAndroid.os.Looper);
							public constructor(param0: globalAndroid.os.Looper, param1: globalAndroid.os.Handler.Callback);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module base {
						export class zam {
							public static class: java.lang.Class<com.google.android.gms.internal.base.zam>;
							/**
							 * Constructs a new instance of the com.google.android.gms.internal.base.zam interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
							});
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module common {
						export class zza {
							public static class: java.lang.Class<com.google.android.gms.internal.common.zza>;
							public constructor(param0: globalAndroid.os.IBinder, param1: string);
							public asBinder(): globalAndroid.os.IBinder;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module common {
						export class zzb {
							public static class: java.lang.Class<com.google.android.gms.internal.common.zzb>;
							public asBinder(): globalAndroid.os.IBinder;
							public constructor(param0: string);
							public onTransact(param0: number, param1: globalAndroid.os.Parcel, param2: globalAndroid.os.Parcel, param3: number): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module common {
						export class zzc {
							public static class: java.lang.Class<com.google.android.gms.internal.common.zzc>;
							public static writeBoolean(param0: globalAndroid.os.Parcel, param1: boolean): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module common {
						export class zzd {
							public static class: java.lang.Class<com.google.android.gms.internal.common.zzd>;
							/**
							 * Constructs a new instance of the com.google.android.gms.internal.common.zzd interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
							});
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module common {
						export class zze {
							public static class: java.lang.Class<com.google.android.gms.internal.common.zze>;
							public constructor();
							public constructor(param0: globalAndroid.os.Looper);
							public constructor(param0: globalAndroid.os.Looper, param1: globalAndroid.os.Handler.Callback);
							public dispatchMessage(param0: globalAndroid.os.Message): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module common {
						export class zzf {
							public static class: java.lang.Class<com.google.android.gms.internal.common.zzf>;
							/**
							 * Constructs a new instance of the com.google.android.gms.internal.common.zzf interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
							});
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module location {
						export class zza {
							public static class: java.lang.Class<com.google.android.gms.internal.location.zza>;
							public constructor(param0: globalAndroid.os.IBinder, param1: string);
							public asBinder(): globalAndroid.os.IBinder;
							public obtainAndWriteInterfaceToken(): globalAndroid.os.Parcel;
							public transactAndReadException(param0: number, param1: globalAndroid.os.Parcel): globalAndroid.os.Parcel;
							public transactOneway(param0: number, param1: globalAndroid.os.Parcel): void;
							public transactAndReadExceptionReturnVoid(param0: number, param1: globalAndroid.os.Parcel): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module location {
						export class zzaa extends com.google.android.gms.internal.location.zzab {
							public static class: java.lang.Class<com.google.android.gms.internal.location.zzaa>;
							public setResult(param0: any): void;
							public setFailedResult(param0: com.google.android.gms.common.api.Status): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module location {
						export abstract class zzab extends com.google.android.gms.location.LocationServices.zza<com.google.android.gms.common.api.Status> {
							public static class: java.lang.Class<com.google.android.gms.internal.location.zzab>;
							public constructor();
							public setResult(param0: any): void;
							public constructor(param0: com.google.android.gms.common.api.GoogleApiClient);
							public setFailedResult(param0: com.google.android.gms.common.api.Status): void;
							/** @deprecated */
							public constructor(param0: globalAndroid.os.Looper);
							/** @deprecated */
							public constructor(param0: com.google.android.gms.common.api.Api.AnyClientKey<any>, param1: com.google.android.gms.common.api.GoogleApiClient);
							public constructor(param0: com.google.android.gms.common.api.internal.BasePendingResult.CallbackHandler<any>);
							public constructor(param0: com.google.android.gms.common.api.Api<any>, param1: com.google.android.gms.common.api.GoogleApiClient);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module location {
						export class zzac extends com.google.android.gms.internal.location.zzak {
							public static class: java.lang.Class<com.google.android.gms.internal.location.zzac>;
							public constructor();
							public constructor(param0: com.google.android.gms.common.api.internal.BaseImplementation.ResultHolder<com.google.android.gms.common.api.Status>);
							public constructor(param0: string);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module location {
						export class zzad extends com.google.android.gms.common.internal.safeparcel.AbstractSafeParcelable implements com.google.android.gms.common.api.Result {
							public static class: java.lang.Class<com.google.android.gms.internal.location.zzad>;
							public static CREATOR: any /* globalAndroid.os.Parcelable.Creator<com.google.android.gms.internal.location.zzad>*/;
							public constructor();
							public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
							public getStatus(): com.google.android.gms.common.api.Status;
							public constructor(param0: com.google.android.gms.common.api.Status);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module location {
						export class zzae extends java.lang.Object /* globalAndroid.os.Parcelable.Creator<com.google.android.gms.internal.location.zzad>*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.location.zzae>;
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module location {
						export class zzaf extends com.google.android.gms.location.GeofencingApi {
							public static class: java.lang.Class<com.google.android.gms.internal.location.zzaf>;
							public constructor();
							public addGeofences(param0: com.google.android.gms.common.api.GoogleApiClient, param1: com.google.android.gms.location.GeofencingRequest, param2: globalAndroid.app.PendingIntent): com.google.android.gms.common.api.PendingResult<com.google.android.gms.common.api.Status>;
							public removeGeofences(param0: com.google.android.gms.common.api.GoogleApiClient, param1: java.util.List<string>): com.google.android.gms.common.api.PendingResult<com.google.android.gms.common.api.Status>;
							/** @deprecated */
							public addGeofences(param0: com.google.android.gms.common.api.GoogleApiClient, param1: java.util.List<com.google.android.gms.location.Geofence>, param2: globalAndroid.app.PendingIntent): com.google.android.gms.common.api.PendingResult<com.google.android.gms.common.api.Status>;
							public removeGeofences(param0: com.google.android.gms.common.api.GoogleApiClient, param1: globalAndroid.app.PendingIntent): com.google.android.gms.common.api.PendingResult<com.google.android.gms.common.api.Status>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module location {
						export class zzag extends com.google.android.gms.internal.location.zzai {
							public static class: java.lang.Class<com.google.android.gms.internal.location.zzag>;
							public setResult(param0: any): void;
							public setFailedResult(param0: com.google.android.gms.common.api.Status): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module location {
						export class zzah extends com.google.android.gms.internal.location.zzai {
							public static class: java.lang.Class<com.google.android.gms.internal.location.zzah>;
							public setResult(param0: any): void;
							public setFailedResult(param0: com.google.android.gms.common.api.Status): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module location {
						export abstract class zzai extends com.google.android.gms.location.LocationServices.zza<com.google.android.gms.common.api.Status> {
							public static class: java.lang.Class<com.google.android.gms.internal.location.zzai>;
							public constructor();
							public setResult(param0: any): void;
							public constructor(param0: com.google.android.gms.common.api.GoogleApiClient);
							public setFailedResult(param0: com.google.android.gms.common.api.Status): void;
							/** @deprecated */
							public constructor(param0: globalAndroid.os.Looper);
							/** @deprecated */
							public constructor(param0: com.google.android.gms.common.api.Api.AnyClientKey<any>, param1: com.google.android.gms.common.api.GoogleApiClient);
							public constructor(param0: com.google.android.gms.common.api.internal.BasePendingResult.CallbackHandler<any>);
							public constructor(param0: com.google.android.gms.common.api.Api<any>, param1: com.google.android.gms.common.api.GoogleApiClient);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module location {
						export class zzaj {
							public static class: java.lang.Class<com.google.android.gms.internal.location.zzaj>;
							/**
							 * Constructs a new instance of the com.google.android.gms.internal.location.zzaj interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								zza(param0: any /* com.google.android.gms.internal.location.zzad*/): void;
							});
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module location {
						export abstract class zzak extends com.google.android.gms.internal.location.zzb implements com.google.android.gms.internal.location.zzaj {
							public static class: java.lang.Class<com.google.android.gms.internal.location.zzak>;
							public constructor();
							public constructor(param0: string);
							public dispatchTransaction(param0: number, param1: globalAndroid.os.Parcel, param2: globalAndroid.os.Parcel, param3: number): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module location {
						export class zzal extends com.google.android.gms.internal.location.zza implements com.google.android.gms.internal.location.zzaj {
							public static class: java.lang.Class<com.google.android.gms.internal.location.zzal>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module location {
						export class zzam {
							public static class: java.lang.Class<com.google.android.gms.internal.location.zzam>;
							/**
							 * Constructs a new instance of the com.google.android.gms.internal.location.zzam interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								zza(param0: number, param1: native.Array<string>): void;
								zzb(param0: number, param1: native.Array<string>): void;
								zza(param0: number, param1: globalAndroid.app.PendingIntent): void;
							});
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module location {
						export abstract class zzan extends com.google.android.gms.internal.location.zzb implements com.google.android.gms.internal.location.zzam {
							public static class: java.lang.Class<com.google.android.gms.internal.location.zzan>;
							public constructor();
							public constructor(param0: string);
							public dispatchTransaction(param0: number, param1: globalAndroid.os.Parcel, param2: globalAndroid.os.Parcel, param3: number): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module location {
						export class zzao {
							public static class: java.lang.Class<com.google.android.gms.internal.location.zzao>;
							/**
							 * Constructs a new instance of the com.google.android.gms.internal.location.zzao interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								zza(param0: com.google.android.gms.location.GeofencingRequest, param1: globalAndroid.app.PendingIntent, param2: any /* com.google.android.gms.internal.location.zzam*/): void;
								zza(param0: any /* com.google.android.gms.location.zzal*/, param1: any /* com.google.android.gms.internal.location.zzam*/): void;
								zza(param0: number, param1: boolean, param2: globalAndroid.app.PendingIntent): void;
								zza(param0: com.google.android.gms.location.ActivityTransitionRequest, param1: globalAndroid.app.PendingIntent, param2: com.google.android.gms.common.api.internal.IStatusCallback): void;
								zza(param0: globalAndroid.app.PendingIntent, param1: com.google.android.gms.common.api.internal.IStatusCallback): void;
								zzb(param0: globalAndroid.app.PendingIntent): void;
								zza(param0: any /* com.google.android.gms.internal.location.zzbf*/): void;
								zza(param0: boolean): void;
								zza(param0: globalAndroid.location.Location): void;
								zza(param0: string): globalAndroid.location.Location;
								zza(param0: any /* com.google.android.gms.internal.location.zzaj*/): void;
								zzb(param0: string): com.google.android.gms.location.LocationAvailability;
								zza(param0: com.google.android.gms.location.LocationSettingsRequest, param1: any /* com.google.android.gms.internal.location.zzaq*/, param2: string): void;
								zza(param0: any /* com.google.android.gms.internal.location.zzo*/): void;
							});
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module location {
						export class zzap extends com.google.android.gms.internal.location.zza implements com.google.android.gms.internal.location.zzao {
							public static class: java.lang.Class<com.google.android.gms.internal.location.zzap>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module location {
						export class zzaq {
							public static class: java.lang.Class<com.google.android.gms.internal.location.zzaq>;
							/**
							 * Constructs a new instance of the com.google.android.gms.internal.location.zzaq interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								zza(param0: com.google.android.gms.location.LocationSettingsResult): void;
							});
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module location {
						export abstract class zzar extends com.google.android.gms.internal.location.zzb implements com.google.android.gms.internal.location.zzaq {
							public static class: java.lang.Class<com.google.android.gms.internal.location.zzar>;
							public constructor();
							public constructor(param0: string);
							public dispatchTransaction(param0: number, param1: globalAndroid.os.Parcel, param2: globalAndroid.os.Parcel, param3: number): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module location {
						export class zzas {
							public static class: java.lang.Class<com.google.android.gms.internal.location.zzas>;
							public getLastLocation(): globalAndroid.location.Location;
							public removeAllListeners(): void;
							public constructor(param0: globalAndroid.content.Context, param1: any /* com.google.android.gms.internal.location.zzbj<com.google.android.gms.internal.location.zzao>*/);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module location {
						export class zzat extends com.google.android.gms.location.zzv {
							public static class: java.lang.Class<com.google.android.gms.internal.location.zzat>;
							public onLocationResult(param0: com.google.android.gms.location.LocationResult): void;
							public onLocationAvailability(param0: com.google.android.gms.location.LocationAvailability): void;
							public release(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module location {
						export class zzau extends com.google.android.gms.common.api.internal.ListenerHolder.Notifier<com.google.android.gms.location.LocationCallback> {
							public static class: java.lang.Class<com.google.android.gms.internal.location.zzau>;
							public onNotifyListenerFailed(): void;
							public notifyListener(param0: any): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module location {
						export class zzav extends com.google.android.gms.common.api.internal.ListenerHolder.Notifier<com.google.android.gms.location.LocationCallback> {
							public static class: java.lang.Class<com.google.android.gms.internal.location.zzav>;
							public onNotifyListenerFailed(): void;
							public notifyListener(param0: any): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module location {
						export class zzaw extends com.google.android.gms.location.zzs {
							public static class: java.lang.Class<com.google.android.gms.internal.location.zzaw>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module location {
						export class zzax extends com.google.android.gms.location.zzy {
							public static class: java.lang.Class<com.google.android.gms.internal.location.zzax>;
							public release(): void;
							public onLocationChanged(param0: globalAndroid.location.Location): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module location {
						export class zzay extends com.google.android.gms.common.api.internal.ListenerHolder.Notifier<com.google.android.gms.location.LocationListener> {
							public static class: java.lang.Class<com.google.android.gms.internal.location.zzay>;
							public onNotifyListenerFailed(): void;
							public notifyListener(param0: any): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module location {
						export class zzaz extends com.google.android.gms.internal.location.zzk {
							public static class: java.lang.Class<com.google.android.gms.internal.location.zzaz>;
							public requiresGooglePlayServices(): boolean;
							public getServiceBrokerBinder(): globalAndroid.os.IBinder;
							public dump(param0: string, param1: java.io.FileDescriptor, param2: java.io.PrintWriter, param3: native.Array<string>): void;
							public getAvailableFeatures(): native.Array<com.google.android.gms.common.Feature>;
							public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.os.Looper, param2: com.google.android.gms.common.internal.GmsClientSupervisor, param3: com.google.android.gms.common.GoogleApiAvailabilityLight, param4: number, param5: com.google.android.gms.common.internal.BaseGmsClient.BaseConnectionCallbacks, param6: com.google.android.gms.common.internal.BaseGmsClient.BaseOnConnectionFailedListener, param7: string);
							public getEndpointPackageName(): string;
							public getSignInIntent(): globalAndroid.content.Intent;
							public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.os.Looper, param2: number, param3: com.google.android.gms.common.internal.ClientSettings);
							public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.os.Handler, param2: number, param3: com.google.android.gms.common.internal.ClientSettings);
							public getConnectionHint(): globalAndroid.os.Bundle;
							public requiresAccount(): boolean;
							public disconnect(): void;
							public isConnected(): boolean;
							public providesSignIn(): boolean;
							public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.os.Looper, param2: com.google.android.gms.common.api.GoogleApiClient.ConnectionCallbacks, param3: com.google.android.gms.common.api.GoogleApiClient.OnConnectionFailedListener, param4: string, param5: com.google.android.gms.common.internal.ClientSettings);
							public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.os.Looper, param2: number, param3: com.google.android.gms.common.internal.BaseGmsClient.BaseConnectionCallbacks, param4: com.google.android.gms.common.internal.BaseGmsClient.BaseOnConnectionFailedListener, param5: string);
							public isConnecting(): boolean;
							public getLastLocation(): globalAndroid.location.Location;
							public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.os.Looper, param2: com.google.android.gms.common.api.GoogleApiClient.ConnectionCallbacks, param3: com.google.android.gms.common.api.GoogleApiClient.OnConnectionFailedListener, param4: string);
							public getMinApkVersion(): number;
							public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.os.Looper, param2: number, param3: com.google.android.gms.common.internal.ClientSettings, param4: com.google.android.gms.common.api.GoogleApiClient.ConnectionCallbacks, param5: com.google.android.gms.common.api.GoogleApiClient.OnConnectionFailedListener);
							public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.os.Looper, param2: com.google.android.gms.common.internal.GmsClientSupervisor, param3: com.google.android.gms.common.GoogleApiAvailability, param4: number, param5: com.google.android.gms.common.internal.ClientSettings, param6: com.google.android.gms.common.api.GoogleApiClient.ConnectionCallbacks, param7: com.google.android.gms.common.api.GoogleApiClient.OnConnectionFailedListener);
							public connect(param0: com.google.android.gms.common.internal.BaseGmsClient.ConnectionProgressReportCallbacks): void;
							public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.os.Handler, param2: com.google.android.gms.common.internal.GmsClientSupervisor, param3: com.google.android.gms.common.GoogleApiAvailability, param4: number, param5: com.google.android.gms.common.internal.ClientSettings, param6: com.google.android.gms.common.api.GoogleApiClient.ConnectionCallbacks, param7: com.google.android.gms.common.api.GoogleApiClient.OnConnectionFailedListener);
							public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.os.Handler, param2: com.google.android.gms.common.internal.GmsClientSupervisor, param3: com.google.android.gms.common.GoogleApiAvailabilityLight, param4: number, param5: com.google.android.gms.common.internal.BaseGmsClient.BaseConnectionCallbacks, param6: com.google.android.gms.common.internal.BaseGmsClient.BaseOnConnectionFailedListener);
							public onUserSignOut(param0: com.google.android.gms.common.internal.BaseGmsClient.SignOutCallbacks): void;
							public getRequiredFeatures(): native.Array<com.google.android.gms.common.Feature>;
							public getRemoteService(param0: com.google.android.gms.common.internal.IAccountAccessor, param1: java.util.Set<com.google.android.gms.common.api.Scope>): void;
							public requiresSignIn(): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module location {
						export class zzb {
							public static class: java.lang.Class<com.google.android.gms.internal.location.zzb>;
							public asBinder(): globalAndroid.os.IBinder;
							public constructor(param0: string);
							public onTransact(param0: number, param1: globalAndroid.os.Parcel, param2: globalAndroid.os.Parcel, param3: number): boolean;
							public dispatchTransaction(param0: number, param1: globalAndroid.os.Parcel, param2: globalAndroid.os.Parcel, param3: number): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module location {
						export class zzba extends com.google.android.gms.internal.location.zzan {
							public static class: java.lang.Class<com.google.android.gms.internal.location.zzba>;
							public constructor();
							public constructor(param0: com.google.android.gms.common.api.internal.BaseImplementation.ResultHolder<com.google.android.gms.common.api.Status>);
							public constructor(param0: string);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module location {
						export class zzbb extends com.google.android.gms.internal.location.zzan {
							public static class: java.lang.Class<com.google.android.gms.internal.location.zzbb>;
							public constructor();
							public constructor(param0: com.google.android.gms.common.api.internal.BaseImplementation.ResultHolder<com.google.android.gms.common.api.Status>);
							public constructor(param0: string);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module location {
						export class zzbc extends com.google.android.gms.internal.location.zzar {
							public static class: java.lang.Class<com.google.android.gms.internal.location.zzbc>;
							public constructor();
							public constructor(param0: string);
							public constructor(param0: com.google.android.gms.common.api.internal.BaseImplementation.ResultHolder<com.google.android.gms.location.LocationSettingsResult>);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module location {
						export class zzbd extends com.google.android.gms.common.internal.safeparcel.AbstractSafeParcelable {
							public static class: java.lang.Class<com.google.android.gms.internal.location.zzbd>;
							public static CREATOR: any /* globalAndroid.os.Parcelable.Creator<com.google.android.gms.internal.location.zzbd>*/;
							public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
							public hashCode(): number;
							public toString(): string;
							public equals(param0: any): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module location {
						export class zzbe extends java.lang.Object /* globalAndroid.os.Parcelable.Creator<com.google.android.gms.internal.location.zzbd>*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.location.zzbe>;
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module location {
						export class zzbf extends com.google.android.gms.common.internal.safeparcel.AbstractSafeParcelable {
							public static class: java.lang.Class<com.google.android.gms.internal.location.zzbf>;
							public static CREATOR: any /* globalAndroid.os.Parcelable.Creator<com.google.android.gms.internal.location.zzbf>*/;
							public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module location {
						export class zzbg extends java.lang.Object /* globalAndroid.os.Parcelable.Creator<com.google.android.gms.internal.location.zzbf>*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.location.zzbg>;
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module location {
						export class zzbh extends com.google.android.gms.common.internal.safeparcel.AbstractSafeParcelable implements com.google.android.gms.location.Geofence {
							public static class: java.lang.Class<com.google.android.gms.internal.location.zzbh>;
							public static CREATOR: any /* globalAndroid.os.Parcelable.Creator<com.google.android.gms.internal.location.zzbh>*/;
							public constructor();
							public getRequestId(): string;
							public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
							public hashCode(): number;
							public toString(): string;
							public constructor(param0: string, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number, param7: number, param8: number);
							public equals(param0: any): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module location {
						export class zzbi extends java.lang.Object /* globalAndroid.os.Parcelable.Creator<com.google.android.gms.internal.location.zzbh>*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.location.zzbi>;
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module location {
						export class zzbj<T>  extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.gms.internal.location.zzbj<any>>;
							/**
							 * Constructs a new instance of the com.google.android.gms.internal.location.zzbj<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								getService(): T;
								checkConnected(): void;
							});
							public constructor();
							public checkConnected(): void;
							public getService(): T;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module location {
						export class zzbk extends com.google.android.gms.location.SettingsApi {
							public static class: java.lang.Class<com.google.android.gms.internal.location.zzbk>;
							public constructor();
							public checkLocationSettings(param0: com.google.android.gms.common.api.GoogleApiClient, param1: com.google.android.gms.location.LocationSettingsRequest): com.google.android.gms.common.api.PendingResult<com.google.android.gms.location.LocationSettingsResult>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module location {
						export class zzbl extends com.google.android.gms.location.LocationServices.zza<com.google.android.gms.location.LocationSettingsResult> {
							public static class: java.lang.Class<com.google.android.gms.internal.location.zzbl>;
							public setResult(param0: any): void;
							public setFailedResult(param0: com.google.android.gms.common.api.Status): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module location {
						export class zzbm {
							public static class: java.lang.Class<com.google.android.gms.internal.location.zzbm>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module location {
						export class zzc {
							public static class: java.lang.Class<com.google.android.gms.internal.location.zzc>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module location {
						export class zzd {
							public static class: java.lang.Class<com.google.android.gms.internal.location.zzd>;
							/**
							 * Constructs a new instance of the com.google.android.gms.internal.location.zzd interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
							});
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module location {
						export class zze extends com.google.android.gms.location.ActivityRecognitionApi {
							public static class: java.lang.Class<com.google.android.gms.internal.location.zze>;
							public constructor();
							public removeActivityUpdates(param0: com.google.android.gms.common.api.GoogleApiClient, param1: globalAndroid.app.PendingIntent): com.google.android.gms.common.api.PendingResult<com.google.android.gms.common.api.Status>;
							public requestActivityUpdates(param0: com.google.android.gms.common.api.GoogleApiClient, param1: number, param2: globalAndroid.app.PendingIntent): com.google.android.gms.common.api.PendingResult<com.google.android.gms.common.api.Status>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module location {
						export class zzf extends com.google.android.gms.internal.location.zzj {
							public static class: java.lang.Class<com.google.android.gms.internal.location.zzf>;
							public setResult(param0: any): void;
							public setFailedResult(param0: com.google.android.gms.common.api.Status): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module location {
						export class zzg extends com.google.android.gms.internal.location.zzj {
							public static class: java.lang.Class<com.google.android.gms.internal.location.zzg>;
							public setResult(param0: any): void;
							public setFailedResult(param0: com.google.android.gms.common.api.Status): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module location {
						export class zzh extends com.google.android.gms.internal.location.zzj {
							public static class: java.lang.Class<com.google.android.gms.internal.location.zzh>;
							public setResult(param0: any): void;
							public setFailedResult(param0: com.google.android.gms.common.api.Status): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module location {
						export class zzi extends com.google.android.gms.internal.location.zzj {
							public static class: java.lang.Class<com.google.android.gms.internal.location.zzi>;
							public setResult(param0: any): void;
							public setFailedResult(param0: com.google.android.gms.common.api.Status): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module location {
						export abstract class zzj extends com.google.android.gms.location.ActivityRecognition.zza<com.google.android.gms.common.api.Status> {
							public static class: java.lang.Class<com.google.android.gms.internal.location.zzj>;
							public constructor();
							public setResult(param0: any): void;
							public constructor(param0: com.google.android.gms.common.api.GoogleApiClient);
							public setFailedResult(param0: com.google.android.gms.common.api.Status): void;
							/** @deprecated */
							public constructor(param0: globalAndroid.os.Looper);
							/** @deprecated */
							public constructor(param0: com.google.android.gms.common.api.Api.AnyClientKey<any>, param1: com.google.android.gms.common.api.GoogleApiClient);
							public constructor(param0: com.google.android.gms.common.api.internal.BasePendingResult.CallbackHandler<any>);
							public constructor(param0: com.google.android.gms.common.api.Api<any>, param1: com.google.android.gms.common.api.GoogleApiClient);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module location {
						export class zzk extends java.lang.Object /* com.google.android.gms.common.internal.GmsClient<com.google.android.gms.internal.location.zzao>*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.location.zzk>;
							public getStartServiceAction(): string;
							public requiresGooglePlayServices(): boolean;
							public getServiceBrokerBinder(): globalAndroid.os.IBinder;
							public getServiceDescriptor(): string;
							public dump(param0: string, param1: java.io.FileDescriptor, param2: java.io.PrintWriter, param3: native.Array<string>): void;
							public getAvailableFeatures(): native.Array<com.google.android.gms.common.Feature>;
							public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.os.Looper, param2: com.google.android.gms.common.internal.GmsClientSupervisor, param3: com.google.android.gms.common.GoogleApiAvailabilityLight, param4: number, param5: com.google.android.gms.common.internal.BaseGmsClient.BaseConnectionCallbacks, param6: com.google.android.gms.common.internal.BaseGmsClient.BaseOnConnectionFailedListener, param7: string);
							public getEndpointPackageName(): string;
							public getSignInIntent(): globalAndroid.content.Intent;
							public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.os.Looper, param2: number, param3: com.google.android.gms.common.internal.ClientSettings);
							public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.os.Handler, param2: number, param3: com.google.android.gms.common.internal.ClientSettings);
							public getConnectionHint(): globalAndroid.os.Bundle;
							public getGetServiceRequestExtraArgs(): globalAndroid.os.Bundle;
							public requiresAccount(): boolean;
							public disconnect(): void;
							public isConnected(): boolean;
							public providesSignIn(): boolean;
							public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.os.Looper, param2: com.google.android.gms.common.api.GoogleApiClient.ConnectionCallbacks, param3: com.google.android.gms.common.api.GoogleApiClient.OnConnectionFailedListener, param4: string, param5: com.google.android.gms.common.internal.ClientSettings);
							public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.os.Looper, param2: number, param3: com.google.android.gms.common.internal.BaseGmsClient.BaseConnectionCallbacks, param4: com.google.android.gms.common.internal.BaseGmsClient.BaseOnConnectionFailedListener, param5: string);
							public isConnecting(): boolean;
							public getMinApkVersion(): number;
							public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.os.Looper, param2: number, param3: com.google.android.gms.common.internal.ClientSettings, param4: com.google.android.gms.common.api.GoogleApiClient.ConnectionCallbacks, param5: com.google.android.gms.common.api.GoogleApiClient.OnConnectionFailedListener);
							public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.os.Looper, param2: com.google.android.gms.common.internal.GmsClientSupervisor, param3: com.google.android.gms.common.GoogleApiAvailability, param4: number, param5: com.google.android.gms.common.internal.ClientSettings, param6: com.google.android.gms.common.api.GoogleApiClient.ConnectionCallbacks, param7: com.google.android.gms.common.api.GoogleApiClient.OnConnectionFailedListener);
							public connect(param0: com.google.android.gms.common.internal.BaseGmsClient.ConnectionProgressReportCallbacks): void;
							public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.os.Handler, param2: com.google.android.gms.common.internal.GmsClientSupervisor, param3: com.google.android.gms.common.GoogleApiAvailability, param4: number, param5: com.google.android.gms.common.internal.ClientSettings, param6: com.google.android.gms.common.api.GoogleApiClient.ConnectionCallbacks, param7: com.google.android.gms.common.api.GoogleApiClient.OnConnectionFailedListener);
							public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.os.Handler, param2: com.google.android.gms.common.internal.GmsClientSupervisor, param3: com.google.android.gms.common.GoogleApiAvailabilityLight, param4: number, param5: com.google.android.gms.common.internal.BaseGmsClient.BaseConnectionCallbacks, param6: com.google.android.gms.common.internal.BaseGmsClient.BaseOnConnectionFailedListener);
							public onUserSignOut(param0: com.google.android.gms.common.internal.BaseGmsClient.SignOutCallbacks): void;
							public getRequiredFeatures(): native.Array<com.google.android.gms.common.Feature>;
							public getRemoteService(param0: com.google.android.gms.common.internal.IAccountAccessor, param1: java.util.Set<com.google.android.gms.common.api.Scope>): void;
							public requiresSignIn(): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module location {
						export class zzl extends java.lang.Object /* com.google.android.gms.internal.location.zzbj<com.google.android.gms.internal.location.zzao>*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.location.zzl>;
							public getService(): any;
							public checkConnected(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module location {
						export class zzm extends com.google.android.gms.common.internal.safeparcel.AbstractSafeParcelable {
							public static class: java.lang.Class<com.google.android.gms.internal.location.zzm>;
							public static CREATOR: any /* globalAndroid.os.Parcelable.Creator<com.google.android.gms.internal.location.zzm>*/;
							public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
							public hashCode(): number;
							public equals(param0: any): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module location {
						export class zzn extends java.lang.Object /* globalAndroid.os.Parcelable.Creator<com.google.android.gms.internal.location.zzm>*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.location.zzn>;
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module location {
						export class zzo extends com.google.android.gms.common.internal.safeparcel.AbstractSafeParcelable {
							public static class: java.lang.Class<com.google.android.gms.internal.location.zzo>;
							public static CREATOR: any /* globalAndroid.os.Parcelable.Creator<com.google.android.gms.internal.location.zzo>*/;
							public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module location {
						export class zzp extends java.lang.Object /* globalAndroid.os.Parcelable.Creator<com.google.android.gms.internal.location.zzo>*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.location.zzp>;
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module location {
						export class zzq extends com.google.android.gms.location.FusedLocationProviderApi {
							public static class: java.lang.Class<com.google.android.gms.internal.location.zzq>;
							public constructor();
							public getLocationAvailability(param0: com.google.android.gms.common.api.GoogleApiClient): com.google.android.gms.location.LocationAvailability;
							public removeLocationUpdates(param0: com.google.android.gms.common.api.GoogleApiClient, param1: com.google.android.gms.location.LocationListener): com.google.android.gms.common.api.PendingResult<com.google.android.gms.common.api.Status>;
							public requestLocationUpdates(param0: com.google.android.gms.common.api.GoogleApiClient, param1: com.google.android.gms.location.LocationRequest, param2: globalAndroid.app.PendingIntent): com.google.android.gms.common.api.PendingResult<com.google.android.gms.common.api.Status>;
							public requestLocationUpdates(param0: com.google.android.gms.common.api.GoogleApiClient, param1: com.google.android.gms.location.LocationRequest, param2: com.google.android.gms.location.LocationListener, param3: globalAndroid.os.Looper): com.google.android.gms.common.api.PendingResult<com.google.android.gms.common.api.Status>;
							public requestLocationUpdates(param0: com.google.android.gms.common.api.GoogleApiClient, param1: com.google.android.gms.location.LocationRequest, param2: com.google.android.gms.location.LocationCallback, param3: globalAndroid.os.Looper): com.google.android.gms.common.api.PendingResult<com.google.android.gms.common.api.Status>;
							public getLastLocation(param0: com.google.android.gms.common.api.GoogleApiClient): globalAndroid.location.Location;
							public removeLocationUpdates(param0: com.google.android.gms.common.api.GoogleApiClient, param1: globalAndroid.app.PendingIntent): com.google.android.gms.common.api.PendingResult<com.google.android.gms.common.api.Status>;
							public setMockMode(param0: com.google.android.gms.common.api.GoogleApiClient, param1: boolean): com.google.android.gms.common.api.PendingResult<com.google.android.gms.common.api.Status>;
							public setMockLocation(param0: com.google.android.gms.common.api.GoogleApiClient, param1: globalAndroid.location.Location): com.google.android.gms.common.api.PendingResult<com.google.android.gms.common.api.Status>;
							public flushLocations(param0: com.google.android.gms.common.api.GoogleApiClient): com.google.android.gms.common.api.PendingResult<com.google.android.gms.common.api.Status>;
							public requestLocationUpdates(param0: com.google.android.gms.common.api.GoogleApiClient, param1: com.google.android.gms.location.LocationRequest, param2: com.google.android.gms.location.LocationListener): com.google.android.gms.common.api.PendingResult<com.google.android.gms.common.api.Status>;
							public removeLocationUpdates(param0: com.google.android.gms.common.api.GoogleApiClient, param1: com.google.android.gms.location.LocationCallback): com.google.android.gms.common.api.PendingResult<com.google.android.gms.common.api.Status>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module location {
						export class zzr extends com.google.android.gms.internal.location.zzab {
							public static class: java.lang.Class<com.google.android.gms.internal.location.zzr>;
							public setResult(param0: any): void;
							public setFailedResult(param0: com.google.android.gms.common.api.Status): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module location {
						export class zzs extends com.google.android.gms.internal.location.zzab {
							public static class: java.lang.Class<com.google.android.gms.internal.location.zzs>;
							public setResult(param0: any): void;
							public setFailedResult(param0: com.google.android.gms.common.api.Status): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module location {
						export class zzt extends com.google.android.gms.internal.location.zzab {
							public static class: java.lang.Class<com.google.android.gms.internal.location.zzt>;
							public setResult(param0: any): void;
							public setFailedResult(param0: com.google.android.gms.common.api.Status): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module location {
						export class zzu extends com.google.android.gms.internal.location.zzab {
							public static class: java.lang.Class<com.google.android.gms.internal.location.zzu>;
							public setResult(param0: any): void;
							public setFailedResult(param0: com.google.android.gms.common.api.Status): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module location {
						export class zzv extends com.google.android.gms.internal.location.zzab {
							public static class: java.lang.Class<com.google.android.gms.internal.location.zzv>;
							public setResult(param0: any): void;
							public setFailedResult(param0: com.google.android.gms.common.api.Status): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module location {
						export class zzw extends com.google.android.gms.internal.location.zzab {
							public static class: java.lang.Class<com.google.android.gms.internal.location.zzw>;
							public setResult(param0: any): void;
							public setFailedResult(param0: com.google.android.gms.common.api.Status): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module location {
						export class zzx extends com.google.android.gms.internal.location.zzab {
							public static class: java.lang.Class<com.google.android.gms.internal.location.zzx>;
							public setResult(param0: any): void;
							public setFailedResult(param0: com.google.android.gms.common.api.Status): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module location {
						export class zzy extends com.google.android.gms.internal.location.zzab {
							public static class: java.lang.Class<com.google.android.gms.internal.location.zzy>;
							public setResult(param0: any): void;
							public setFailedResult(param0: com.google.android.gms.common.api.Status): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module location {
						export class zzz extends com.google.android.gms.internal.location.zzab {
							public static class: java.lang.Class<com.google.android.gms.internal.location.zzz>;
							public setResult(param0: any): void;
							public setFailedResult(param0: com.google.android.gms.common.api.Status): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module location {
					export class ActivityRecognition {
						public static class: java.lang.Class<com.google.android.gms.location.ActivityRecognition>;
						public static CLIENT_NAME: string;
						public static API: com.google.android.gms.common.api.Api<com.google.android.gms.common.api.Api.ApiOptions.NoOptions>;
						public static ActivityRecognitionApi: com.google.android.gms.location.ActivityRecognitionApi;
						public static getClient(param0: globalAndroid.content.Context): com.google.android.gms.location.ActivityRecognitionClient;
						public static getClient(param0: globalAndroid.app.Activity): com.google.android.gms.location.ActivityRecognitionClient;
					}
					export module ActivityRecognition {
						export abstract class zza<R>  extends java.lang.Object /* com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<any,com.google.android.gms.internal.location.zzaz>*/ {
							public static class: java.lang.Class<com.google.android.gms.location.ActivityRecognition.zza<any>>;
							public constructor();
							public setResult(param0: any): void;
							public constructor(param0: com.google.android.gms.common.api.GoogleApiClient);
							public setFailedResult(param0: com.google.android.gms.common.api.Status): void;
							/** @deprecated */
							public constructor(param0: globalAndroid.os.Looper);
							/** @deprecated */
							public constructor(param0: com.google.android.gms.common.api.Api.AnyClientKey<any>, param1: com.google.android.gms.common.api.GoogleApiClient);
							public constructor(param0: com.google.android.gms.common.api.internal.BasePendingResult.CallbackHandler<any>);
							public constructor(param0: com.google.android.gms.common.api.Api<any>, param1: com.google.android.gms.common.api.GoogleApiClient);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module location {
					export class ActivityRecognitionApi {
						public static class: java.lang.Class<com.google.android.gms.location.ActivityRecognitionApi>;
						/**
						 * Constructs a new instance of the com.google.android.gms.location.ActivityRecognitionApi interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							requestActivityUpdates(param0: com.google.android.gms.common.api.GoogleApiClient, param1: number, param2: globalAndroid.app.PendingIntent): com.google.android.gms.common.api.PendingResult<com.google.android.gms.common.api.Status>;
							removeActivityUpdates(param0: com.google.android.gms.common.api.GoogleApiClient, param1: globalAndroid.app.PendingIntent): com.google.android.gms.common.api.PendingResult<com.google.android.gms.common.api.Status>;
							zza(param0: com.google.android.gms.common.api.GoogleApiClient, param1: com.google.android.gms.location.ActivityTransitionRequest, param2: globalAndroid.app.PendingIntent): com.google.android.gms.common.api.PendingResult<com.google.android.gms.common.api.Status>;
							zza(param0: com.google.android.gms.common.api.GoogleApiClient, param1: globalAndroid.app.PendingIntent): com.google.android.gms.common.api.PendingResult<com.google.android.gms.common.api.Status>;
						});
						public constructor();
						public requestActivityUpdates(param0: com.google.android.gms.common.api.GoogleApiClient, param1: number, param2: globalAndroid.app.PendingIntent): com.google.android.gms.common.api.PendingResult<com.google.android.gms.common.api.Status>;
						public removeActivityUpdates(param0: com.google.android.gms.common.api.GoogleApiClient, param1: globalAndroid.app.PendingIntent): com.google.android.gms.common.api.PendingResult<com.google.android.gms.common.api.Status>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module location {
					export class ActivityRecognitionClient extends com.google.android.gms.common.api.GoogleApi<com.google.android.gms.common.api.Api.ApiOptions.NoOptions> {
						public static class: java.lang.Class<com.google.android.gms.location.ActivityRecognitionClient>;
						public constructor(param0: globalAndroid.content.Context, param1: com.google.android.gms.common.api.Api<any>, param2: any, param3: com.google.android.gms.common.api.GoogleApi.Settings);
						/** @deprecated */
						public constructor(param0: globalAndroid.app.Activity, param1: com.google.android.gms.common.api.Api<any>, param2: any, param3: com.google.android.gms.common.api.internal.StatusExceptionMapper);
						public requestActivityTransitionUpdates(param0: com.google.android.gms.location.ActivityTransitionRequest, param1: globalAndroid.app.PendingIntent): com.google.android.gms.tasks.Task<java.lang.Void>;
						public constructor(param0: globalAndroid.app.Activity);
						public constructor(param0: globalAndroid.content.Context);
						public constructor(param0: globalAndroid.content.Context, param1: com.google.android.gms.common.api.Api<any>, param2: globalAndroid.os.Looper);
						public requestActivityUpdates(param0: number, param1: globalAndroid.app.PendingIntent): com.google.android.gms.tasks.Task<java.lang.Void>;
						/** @deprecated */
						public constructor(param0: globalAndroid.content.Context, param1: com.google.android.gms.common.api.Api<any>, param2: any, param3: globalAndroid.os.Looper, param4: com.google.android.gms.common.api.internal.StatusExceptionMapper);
						public removeActivityTransitionUpdates(param0: globalAndroid.app.PendingIntent): com.google.android.gms.tasks.Task<java.lang.Void>;
						public removeActivityUpdates(param0: globalAndroid.app.PendingIntent): com.google.android.gms.tasks.Task<java.lang.Void>;
						public constructor(param0: globalAndroid.app.Activity, param1: com.google.android.gms.common.api.Api<any>, param2: any, param3: com.google.android.gms.common.api.GoogleApi.Settings);
						/** @deprecated */
						public constructor(param0: globalAndroid.content.Context, param1: com.google.android.gms.common.api.Api<any>, param2: any, param3: com.google.android.gms.common.api.internal.StatusExceptionMapper);
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module location {
					export class ActivityRecognitionResult extends com.google.android.gms.common.internal.safeparcel.AbstractSafeParcelable implements com.google.android.gms.common.internal.ReflectedParcelable {
						public static class: java.lang.Class<com.google.android.gms.location.ActivityRecognitionResult>;
						public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.gms.location.ActivityRecognitionResult>;
						public constructor();
						public constructor(param0: com.google.android.gms.location.DetectedActivity, param1: number, param2: number);
						public static extractResult(param0: globalAndroid.content.Intent): com.google.android.gms.location.ActivityRecognitionResult;
						public getElapsedRealtimeMillis(): number;
						public constructor(param0: java.util.List<com.google.android.gms.location.DetectedActivity>, param1: number, param2: number, param3: number, param4: globalAndroid.os.Bundle);
						public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
						public equals(param0: any): boolean;
						public hashCode(): number;
						public getTime(): number;
						public toString(): string;
						public constructor(param0: java.util.List<com.google.android.gms.location.DetectedActivity>, param1: number, param2: number);
						public getActivityConfidence(param0: number): number;
						public static hasResult(param0: globalAndroid.content.Intent): boolean;
						public getMostProbableActivity(): com.google.android.gms.location.DetectedActivity;
						public getProbableActivities(): java.util.List<com.google.android.gms.location.DetectedActivity>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module location {
					export class ActivityTransition extends com.google.android.gms.common.internal.safeparcel.AbstractSafeParcelable {
						public static class: java.lang.Class<com.google.android.gms.location.ActivityTransition>;
						public static ACTIVITY_TRANSITION_ENTER: number;
						public static ACTIVITY_TRANSITION_EXIT: number;
						public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.gms.location.ActivityTransition>;
						public getTransitionType(): number;
						public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public getActivityType(): number;
						public toString(): string;
					}
					export module ActivityTransition {
						export class Builder {
							public static class: java.lang.Class<com.google.android.gms.location.ActivityTransition.Builder>;
							public constructor();
							public build(): com.google.android.gms.location.ActivityTransition;
							public setActivityType(param0: number): com.google.android.gms.location.ActivityTransition.Builder;
							public setActivityTransition(param0: number): com.google.android.gms.location.ActivityTransition.Builder;
						}
						export class SupportedActivityTransition {
							public static class: java.lang.Class<com.google.android.gms.location.ActivityTransition.SupportedActivityTransition>;
							/**
							 * Constructs a new instance of the com.google.android.gms.location.ActivityTransition$SupportedActivityTransition interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
							});
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module location {
					export class ActivityTransitionEvent extends com.google.android.gms.common.internal.safeparcel.AbstractSafeParcelable {
						public static class: java.lang.Class<com.google.android.gms.location.ActivityTransitionEvent>;
						public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.gms.location.ActivityTransitionEvent>;
						public constructor();
						public getTransitionType(): number;
						public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public getElapsedRealTimeNanos(): number;
						public constructor(param0: number, param1: number, param2: number);
						public getActivityType(): number;
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module location {
					export class ActivityTransitionRequest extends com.google.android.gms.common.internal.safeparcel.AbstractSafeParcelable {
						public static class: java.lang.Class<com.google.android.gms.location.ActivityTransitionRequest>;
						public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.gms.location.ActivityTransitionRequest>;
						public static IS_SAME_TRANSITION: java.util.Comparator<com.google.android.gms.location.ActivityTransition>;
						public constructor();
						public serializeToIntentExtra(param0: globalAndroid.content.Intent): void;
						public constructor(param0: java.util.List<com.google.android.gms.location.ActivityTransition>, param1: string, param2: java.util.List<com.google.android.gms.common.internal.ClientIdentity>);
						public constructor(param0: java.util.List<com.google.android.gms.location.ActivityTransition>);
						public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
						public equals(param0: any): boolean;
						public hashCode(): number;
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module location {
					export class ActivityTransitionResult extends com.google.android.gms.common.internal.safeparcel.AbstractSafeParcelable {
						public static class: java.lang.Class<com.google.android.gms.location.ActivityTransitionResult>;
						public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.gms.location.ActivityTransitionResult>;
						public static extractResult(param0: globalAndroid.content.Intent): com.google.android.gms.location.ActivityTransitionResult;
						public constructor();
						public constructor(param0: java.util.List<com.google.android.gms.location.ActivityTransitionEvent>);
						public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
						public static hasResult(param0: globalAndroid.content.Intent): boolean;
						public equals(param0: any): boolean;
						public hashCode(): number;
						public getTransitionEvents(): java.util.List<com.google.android.gms.location.ActivityTransitionEvent>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module location {
					export class DetectedActivity extends com.google.android.gms.common.internal.safeparcel.AbstractSafeParcelable {
						public static class: java.lang.Class<com.google.android.gms.location.DetectedActivity>;
						public static IN_VEHICLE: number;
						public static ON_BICYCLE: number;
						public static ON_FOOT: number;
						public static STILL: number;
						public static UNKNOWN: number;
						public static TILTING: number;
						public static WALKING: number;
						public static RUNNING: number;
						public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.gms.location.DetectedActivity>;
						public getConfidence(): number;
						public constructor();
						public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
						public equals(param0: any): boolean;
						public hashCode(): number;
						public getType(): number;
						public constructor(param0: number, param1: number);
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module location {
					export class FusedLocationProviderApi {
						public static class: java.lang.Class<com.google.android.gms.location.FusedLocationProviderApi>;
						/**
						 * Constructs a new instance of the com.google.android.gms.location.FusedLocationProviderApi interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							getLastLocation(param0: com.google.android.gms.common.api.GoogleApiClient): globalAndroid.location.Location;
							getLocationAvailability(param0: com.google.android.gms.common.api.GoogleApiClient): com.google.android.gms.location.LocationAvailability;
							requestLocationUpdates(param0: com.google.android.gms.common.api.GoogleApiClient, param1: com.google.android.gms.location.LocationRequest, param2: com.google.android.gms.location.LocationListener): com.google.android.gms.common.api.PendingResult<com.google.android.gms.common.api.Status>;
							requestLocationUpdates(param0: com.google.android.gms.common.api.GoogleApiClient, param1: com.google.android.gms.location.LocationRequest, param2: com.google.android.gms.location.LocationListener, param3: globalAndroid.os.Looper): com.google.android.gms.common.api.PendingResult<com.google.android.gms.common.api.Status>;
							requestLocationUpdates(param0: com.google.android.gms.common.api.GoogleApiClient, param1: com.google.android.gms.location.LocationRequest, param2: com.google.android.gms.location.LocationCallback, param3: globalAndroid.os.Looper): com.google.android.gms.common.api.PendingResult<com.google.android.gms.common.api.Status>;
							requestLocationUpdates(param0: com.google.android.gms.common.api.GoogleApiClient, param1: com.google.android.gms.location.LocationRequest, param2: globalAndroid.app.PendingIntent): com.google.android.gms.common.api.PendingResult<com.google.android.gms.common.api.Status>;
							removeLocationUpdates(param0: com.google.android.gms.common.api.GoogleApiClient, param1: com.google.android.gms.location.LocationListener): com.google.android.gms.common.api.PendingResult<com.google.android.gms.common.api.Status>;
							removeLocationUpdates(param0: com.google.android.gms.common.api.GoogleApiClient, param1: globalAndroid.app.PendingIntent): com.google.android.gms.common.api.PendingResult<com.google.android.gms.common.api.Status>;
							removeLocationUpdates(param0: com.google.android.gms.common.api.GoogleApiClient, param1: com.google.android.gms.location.LocationCallback): com.google.android.gms.common.api.PendingResult<com.google.android.gms.common.api.Status>;
							setMockMode(param0: com.google.android.gms.common.api.GoogleApiClient, param1: boolean): com.google.android.gms.common.api.PendingResult<com.google.android.gms.common.api.Status>;
							setMockLocation(param0: com.google.android.gms.common.api.GoogleApiClient, param1: globalAndroid.location.Location): com.google.android.gms.common.api.PendingResult<com.google.android.gms.common.api.Status>;
							flushLocations(param0: com.google.android.gms.common.api.GoogleApiClient): com.google.android.gms.common.api.PendingResult<com.google.android.gms.common.api.Status>;
						});
						public constructor();
						public static KEY_MOCK_LOCATION: string;
						public static KEY_LOCATION_CHANGED: string;
						public setMockLocation(param0: com.google.android.gms.common.api.GoogleApiClient, param1: globalAndroid.location.Location): com.google.android.gms.common.api.PendingResult<com.google.android.gms.common.api.Status>;
						public getLastLocation(param0: com.google.android.gms.common.api.GoogleApiClient): globalAndroid.location.Location;
						public requestLocationUpdates(param0: com.google.android.gms.common.api.GoogleApiClient, param1: com.google.android.gms.location.LocationRequest, param2: com.google.android.gms.location.LocationCallback, param3: globalAndroid.os.Looper): com.google.android.gms.common.api.PendingResult<com.google.android.gms.common.api.Status>;
						public removeLocationUpdates(param0: com.google.android.gms.common.api.GoogleApiClient, param1: com.google.android.gms.location.LocationListener): com.google.android.gms.common.api.PendingResult<com.google.android.gms.common.api.Status>;
						public flushLocations(param0: com.google.android.gms.common.api.GoogleApiClient): com.google.android.gms.common.api.PendingResult<com.google.android.gms.common.api.Status>;
						public requestLocationUpdates(param0: com.google.android.gms.common.api.GoogleApiClient, param1: com.google.android.gms.location.LocationRequest, param2: globalAndroid.app.PendingIntent): com.google.android.gms.common.api.PendingResult<com.google.android.gms.common.api.Status>;
						public requestLocationUpdates(param0: com.google.android.gms.common.api.GoogleApiClient, param1: com.google.android.gms.location.LocationRequest, param2: com.google.android.gms.location.LocationListener, param3: globalAndroid.os.Looper): com.google.android.gms.common.api.PendingResult<com.google.android.gms.common.api.Status>;
						public getLocationAvailability(param0: com.google.android.gms.common.api.GoogleApiClient): com.google.android.gms.location.LocationAvailability;
						public removeLocationUpdates(param0: com.google.android.gms.common.api.GoogleApiClient, param1: globalAndroid.app.PendingIntent): com.google.android.gms.common.api.PendingResult<com.google.android.gms.common.api.Status>;
						public removeLocationUpdates(param0: com.google.android.gms.common.api.GoogleApiClient, param1: com.google.android.gms.location.LocationCallback): com.google.android.gms.common.api.PendingResult<com.google.android.gms.common.api.Status>;
						public requestLocationUpdates(param0: com.google.android.gms.common.api.GoogleApiClient, param1: com.google.android.gms.location.LocationRequest, param2: com.google.android.gms.location.LocationListener): com.google.android.gms.common.api.PendingResult<com.google.android.gms.common.api.Status>;
						public setMockMode(param0: com.google.android.gms.common.api.GoogleApiClient, param1: boolean): com.google.android.gms.common.api.PendingResult<com.google.android.gms.common.api.Status>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module location {
					export class FusedLocationProviderClient extends com.google.android.gms.common.api.GoogleApi<com.google.android.gms.common.api.Api.ApiOptions.NoOptions> {
						public static class: java.lang.Class<com.google.android.gms.location.FusedLocationProviderClient>;
						public static KEY_VERTICAL_ACCURACY: string;
						public constructor(param0: globalAndroid.app.Activity);
						public constructor(param0: globalAndroid.content.Context);
						public constructor(param0: globalAndroid.content.Context, param1: com.google.android.gms.common.api.Api<any>, param2: globalAndroid.os.Looper);
						public flushLocations(): com.google.android.gms.tasks.Task<java.lang.Void>;
						/** @deprecated */
						public constructor(param0: globalAndroid.content.Context, param1: com.google.android.gms.common.api.Api<any>, param2: any, param3: globalAndroid.os.Looper, param4: com.google.android.gms.common.api.internal.StatusExceptionMapper);
						public getLocationAvailability(): com.google.android.gms.tasks.Task<com.google.android.gms.location.LocationAvailability>;
						public removeLocationUpdates(param0: globalAndroid.app.PendingIntent): com.google.android.gms.tasks.Task<java.lang.Void>;
						public requestLocationUpdates(param0: com.google.android.gms.location.LocationRequest, param1: com.google.android.gms.location.LocationCallback, param2: globalAndroid.os.Looper): com.google.android.gms.tasks.Task<java.lang.Void>;
						/** @deprecated */
						public constructor(param0: globalAndroid.content.Context, param1: com.google.android.gms.common.api.Api<any>, param2: any, param3: com.google.android.gms.common.api.internal.StatusExceptionMapper);
						public requestLocationUpdates(param0: com.google.android.gms.location.LocationRequest, param1: globalAndroid.app.PendingIntent): com.google.android.gms.tasks.Task<java.lang.Void>;
						public constructor(param0: globalAndroid.content.Context, param1: com.google.android.gms.common.api.Api<any>, param2: any, param3: com.google.android.gms.common.api.GoogleApi.Settings);
						/** @deprecated */
						public constructor(param0: globalAndroid.app.Activity, param1: com.google.android.gms.common.api.Api<any>, param2: any, param3: com.google.android.gms.common.api.internal.StatusExceptionMapper);
						public getLastLocation(): com.google.android.gms.tasks.Task<globalAndroid.location.Location>;
						public removeLocationUpdates(param0: com.google.android.gms.location.LocationCallback): com.google.android.gms.tasks.Task<java.lang.Void>;
						public setMockLocation(param0: globalAndroid.location.Location): com.google.android.gms.tasks.Task<java.lang.Void>;
						public constructor(param0: globalAndroid.app.Activity, param1: com.google.android.gms.common.api.Api<any>, param2: any, param3: com.google.android.gms.common.api.GoogleApi.Settings);
						public setMockMode(param0: boolean): com.google.android.gms.tasks.Task<java.lang.Void>;
					}
					export module FusedLocationProviderClient {
						export class zza extends com.google.android.gms.internal.location.zzak {
							public static class: java.lang.Class<com.google.android.gms.location.FusedLocationProviderClient.zza>;
							public constructor();
							public constructor(param0: string);
							public constructor(param0: com.google.android.gms.tasks.TaskCompletionSource<java.lang.Void>);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module location {
					export class Geofence {
						public static class: java.lang.Class<com.google.android.gms.location.Geofence>;
						/**
						 * Constructs a new instance of the com.google.android.gms.location.Geofence interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							getRequestId(): string;
						});
						public constructor();
						public static NEVER_EXPIRE: number;
						public static GEOFENCE_TRANSITION_EXIT: number;
						public static GEOFENCE_TRANSITION_ENTER: number;
						public static GEOFENCE_TRANSITION_DWELL: number;
						public getRequestId(): string;
					}
					export module Geofence {
						export class Builder {
							public static class: java.lang.Class<com.google.android.gms.location.Geofence.Builder>;
							public constructor();
							public setLoiteringDelay(param0: number): com.google.android.gms.location.Geofence.Builder;
							public setExpirationDuration(param0: number): com.google.android.gms.location.Geofence.Builder;
							public setNotificationResponsiveness(param0: number): com.google.android.gms.location.Geofence.Builder;
							public setRequestId(param0: string): com.google.android.gms.location.Geofence.Builder;
							public setCircularRegion(param0: number, param1: number, param2: number): com.google.android.gms.location.Geofence.Builder;
							public setTransitionTypes(param0: number): com.google.android.gms.location.Geofence.Builder;
							public build(): com.google.android.gms.location.Geofence;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module location {
					export class GeofenceStatusCodes extends com.google.android.gms.common.api.CommonStatusCodes {
						public static class: java.lang.Class<com.google.android.gms.location.GeofenceStatusCodes>;
						public static GEOFENCE_NOT_AVAILABLE: number;
						public static GEOFENCE_TOO_MANY_GEOFENCES: number;
						public static GEOFENCE_TOO_MANY_PENDING_INTENTS: number;
						public static getStatusCodeString(param0: number): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module location {
					export class GeofencingApi {
						public static class: java.lang.Class<com.google.android.gms.location.GeofencingApi>;
						/**
						 * Constructs a new instance of the com.google.android.gms.location.GeofencingApi interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							addGeofences(param0: com.google.android.gms.common.api.GoogleApiClient, param1: java.util.List<com.google.android.gms.location.Geofence>, param2: globalAndroid.app.PendingIntent): com.google.android.gms.common.api.PendingResult<com.google.android.gms.common.api.Status>;
							addGeofences(param0: com.google.android.gms.common.api.GoogleApiClient, param1: com.google.android.gms.location.GeofencingRequest, param2: globalAndroid.app.PendingIntent): com.google.android.gms.common.api.PendingResult<com.google.android.gms.common.api.Status>;
							removeGeofences(param0: com.google.android.gms.common.api.GoogleApiClient, param1: globalAndroid.app.PendingIntent): com.google.android.gms.common.api.PendingResult<com.google.android.gms.common.api.Status>;
							removeGeofences(param0: com.google.android.gms.common.api.GoogleApiClient, param1: java.util.List<string>): com.google.android.gms.common.api.PendingResult<com.google.android.gms.common.api.Status>;
						});
						public constructor();
						public removeGeofences(param0: com.google.android.gms.common.api.GoogleApiClient, param1: globalAndroid.app.PendingIntent): com.google.android.gms.common.api.PendingResult<com.google.android.gms.common.api.Status>;
						public removeGeofences(param0: com.google.android.gms.common.api.GoogleApiClient, param1: java.util.List<string>): com.google.android.gms.common.api.PendingResult<com.google.android.gms.common.api.Status>;
						public addGeofences(param0: com.google.android.gms.common.api.GoogleApiClient, param1: com.google.android.gms.location.GeofencingRequest, param2: globalAndroid.app.PendingIntent): com.google.android.gms.common.api.PendingResult<com.google.android.gms.common.api.Status>;
						/** @deprecated */
						public addGeofences(param0: com.google.android.gms.common.api.GoogleApiClient, param1: java.util.List<com.google.android.gms.location.Geofence>, param2: globalAndroid.app.PendingIntent): com.google.android.gms.common.api.PendingResult<com.google.android.gms.common.api.Status>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module location {
					export class GeofencingClient extends com.google.android.gms.common.api.GoogleApi<com.google.android.gms.common.api.Api.ApiOptions.NoOptions> {
						public static class: java.lang.Class<com.google.android.gms.location.GeofencingClient>;
						public removeGeofences(param0: globalAndroid.app.PendingIntent): com.google.android.gms.tasks.Task<java.lang.Void>;
						public constructor(param0: globalAndroid.content.Context, param1: com.google.android.gms.common.api.Api<any>, param2: any, param3: com.google.android.gms.common.api.GoogleApi.Settings);
						/** @deprecated */
						public constructor(param0: globalAndroid.app.Activity, param1: com.google.android.gms.common.api.Api<any>, param2: any, param3: com.google.android.gms.common.api.internal.StatusExceptionMapper);
						public constructor(param0: globalAndroid.app.Activity);
						public constructor(param0: globalAndroid.content.Context);
						public addGeofences(param0: com.google.android.gms.location.GeofencingRequest, param1: globalAndroid.app.PendingIntent): com.google.android.gms.tasks.Task<java.lang.Void>;
						public constructor(param0: globalAndroid.content.Context, param1: com.google.android.gms.common.api.Api<any>, param2: globalAndroid.os.Looper);
						/** @deprecated */
						public constructor(param0: globalAndroid.content.Context, param1: com.google.android.gms.common.api.Api<any>, param2: any, param3: globalAndroid.os.Looper, param4: com.google.android.gms.common.api.internal.StatusExceptionMapper);
						public removeGeofences(param0: java.util.List<string>): com.google.android.gms.tasks.Task<java.lang.Void>;
						public constructor(param0: globalAndroid.app.Activity, param1: com.google.android.gms.common.api.Api<any>, param2: any, param3: com.google.android.gms.common.api.GoogleApi.Settings);
						/** @deprecated */
						public constructor(param0: globalAndroid.content.Context, param1: com.google.android.gms.common.api.Api<any>, param2: any, param3: com.google.android.gms.common.api.internal.StatusExceptionMapper);
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module location {
					export class GeofencingEvent {
						public static class: java.lang.Class<com.google.android.gms.location.GeofencingEvent>;
						public static fromIntent(param0: globalAndroid.content.Intent): com.google.android.gms.location.GeofencingEvent;
						public getErrorCode(): number;
						public getTriggeringGeofences(): java.util.List<com.google.android.gms.location.Geofence>;
						public getTriggeringLocation(): globalAndroid.location.Location;
						public getGeofenceTransition(): number;
						public hasError(): boolean;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module location {
					export class GeofencingRequest extends com.google.android.gms.common.internal.safeparcel.AbstractSafeParcelable {
						public static class: java.lang.Class<com.google.android.gms.location.GeofencingRequest>;
						public static INITIAL_TRIGGER_ENTER: number;
						public static INITIAL_TRIGGER_EXIT: number;
						public static INITIAL_TRIGGER_DWELL: number;
						public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.gms.location.GeofencingRequest>;
						public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
						public getGeofences(): java.util.List<com.google.android.gms.location.Geofence>;
						public getInitialTrigger(): number;
						public toString(): string;
					}
					export module GeofencingRequest {
						export class Builder {
							public static class: java.lang.Class<com.google.android.gms.location.GeofencingRequest.Builder>;
							public constructor();
							public build(): com.google.android.gms.location.GeofencingRequest;
							public addGeofences(param0: java.util.List<com.google.android.gms.location.Geofence>): com.google.android.gms.location.GeofencingRequest.Builder;
							public addGeofence(param0: com.google.android.gms.location.Geofence): com.google.android.gms.location.GeofencingRequest.Builder;
							public setInitialTrigger(param0: number): com.google.android.gms.location.GeofencingRequest.Builder;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module location {
					export class LocationAvailability extends com.google.android.gms.common.internal.safeparcel.AbstractSafeParcelable implements com.google.android.gms.common.internal.ReflectedParcelable {
						public static class: java.lang.Class<com.google.android.gms.location.LocationAvailability>;
						public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.gms.location.LocationAvailability>;
						public isLocationAvailable(): boolean;
						public static extractLocationAvailability(param0: globalAndroid.content.Intent): com.google.android.gms.location.LocationAvailability;
						public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public static hasLocationAvailability(param0: globalAndroid.content.Intent): boolean;
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module location {
					export class LocationCallback {
						public static class: java.lang.Class<com.google.android.gms.location.LocationCallback>;
						public onLocationResult(param0: com.google.android.gms.location.LocationResult): void;
						public constructor();
						public onLocationAvailability(param0: com.google.android.gms.location.LocationAvailability): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module location {
					export class LocationListener {
						public static class: java.lang.Class<com.google.android.gms.location.LocationListener>;
						/**
						 * Constructs a new instance of the com.google.android.gms.location.LocationListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onLocationChanged(param0: globalAndroid.location.Location): void;
						});
						public constructor();
						public onLocationChanged(param0: globalAndroid.location.Location): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module location {
					export class LocationRequest extends com.google.android.gms.common.internal.safeparcel.AbstractSafeParcelable implements com.google.android.gms.common.internal.ReflectedParcelable {
						public static class: java.lang.Class<com.google.android.gms.location.LocationRequest>;
						public static PRIORITY_HIGH_ACCURACY: number;
						public static PRIORITY_BALANCED_POWER_ACCURACY: number;
						public static PRIORITY_LOW_POWER: number;
						public static PRIORITY_NO_POWER: number;
						public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.gms.location.LocationRequest>;
						public constructor();
						public setExpirationTime(param0: number): com.google.android.gms.location.LocationRequest;
						public setMaxWaitTime(param0: number): com.google.android.gms.location.LocationRequest;
						public getNumUpdates(): number;
						public setExpirationDuration(param0: number): com.google.android.gms.location.LocationRequest;
						public setFastestInterval(param0: number): com.google.android.gms.location.LocationRequest;
						public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public getInterval(): number;
						public getMaxWaitTime(): number;
						public toString(): string;
						public isFastestIntervalExplicitlySet(): boolean;
						public setNumUpdates(param0: number): com.google.android.gms.location.LocationRequest;
						public setInterval(param0: number): com.google.android.gms.location.LocationRequest;
						public setPriority(param0: number): com.google.android.gms.location.LocationRequest;
						public getPriority(): number;
						public setSmallestDisplacement(param0: number): com.google.android.gms.location.LocationRequest;
						public static create(): com.google.android.gms.location.LocationRequest;
						public getSmallestDisplacement(): number;
						public getExpirationTime(): number;
						public getFastestInterval(): number;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module location {
					export class LocationResult extends com.google.android.gms.common.internal.safeparcel.AbstractSafeParcelable implements com.google.android.gms.common.internal.ReflectedParcelable {
						public static class: java.lang.Class<com.google.android.gms.location.LocationResult>;
						public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.gms.location.LocationResult>;
						public static extractResult(param0: globalAndroid.content.Intent): com.google.android.gms.location.LocationResult;
						public static create(param0: java.util.List<globalAndroid.location.Location>): com.google.android.gms.location.LocationResult;
						public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public static hasResult(param0: globalAndroid.content.Intent): boolean;
						public getLocations(): java.util.List<globalAndroid.location.Location>;
						public getLastLocation(): globalAndroid.location.Location;
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module location {
					export class LocationServices {
						public static class: java.lang.Class<com.google.android.gms.location.LocationServices>;
						public static API: com.google.android.gms.common.api.Api<com.google.android.gms.common.api.Api.ApiOptions.NoOptions>;
						public static FusedLocationApi: com.google.android.gms.location.FusedLocationProviderApi;
						public static GeofencingApi: com.google.android.gms.location.GeofencingApi;
						public static SettingsApi: com.google.android.gms.location.SettingsApi;
						public static getFusedLocationProviderClient(param0: globalAndroid.content.Context): com.google.android.gms.location.FusedLocationProviderClient;
						public static getFusedLocationProviderClient(param0: globalAndroid.app.Activity): com.google.android.gms.location.FusedLocationProviderClient;
						public static getGeofencingClient(param0: globalAndroid.content.Context): com.google.android.gms.location.GeofencingClient;
						public static getGeofencingClient(param0: globalAndroid.app.Activity): com.google.android.gms.location.GeofencingClient;
						public static getSettingsClient(param0: globalAndroid.content.Context): com.google.android.gms.location.SettingsClient;
						public static getSettingsClient(param0: globalAndroid.app.Activity): com.google.android.gms.location.SettingsClient;
					}
					export module LocationServices {
						export abstract class zza<R>  extends java.lang.Object /* com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<any,com.google.android.gms.internal.location.zzaz>*/ {
							public static class: java.lang.Class<com.google.android.gms.location.LocationServices.zza<any>>;
							public constructor();
							public setResult(param0: any): void;
							public constructor(param0: com.google.android.gms.common.api.GoogleApiClient);
							public setFailedResult(param0: com.google.android.gms.common.api.Status): void;
							/** @deprecated */
							public constructor(param0: globalAndroid.os.Looper);
							/** @deprecated */
							public constructor(param0: com.google.android.gms.common.api.Api.AnyClientKey<any>, param1: com.google.android.gms.common.api.GoogleApiClient);
							public constructor(param0: com.google.android.gms.common.api.internal.BasePendingResult.CallbackHandler<any>);
							public constructor(param0: com.google.android.gms.common.api.Api<any>, param1: com.google.android.gms.common.api.GoogleApiClient);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module location {
					export class LocationSettingsRequest extends com.google.android.gms.common.internal.safeparcel.AbstractSafeParcelable {
						public static class: java.lang.Class<com.google.android.gms.location.LocationSettingsRequest>;
						public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.gms.location.LocationSettingsRequest>;
						public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
					}
					export module LocationSettingsRequest {
						export class Builder {
							public static class: java.lang.Class<com.google.android.gms.location.LocationSettingsRequest.Builder>;
							public constructor();
							public setAlwaysShow(param0: boolean): com.google.android.gms.location.LocationSettingsRequest.Builder;
							public addAllLocationRequests(param0: java.util.Collection<com.google.android.gms.location.LocationRequest>): com.google.android.gms.location.LocationSettingsRequest.Builder;
							public build(): com.google.android.gms.location.LocationSettingsRequest;
							public setNeedBle(param0: boolean): com.google.android.gms.location.LocationSettingsRequest.Builder;
							public addLocationRequest(param0: com.google.android.gms.location.LocationRequest): com.google.android.gms.location.LocationSettingsRequest.Builder;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module location {
					export class LocationSettingsResponse extends com.google.android.gms.common.api.Response<com.google.android.gms.location.LocationSettingsResult> {
						public static class: java.lang.Class<com.google.android.gms.location.LocationSettingsResponse>;
						public getLocationSettingsStates(): com.google.android.gms.location.LocationSettingsStates;
						public constructor();
						public constructor(param0: any);
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module location {
					export class LocationSettingsResult extends com.google.android.gms.common.internal.safeparcel.AbstractSafeParcelable implements com.google.android.gms.common.api.Result {
						public static class: java.lang.Class<com.google.android.gms.location.LocationSettingsResult>;
						public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.gms.location.LocationSettingsResult>;
						public getLocationSettingsStates(): com.google.android.gms.location.LocationSettingsStates;
						public constructor();
						public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
						public constructor(param0: com.google.android.gms.common.api.Status, param1: com.google.android.gms.location.LocationSettingsStates);
						public constructor(param0: com.google.android.gms.common.api.Status);
						public getStatus(): com.google.android.gms.common.api.Status;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module location {
					export class LocationSettingsStates extends com.google.android.gms.common.internal.safeparcel.AbstractSafeParcelable {
						public static class: java.lang.Class<com.google.android.gms.location.LocationSettingsStates>;
						public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.gms.location.LocationSettingsStates>;
						public isLocationUsable(): boolean;
						public constructor();
						public isLocationPresent(): boolean;
						public isBlePresent(): boolean;
						public isGpsUsable(): boolean;
						public isBleUsable(): boolean;
						public constructor(param0: boolean, param1: boolean, param2: boolean, param3: boolean, param4: boolean, param5: boolean);
						public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
						public isNetworkLocationUsable(): boolean;
						public static fromIntent(param0: globalAndroid.content.Intent): com.google.android.gms.location.LocationSettingsStates;
						public isNetworkLocationPresent(): boolean;
						public isGpsPresent(): boolean;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module location {
					export class LocationSettingsStatusCodes extends com.google.android.gms.common.api.CommonStatusCodes {
						public static class: java.lang.Class<com.google.android.gms.location.LocationSettingsStatusCodes>;
						public static SETTINGS_CHANGE_UNAVAILABLE: number;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module location {
					export class LocationStatusCodes {
						public static class: java.lang.Class<com.google.android.gms.location.LocationStatusCodes>;
						public static SUCCESS: number;
						public static ERROR: number;
						public static GEOFENCE_NOT_AVAILABLE: number;
						public static GEOFENCE_TOO_MANY_GEOFENCES: number;
						public static GEOFENCE_TOO_MANY_PENDING_INTENTS: number;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module location {
					export class SettingsApi {
						public static class: java.lang.Class<com.google.android.gms.location.SettingsApi>;
						/**
						 * Constructs a new instance of the com.google.android.gms.location.SettingsApi interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							checkLocationSettings(param0: com.google.android.gms.common.api.GoogleApiClient, param1: com.google.android.gms.location.LocationSettingsRequest): com.google.android.gms.common.api.PendingResult<com.google.android.gms.location.LocationSettingsResult>;
						});
						public constructor();
						public checkLocationSettings(param0: com.google.android.gms.common.api.GoogleApiClient, param1: com.google.android.gms.location.LocationSettingsRequest): com.google.android.gms.common.api.PendingResult<com.google.android.gms.location.LocationSettingsResult>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module location {
					export class SettingsClient extends com.google.android.gms.common.api.GoogleApi<com.google.android.gms.common.api.Api.ApiOptions.NoOptions> {
						public static class: java.lang.Class<com.google.android.gms.location.SettingsClient>;
						public constructor(param0: globalAndroid.content.Context, param1: com.google.android.gms.common.api.Api<any>, param2: any, param3: com.google.android.gms.common.api.GoogleApi.Settings);
						/** @deprecated */
						public constructor(param0: globalAndroid.app.Activity, param1: com.google.android.gms.common.api.Api<any>, param2: any, param3: com.google.android.gms.common.api.internal.StatusExceptionMapper);
						public constructor(param0: globalAndroid.app.Activity);
						public constructor(param0: globalAndroid.content.Context);
						public constructor(param0: globalAndroid.content.Context, param1: com.google.android.gms.common.api.Api<any>, param2: globalAndroid.os.Looper);
						public checkLocationSettings(param0: com.google.android.gms.location.LocationSettingsRequest): com.google.android.gms.tasks.Task<com.google.android.gms.location.LocationSettingsResponse>;
						/** @deprecated */
						public constructor(param0: globalAndroid.content.Context, param1: com.google.android.gms.common.api.Api<any>, param2: any, param3: globalAndroid.os.Looper, param4: com.google.android.gms.common.api.internal.StatusExceptionMapper);
						public constructor(param0: globalAndroid.app.Activity, param1: com.google.android.gms.common.api.Api<any>, param2: any, param3: com.google.android.gms.common.api.GoogleApi.Settings);
						/** @deprecated */
						public constructor(param0: globalAndroid.content.Context, param1: com.google.android.gms.common.api.Api<any>, param2: any, param3: com.google.android.gms.common.api.internal.StatusExceptionMapper);
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module location {
					export class zza extends com.google.android.gms.common.api.Api.AbstractClientBuilder<com.google.android.gms.internal.location.zzaz,com.google.android.gms.common.api.Api.ApiOptions.NoOptions> {
						public static class: java.lang.Class<com.google.android.gms.location.zza>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module location {
					export class zzaa extends globalAndroid.os.Parcelable.Creator<com.google.android.gms.location.LocationAvailability> {
						public static class: java.lang.Class<com.google.android.gms.location.zzaa>;
						public constructor();
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module location {
					export class zzab extends globalAndroid.os.Parcelable.Creator<com.google.android.gms.location.LocationRequest> {
						public static class: java.lang.Class<com.google.android.gms.location.zzab>;
						public constructor();
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module location {
					export class zzac extends globalAndroid.os.Parcelable.Creator<com.google.android.gms.location.LocationResult> {
						public static class: java.lang.Class<com.google.android.gms.location.zzac>;
						public constructor();
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module location {
					export class zzad extends com.google.android.gms.common.api.Api.AbstractClientBuilder<com.google.android.gms.internal.location.zzaz,com.google.android.gms.common.api.Api.ApiOptions.NoOptions> {
						public static class: java.lang.Class<com.google.android.gms.location.zzad>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module location {
					export class zzae extends com.google.android.gms.common.internal.safeparcel.AbstractSafeParcelable {
						public static class: java.lang.Class<com.google.android.gms.location.zzae>;
						public static CREATOR: any /* globalAndroid.os.Parcelable.Creator<com.google.android.gms.location.zzae>*/;
						public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module location {
					export class zzaf extends java.lang.Object /* globalAndroid.os.Parcelable.Creator<com.google.android.gms.location.zzae>*/ {
						public static class: java.lang.Class<com.google.android.gms.location.zzaf>;
						public constructor();
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module location {
					export class zzag extends globalAndroid.os.Parcelable.Creator<com.google.android.gms.location.LocationSettingsRequest> {
						public static class: java.lang.Class<com.google.android.gms.location.zzag>;
						public constructor();
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module location {
					export class zzah extends globalAndroid.os.Parcelable.Creator<com.google.android.gms.location.LocationSettingsResult> {
						public static class: java.lang.Class<com.google.android.gms.location.zzah>;
						public constructor();
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module location {
					export class zzai extends globalAndroid.os.Parcelable.Creator<com.google.android.gms.location.LocationSettingsStates> {
						public static class: java.lang.Class<com.google.android.gms.location.zzai>;
						public constructor();
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module location {
					export class zzaj extends com.google.android.gms.common.internal.safeparcel.AbstractSafeParcelable {
						public static class: java.lang.Class<com.google.android.gms.location.zzaj>;
						public static CREATOR: any /* globalAndroid.os.Parcelable.Creator<com.google.android.gms.location.zzaj>*/;
						public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module location {
					export class zzak extends java.lang.Object /* globalAndroid.os.Parcelable.Creator<com.google.android.gms.location.zzaj>*/ {
						public static class: java.lang.Class<com.google.android.gms.location.zzak>;
						public constructor();
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module location {
					export class zzal extends com.google.android.gms.common.internal.safeparcel.AbstractSafeParcelable {
						public static class: java.lang.Class<com.google.android.gms.location.zzal>;
						public static CREATOR: any /* globalAndroid.os.Parcelable.Creator<com.google.android.gms.location.zzal>*/;
						public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module location {
					export class zzam extends java.lang.Object /* globalAndroid.os.Parcelable.Creator<com.google.android.gms.location.zzal>*/ {
						public static class: java.lang.Class<com.google.android.gms.location.zzam>;
						public constructor();
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module location {
					export class zzb extends globalAndroid.os.Parcelable.Creator<com.google.android.gms.location.ActivityRecognitionResult> {
						public static class: java.lang.Class<com.google.android.gms.location.zzb>;
						public constructor();
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module location {
					export class zzc extends globalAndroid.os.Parcelable.Creator<com.google.android.gms.location.ActivityTransition> {
						public static class: java.lang.Class<com.google.android.gms.location.zzc>;
						public constructor();
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module location {
					export class zzd extends globalAndroid.os.Parcelable.Creator<com.google.android.gms.location.ActivityTransitionEvent> {
						public static class: java.lang.Class<com.google.android.gms.location.zzd>;
						public constructor();
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module location {
					export class zze extends java.util.Comparator<com.google.android.gms.location.ActivityTransition> {
						public static class: java.lang.Class<com.google.android.gms.location.zze>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module location {
					export class zzf extends globalAndroid.os.Parcelable.Creator<com.google.android.gms.location.ActivityTransitionRequest> {
						public static class: java.lang.Class<com.google.android.gms.location.zzf>;
						public constructor();
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module location {
					export class zzg extends globalAndroid.os.Parcelable.Creator<com.google.android.gms.location.ActivityTransitionResult> {
						public static class: java.lang.Class<com.google.android.gms.location.zzg>;
						public constructor();
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module location {
					export class zzh extends java.util.Comparator<com.google.android.gms.location.DetectedActivity> {
						public static class: java.lang.Class<com.google.android.gms.location.zzh>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module location {
					export class zzi extends globalAndroid.os.Parcelable.Creator<com.google.android.gms.location.DetectedActivity> {
						public static class: java.lang.Class<com.google.android.gms.location.zzi>;
						public constructor();
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module location {
					export class zzj extends com.google.android.gms.common.internal.safeparcel.AbstractSafeParcelable {
						public static class: java.lang.Class<com.google.android.gms.location.zzj>;
						public static CREATOR: any /* globalAndroid.os.Parcelable.Creator<com.google.android.gms.location.zzj>*/;
						public constructor();
						public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module location {
					export class zzk extends java.lang.Object /* globalAndroid.os.Parcelable.Creator<com.google.android.gms.location.zzj>*/ {
						public static class: java.lang.Class<com.google.android.gms.location.zzk>;
						public constructor();
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module location {
					export class zzl extends com.google.android.gms.common.api.internal.TaskApiCall<com.google.android.gms.internal.location.zzaz,globalAndroid.location.Location> {
						public static class: java.lang.Class<com.google.android.gms.location.zzl>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module location {
					export class zzm extends com.google.android.gms.common.api.internal.TaskApiCall<com.google.android.gms.internal.location.zzaz,com.google.android.gms.location.LocationAvailability> {
						public static class: java.lang.Class<com.google.android.gms.location.zzm>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module location {
					export class zzn extends com.google.android.gms.common.api.internal.RegisterListenerMethod<com.google.android.gms.internal.location.zzaz,com.google.android.gms.location.LocationCallback> {
						public static class: java.lang.Class<com.google.android.gms.location.zzn>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module location {
					export class zzo extends com.google.android.gms.common.api.internal.UnregisterListenerMethod<com.google.android.gms.internal.location.zzaz,com.google.android.gms.location.LocationCallback> {
						public static class: java.lang.Class<com.google.android.gms.location.zzo>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module location {
					export class zzp extends com.google.android.gms.internal.location.zzak {
						public static class: java.lang.Class<com.google.android.gms.location.zzp>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module location {
					export class zzq extends globalAndroid.os.Parcelable.Creator<com.google.android.gms.location.GeofencingRequest> {
						public static class: java.lang.Class<com.google.android.gms.location.zzq>;
						public constructor();
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module location {
					export class zzr {
						public static class: java.lang.Class<com.google.android.gms.location.zzr>;
						/**
						 * Constructs a new instance of the com.google.android.gms.location.zzr interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
						});
						public constructor();
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module location {
					export class zzs extends com.google.android.gms.internal.location.zzb implements com.google.android.gms.location.zzr {
						public static class: java.lang.Class<com.google.android.gms.location.zzs>;
						public dispatchTransaction(param0: number, param1: globalAndroid.os.Parcel, param2: globalAndroid.os.Parcel, param3: number): boolean;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module location {
					export class zzt extends com.google.android.gms.internal.location.zza implements com.google.android.gms.location.zzr {
						public static class: java.lang.Class<com.google.android.gms.location.zzt>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module location {
					export class zzu {
						public static class: java.lang.Class<com.google.android.gms.location.zzu>;
						/**
						 * Constructs a new instance of the com.google.android.gms.location.zzu interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onLocationResult(param0: com.google.android.gms.location.LocationResult): void;
							onLocationAvailability(param0: com.google.android.gms.location.LocationAvailability): void;
						});
						public constructor();
						public onLocationResult(param0: com.google.android.gms.location.LocationResult): void;
						public onLocationAvailability(param0: com.google.android.gms.location.LocationAvailability): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module location {
					export abstract class zzv extends com.google.android.gms.internal.location.zzb implements com.google.android.gms.location.zzu {
						public static class: java.lang.Class<com.google.android.gms.location.zzv>;
						public onLocationResult(param0: com.google.android.gms.location.LocationResult): void;
						public constructor();
						public onLocationAvailability(param0: com.google.android.gms.location.LocationAvailability): void;
						public dispatchTransaction(param0: number, param1: globalAndroid.os.Parcel, param2: globalAndroid.os.Parcel, param3: number): boolean;
						public constructor(param0: string);
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module location {
					export class zzw extends com.google.android.gms.internal.location.zza implements com.google.android.gms.location.zzu {
						public static class: java.lang.Class<com.google.android.gms.location.zzw>;
						public onLocationResult(param0: com.google.android.gms.location.LocationResult): void;
						public onLocationAvailability(param0: com.google.android.gms.location.LocationAvailability): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module location {
					export class zzx {
						public static class: java.lang.Class<com.google.android.gms.location.zzx>;
						/**
						 * Constructs a new instance of the com.google.android.gms.location.zzx interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onLocationChanged(param0: globalAndroid.location.Location): void;
						});
						public constructor();
						public onLocationChanged(param0: globalAndroid.location.Location): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module location {
					export abstract class zzy extends com.google.android.gms.internal.location.zzb implements com.google.android.gms.location.zzx {
						public static class: java.lang.Class<com.google.android.gms.location.zzy>;
						public constructor();
						public onLocationChanged(param0: globalAndroid.location.Location): void;
						public dispatchTransaction(param0: number, param1: globalAndroid.os.Parcel, param2: globalAndroid.os.Parcel, param3: number): boolean;
						public constructor(param0: string);
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module location {
					export class zzz extends com.google.android.gms.internal.location.zza implements com.google.android.gms.location.zzx {
						public static class: java.lang.Class<com.google.android.gms.location.zzz>;
						public onLocationChanged(param0: globalAndroid.location.Location): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module security {
					export class ProviderInstaller {
						public static class: java.lang.Class<com.google.android.gms.security.ProviderInstaller>;
						public static PROVIDER_NAME: string;
						public constructor();
						public static installIfNeeded(param0: globalAndroid.content.Context): void;
						public static installIfNeededAsync(param0: globalAndroid.content.Context, param1: com.google.android.gms.security.ProviderInstaller.ProviderInstallListener): void;
					}
					export module ProviderInstaller {
						export class ProviderInstallListener {
							public static class: java.lang.Class<com.google.android.gms.security.ProviderInstaller.ProviderInstallListener>;
							/**
							 * Constructs a new instance of the com.google.android.gms.security.ProviderInstaller$ProviderInstallListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								onProviderInstalled(): void;
								onProviderInstallFailed(param0: number, param1: globalAndroid.content.Intent): void;
							});
							public constructor();
							public onProviderInstalled(): void;
							public onProviderInstallFailed(param0: number, param1: globalAndroid.content.Intent): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module security {
					export class zza extends globalAndroid.os.AsyncTask<java.lang.Void,java.lang.Void,java.lang.Integer> {
						public static class: java.lang.Class<com.google.android.gms.security.zza>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module signin {
					export class SignInOptions extends com.google.android.gms.common.api.Api.ApiOptions.Optional {
						public static class: java.lang.Class<com.google.android.gms.signin.SignInOptions>;
						public static DEFAULT: com.google.android.gms.signin.SignInOptions;
						public isIdTokenRequested(): boolean;
						public waitForAccessTokenRefresh(): boolean;
						public getServerClientId(): string;
						public isForceCodeForRefreshToken(): boolean;
						public getHostedDomain(): string;
						public isOfflineAccessRequested(): boolean;
						public getAuthApiSignInModuleVersion(): java.lang.Long;
						public getRealClientLibraryVersion(): java.lang.Long;
					}
					export module SignInOptions {
						export class zaa {
							public static class: java.lang.Class<com.google.android.gms.signin.SignInOptions.zaa>;
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module signin {
					export module internal {
						export class SignInClientImpl extends com.google.android.gms.common.internal.GmsClient<com.google.android.gms.signin.internal.zaf> implements com.google.android.gms.signin.zad  {
							public static class: java.lang.Class<com.google.android.gms.signin.internal.SignInClientImpl>;
							public getStartServiceAction(): string;
							public requiresGooglePlayServices(): boolean;
							public getServiceBrokerBinder(): globalAndroid.os.IBinder;
							public getServiceDescriptor(): string;
							public dump(param0: string, param1: java.io.FileDescriptor, param2: java.io.PrintWriter, param3: native.Array<string>): void;
							public getAvailableFeatures(): native.Array<com.google.android.gms.common.Feature>;
							public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.os.Looper, param2: com.google.android.gms.common.internal.GmsClientSupervisor, param3: com.google.android.gms.common.GoogleApiAvailabilityLight, param4: number, param5: com.google.android.gms.common.internal.BaseGmsClient.BaseConnectionCallbacks, param6: com.google.android.gms.common.internal.BaseGmsClient.BaseOnConnectionFailedListener, param7: string);
							public zacv(): void;
							public connect(): void;
							public getEndpointPackageName(): string;
							public getSignInIntent(): globalAndroid.content.Intent;
							public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.os.Looper, param2: number, param3: com.google.android.gms.common.internal.ClientSettings);
							public static createBundleFromClientSettings(param0: com.google.android.gms.common.internal.ClientSettings): globalAndroid.os.Bundle;
							public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.os.Handler, param2: number, param3: com.google.android.gms.common.internal.ClientSettings);
							public getConnectionHint(): globalAndroid.os.Bundle;
							public getGetServiceRequestExtraArgs(): globalAndroid.os.Bundle;
							public requiresAccount(): boolean;
							public disconnect(): void;
							public isConnected(): boolean;
							public providesSignIn(): boolean;
							public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.os.Looper, param2: boolean, param3: com.google.android.gms.common.internal.ClientSettings, param4: com.google.android.gms.signin.SignInOptions, param5: com.google.android.gms.common.api.GoogleApiClient.ConnectionCallbacks, param6: com.google.android.gms.common.api.GoogleApiClient.OnConnectionFailedListener);
							public zaa(param0: com.google.android.gms.signin.internal.zad): void;
							public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.os.Looper, param2: number, param3: com.google.android.gms.common.internal.BaseGmsClient.BaseConnectionCallbacks, param4: com.google.android.gms.common.internal.BaseGmsClient.BaseOnConnectionFailedListener, param5: string);
							public isConnecting(): boolean;
							public zaa(param0: com.google.android.gms.common.internal.IAccountAccessor, param1: boolean): void;
							public getMinApkVersion(): number;
							public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.os.Looper, param2: number, param3: com.google.android.gms.common.internal.ClientSettings, param4: com.google.android.gms.common.api.GoogleApiClient.ConnectionCallbacks, param5: com.google.android.gms.common.api.GoogleApiClient.OnConnectionFailedListener);
							public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.os.Looper, param2: com.google.android.gms.common.internal.GmsClientSupervisor, param3: com.google.android.gms.common.GoogleApiAvailability, param4: number, param5: com.google.android.gms.common.internal.ClientSettings, param6: com.google.android.gms.common.api.GoogleApiClient.ConnectionCallbacks, param7: com.google.android.gms.common.api.GoogleApiClient.OnConnectionFailedListener);
							public connect(param0: com.google.android.gms.common.internal.BaseGmsClient.ConnectionProgressReportCallbacks): void;
							public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.os.Handler, param2: com.google.android.gms.common.internal.GmsClientSupervisor, param3: com.google.android.gms.common.GoogleApiAvailability, param4: number, param5: com.google.android.gms.common.internal.ClientSettings, param6: com.google.android.gms.common.api.GoogleApiClient.ConnectionCallbacks, param7: com.google.android.gms.common.api.GoogleApiClient.OnConnectionFailedListener);
							public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.os.Handler, param2: com.google.android.gms.common.internal.GmsClientSupervisor, param3: com.google.android.gms.common.GoogleApiAvailabilityLight, param4: number, param5: com.google.android.gms.common.internal.BaseGmsClient.BaseConnectionCallbacks, param6: com.google.android.gms.common.internal.BaseGmsClient.BaseOnConnectionFailedListener);
							public onUserSignOut(param0: com.google.android.gms.common.internal.BaseGmsClient.SignOutCallbacks): void;
							public getRequiredFeatures(): native.Array<com.google.android.gms.common.Feature>;
							public getRemoteService(param0: com.google.android.gms.common.internal.IAccountAccessor, param1: java.util.Set<com.google.android.gms.common.api.Scope>): void;
							public requiresSignIn(): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module signin {
					export module internal {
						export class zaa extends com.google.android.gms.common.internal.safeparcel.AbstractSafeParcelable implements com.google.android.gms.common.api.Result {
							public static class: java.lang.Class<com.google.android.gms.signin.internal.zaa>;
							public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.gms.signin.internal.zaa>;
							public constructor();
							public getStatus(): com.google.android.gms.common.api.Status;
							public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module signin {
					export module internal {
						export class zab extends globalAndroid.os.Parcelable.Creator<com.google.android.gms.signin.internal.zaa> {
							public static class: java.lang.Class<com.google.android.gms.signin.internal.zab>;
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module signin {
					export module internal {
						export class zac extends com.google.android.gms.signin.internal.zae {
							public static class: java.lang.Class<com.google.android.gms.signin.internal.zac>;
							public constructor();
							public constructor(param0: string);
							public zah(param0: com.google.android.gms.common.api.Status): void;
							public zag(param0: com.google.android.gms.common.api.Status): void;
							public zab(param0: com.google.android.gms.signin.internal.zaj): void;
							public zaa(param0: com.google.android.gms.common.ConnectionResult, param1: com.google.android.gms.signin.internal.zaa): void;
							public zaa(param0: com.google.android.gms.common.api.Status, param1: com.google.android.gms.auth.api.signin.GoogleSignInAccount): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module signin {
					export module internal {
						export class zad {
							public static class: java.lang.Class<com.google.android.gms.signin.internal.zad>;
							/**
							 * Constructs a new instance of the com.google.android.gms.signin.internal.zad interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								zaa(param0: com.google.android.gms.common.ConnectionResult, param1: com.google.android.gms.signin.internal.zaa): void;
								zag(param0: com.google.android.gms.common.api.Status): void;
								zah(param0: com.google.android.gms.common.api.Status): void;
								zaa(param0: com.google.android.gms.common.api.Status, param1: com.google.android.gms.auth.api.signin.GoogleSignInAccount): void;
								zab(param0: com.google.android.gms.signin.internal.zaj): void;
							});
							public constructor();
							public zah(param0: com.google.android.gms.common.api.Status): void;
							public zag(param0: com.google.android.gms.common.api.Status): void;
							public zab(param0: com.google.android.gms.signin.internal.zaj): void;
							public zaa(param0: com.google.android.gms.common.ConnectionResult, param1: com.google.android.gms.signin.internal.zaa): void;
							public zaa(param0: com.google.android.gms.common.api.Status, param1: com.google.android.gms.auth.api.signin.GoogleSignInAccount): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module signin {
					export module internal {
						export abstract class zae extends com.google.android.gms.internal.base.zab implements com.google.android.gms.signin.internal.zad {
							public static class: java.lang.Class<com.google.android.gms.signin.internal.zae>;
							public constructor();
							public constructor(param0: string);
							public zah(param0: com.google.android.gms.common.api.Status): void;
							public dispatchTransaction(param0: number, param1: globalAndroid.os.Parcel, param2: globalAndroid.os.Parcel, param3: number): boolean;
							public zag(param0: com.google.android.gms.common.api.Status): void;
							public zab(param0: com.google.android.gms.signin.internal.zaj): void;
							public zaa(param0: com.google.android.gms.common.ConnectionResult, param1: com.google.android.gms.signin.internal.zaa): void;
							public zaa(param0: com.google.android.gms.common.api.Status, param1: com.google.android.gms.auth.api.signin.GoogleSignInAccount): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module signin {
					export module internal {
						export class zaf {
							public static class: java.lang.Class<com.google.android.gms.signin.internal.zaf>;
							/**
							 * Constructs a new instance of the com.google.android.gms.signin.internal.zaf interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								zam(param0: number): void;
								zaa(param0: com.google.android.gms.common.internal.IAccountAccessor, param1: number, param2: boolean): void;
								zaa(param0: com.google.android.gms.signin.internal.zah, param1: com.google.android.gms.signin.internal.zad): void;
							});
							public constructor();
							public zaa(param0: com.google.android.gms.common.internal.IAccountAccessor, param1: number, param2: boolean): void;
							public zaa(param0: com.google.android.gms.signin.internal.zah, param1: com.google.android.gms.signin.internal.zad): void;
							public zam(param0: number): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module signin {
					export module internal {
						export class zag extends com.google.android.gms.internal.base.zaa implements com.google.android.gms.signin.internal.zaf {
							public static class: java.lang.Class<com.google.android.gms.signin.internal.zag>;
							public zaa(param0: com.google.android.gms.common.internal.IAccountAccessor, param1: number, param2: boolean): void;
							public zaa(param0: com.google.android.gms.signin.internal.zah, param1: com.google.android.gms.signin.internal.zad): void;
							public zaa(param0: number, param1: globalAndroid.os.Parcel): globalAndroid.os.Parcel;
							public zaa(): globalAndroid.os.Parcel;
							public zam(param0: number): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module signin {
					export module internal {
						export class zah extends com.google.android.gms.common.internal.safeparcel.AbstractSafeParcelable {
							public static class: java.lang.Class<com.google.android.gms.signin.internal.zah>;
							public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.gms.signin.internal.zah>;
							public constructor();
							public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
							public constructor(param0: com.google.android.gms.common.internal.ResolveAccountRequest);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module signin {
					export module internal {
						export class zai extends globalAndroid.os.Parcelable.Creator<com.google.android.gms.signin.internal.zah> {
							public static class: java.lang.Class<com.google.android.gms.signin.internal.zai>;
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module signin {
					export module internal {
						export class zaj extends com.google.android.gms.common.internal.safeparcel.AbstractSafeParcelable {
							public static class: java.lang.Class<com.google.android.gms.signin.internal.zaj>;
							public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.gms.signin.internal.zaj>;
							public constructor();
							public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
							public zacw(): com.google.android.gms.common.internal.ResolveAccountResponse;
							public constructor(param0: number);
							public getConnectionResult(): com.google.android.gms.common.ConnectionResult;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module signin {
					export module internal {
						export class zak extends globalAndroid.os.Parcelable.Creator<com.google.android.gms.signin.internal.zaj> {
							public static class: java.lang.Class<com.google.android.gms.signin.internal.zak>;
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module signin {
					export class zaa {
						public static class: java.lang.Class<com.google.android.gms.signin.zaa>;
						public static zapg: com.google.android.gms.common.api.Api.AbstractClientBuilder<com.google.android.gms.signin.internal.SignInClientImpl,com.google.android.gms.signin.SignInOptions>;
						public static API: com.google.android.gms.common.api.Api<com.google.android.gms.signin.SignInOptions>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module signin {
					export class zab extends com.google.android.gms.common.api.Api.AbstractClientBuilder<com.google.android.gms.signin.internal.SignInClientImpl,com.google.android.gms.signin.SignInOptions> {
						public static class: java.lang.Class<com.google.android.gms.signin.zab>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module signin {
					export class zac extends com.google.android.gms.common.api.Api.AbstractClientBuilder<com.google.android.gms.signin.internal.SignInClientImpl,any> {
						public static class: java.lang.Class<com.google.android.gms.signin.zac>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module signin {
					export class zad extends com.google.android.gms.common.api.Api.Client {
						public static class: java.lang.Class<com.google.android.gms.signin.zad>;
						/**
						 * Constructs a new instance of the com.google.android.gms.signin.zad interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							zaa(param0: com.google.android.gms.signin.internal.zad): void;
							zaa(param0: com.google.android.gms.common.internal.IAccountAccessor, param1: boolean): void;
							zacv(): void;
							connect(): void;
							connect(param0: com.google.android.gms.common.internal.BaseGmsClient.ConnectionProgressReportCallbacks): void;
							disconnect(): void;
							isConnected(): boolean;
							isConnecting(): boolean;
							getRemoteService(param0: com.google.android.gms.common.internal.IAccountAccessor, param1: java.util.Set<com.google.android.gms.common.api.Scope>): void;
							requiresSignIn(): boolean;
							onUserSignOut(param0: com.google.android.gms.common.internal.BaseGmsClient.SignOutCallbacks): void;
							requiresAccount(): boolean;
							requiresGooglePlayServices(): boolean;
							providesSignIn(): boolean;
							getSignInIntent(): globalAndroid.content.Intent;
							dump(param0: string, param1: java.io.FileDescriptor, param2: java.io.PrintWriter, param3: native.Array<string>): void;
							getServiceBrokerBinder(): globalAndroid.os.IBinder;
							getRequiredFeatures(): native.Array<com.google.android.gms.common.Feature>;
							getEndpointPackageName(): string;
							getMinApkVersion(): number;
							getAvailableFeatures(): native.Array<com.google.android.gms.common.Feature>;
						});
						public constructor();
						public requiresGooglePlayServices(): boolean;
						public requiresAccount(): boolean;
						public zaa(param0: com.google.android.gms.signin.internal.zad): void;
						public getServiceBrokerBinder(): globalAndroid.os.IBinder;
						public providesSignIn(): boolean;
						public isConnected(): boolean;
						public getEndpointPackageName(): string;
						public zaa(param0: com.google.android.gms.common.internal.IAccountAccessor, param1: boolean): void;
						public connect(param0: com.google.android.gms.common.internal.BaseGmsClient.ConnectionProgressReportCallbacks): void;
						public connect(): void;
						public getMinApkVersion(): number;
						public isConnecting(): boolean;
						public getRemoteService(param0: com.google.android.gms.common.internal.IAccountAccessor, param1: java.util.Set<com.google.android.gms.common.api.Scope>): void;
						public getRequiredFeatures(): native.Array<com.google.android.gms.common.Feature>;
						public disconnect(): void;
						public onUserSignOut(param0: com.google.android.gms.common.internal.BaseGmsClient.SignOutCallbacks): void;
						public getSignInIntent(): globalAndroid.content.Intent;
						public getAvailableFeatures(): native.Array<com.google.android.gms.common.Feature>;
						public requiresSignIn(): boolean;
						public dump(param0: string, param1: java.io.FileDescriptor, param2: java.io.PrintWriter, param3: native.Array<string>): void;
						public zacv(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module tasks {
					export abstract class CancellationToken {
						public static class: java.lang.Class<com.google.android.gms.tasks.CancellationToken>;
						public constructor();
						public isCancellationRequested(): boolean;
						public onCanceledRequested(param0: com.google.android.gms.tasks.OnTokenCanceledListener): com.google.android.gms.tasks.CancellationToken;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module tasks {
					export class CancellationTokenSource {
						public static class: java.lang.Class<com.google.android.gms.tasks.CancellationTokenSource>;
						public constructor();
						public cancel(): void;
						public getToken(): com.google.android.gms.tasks.CancellationToken;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module tasks {
					export class Continuation<TResult, TContinuationResult>  extends java.lang.Object {
						public static class: java.lang.Class<com.google.android.gms.tasks.Continuation<any,any>>;
						/**
						 * Constructs a new instance of the com.google.android.gms.tasks.Continuation<any,any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							then(param0: com.google.android.gms.tasks.Task<TResult>): TContinuationResult;
						});
						public constructor();
						public then(param0: com.google.android.gms.tasks.Task<TResult>): TContinuationResult;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module tasks {
					export class OnCanceledListener {
						public static class: java.lang.Class<com.google.android.gms.tasks.OnCanceledListener>;
						/**
						 * Constructs a new instance of the com.google.android.gms.tasks.OnCanceledListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onCanceled(): void;
						});
						public constructor();
						public onCanceled(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module tasks {
					export class OnCompleteListener<TResult>  extends java.lang.Object {
						public static class: java.lang.Class<com.google.android.gms.tasks.OnCompleteListener<any>>;
						/**
						 * Constructs a new instance of the com.google.android.gms.tasks.OnCompleteListener<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onComplete(param0: com.google.android.gms.tasks.Task<TResult>): void;
						});
						public constructor();
						public onComplete(param0: com.google.android.gms.tasks.Task<TResult>): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module tasks {
					export class OnFailureListener {
						public static class: java.lang.Class<com.google.android.gms.tasks.OnFailureListener>;
						/**
						 * Constructs a new instance of the com.google.android.gms.tasks.OnFailureListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onFailure(param0: java.lang.Exception): void;
						});
						public constructor();
						public onFailure(param0: java.lang.Exception): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module tasks {
					export class OnSuccessListener<TResult>  extends java.lang.Object {
						public static class: java.lang.Class<com.google.android.gms.tasks.OnSuccessListener<any>>;
						/**
						 * Constructs a new instance of the com.google.android.gms.tasks.OnSuccessListener<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onSuccess(param0: TResult): void;
						});
						public constructor();
						public onSuccess(param0: TResult): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module tasks {
					export class OnTokenCanceledListener {
						public static class: java.lang.Class<com.google.android.gms.tasks.OnTokenCanceledListener>;
						/**
						 * Constructs a new instance of the com.google.android.gms.tasks.OnTokenCanceledListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onCanceled(): void;
						});
						public constructor();
						public onCanceled(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module tasks {
					export class RuntimeExecutionException {
						public static class: java.lang.Class<com.google.android.gms.tasks.RuntimeExecutionException>;
						public constructor(param0: java.lang.Throwable);
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module tasks {
					export class SuccessContinuation<TResult, TContinuationResult>  extends java.lang.Object {
						public static class: java.lang.Class<com.google.android.gms.tasks.SuccessContinuation<any,any>>;
						/**
						 * Constructs a new instance of the com.google.android.gms.tasks.SuccessContinuation<any,any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							then(param0: TResult): com.google.android.gms.tasks.Task<TContinuationResult>;
						});
						public constructor();
						public then(param0: TResult): com.google.android.gms.tasks.Task<TContinuationResult>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module tasks {
					export abstract class Task<TResult>  extends java.lang.Object {
						public static class: java.lang.Class<com.google.android.gms.tasks.Task<any>>;
						public addOnFailureListener(param0: com.google.android.gms.tasks.OnFailureListener): com.google.android.gms.tasks.Task<TResult>;
						public continueWithTask(param0: java.util.concurrent.Executor, param1: com.google.android.gms.tasks.Continuation<any,any>): com.google.android.gms.tasks.Task<any>;
						public addOnFailureListener(param0: globalAndroid.app.Activity, param1: com.google.android.gms.tasks.OnFailureListener): com.google.android.gms.tasks.Task<TResult>;
						public addOnCompleteListener(param0: java.util.concurrent.Executor, param1: com.google.android.gms.tasks.OnCompleteListener<TResult>): com.google.android.gms.tasks.Task<TResult>;
						public continueWithTask(param0: com.google.android.gms.tasks.Continuation<any,any>): com.google.android.gms.tasks.Task<any>;
						public addOnFailureListener(param0: java.util.concurrent.Executor, param1: com.google.android.gms.tasks.OnFailureListener): com.google.android.gms.tasks.Task<TResult>;
						public addOnCompleteListener(param0: com.google.android.gms.tasks.OnCompleteListener<TResult>): com.google.android.gms.tasks.Task<TResult>;
						public continueWith(param0: com.google.android.gms.tasks.Continuation<any,any>): com.google.android.gms.tasks.Task<any>;
						public continueWith(param0: java.util.concurrent.Executor, param1: com.google.android.gms.tasks.Continuation<any,any>): com.google.android.gms.tasks.Task<any>;
						public addOnCanceledListener(param0: globalAndroid.app.Activity, param1: com.google.android.gms.tasks.OnCanceledListener): com.google.android.gms.tasks.Task<TResult>;
						public addOnSuccessListener(param0: com.google.android.gms.tasks.OnSuccessListener<any>): com.google.android.gms.tasks.Task<TResult>;
						public isSuccessful(): boolean;
						public addOnSuccessListener(param0: java.util.concurrent.Executor, param1: com.google.android.gms.tasks.OnSuccessListener<any>): com.google.android.gms.tasks.Task<TResult>;
						public addOnSuccessListener(param0: globalAndroid.app.Activity, param1: com.google.android.gms.tasks.OnSuccessListener<any>): com.google.android.gms.tasks.Task<TResult>;
						public addOnCanceledListener(param0: java.util.concurrent.Executor, param1: com.google.android.gms.tasks.OnCanceledListener): com.google.android.gms.tasks.Task<TResult>;
						public onSuccessTask(param0: com.google.android.gms.tasks.SuccessContinuation<any,any>): com.google.android.gms.tasks.Task<any>;
						public constructor();
						public addOnCompleteListener(param0: globalAndroid.app.Activity, param1: com.google.android.gms.tasks.OnCompleteListener<TResult>): com.google.android.gms.tasks.Task<TResult>;
						public onSuccessTask(param0: java.util.concurrent.Executor, param1: com.google.android.gms.tasks.SuccessContinuation<any,any>): com.google.android.gms.tasks.Task<any>;
						public addOnCanceledListener(param0: com.google.android.gms.tasks.OnCanceledListener): com.google.android.gms.tasks.Task<TResult>;
						public getResult(): TResult;
						public isComplete(): boolean;
						public isCanceled(): boolean;
						public getResult(param0: java.lang.Class): any;
						public getException(): java.lang.Exception;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module tasks {
					export class TaskCompletionSource<TResult>  extends java.lang.Object {
						public static class: java.lang.Class<com.google.android.gms.tasks.TaskCompletionSource<any>>;
						public trySetResult(param0: TResult): boolean;
						public getTask(): com.google.android.gms.tasks.Task<TResult>;
						public constructor();
						public constructor(param0: com.google.android.gms.tasks.CancellationToken);
						public trySetException(param0: java.lang.Exception): boolean;
						public setException(param0: java.lang.Exception): void;
						public setResult(param0: TResult): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module tasks {
					export class TaskExecutors {
						public static class: java.lang.Class<com.google.android.gms.tasks.TaskExecutors>;
						public static MAIN_THREAD: java.util.concurrent.Executor;
					}
					export module TaskExecutors {
						export class zza {
							public static class: java.lang.Class<com.google.android.gms.tasks.TaskExecutors.zza>;
							public constructor();
							public execute(param0: java.lang.Runnable): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module tasks {
					export class Tasks {
						public static class: java.lang.Class<com.google.android.gms.tasks.Tasks>;
						public static await(param0: com.google.android.gms.tasks.Task<any>, param1: number, param2: java.util.concurrent.TimeUnit): any;
						public static forResult(param0: any): com.google.android.gms.tasks.Task<any>;
						public static call(param0: java.util.concurrent.Executor, param1: java.util.concurrent.Callable): com.google.android.gms.tasks.Task<any>;
						public static whenAllComplete(param0: native.Array<com.google.android.gms.tasks.Task<any>>): com.google.android.gms.tasks.Task<java.util.List<com.google.android.gms.tasks.Task<any>>>;
						public static whenAllSuccess(param0: java.util.Collection): com.google.android.gms.tasks.Task<any>;
						public static whenAll(param0: java.util.Collection<any>): com.google.android.gms.tasks.Task<java.lang.Void>;
						public static forException(param0: java.lang.Exception): com.google.android.gms.tasks.Task<any>;
						public static await(param0: com.google.android.gms.tasks.Task<any>): any;
						public static whenAllSuccess(param0: native.Array<com.google.android.gms.tasks.Task<any>>): com.google.android.gms.tasks.Task<any>;
						public static whenAllComplete(param0: java.util.Collection<any>): com.google.android.gms.tasks.Task<java.util.List<com.google.android.gms.tasks.Task<any>>>;
						public static forCanceled(): com.google.android.gms.tasks.Task<any>;
						public static call(param0: java.util.concurrent.Callable): com.google.android.gms.tasks.Task<any>;
						public static whenAll(param0: native.Array<com.google.android.gms.tasks.Task<any>>): com.google.android.gms.tasks.Task<java.lang.Void>;
					}
					export module Tasks {
						export class zza extends com.google.android.gms.tasks.Tasks.zzb {
							public static class: java.lang.Class<com.google.android.gms.tasks.Tasks.zza>;
							public onSuccess(param0: any): void;
							public onFailure(param0: java.lang.Exception): void;
							public await(param0: number, param1: java.util.concurrent.TimeUnit): boolean;
							public await(): void;
							public onCanceled(): void;
						}
						export class zzb extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.gms.tasks.Tasks.zzb>;
							/**
							 * Constructs a new instance of the com.google.android.gms.tasks.Tasks$zzb interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								onCanceled(): void;
								onFailure(param0: java.lang.Exception): void;
								onSuccess(param0: any): void;
							});
							public constructor();
							public onSuccess(param0: any): void;
							public onFailure(param0: java.lang.Exception): void;
							public onCanceled(): void;
						}
						export class zzc extends com.google.android.gms.tasks.Tasks.zzb {
							public static class: java.lang.Class<com.google.android.gms.tasks.Tasks.zzc>;
							public constructor(param0: number, param1: com.google.android.gms.tasks.zzu<java.lang.Void>);
							public onSuccess(param0: any): void;
							public onFailure(param0: java.lang.Exception): void;
							public onCanceled(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module tasks {
					export class zza extends com.google.android.gms.tasks.CancellationToken {
						public static class: java.lang.Class<com.google.android.gms.tasks.zza>;
						public isCancellationRequested(): boolean;
						public cancel(): void;
						public onCanceledRequested(param0: com.google.android.gms.tasks.OnTokenCanceledListener): com.google.android.gms.tasks.CancellationToken;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module tasks {
					export class zzb extends com.google.android.gms.tasks.OnSuccessListener<java.lang.Void> {
						public static class: java.lang.Class<com.google.android.gms.tasks.zzb>;
						public onSuccess(param0: any): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module tasks {
					export class zzc<TResult, TContinuationResult>  extends java.lang.Object /* com.google.android.gms.tasks.zzq<any>*/ {
						public static class: java.lang.Class<com.google.android.gms.tasks.zzc<any,any>>;
						public cancel(): void;
						public onComplete(param0: com.google.android.gms.tasks.Task<any>): void;
						public constructor(param0: java.util.concurrent.Executor, param1: com.google.android.gms.tasks.Continuation<any,any>, param2: any /* com.google.android.gms.tasks.zzu<any>*/);
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module tasks {
					export class zzd {
						public static class: java.lang.Class<com.google.android.gms.tasks.zzd>;
						public run(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module tasks {
					export class zze<TResult, TContinuationResult>  extends java.lang.Object {
						public static class: java.lang.Class<com.google.android.gms.tasks.zze<any,any>>;
						public onFailure(param0: java.lang.Exception): void;
						public onComplete(param0: com.google.android.gms.tasks.Task<TResult>): void;
						public cancel(): void;
						public constructor(param0: java.util.concurrent.Executor, param1: com.google.android.gms.tasks.Continuation<TResult,com.google.android.gms.tasks.Task<TContinuationResult>>, param2: any /* com.google.android.gms.tasks.zzu<TContinuationResult>*/);
						public onSuccess(param0: TContinuationResult): void;
						public onCanceled(): void;
						public onSuccess(param0: TResult): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module tasks {
					export class zzf {
						public static class: java.lang.Class<com.google.android.gms.tasks.zzf>;
						public run(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module tasks {
					export class zzg<TResult>  extends java.lang.Object /* com.google.android.gms.tasks.zzq<any>*/ {
						public static class: java.lang.Class<com.google.android.gms.tasks.zzg<any>>;
						public onComplete(param0: com.google.android.gms.tasks.Task<any>): void;
						public cancel(): void;
						public onComplete(param0: com.google.android.gms.tasks.Task<any>): void;
						public constructor(param0: java.util.concurrent.Executor, param1: com.google.android.gms.tasks.OnCanceledListener);
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module tasks {
					export class zzh {
						public static class: java.lang.Class<com.google.android.gms.tasks.zzh>;
						public run(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module tasks {
					export class zzi<TResult>  extends java.lang.Object /* com.google.android.gms.tasks.zzq<any>*/ {
						public static class: java.lang.Class<com.google.android.gms.tasks.zzi<any>>;
						public cancel(): void;
						public onComplete(param0: com.google.android.gms.tasks.Task<any>): void;
						public constructor(param0: java.util.concurrent.Executor, param1: com.google.android.gms.tasks.OnCompleteListener<any>);
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module tasks {
					export class zzj {
						public static class: java.lang.Class<com.google.android.gms.tasks.zzj>;
						public run(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module tasks {
					export class zzk<TResult>  extends java.lang.Object /* com.google.android.gms.tasks.zzq<any>*/ {
						public static class: java.lang.Class<com.google.android.gms.tasks.zzk<any>>;
						public cancel(): void;
						public onComplete(param0: com.google.android.gms.tasks.Task<any>): void;
						public constructor(param0: java.util.concurrent.Executor, param1: com.google.android.gms.tasks.OnFailureListener);
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module tasks {
					export class zzl {
						public static class: java.lang.Class<com.google.android.gms.tasks.zzl>;
						public run(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module tasks {
					export class zzm<TResult>  extends java.lang.Object /* com.google.android.gms.tasks.zzq<any>*/ {
						public static class: java.lang.Class<com.google.android.gms.tasks.zzm<any>>;
						public constructor(param0: java.util.concurrent.Executor, param1: com.google.android.gms.tasks.OnSuccessListener<any>);
						public cancel(): void;
						public onComplete(param0: com.google.android.gms.tasks.Task<any>): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module tasks {
					export class zzn {
						public static class: java.lang.Class<com.google.android.gms.tasks.zzn>;
						public run(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module tasks {
					export class zzo<TResult, TContinuationResult>  extends java.lang.Object {
						public static class: java.lang.Class<com.google.android.gms.tasks.zzo<any,any>>;
						public constructor(param0: java.util.concurrent.Executor, param1: com.google.android.gms.tasks.SuccessContinuation<TResult,TContinuationResult>, param2: any /* com.google.android.gms.tasks.zzu<TContinuationResult>*/);
						public onFailure(param0: java.lang.Exception): void;
						public onComplete(param0: com.google.android.gms.tasks.Task<TResult>): void;
						public cancel(): void;
						public onSuccess(param0: TContinuationResult): void;
						public onCanceled(): void;
						public onSuccess(param0: TResult): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module tasks {
					export class zzp {
						public static class: java.lang.Class<com.google.android.gms.tasks.zzp>;
						public run(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module tasks {
					export class zzq<TResult>  extends java.lang.Object {
						public static class: java.lang.Class<com.google.android.gms.tasks.zzq<any>>;
						/**
						 * Constructs a new instance of the com.google.android.gms.tasks.zzq<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onComplete(param0: com.google.android.gms.tasks.Task<TResult>): void;
							cancel(): void;
						});
						public constructor();
						public onComplete(param0: com.google.android.gms.tasks.Task<TResult>): void;
						public cancel(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module tasks {
					export class zzr<TResult>  extends java.lang.Object {
						public static class: java.lang.Class<com.google.android.gms.tasks.zzr<any>>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module tasks {
					export class zzs extends com.google.android.gms.tasks.OnTokenCanceledListener {
						public static class: java.lang.Class<com.google.android.gms.tasks.zzs>;
						public onCanceled(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module tasks {
					export class zzt {
						public static class: java.lang.Class<com.google.android.gms.tasks.zzt>;
						public execute(param0: java.lang.Runnable): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module tasks {
					export class zzu<TResult>  extends com.google.android.gms.tasks.Task<any> {
						public static class: java.lang.Class<com.google.android.gms.tasks.zzu<any>>;
						public setResult(param0: any): void;
						public addOnCompleteListener(param0: com.google.android.gms.tasks.OnCompleteListener<any>): com.google.android.gms.tasks.Task<any>;
						public addOnCanceledListener(param0: java.util.concurrent.Executor, param1: com.google.android.gms.tasks.OnCanceledListener): com.google.android.gms.tasks.Task<any>;
						public addOnSuccessListener(param0: globalAndroid.app.Activity, param1: com.google.android.gms.tasks.OnSuccessListener<any>): com.google.android.gms.tasks.Task<any>;
						public continueWithTask(param0: java.util.concurrent.Executor, param1: com.google.android.gms.tasks.Continuation<any,any>): com.google.android.gms.tasks.Task<any>;
						public continueWithTask(param0: com.google.android.gms.tasks.Continuation<any,any>): com.google.android.gms.tasks.Task<any>;
						public continueWith(param0: com.google.android.gms.tasks.Continuation<any,any>): com.google.android.gms.tasks.Task<any>;
						public continueWith(param0: java.util.concurrent.Executor, param1: com.google.android.gms.tasks.Continuation<any,any>): com.google.android.gms.tasks.Task<any>;
						public isSuccessful(): boolean;
						public trySetResult(param0: any): boolean;
						public setException(param0: java.lang.Exception): void;
						public addOnSuccessListener(param0: com.google.android.gms.tasks.OnSuccessListener<any>): com.google.android.gms.tasks.Task<any>;
						public addOnFailureListener(param0: globalAndroid.app.Activity, param1: com.google.android.gms.tasks.OnFailureListener): com.google.android.gms.tasks.Task<any>;
						public onSuccessTask(param0: com.google.android.gms.tasks.SuccessContinuation<any,any>): com.google.android.gms.tasks.Task<any>;
						public trySetException(param0: java.lang.Exception): boolean;
						public getResult(): any;
						public onSuccessTask(param0: java.util.concurrent.Executor, param1: com.google.android.gms.tasks.SuccessContinuation<any,any>): com.google.android.gms.tasks.Task<any>;
						public addOnCanceledListener(param0: globalAndroid.app.Activity, param1: com.google.android.gms.tasks.OnCanceledListener): com.google.android.gms.tasks.Task<any>;
						public isComplete(): boolean;
						public isCanceled(): boolean;
						public getResult(param0: java.lang.Class): any;
						public addOnCompleteListener(param0: java.util.concurrent.Executor, param1: com.google.android.gms.tasks.OnCompleteListener<any>): com.google.android.gms.tasks.Task<any>;
						public addOnFailureListener(param0: java.util.concurrent.Executor, param1: com.google.android.gms.tasks.OnFailureListener): com.google.android.gms.tasks.Task<any>;
						public addOnSuccessListener(param0: java.util.concurrent.Executor, param1: com.google.android.gms.tasks.OnSuccessListener<any>): com.google.android.gms.tasks.Task<any>;
						public getException(): java.lang.Exception;
						public addOnFailureListener(param0: com.google.android.gms.tasks.OnFailureListener): com.google.android.gms.tasks.Task<any>;
						public addOnCanceledListener(param0: com.google.android.gms.tasks.OnCanceledListener): com.google.android.gms.tasks.Task<any>;
						public addOnCompleteListener(param0: globalAndroid.app.Activity, param1: com.google.android.gms.tasks.OnCompleteListener<any>): com.google.android.gms.tasks.Task<any>;
					}
					export module zzu {
						export class zza extends com.google.android.gms.common.api.internal.LifecycleCallback {
							public static class: java.lang.Class<com.google.android.gms.tasks.zzu.zza>;
							public onStop(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module tasks {
					export class zzv {
						public static class: java.lang.Class<com.google.android.gms.tasks.zzv>;
						public run(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module tasks {
					export class zzw extends com.google.android.gms.tasks.Continuation<java.lang.Void,java.util.List<any>> {
						public static class: java.lang.Class<com.google.android.gms.tasks.zzw>;
						public then(param0: com.google.android.gms.tasks.Task<any>): any;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module tasks {
					export class zzx extends com.google.android.gms.tasks.Continuation<java.lang.Void,com.google.android.gms.tasks.Task<java.util.List<com.google.android.gms.tasks.Task<any>>>> {
						public static class: java.lang.Class<com.google.android.gms.tasks.zzx>;
						public then(param0: com.google.android.gms.tasks.Task<any>): any;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export class FirebaseApiNotAvailableException extends com.google.firebase.FirebaseException {
				public static class: java.lang.Class<com.google.firebase.FirebaseApiNotAvailableException>;
				/** @deprecated */
				public constructor();
				public constructor(param0: string, param1: java.lang.Throwable);
				public constructor(param0: string);
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export class FirebaseException {
				public static class: java.lang.Class<com.google.firebase.FirebaseException>;
				/** @deprecated */
				public constructor();
				public constructor(param0: string, param1: java.lang.Throwable);
				public constructor(param0: string);
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export class FirebaseExceptionMapper extends com.google.android.gms.common.api.internal.StatusExceptionMapper {
				public static class: java.lang.Class<com.google.firebase.FirebaseExceptionMapper>;
				public getException(param0: com.google.android.gms.common.api.Status): java.lang.Exception;
				public constructor();
			}
		}
	}
}

//Generics information:
//com.google.android.gms.common.api.Api:1
//com.google.android.gms.common.api.Api.AbstractClientBuilder:2
//com.google.android.gms.common.api.Api.AnyClientKey:1
//com.google.android.gms.common.api.Api.BaseClientBuilder:2
//com.google.android.gms.common.api.Api.ClientKey:1
//com.google.android.gms.common.api.Api.SimpleClient:1
//com.google.android.gms.common.api.Api.zaa:2
//com.google.android.gms.common.api.Api.zab:1
//com.google.android.gms.common.api.BatchResultToken:1
//com.google.android.gms.common.api.DataBufferResponse:2
//com.google.android.gms.common.api.GoogleApi:1
//com.google.android.gms.common.api.OptionalPendingResult:1
//com.google.android.gms.common.api.PendingResult:1
//com.google.android.gms.common.api.PendingResults.zaa:1
//com.google.android.gms.common.api.PendingResults.zab:1
//com.google.android.gms.common.api.PendingResults.zac:1
//com.google.android.gms.common.api.ResolvingResultCallbacks:1
//com.google.android.gms.common.api.Response:1
//com.google.android.gms.common.api.ResultCallback:1
//com.google.android.gms.common.api.ResultCallbacks:1
//com.google.android.gms.common.api.ResultTransform:2
//com.google.android.gms.common.api.TransformedResult:1
//com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl:2
//com.google.android.gms.common.api.internal.BaseImplementation.ResultHolder:1
//com.google.android.gms.common.api.internal.BasePendingResult:1
//com.google.android.gms.common.api.internal.BasePendingResult.CallbackHandler:1
//com.google.android.gms.common.api.internal.DataHolderNotifier:1
//com.google.android.gms.common.api.internal.GoogleApiManager.zaa:1
//com.google.android.gms.common.api.internal.ListenerHolder:1
//com.google.android.gms.common.api.internal.ListenerHolder.ListenerKey:1
//com.google.android.gms.common.api.internal.ListenerHolder.Notifier:1
//com.google.android.gms.common.api.internal.OptionalPendingResultImpl:1
//com.google.android.gms.common.api.internal.PendingResultFacade:2
//com.google.android.gms.common.api.internal.RegisterListenerMethod:2
//com.google.android.gms.common.api.internal.RegistrationMethods:2
//com.google.android.gms.common.api.internal.RegistrationMethods.Builder:2
//com.google.android.gms.common.api.internal.RemoteCall:2
//com.google.android.gms.common.api.internal.TaskApiCall:2
//com.google.android.gms.common.api.internal.TaskApiCall.Builder:2
//com.google.android.gms.common.api.internal.UnregisterListenerMethod:2
//com.google.android.gms.common.api.internal.zabp:1
//com.google.android.gms.common.api.internal.zacd:1
//com.google.android.gms.common.api.internal.zacm:1
//com.google.android.gms.common.api.internal.zad:1
//com.google.android.gms.common.api.internal.zae:1
//com.google.android.gms.common.api.internal.zag:1
//com.google.android.gms.common.api.internal.zai:1
//com.google.android.gms.common.api.internal.zaw:1
//com.google.android.gms.common.config.GservicesValue:1
//com.google.android.gms.common.data.AbstractDataBuffer:1
//com.google.android.gms.common.data.DataBuffer:1
//com.google.android.gms.common.data.DataBufferIterator:1
//com.google.android.gms.common.data.DataBufferSafeParcelable:1
//com.google.android.gms.common.data.EntityBuffer:1
//com.google.android.gms.common.data.Freezable:1
//com.google.android.gms.common.data.SingleRefDataBufferIterator:1
//com.google.android.gms.common.internal.BaseGmsClient:1
//com.google.android.gms.common.internal.BaseGmsClient.zzc:1
//com.google.android.gms.common.internal.GmsClient:1
//com.google.android.gms.common.internal.LegacyInternalGmsClient:1
//com.google.android.gms.common.internal.PendingResultUtil.ResultConverter:2
//com.google.android.gms.common.internal.SimpleClientAdapter:1
//com.google.android.gms.common.internal.service.zag:1
//com.google.android.gms.common.server.response.FastJsonResponse.Field:2
//com.google.android.gms.common.server.response.FastJsonResponse.FieldConverter:2
//com.google.android.gms.common.server.response.FastParser:1
//com.google.android.gms.common.server.response.FastParser.zaa:1
//com.google.android.gms.common.util.BiConsumer:2
//com.google.android.gms.common.util.Predicate:1
//com.google.android.gms.dynamic.DeferredLifecycleHelper:1
//com.google.android.gms.dynamic.ObjectWrapper:1
//com.google.android.gms.dynamic.OnDelegateCreatedListener:1
//com.google.android.gms.dynamic.RemoteCreator:1
//com.google.android.gms.internal.location.zzbj:1
//com.google.android.gms.location.ActivityRecognition.zza:1
//com.google.android.gms.location.LocationServices.zza:1
//com.google.android.gms.tasks.Continuation:2
//com.google.android.gms.tasks.OnCompleteListener:1
//com.google.android.gms.tasks.OnSuccessListener:1
//com.google.android.gms.tasks.SuccessContinuation:2
//com.google.android.gms.tasks.Task:1
//com.google.android.gms.tasks.TaskCompletionSource:1
//com.google.android.gms.tasks.zzc:2
//com.google.android.gms.tasks.zze:2
//com.google.android.gms.tasks.zzg:1
//com.google.android.gms.tasks.zzi:1
//com.google.android.gms.tasks.zzk:1
//com.google.android.gms.tasks.zzm:1
//com.google.android.gms.tasks.zzo:2
//com.google.android.gms.tasks.zzq:1
//com.google.android.gms.tasks.zzr:1
//com.google.android.gms.tasks.zzu:1

