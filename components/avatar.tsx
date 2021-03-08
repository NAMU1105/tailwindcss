import React, { ReactNode } from "react";
import styled, { css } from "styled-components";
import tw from "twin.macro";

const AvatarGroupWrapper = styled.div.attrs({
  className: "flex",
})`
  & > div {
    margin-left: -6px;
    & > img,
    span {
      border: 3px solid white;
    }
  }
`;

const BADGE_VARIANT_MAPS = {
  active: "bg-green-500",
  busy: "bg-red-500 ",
  inActive: "bg-gray-500",
};
const SIZE_VARIANT_MAPS = {
  sm: "w-10 h-10",
  md: "w-20 h-20",
  lg: "w-40 w-40",
};

type AvatarProps = {
  badge?: "active" | "busy" | "inActive";
  size?: "sm" | "md" | "lg";
  src: string | null;
  extra?: string;
};
type GroupAvatarProps = {
  count?: number;
  size?: number;
  children: ReactNode;
};

export const AvatarGroup: React.FC<GroupAvatarProps> = (
  props: GroupAvatarProps
) => {
  return <AvatarGroupWrapper>{props.children}</AvatarGroupWrapper>;
};

export const Avatar: React.FC<AvatarProps> = (props: AvatarProps) => {
  let elem;
  if (props.badge) {
    elem = (
      <>
        <span
          className={`absolute w-4 h-4 rounded-full -top-1 -right-1 ${
            BADGE_VARIANT_MAPS[props.badge]
          }`}
        ></span>
        <img src={props.src} className="w-full rounded-full h-inherit"></img>
      </>
    );
  } else {
    elem = (
      <img src={props.src} className="w-full rounded-full h-inherit"></img>
    );
  }

  return (
    <div className={`relative ${SIZE_VARIANT_MAPS[props.size]}`}>
      {props.extra ? (
        <span className="block font-bold text-xl pt-1 w-full rounded-full h-inherit bg-gray-500 text-white">
          {props.extra}
        </span>
      ) : (
        elem
      )}
    </div>
  );
};

Avatar.defaultProps = {
  size: "sm",
};
