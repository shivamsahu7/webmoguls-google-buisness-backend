export declare const createUserDto: import("@sinclair/typebox").TObject<{
    name: import("@sinclair/typebox").TString;
    email: import("@sinclair/typebox").TString;
    password: import("@sinclair/typebox").TString;
}>;
export declare const updateUserDto: import("@sinclair/typebox").TObject<{
    name: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    email: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    isActive: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TBoolean>;
}>;
export declare const userIdParam: import("@sinclair/typebox").TObject<{
    id: import("@sinclair/typebox").TNumber;
}>;
//# sourceMappingURL=dto.d.ts.map