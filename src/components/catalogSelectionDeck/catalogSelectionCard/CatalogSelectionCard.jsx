import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import { Badge, Card, Form } from '@edx/paragon';
import { QUERY_TITLE_REFINEMENT } from '../../../constants';

export const CardCheckbox = ({ queryTitle }) => (
  <Form.Radio className="mt-3 mr-3" checked onChange={() => {}}>
    {/* span here because radio buttons require children  */}
    <span />
  </Form.Radio>
);

CardCheckbox.propTypes = {
  queryTitle: PropTypes.string.isRequired,
};

const CatalogSelectionCard = ({
  queryTitle,
  className,
  badgeVariant,
  badge,
  label,
  cardBody,
  labelDetail,
}) => (
  <Card>
    <Card.Header
      title={(
        <span>
          <Badge className={className} variant={badgeVariant}>
            {badge}
          </Badge>
          <div>{label}</div>
        </span>
        )}
      subtitle={labelDetail}
      actions={<CardCheckbox queryTitle={queryTitle} />}
    />
    <Card.Section>{cardBody}</Card.Section>
  </Card>
);

CatalogSelectionCard.defaultProps = {
  className: '',
};

CatalogSelectionCard.propTypes = {
  className: PropTypes.string,
  badgeVariant: PropTypes.string.isRequired,
  badge: PropTypes.string.isRequired,
  cardBody: PropTypes.string.isRequired,
  queryTitle: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  labelDetail: PropTypes.string.isRequired,
};

export default CatalogSelectionCard;
