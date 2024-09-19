import React from 'react';

interface MaskComponentProps {
    maskType: {
        treatmentConsent?: boolean;
        disclosureConsent?: boolean;
        privacyConsent?: boolean;
    };
}

const MaskComponent: React.FC<MaskComponentProps> = ({ maskType }) => {
    return (
        <div
            className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
            style={{ backdropFilter: 'blur(5px)' }}
        >
            {maskType.treatmentConsent && (
                <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                    <p>这里是关于治疗同意的详细信息。</p>
                    {/* 更多内容... */}
                </div>
            )}
            {maskType.disclosureConsent && (
                <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                    <p>这里是关于信息使用的详细信息。</p>
                    {/* 更多内容... */}
                </div>
            )}
            {maskType.privacyConsent && (
                <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                    <p>这里是关于隐私条款的详细信息。</p>
                    {/* 更多内容... */}
                </div>
            )}
        </div>
    );
};

export default MaskComponent;

