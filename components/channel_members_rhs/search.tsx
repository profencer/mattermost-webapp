// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import React from 'react';
import {FormattedMessage, useIntl} from 'react-intl';

import styled from 'styled-components';

import Input from '../widgets/inputs/input/input';

interface Props {
    className?: string;
    terms: string;
    onInput: (terms: string) => void;
}

const SearchBar = ({className, terms, onInput}: Props) => {
    const {formatMessage} = useIntl();
    return (
        <div className={className}>
            <Input
                value={terms}
                onInput={(ev) => onInput(ev.currentTarget.value)}
                inputPrefix={<i className={'icon icon-magnify'}/>}
                label={formatMessage({
                    id: 'channel_members_rhs.search_bar.search_members_label',
                    defaultMessage: 'Search members',
                })}
                inputSuffix={terms.length > 0 ? (
                    <button
                        className='style--none'
                        onClick={() => onInput('')}
                    >
                        <i className={'icon icon-close-circle'}/>
                    </button>
                ) : <></>}
            />
        </div>
    );
};

export default styled(SearchBar)`
    display: flex;
    padding: 0px 20px 12px;
`;
