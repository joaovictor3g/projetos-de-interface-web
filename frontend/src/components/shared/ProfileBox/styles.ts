import styled from "styled-components";
import bannerImg from "./banner.png";

export const ProfileBoxContainer = styled.div`
  background-image: url(${bannerImg});
  background-position: top;
  background-repeat: no-repeat;
  background-color: ${({ theme }) => theme.colors.gray2};
  background-size: 100% 72px;
  max-width: 300px;
  width: 100%;

  border-radius: 8px;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;

  .avatar {
    margin-top: 36px;
  }

  .edit-profile {
    width: 100%;
    border-top: 1px solid ${({ theme }) => theme.colors.gray3};
    padding: 1.5rem;

    display: flex;
    align-items: center;
    justify-content: center;

    button {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 10px;

      background-color: transparent;
      border: 1px solid ${({ theme }) => theme.colors.greenLight};
      border-radius: 8px;

      color: ${({ theme }) => theme.colors.greenLight};
      font-weight: 700;
      font-size: 1rem;
      line-height: 19px;

      width: 100%;
      padding: 1rem;
      transition: background-color 0.2s, color 0.2s;

      &:hover {
        background-color: ${({ theme }) => theme.colors.greenLight};
        color: ${({ theme }) => theme.colors.white};
      }
    }
  }
`;
