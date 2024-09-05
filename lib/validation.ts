import { z } from "zod";

export const UserFormValidation = z.object({
    name: z
        .string()
        .min(2, "最少俩个字符")
        .max(50, "最多50个字符"),
    email: z.string().email("无效的邮箱||账户不存在"),
    phone: z
        .string()
        .refine((phone) => /^\+\d{10,15}$/.test(phone), "无效的电话号码无效的电话号码||格式错误"),
});

export const PatientFormValidation = z.object({
    name: z
        .string()
        .min(2, "最少俩个字符")
        .max(50, "最多50个字符"),
    email: z.string().email("无效的邮箱||账户不存在"),
    phone: z
        .string()
        .refine((phone) => /^\+\d{10,15}$/.test(phone), "无效的电话号码||格式错误"),
    birthDate: z.coerce.date(),
    gender: z.enum(["男性", "女性", "其他"]),
    address: z
        .string()
        .min(5, "地址最少5个字符")
        .max(500, "地址最多500个字符"),
    occupation: z
        .string()
        .min(2, "职业最少2个字符")
        .max(500, "职业最多500个字符"),
    emergencyContactName: z
        .string()
        .min(2, "联系人姓名至少2个字符")
        .max(50, "联系人最多50个字符"),
    emergencyContactNumber: z
        .string()
        .refine(
            (emergencyContactNumber) => /^\+\d{10,15}$/.test(emergencyContactNumber),
            "无效电话号码||格式错误"
        ),
    primaryPhysician: z.string().min(2, "至少选择一名医生"),
    insuranceProvider: z
        .string()
        .min(2, "保险最少2个字符")
        .max(50, "保险最多50个字符"),
    insurancePolicyNumber: z
        .string()
        .min(2, "策略编号最少2个字符")
        .max(50, "策略编号最多50个字符"),
    allergies: z.string().optional(),
    currentMedication: z.string().optional(),
    familyMedicalHistory: z.string().optional(),
    pastMedicalHistory: z.string().optional(),
    identificationType: z.string().optional(),
    identificationNumber: z.string().optional(),
    identificationDocument: z.custom<File[]>().optional(),
    treatmentConsent: z
        .boolean()
        .default(false)
        .refine((value) => value === true, {
            message: "你必须同意治疗才能继续",
        }),
    disclosureConsent: z
        .boolean()
        .default(false)
        .refine((value) => value === true, {
            message: "你必须同意才能下一步",
        }),
    privacyConsent: z
        .boolean()
        .default(false)
        .refine((value) => value === true, {
            message: "你必须接受才能继续",
        }),
});

export const CreateAppointmentSchema = z.object({
    primaryPhysician: z.string().min(2, "选择一名医生"),
    schedule: z.coerce.date(),
    reason: z
        .string()
        .min(2, "原因最少2个字符")
        .max(500, "原因最多500个字符"),
    note: z.string().optional(),
    cancellationReason: z.string().optional(),
});

export const ScheduleAppointmentSchema = z.object({
    primaryPhysician: z.string().min(2, "选择一名医生"),
    schedule: z.coerce.date(),
    reason: z.string().optional(),
    note: z.string().optional(),
    cancellationReason: z.string().optional(),
});

export const CancelAppointmentSchema = z.object({
    primaryPhysician: z.string().min(2, "选择一名医生"),
    schedule: z.coerce.date(),
    reason: z.string().optional(),
    note: z.string().optional(),
    cancellationReason: z
        .string()
        .min(2, "原因最少2个字符")
        .max(500, "原因最多500个字符"),
});

export function getAppointmentSchema(type: string) {
    switch (type) {
        case "create":
            return CreateAppointmentSchema;
        case "cancel":
            return CancelAppointmentSchema;
        default:
            return ScheduleAppointmentSchema;
    }
}