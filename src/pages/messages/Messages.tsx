import React, { useEffect, useState } from "react";
import { fetchUsers } from '../../store/reducers/ActionCreators';
import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import { Button, Col, Pagination, Row, Space, Spin, Typography } from "antd";
const { Title, Paragraph } = Typography;

const Messages = () => {
  const dispatch = useAppDispatch();
  const [limit, setLimit] = useState(3);
  const [page, setPage] = useState(1);
  const [totalCount, setTotalCount] = useState(0);
  const { resp, isLoading, error } = useAppSelector(state => state.usersReducer);
  
  useEffect(() => {
    dispatch(fetchUsers({limit, page}));
  }, [page]);

  useEffect(() => {
    setTotalCount(() => resp.headers['x-total-count']);
  }, [resp]);

  return (
    <div>
      Messages
    </div>
  );
};

export default Messages;
