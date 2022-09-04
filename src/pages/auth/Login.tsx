import React, { useEffect, useState } from "react";
import { fetchUsers } from '../../store/reducers/ActionCreators';
import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import { Button, Col, Pagination, Row, Space, Spin, Typography } from "antd";
const { Title, Paragraph } = Typography;

const Login = () => {
  const dispatch = useAppDispatch();
  const [limit, setLimit] = useState(3);
  const [page, setPage] = useState(1);
  const [totalCount, setTotalCount] = useState(0);
  const { resp, isLoading, error } = useAppSelector(state => state.usersReducer);

  return (
    <div>
      Login
    </div>
  );
};

export default Login;
