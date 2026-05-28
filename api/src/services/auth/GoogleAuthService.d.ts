export declare class GoogleAuthService {
    execute(token: string): Promise<{
        user: {
            id: string;
            email: string;
            name: string;
            googleId: string;
            avatar: string | null;
            createdAt: Date;
        };
        token: string;
    }>;
}
//# sourceMappingURL=GoogleAuthService.d.ts.map