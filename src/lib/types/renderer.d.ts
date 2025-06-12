import type { Snippet, SvelteComponent } from "svelte";

export interface ParagraphBlockNode {
  type: "paragraph";
  children: DefaultInlineNode[];
}

export interface QuoteBlockNode {
  type: "quote";
  children: DefaultInlineNode[];
}

export interface CodeBlockNode {
  type: "code";
  children: DefaultInlineNode[];
}

export interface HeadingBlockNode {
  type: "heading";
  level: 1 | 2 | 3 | 4 | 5 | 6;
  children: DefaultInlineNode[];
}

export interface LinkInlineNode {
  type: "link";
  url: string;
  children: TextInlineNode[];
}

export interface ListItemInlineNode {
  type: "list-item";
  children: DefaultInlineNode[];
}

export interface ImageBlockNode {
  type: "image";
  image: {
    name: string;
    alternativeText?: string | null;
    url: string;
    caption?: string | null;
    width: number;
    height: number;
    formats?: Record<string, unknown>;
    hash: string;
    ext: string;
    mime: string;
    size: number;
    previewUrl?: string | null;
    provider: string;
    provider_metadata?: unknown | null;
    createdAt: string;
    updatedAt: string;
  };
  children: [{ type: "text"; text: "" }];
}

export interface ListBlockNode {
  type: "list";
  format: "ordered" | "unordered";
  children: (ListItemInlineNode | ListBlockNode)[];
}

export interface TextInlineNode {
	type: "text";
	text: string;
	bold?: boolean;
	italic?: boolean;
	underline?: boolean;
	strikethrough?: boolean;
	code?: boolean;
}


type BlocksComponents = {
	paragraph: () => string;
	quote: () => string;
	code: () => string;
	heading: (level: number) => string;
	link: () => string;
	list: (format: string) => string;
	'list-item': () => string;
	image: () => string;
};

type ModifiersComponents = {
	bold: string;
	italic: string;
	underline: string;
	strikethrough: string;
	code: string;
};

export type ComponentsContextValue = {
	blocks: BlocksComponents;
	modifiers: ModifiersComponents;
	missingBlockTypes: string[];
	missingModifierTypes: string[];
};
// export interface ComponentsContextValue {
//     blocks: BlocksComponents;
//     modifiers: ModifiersComponents;
//     missingBlockTypes: string[];
//     missingModifierTypes: string[];
//   }

export type Modifier = Exclude<keyof TextInlineNode, "type" | "text">;

export type TextInlineProps = Omit<TextInlineNode, "type">;

export type DefaultInlineNode = TextInlineNode | LinkInlineNode;

export type RootNode =
  | ParagraphBlockNode
  | QuoteBlockNode
  | CodeBlockNode
  | HeadingBlockNode
  | ListBlockNode
  | ImageBlockNode;

export type NonTextInlineNode =
  | Exclude<DefaultInlineNode, TextInlineNode>
  | ListItemInlineNode;

export type GetPropsFromNode<T> = Omit<T, "type" | "children"> & {
  children?: Snippet;
  plainText?: T extends { type: "code" | "heading" } ? string : never;
};

// export type ModifiersComponents = {
//   [K in Modifier]: SvelteComponent<{ children: Snippet }>;
// };

// export type BlocksComponents = {
//   [K in Node["type"]]: SvelteComponent<
//     GetPropsFromNode<Extract<Node, { type: K }>>
//   >;
// };

export type Node = RootNode | NonTextInlineNode;
