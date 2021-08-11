// Copyright (C) 2021 Intel Corporation
//
// SPDX-License-Identifier: MIT

import './styles.scss';
import React, { useRef } from 'react';
import { Row, Col } from 'antd/lib/grid';
import Text from 'antd/lib/typography/Text';

import { FormInstance } from 'antd/lib/form';
import CreateCloudStorageForm from './cloud-storage-form';

export default function CreateCloudStoragePageComponent(): JSX.Element {
    const formRef = React.createRef<FormInstance>();
    const shouldShowCreationNotification = useRef(false);
    return (
        <Row justify='center' align='top' className='cvat-attach-cloud-storage-form-wrapper'>
            <Col md={20} lg={16} xl={14} xxl={9}>
                <Text className='cvat-title'>Cloud storage form</Text>
                <CreateCloudStorageForm
                    formRef={formRef}
                    shouldShowCreationNotification={shouldShowCreationNotification}
                />
            </Col>
        </Row>
    );
}