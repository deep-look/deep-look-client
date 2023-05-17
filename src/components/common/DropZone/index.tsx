import { ChangeEvent, useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { Flex, Text } from '@deeplook/components/Common';
import { theme } from '@deeplook/styles/theme';
import { CardImage } from 'react-bootstrap-icons';

export interface ProfileImageProps {
    value: any;
    setValue: any;
}

export const ProfileImage = ({ value, setValue, ...props }: ProfileImageProps) => {
    // const handleImageChange = async (e: ChangeEvent<HTMLInputElement>) => {
    //     if (e.target.files) {
    //         const url = await getPresignedUrl({
    //             userId: user.userId,
    //             path: 'PROFILE',
    //         });
    //         const slicedUrl = url.slice(0, url.indexOf('?x-amz'));

    //         if (url) {
    //             const statusCode = await uploadFile({
    //                 url: url,
    //                 file: e.target.files[0],
    //             });
    //             if (statusCode === 200) {
    //                 setImage(slicedUrl);
    //                 setTrashIconColor(`${theme.palette.Gray40}`);
    //                 setValue('profileImage', slicedUrl);
    //             }
    //         }
    //     }
    // };

    // useEffect(() => {
    //     if (props.isModify) {
    //         setValue('profileImage', user.profileImage);
    //         setImage(user.profileImage);
    //         setTrashIconColor(`${theme.palette.Gray40}`);
    //     } else {
    //         setValue(
    //             'profileImage',
    //             'https://s3.ap-northeast-2.amazonaws.com/prefolio.net-image/default/default_profile.png'
    //         );
    //     }
    // }, []);

    // const handleTrashIconClick = () => {
    //     setImage('https://s3.ap-northeast-2.amazonaws.com/prefolio.net-image/default/default_profile.png');
    //     setTrashIconColor(`${theme.palette.Gray20}`);
    //     setValue(
    //         'profileImage',
    //         'https://s3.ap-northeast-2.amazonaws.com/prefolio.net-image/default/default_profile.png'
    //     );
    // };

    return (
        <Flex direction="column" align="flex-start" gap={36}>
            <Flex direction="column" gap={30}>
                <Image alt="프로필 이미지" src={'image'} />

                <Label>
                    <input
                        type="file"
                        id="profileImage"
                        style={{ display: 'none' }}
                        // onChange={handleImageChange}
                        accept="image/x-png, image/gif, image/jpeg"
                    />
                    <CardImage />
                    <Text typo="Button" color="White">
                        이미지 업로드
                    </Text>
                </Label>
            </Flex>
        </Flex>
    );
};

const Image = styled.img`
    height: 180px;
    width: 180px;
    border-radius: 100%;
    background-color: transparent;
`;

const Label = styled.label`
    color: white;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;

    position: absolute;
`;
